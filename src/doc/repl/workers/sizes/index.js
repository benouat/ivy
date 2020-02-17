
let fulfil_ready;

const ready = new Promise(f => {
	fulfil_ready = f;
});

let packagesUrl;

self.addEventListener('message', async event => {
    const { id, type = 'sizes', compiled, source } = event.data;
    packagesUrl = event.data.packagesUrl;

    switch(type) {
        case "init":
            importScripts(`${packagesUrl}/terser@4.6.3/dist/bundle.min.js`)
            importScripts(`${packagesUrl}/pako@1.0.11/dist/pako_deflate.min.js`)
            fulfil_ready();
            break;
        
        case "sizes":
            await ready;
			postMessage({
				id,
				sizes: getSizes(compiled, source, { gzipLevel: 6 })
			}, "*");
			break;
    }
});

function getSizes(compiledCode, source, options) {
    return {
        source: 0,
        compiled: 0,
        minified: 0,
        compressed: 0
    }
}