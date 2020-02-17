let uid = 0;

export default class Compiler {
    worker;
    handlers;

    constructor(workersUrl: string, ivyUrl) {
        this.worker = new Worker(`${workersUrl}/compiler.worker.js`);
        this.handlers = new Map();
        
        this.worker.addEventListener("message", event => {
            const handler = this.handlers.get(event.data.uid);
            if (handler) {
                handler(event.data);
                this.handlers.delete(event.data.uid);
            }
        });
    }

    compile(source) {
        return new Promise(fulfil => {
            this.handlers.set(uid, fulfil);
            
            this.worker.postMessage({
                uid,
                source,
            });

            uid += 1;
        });
    }

    dispose() {
		this.worker.terminate();
	}
}