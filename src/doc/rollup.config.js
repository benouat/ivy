// import nodePolyfills from 'rollup-plugin-node-polyfills';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import json from '@rollup/plugin-json';
// import alias from '@rollup/plugin-alias';
import copy from 'rollup-plugin-copy';
import ivy from '../../bin/rollup-plugin-ivy';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import { extract } from '../../bin/rollup-plugin-ivy-extract';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/doc/main.ts',
    output: {
        name: 'main',
        dir: 'public',
        format: 'esm', // iife (immediately-invoked function expression) incompatible with code-splitting modules
        sourcemap: false
    },
    plugins: [
        css({ // must be 1st to remove css imports - those files are watched
            output: 'public/styles.css'
        }),
        // json({ compact: true, namedExports: false }),
        ivy({
            preProcessors: { "@@extract": extract }
        }),
        typescript({
            clean: production,
            objectHashIgnoreUnknownHack: true,
            typescript: require('typescript'),
            tsconfig: "tsconfig.rollup.json"
        }),
        resolve({
            browser: true
        }),
        commonjs(),
        copy({
            targets: [{ src: ['src/doc/index.html'], dest: 'public' }] // warning: those files are not watched!
        }),
        production && terser() // minify, but only in production
    ]
};
