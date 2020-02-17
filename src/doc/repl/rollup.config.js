import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.ROLLUP_WATCH;

export default ['compiler', 'bundler', 'sizes'].map(name => ({
    input: `src/doc/repl/workers/${name}/index.js`,
    output: {
        file: `public/doc/repl/${name}.worker.js`,
        format: 'iife'
    },
    plugins: [
        resolve(),
        json(),
        !dev && terser()
    ]
}));