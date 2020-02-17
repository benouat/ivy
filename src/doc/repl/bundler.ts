let uid = 0;

export default class Bundler {
    worker;
    handlers;

    constructor(workersUrl: string, packagesUrl: string, onstatus) {
        this.worker = new Worker(`${workersUrl}/bundler.worker.js`);
        this.worker.postMessage({type: "init", packagesUrl });
        
        this.handlers = new Map();
        
        this.worker.addEventListener("message", event => {
            const handler = this.handlers.get(event.data.uid);
            if (handler) {
                if (event.data.type === 'status') {
					onstatus(event.data.message);
					return;
                }
                
                onstatus(null);
                handler(event.data);
                this.handlers.delete(event.data.uid);
            }
        });
    }

    bundle(source) {
        return new Promise(fulfil => {
            this.handlers.set(uid, fulfil);
            
            this.worker.postMessage({
                uid,
                type: "bundle",
                source,
            });

            uid += 1;
        });
    }

    dispose() {
		this.worker.terminate();
	}
}