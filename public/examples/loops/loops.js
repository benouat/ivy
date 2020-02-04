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
    ***************************************************************************** */function e(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",o="ΔDefFactories",r="ΔIsFactory",s="ΔΔProxy",a="ΔIsProxy",d="ΔDefault",l="ΔCreateProxy",c=!1;function f(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var u=Array.isArray;function h(e,t){e&&(u(e)&&!e[a]?e.forEach(t):t(e))}function v(e,t){if(e&&t){if(e===t)return;if(u(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function p(e,t){return e?u(e)&&!e[a]?(e.push(t),e):[e,t]:t}function m(e){return e&&!0===e[n]?e[i]:0}function g(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function w(e){return!(!e||!0!==e[n])}function b(e){return m(e)%2==1}function N(e,t){var n=f(e);return n&&t?(n.watchers=p(n.watchers,t),b(e)&&T.register(e),t):null}function x(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=v(n.watchers,t))}function y(e,t){if(e&&t){var n=e[d];if(n){var i=n(t);if(i!==C)return e[t]=i}var r=e[o],s=r?r[t]:null;if(s)return e[t]=s()}}var C={};function k(){return""}k[r]=!0;var D=k;function P(){return null}P[r]=!0;var V=P;function A(){}function I(e,t,n,i,o,r){var s=w(i);if(e.ΔComputeDependencies)console.error("[Trax] @computed properties must not mutate the Data object when calculated");else{i&&!s&&o.ΔCreateProxy&&(s=w(i=o.ΔCreateProxy(i)||i));var a=!1,d=r[n];b(e)?a=d!==i:d!==i&&(O(e),a=!0),a&&(s&&void 0===i&&(i=null),(s||d&&w(d))&&function(e,t,n){j(e,t),$(e,n)}(e,d,i),r[n]=i,R(e,"set",t,d,i))}}function R(e,t,n,i,o){var r=e?e.ΔMd:void 0;if(r&&r.trackers){var a=e[s]||e;h(r.trackers,(function(e){e(a,t,n,i,o)}))}}function O(e){if(w(e)){var t=!0;if(b(e)?t=!1:e.ΔChangeVersion+=1,T.register(e),t){var n=e.ΔMd;n&&n.parents&&h(n.parents,(function(e){O(e)}))}}}function j(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=v(n.parents,e))}}function $(e,t){if(t){var n=f(t);n&&(n.parents=p(n.parents,e))}}A[r]=!0;var S=0,E=function(){function e(){this.id=++S}return e.prototype.register=function(e){var t=this,n=f(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){F();for(var i,o,r=[],s=0;n>s;s++)(o=(i=t[s]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),o.refreshCtxt&&o.watchers&&r.push({dataNode:i,watchers:o.watchers})),o.refreshCtxt=void 0;this.objects=void 0,r.length&&(e?L(r):Promise.resolve().then((function(){L(r)})))}},e}();function L(e){for(var t=function(e){h(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var T=new E;function F(){T.objects&&(T=new E)}var M=["push","pop","shift","unshift","splice"],X=/^\d+$/,K=/^\Δ/,H=function(){function e(e){this.ΔTrackable=!0,this.ΔDataFactory=!0,this.ΔChangeVersion=0,this.ΔMd=void 0,this.ΔΔSelf=this,this.ΔIsProxy=!1,this.ΔItemFactory=e}return e.ΔNewProxy=function(t){var n=new Proxy([],new e(t));return n[s]=n,n},e.ΔCreateProxy=function(t,n){if(u(t)){var i=new Proxy(t,new e(n)),o=t.length;for(O(i);o--;)$(i,t[o]);return i}return null},e.prototype.$newItem=function(e){var t=this.ΔItemFactory();return void 0===e&&(e=this.ΔΔList.length),e>-1&&I(this.ΔΔSelf,e,e,t,this.ΔItemFactory,this.ΔΔList),t},e.prototype.$dispose=function(){for(var e=this.ΔΔList,t=e.length;t--;)j(this.ΔΔSelf,e[t]);return e},e.prototype.ΔToString=function(){return"Trax List ["+this.ΔΔList.join(", ")+"]"},e.prototype.set=function(e,t,n){if(this.ΔΔList||(this.ΔΔList=e),t.match(X)){var i=parseInt(t,10);I(this.ΔΔSelf,i,i,n,this.ΔItemFactory,this.ΔΔList)}else t.match(K)&&(this[t]=n);return!0},e.prototype.get=function(e,t){if(this.ΔΔList||(this.ΔΔList=e),t===a)return!0;if("string"===typeof t){if(t.match(K))return this[t];if(t.match(X))return this.ΔΔList[parseInt(t,10)];if("length"===t)return this.ΔΔList.length;if("push"===t)return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=this,o=t.length,r=i.ΔΔList.length,s=0;o>s;s++)i.set(e,r+s+"",t[s])};if("toString"===t)return this.ΔToString;if("function"==typeof e[t])return function(){var e=this,n=M.indexOf(t)>-1;if(n){O(e);for(var i=e.ΔΔList,o=0;i.length>o;o++)j(e,i[o])}var r=e.ΔΔList,s=r[t].apply(r,arguments);if(n){for(i=e.ΔΔList,o=0;i.length>o;o++)$(e,i[o]);R(this,t)}return s}}return t===Symbol.iterator?this.ΔΔList[Symbol.iterator]:this[t]},e}();var B=function(e){function t(){return H.ΔNewProxy(e)}return e=e||V,t[r]=!0,t[l]=function(t){return H.ΔCreateProxy(t,e)},t},W=0,z={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function _(e,t){for(var n=e,i=[];n;){if(n.template){var o=n.template;i.push('\n>> Template: "'+o.templateName+'" - File: "'+o.filePath+'"')}n=n.parentView}z.error("IVY: "+t+i.join(""))}var q=void 0,U=11,Y=/^ΔΔ(\w+)Emitter$/,G=/^ΔΔ(.+)$/,J="ΔIsAPI",Q="ΔIsController",Z=0,ee=function(){function e(e,t,n,i,o){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=o,this._uid=++Z,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=re(null,null,1,this);var r=this;this.watchCb=function(){r.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==q&&(Oe(this.$Class,Q)?this.hasCtlClass=!0:Oe(this.$Class,J)||w(this.$Class.prototype)||_(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),ne(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&De(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,te(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(g(e,"$template")&&(e.$template=this),g(e,"$logger")){var t=this.view;e.$logger={log:z.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];_(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&te(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)_(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),je(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return _(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(x(this.api,this.watchCb),x(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!w(n)&&(_(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var o in b(t)||F(),this.disconnectObserver(),e)e.hasOwnProperty(o)&&(t[o]=e[o]);var r=!this.forceRefresh,s=i.nodes;if(s&&s[0]&&s[0].attached||(r=!1),r&&m(t)+m(n)>this.lastRefreshVersion&&(r=!1),!r){n&&(this.initialized||(ne(i,n,"$init","controller"),this.initialized=!0),ne(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){_(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&ne(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&F()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=m(t)+m(n)}return this.activeWatch||(N(t,this.watchCb),n&&N(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function te(e,t,n){var i=n.events;if(void 0===i){var o=void 0;for(var r in t)if(r.match(Y)){var s=RegExp.$1;o||(o=[]),"function"!=typeof t[s+"Emitter"].init?_(e,"Invalid EventEmitter: "+s+"Emitter"):(o.push(s+"Emitter"),o.push(s),t[s+"Emitter"].init(s,t))}n.events=o||null}else if(null!==i)for(var a=i.length,d=0;a>d;d+=2)t[i[d]].init(i[d+1],t)}function ne(e,t,n,i){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){_(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function ie(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function oe(){return function(e){if(e!==q&&null!==e){var t=!0;return function e(t,n,i){if(t!==q&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var o=0,r=t.nodes;o<r.length;o++){if(!s(r[o]))return!1}}return!0;function s(t){var o=t.kind;if("#fragment"===o)return!!i(t)&&e(t.contentView,n,i);if("#container"!==o)return i(t);if(!i(t))return!1;var r=t,s=r.subKind;if("##block"===s){var a=r.views;if(null!==a)for(var d=0,l=a;d<l.length;d++){var c=l[d];if(!e(c,n,i))return!1}if(n&&r.viewPool)for(var f=0,u=r.viewPool;f<u.length;f++){var h=u[f];if(!e(h,n,i))return!1}}else if("##cpt"===s){var v=r.template;if(null!==v)return e(v.view,n,i)}else"##async"===s&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var o=i.doc.createDocumentFragment();i.domNode=o,i.cmAppends=[function(e){e.domNode?je(e.domNode,o):e.domNode=o}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function re(e,t,n,i){var o={kind:"#view",uid:"view"+ ++W,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:ie,isEmpty:oe};return e?ae(o,e,t):o.doc="undefined"!=typeof document?document:null,o}function se(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==q&&null!==i)for(var o=i.template,r=n.length,s=0;r>s;s++)o.registerLabel(n[s],t)}}function ae(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}function de(e,t,n,i,o){return function(){return new ee(e,t,n,i,o)}}var le=[];function ce(e,t,n){var i=e.cm;return i?(e.nodes=new Array(n),e.cmAppends||(e.cmAppends=[],e.anchorNode&&(e.cmAppends[0]=function(t,n){t.domNode?$e(t.domNode,e.anchorNode,e.rootDomNode):t.domNode=e.rootDomNode}))):e.cmAppends=null,i}function fe(e,t,n,i,o){var r,s=e.nodes[n];if(s&&s.attached||_(e,"Invalid ζview call: container must be attached ("+(s?s.uid:"XX")+") - pview: "+e.uid+" containerIdx: "+n),"#container"===s.kind)if("##block"===s.subKind){var a=(d=s).views;1===o&&(d.insertFn=null),1===o&&d.views.length>1?(d.previousNbrOfViews=a.length,r=a.shift(),d.viewPool.length?d.viewPool=a.concat(d.viewPool):d.viewPool=a,d.views=[r]):(r=d.views[o-1])||(d.viewPool.length>0?(d.insertFn||(d.insertFn=ue(e,d)),ve((r=a[o-1]=d.viewPool.shift()).nodes[0],d.insertFn)):((r=a[o-1]=re(e,d)).nodes=new Array(i),e.cm&&d.cmAppend?r.cmAppends=[d.cmAppend]:e.cm||(r.cmAppends=[ue(e,d)]))),d.lastRefresh=r.lastRefresh=e.lastRefresh}else{var d;(r=(d=s).contentView)||((r=d.contentView=re(e,d)).nodes=new Array(i)),r.lastRefresh=e.lastRefresh}else if("#param"===s.kind){var l=s;(r=l.contentView)||(r=l.contentView=re(e,null),l.viewPool&&(l.viewPool[l.viewInstanceIdx]=r),r.nodes=new Array(i),r.paramNode=l),r.lastRefresh=e.lastRefresh}return r}function ue(e,t){var n=function e(t,n){for(;;){if(n||_(t,"Internal error - findNextSiblingDomNd: nd cannot be undefined"),0===n.idx){if(!n.attached)return{position:"defer",parentDomNd:void 0};if(n.domNode.nodeType===U)return{position:"lastChild",parentDomNd:n.domNode};var i=t.parentView;if(i){if(t.projectionHost){var o=t.projectionHost.hostNode;return"#element"===o.kind?{position:"lastChild",parentDomNd:o.domNode}:e(t.projectionHost.view,o)}if(t.container&&"##block"===t.container.subKind){var r=t.container,s=r.views.indexOf(t);if(s>-1)for(var a=void 0,d=void 0,l=s+1;l<r.views.length;l++)if((a=r.views[l]).nodes&&a.nodes.length&&(d=m(a,a.nodes[0],r.domNode)))return d;for(var c=r.viewPool,f=void 0,u=0,h=c;u<h.length;u++){if((a=h[u]).nodes&&a.nodes.length&&a.nodes[0].attached&&(f=m(a,a.nodes[0],r.domNode)))return f}}return e(i,t.container)}return{position:"lastOnRoot",parentDomNd:t.rootDomNode,nextDomNd:t.anchorNode}}if(!n.nextSibling){var v=t.nodes[n.parentIdx];return"#element"===v.kind?{position:"lastChild",parentDomNd:ke(t,n)}:e(t,v)}var p=m(t,n.nextSibling,ke(t,n));if(p)return p;n=n.nextSibling}function m(e,t,n){if(!t)return null;if("#element"===t.kind||"#text"===t.kind)return{position:"beforeChild",nextDomNd:t.domNode,parentDomNd:n};if("#fragment"===t.kind){for(var i=void 0,o=t.firstChild;o;){if(i=m(e,o,n))return i;o=o.nextSibling}if(t.contentView){var r=t.contentView;if(r.nodes)return m(r,r.nodes[0],n)}return null}if("#container"===t.kind){var s=t;i=null;if("##block"===s.subKind)for(var a=s.views,d=a.length,l=0;d>l&&!(i=m(a[l],a[l].nodes[0],n));l++);else if("##cpt"===s.subKind){var c=s.template.view;i=m(c,c.nodes[0],n)}return i||null}throw new Error("TODO findFirstDomNd: "+t.kind)}}(e,t),i=n.position,o=n.nextDomNd,r=n.parentDomNd;return"beforeChild"===i||"lastOnRoot"===i?function(e,t){e.domNode?$e(e.domNode,o,r):e.domNode=r}:"lastChild"===i?function(e,t){e.domNode?je(e.domNode,r):e.domNode=r}:function(){console.warn("TODO: VALIDATE VIEW APPEND: ",i),function(e,t,n){void 0===t&&(t="");n&&e.uid!==n||(console.log(""),console.log(Se),t&&console.log(t+":"),function e(t,n){void 0===n&&(n="");if(!t.nodes)return void console.log(""+n+t.uid+" - no nodes");var i=t.parentView?t.parentView.uid:"XX",o=t.projectionHost,r=o?" >>> projection host: "+o.hostNode.uid+" in "+o.view.uid:"";console.log(n+"*"+t.uid+"* cm:"+t.cm+" isTemplate:"+(void 0!==t.template)+" parentView:"+i+r);for(var s,a=t.nodes.length,d="",l=0;a>l;l++)if(s=t.nodes[l])if(d=s.uid.length<5?["     ","    ","   ","  "," "][s.uid.length]:"","#container"===s.kind){var c=s,f=c.domNode?c.domNode.uid:"XX";if(console.log(n+"["+l+"] "+s.uid+d+" "+f+" attached:"+(s.attached?1:0)+" parent:"+C(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")),"##block"===c.subKind){var u=c,h=u.views.length;if(h)for(var v=0;h>v;v++)if(u.views[v]){var p=u.views[v];f=p.rootDomNode?p.rootDomNode.$uid:"XX",console.log(n+"  - view #"+v),e(u.views[v],"    "+n)}else console.log(n+"  - view #"+v+" UNDEFINED");else console.log(n+"  - no child views")}else if("##cpt"===c.subKind){var m=c,g=m.template,w=m.contentView;w?(console.log(n+"  - light DOM:"),e(w,"    "+n)):console.log(n+"  - light DOM: none"),g?(console.log(n+"  - shadow DOM:"),e(g.view,"    "+n)):console.log(n+"  - no template")}else console.log(n+"  - "+c.subKind+" container")}else{f=s.domNode?s.domNode.uid:"XX";var b="";if(s.domNode&&"#text"===s.kind)b=" text=#"+s.domNode._textContent+"#";else if("#fragment"===s.kind||"#element"===s.kind){for(var N=[],x=s.firstChild;x;)N.push(x.uid),x=x.nextSibling;b=" children:["+N.join(", ")+"]";var y=s.contentView;y&&(b+=" >>> content view: "+y.uid)}console.log(n+"["+s.idx+"] "+s.uid+d+" "+f+" attached:"+(s.attached?1:0)+" parent:"+C(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")+b)}else console.log(n+"["+l+"] XX");function C(e){return e<0?"X":e}}(e))}(e,"getViewInsertFunction for "+t.uid)}}function he(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var o=i,r=o.lastRefresh;if(n||r===e.lastRefresh){var s=o.views.length;if(!n){if(s!==o.previousNbrOfViews)for(var a=o.viewPool,d=a.length,l=void 0,c=0;d>c;c++)De(l=a[c],l.nodes[0]);o.previousNbrOfViews=s}}else De(e,o)}}function ve(e,t,n){if(!e.attached){if(t(e,!0),e.attached=!0,"#fragment"===e.kind)for(var i=e.firstChild;i;)ve(i,t),i=i.nextSibling;else if("#container"===e.kind){var o=e.subKind;if("##cpt"===o){var r=e.template,s=r?r.view.nodes[0]:null;r&&(r.forceRefresh=!0),s&&ve(s,t)}else if("##block"===o)for(var a=e.views,d=0;a.length>d;d++)ve(a[d].nodes[0],t)}if("#fragment"===e.kind||"#element"===e.kind){var l=e.contentView;l&&ve(l.nodes[0],t)}}}function pe(e,t,n){if(n)for(var i=n.length,o=0;i>o;o++)he(e,n[o],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}function me(e,t,n,i,o,r,s,a,d){if(t){var l=e.createElement(o);if(a)for(var c=a.length,f=0;c>f;f+=2)l.setAttribute(a[f],a[f+1]);if(d){c=d.length;for(var u=0;c>u;u+=2)l[d[u]]=d[u+1]}var h={kind:"#element",uid:"elt"+ ++W,idx:n,parentIdx:-1,ns:"",domNode:l,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=h,se(e,l,s),e.cmAppends[i](h,!1),r&&(e.cmAppends[i+1]=function(e,t){e.domNode?je(e.domNode,l):e.domNode=l,t||ge(h,e)})}else s&&se(e,e.nodes[n].domNode,s)}function ge(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0),t.parentIdx=e.idx}function we(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return le;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function be(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?le:(i[2*n[0]]=1,n[1])}return we(e,n[0],n[1])}return n}function Ne(e,t,n,i,o){if(t){var r=function(e,t,n){var i;if(1===n)i={kind:"#container",subKind:"##block",uid:"cnb"+ ++W,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,views:[],viewPool:[],cmAppend:t,lastRefresh:0,previousNbrOfViews:0,insertFn:null};else{if(2!==n)return console.warn("TODO: new cnt type"),null;i={kind:"#container",subKind:"##cpt",uid:"cnc"+ ++W,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,cmAppend:t,cptRef:null,template:null,data:null,contentView:null,dynamicParams:void 0}}return i}(n,null,o);return e.nodes[n]=r,function(e,t,n){if(e.cmAppends){var i=e.cmAppends[n];i?(t.cmAppend=function(e,t){i(e,!0)},i(t,!1)):console.log("ERROR?",i===q)}}(e,r,i),r}}function xe(e,t,n,i,o,r,s,a,d,l){var c;n=n||0,t?c=e.nodes[i]||Ne(e,t,i,o,2):(c=e.nodes[i]).lists&&(c.lists.sizes={});var f=be(e,n,r);if(c.template){if(f!==le&&c.cptRef!==f){var u=c.data;c.template.dispose(!0),m();var h=c.data;for(var v in u)if(u.hasOwnProperty(v)&&v.match(G)){var p=RegExp.$1;g(h,p)&&(h[p]=u[p])}}}else{if(f===le)return void _(e,"Invalid component ref");m()}function m(){var t=c.template=f();c.cptRef=f,ae(t.view,e,c),t.disconnectObserver(),c.data=t.api,function(t){if(d){var n=d.length;if(!t&&n)_(e,"Invalid parameter: "+d[0]);else for(var i=0;n>i;i+=2)g(t,d[i])?t[d[i]]=d[i+1]:_(e,"Invalid parameter: "+d[i])}}(t.api)}l&&(c.dynamicParams={}),0===n&&s&&ye(e,i,c,a,l)}function ye(e,t,n,i,o){var r=(n=n||e.nodes[t])?n.template:void 0;if(void 0!==r){if(r.view.lastRefresh=e.lastRefresh-1,function(e){if(e.lists)for(var t=e.lists,n=t.listNames,i=void 0,o=void 0,r=void 0,s=void 0,a=0;n.length>a;a++)i=n[a],o=t.sizes[i]||0,r=e.data[i],s=r.length,o<s&&r.splice(o,s-o)}(n),n.contentView){r.api.$content=n.contentView;var s=n.contentView.instructions;s&&s.length&&(r.forceRefresh=!0)}if(r.view.cm)r.view.cmAppends=[n.cmAppend];else{if(o)for(var a=o.length,d=(n?n.dynamicParams:{})||{},l=r.api,c=0;a>c;c++)d[o[c]]||y(l,o[c]);var f=r.view.nodes[0];if(!f.attached)r.forceRefresh=!0,ve(f,ue(e,n))}i&&se(e,r.api,i),r.render()}}function Ce(e,t,n,i,o,r){if(r!==le){var s=be(e,n,r);if(s!==le){var a=e.nodes[i],d=a.kind;if("#container"===d){var l=a.data;(function(e,t,n,i,o){if(i&&(!e.cm||g(i,o)))return!0;var r="";n.template&&(r=" on <*"+n.template.templateName+"/>");return _(e,"Invalid parameter '"+o+"'"+r),!1})(e,0,a,l,o)&&(l[o]=s)}else if("#param"===d)!function(e,t,n,i,o){if(0===o){if(n.dataHolder)return n.dataHolder[n.dataName]=i,n.dataHolder}else{if(n.data)return t&&!g(n.data,o)&&_(e,"Invalid param node parameter: "+o),n.data[o]=i,n.data;_(e,"Invalid param node parameter: "+o)}}(e,t,a,s,o);else if("#decorator"===d){var c=a;t&&!function(e,t,n){if(!g(t.api,n))return _(e,"Invalid decorator parameter '"+n+"' on "+t.refName),!1;return!0}(e,c,o)||(c.api[o]=s)}}}}function ke(e,t){if(0===t.idx&&e.projectionHost){if(!t.attached)return null;var n=e.projectionHost.hostNode;return"#element"===n.kind?n.domNode:ke(e.projectionHost.view,n)}return 0===t.idx?e.parentView?ke(e.parentView,e.container):e.rootDomNode:e.nodes[t.parentIdx].domNode}function De(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=ke(e,t);t.attached=!1,n?n.removeChild(t.domNode):_(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,o=i.views,r=o.length,s=void 0,a=0;r>a;a++)s=o[a].nodes[0],De(o[a],s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=o.concat(i.viewPool)}else if("##cpt"===t.subKind){var d=t.template;s=d.view.nodes[0];De(d.view,s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0)}}else if("#fragment"===t.kind){var l=t;if(l.attached=!1,l.contentView)De(l.contentView,l.contentView.nodes[0]);else if(l.firstChild)for(var c=l.firstChild;c;)De(e,c),c=c.nextSibling;l.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var Pe=function(e){var t=e.prototype;t[n]=!0,t[i]=0},Ve=function(e,t){return e||(e=P,t=3),function(n,i){var r="ΔΔ"+i,s=n[o];s||(s=n[o]={}),s[i]=t?1===t?P:A:e,n[r]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,o){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var r=e[t];(void 0===r||c&&null===r)&&(r=e[t]=!c&&o?o>1?void 0:null:i(),$(e,r));return r}(this,r,i,e,t)},set:function(t){I(this,i,r,t,e,this)},enumerable:!0,configurable:!0})}},Ae=D,Ie=B,Re=C;function Oe(e,t){return!0===e.prototype[t]}function je(e,t,n){t.appendChild(e)}function $e(e,t,n,i){n.insertBefore(e,t)}var Se="-------------------------------------------------------------------------------";var Ee,Le,Te,Fe,Me=(Ee={},Le=[" ",""," "],Te=[3],Fe=function(){function n(){this.ΔΔoddBkg=!1}return n.prototype.ΔDefault=function(e){switch(e){case"oddBkg":return!1}return Re},e([Ve(Ae),t("design:type",String)],n.prototype,"text",void 0),e([Ve(),t("design:type",Object)],n.prototype,"oddBkg",void 0),n=e([Pe],n)}(),de("row","loops/loops.ts",Ee,(function(e,t,n){var i,o=n.text,r=n.oddBkg,s=0,a=ce(e,0,4);!function(e,t,n,i){if(t){var o={kind:"#fragment",uid:"fra"+ ++W,idx:n,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=o;var r=e.cmAppends[i];r(o,!1),e.cmAppends[i+1]=function(e,t){r(e,!0),t||ge(o,e)}}}(e,a,0,0),me(e,a,1,1,"div",1),function(e,t,n,i,o){if(o!==le){var r=be(e,t,o);if(r!==le){var s=e.nodes[n].domNode;void 0===r?s.removeAttribute(i):s.setAttribute(i,r)}}}(e,0,1,"class",we(e,0,r?"odd":"even")),function(e,t,n,i,o,r,s,a){for(var d,l=[],c=8;c<arguments.length;c++)l[c-8]=arguments[c];if(a){var f=void 0,u=void 0,h=!1;f=t?s.slice(0):(d=e.nodes[i]).pieces;for(var v=0;a>v;v++)(u=be(e,n,l[v]))!==le&&(h=!0,f[1+2*v]=null==u?"":u);if(!t)return h&&(d.domNode.textContent=f.join("")),void se(e,d.domNode,r);d=p(e.doc.createTextNode(f.join("")),f),se(e,d.domNode,r)}else{if(!t)return void(r&&se(e,e.nodes[i].domNode,r));d=p(e.doc.createTextNode(s),void 0),se(e,d.domNode,r)}function p(e,t){return{kind:"#text",uid:"txt"+ ++W,domNode:e,attached:!0,idx:i,parentIdx:-1,pieces:t,nextSibling:void 0}}e.nodes[i]=d,e.cmAppends[o](d,!1)}(e,a,0,2,2,0,Le,1,we(e,1,o)),Ne(e,a,3,1,1),r&&(me(i=fe(e,0,3,1,++s),i.cm,0,0,"hr",0),pe(i)),pe(e,0,Te)}),Fe));(function(){var n={},i=["class","rows"],o=[1],r=function(){function n(){}return e([Ve(Ie(Ae)),t("design:type",Array)],n.prototype,"nameList",void 0),n=e([Pe],n)}();return de("greetings","loops/loops.ts",n,(function(e,t,n){var r,s,a=n.nameList,d=0,l=ce(e,0,2),c=0;me(e,l,0,0,"div",1,0,i),Ne(e,l,1,1,1);for(var f=0,u=a;f<u.length;f++){var h=u[f];xe(r=fe(e,0,1,1,++d),s=r.cm,0,0,0,we(r,0,Me),0),Ce(r,s,0,0,"text",we(r,1,h)),Ce(r,s,0,0,"oddBkg",we(r,2,c%2==1)),ye(r,0),c++,console.log("greetings data: ",h,c),pe(r)}pe(e,0,o)}),r)})()().attach(document.body).render({nameList:["Homer","Marge","Bart","Lisa","Maggie"]})}();
