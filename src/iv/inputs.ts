import { API, defaultParam, required, IvElement, io, decorator } from ".";

const VALUE = "value",
    CHECKED = "checked",
    DATA = "data",
    SUPPORTED_TYPES = ["text", "radio", "checkbox", "number"],
    PASSIVE = { passive: true }

@API class Value {
    @required @defaultParam @io data: any;
    @required $targetElt: IvElement;
    events: string;                     // semi-colon-separated lists of events that should be listened to, on top of change - e.g. "input;focus;blur"
    input2data?: Function;              // default depends on input type
    data2input?: Function;              // default depends on input type
    debounce: number = 0;               // debounce time in ms
}
export const value = decorator(Value, ($api: Value) => {
    let input: any,
        inputType = "",
        lastValue = "",
        debouncer: Debouncer | undefined,
        lastEvents = "",
        listeners: { [key: string]: boolean } = {}; // true if event is being listened to
    function changeHandler(e: Event) {
        // console.log("change", input.checked, input.value)
        if (inputType === "number" && e.type === "input") {
            let d = (e[DATA]);
            if (d === "e" || d === "E" || d === "-" || d === "+") {
                return; // we cannot read the input value otherwise it will erase the input
            }
        }
        if ($api.debounce <= 0) {
            updateData();
        } else {
            if (!debouncer) {
                debouncer = new Debouncer("@value error");
            }
            debouncer.duration = $api.debounce!;
            debouncer.process(updateData);
        }
    }
    function updateData() {
        let v: any;
        if (inputType === "text" || inputType === "number") {
            v = input[VALUE];
        } else if (inputType === "checkbox") {
            v = input[CHECKED];
        } else if (inputType === "radio") {
            if (input[CHECKED]) {
                v = input[VALUE];
            } else {
                return;
            }
        }
        $api.data = $api.input2data!(v);
    }
    return {
        $init() {
            input = $api.$targetElt;
            if (input.tagName !== "INPUT") {
                throw "@value can only be used on input elements";
            }
            inputType = input.getAttribute("type");
            if (SUPPORTED_TYPES.indexOf(inputType) === -1) {
                throw "Invalid input type '" + inputType + "': @value can only be used on types '" + SUPPORTED_TYPES.join("', '") + "'";
            }
            input.addEventListener("change", changeHandler, PASSIVE);
        },
        $render() {
            if ($api.input2data === undefined) {
                $api.input2data = (v: any) => {
                    if (inputType === "number") {
                        if (v === "") {
                            return 0; // todo: defaultValue
                        }
                        try {
                            v = parseFloat(v);
                        } catch (e) {
                            console.log("@value conversion error: ", e);
                            return 0; // todo: defaultValue
                        }
                    }
                    return v;
                }
            }
            if ($api.data2input === undefined) {
                $api.data2input = noop;
            }
            if (lastValue !== $api.data) {
                // update the value in the field
                lastValue = $api.data;
                let val = $api.data2input(lastValue);
                if (inputType === "text" || inputType === "number") {
                    input[VALUE] = val;
                } else if (inputType === "checkbox") {
                    input[CHECKED] = !!val;
                } else if (inputType === "radio") {
                    input[CHECKED] = (val === input[VALUE]);
                }
            }
            if (lastEvents !== $api.events) {
                // unregister old events that are not used any more
                let newEvents = $api.events.split(";"), oldEvents = lastEvents.split(";");
                for (let t of oldEvents) {
                    if (t === "change") continue; // change cannot be removed
                    if (newEvents.indexOf(t) < 0 && listeners[t]) {
                        input.removeEventListener(t, changeHandler, PASSIVE);
                        listeners[t] = false;
                    }
                }

                // register to new events
                for (let t of newEvents) {
                    if (t === "change") continue; // change is already added
                    if (!listeners[t]) {
                        input.addEventListener(t, changeHandler, PASSIVE);
                        listeners[t] = true;
                    }
                }
                lastEvents = $api.events;
            }
        },
        $dispose() {
            if (input) {
                input.removeEventListener("change", changeHandler);

                if (lastEvents !== "") {
                    let oldEvents = lastEvents.split(";");
                    for (let t of oldEvents) {
                        if (t === "change") continue; // change already removed
                        input.removeEventListener(t, changeHandler, PASSIVE);
                    }
                }
                lastEvents = "";
                debouncer = undefined;
            }
        }
    }
});

export class Debouncer {
    private timeoutId: any = null;
    duration: number = 100;

    constructor(public errContext = "Error in callback") { }

    process(cb: Function) {
        if (this.duration <= 0) {
            runCallback(cb, this.errContext);
        } else {
            if (this.timeoutId !== null) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.timeoutId = null;
                runCallback(cb, this.errContext);
            }, this.duration);
        }
    }
}

function runCallback(cb: Function, errorContext: string) {
    try {
        cb();
    } catch (e) {
        throw "Debounce - " + errorContext + "\n" + (e.message ? e.message : e);
    }
}

function noop(v: any) {
    return v;
};