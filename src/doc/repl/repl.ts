import './repl.css';
import './codemirror.css'

// import XJS_GRAMMAR from "../../../syntaxes/xjs.tmLanguage.json";
// import { loadWASM } from 'onigasm'
// import { activateLanguage, addGrammar } from 'codemirror-textmate';
// import * as CodeMirror from 'codemirror';

import { template, API, required, IvElement, decorator, defaultParam, Controller } from '../../iv';
import { IvContent, IvTemplate } from '../../iv/types';
import { Data } from '../../trax';
import { IvEventEmitter } from '../../iv/events';

import CodeMirror from './codemirror';

// let _CodeMirror, CodeMirror;
// const codemirror_promise = import('./codemirror');
// codemirror_promise.then(mod => _CodeMirror = mod.default);

const classnames = (...parts) => parts.filter(Boolean).join(" ");
const sleep = (ms) => {
    return new Promise(fulfil => setTimeout(fulfil, ms));
}

// (async () => {
//     console.log(XJS_GRAMMAR);
//     await loadWASM('https://unpkg.com/onigasm/lib/onigasm.wasm');
// })();

@API class DragDecorator {
    @required $targetElt: IvElement;
    orientation = "horizontal";
    @defaultParam @required callback: (event: any) => void;
}

const drag = decorator(DragDecorator, ($api: DragDecorator) => {
    let element;
    let callback;
    const onmousedown = (event) => {
        if (event.which !== 1) {
            return;
        }
        event.preventDefault();
        
        const onmouseup = () => {
            window.removeEventListener('mousemove', callback, false);
            window.removeEventListener('mouseup', onmouseup, false);
            element.dispatchEvent(new CustomEvent("dragend"));
        };

        window.addEventListener('mousemove', callback, false);
        window.addEventListener('mouseup', onmouseup, false);
    }
    
    return {
        $init() {
            element = $api.$targetElt;
            callback = $api.callback; 
            element.addEventListener("mousedown", onmousedown, false)
        },
        $dispose() {
            if (element) {
                element.removeEventListener("mousedown", onmousedown, false);
            }
        }
    }
})

@Data class Panel {
    className: string;
    $content: IvContent;
}

@API class SplitPaneApi {
    fixed: boolean;
    orientation = "horizontal";
    size = 65;
    className = "";
    panelList: Panel[];
    dragging = false;
    dragendEmitter: IvEventEmitter;
}

@Controller class SplitPaneCtrl {
    $api: SplitPaneApi;
    $template: IvTemplate;
    
    // TODO: support inline member initialisation to prevent binding on call
    setSize(event: any) {
        const container = this.$template.query("#container");
        const { top, left, width, height } = container.getBoundingClientRect();

        const size = this.$api.orientation === "horizontal" ? width : height;
        const px = 
            this.$api.orientation === "horizontal"
                ? (event.clientX - left)
                : (event.clientY - top) 
            
        this.$api.size = 100 * px / size;
    }
}

const splitPane = template(`($: SplitPaneCtrl) => {    
    const { panelList, orientation, size, className } = $.$api;
    if (panelList.length !== 2) {
        throw "<*splitPane> must strictly declare 2 <.panel>";
    }
    const [first, second] = panelList;
    const classes = classnames("splitpane", className, orientation);

    const dimension = orientation === "horizontal" ? "width" : "height";

    <div #container class={classes}>
        <div
            class={classnames("panel", first.className)} 
            @content={first.$content}
            style={ dimension + ":" + size + "%;" }
        ></div>
        if (!$.$api.fixed) {
            <div
                class="gutter"
                @onmousedown={() => $.$api.dragging = true}
                @ondragend={() => {$.$api.dragging = false; $.$api.dragendEmitter.emit()}}
                @drag(callback={$.setSize.bind($)} {orientation})
            ></div>
        }
        <div
            class={classnames("panel", second.className)} 
            @content={second.$content}
            style={ dimension + ":" + (100 - size) + "%;" }
        ></div>
    </div>
    if ($.$api.dragging) {
        <div class="mousecatcher"></div>
    }
}`, SplitPaneCtrl, classnames, drag);


const output = template(`(embedded = false, errorsList: string[]) => {
    if (!embedded) {
        <div class="header">
            <a>#Log in to save#</a>
        </div>
    }
    <iframe title="Result" sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"></iframe>
    if (errorsList) {
        <div class="errors">
            for(const error of errorsList) {
                <div># {error} #</div>
            }
        </div>
    }
}`);

