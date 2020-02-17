import * as rollup from 'rollup/dist/rollup.browser.es.js';
import ivy from "../../../../../bin/rollup-plugin-ivy";

self.addEventListener('message', event => {
    switch(event.data.type) {
        case "bundle":
            const { uid, source } = event.data;
            if (source.length === 0) {
                return;
            }
            setTimeout(async () => {
                const result = await bundle(uid, source)
            })
            break;
    }
});

let cache = {};

async function getBundle(uid, cache, lookup) {
    let bundle;

	const allWarnings = [];
    const newCache = {};

    const ivyPlugin = {
        async transform(code, id) {
            if (!/\.ts$/.test(id)) {
                return null;
            }
            const name = id.split('/').pop().split('.')[0];

            const result = cache[id] && cache[id].code === code
                ? cache[id].result
                : await process(code, { filePath: id });
            
            newCache[id] = { code, result };

            return result;
        }
    }
    
    try {
        bundle = rollup.rollup({
            plugins: [
                ivy
            ],
            inlineDynamicImports: true,
            onwarn(warning) {
				allWarnings.push({
					message: warning.message
				});
			}
        });
        return { bundle, cache: newCache, allWarnings }
    } catch(error) {
        return { error, cache: newCache, allWarnings }
    }
}

async function bundle(uid, source) {
    console.clear();
    console.log(`running Ivy compiler version %c${'0.0.0'}`, 'font-weight: bold');

    let generated;
    let error;

    try {
        generated = getBundle(uid, cache, source);
        if (generated.error) {
            throw generated.error;
        }

        cache = generated.cache;

        const generatedResult = (await generated.bundle.generate({
			format: 'iife',
			name: 'ivyExample',
			exports: 'named',
			sourcemap: true
        })).output[0];

        return {
            uid,
            code: generatedResult,
            error: null
        }
    } catch(err) {
        console.error(err);
        const e = error || err;
        delete e.toString;

        return {
			uid,
			code: null,
			error: Object.assign({}, e, {
				message: e.message,
				stack: e.stack
			})
		};
    }
}