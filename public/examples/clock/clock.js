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
    ***************************************************************************** */function e(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}function t(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var n="ΔTrackable",i="ΔChangeVersion",o="ΔDefFactories",r="ΔΔProxy",s="ΔIsProxy",a="ΔDefault",l=!1;function d(e){return e&&e.ΔTrackable?e.ΔMd?e.ΔMd:e.ΔMd={parents:void 0,refreshCtxt:void 0,watchers:void 0}:null}var c=Array.isArray;function f(e,t){e&&(c(e)&&!e[s]?e.forEach(t):t(e))}function u(e,t){if(e&&t){if(e===t)return;if(c(e)){var n=e;if(1===n.length){if(n[0]===t)return}else{var i=n.indexOf(t);if(i>-1)return n.splice(i,1),1===n.length?n[0]:n}}}return e}function h(e,t){return e?c(e)&&!e[s]?(e.push(t),e):[e,t]:t}function p(e){return e&&!0===e[n]?e[i]:0}function v(e,t){return!(!e||"object"!=typeof e)&&"ΔΔ"+t in e}function m(e){return!(!e||!0!==e[n])}function g(e){return p(e)%2==1}function w(e,t){var n=d(e);return n&&t?(n.watchers=h(n.watchers,t),g(e)&&j.register(e),t):null}function b(e,t){var n=e?e.ΔMd:void 0;n&&t&&(n.watchers=u(n.watchers,t))}function N(e,t){if(e&&t){var n=e[a];if(n){var i=n(t);if(i!==C)return e[t]=i}var r=e[o],s=r?r[t]:null;if(s)return e[t]=s()}}function y(e){var t=e.prototype;t[n]=!0,t[i]=0}var C={};function x(){return""}x["ΔIsFactory"]=!0;var k=x;function D(){return 0}D["ΔIsFactory"]=!0;var V=D;function R(){return null}function A(){}function I(e,t){if(t){var n=d(t);n&&(n.parents=h(n.parents,e))}}R["ΔIsFactory"]=!0,A["ΔIsFactory"]=!0;var O=0,P=function(){function e(){this.id=++O}return e.prototype.register=function(e){var t=this,n=d(e);n&&!n.refreshCtxt&&(this.objects?this.objects.push(e):(this.objects=[e],Promise.resolve().then((function(){t.refresh()}))),n.refreshCtxt=this)},e.prototype.refresh=function(e){void 0===e&&(e=!0);var t=this.objects,n=t?t.length:0;if(n){E();for(var i,o,r=[],s=0;n>s;s++)(o=(i=t[s]).ΔMd).refreshCtxt&&(i.ΔChangeVersion%2&&(i.ΔChangeVersion+=1),o.refreshCtxt&&o.watchers&&r.push({dataNode:i,watchers:o.watchers})),o.refreshCtxt=void 0;this.objects=void 0,r.length&&(e?$(r):Promise.resolve().then((function(){$(r)})))}},e}();function $(e){for(var t=function(e){f(e.watchers,(function(t){t(e.dataNode)}))},n=0,i=e;n<i.length;n++){t(i[n])}}var j=new P;function E(){j.objects&&(j=new P)}var S=0,F={log:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.log.apply(console,arguments)},error:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,arguments)}};function T(e,t){for(var n=e,i=[];n;){if(n.template){var o=n.template;i.push('\n>> Template: "'+o.templateName+'" - File: "'+o.filePath+'"')}n=n.parentView}F.error("IVY: "+t+i.join(""))}var X=void 0,K=11,M=/^ΔΔ(\w+)Emitter$/,H=/^ΔΔ(.+)$/,W="ΔIsAPI",z="ΔIsController",_=0,B=function(){function e(e,t,n,i,o){this.templateName=e,this.filePath=t,this.staticCache=n,this.renderFn=i,this.$Class=o,this._uid=++_,this.tplApi=void 0,this.tplCtl=void 0,this.forceRefresh=!1,this.activeWatch=!1,this.lastRefreshVersion=0,this.processing=!1,this.rendering=!1,this.initialized=!1,this.labels=void 0,this.hasCtlClass=!1,this.view=G(null,null,1,this);var r=this;this.watchCb=function(){r.notifyChange()},this.watchCb.$templateId=this._uid,this.$Class!==X&&(xe(this.$Class,z)?this.hasCtlClass=!0:xe(this.$Class,W)||m(this.$Class.prototype)||T(this.view,"Type of $ argument must be either a @Controller, an @API or a @Data class"))}return e.prototype.dispose=function(e){void 0===e&&(e=!1);var t=this.view;this.disconnectObserver(),q(t,this.tplCtl,"$dispose",this.templateName),e&&t&&t.nodes&&t.nodes.length&&ge(t,t.nodes[0])},Object.defineProperty(e.prototype,"uid",{get:function(){return this._uid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return this.view.doc},set:function(e){this.view.doc=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"api",{get:function(){if(!this.tplApi)if(this.hasCtlClass){var e=this.controller;e&&e.$api&&(this.tplApi=e.$api)}else this.$Class&&(this.tplApi=new this.$Class,L(this.view,this.tplApi,this.staticCache));return this.tplApi},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controller",{get:function(){if(!this.tplCtl&&this.hasCtlClass){var e=this.tplCtl=new this.$Class;if(v(e,"$template")&&(e.$template=this),v(e,"$logger")){var t=this.view;e.$logger={log:F.log,error:function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];T(t,e+(n.length?" "+n.join(" "):""))}}}e.$api&&L(this.view,e.$api,this.staticCache)}return this.tplCtl},enumerable:!0,configurable:!0}),e.prototype.attach=function(e){if(this.view.rootDomNode)T(this.view,"Template host cannot be changed once set");else{var t=this.view;if(!t.doc)throw new Error("[iv] Template.document must be defined before calling Template.attach()");t.rootDomNode=e,t.anchorNode=t.doc.createComment("template anchor"),ke(t.anchorNode,e)}return this},e.prototype.registerLabel=function(e,t){this.labels||(this.labels={});var n=this.labels[e];n?n.push(t):n=this.labels[e]=[t]},e.prototype.query=function(e,t){if(void 0===t&&(t=!1),this.rendering)return null;if(e&&"#"!==e.charAt(0))return T(this.view,"[$template.query()] Invalid label argument: '"+e+"' (labels must start with #)"),null;var n=this.labels&&this.labels[e]||null;return n&&n.length?t?n:n[0]:null},e.prototype.notifyChange=function(){this.render()},e.prototype.disconnectObserver=function(){this.activeWatch&&(b(this.api,this.watchCb),b(this.controller,this.watchCb),this.activeWatch=!1)},e.prototype.render=function(e){if(this.processing)return this;this.processing=!0;var t=this.api,n=this.controller,i=this.view;if(n&&!m(n)&&(T(i,"Template controller must be a @Controller Object - please check: "+this.$Class.name),this.tplCtl=this.$Class=void 0),t&&e)for(var o in g(t)||E(),this.disconnectObserver(),e)e.hasOwnProperty(o)&&(t[o]=e[o]);var r=!this.forceRefresh,s=i.nodes;if(s&&s[0]&&s[0].attached||(r=!1),r&&p(t)+p(n)>this.lastRefreshVersion&&(r=!1),!r){n&&(this.initialized||(q(i,n,"$init","controller"),this.initialized=!0),q(i,n,"$beforeRender","controller")),this.rendering=!0,this.labels=void 0,i.lastRefresh++,i.instructions=void 0;try{this.renderFn(i,this.hasCtlClass?n:t,t,this)}catch(e){T(i,"Template execution error\n"+(e.message||e))}this.rendering=!1,n&&q(i,n,"$afterRender","controller"),function(e,t){if(void 0===t&&(t=!1),e){var n=e.ΔMd;n&&n.refreshCtxt?n.refreshCtxt.refresh(!0):t&&E()}}(t),this.forceRefresh=!1,this.lastRefreshVersion=p(t)+p(n)}return this.activeWatch||(w(t,this.watchCb),n&&w(n,this.watchCb),this.activeWatch=!0),this.processing=!1,this},e}();function L(e,t,n){var i=n.events;if(void 0===i){var o=void 0;for(var r in t)if(r.match(M)){var s=RegExp.$1;o||(o=[]),"function"!=typeof t[s+"Emitter"].init?T(e,"Invalid EventEmitter: "+s+"Emitter"):(o.push(s+"Emitter"),o.push(s),t[s+"Emitter"].init(s,t))}n.events=o||null}else if(null!==i)for(var a=i.length,l=0;a>l;l+=2)t[i[l]].init(i[l+1],t)}function q(e,t,n,i){if(t&&"function"==typeof t[n])try{t[n]()}catch(t){T(e,i+" "+n+" hook execution error\n"+(t.message||t))}}function U(e,t){return(t=t||this.namespace)?this.doc.createElementNS(t,e):this.doc.createElement(e)}function Y(){return function(e){if(e!==X&&null!==e){var t=!0;return function e(t,n,i){if(t!==X&&null!==t){if(!i(t))return!1;if(null!==t.nodes&&t.nodes.length)for(var o=0,r=t.nodes;o<r.length;o++){if(!s(r[o]))return!1}}return!0;function s(t){var o=t.kind;if("#fragment"===o)return!!i(t)&&e(t.contentView,n,i);if("#container"!==o)return i(t);if(!i(t))return!1;var r=t,s=r.subKind;if("##block"===s){var a=r.views;if(null!==a)for(var l=0,d=a;l<d.length;l++){var c=d[l];if(!e(c,n,i))return!1}if(n&&r.viewPool)for(var f=0,u=r.viewPool;f<u.length;f++){var h=u[f];if(!e(h,n,i))return!1}}else if("##cpt"===s){var p=r.template;if(null!==p)return e(p.view,n,i)}else"##async"===s&&console.log("TODO: support scanNode for @async block");return!0}}(e,!1,(function(e){if(!t)return!1;var n=e.kind;if("#view"===n){var i=e;if(i.cm){var o=i.doc.createDocumentFragment();i.domNode=o,i.cmAppends=[function(e){e.domNode?ke(e.domNode,o):e.domNode=o}]}!function(e){if(e.instructions){var t=e.instructions.slice(0),n=t.length;if(e.instructions.splice(0,n),e.instructions=void 0,n)for(var i=0;n>i;i+=2)t[i].apply(null,t[i+1])}}(i)}else if("#element"===n||"#text"===n)return t=!1;return!0})),t}return!0}(this)}function G(e,t,n,i){var o={kind:"#view",uid:"view"+ ++S,nodes:null,namespace:void 0,namespaces:void 0,doc:null,parentView:e,cm:!0,cmAppends:null,lastRefresh:0,container:null,projectionHost:null,template:i,rootDomNode:null,anchorNode:null,expressions:void 0,oExpressions:void 0,instructions:void 0,paramNode:void 0,createElement:U,isEmpty:Y};return e?Q(o,e,t):o.doc="undefined"!=typeof document?document:null,o}function J(e,t,n){if(n){var i=function(e){var t=e;for(;t&&!t.template;)t=t.parentView;return t}(e);if(i!==X&&null!==i)for(var o=i.template,r=n.length,s=0;r>s;s++)o.registerLabel(n[s],t)}}function Q(e,t,n){if(e.parentView=t,e.doc=t.doc,e.container=n,e.rootDomNode=t.rootDomNode,t.namespace){var i=t.namespace;e.namespace=i,e.namespaces=[i]}}function Z(e,t,n,i,o){return function(){return new B(e,t,n,i,o)}}var ee=[];function te(e,t,n){var i=e.cm;return i?(e.nodes=new Array(n),e.cmAppends||(e.cmAppends=[],e.anchorNode&&(e.cmAppends[0]=function(t,n){t.domNode?De(t.domNode,e.anchorNode,e.rootDomNode):t.domNode=e.rootDomNode}))):e.cmAppends=null,i}function ne(e,t,n,i,o){var r,s=e.nodes[n];if(s&&s.attached||T(e,"Invalid ζview call: container must be attached ("+(s?s.uid:"XX")+") - pview: "+e.uid+" containerIdx: "+n),"#container"===s.kind)if("##block"===s.subKind){var a=(l=s).views;1===o&&(l.insertFn=null),1===o&&l.views.length>1?(l.previousNbrOfViews=a.length,r=a.shift(),l.viewPool.length?l.viewPool=a.concat(l.viewPool):l.viewPool=a,l.views=[r]):(r=l.views[o-1])||(l.viewPool.length>0?(l.insertFn||(l.insertFn=ie(e,l)),re((r=a[o-1]=l.viewPool.shift()).nodes[0],l.insertFn)):((r=a[o-1]=G(e,l)).nodes=new Array(i),e.cm&&l.cmAppend?r.cmAppends=[l.cmAppend]:e.cm||(r.cmAppends=[ie(e,l)]))),l.lastRefresh=r.lastRefresh=e.lastRefresh}else{var l;(r=(l=s).contentView)||((r=l.contentView=G(e,l)).nodes=new Array(i)),r.lastRefresh=e.lastRefresh}else if("#param"===s.kind){var d=s;(r=d.contentView)||(r=d.contentView=G(e,null),d.viewPool&&(d.viewPool[d.viewInstanceIdx]=r),r.nodes=new Array(i),r.paramNode=d),r.lastRefresh=e.lastRefresh}return r}function ie(e,t){var n=function e(t,n){for(;;){if(n||T(t,"Internal error - findNextSiblingDomNd: nd cannot be undefined"),0===n.idx){if(!n.attached)return{position:"defer",parentDomNd:void 0};if(n.domNode.nodeType===K)return{position:"lastChild",parentDomNd:n.domNode};var i=t.parentView;if(i){if(t.projectionHost){var o=t.projectionHost.hostNode;return"#element"===o.kind?{position:"lastChild",parentDomNd:o.domNode}:e(t.projectionHost.view,o)}if(t.container&&"##block"===t.container.subKind){var r=t.container,s=r.views.indexOf(t);if(s>-1)for(var a=void 0,l=void 0,d=s+1;d<r.views.length;d++)if((a=r.views[d]).nodes&&a.nodes.length&&(l=m(a,a.nodes[0],r.domNode)))return l;for(var c=r.viewPool,f=void 0,u=0,h=c;u<h.length;u++){if((a=h[u]).nodes&&a.nodes.length&&a.nodes[0].attached&&(f=m(a,a.nodes[0],r.domNode)))return f}}return e(i,t.container)}return{position:"lastOnRoot",parentDomNd:t.rootDomNode,nextDomNd:t.anchorNode}}if(!n.nextSibling){var p=t.nodes[n.parentIdx];return"#element"===p.kind?{position:"lastChild",parentDomNd:me(t,n)}:e(t,p)}var v=m(t,n.nextSibling,me(t,n));if(v)return v;n=n.nextSibling}function m(e,t,n){if(!t)return null;if("#element"===t.kind||"#text"===t.kind)return{position:"beforeChild",nextDomNd:t.domNode,parentDomNd:n};if("#fragment"===t.kind){for(var i=void 0,o=t.firstChild;o;){if(i=m(e,o,n))return i;o=o.nextSibling}if(t.contentView){var r=t.contentView;if(r.nodes)return m(r,r.nodes[0],n)}return null}if("#container"===t.kind){var s=t;i=null;if("##block"===s.subKind)for(var a=s.views,l=a.length,d=0;l>d&&!(i=m(a[d],a[d].nodes[0],n));d++);else if("##cpt"===s.subKind){var c=s.template.view;i=m(c,c.nodes[0],n)}return i||null}throw new Error("TODO findFirstDomNd: "+t.kind)}}(e,t),i=n.position,o=n.nextDomNd,r=n.parentDomNd;return"beforeChild"===i||"lastOnRoot"===i?function(e,t){e.domNode?De(e.domNode,o,r):e.domNode=r}:"lastChild"===i?function(e,t){e.domNode?ke(e.domNode,r):e.domNode=r}:function(){console.warn("TODO: VALIDATE VIEW APPEND: ",i),function(e,t,n){void 0===t&&(t="");n&&e.uid!==n||(console.log(""),console.log(Ve),t&&console.log(t+":"),function e(t,n){void 0===n&&(n="");if(!t.nodes)return void console.log(""+n+t.uid+" - no nodes");var i=t.parentView?t.parentView.uid:"XX",o=t.projectionHost,r=o?" >>> projection host: "+o.hostNode.uid+" in "+o.view.uid:"";console.log(n+"*"+t.uid+"* cm:"+t.cm+" isTemplate:"+(void 0!==t.template)+" parentView:"+i+r);for(var s,a=t.nodes.length,l="",d=0;a>d;d++)if(s=t.nodes[d])if(l=s.uid.length<5?["     ","    ","   ","  "," "][s.uid.length]:"","#container"===s.kind){var c=s,f=c.domNode?c.domNode.uid:"XX";if(console.log(n+"["+d+"] "+s.uid+l+" "+f+" attached:"+(s.attached?1:0)+" parent:"+x(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")),"##block"===c.subKind){var u=c,h=u.views.length;if(h)for(var p=0;h>p;p++)if(u.views[p]){var v=u.views[p];f=v.rootDomNode?v.rootDomNode.$uid:"XX",console.log(n+"  - view #"+p),e(u.views[p],"    "+n)}else console.log(n+"  - view #"+p+" UNDEFINED");else console.log(n+"  - no child views")}else if("##cpt"===c.subKind){var m=c,g=m.template,w=m.contentView;w?(console.log(n+"  - light DOM:"),e(w,"    "+n)):console.log(n+"  - light DOM: none"),g?(console.log(n+"  - shadow DOM:"),e(g.view,"    "+n)):console.log(n+"  - no template")}else console.log(n+"  - "+c.subKind+" container")}else{f=s.domNode?s.domNode.uid:"XX";var b="";if(s.domNode&&"#text"===s.kind)b=" text=#"+s.domNode._textContent+"#";else if("#fragment"===s.kind||"#element"===s.kind){for(var N=[],y=s.firstChild;y;)N.push(y.uid),y=y.nextSibling;b=" children:["+N.join(", ")+"]";var C=s.contentView;C&&(b+=" >>> content view: "+C.uid)}console.log(n+"["+s.idx+"] "+s.uid+l+" "+f+" attached:"+(s.attached?1:0)+" parent:"+x(s.parentIdx)+" nextSibling:"+(s.nextSibling?s.nextSibling.uid:"X")+b)}else console.log(n+"["+d+"] XX");function x(e){return e<0?"X":e}}(e))}(e,"getViewInsertFunction for "+t.uid)}}function oe(e,t,n){var i=e.nodes[t];if(i&&"##block"===i.subKind){var o=i,r=o.lastRefresh;if(n||r===e.lastRefresh){var s=o.views.length;if(!n){if(s!==o.previousNbrOfViews)for(var a=o.viewPool,l=a.length,d=void 0,c=0;l>c;c++)ge(d=a[c],d.nodes[0]);o.previousNbrOfViews=s}}else ge(e,o)}}function re(e,t,n){if(!e.attached){if(t(e,!0),e.attached=!0,"#fragment"===e.kind)for(var i=e.firstChild;i;)re(i,t),i=i.nextSibling;else if("#container"===e.kind){var o=e.subKind;if("##cpt"===o){var r=e.template,s=r?r.view.nodes[0]:null;r&&(r.forceRefresh=!0),s&&re(s,t)}else if("##block"===o)for(var a=e.views,l=0;a.length>l;l++)re(a[l].nodes[0],t)}if("#fragment"===e.kind||"#element"===e.kind){var d=e.contentView;d&&re(d.nodes[0],t)}}}function se(e,t,n){if(n)for(var i=n.length,o=0;i>o;o++)oe(e,n[o],e.cm);e.cm&&(e.cm=!1,e.cmAppends=null)}function ae(e,t,n,i,o,r,s,a,l){if(t){var d=e.createElement(o);if(a)for(var c=a.length,f=0;c>f;f+=2)d.setAttribute(a[f],a[f+1]);if(l){c=l.length;for(var u=0;c>u;u+=2)d[l[u]]=l[u+1]}var h={kind:"#element",uid:"elt"+ ++S,idx:n,parentIdx:-1,ns:"",domNode:d,attached:!0,nextSibling:void 0,firstChild:void 0,lastChild:void 0,contentView:null};e.nodes[n]=h,J(e,d,s),e.cmAppends[i](h,!1),r&&(e.cmAppends[i+1]=function(e,t){e.domNode?ke(e.domNode,d):e.domNode=d,t||function(e,t){e.firstChild?(e.lastChild.nextSibling=t,e.lastChild=t):(e.firstChild=e.lastChild=t,t.nextSibling=void 0);t.parentIdx=e.idx}(h,e)})}else s&&J(e,e.nodes[n].domNode,s)}function le(e,t,n){if(n)e.namespaces?e.namespaces.push(n):e.namespaces=[n],e.namespace=n;else{var i=e.namespaces.length;1===i?e.namespace=e.namespaces=void 0:(e.namespaces.pop(),e.namespace=e.namespaces[i-2])}}function de(e,t,n){if(e.expressions){var i=e.expressions;if(i.length>t&&i[t]===n)return ee;i[t]=n}else e.expressions=[],e.expressions[t]=n;return n}function ce(e,t,n){if(t){if(n[2]){var i=e.oExpressions;return i[2*n[0]]?ee:(i[2*n[0]]=1,n[1])}return de(e,n[0],n[1])}return n}function fe(e,t,n,i,o){if(t){var r=function(e,t,n){var i;if(1===n)i={kind:"#container",subKind:"##block",uid:"cnb"+ ++S,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,views:[],viewPool:[],cmAppend:t,lastRefresh:0,previousNbrOfViews:0,insertFn:null};else{if(2!==n)return console.warn("TODO: new cnt type"),null;i={kind:"#container",subKind:"##cpt",uid:"cnc"+ ++S,idx:e,parentIdx:-1,ns:"",domNode:void 0,attached:!0,nextSibling:void 0,cmAppend:t,cptRef:null,template:null,data:null,contentView:null,dynamicParams:void 0}}return i}(n,null,o);return e.nodes[n]=r,function(e,t,n){if(e.cmAppends){var i=e.cmAppends[n];i?(t.cmAppend=function(e,t){i(e,!0)},i(t,!1)):console.log("ERROR?",i===X)}}(e,r,i),r}}function ue(e,t,n,i,o,r,s,a,l,d){var c;n=n||0,t?c=e.nodes[i]||fe(e,t,i,o,2):(c=e.nodes[i]).lists&&(c.lists.sizes={});var f=ce(e,n,r);if(c.template){if(f!==ee&&c.cptRef!==f){var u=c.data;c.template.dispose(!0),g();var h=c.data;for(var p in u)if(u.hasOwnProperty(p)&&p.match(H)){var m=RegExp.$1;v(h,m)&&(h[m]=u[m])}}}else{if(f===ee)return void T(e,"Invalid component ref");g()}function g(){var t=c.template=f();c.cptRef=f,Q(t.view,e,c),t.disconnectObserver(),c.data=t.api,function(t){if(l){var n=l.length;if(!t&&n)T(e,"Invalid parameter: "+l[0]);else for(var i=0;n>i;i+=2)v(t,l[i])?t[l[i]]=l[i+1]:T(e,"Invalid parameter: "+l[i])}}(t.api)}d&&(c.dynamicParams={}),0===n&&s&&he(e,i,c,a,d)}function he(e,t,n,i,o){var r=(n=n||e.nodes[t])?n.template:void 0;if(void 0!==r){if(r.view.lastRefresh=e.lastRefresh-1,function(e){if(e.lists)for(var t=e.lists,n=t.listNames,i=void 0,o=void 0,r=void 0,s=void 0,a=0;n.length>a;a++)i=n[a],o=t.sizes[i]||0,r=e.data[i],s=r.length,o<s&&r.splice(o,s-o)}(n),n.contentView){r.api.$content=n.contentView;var s=n.contentView.instructions;s&&s.length&&(r.forceRefresh=!0)}if(r.view.cm)r.view.cmAppends=[n.cmAppend];else{if(o)for(var a=o.length,l=(n?n.dynamicParams:{})||{},d=r.api,c=0;a>c;c++)l[o[c]]||N(d,o[c]);var f=r.view.nodes[0];if(!f.attached)r.forceRefresh=!0,re(f,ie(e,n))}i&&J(e,r.api,i),r.render()}}function pe(e,t,n,i,o){if(o!==ee){var r=ce(e,t,o);if(r!==ee){var s=e.nodes[n].domNode;void 0===r?s.removeAttribute(i):s.setAttribute(i,r)}}}function ve(e,t,n,i,o,r){if(r!==ee){var s=ce(e,n,r);if(s!==ee){var a=e.nodes[i],l=a.kind;if("#container"===l){var d=a.data;(function(e,t,n,i,o){if(i&&(!e.cm||v(i,o)))return!0;var r="";n.template&&(r=" on <*"+n.template.templateName+"/>");return T(e,"Invalid parameter '"+o+"'"+r),!1})(e,0,a,d,o)&&(d[o]=s)}else if("#param"===l)!function(e,t,n,i,o){if(0===o){if(n.dataHolder)return n.dataHolder[n.dataName]=i,n.dataHolder}else{if(n.data)return t&&!v(n.data,o)&&T(e,"Invalid param node parameter: "+o),n.data[o]=i,n.data;T(e,"Invalid param node parameter: "+o)}}(e,t,a,s,o);else if("#decorator"===l){var c=a;t&&!function(e,t,n){if(!v(t.api,n))return T(e,"Invalid decorator parameter '"+n+"' on "+t.refName),!1;return!0}(e,c,o)||(c.api[o]=s)}}}}function me(e,t){if(0===t.idx&&e.projectionHost){if(!t.attached)return null;var n=e.projectionHost.hostNode;return"#element"===n.kind?n.domNode:me(e.projectionHost.view,n)}return 0===t.idx?e.parentView?me(e.parentView,e.container):e.rootDomNode:e.nodes[t.parentIdx].domNode}function ge(e,t){if(t&&t.attached)if("#text"===t.kind||"#element"===t.kind){var n=me(e,t);t.attached=!1,n?n.removeChild(t.domNode):T(e,"Internal error - parent not found for: "+t.uid)}else if("#container"===t.kind){if("##block"===t.subKind){for(var i=t,o=i.views,r=o.length,s=void 0,a=0;r>a;a++)s=o[a].nodes[0],ge(o[a],s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0);i.views=[],i.previousNbrOfViews=0,i.viewPool=o.concat(i.viewPool)}else if("##cpt"===t.subKind){var l=t.template;s=l.view.nodes[0];ge(l.view,s),s.attached=!1,"#container"!==s.kind&&"#fragment"!==s.kind||(s.domNode=void 0)}}else if("#fragment"===t.kind){var d=t;if(d.attached=!1,d.contentView)ge(d.contentView,d.contentView.nodes[0]);else if(d.firstChild)for(var c=d.firstChild;c;)ge(e,c),c=c.nextSibling;d.domNode=void 0}else"#param"===t.kind?console.warn("TODO removeFromDom for param nodes"):console.warn("RemoveFromDom for "+t.kind)}var we=y,be=function(e,t){return e||(e=R,t=3),function(n,i){var s="ΔΔ"+i,a=n[o];a||(a=n[o]={}),a[i]=t?1===t?R:A:e,n[s]=void 0,function(e,t,n,i){i&&delete e[t]&&Object.defineProperty(e,t,i)}(n,i,0,{get:function(){return function(e,t,n,i,o){e.ΔComputeDependencies&&(e.ΔComputeDependencies[n]=!0);var r=e[t];(void 0===r||l&&null===r)&&(r=e[t]=!l&&o?o>1?void 0:null:i(),I(e,r));return r}(this,s,i,e,t)},set:function(t){!function(e,t,n,i,o,s){var a=m(i);if(e.ΔComputeDependencies)return void console.error("[Trax] @computed properties must not mutate the Data object when calculated");i&&!a&&o.ΔCreateProxy&&(i=o.ΔCreateProxy(i)||i,a=m(i));var l=!1,d=s[n];g(e)?l=d!==i:d!==i&&(!function e(t){if(!m(t))return;var n=!0;g(t)?n=!1:t.ΔChangeVersion+=1;if(j.register(t),n){var i=t.ΔMd;i&&i.parents&&f(i.parents,(function(t){e(t)}))}}(e),l=!0);l&&(a&&void 0===i&&(i=null),(a||d&&m(d))&&function(e,t,n){(function(e,t){if(t){var n=t.ΔMd;n&&n.parents&&(n.parents=u(n.parents,e))}})(e,t),I(e,n)}(e,d,i),s[n]=i,function(e,t,n,i,o){var s=e?e.ΔMd:void 0;if(s&&s.trackers){var a=e[r]||e;f(s.trackers,(function(e){e(a,t,n,i,o)}))}}(e,"set",t,d,i))}(this,i,s,t,e,this)},enumerable:!0,configurable:!0})}},Ne=k,ye=V;function Ce(e){e.prototype[z]=!0,y(e)}function xe(e,t){return!0===e.prototype[t]}function ke(e,t,n){t.appendChild(e)}function De(e,t,n,i){n.insertBefore(e,t)}var Ve="-------------------------------------------------------------------------------";var Re,Ae,Ie,Oe=function(){function n(){}return n.prototype.$init=function(){this.iid=setInterval(this.tick.bind(this),100),this.tick()},n.prototype.$dispose=function(){clearInterval(this.iid),this.iid=null},n.prototype.tick=function(){var e=new Date;this.hours=e.getHours(),this.minutes=e.getMinutes(),this.seconds=e.getSeconds(),this.milliseconds=e.getMilliseconds()},e([be(),t("design:type",Object)],n.prototype,"iid",void 0),e([be(ye),t("design:type",Number)],n.prototype,"hours",void 0),e([be(ye),t("design:type",Number)],n.prototype,"minutes",void 0),e([be(ye),t("design:type",Number)],n.prototype,"seconds",void 0),e([be(ye),t("design:type",Number)],n.prototype,"milliseconds",void 0),n=e([Ce],n)}(),Pe=(Re={},Ae=["y1","2"],Ie=function(){function n(){}return e([be(Ne),t("design:type",String)],n.prototype,"kind",void 0),e([be(ye),t("design:type",Number)],n.prototype,"rotation",void 0),n=e([we],n)}(),Z("hand","clock/clock.ts",Re,(function(e,t,n){var i=n.kind,o=n.rotation;ae(e,te(e,0,1),0,0,"line",0,0,Ae),pe(e,0,0,"class",de(e,0,i)),pe(e,0,0,"y2",de(e,1,"minute"===i?"-25":"-17")),pe(e,0,0,"transform",de(e,2,"rotate("+o+")")),se(e)}),Ie));(function(){var e={},t=["class","clock","viewBox","0 0 100 100"],n=["transform","translate(50,50)"],i=["class","clock-face","r","48"],o=["y2",45],r=["kind","hour"],s=["kind","minute"],a=["class","second","y1","10","y2","-38"],l=["class","second-cw","transform","translate(0,8)","r","1"],d=[3];return Z("clock","clock/clock.ts",e,(function(e,c,f){var u,h=0,p=te(e,0,9);le(e,0,"http://www.w3.org/2000/svg"),ae(e,p,0,0,"svg",1,0,t),ae(e,p,1,1,"g",1,0,n),ae(e,p,2,2,"circle",0,0,i),fe(e,p,3,2,1);for(var v=0;60>v;v++){var m=v%5==0;ae(u=ne(e,0,3,1,++h),u.cm,0,0,"line",0,0,o),pe(u,0,0,"class",de(u,0,m?"major":"minor")),pe(u,0,0,"y1",de(u,1,m?35:42)),pe(u,0,0,"transform",de(u,2,"rotate("+360*v/60+")")),se(u)}ue(e,p,0,4,2,de(e,0,Pe),0,0,r),ve(e,p,0,4,"rotation",de(e,1,30*c.hours+c.minutes/2)),he(e,4),ue(e,p,0,5,2,de(e,2,Pe),0,0,s),ve(e,p,0,5,"rotation",de(e,3,6*c.minutes+c.seconds/10)),he(e,5),ae(e,p,6,2,"g",1),pe(e,0,6,"transform",de(e,4,"rotate("+6*(c.seconds+.001*c.milliseconds)+")")),ae(e,p,7,3,"line",0,0,a),ae(e,p,8,3,"circle",0,0,l),le(e),se(e,0,d)}),Oe)})()().attach(document.getElementById("main")).render()}();
