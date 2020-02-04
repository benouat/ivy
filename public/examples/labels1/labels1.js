!function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function e(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",o="ΔDefFactories",r="ΔIsFactory",s="ΔΔProxy",a="ΔIsProxy",l="ΔCreateProxy",d=!1;function c(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var f=Array.isArray;function u(e,t){e&&(f(e)&&!e[a]?e.forEach(t):t(e))}function h(e,t){if(e&&t){if(e===t)return;if(f(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function v(e,t){return e?f(e)&&!e[a]?(e.push(t),e):[e,t]:t}function p(e){return e&&!0===e[n]?e[i]:0}function m(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function g(e){return!(!e||!0!==e[n])}function w(e){return p(e)%2==1}function b(e,t){var n=c(e);return n&&t?(n.watchers=v(n.watchers,t),w(e)&&$.register(e),t):null}function N(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=h(n.watchers,t))}function x(){return""}x[r]=!0;var y=x;function C(){return null}C[r]=!0;var k=C;function D(){}function P(e,t,n,i,o,r){var s=g(i);if(e.ΔComputeDependencies)console.error("[Trax] @computed properties must not mutate the Data object when calculated");else{i&&!s&&o.ΔCreateProxy&&(s=g(i=o.ΔCreateProxy(i)||i));var a=!1,l=r[n];w(e)?a=l!==i:l!==i&&(A(e),a=!0),a&&(s&&void 0===i&&(i=null),(s||l&&g(l))&&function(e,t,n){I(e,t),O(e,n)}(e,l,i),r[n]=i,V(e,"set",t,l,i))}}function V(e,t,n,i,o){var r=e?e.ΔMd:void 0;if(r&&r.trackers){var a=e[s]||e;u(r.trackers,(function(e){e(a,t,n,i,o)}))}}function A(e){if(g(e)){var t=!0;if(w(e)?t=!1:e.ΔChangeVersion+=1,$.register(e),t){var n=e.ΔMd;n&&n.parents&&u(n.parents,(function(e){A(e)}))}}}function I(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=h(n.parents,e))}}function O(e,t){if(t){var n=c(t);n&&(n.parents=v(n.parents,e))}}D[r]=!0;var R=0,S=function(){function e(){this.id=++R}return e.prototype.register=function(e){var t=this,n=c(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){L();for(var i,o,r=[],s=0;n>s;s++)(o=(i=t[s]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),o.refreshCtxt&&o.watchers&&r.push({dataNode:i,watchers:o.watchers})),o.refreshCtxt=void 0;this.objects=void 0,r.length&&(e?j(r):Promise.resolve().then((function(){j(r)})))}},e}();function j(e){for(var t=function(e){u(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var $=new S;function L(){$.objects&&($=new S)}var E=["push","pop","shift","unshift","splice"],T=/^\d+$/,F=/^\Δ/,M=function(){function e(e){this.ΔTrackable=!0,this.ΔDataFactory=!0,this.ΔChangeVersion=0,this.ΔMd=void 0,this.ΔΔSelf=this,this.ΔIsProxy=!1,this.ΔItemFactory=e}return e.ΔNewProxy=function(t){var n=new Proxy([],new e(t));return n[s]=n,n},e.ΔCreateProxy=function(t,n){if(f(t)){var i=new Proxy(t,new e(n)),o=t.length;for(A(i);o--;)O(i,t[o]);return i}return null},e.prototype.$newItem=function(e){var t=this.ΔItemFactory();return void 0===e&&(e=this.ΔΔList.length),e>-1&&P(this.ΔΔSelf,e,e,t,this.ΔItemFactory,this.ΔΔList),t},e.prototype.$dispose=function(){for(var e=this.ΔΔList,t=e.length;t--;)I(this.ΔΔSelf,e[t]);return e},e.prototype.ΔToString=function(){return"Trax List ["+this.ΔΔList.join(", ")+"]"},e.prototype.set=function(e,t,n){if(this.ΔΔList||(this.ΔΔList=e),t.match(T)){var i=parseInt(t,10);P(this.ΔΔSelf,i,i,n,this.ΔItemFactory,this.ΔΔList)}else t.match(F)&&(this[t]=n);return!0},e.prototype.get=function(e,t){if(this.ΔΔList||(this.ΔΔList=e),t===a)return!0;if("string"===typeof t){if(t.match(F))return this[t];if(t.match(T))return this.ΔΔList[parseInt(t,10)];if("length"===t)return this.ΔΔList.length;if("push"===t)return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=this,o=t.length,r=i.ΔΔList.length,s=0;o>s;s++)i.set(e,r+s+"",t[s])};if("toString"===t)return this.ΔToString;if("function"==typeof e[t])return function(){var e=this,n=E.indexOf(t)>-1;if(n){A(e);for(var i=e.ΔΔList,o=0;i.length>o;o++)I(e,i[o])}var r=e.ΔΔList,s=r[t].apply(r,arguments);if(n){for(i=e.ΔΔList,o=0;i.length>o;o++)O(e,i[o]);V(this,t)}return s}}return t===Symbol.iterator?this.ΔΔList[Symbol.iterator]:this[t]},e}();var K=function(e){function t(){return M.ΔNewProxy(e)}return e=e||k,t[r]=!0,t[l]=function(t){return M.ΔCreateProxy(t,e)},t},X=0,H={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function W(e,t){for(var n=e,i=[];n;){if(n.template){var o=n.template;i.push('\n>> Template: "'+o.templateName+'" - File: "'+o.filePath+'"')}n=n.parentView}H.error("IVY: "+t+i.join(""))}var q=void 0,_=11,z=/^ΔΔ(\w+)Emitter$/,B="ΔIsAPI",U="ΔIsController",Y=0,G=function(){function e(e,t,n,i,o){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=o,this._uid=++Y,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=te(null,null,1,this);var r=this;this.watchCb=function(){r.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==q&&(ke(this.$Class,U)?this.hasCtlClass=!0:ke(this.$Class,B)||g(this.$Class.prototype)||W(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),Q(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&be(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,J(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(m(e,"$template")&&(e.$template=this),m(e,"$logger")){var t=this.view;e.$logger={log:H.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];W(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&J(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)W(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),De(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return W(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(N(this.api,this.watchCb),N(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!g(n)&&(W(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var o in w(t)||L(),this.disconnectObserver(),e)e.hasOwnProperty(o)&&(t[o]=e[o]);var r=!this.forceRefresh,s=i.nodes;if(s&&s[0]&&s[0].attached||(r=!1),r&&p(t)+p(n)>this.lastRefreshVersion&&(r=!1),!r){n&&(this.initialized||(Q(i,n,"$init","controller"),this.initialized=!0),Q(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){W(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&Q(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&L()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=p(t)+p(n)}return this.activeWatch||(b(t,this.watchCb),n&&b(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function J(e,t,n){var i=n.events;if(void 0===i){var o=void 0;for(var r in t)if(r.match(z)){var s=RegExp.$1;o||(o=[]),"function"!=typeof t[s+"Emitter"].init?W(e,"Invalid EventEmitter: "+s+"Emitter"):(o.push(s+"Emitter"),o.push(s),t[s+"Emitter"].init(s,t))}n.events=o||null}else if(null!==i)for(var a=i.length,l=0;a>l;l+=2)t[i[l]].init(i[l+1],t)}function Q(e,t,n,i){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){W(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function Z(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function ee(){return function(e){if(e!==q&&null!==e){var t=!0;return function e(t,n,i){if(t!==q&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var o=0,r=t.nodes;o<r.length;o++){if(!s(r[o]))return!1}}return!0;function s(t){var o=t.kind;if("#fragment"===o)return!!i(t)&&e(t.contentView,n,i);if("#container"!==o)return i(t);if(!i(t))return!1;var r=t,s=r.subKind;if("##block"===s){var a=r.views;if(null!==a)for(var l=0,d=a;l<d.length;l++){var c=d[l];if(!e(c,n,i))return!1}if(n&&r.viewPool)for(var f=0,u=r.viewPool;f<u.length;f++){var h=u[f];if(!e(h,n,i))return!1}}else if("##cpt"===s){var v=r.template;if(null!==v)return e(v.view,n,i)}else"##async"===s&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var o=i.doc.createDocumentFragment();i.domNode=o,i.cmAppends=[function(e){e.domNode?De(e.domNode,o):e.domNode=o}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function te(e,t,n,i){var o={kind:"#view",uid:"view"+ ++X,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:Z,isEmpty:ee};return e?function(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}(o,e,t):o.doc="undefined"!=typeof document?document:null,o}function ne(e,t,n){if(n){var i=oe(e);if(i!==q&&null!==i)for(var o=i.template,r=n.length,s=0;r>s;s++)o.registerLabel(n[s],t)}}function ie(e,t,n){if(0!==n){var i=oe(e);i!==q&&null!==i&&i.template.registerLabel(n,t)}}function oe(e){for(var t=e;t&&!t.template;)t=t.parentView;return t}var re=[];function se(e,t,n,i,o){var r,s=e.nodes[n];if(s&&s.attached||W(e,"Invalid ζview call: container must be attached ("+(s?s.uid:"XX")+") - pview: "+e.uid+" containerIdx: "+n),"#container"===s.kind)if("##block"===s.subKind){var a=(l=s).views;1===o&&(l.insertFn=null),1===o&&l.views.length>1?(l.previousNbrOfViews=a.length,r=a.shift(),l.viewPool.length?l.viewPool=a.concat(l.viewPool):l.viewPool=a,l.views=[r]):(r=l.views[o-1])||(l.viewPool.length>0?(l.insertFn||(l.insertFn=ae(e,l)),function e(t,n,i){if(t.attached)return;if(n(t,!0),t.attached=!0,"#fragment"===t.kind)for(var o=t.firstChild;o;)e(o,n),o=o.nextSibling;else if("#container"===t.kind){var r=t.subKind;if("##cpt"===r){var s=t.template,a=s?s.view.nodes[0]:null;s&&(s.forceRefresh=!0),a&&e(a,n)}else if("##block"===r)for(var l=t.views,d=0;l.length>d;d++)e(l[d].nodes[0],n)}if("#fragment"===t.kind||"#element"===t.kind){var c=t.contentView;c&&e(c.nodes[0],n)}}((r=a[o-1]=l.viewPool.shift()).nodes[0],l.insertFn)):((r=a[o-1]=te(e,l)).nodes=new Array(i),e.cm&&l.cmAppend?r.cmAppends=[l.cmAppend]:e.cm||(r.cmAppends=[ae(e,l)]))),l.lastRefresh=r.lastRefresh=e.lastRefresh}else{var l;(r=(l=s).contentView)||((r=l.contentView=te(e,l)).nodes=new Array(i)),r.lastRefresh=e.lastRefresh}else if("#param"===s.kind){var d=s;(r=d.contentView)||(r=d.contentView=te(e,null),d.viewPool&&(d.viewPool[d.viewInstanceIdx]=r),r.nodes=new Array(i),r.paramNode=d),r.lastRefresh=e.lastRefresh}return r}function ae(e,t){var n=function e(t,n){for(;;){if(n||W(t,"Internal error - findNextSiblingDomNd: nd cannot be undefined"),0===n.idx){if(!n.attached)return{position:"defer",parentDomNd:void 0};if(n.domNode.nodeType===_)return{position:"lastChild",parentDomNd:n.domNode};var i=t.parentView;if(i){if(t.projectionHost){var o=t.projectionHost.hostNode;return"#element"===o.kind?{position:"lastChild",parentDomNd:o.domNode}:e(t.projectionHost.view,o)}if(t.container&&"##block"===t.container.subKind){var r=t.container,s=r.views.indexOf(t);if(s>-1)for(var a=void 0,l=void 0,d=s+1;d<r.views.length;d++)if((a=r.views[d]).nodes&&a.nodes.length&&(l=m(a,a.nodes[0],r.domNode)))return l;for(var c=r.viewPool,f=void 0,u=0,h=c;u<h.length;u++){if((a=h[u]).nodes&&a.nodes.length&&a.nodes[0].attached&&(f=m(a,a.nodes[0],r.domNode)))return f}}return e(i,t.container)}return{position:"lastOnRoot",parentDomNd:t.rootDomNode,nextDomNd:t.anchorNode}}if(!n.nextSibling){var v=t.nodes[n.parentIdx];return"#element"===v.kind?{position:"lastChild",parentDomNd:we(t,n)}:e(t,v)}var p=m(t,n.nextSibling,we(t,n));if(p)return p;n=n.nextSibling}function m(e,t,n){if(!t)return null;if("#element"===t.kind||"#text"===t.kind)return{position:"beforeChild",nextDomNd:t.domNode,parentDomNd:n};if("#fragment"===t.kind){for(var i=void 0,o=t.firstChild;o;){if(i=m(e,o,n))return i;o=o.nextSibling}if(t.contentView){var r=t.contentView;if(r.nodes)return m(r,r.nodes[0],n)}return null}if("#container"===t.kind){var s=t;i=null;if("##block"===s.subKind)for(var a=s.views,l=a.length,d=0;l>d&&!(i=m(a[d],a[d].nodes[0],n));d++);else if("##cpt"===s.subKind){var c=s.template.view;i=m(c,c.nodes[0],n)}return i||null}throw new Error("TODO findFirstDomNd: "+t.kind)}}(e,t),i=n.position,o=n.nextDomNd,r=n.parentDomNd;return"beforeChild"===i||"lastOnRoot"===i?function(e,t){e.domNode?Pe(e.domNode,o,r):e.domNode=r}:"lastChild"===i?function(e,t){e.domNode?De(e.domNode,r):e.domNode=r}:function(){console.warn("TODO: VALIDATE VIEW APPEND: ",i),function(e,t,n){void 0===t&&(t="");n&&e.uid!==n||(console.log(""),console.log(Ve),t&&console.log(t+":"),function e(t,n){void 0===n&&(n="");if(!t.nodes)return void console.log(""+n+t.uid+" - no nodes");var i=t.parentView?t.parentView.uid:"XX",o=t.projectionHost,r=o?" >>> projection host: "+o.hostNode.uid+" in "+o.view.uid:"";console.log(n+"*"+t.uid+"* cm:"+t.cm+" isTemplate:"+(void 0!==t.template)+" parentView:"+i+r);for(var s,a=t.nodes.length,l="",d=0;a>d;d++)if(s=t.nodes[d])if(l=s.uid.length<5?["     ","    ","   ","  "," "][s.uid.length]:"","#container"===s.kind){var c=s,f=c.domNode?c.domNode.uid:"XX";if(console.log(n+"["+d+"] "+s.uid+l+" "+f+" attached:"+(s.attached?1:0)+" parent:"+C(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")),"##block"===c.subKind){var u=c,h=u.views.length;if(h)for(var v=0;h>v;v++)if(u.views[v]){var p=u.views[v];f=p.rootDomNode?p.rootDomNode.$uid:"XX",console.log(n+"  - view #"+v),e(u.views[v],"    "+n)}else console.log(n+"  - view #"+v+" UNDEFINED");else console.log(n+"  - no child views")}else if("##cpt"===c.subKind){var m=c,g=m.template,w=m.contentView;w?(console.log(n+"  - light DOM:"),e(w,"    "+n)):console.log(n+"  - light DOM: none"),g?(console.log(n+"  - shadow DOM:"),e(g.view,"    "+n)):console.log(n+"  - no template")}else console.log(n+"  - "+c.subKind+" container")}else{f=s.domNode?s.domNode.uid:"XX";var b="";if(s.domNode&&"#text"===s.kind)b=" text=#"+s.domNode._textContent+"#";else if("#fragment"===s.kind||"#element"===s.kind){for(var N=[],x=s.firstChild;x;)N.push(x.uid),x=x.nextSibling;b=" children:["+N.join(", ")+"]";var y=s.contentView;y&&(b+=" >>> content view: "+y.uid)}console.log(n+"["+s.idx+"] "+s.uid+l+" "+f+" attached:"+(s.attached?1:0)+" parent:"+C(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")+b)}else console.log(n+"["+d+"] XX");function C(e){return e<0?"X":e}}(e))}(e,"getViewInsertFunction for "+t.uid)}}function le(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var o=i,r=o.lastRefresh;if(n||r===e.lastRefresh){var s=o.views.length;if(!n){if(s!==o.previousNbrOfViews)for(var a=o.viewPool,l=a.length,d=void 0,c=0;l>c;c++)be(d=a[c],d.nodes[0]);o.previousNbrOfViews=s}}else be(e,o)}}function de(e,t,n){if(n)for(var i=n.length,o=0;i>o;o++)le(e,n[o],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}function ce(e,t,n,i,o,r,s,a,l){if(t){var d=e.createElement(o);if(a)for(var c=a.length,f=0;c>f;f+=2)d.setAttribute(a[f],a[f+1]);if(l){c=l.length;for(var u=0;c>u;u+=2)d[l[u]]=l[u+1]}var h={kind:"#element",uid:"elt"+ ++X,idx:n,parentIdx:-1,ns:"",domNode:d,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=h,ne(e,d,s),e.cmAppends[i](h,!1),r&&(e.cmAppends[i+1]=function(e,t){e.domNode?De(e.domNode,d):e.domNode=d,t||fe(h,e)})}else s&&ne(e,e.nodes[n].domNode,s)}function fe(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0),t.parentIdx=e.idx}function ue(e,t,n,i,o,r,s,a){for(var l,d=[],c=8;c<arguments.length;c++)d[c-8]=arguments[c];if(a){var f=void 0,u=void 0,h=!1;f=t?s.slice(0):(l=e.nodes[i]).pieces;for(var v=0;a>v;v++)(u=ve(e,n,d[v]))!==re&&(h=!0,f[1+2*v]=null==u?"":u);if(!t)return h&&(l.domNode.textContent=f.join("")),void ne(e,l.domNode,r);l=p(e.doc.createTextNode(f.join("")),f),ne(e,l.domNode,r)}else{if(!t)return void(r&&ne(e,e.nodes[i].domNode,r));l=p(e.doc.createTextNode(s),void 0),ne(e,l.domNode,r)}function p(e,t){return{kind:"#text",uid:"txt"+ ++X,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=l,e.cmAppends[o](l,!1)}function he(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return re;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function ve(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?re:(i[2*n[0]]=1,n[1])}return he(e,n[0],n[1])}return n}function pe(e,t,n,i,o){if(t){var r=function(e,t,n){var i;if(1===n)i={kind:"#container",subKind:"##block",uid:"cnb"+ ++X,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,views:[],viewPool:[],cmAppend:t,lastRefresh:0,previousNbrOfViews:0,insertFn:null};else{if(2!==n)return console.warn("TODO: new cnt type"),null;i={kind:"#container",subKind:"##cpt",uid:"cnc"+ ++X,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,cmAppend:t,cptRef:null,template:null,data:null,contentView:null,dynamicParams:void 0}}return i}(n,null,o);return e.nodes[n]=r,function(e,t,n){if(e.cmAppends){var i=e.cmAppends[n];i?(t.cmAppend=function(e,t){i(e,!0)},i(t,!1)):console.log("ERROR?",i===q)}}(e,r,i),r}}function me(e,t,n,i,o){if(o&&e.nodes){var r=e.nodes[n];if("#container"===r.kind&&"##cpt"===r.subKind){var s=r.template;s&&ie(e,s.api,i)}else r.domNode?ie(e,r.domNode,i):"#decorator"===r.kind&&ie(e,r.api,i)}}function ge(e,t,n,i,o,r,s,a){if(t){var l=e.nodes[i];if("#element"===l.kind){var d=l.domNode;if(!d)return void W(e,"Cannot set "+o+" event listener: undefined DOM node");var c=h(d);s&&!1!==(a=a||{}).passive&&(a.passive=!0),d.addEventListener(o,(function(e){c.callback&&c.callback(e)}),a)}else if("#container"===l.kind){var f=l.template;f?u(f.api,!1):W(e,"Cannot set "+o+" event listener: undefined component template")}else"#param"===l.kind?u(l.data,!0):"#decorator"===l.kind&&u(l.api,!0)}else e.nodes[n].callback=r;function u(t,n){if(t&&m(t,o+"Emitter")){var i=t[o+"Emitter"];if(i.addListener&&"function"==typeof i.addListener){var r=h(null);i.addListener((function(e){r.callback&&r.callback(e)})),n&&"function"==typeof i.init&&i.init(o,t)}else W(e,"Invalid event emitter for: "+o)}else W(e,"Unsupported event: "+o)}function h(t){var o={kind:"#listener",uid:"evt"+ ++X,idx:n,parentIdx:i,nextSibling:void 0,domNode:t,attached:!0,callback:r};return e.nodes[n]=o,o}}function we(e,t){if(0===t.idx&&e.projectionHost){if(!t.attached)return null;var n=e.projectionHost.hostNode;return"#element"===n.kind?n.domNode:we(e.projectionHost.view,n)}return 0===t.idx?e.parentView?we(e.parentView,e.container):e.rootDomNode:e.nodes[t.parentIdx].domNode}function be(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=we(e,t);t.attached=!1,n?n.removeChild(t.domNode):W(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,o=i.views,r=o.length,s=void 0,a=0;r>a;a++)s=o[a].nodes[0],be(o[a],s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=o.concat(i.viewPool)}else if("##cpt"===t.subKind){var l=t.template;s=l.view.nodes[0];be(l.view,s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0)}}else if("#fragment"===t.kind){var d=t;if(d.attached=!1,d.contentView)be(d.contentView,d.contentView.nodes[0]);else if(d.firstChild)for(var c=d.firstChild;c;)be(e,c),c=c.nextSibling;d.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var Ne=function(e){var t=e.prototype;t[n]=!0,t[i]=0},xe=function(e,t){return e||(e=C,t=3),function(n,i){var r="ΔΔ"+i,s=n[o];s||(s=n[o]={}),s[i]=t?1===t?C:D:e,n[r]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,o){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var r=e[t];(void 0===r||d&&null===r)&&(r=e[t]=!d&&o?o>1?void 0:null:i(),O(e,r));return r}(this,r,i,e,t)},set:function(t){P(this,i,r,t,e,this)},enumerable:!0,configurable:!0})}},ye=y,Ce=K;function ke(e,t){return!0===e.prototype[t]}function De(e,t,n){t.appendChild(e)}function Pe(e,t,n,i){n.insertBefore(e,t)}var Ve="-------------------------------------------------------------------------------";var Ae,Ie,Oe,Re,Se,je,$e,Le,Ee,Te,Fe,Me,Ke,Xe,He,We,qe=(je={},$e=["class","commands"],Le=["class","lbl"],Ee=["tabindex",0],Te=["#title"],Fe=[" ",""," "],Me=["tabindex",0],Ke=["#item"],Xe=[" ",""," "],He=[16],We=function(){function n(){}return e([xe(ye),t("design:type",String)],n.prototype,"title",void 0),e([xe(Ce(ye)),t("design:type",Array)],n.prototype,"nameList",void 0),n=e([Ne],n)}(),Ae="main",Ie="labels1/labels1.ts",Oe=je,Re=function(e,t,n){var i,o,r,s,a,l=n.title,d=n.nameList,c=0,f=(s=17,(a=(r=e).cm)?(r.nodes=new Array(s),r.cmAppends||(r.cmAppends=[],r.anchorNode&&(r.cmAppends[0]=function(e,t){e.domNode?Pe(e.domNode,r.anchorNode,r.rootDomNode):e.domNode=r.rootDomNode}))):r.cmAppends=null,a);!function(e,t,n,i){if(t){var o={kind:"#fragment",uid:"fra"+ ++X,idx:n,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=o;var r=e.cmAppends[i];r(o,!1),e.cmAppends[i+1]=function(e,t){r(e,!0),t||fe(o,e)}}}(e,f,0,0),ce(e,f,1,1,"div",1,0,$e),ce(e,f,2,2,"div",1,0,Le),ue(e,f,0,3,3,0," Click on a button to focus one of elements below ",0),ce(e,f,4,2,"button",1),ge(e,f,5,4,"click",_e),ue(e,f,0,6,3,0," title ",0),ce(e,f,7,2,"button",1),ge(e,f,8,7,"click",ze),ue(e,f,0,9,3,0," 3rd item ",0),ce(e,f,10,2,"button",1),ge(e,f,11,10,"click",Ue),ue(e,f,0,12,3,0," next item ",0),ce(e,f,13,1,"h1",1,Te,Ee),ue(e,f,0,14,2,0,Fe,1,he(e,0,l)),ce(e,f,15,1,"ul",1),pe(e,f,16,2,1);for(var u=0,h=0,v=d;h<v.length;h++){var p=v[h];u++,ce(i=se(e,0,16,2,++c),o=i.cm,0,0,"li",1,Ke,Me),me(i,0,0,"#third",3===u),ue(i,o,0,1,1,0,Xe,1,he(i,0,p)),de(i)}de(e,0,He)},Se=We,function(){return new G(Ae,Ie,Oe,Re,Se)})().attach(document.body).render({title:"The Simpsons",nameList:["Homer","Marge","Bart","Lisa","Maggie"]});function _e(){var e=qe.query("#title");e&&e.focus()}function ze(){var e=qe.query("#third");e&&e.focus()}var Be=-1;function Ue(){Be++;var e=qe.query("#item",!0);e&&(Be>=e.length&&(Be=0),e[Be].focus())}}();
