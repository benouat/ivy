let uid = 0;

export default class Sizes {
    worker;
    handlers;

    constructor(workersUrl: string, packagesUrl) {
        this.worker = new Worker(`${workersUrl}/sizes.worker.js`);
        this.worker.postMessage({type: "init", packagesUrl});
        this.handlers = new Map();
        
        this.worker.addEventListener("message", event => {
            const handler = this.handlers.get(event.data.uid);
            if (handler) {
                handler(event.data);
                this.handlers.delete(event.data.uid);
            }
        });
    }

    getSizes(compiled, source) {
        return new Promise(fulfil => {
            this.handlers.set(uid, fulfil);
            
            this.worker.postMessage({
                uid,
                compiled,
                source
            });

            uid += 1;
        });
    }

    dispose() {
		this.worker.terminate();
	}
}