const modes = {
    js: {
        name: 'javascript',
        json: false,
        typescript: true
    },
    json: {
        name: 'javascript',
        json: true
    }
};

@API class CodeMirrorEditor {
    @required source: string;
    @required mode = 'js';
    updateEmitter: IvEventEmitter;
    readonly = false;
}

@Controller class CodeMirrorEditorCtrl {
    $api: CodeMirrorEditor;
    $template: IvTemplate;

    editor: any;

    $afterRender() {    
        if (!this.editor) {
            this.createEditor();

            if (!this.$api.readonly) {
                this.editor.on('change', instance => {
                    const value = instance.getValue();
                    this.$api.source = value;
                    this.$api.updateEmitter.emit(value);
                });
            }
            this.editor.refresh();
        }
    }

    $dispose() { 
        if (this.editor) {
            this.editor.toTextArea();
            this.editor = null;
        }
    }

    createEditor() {
        const textarea = this.$template.query("#textarea")        
        if (!textarea) return;

        this.editor = CodeMirror.fromTextArea(textarea, {
            lineWrapping: true,
            indentUnit: 4,
            tabSize: 4,
            value: this.$api.source,
            mode: modes[this.$api.mode] || {
                name: this.$api.mode
            },
            autoCloseBrackets: true,
            autoCloseTags: true,
            readOnly: this.$api.readonly
        });
    }
}

const codeMirrorEditor = template(`($: CodeMirrorEditorCtrl) => {
    <textarea #textarea readonly={$.$api.readonly} tabindex=1 [value]={$.$api.source}></textarea>
}`, CodeMirrorEditorCtrl);

const defaultCompiled = `import { template, ζinit, ζend, ζelt, ζtxt, ζe, ζΔD, ζΔfStr, ζΔp, ζt } from "../../../iv";
 
const hello = (function () {
const ζs0 = {}, ζs1 = ["class", "hello"], ζs2 = [" Hello ", "", "! "];
@ζΔD class ζParams {
    ΔΔname: string; @ζΔp(ζΔfStr) name: string;
}
return ζt("hello", "hello/hello.ts", ζs0, function (ζ, $, $api) {
    let name = $api["name"];
    let ζc = ζinit(ζ, ζs0, 2);
    ζelt(ζ, ζc, 0, 0, "div", 1, 0, ζs1);
    ζtxt(ζ, ζc, 0, 1, 1, 0, ζs2, 1, ζe(ζ, 0, name));
    ζend(ζ, ζc);
}, ζParams);
})();
 
hello().attach(document.body).render({ name: "World" });
`;

const editor = template(`(source: string, title: string, view = "source", embedded = false, workersUrl: string, updateEmitter: IvEventEmitter, errorsList: string[]) => {
    <div class="header">
        if (!embedded) {
            <h3>#{title}#</h3>
        }
        <button
            class={classnames(view === "source" ? "active" : "")}
            @onclick={() => $.view = "source"}
        ># Source #</button>
        <button
            class={classnames(view === "compiled" ? "active" : "")}
            @onclick={() => $.view = "compiled"}
        ># Compiled #</button>
        <button
            class={classnames(view === "sizes" ? "active" : "")}
            @onclick={() => $.view = "sizes"}
        ># Bundle sizes #</button>
    </div>
    if (view === "source") {
        <div class="editor">
            <*codeMirrorEditor {source} mode="js" @onupdate={({data}) => updateEmitter.emit(data)} />
        </div>
    } else if (view === "compiled") {
        <div class="compiled">
            <*codeMirrorEditor readonly source={defaultCompiled} mode="js" />
        </div>
    } else if (view === "sizes") {
        <div class="sizes"># Bundle sizes #</div>
    }
    if (errorsList && view === "source") {
        <div class="errors">
            for(const error of errorsList) {
                <div># {error} #</div>
            }
        </div>
    }
}`, codeMirrorEditor);

const repl = template(`(source = "", title = "", fixed = false, orientation = "horizontal", embedded = false, workersUrl: string, ivyUrl: string) => {
    <*splitPane className="repl" {orientation} {fixed}>
        <.panel className="source">
            <*editor
                source={::source}
                {title}
                {embedded}
                {workersUrl}
                @onupdate={({data}) => console.log(data)}
                errorsList={["'nam' is not defined (5:11)"]}
            />
        </.panel>
        <.panel className="result">
            <*output {embedded} errorsList={["Could not load https://unpkg.com/foo@0.0.1/index.js"]} />
        </.panel>
    </>
}`, splitPane, editor, output);

export default repl;