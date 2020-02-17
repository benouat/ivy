import { NavigationState } from '../nav';
import { template, API, required, IvElement, decorator, defaultParam, Controller } from '../../iv';
import { Router, Route } from '../../iv/router';

import repl from './repl';


const embedded = false;
const title = "Hello world";
const source = `import { template } from "iv";

// Hello world example
const hello = template(\`(name:string) => {
    <div class="hello">
        # Hello {name}! #
    </div>
}\`);
 
hello().attach(document.body).render({ name: "World" });
`;

const content =  template(`() => {    
    <div class="repl-page">    
        <*repl {title} {source} {embedded} />
    </div>
}`, repl, embedded, title, source);

export function loadRoutes(r: Router) {
    r.add({
        "/repl/": (r: Route, ns: NavigationState) => {
            ns.pageContent = content;
        }
    });
}