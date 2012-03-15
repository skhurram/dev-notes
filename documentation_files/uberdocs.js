/*!
     * jQuery JavaScript Library v1.4.4
     * http://jquery.com/
     *
     * Copyright 2010, John Resig
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://jquery.org/license
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     * Copyright 2010, The Dojo Foundation
     * Released under the MIT, BSD, and GPL Licenses.
     *
     * Date: Thu Nov 11 19:04:53 2010 -0500
     */
    (function(E,B){function ka(a,b,d){if(d===B&&a.nodeType===1){d=a.getAttribute("data-"+b);if(typeof d==="string"){try{d=d==="true"?true:d==="false"?false:d==="null"?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=B}return d}function U(){return false}function ca(){return true}function la(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ka(a){var b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.data(this,this.nodeType?"events":"__events__");if(typeof h==="function")h=
    h.events;if(!(a.liveFired===this||!h||!h.live||a.button&&a.type==="click")){if(a.namespace)A=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");a.liveFired=this;var J=h.live.slice(0);for(k=0;k<J.length;k++){h=J[k];h.origType.replace(X,"")===a.type?f.push(h.selector):J.splice(k--,1)}f=c(a.target).closest(f,a.currentTarget);o=0;for(x=f.length;o<x;o++){r=f[o];for(k=0;k<J.length;k++){h=J[k];if(r.selector===h.selector&&(!A||A.test(h.namespace))){l=r.elem;e=null;if(h.preType==="mouseenter"||
    h.preType==="mouseleave"){a.type=h.preType;e=c(a.relatedTarget).closest(h.selector)[0]}if(!e||e!==l)C.push({elem:l,handleObj:h,level:r.level})}}}o=0;for(x=C.length;o<x;o++){f=C[o];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;A=f.handleObj.origHandler.apply(f.elem,arguments);if(A===false||a.isPropagationStopped()){d=f.level;if(A===false)b=false;if(a.isImmediatePropagationStopped())break}}return b}}function Y(a,b){return(a&&a!=="*"?a+".":"")+b.replace(La,
    "`").replace(Ma,"&")}function ma(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b==="string"){var e=c.grep(a,function(f){return f.nodeType===1});if(Na.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)>=0===d})}function na(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,
    e);if(e=e&&e.events){delete f.handle;f.events={};for(var h in e)for(var l in e[h])c.event.add(this,h,e[h][l],e[h][l].data)}}})}function Oa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function oa(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return e;c.each(b==="width"?Pa:Qa,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);if(d==="margin")e+=parseFloat(c.css(a,
    "margin"+this))||0;else e-=parseFloat(c.css(a,"border"+this+"Width"))||0});return e}function da(a,b,d,e){if(c.isArray(b)&&b.length)c.each(b,function(f,h){d||Ra.test(a)?e(a,h):da(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e)});else if(!d&&b!=null&&typeof b==="object")c.isEmptyObject(b)?e(a,""):c.each(b,function(f,h){da(a+"["+f+"]",h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(pa.concat.apply([],pa.slice(0,b)),function(){d[this]=a});return d}function qa(a){if(!ea[a]){var b=c("<"+
    a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d==="")d="block";ea[a]=d}return ea[a]}function fa(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var t=E.document,c=function(){function a(){if(!b.isReady){try{t.documentElement.doScroll("left")}catch(j){setTimeout(a,1);return}b.ready()}}var b=function(j,s){return new b.fn.init(j,s)},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
    C=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};b.fn=b.prototype={init:function(j,
    s){var v,z,H;if(!j)return this;if(j.nodeType){this.context=this[0]=j;this.length=1;return this}if(j==="body"&&!s&&t.body){this.context=t;this[0]=t.body;this.selector="body";this.length=1;return this}if(typeof j==="string")if((v=h.exec(j))&&(v[1]||!s))if(v[1]){H=s?s.ownerDocument||s:t;if(z=A.exec(j))if(b.isPlainObject(s)){j=[t.createElement(z[1])];b.fn.attr.call(j,s,true)}else j=[H.createElement(z[1])];else{z=b.buildFragment([v[1]],[H]);j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,
    j)}else{if((z=t.getElementById(v[2]))&&z.parentNode){if(z.id!==v[2])return f.find(j);this.length=1;this[0]=z}this.context=t;this.selector=j;return this}else if(!s&&!x.test(j)){this.selector=j;this.context=t;j=t.getElementsByTagName(j);return b.merge(this,j)}else return!s||s.jquery?(s||f).find(j):b(s).find(j);else if(b.isFunction(j))return f.ready(j);if(j.selector!==B){this.selector=j.selector;this.context=j.context}return b.makeArray(j,this)},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},
    toArray:function(){return N.call(this,0)},get:function(j){return j==null?this.toArray():j<0?this.slice(j)[0]:this[j]},pushStack:function(j,s,v){var z=b();b.isArray(j)?M.apply(z,j):b.merge(z,j);z.prevObject=this;z.context=this.context;if(s==="find")z.selector=this.selector+(this.selector?" ":"")+v;else if(s)z.selector=this.selector+"."+s+"("+v+")";return z},each:function(j,s){return b.each(this,j,s)},ready:function(j){b.bindReady();if(b.isReady)j.call(t,b);else q&&q.push(j);return this},eq:function(j){return j===
    -1?this.slice(j):this.slice(j,+j+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(j){return this.pushStack(b.map(this,function(s,v){return j.call(s,v,s)}))},end:function(){return this.prevObject||b(null)},push:M,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;
    if(typeof G==="boolean"){ga=G;G=arguments[1]||{};K=2}if(typeof G!=="object"&&!b.isFunction(G))G={};if(Q===K){G=this;--K}for(;K<Q;K++)if((j=arguments[K])!=null)for(s in j){v=G[s];z=j[s];if(G!==z)if(ga&&z&&(b.isPlainObject(z)||(H=b.isArray(z)))){if(H){H=false;v=v&&b.isArray(v)?v:[]}else v=v&&b.isPlainObject(v)?v:{};G[s]=b.extend(ga,v,z)}else if(z!==B)G[s]=z}return G};b.extend({noConflict:function(j){E.$=e;if(j)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(j){j===true&&b.readyWait--;
    if(!b.readyWait||j!==true&&!b.isReady){if(!t.body)return setTimeout(b.ready,1);b.isReady=true;if(!(j!==true&&--b.readyWait>0))if(q){var s=0,v=q;for(q=null;j=v[s++];)j.call(t,b);b.fn.trigger&&b(t).trigger("ready").unbind("ready")}}},bindReady:function(){if(!p){p=true;if(t.readyState==="complete")return setTimeout(b.ready,1);if(t.addEventListener){t.addEventListener("DOMContentLoaded",u,false);E.addEventListener("load",b.ready,false)}else if(t.attachEvent){t.attachEvent("onreadystatechange",u);E.attachEvent("onload",
    b.ready);var j=false;try{j=E.frameElement==null}catch(s){}t.documentElement.doScroll&&j&&a()}}},isFunction:function(j){return b.type(j)==="function"},isArray:Array.isArray||function(j){return b.type(j)==="array"},isWindow:function(j){return j&&typeof j==="object"&&"setInterval"in j},isNaN:function(j){return j==null||!r.test(j)||isNaN(j)},type:function(j){return j==null?String(j):R[y.call(j)]||"object"},isPlainObject:function(j){if(!j||b.type(j)!=="object"||j.nodeType||b.isWindow(j))return false;if(j.constructor&&
    !F.call(j,"constructor")&&!F.call(j.constructor.prototype,"isPrototypeOf"))return false;for(var s in j);return s===B||F.call(j,s)},isEmptyObject:function(j){for(var s in j)return false;return true},error:function(j){throw j;},parseJSON:function(j){if(typeof j!=="string"||!j)return null;j=b.trim(j);if(C.test(j.replace(J,"@").replace(w,"]").replace(I,"")))return E.JSON&&E.JSON.parse?E.JSON.parse(j):(new Function("return "+j))();else b.error("Invalid JSON: "+j)},noop:function(){},globalEval:function(j){if(j&&
    l.test(j)){var s=t.getElementsByTagName("head")[0]||t.documentElement,v=t.createElement("script");v.type="text/javascript";if(b.support.scriptEval)v.appendChild(t.createTextNode(j));else v.text=j;s.insertBefore(v,s.firstChild);s.removeChild(v)}},nodeName:function(j,s){return j.nodeName&&j.nodeName.toUpperCase()===s.toUpperCase()},each:function(j,s,v){var z,H=0,G=j.length,K=G===B||b.isFunction(j);if(v)if(K)for(z in j){if(s.apply(j[z],v)===false)break}else for(;H<G;){if(s.apply(j[H++],v)===false)break}else if(K)for(z in j){if(s.call(j[z],
    z,j[z])===false)break}else for(v=j[0];H<G&&s.call(v,H,v)!==false;v=j[++H]);return j},trim:O?function(j){return j==null?"":O.call(j)}:function(j){return j==null?"":j.toString().replace(k,"").replace(o,"")},makeArray:function(j,s){var v=s||[];if(j!=null){var z=b.type(j);j.length==null||z==="string"||z==="function"||z==="regexp"||b.isWindow(j)?M.call(v,j):b.merge(v,j)}return v},inArray:function(j,s){if(s.indexOf)return s.indexOf(j);for(var v=0,z=s.length;v<z;v++)if(s[v]===j)return v;return-1},merge:function(j,
    s){var v=j.length,z=0;if(typeof s.length==="number")for(var H=s.length;z<H;z++)j[v++]=s[z];else for(;s[z]!==B;)j[v++]=s[z++];j.length=v;return j},grep:function(j,s,v){var z=[],H;v=!!v;for(var G=0,K=j.length;G<K;G++){H=!!s(j[G],G);v!==H&&z.push(j[G])}return z},map:function(j,s,v){for(var z=[],H,G=0,K=j.length;G<K;G++){H=s(j[G],G,v);if(H!=null)z[z.length]=H}return z.concat.apply([],z)},guid:1,proxy:function(j,s,v){if(arguments.length===2)if(typeof s==="string"){v=j;j=v[s];s=B}else if(s&&!b.isFunction(s)){v=
    s;s=B}if(!s&&j)s=function(){return j.apply(v||this,arguments)};if(j)s.guid=j.guid=j.guid||s.guid||b.guid++;return s},access:function(j,s,v,z,H,G){var K=j.length;if(typeof s==="object"){for(var Q in s)b.access(j,Q,s[Q],z,H,v);return j}if(v!==B){z=!G&&z&&b.isFunction(v);for(Q=0;Q<K;Q++)H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);return j}return K?H(j[0],s):B},now:function(){return(new Date).getTime()},uaMatch:function(j){j=j.toLowerCase();j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf("compatible")<0&&n.exec(j)||
    [];return{browser:j[1]||"",version:j[2]||"0"}},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(j,s){R["[object "+s+"]"]=s.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=m.version}if(b.browser.webkit)b.browser.safari=true;if(D)b.inArray=function(j,s){return D.call(s,j)};if(!/\s/.test("\u00a0")){k=/^[\s\xA0]+/;o=/[\s\xA0]+$/}f=b(t);if(t.addEventListener)u=function(){t.removeEventListener("DOMContentLoaded",u,
    false);b.ready()};else if(t.attachEvent)u=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",u);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=t.documentElement,b=t.createElement("script"),d=t.createElement("div"),e="script"+c.now();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],l=t.createElement("select"),
    k=l.appendChild(t.createElement("option"));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,
    scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};l.disabled=true;c.support.optDisabled=!k.disabled;b.type="text/javascript";try{b.appendChild(t.createTextNode("window."+e+"=1;"))}catch(o){}a.insertBefore(b,a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}try{delete b.test}catch(x){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function r(){c.support.noCloneEvent=
    false;d.detachEvent("onclick",r)});d.cloneNode(true).fireEvent("onclick")}d=t.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=t.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var r=t.createElement("div");r.style.width=r.style.paddingLeft="1px";t.body.appendChild(r);c.boxModel=c.support.boxModel=r.offsetWidth===2;if("zoom"in r.style){r.style.display="inline";r.style.zoom=
    1;c.support.inlineBlockNeedsLayout=r.offsetWidth===2;r.style.display="";r.innerHTML="<div style='width:4px;'></div>";c.support.shrinkWrapBlocks=r.offsetWidth!==2}r.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var A=r.getElementsByTagName("td");c.support.reliableHiddenOffsets=A[0].offsetHeight===0;A[0].style.display="";A[1].style.display="none";c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&A[0].offsetHeight===0;r.innerHTML="";t.body.removeChild(r).style.display=
    "none"});a=function(r){var A=t.createElement("div");r="on"+r;var C=r in A;if(!C){A.setAttribute(r,"return;");C=typeof A[r]==="function"}return C};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=f=h=null}})();var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?ra:a;var e=a.nodeType,f=e?a[c.expando]:null,h=
    c.cache;if(!(e&&!f&&typeof b==="string"&&d===B)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b==="object")if(e)h[f]=c.extend(h[f],b);else c.extend(h,b);else if(e&&!h[f])h[f]={};a=e?h[f]:h;if(d!==B)a[b]=d;return typeof b==="string"?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?ra:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&&c.isEmptyObject(h)&&c.removeData(a)}}else if(d&&c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);
    else if(d)delete f[e];else for(var l in a)delete a[l]}},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});c.fn.extend({data:function(a,b){var d=null;if(typeof a==="undefined"){if(this.length){var e=this[0].attributes,f;d=c.data(this[0]);for(var h=0,l=e.length;h<l;h++){f=e[h].name;if(f.indexOf("data-")===0){f=f.substr(5);ka(this[0],f,d[f])}}}return d}else if(typeof a==="object")return this.each(function(){c.data(this,
    a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(b===B){d=this.triggerHandler("getData"+k[1]+"!",[k[0]]);if(d===B&&this.length){d=c.data(this[0],a);d=ka(this[0],a,d)}return d===B&&k[1]?this.data(k[0]):d}else return this.each(function(){var o=c(this),x=[k[0],b];o.triggerHandler("setData"+k[1]+"!",x);c.data(this,a,b);o.triggerHandler("changeData"+k[1]+"!",x)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=
    c.data(a,b);if(!d)return e||[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift();if(e==="inprogress")e=d.shift();if(e){b==="fx"&&d.unshift("inprogress");e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===B)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
    a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",
    colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(x){var r=c(this);r.addClass(a.call(this,x,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===
    1)if(f.className){for(var h=" "+f.className+" ",l=f.className,k=0,o=b.length;k<o;k++)if(h.indexOf(" "+b[k]+" ")<0)l+=" "+b[k];f.className=c.trim(l)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(o){var x=c(this);x.removeClass(a.call(this,o,x.attr("class")))});if(a&&typeof a==="string"||a===B)for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1&&f.className)if(a){for(var h=(" "+f.className+" ").replace(sa," "),
    l=0,k=b.length;l<k;l++)h=h.replace(" "+b[l]+" "," ");f.className=c.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,f,h.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){k=e?k:!l.hasClass(f);l[k?"addClass":"removeClass"](f)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,
    "__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(sa," ").indexOf(a)>-1)return true;return false},val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,"option")){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,"select")){var e=b.selectedIndex;d=[];var f=b.options;b=b.type==="select-one";
    if(e<0)return null;var h=b?e:0;for(e=b?e+1:f.length;h<e;h++){var l=f[h];if(l.selected&&(c.support.optDisabled?!l.disabled:l.getAttribute("disabled")===null)&&(!l.parentNode.disabled||!c.nodeName(l.parentNode,"optgroup"))){a=c(l).val();if(b)return a;d.push(a)}}return d}if(ta.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Sa,"")}return B}var k=c.isFunction(a);return this.each(function(o){var x=c(this),r=a;if(this.nodeType===1){if(k)r=
    a.call(this,o,x.val());if(r==null)r="";else if(typeof r==="number")r+="";else if(c.isArray(r))r=c.map(r,function(C){return C==null?"":C+""});if(c.isArray(r)&&ta.test(this.type))this.checked=c.inArray(x.val(),r)>=0;else if(c.nodeName(this,"select")){var A=c.makeArray(r);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),A)>=0});if(!A.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},
    attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return B;if(e&&b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==B;b=e&&c.props[b]||b;var h=Ta.test(b);if((b in a||a[b]!==B)&&e&&!h){if(f){b==="type"&&Ua.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");if(d===null)a.nodeType===1&&a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&
    b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&&a.href?0:B;return a[b]}if(!c.support.style&&e&&b==="style"){if(f)a.style.cssText=""+d;return a.style.cssText}f&&a.setAttribute(b,""+d);if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b))return B;a=!c.support.hrefNormalized&&e&&h?a.getAttribute(b,2):a.getAttribute(b);return a===null?B:a}});var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){return a.replace(Xa,"\\$&")},ua={focusin:0,focusout:0};
    c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&&a!==E&&!a.frameElement)a=E;if(d===false)d=U;else if(!d)return;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var l=a.nodeType?"events":"__events__",k=h[l],o=h.handle;if(typeof k==="function"){o=k.handle;k=k.events}else if(!k){a.nodeType||(h[l]=h=function(){});h.events=k={}}if(!o)h.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,
    arguments):B};o.elem=a;b=b.split(" ");for(var x=0,r;l=b[x++];){h=f?c.extend({},f):{handler:d,data:e};if(l.indexOf(".")>-1){r=l.split(".");l=r.shift();h.namespace=r.slice(0).sort().join(".")}else{r=[];h.namespace=""}h.type=l;if(!h.guid)h.guid=d.guid;var A=k[l],C=c.event.special[l]||{};if(!A){A=k[l]=[];if(!C.setup||C.setup.call(a,e,r,o)===false)if(a.addEventListener)a.addEventListener(l,o,false);else a.attachEvent&&a.attachEvent("on"+l,o)}if(C.add){C.add.call(a,h);if(!h.handler.guid)h.handler.guid=
    d.guid}A.push(h);c.event.global[l]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?"events":"__events__",w=c.data(a),I=w&&w[J];if(w&&I){if(typeof I==="function"){w=I;I=I.events}if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(f in I)c.event.remove(a,f+b)}else{for(b=b.split(" ");f=b[l++];){r=f;k=f.indexOf(".")<0;o=[];if(!k){o=f.split(".");f=o.shift();x=RegExp("(^|\\.)"+
    c.map(o.slice(0).sort(),Ya).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(A=I[f])if(d){r=c.event.special[f]||{};for(h=e||0;h<A.length;h++){C=A[h];if(d.guid===C.guid){if(k||x.test(C.namespace)){e==null&&A.splice(h--,1);r.remove&&r.remove.call(a,C)}if(e!=null)break}}if(A.length===0||e!=null&&A.length===1){if(!r.teardown||r.teardown.call(a,o)===false)c.removeEvent(a,f,w.handle);delete I[f]}}else for(h=0;h<A.length;h++){C=A[h];if(k||x.test(C.namespace)){c.event.remove(a,r,C.handler,h);A.splice(h--,1)}}}if(c.isEmptyObject(I)){if(b=
    w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w==="function")c.removeData(a,J);else c.isEmptyObject(w)&&c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf("!")>=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&&c.each(c.cache,function(){this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===
    8)return B;a.result=B;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+f]&&d["on"+f].apply(d,b)===false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&&e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){var l;e=a.target;var k=f.replace(X,""),o=c.nodeName(e,"a")&&k===
    "click",x=c.event.special[k]||{};if((!x._default||x._default.call(d,a)===false)&&!o&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){try{if(e[k]){if(l=e["on"+k])e["on"+k]=null;c.event.triggered=true;e[k]()}}catch(r){}if(l)e["on"+k]=l;c.event.triggered=false}}},handle:function(a){var b,d,e,f;d=[];var h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){e=a.type.split(".");a.type=e.shift();d=e.slice(0).sort();e=RegExp("(^|\\.)"+
    d.join("\\.(?:.*\\.)?")+"(\\.|$)")}a.namespace=a.namespace||d.join(".");f=c.data(this,this.nodeType?"events":"__events__");if(typeof f==="function")f=f.events;d=(f||{})[a.type];if(f&&d){d=d.slice(0);f=0;for(var l=d.length;f<l;f++){var k=d[f];if(b||e.test(k.namespace)){a.handler=k.handler;a.data=k.data;a.handleObj=k;k=k.handler.apply(this,h);if(k!==B){a.result=k;if(k===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
    fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||t;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=t.documentElement;d=t.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
    d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(a.which==null&&(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==B)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,
    Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=t.removeEventListener?function(a,b,d){a.removeEventListener&&a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=
    c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ca;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ca;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ca;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
    var va=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},wa=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?wa:va,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?wa:va)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==
    "form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length){a.liveFired=B;return la("submit",this,arguments)}});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){a.liveFired=B;return la("submit",this,arguments)}})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};if(!c.support.changeBubbles){var V,
    xa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(e){return e.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ia.test(d.nodeName)||d.readOnly)){e=c.data(d,"_change_data");f=xa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",f);if(!(e===B||f===e))if(e!=null||f){a.type="change";a.liveFired=
    B;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,"_change_data",xa(a))}},setup:function(){if(this.type===
    "file")return false;for(var a in V)c.event.add(this,a+".specialChange",V[a]);return ia.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ia.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}t.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){ua[b]++===0&&t.addEventListener(a,d,true)},teardown:function(){--ua[b]===
    0&&t.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,e,f){if(typeof d==="object"){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=B}var l=b==="one"?c.proxy(f,function(o){c(this).unbind(o,l);return f.apply(this,arguments)}):f;if(d==="unload"&&b!=="one")this.one(d,e,f);else{h=0;for(var k=this.length;h<k;h++)c.event.add(this[h],d,l,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
    a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=
    1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var ya={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,e,f,h){var l,k=0,o,x,r=h||this.selector;h=h?this:c(this.context);if(typeof d===
    "object"&&!d.preventDefault){for(l in d)h[b](l,e,d[l],r);return this}if(c.isFunction(e)){f=e;e=B}for(d=(d||"").split(" ");(l=d[k++])!=null;){o=X.exec(l);x="";if(o){x=o[0];l=l.replace(X,"")}if(l==="hover")d.push("mouseenter"+x,"mouseleave"+x);else{o=l;if(l==="focus"||l==="blur"){d.push(ya[l]+x);l+=x}else l=(ya[l]||l)+x;if(b==="live"){x=0;for(var A=h.length;x<A;x++)c.event.add(h[x],"live."+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o})}else h.unbind("live."+Y(l,r),f)}}return this}});
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length>0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});
    (function(){function a(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1&&!q){y.sizcache=n;y.sizset=p}if(y.nodeName.toLowerCase()===i){F=y;break}y=y[g]}m[p]=F}}}function b(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1){if(!q){y.sizcache=n;y.sizset=p}if(typeof i!=="string"){if(y===i){F=true;break}}else if(k.filter(i,
    [y]).length>0){F=y;break}}y=y[g]}m[p]=F}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;[0,0].sort(function(){l=false;return 0});var k=function(g,i,n,m){n=n||[];var p=i=i||t;if(i.nodeType!==1&&i.nodeType!==9)return[];if(!g||typeof g!=="string")return n;var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;do{d.exec("");if(q=d.exec(R)){R=q[3];D.push(q[1]);if(q[2]){F=q[3];
    break}}}while(q);if(D.length>1&&x.exec(g))if(D.length===2&&o.relative[D[0]])u=L(D[0]+D[1],i);else for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){g=D.shift();if(o.relative[g])g+=D.shift();u=L(g,u)}else{if(!m&&D.length>1&&i.nodeType===9&&!O&&o.match.ID.test(D[0])&&!o.match.ID.test(D[D.length-1])){q=k.find(D.shift(),i,O);i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]}if(i){q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&i.parentNode?i.parentNode:i,O);u=q.expr?k.filter(q.expr,
    q.set):q.set;if(D.length>0)y=C(u);else N=false;for(;D.length;){q=M=D.pop();if(o.relative[M])q=D.pop();else M="";if(q==null)q=i;o.relative[M](y,q,O)}}else y=[]}y||(y=u);y||k.error(M||g);if(f.call(y)==="[object Array]")if(N)if(i&&i.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&k.contains(i,y[g])))n.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&n.push(u[g]);else n.push.apply(n,y);else C(y,n);if(F){k(F,p,n,m);k.uniqueSort(n)}return n};k.uniqueSort=function(g){if(w){h=
    l;g.sort(w);if(h)for(var i=1;i<g.length;i++)g[i]===g[i-1]&&g.splice(i--,1)}return g};k.matches=function(g,i){return k(g,null,null,i)};k.matchesSelector=function(g,i){return k(i,null,null,[g]).length>0};k.find=function(g,i,n){var m;if(!g)return[];for(var p=0,q=o.order.length;p<q;p++){var u,y=o.order[p];if(u=o.leftMatch[y].exec(g)){var F=u[1];u.splice(1,1);if(F.substr(F.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");m=o.find[y](u,i,n);if(m!=null){g=g.replace(o.match[y],"");break}}}}m||(m=i.getElementsByTagName("*"));
    return{set:m,expr:g}};k.filter=function(g,i,n,m){for(var p,q,u=g,y=[],F=i,M=i&&i[0]&&k.isXML(i[0]);g&&i.length;){for(var N in o.filter)if((p=o.leftMatch[N].exec(g))!=null&&p[2]){var O,D,R=o.filter[N];D=p[1];q=false;p.splice(1,1);if(D.substr(D.length-1)!=="\\"){if(F===y)y=[];if(o.preFilter[N])if(p=o.preFilter[N](p,F,n,y,m,M)){if(p===true)continue}else q=O=true;if(p)for(var j=0;(D=F[j])!=null;j++)if(D){O=R(D,p,j,F);var s=m^!!O;if(n&&O!=null)if(s)q=true;else F[j]=false;else if(s){y.push(D);q=true}}if(O!==
    B){n||(F=y);g=g.replace(o.match[N],"");if(!q)return[];break}}}if(g===u)if(q==null)k.error(g);else break;u=g}return F};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var o=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
    POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},relative:{"+":function(g,i){var n=typeof i==="string",m=n&&!/\W/.test(i);n=n&&!m;if(m)i=i.toLowerCase();m=0;for(var p=g.length,q;m<p;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=n||q&&q.nodeName.toLowerCase()===
    i?q||false:q===i}n&&k.filter(i,g,true)},">":function(g,i){var n,m=typeof i==="string",p=0,q=g.length;if(m&&!/\W/.test(i))for(i=i.toLowerCase();p<q;p++){if(n=g[p]){n=n.parentNode;g[p]=n.nodeName.toLowerCase()===i?n:false}}else{for(;p<q;p++)if(n=g[p])g[p]=m?n.parentNode:n.parentNode===i;m&&k.filter(i,g,true)}},"":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=i=i.toLowerCase();q=a}q("parentNode",i,p,g,m,n)},"~":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=
    i=i.toLowerCase();q=a}q("previousSibling",i,p,g,m,n)}},find:{ID:function(g,i,n){if(typeof i.getElementById!=="undefined"&&!n)return(g=i.getElementById(g[1]))&&g.parentNode?[g]:[]},NAME:function(g,i){if(typeof i.getElementsByName!=="undefined"){for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p<q;p++)m[p].getAttribute("name")===g[1]&&n.push(m[p]);return n.length===0?null:n}},TAG:function(g,i){return i.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,i,n,m,p,q){g=" "+g[1].replace(/\\/g,
    "")+" ";if(q)return g;q=0;for(var u;(u=i[q])!=null;q++)if(u)if(p^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))n||m.push(u);else if(n)i[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]==="nth"){var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;return g},ATTR:function(g,i,n,
    m,p,q){i=g[1].replace(/\\/g,"");if(!q&&o.attrMap[i])g[1]=o.attrMap[i];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,i,n,m,p){if(g[1]==="not")if((d.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,i);else{g=k.filter(g[3],i,n,true^p);n||m.push.apply(m,g);return false}else if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===
    true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,i,n){return!!k(n[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===
    g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,i){return i===0},last:function(g,i,n,m){return i===m.length-1},even:function(g,i){return i%2===0},odd:function(g,i){return i%2===1},lt:function(g,i,n){return i<n[3]-0},gt:function(g,i,n){return i>n[3]-0},nth:function(g,i,n){return n[3]-
    0===i},eq:function(g,i,n){return n[3]-0===i}},filter:{PSEUDO:function(g,i,n,m){var p=i[1],q=o.filters[p];if(q)return q(g,n,i,m);else if(p==="contains")return(g.textContent||g.innerText||k.getText([g])||"").indexOf(i[3])>=0;else if(p==="not"){i=i[3];n=0;for(m=i.length;n<m;n++)if(i[n]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+p)},CHILD:function(g,i){var n=i[1],m=g;switch(n){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(n===
    "first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":n=i[2];var p=i[3];if(n===1&&p===0)return true;var q=i[0],u=g.parentNode;if(u&&(u.sizcache!==q||!g.nodeIndex)){var y=0;for(m=u.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++y;u.sizcache=q}m=g.nodeIndex-p;return n===0?m===0:m%n===0&&m/n>=0}},ID:function(g,i){return g.nodeType===1&&g.getAttribute("id")===i},TAG:function(g,i){return i==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===
    i},CLASS:function(g,i){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(i)>-1},ATTR:function(g,i){var n=i[1];n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);var m=n+"",p=i[2],q=i[4];return n==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&n!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false},POS:function(g,i,n,m){var p=o.setFilters[i[2]];
    if(p)return p(g,n,i,m)}}},x=o.match.POS,r=function(g,i){return"\\"+(i-0+1)},A;for(A in o.match){o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r))}var C=function(g,i){g=Array.prototype.slice.call(g,0);if(i){i.push.apply(i,g);return i}return g};try{Array.prototype.slice.call(t.documentElement.childNodes,0)}catch(J){C=function(g,i){var n=0,m=i||[];if(f.call(g)==="[object Array]")Array.prototype.push.apply(m,
    g);else if(typeof g.length==="number")for(var p=g.length;n<p;n++)m.push(g[n]);else for(;g[n];n++)m.push(g[n]);return m}}var w,I;if(t.documentElement.compareDocumentPosition)w=function(g,i){if(g===i){h=true;return 0}if(!g.compareDocumentPosition||!i.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(i)&4?-1:1};else{w=function(g,i){var n,m,p=[],q=[];n=g.parentNode;m=i.parentNode;var u=n;if(g===i){h=true;return 0}else if(n===m)return I(g,i);else if(n){if(!m)return 1}else return-1;
    for(;u;){p.unshift(u);u=u.parentNode}for(u=m;u;){q.unshift(u);u=u.parentNode}n=p.length;m=q.length;for(u=0;u<n&&u<m;u++)if(p[u]!==q[u])return I(p[u],q[u]);return u===n?I(g,q[u],-1):I(p[u],i,1)};I=function(g,i,n){if(g===i)return n;for(g=g.nextSibling;g;){if(g===i)return-1;g=g.nextSibling}return 1}}k.getText=function(g){for(var i="",n,m=0;g[m];m++){n=g[m];if(n.nodeType===3||n.nodeType===4)i+=n.nodeValue;else if(n.nodeType!==8)i+=k.getText(n.childNodes)}return i};(function(){var g=t.createElement("div"),
    i="script"+(new Date).getTime(),n=t.documentElement;g.innerHTML="<a name='"+i+"'/>";n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}n.removeChild(g);
    n=g=null})();(function(){var g=t.createElement("div");g.appendChild(t.createComment(""));if(g.getElementsByTagName("*").length>0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="<a href='#'></a>";if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")o.attrHandle.href=function(i){return i.getAttribute("href",2)};g=null})();t.querySelectorAll&&
    function(){var g=k,i=t.createElement("div");i.innerHTML="<p class='TEST'></p>";if(!(i.querySelectorAll&&i.querySelectorAll(".TEST").length===0)){k=function(m,p,q,u){p=p||t;m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!u&&!k.isXML(p))if(p.nodeType===9)try{return C(p.querySelectorAll(m),q)}catch(y){}else if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){var F=p.getAttribute("id"),M=F||"__sizzle__";F||p.setAttribute("id",M);try{return C(p.querySelectorAll("#"+M+" "+m),q)}catch(N){}finally{F||
    p.removeAttribute("id")}}return g(m,p,q,u)};for(var n in g)k[n]=g[n];i=null}}();(function(){var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;try{i.call(t.documentElement,"[test!='']:sizzle")}catch(m){n=true}if(i)k.matchesSelector=function(p,q){q=q.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(p))try{if(n||!o.match.PSEUDO.test(q)&&!/!=/.test(q))return i.call(p,q)}catch(u){}return k(q,null,null,[p]).length>0}})();(function(){var g=
    t.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){o.order.splice(1,0,"CLASS");o.find.CLASS=function(i,n,m){if(typeof n.getElementsByClassName!=="undefined"&&!m)return n.getElementsByClassName(i[1])};g=null}}})();k.contains=t.documentElement.contains?function(g,i){return g!==i&&(g.contains?g.contains(i):true)}:t.documentElement.compareDocumentPosition?
    function(g,i){return!!(g.compareDocumentPosition(i)&16)}:function(){return false};k.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false};var L=function(g,i){for(var n,m=[],p="",q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){p+=n[0];g=g.replace(o.match.PSEUDO,"")}g=o.relative[g]?g+"*":g;n=0;for(var u=q.length;n<u;n++)k(g,q[n],m);return k.filter(p,m)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=k.getText;c.isXMLDoc=k.isXML;
    c.contains=k.contains})();var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,e=0,f=this.length;e<f;e++){d=b.length;c.find(a,this[e],b);if(e>0)for(var h=d;h<b.length;h++)for(var l=0;l<d;l++)if(b[l]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d<e;d++)if(c.contains(this,b[d]))return true})},
    not:function(a){return this.pushStack(ma(this,a,false),"not",a)},filter:function(a){return this.pushStack(ma(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){var d=[],e,f,h=this[0];if(c.isArray(a)){var l,k={},o=1;if(h&&a.length){e=0;for(f=a.length;e<f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&&h.ownerDocument&&h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)>-1:c(h).is(e))d.push({selector:l,elem:h,level:o})}h=
    h.parentNode;o++}}return d}l=cb.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e<f;e++)for(h=this[e];h;)if(l?l.index(h)>-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||!h.ownerDocument||h===b)break}d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a||typeof a==="string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b||this.context):
    c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,
    2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,
    b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Za.test(a)||(e=d);if(e&&typeof e==="string")f=c.filter(e,f);f=this.length>1?c.unique(f):f;if((this.length>1||ab.test(e))&&$a.test(a))f=f.reverse();return this.pushStack(f,a,bb.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&a.nodeType!==9&&(d===B||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&&
    e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var za=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,Aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ba=/<([\w:]+)/,db=/<tbody/i,eb=/<|&#?\w+;/,Ca=/<(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^="'>\s]+\/)>/g,P={option:[1,
    "<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};P.optgroup=P.option;P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;P.th=P.td;if(!c.support.htmlSerialize)P._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
    c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==B)return this.empty().append((this[0]&&this[0].ownerDocument||t).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
    wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
    prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
    this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&&e.nodeType===1){c.cleanData(e.getElementsByTagName("*"));c.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
    return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(za,"").replace(fb,'="$1">').replace($,"")],e)[0]}else return this.cloneNode(true)});if(a===true){na(this,b);na(this.find("*"),b.find("*"))}return b},html:function(a){if(a===B)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(za,""):null;
    else if(typeof a==="string"&&!Ca.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!P[(Ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Aa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=
    c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var e,f,h,l=a[0],k=[];if(!c.support.checkClone&&arguments.length===3&&typeof l==="string"&&Da.test(l))return this.each(function(){c(this).domManip(a,
    b,d,true)});if(c.isFunction(l))return this.each(function(x){var r=c(this);a[0]=l.call(this,x,b?r.html():B);r.domManip(a,b,d)});if(this[0]){e=l&&l.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);h=e.fragment;if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var o=this.length;f<o;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
    this[f]:this[f],f>0||e.cacheable||this.length>1?h.cloneNode(true):h)}k.length&&c.each(k,Oa)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&&b[0]?b[0].ownerDocument||b[0]:t;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===t&&!Ca.test(a[0])&&(c.support.checkClone||!Da.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",
    prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){d[b](this[0]);return this}else{f=0;for(var h=d.length;f<h;f++){var l=(f>0?this.clone(true):this).get();c(d[f])[b](l);e=e.concat(l)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||t;if(typeof b.createElement==="undefined")b=b.ownerDocument||
    b[0]&&b[0].ownerDocument||t;for(var f=[],h=0,l;(l=a[h])!=null;h++){if(typeof l==="number")l+="";if(l){if(typeof l==="string"&&!eb.test(l))l=b.createTextNode(l);else if(typeof l==="string"){l=l.replace(Aa,"<$1></$2>");var k=(Ba.exec(l)||["",""])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement("div");for(r.innerHTML=o[1]+l+o[2];x--;)r=r.lastChild;if(!c.support.tbody){x=db.test(l);k=k==="table"&&!x?r.firstChild&&r.firstChild.childNodes:o[1]==="<table>"&&!x?r.childNodes:[];for(o=k.length-
    1;o>=0;--o)c.nodeName(k[o],"tbody")&&!k[o].childNodes.length&&k[o].parentNode.removeChild(k[o])}!c.support.leadingWhitespace&&$.test(l)&&r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);l=r.childNodes}if(l.nodeType)f.push(l);else f=c.merge(f,l)}}if(d)for(h=0;f[h];h++)if(e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
    d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++)if(!(k.nodeName&&c.noData[k.nodeName.toLowerCase()]))if(d=k[c.expando]){if((b=e[d])&&b.events)for(var o in b.events)f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);if(h)delete k[c.expando];else k.removeAttribute&&k.removeAttribute(c.expando);delete e[d]}}});var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,
    jb=/^-?\d/,kb={position:"absolute",visibility:"hidden",display:"block"},Pa=["Left","Right"],Qa=["Top","Bottom"],W,Ga,aa,lb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&&b===B)return this;return c.access(this,a,b,true,function(d,e,f){return f!==B?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,"opacity","opacity");return d===""?"1":d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,
    zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];b=c.cssProps[h]||h;if(d!==B){if(!(typeof d==="number"&&isNaN(d)||d==null)){if(typeof d==="number"&&!c.cssNumber[h])d+="px";if(!k||!("set"in k)||(d=k.set(a,d))!==B)try{l[b]=d}catch(o){}}}else{if(k&&"get"in k&&(f=k.get(a,false,e))!==B)return f;return l[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),
    h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&&"get"in h&&(e=h.get(a,true,d))!==B)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=e[f]},camelCase:function(a){return a.replace(hb,lb)}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=oa(d,b,f);else c.swap(d,kb,function(){h=oa(d,b,f)});if(h<=0){h=W(d,b,b);if(h==="0px"&&aa)h=aa(d,b,b);
    if(h!=null)return h===""||h==="auto"?"0px":h}if(h<0||h==null){h=d.style[b];return h===""||h==="auto"?"0px":h}return typeof h==="string"?h:h+"px"}},set:function(d,e){if(Fa.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=
    d.filter||"";d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+" "+e}};if(t.defaultView&&t.defaultView.getComputedStyle)Ga=function(a,b,d){var e;d=d.replace(ib,"-$1").toLowerCase();if(!(b=a.ownerDocument.defaultView))return B;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===""&&!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};if(t.documentElement.currentStyle)aa=function(a,b){var d,e,f=a.currentStyle&&a.currentStyle[b],h=a.style;if(!Fa.test(f)&&jb.test(f)){d=h.left;
    e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.left=d;a.runtimeStyle.left=e}return f===""?"auto":f};W=Ga||aa;if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var mb=c.now(),nb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&|$)/,ja=/\?/,rb=/([?&])_=[^&]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Ha)return Ha.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b===
    "object"){b=c.param(b,c.ajaxSettings.traditional);e="POST"}var h=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(l,k){if(k==="success"||k==="notmodified")h.html(f?c("<div>").append(l.responseText.replace(nb,"")).find(f):l.responseText);d&&h.each(d,[l.responseText,k,l])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&
    !this.disabled&&(this.checked||ob.test(this.nodeName)||pb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e})},
    getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",
    script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);b.url=b.url.replace(ub,"");b.context=a&&a.context!=null?a.context:b;if(b.data&&b.processData&&typeof b.data!=="string")b.data=c.param(b.data,b.traditional);if(b.dataType==="jsonp"){if(h==="GET")T.test(b.url)||(b.url+=(ja.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");else if(!b.data||
    !T.test(b.data))b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";b.dataType="json"}if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||"jsonp"+mb++;if(b.data)b.data=(b.data+"").replace(T,"="+d+"$1");b.url=b.url.replace(T,"="+d+"$1");b.dataType="script";var k=E[d];E[d]=function(m){if(c.isFunction(k))k(m);else{E[d]=B;try{delete E[d]}catch(p){}}f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);r&&r.removeChild(A)}}if(b.dataType==="script"&&b.cache===null)b.cache=
    false;if(b.cache===false&&l){var o=c.now(),x=b.url.replace(rb,"$1_="+o);b.url=x+(x===b.url?(ja.test(b.url)?"&":"?")+"_="+o:"")}if(b.data&&l)b.url+=(ja.test(b.url)?"&":"?")+b.data;b.global&&c.active++===0&&c.event.trigger("ajaxStart");o=(o=sb.exec(b.url))&&(o[1]&&o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);if(b.dataType==="script"&&h==="GET"&&o){var r=t.getElementsByTagName("head")[0]||t.documentElement,A=t.createElement("script");if(b.scriptCharset)A.charset=b.scriptCharset;
    A.src=b.url;if(!d){var C=false;A.onload=A.onreadystatechange=function(){if(!C&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){C=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);A.onload=A.onreadystatechange=null;r&&A.parentNode&&r.removeChild(A)}}}r.insertBefore(A,r.firstChild);return B}var J=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&&!l||a&&a.contentType)w.setRequestHeader("Content-Type",
    b.contentType);if(b.ifModified){c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url])}o||w.setRequestHeader("X-Requested-With","XMLHttpRequest");w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default)}catch(I){}if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){b.global&&c.active--===1&&c.event.trigger("ajaxStop");w.abort();return false}b.global&&
    c.triggerGlobal(b,"ajaxSend",[w,b]);var L=w.onreadystatechange=function(m){if(!w||w.readyState===0||m==="abort"){J||c.handleComplete(b,w,e,f);J=true;if(w)w.onreadystatechange=c.noop}else if(!J&&w&&(w.readyState===4||m==="timeout")){J=true;w.onreadystatechange=c.noop;e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";var p;if(e==="success")try{f=c.httpData(w,b.dataType,b)}catch(q){e="parsererror";p=q}if(e==="success"||e==="notmodified")d||
    c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m==="timeout"&&w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&&Function.prototype.call.call(g,w);L("abort")}}catch(i){}b.async&&b.timeout>0&&setTimeout(function(){w&&!J&&L("timeout")},b.timeout);try{w.send(l||b.data==null?null:b.data)}catch(n){c.handleError(b,w,null,n);c.handleComplete(b,w,e,f)}b.async||L();return w}},param:function(a,b){var d=[],e=function(h,l){l=c.isFunction(l)?l():l;d[d.length]=
    encodeURIComponent(h)+"="+encodeURIComponent(l)};if(b===B)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)da(f,a[f],b,e);return d.join("&").replace(tb,"+")}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&&a.error.call(a.context,b,d,e);a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e])},handleSuccess:function(a,b,d,e){a.success&&a.success.call(a.context,e,d,b);a.global&&c.triggerGlobal(a,"ajaxSuccess",
    [b,a])},handleComplete:function(a,b,d){a.complete&&a.complete.call(a.context,b,d);a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);a.global&&c.active--===1&&c.event.trigger("ajaxStop")},triggerGlobal:function(a,b,d){(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),
    e=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&e.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&e.indexOf("javascript")>=0)c.globalEval(a);return a}});
    if(E.ActiveXObject)c.ajaxSettings.xhr=function(){if(E.location.protocol!=="file:")try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S("show",
    3),a,b,d);else{d=0;for(var e=this.length;d<e;d++){a=this[d];b=a.style.display;if(!c.data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&c.css(a,"display")==="none"&&c.data(a,"olddisplay",qa(a.nodeName))}for(d=0;d<e;d++){a=this[d];b=a.style.display;if(b===""||b==="none")a.style.display=c.data(a,"olddisplay")||""}return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S("hide",3),a,b,d);else{a=0;for(b=this.length;a<b;a++){d=c.css(this[a],"display");d!=="none"&&c.data(this[a],"olddisplay",
    d)}for(a=0;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(S("toggle",3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,
    d,e);if(c.isEmptyObject(a))return this.each(f.complete);return this[f.queue===false?"each":"queue"](function(){var h=c.extend({},f),l,k=this.nodeType===1,o=k&&c(this).is(":hidden"),x=this;for(l in a){var r=c.camelCase(l);if(l!==r){a[r]=a[l];delete a[l];l=r}if(a[l]==="hide"&&o||a[l]==="show"&&!o)return h.complete.call(this);if(k&&(l==="height"||l==="width")){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none")if(c.support.inlineBlockNeedsLayout)if(qa(this.nodeName)===
    "inline")this.style.display="inline-block";else{this.style.display="inline";this.style.zoom=1}else this.style.display="inline-block"}if(c.isArray(a[l])){(h.specialEasing=h.specialEasing||{})[l]=a[l][1];a[l]=a[l][0]}}if(h.overflow!=null)this.style.overflow="hidden";h.curAnim=c.extend({},a);c.each(a,function(A,C){var J=new c.fx(x,h,A);if(vb.test(C))J[C==="toggle"?o?"show":"hide":C](a);else{var w=wb.exec(C),I=J.cur()||0;if(w){var L=parseFloat(w[2]),g=w[3]||"px";if(g!=="px"){c.style(x,A,(L||1)+g);I=(L||
    1)/J.cur()*I;c.style(x,A,I+g)}if(w[1])L=(w[1]==="-="?-1:1)*L+I;J.custom(I,L,g)}else J.custom(I,C,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var e=d.length-1;e>=0;e--)if(d[e].elem===this){b&&d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,
    d,e,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&&c(this).dequeue();c.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*
    Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&&a>-1E4?a:0},custom:function(a,b,d){function e(l){return f.step(l)}
    var f=this,h=c.fx;this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;e.elem=this.elem;if(e()&&c.timers.push(e)&&!ba)ba=setInterval(h.tick,h.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;
    this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each(["","X","Y"],function(k,o){f.style["overflow"+o]=h.overflow[k]})}this.options.hide&&c(this.elem).hide();if(this.options.hide||
    this.options.show)for(var l in this.options.curAnim)c.style(this.elem,l,this.options.orig[l]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=
    c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===
    b.elem}).length};var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in t.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(l){c.offset.setOffset(this,a,l)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=fa(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
    h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(x){c.offset.setOffset(this,a,x)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
    for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==h;){if(c.offset.supportsFixedPosition&&d.position==="fixed")break;d=f?f.getComputedStyle(b,null):b.currentStyle;k-=b.scrollTop;o-=b.scrollLeft;if(b===e){k+=b.offsetTop;o+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&xb.test(b.nodeName))){k+=parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}e=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"){k+=
    parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}d=d}if(d.position==="relative"||d.position==="static"){k+=l.offsetTop;o+=l.offsetLeft}if(c.offset.supportsFixedPosition&&d.position==="fixed"){k+=Math.max(h.scrollTop,l.scrollTop);o+=Math.max(h.scrollLeft,l.scrollLeft)}return{top:k,left:o}};c.offset={initialize:function(){var a=t.body,b=t.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",
    height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=
    f.offsetTop===5;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,
    "marginTop"))||0;d+=parseFloat(c.css(a,"marginLeft"))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),h=f.offset(),l=c.css(a,"top"),k=c.css(a,"left"),o=e==="absolute"&&c.inArray("auto",[l,k])>-1;e={};var x={};if(o)x=f.position();l=o?x.top:parseInt(l,10)||0;k=o?x.left:parseInt(k,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+l;if(b.left!=null)e.left=b.left-h.left+k;"using"in b?b.using.call(a,
    e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||t.body;a&&!Ia.test(a.nodeName)&&
    c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==B)return this.each(function(){if(h=fa(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=fa(f))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();
    c.fn["inner"+b]=function(){return this[0]?parseFloat(c.css(this[0],d,"padding")):null};c.fn["outer"+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(l){var k=c(this);k[d](e.call(this,l,k[d]()))});if(c.isWindow(f))return f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b];else if(f.nodeType===9)return Math.max(f.documentElement["client"+
    b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);else if(e===B){f=c.css(f,d);var h=parseFloat(f);return c.isNaN(h)?f:h}else return this.css(d,typeof e==="string"?e:e+"px")}})})(window);
//XRegExp 1.5.0 <xregexp.com> MIT License
    var XRegExp;if(XRegExp){throw Error("can't load XRegExp twice in the same frame")}(function(){XRegExp=function(w,r){var q=[],u=XRegExp.OUTSIDE_CLASS,x=0,p,s,v,t,y;if(XRegExp.isRegExp(w)){if(r!==undefined){throw TypeError("can't supply flags when constructing one RegExp from another")}return j(w)}if(g){throw Error("can't call the XRegExp constructor within token definition functions")}r=r||"";p={hasNamedCapture:false,captureNames:[],hasFlag:function(z){return r.indexOf(z)>-1},setFlag:function(z){r+=z}};while(x<w.length){s=o(w,x,u,p);if(s){q.push(s.output);x+=(s.match[0].length||1)}else{if(v=m.exec.call(i[u],w.slice(x))){q.push(v[0]);x+=v[0].length}else{t=w.charAt(x);if(t==="["){u=XRegExp.INSIDE_CLASS}else{if(t==="]"){u=XRegExp.OUTSIDE_CLASS}}q.push(t);x++}}}y=RegExp(q.join(""),m.replace.call(r,h,""));y._xregexp={source:w,captureNames:p.hasNamedCapture?p.captureNames:null};return y};XRegExp.version="1.5.0";XRegExp.INSIDE_CLASS=1;XRegExp.OUTSIDE_CLASS=2;var c=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,h=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,n=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,g=false,k=[],m={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},a=m.exec.call(/()??/,"")[1]===undefined,e=function(){var p=/^/g;m.test.call(p,"");return !p.lastIndex}(),f=function(){var p=/x/g;m.replace.call("x",p,"");return !p.lastIndex}(),b=RegExp.prototype.sticky!==undefined,i={};i[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/;i[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/;XRegExp.addToken=function(s,r,q,p){k.push({pattern:j(s,"g"+(b?"y":"")),handler:r,scope:q||XRegExp.OUTSIDE_CLASS,trigger:p||null})};XRegExp.cache=function(r,p){var q=r+"/"+(p||"");return XRegExp.cache[q]||(XRegExp.cache[q]=XRegExp(r,p))};XRegExp.copyAsGlobal=function(p){return j(p,"g")};XRegExp.escape=function(p){return p.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};XRegExp.execAt=function(s,r,t,q){r=j(r,"g"+((q&&b)?"y":""));r.lastIndex=t=t||0;var p=r.exec(s);if(q){return(p&&p.index===t)?p:null}else{return p}};XRegExp.freezeTokens=function(){XRegExp.addToken=function(){throw Error("can't run addToken after freezeTokens")}};XRegExp.isRegExp=function(p){return Object.prototype.toString.call(p)==="[object RegExp]"};XRegExp.iterate=function(u,p,v,s){var t=j(p,"g"),r=-1,q;while(q=t.exec(u)){v.call(s,q,++r,u,t);if(t.lastIndex===q.index){t.lastIndex++}}if(p.global){p.lastIndex=0}};XRegExp.matchChain=function(q,p){return function r(s,x){var v=p[x].regex?p[x]:{regex:p[x]},u=j(v.regex,"g"),w=[],t;for(t=0;t<s.length;t++){XRegExp.iterate(s[t],u,function(y){w.push(v.backref?(y[v.backref]||""):y[0])})}return((x===p.length-1)||!w.length)?w:r(w,x+1)}([q],0)};RegExp.prototype.apply=function(q,p){return this.exec(p[0])};RegExp.prototype.call=function(p,q){return this.exec(q)};RegExp.prototype.exec=function(t){var r=m.exec.apply(this,arguments),q,p;if(r){if(!a&&r.length>1&&l(r,"")>-1){p=RegExp(this.source,m.replace.call(d(this),"g",""));m.replace.call(t.slice(r.index),p,function(){for(var u=1;u<arguments.length-2;u++){if(arguments[u]===undefined){r[u]=undefined}}})}if(this._xregexp&&this._xregexp.captureNames){for(var s=1;s<r.length;s++){q=this._xregexp.captureNames[s-1];if(q){r[q]=r[s]}}}if(!e&&this.global&&!r[0].length&&(this.lastIndex>r.index)){this.lastIndex--}}return r};if(!e){RegExp.prototype.test=function(q){var p=m.exec.call(this,q);if(p&&this.global&&!p[0].length&&(this.lastIndex>p.index)){this.lastIndex--}return !!p}}String.prototype.match=function(q){if(!XRegExp.isRegExp(q)){q=RegExp(q)}if(q.global){var p=m.match.apply(this,arguments);q.lastIndex=0;return p}return q.exec(this)};String.prototype.replace=function(r,s){var t=XRegExp.isRegExp(r),q,p,u;if(t&&typeof s.valueOf()==="string"&&s.indexOf("${")===-1&&f){return m.replace.apply(this,arguments)}if(!t){r=r+""}else{if(r._xregexp){q=r._xregexp.captureNames}}if(typeof s==="function"){p=m.replace.call(this,r,function(){if(q){arguments[0]=new String(arguments[0]);for(var v=0;v<q.length;v++){if(q[v]){arguments[0][q[v]]=arguments[v+1]}}}if(t&&r.global){r.lastIndex=arguments[arguments.length-2]+arguments[0].length}return s.apply(null,arguments)})}else{u=this+"";p=m.replace.call(u,r,function(){var v=arguments;return m.replace.call(s,c,function(x,w,A){if(w){switch(w){case"$":return"$";case"&":return v[0];case"`":return v[v.length-1].slice(0,v[v.length-2]);case"'":return v[v.length-1].slice(v[v.length-2]+v[0].length);default:var y="";w=+w;if(!w){return x}while(w>v.length-3){y=String.prototype.slice.call(w,-1)+y;w=Math.floor(w/10)}return(w?v[w]||"":"$")+y}}else{var z=+A;if(z<=v.length-3){return v[z]}z=q?l(q,A):-1;return z>-1?v[z+1]:x}})})}if(t&&r.global){r.lastIndex=0}return p};String.prototype.split=function(u,p){if(!XRegExp.isRegExp(u)){return m.split.apply(this,arguments)}var w=this+"",r=[],v=0,t,q;if(p===undefined||+p<0){p=Infinity}else{p=Math.floor(+p);if(!p){return[]}}u=XRegExp.copyAsGlobal(u);while(t=u.exec(w)){if(u.lastIndex>v){r.push(w.slice(v,t.index));if(t.length>1&&t.index<w.length){Array.prototype.push.apply(r,t.slice(1))}q=t[0].length;v=u.lastIndex;if(r.length>=p){break}}if(u.lastIndex===t.index){u.lastIndex++}}if(v===w.length){if(!m.test.call(u,"")||q){r.push("")}}else{r.push(w.slice(v))}return r.length>p?r.slice(0,p):r};function j(r,q){if(!XRegExp.isRegExp(r)){throw TypeError("type RegExp expected")}var p=r._xregexp;r=XRegExp(r.source,d(r)+(q||""));if(p){r._xregexp={source:p.source,captureNames:p.captureNames?p.captureNames.slice(0):null}}return r}function d(p){return(p.global?"g":"")+(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.extended?"x":"")+(p.sticky?"y":"")}function o(v,u,w,p){var r=k.length,y,s,x;g=true;try{while(r--){x=k[r];if((w&x.scope)&&(!x.trigger||x.trigger.call(p))){x.pattern.lastIndex=u;s=x.pattern.exec(v);if(s&&s.index===u){y={output:x.handler.call(p,s,w),match:s};break}}}}catch(q){throw q}finally{g=false}return y}function l(s,q,r){if(Array.prototype.indexOf){return s.indexOf(q,r)}for(var p=r||0;p<s.length;p++){if(s[p]===q){return p}}return -1}XRegExp.addToken(/\(\?#[^)]*\)/,function(p){return m.test.call(n,p.input.slice(p.index+p[0].length))?"":"(?:)"});XRegExp.addToken(/\((?!\?)/,function(){this.captureNames.push(null);return"("});XRegExp.addToken(/\(\?<([$\w]+)>/,function(p){this.captureNames.push(p[1]);this.hasNamedCapture=true;return"("});XRegExp.addToken(/\\k<([\w$]+)>/,function(q){var p=l(this.captureNames,q[1]);return p>-1?"\\"+(p+1)+(isNaN(q.input.charAt(q.index+q[0].length))?"":"(?:)"):q[0]});XRegExp.addToken(/\[\^?]/,function(p){return p[0]==="[]"?"\\b\\B":"[\\s\\S]"});XRegExp.addToken(/^\(\?([imsx]+)\)/,function(p){this.setFlag(p[1]);return""});XRegExp.addToken(/(?:\s+|#.*)+/,function(p){return m.test.call(n,p.input.slice(p.index+p[0].length))?"":"(?:)"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("x")});XRegExp.addToken(/\./,function(){return"[\\s\\S]"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("s")})})();
    /**
     * SyntaxHighlighter
     * http://alexgorbatchev.com/SyntaxHighlighter
     *
     * SyntaxHighlighter is donationware. If you are using it, please donate.
     * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
     *
     * @version
     * 3.0.83 (July 02 2010)
     * 
     * @copyright
     * Copyright (C) 2004-2010 Alex Gorbatchev.
     *
     * @license
     * Dual licensed under the MIT and GPL licenses.
     */
    //
    // Begin anonymous function. This is used to contain local scope variables without polutting global scope.
    //
    var SyntaxHighlighter = function() { 

    // CommonJS
    if (typeof(require) != 'undefined' && typeof(XRegExp) == 'undefined')
    {
    	XRegExp = require('XRegExp').XRegExp;
    }

    // Shortcut object which will be assigned to the SyntaxHighlighter variable.
    // This is a shorthand for local reference in order to avoid long namespace 
    // references to SyntaxHighlighter.whatever...
    var sh = {
    	defaults : {
    		/** Additional CSS class names to be added to highlighter elements. */
    		'class-name' : '',
		
    		/** First line number. */
    		'first-line' : 1,
		
    		/**
    		 * Pads line numbers. Possible values are:
    		 *
    		 *   false - don't pad line numbers.
    		 *   true  - automaticaly pad numbers with minimum required number of leading zeroes.
    		 *   [int] - length up to which pad line numbers.
    		 */
    		'pad-line-numbers' : false,
		
    		/** Lines to highlight. */
    		'highlight' : null,
		
    		/** Title to be displayed above the code block. */
    		'title' : null,
		
    		/** Enables or disables smart tabs. */
    		'smart-tabs' : true,
		
    		/** Gets or sets tab size. */
    		'tab-size' : 4,
		
    		/** Enables or disables gutter. */
    		'gutter' : true,
		
    		/** Enables or disables toolbar. */
    		'toolbar' : true,
		
    		/** Enables quick code copy and paste from double click. */
    		'quick-code' : true,
		
    		/** Forces code view to be collapsed. */
    		'collapse' : false,
		
    		/** Enables or disables automatic links. */
    		'auto-links' : true,
		
    		/** Gets or sets light mode. Equavalent to turning off gutter and toolbar. */
    		'light' : false,
		
    		'html-script' : false
    	},
	
    	config : {
    		space : '&nbsp;',
		
    		/** Enables use of <SCRIPT type="syntaxhighlighter" /> tags. */
    		useScriptTags : true,
		
    		/** Blogger mode flag. */
    		bloggerMode : false,
		
    		stripBrs : false,
		
    		/** Name of the tag that SyntaxHighlighter will automatically look for. */
    		tagName : 'pre',
		
    		strings : {
    			expandSource : 'expand source',
    			help : '?',
    			alert: 'SyntaxHighlighter\n\n',
    			noBrush : 'Can\'t find brush for: ',
    			brushNotHtmlScript : 'Brush wasn\'t configured for html-script option: ',
			
    			// this is populated by the build script
    			aboutDialog : '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:1.5em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:3em;"><div>version 3.0.83 (July 02 2010)</div><div><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" style="color:#005896">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2010 Alex Gorbatchev.</div></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#005896">donate</a> to <br/>keep development active!</div></div></body></html>'
    		}
    	},
	
    	/** Internal 'global' variables. */
    	vars : {
    		discoveredBrushes : null,
    		highlighters : {}
    	},
	
    	/** This object is populated by user included external brush files. */
    	brushes : {},

    	/** Common regular expressions. */
    	regexLib : {
    		multiLineCComments			: /\/\*[\s\S]*?\*\//gm,
    		singleLineCComments			: /\/\/.*$/gm,
    		singleLinePerlComments		: /#.*$/gm,
    		doubleQuotedString			: /"([^\\"\n]|\\.)*"/g,
    		singleQuotedString			: /'([^\\'\n]|\\.)*'/g,
    		multiLineDoubleQuotedString	: new XRegExp('"([^\\\\"]|\\\\.)*"', 'gs'),
    		multiLineSingleQuotedString	: new XRegExp("'([^\\\\']|\\\\.)*'", 'gs'),
    		xmlComments					: /(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,
    		url							: /\w+:\/\/[\w-.\/?%&=:@;]*/g,
		
    		/** <?= ?> tags. */
    		phpScriptTags 				: { left: /(&lt;|<)\?=?/g, right: /\?(&gt;|>)/g },
		
    		/** <%= %> tags. */
    		aspScriptTags				: { left: /(&lt;|<)%=?/g, right: /%(&gt;|>)/g },
		
    		scriptScriptTags			: { left: /(&lt;|<)\s*script.*?(&gt;|>)/gi, right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi }
    	},

    	toolbar: {
    		/**
    		 * Generates HTML markup for the toolbar.
    		 * @param {Highlighter} highlighter Highlighter instance.
    		 * @return {String} Returns HTML markup.
    		 */
    		getHtml: function(highlighter)
    		{
    			var html = '<div class="toolbar">',
    				items = sh.toolbar.items,
    				list = items.list
    				;
			
    			function defaultGetHtml(highlighter, name)
    			{
    				return sh.toolbar.getButtonHtml(highlighter, name, sh.config.strings[name]);
    			};
			
    			for (var i = 0; i < list.length; i++)
    				html += (items[list[i]].getHtml || defaultGetHtml)(highlighter, list[i]);
			
    			html += '</div>';
			
    			return html;
    		},
		
    		/**
    		 * Generates HTML markup for a regular button in the toolbar.
    		 * @param {Highlighter} highlighter Highlighter instance.
    		 * @param {String} commandName		Command name that would be executed.
    		 * @param {String} label			Label text to display.
    		 * @return {String}					Returns HTML markup.
    		 */
    		getButtonHtml: function(highlighter, commandName, label)
    		{
    			return '<span><a href="#" class="toolbar_item'
    				+ ' command_' + commandName
    				+ ' ' + commandName
    				+ '">' + label + '</a></span>'
    				;
    		},
		
    		/**
    		 * Event handler for a toolbar anchor.
    		 */
    		handler: function(e)
    		{
    			var target = e.target,
    				className = target.className || ''
    				;

    			function getValue(name)
    			{
    				var r = new RegExp(name + '_(\\w+)'),
    					match = r.exec(className)
    					;

    				return match ? match[1] : null;
    			};
			
    			var highlighter = getHighlighterById(findParentElement(target, '.syntaxhighlighter').id),
    				commandName = getValue('command')
    				;
			
    			// execute the toolbar command
    			if (highlighter && commandName)
    				sh.toolbar.items[commandName].execute(highlighter);

    			// disable default A click behaviour
    			e.preventDefault();
    		},
		
    		/** Collection of toolbar items. */
    		items : {
    			// Ordered lis of items in the toolbar. Can't expect `for (var n in items)` to be consistent.
    			list: ['expandSource', 'help'],

    			expandSource: {
    				getHtml: function(highlighter)
    				{
    					if (highlighter.getParam('collapse') != true)
    						return '';
						
    					var title = highlighter.getParam('title');
    					return sh.toolbar.getButtonHtml(highlighter, 'expandSource', title ? title : sh.config.strings.expandSource);
    				},
			
    				execute: function(highlighter)
    				{
    					var div = getHighlighterDivById(highlighter.id);
    					removeClass(div, 'collapsed');
    				}
    			},

    			/** Command to display the about dialog window. */
    			help: {
    				execute: function(highlighter)
    				{	
    					var wnd = popup('', '_blank', 500, 250, 'scrollbars=0'),
    						doc = wnd.document
    						;
					
    					doc.write(sh.config.strings.aboutDialog);
    					doc.close();
    					wnd.focus();
    				}
    			}
    		}
    	},

    	/**
    	 * Finds all elements on the page which should be processes by SyntaxHighlighter.
    	 *
    	 * @param {Object} globalParams		Optional parameters which override element's 
    	 * 									parameters. Only used if element is specified.
    	 * 
    	 * @param {Object} element	Optional element to highlight. If none is
    	 * 							provided, all elements in the current document 
    	 * 							are returned which qualify.
    	 *
    	 * @return {Array}	Returns list of <code>{ target: DOMElement, params: Object }</code> objects.
    	 */
    	findElements: function(globalParams, element)
    	{
    		var elements = element ? [element] : toArray(document.getElementsByTagName(sh.config.tagName)), 
    			conf = sh.config,
    			result = []
    			;

    		// support for <SCRIPT TYPE="syntaxhighlighter" /> feature
    		if (conf.useScriptTags)
    			elements = elements.concat(getSyntaxHighlighterScriptTags());

    		if (elements.length === 0) 
    			return result;
	
    		for (var i = 0; i < elements.length; i++) 
    		{
    			var item = {
    				target: elements[i], 
    				// local params take precedence over globals
    				params: merge(globalParams, parseParams(elements[i].className))
    			};

    			if (item.params['brush'] == null)
    				continue;
				
    			result.push(item);
    		}
		
    		return result;
    	},

    	/**
    	 * Shorthand to highlight all elements on the page that are marked as 
    	 * SyntaxHighlighter source code.
    	 * 
    	 * @param {Object} globalParams		Optional parameters which override element's 
    	 * 									parameters. Only used if element is specified.
    	 * 
    	 * @param {Object} element	Optional element to highlight. If none is
    	 * 							provided, all elements in the current document 
    	 * 							are highlighted.
    	 */ 
    	highlight: function(globalParams, element)
    	{
    		var elements = this.findElements(globalParams, element),
    			propertyName = 'innerHTML', 
    			highlighter = null,
    			conf = sh.config
    			;

    		if (elements.length === 0) 
    			return;
	
    		for (var i = 0; i < elements.length; i++) 
    		{
    			var element = elements[i],
    				target = element.target,
    				params = element.params,
    				brushName = params.brush,
    				code
    				;

    			if (brushName == null)
    				continue;

    			// Instantiate a brush
    			if (params['html-script'] == 'true' || sh.defaults['html-script'] == true) 
    			{
    				highlighter = new sh.HtmlScript(brushName);
    				brushName = 'htmlscript';
    			}
    			else
    			{
    				var brush = findBrush(brushName);
				
    				if (brush)
    					highlighter = new brush();
    				else
    					continue;
    			}
			
    			code = target[propertyName];
			
    			// remove CDATA from <SCRIPT/> tags if it's present
    			if (conf.useScriptTags)
    				code = stripCData(code);
				
    			// Inject title if the attribute is present
    			if ((target.title || '') != '')
    				params.title = target.title;
				
    			params['brush'] = brushName;
    			highlighter.init(params);
    			element = highlighter.getDiv(code);
			
    			// carry over ID
    			if ((target.id || '') != '')
    				element.id = target.id;
			
    			target.parentNode.replaceChild(element, target);
    		}
    	},

    	/**
    	 * Main entry point for the SyntaxHighlighter.
    	 * @param {Object} params Optional params to apply to all highlighted elements.
    	 */
    	all: function(params)
    	{
    		attachEvent(
    			window,
    			'load',
    			function() { sh.highlight(params); }
    		);
    	}
    }; // end of sh

    sh['all']			= sh.all;
    sh['highlight']		= sh.highlight;

    /**
     * Checks if target DOM elements has specified CSS class.
     * @param {DOMElement} target Target DOM element to check.
     * @param {String} className Name of the CSS class to check for.
     * @return {Boolean} Returns true if class name is present, false otherwise.
     */
    function hasClass(target, className)
    {
    	return target.className.indexOf(className) != -1;
    };

    /**
     * Adds CSS class name to the target DOM element.
     * @param {DOMElement} target Target DOM element.
     * @param {String} className New CSS class to add.
     */
    function addClass(target, className)
    {
    	if (!hasClass(target, className))
    		target.className += ' ' + className;
    };

    /**
     * Removes CSS class name from the target DOM element.
     * @param {DOMElement} target Target DOM element.
     * @param {String} className CSS class to remove.
     */
    function removeClass(target, className)
    {
    	target.className = target.className.replace(className, '');
    };

    /**
     * Converts the source to array object. Mostly used for function arguments and 
     * lists returned by getElementsByTagName() which aren't Array objects.
     * @param {List} source Source list.
     * @return {Array} Returns array.
     */
    function toArray(source)
    {
    	var result = [];
	
    	for (var i = 0; i < source.length; i++) 
    		result.push(source[i]);
		
    	return result;
    };

    /**
     * Splits block of text into lines.
     * @param {String} block Block of text.
     * @return {Array} Returns array of lines.
     */
    function splitLines(block)
    {
    	return block.split('\n');
    }

    /**
     * Generates HTML ID for the highlighter.
     * @param {String} highlighterId Highlighter ID.
     * @return {String} Returns HTML ID.
     */
    function getHighlighterId(id)
    {
    	var prefix = 'highlighter_';
    	return id.indexOf(prefix) == 0 ? id : prefix + id;
    };

    /**
     * Finds Highlighter instance by ID.
     * @param {String} highlighterId Highlighter ID.
     * @return {Highlighter} Returns instance of the highlighter.
     */
    function getHighlighterById(id)
    {
    	return sh.vars.highlighters[getHighlighterId(id)];
    };

    /**
     * Finds highlighter's DIV container.
     * @param {String} highlighterId Highlighter ID.
     * @return {Element} Returns highlighter's DIV element.
     */
    function getHighlighterDivById(id)
    {
    	return document.getElementById(getHighlighterId(id));
    };

    /**
     * Stores highlighter so that getHighlighterById() can do its thing. Each
     * highlighter must call this method to preserve itself.
     * @param {Highilghter} highlighter Highlighter instance.
     */
    function storeHighlighter(highlighter)
    {
    	sh.vars.highlighters[getHighlighterId(highlighter.id)] = highlighter;
    };

    /**
     * Looks for a child or parent node which has specified classname.
     * Equivalent to jQuery's $(container).find(".className")
     * @param {Element} target Target element.
     * @param {String} search Class name or node name to look for.
     * @param {Boolean} reverse If set to true, will go up the node tree instead of down.
     * @return {Element} Returns found child or parent element on null.
     */
    function findElement(target, search, reverse /* optional */)
    {
    	if (target == null)
    		return null;
		
    	var nodes			= reverse != true ? target.childNodes : [ target.parentNode ],
    		propertyToFind	= { '#' : 'id', '.' : 'className' }[search.substr(0, 1)] || 'nodeName',
    		expectedValue,
    		found
    		;

    	expectedValue = propertyToFind != 'nodeName'
    		? search.substr(1)
    		: search.toUpperCase()
    		;
		
    	// main return of the found node
    	if ((target[propertyToFind] || '').indexOf(expectedValue) != -1)
    		return target;
	
    	for (var i = 0; nodes && i < nodes.length && found == null; i++)
    		found = findElement(nodes[i], search, reverse);
	
    	return found;
    };

    /**
     * Looks for a parent node which has specified classname.
     * This is an alias to <code>findElement(container, className, true)</code>.
     * @param {Element} target Target element.
     * @param {String} className Class name to look for.
     * @return {Element} Returns found parent element on null.
     */
    function findParentElement(target, className)
    {
    	return findElement(target, className, true);
    };

    /**
     * Finds an index of element in the array.
     * @ignore
     * @param {Object} searchElement
     * @param {Number} fromIndex
     * @return {Number} Returns index of element if found; -1 otherwise.
     */
    function indexOf(array, searchElement, fromIndex)
    {
    	fromIndex = Math.max(fromIndex || 0, 0);

    	for (var i = fromIndex; i < array.length; i++)
    		if(array[i] == searchElement)
    			return i;
	
    	return -1;
    };

    /**
     * Generates a unique element ID.
     */
    function guid(prefix)
    {
    	return (prefix || '') + Math.round(Math.random() * 1000000).toString();
    };

    /**
     * Merges two objects. Values from obj2 override values in obj1.
     * Function is NOT recursive and works only for one dimensional objects.
     * @param {Object} obj1 First object.
     * @param {Object} obj2 Second object.
     * @return {Object} Returns combination of both objects.
     */
    function merge(obj1, obj2)
    {
    	var result = {}, name;

    	for (name in obj1) 
    		result[name] = obj1[name];
	
    	for (name in obj2) 
    		result[name] = obj2[name];
		
    	return result;
    };

    /**
     * Attempts to convert string to boolean.
     * @param {String} value Input string.
     * @return {Boolean} Returns true if input was "true", false if input was "false" and value otherwise.
     */
    function toBoolean(value)
    {
    	var result = { "true" : true, "false" : false }[value];
    	return result == null ? value : result;
    };

    /**
     * Opens up a centered popup window.
     * @param {String} url		URL to open in the window.
     * @param {String} name		Popup name.
     * @param {int} width		Popup width.
     * @param {int} height		Popup height.
     * @param {String} options	window.open() options.
     * @return {Window}			Returns window instance.
     */
    function popup(url, name, width, height, options)
    {
    	var x = (screen.width - width) / 2,
    		y = (screen.height - height) / 2
    		;
		
    	options +=	', left=' + x + 
    				', top=' + y +
    				', width=' + width +
    				', height=' + height
    		;
    	options = options.replace(/^,/, '');

    	var win = window.open(url, name, options);
    	win.focus();
    	return win;
    };

    /**
     * Adds event handler to the target object.
     * @param {Object} obj		Target object.
     * @param {String} type		Name of the event.
     * @param {Function} func	Handling function.
     */
    function attachEvent(obj, type, func, scope)
    {
    	function handler(e)
    	{
    		e = e || window.event;
		
    		if (!e.target)
    		{
    			e.target = e.srcElement;
    			e.preventDefault = function()
    			{
    				this.returnValue = false;
    			};
    		}
			
    		func.call(scope || window, e);
    	};
	
    	if (obj.attachEvent) 
    	{
    		obj.attachEvent('on' + type, handler);
    	}
    	else 
    	{
    		obj.addEventListener(type, handler, false);
    	}
    };

    /**
     * Displays an alert.
     * @param {String} str String to display.
     */
    function alert(str)
    {
    	window.alert(sh.config.strings.alert + str);
    };

    /**
     * Finds a brush by its alias.
     *
     * @param {String} alias		Brush alias.
     * @param {Boolean} showAlert	Suppresses the alert if false.
     * @return {Brush}				Returns bursh constructor if found, null otherwise.
     */
    function findBrush(alias, showAlert)
    {
    	var brushes = sh.vars.discoveredBrushes,
    		result = null
    		;
	
    	if (brushes == null) 
    	{
    		brushes = {};
		
    		// Find all brushes
    		for (var brush in sh.brushes) 
    		{
    			var info = sh.brushes[brush],
    				aliases = info.aliases
    				;
			
    			if (aliases == null) 
    				continue;
			
    			// keep the brush name
    			info.brushName = brush.toLowerCase();
			
    			for (var i = 0; i < aliases.length; i++) 
    				brushes[aliases[i]] = brush;
    		}
		
    		sh.vars.discoveredBrushes = brushes;
    	}
	
    	result = sh.brushes[brushes[alias]];

    	if (result == null && showAlert != false)
    		alert(sh.config.strings.noBrush + alias);
	
    	return result;
    };

    /**
     * Executes a callback on each line and replaces each line with result from the callback.
     * @param {Object} str			Input string.
     * @param {Object} callback		Callback function taking one string argument and returning a string.
     */
    function eachLine(str, callback)
    {
    	var lines = splitLines(str);
	
    	for (var i = 0; i < lines.length; i++)
    		lines[i] = callback(lines[i], i);
		
    	return lines.join('\n');
    };

    /**
     * This is a special trim which only removes first and last empty lines
     * and doesn't affect valid leading space on the first line.
     * 
     * @param {String} str   Input string
     * @return {String}      Returns string without empty first and last lines.
     */
    function trimFirstAndLastLines(str)
    {
    	return str.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g, '');
    };

    /**
     * Parses key/value pairs into hash object.
     * 
     * Understands the following formats:
     * - name: word;
     * - name: [word, word];
     * - name: "string";
     * - name: 'string';
     * 
     * For example:
     *   name1: value; name2: [value, value]; name3: 'value'
     *   
     * @param {String} str    Input string.
     * @return {Object}       Returns deserialized object.
     */
    function parseParams(str)
    {
    	var match, 
    		result = {},
    		arrayRegex = new XRegExp("^\\[(?<values>(.*?))\\]$"),
    		regex = new XRegExp(
    			"(?<name>[\\w-]+)" +
    			"\\s*:\\s*" +
    			"(?<value>" +
    				"[\\w-%#]+|" +		// word
    				"\\[.*?\\]|" +		// [] array
    				'".*?"|' +			// "" string
    				"'.*?'" +			// '' string
    			")\\s*;?",
    			"g"
    		)
    		;

    	while ((match = regex.exec(str)) != null) 
    	{
    		var value = match.value
    			.replace(/^['"]|['"]$/g, '') // strip quotes from end of strings
    			;
		
    		// try to parse array value
    		if (value != null && arrayRegex.test(value))
    		{
    			var m = arrayRegex.exec(value);
    			value = m.values.length > 0 ? m.values.split(/\s*,\s*/) : [];
    		}
		
    		result[match.name] = value;
    	}
	
    	return result;
    };

    /**
     * Wraps each line of the string into <code/> tag with given style applied to it.
     * 
     * @param {String} str   Input string.
     * @param {String} css   Style name to apply to the string.
     * @return {String}      Returns input string with each line surrounded by <span/> tag.
     */
    function wrapLinesWithCode(str, css)
    {
    	if (str == null || str.length == 0 || str == '\n') 
    		return str;

    	str = str.replace(/</g, '&lt;');

    	// Replace two or more sequential spaces with &nbsp; leaving last space untouched.
    	str = str.replace(/ {2,}/g, function(m)
    	{
    		var spaces = '';
		
    		for (var i = 0; i < m.length - 1; i++)
    			spaces += sh.config.space;
		
    		return spaces + ' ';
    	});

    	// Split each line and apply <span class="...">...</span> to them so that
    	// leading spaces aren't included.
    	if (css != null) 
    		str = eachLine(str, function(line)
    		{
    			if (line.length == 0) 
    				return '';
			
    			var spaces = '';
			
    			line = line.replace(/^(&nbsp;| )+/, function(s)
    			{
    				spaces = s;
    				return '';
    			});
			
    			if (line.length == 0) 
    				return spaces;
			
    			return spaces + '<code class="' + css + '">' + line + '</code>';
    		});

    	return str;
    };

    /**
     * Pads number with zeros until it's length is the same as given length.
     * 
     * @param {Number} number	Number to pad.
     * @param {Number} length	Max string length with.
     * @return {String}			Returns a string padded with proper amount of '0'.
     */
    function padNumber(number, length)
    {
    	var result = number.toString();
	
    	while (result.length < length)
    		result = '0' + result;
	
    	return result;
    };

    /**
     * Replaces tabs with spaces.
     * 
     * @param {String} code		Source code.
     * @param {Number} tabSize	Size of the tab.
     * @return {String}			Returns code with all tabs replaces by spaces.
     */
    function processTabs(code, tabSize)
    {
    	var tab = '';
	
    	for (var i = 0; i < tabSize; i++)
    		tab += ' ';

    	return code.replace(/\t/g, tab);
    };

    /**
     * Replaces tabs with smart spaces.
     * 
     * @param {String} code    Code to fix the tabs in.
     * @param {Number} tabSize Number of spaces in a column.
     * @return {String}        Returns code with all tabs replaces with roper amount of spaces.
     */
    function processSmartTabs(code, tabSize)
    {
    	var lines = splitLines(code),
    		tab = '\t',
    		spaces = ''
    		;
	
    	// Create a string with 1000 spaces to copy spaces from... 
    	// It's assumed that there would be no indentation longer than that.
    	for (var i = 0; i < 50; i++) 
    		spaces += '                    '; // 20 spaces * 50
			
    	// This function inserts specified amount of spaces in the string
    	// where a tab is while removing that given tab.
    	function insertSpaces(line, pos, count)
    	{
    		return line.substr(0, pos)
    			+ spaces.substr(0, count)
    			+ line.substr(pos + 1, line.length) // pos + 1 will get rid of the tab
    			;
    	};

    	// Go through all the lines and do the 'smart tabs' magic.
    	code = eachLine(code, function(line)
    	{
    		if (line.indexOf(tab) == -1) 
    			return line;
		
    		var pos = 0;
		
    		while ((pos = line.indexOf(tab)) != -1) 
    		{
    			// This is pretty much all there is to the 'smart tabs' logic.
    			// Based on the position within the line and size of a tab,
    			// calculate the amount of spaces we need to insert.
    			var spaces = tabSize - pos % tabSize;
    			line = insertSpaces(line, pos, spaces);
    		}
		
    		return line;
    	});
	
    	return code;
    };

    /**
     * Performs various string fixes based on configuration.
     */
    function fixInputString(str)
    {
    	var br = /<br\s*\/?>|&lt;br\s*\/?&gt;/gi;
	
    	if (sh.config.bloggerMode == true)
    		str = str.replace(br, '\n');

    	if (sh.config.stripBrs == true)
    		str = str.replace(br, '');
		
    	return str;
    };

    /**
     * Removes all white space at the begining and end of a string.
     * 
     * @param {String} str   String to trim.
     * @return {String}      Returns string without leading and following white space characters.
     */
    function trim(str)
    {
    	return str.replace(/^\s+|\s+$/g, '');
    };

    /**
     * Unindents a block of text by the lowest common indent amount.
     * @param {String} str   Text to unindent.
     * @return {String}      Returns unindented text block.
     */
    function unindent(str)
    {
    	var lines = splitLines(fixInputString(str)),
    		indents = new Array(),
    		regex = /^\s*/,
    		min = 1000
    		;
	
    	// go through every line and check for common number of indents
    	for (var i = 0; i < lines.length && min > 0; i++) 
    	{
    		var line = lines[i];
		
    		if (trim(line).length == 0) 
    			continue;
		
    		var matches = regex.exec(line);
		
    		// In the event that just one line doesn't have leading white space
    		// we can't unindent anything, so bail completely.
    		if (matches == null) 
    			return str;
			
    		min = Math.min(matches[0].length, min);
    	}
	
    	// trim minimum common number of white space from the begining of every line
    	if (min > 0) 
    		for (var i = 0; i < lines.length; i++) 
    			lines[i] = lines[i].substr(min);
	
    	return lines.join('\n');
    };

    /**
     * Callback method for Array.sort() which sorts matches by
     * index position and then by length.
     * 
     * @param {Match} m1	Left object.
     * @param {Match} m2    Right object.
     * @return {Number}     Returns -1, 0 or -1 as a comparison result.
     */
    function matchesSortCallback(m1, m2)
    {
    	// sort matches by index first
    	if(m1.index < m2.index)
    		return -1;
    	else if(m1.index > m2.index)
    		return 1;
    	else
    	{
    		// if index is the same, sort by length
    		if(m1.length < m2.length)
    			return -1;
    		else if(m1.length > m2.length)
    			return 1;
    	}
	
    	return 0;
    };

    /**
     * Executes given regular expression on provided code and returns all
     * matches that are found.
     * 
     * @param {String} code    Code to execute regular expression on.
     * @param {Object} regex   Regular expression item info from <code>regexList</code> collection.
     * @return {Array}         Returns a list of Match objects.
     */ 
    function getMatches(code, regexInfo)
    {
    	function defaultAdd(match, regexInfo)
    	{
    		return match[0];
    	};
	
    	var index = 0,
    		match = null,
    		matches = [],
    		func = regexInfo.func ? regexInfo.func : defaultAdd
    		;
	
    	while((match = regexInfo.regex.exec(code)) != null)
    	{
    		var resultMatch = func(match, regexInfo);
		
    		if (typeof(resultMatch) == 'string')
    			resultMatch = [new sh.Match(resultMatch, match.index, regexInfo.css)];

    		matches = matches.concat(resultMatch);
    	}
	
    	return matches;
    };

    /**
     * Turns all URLs in the code into <a/> tags.
     * @param {String} code Input code.
     * @return {String} Returns code with </a> tags.
     */
    function processUrls(code)
    {
    	var gt = /(.*)((&gt;|&lt;).*)/;
	
    	return code.replace(sh.regexLib.url, function(m)
    	{
    		var suffix = '',
    			match = null
    			;
		
    		// We include &lt; and &gt; in the URL for the common cases like <http://google.com>
    		// The problem is that they get transformed into &lt;http://google.com&gt;
    		// Where as &gt; easily looks like part of the URL string.
	
    		if (match = gt.exec(m))
    		{
    			m = match[1];
    			suffix = match[2];
    		}
		
    		return '<a href="' + m + '">' + m + '</a>' + suffix;
    	});
    };

    /**
     * Finds all <SCRIPT TYPE="syntaxhighlighter" /> elementss.
     * @return {Array} Returns array of all found SyntaxHighlighter tags.
     */
    function getSyntaxHighlighterScriptTags()
    {
    	var tags = document.getElementsByTagName('script'),
    		result = []
    		;
	
    	for (var i = 0; i < tags.length; i++)
    		if (tags[i].type == 'syntaxhighlighter')
    			result.push(tags[i]);
			
    	return result;
    };

    /**
     * Strips <![CDATA[]]> from <SCRIPT /> content because it should be used
     * there in most cases for XHTML compliance.
     * @param {String} original	Input code.
     * @return {String} Returns code without leading <![CDATA[]]> tags.
     */
    function stripCData(original)
    {
    	var left = '<![CDATA[',
    		right = ']]>',
    		// for some reason IE inserts some leading blanks here
    		copy = trim(original),
    		changed = false,
    		leftLength = left.length,
    		rightLength = right.length
    		;
	
    	if (copy.indexOf(left) == 0)
    	{
    		copy = copy.substring(leftLength);
    		changed = true;
    	}
	
    	var copyLength = copy.length;
	
    	if (copy.indexOf(right) == copyLength - rightLength)
    	{
    		copy = copy.substring(0, copyLength - rightLength);
    		changed = true;
    	}
	
    	return changed ? copy : original;
    };


    /**
     * Quick code mouse double click handler.
     */
    function quickCodeHandler(e)
    {
    	var target = e.target,
    		highlighterDiv = findParentElement(target, '.syntaxhighlighter'),
    		container = findParentElement(target, '.container'),
    		textarea = document.createElement('textarea'),
    		highlighter
    		;

    	if (!container || !highlighterDiv || findElement(container, 'textarea'))
    		return;

    	highlighter = getHighlighterById(highlighterDiv.id);
	
    	// add source class name
    	addClass(highlighterDiv, 'source');

    	// Have to go over each line and grab it's text, can't just do it on the
    	// container because Firefox loses all \n where as Webkit doesn't.
    	var lines = container.childNodes,
    		code = []
    		;
	
    	for (var i = 0; i < lines.length; i++)
    		code.push(lines[i].innerText || lines[i].textContent);
	
    	// using \r instead of \r or \r\n makes this work equally well on IE, FF and Webkit
    	code = code.join('\r');
	
    	// inject <textarea/> tag
    	textarea.appendChild(document.createTextNode(code));
    	container.appendChild(textarea);
	
    	// preselect all text
    	textarea.focus();
    	textarea.select();
	
    	// set up handler for lost focus
    	attachEvent(textarea, 'blur', function(e)
    	{
    		textarea.parentNode.removeChild(textarea);
    		removeClass(highlighterDiv, 'source');
    	});
    };

    /**
     * Match object.
     */
    sh.Match = function(value, index, css)
    {
    	this.value = value;
    	this.index = index;
    	this.length = value.length;
    	this.css = css;
    	this.brushName = null;
    };

    sh.Match.prototype.toString = function()
    {
    	return this.value;
    };

    /**
     * Simulates HTML code with a scripting language embedded.
     * 
     * @param {String} scriptBrushName Brush name of the scripting language.
     */
    sh.HtmlScript = function(scriptBrushName)
    {
    	var brushClass = findBrush(scriptBrushName),
    		scriptBrush,
    		xmlBrush = new sh.brushes.Xml(),
    		bracketsRegex = null,
    		ref = this,
    		methodsToExpose = 'getDiv getHtml init'.split(' ')
    		;

    	if (brushClass == null)
    		return;
	
    	scriptBrush = new brushClass();
	
    	for(var i = 0; i < methodsToExpose.length; i++)
    		// make a closure so we don't lose the name after i changes
    		(function() {
    			var name = methodsToExpose[i];
			
    			ref[name] = function()
    			{
    				return xmlBrush[name].apply(xmlBrush, arguments);
    			};
    		})();
	
    	if (scriptBrush.htmlScript == null)
    	{
    		alert(sh.config.strings.brushNotHtmlScript + scriptBrushName);
    		return;
    	}
	
    	xmlBrush.regexList.push(
    		{ regex: scriptBrush.htmlScript.code, func: process }
    	);
	
    	function offsetMatches(matches, offset)
    	{
    		for (var j = 0; j < matches.length; j++) 
    			matches[j].index += offset;
    	}
	
    	function process(match, info)
    	{
    		var code = match.code,
    			matches = [],
    			regexList = scriptBrush.regexList,
    			offset = match.index + match.left.length,
    			htmlScript = scriptBrush.htmlScript,
    			result
    			;

    		// add all matches from the code
    		for (var i = 0; i < regexList.length; i++)
    		{
    			result = getMatches(code, regexList[i]);
    			offsetMatches(result, offset);
    			matches = matches.concat(result);
    		}
		
    		// add left script bracket
    		if (htmlScript.left != null && match.left != null)
    		{
    			result = getMatches(match.left, htmlScript.left);
    			offsetMatches(result, match.index);
    			matches = matches.concat(result);
    		}
		
    		// add right script bracket
    		if (htmlScript.right != null && match.right != null)
    		{
    			result = getMatches(match.right, htmlScript.right);
    			offsetMatches(result, match.index + match[0].lastIndexOf(match.right));
    			matches = matches.concat(result);
    		}
		
    		for (var j = 0; j < matches.length; j++)
    			matches[j].brushName = brushClass.brushName;
			
    		return matches;
    	}
    };

    /**
     * Main Highlither class.
     * @constructor
     */
    sh.Highlighter = function()
    {
    	// not putting any code in here because of the prototype inheritance
    };

    sh.Highlighter.prototype = {
    	/**
    	 * Returns value of the parameter passed to the highlighter.
    	 * @param {String} name				Name of the parameter.
    	 * @param {Object} defaultValue		Default value.
    	 * @return {Object}					Returns found value or default value otherwise.
    	 */
    	getParam: function(name, defaultValue)
    	{
    		var result = this.params[name];
    		return toBoolean(result == null ? defaultValue : result);
    	},
	
    	/**
    	 * Shortcut to document.createElement().
    	 * @param {String} name		Name of the element to create (DIV, A, etc).
    	 * @return {HTMLElement}	Returns new HTML element.
    	 */
    	create: function(name)
    	{
    		return document.createElement(name);
    	},
	
    	/**
    	 * Applies all regular expression to the code and stores all found
    	 * matches in the `this.matches` array.
    	 * @param {Array} regexList		List of regular expressions.
    	 * @param {String} code			Source code.
    	 * @return {Array}				Returns list of matches.
    	 */
    	findMatches: function(regexList, code)
    	{
    		var result = [];
		
    		if (regexList != null)
    			for (var i = 0; i < regexList.length; i++) 
    				// BUG: length returns len+1 for array if methods added to prototype chain (oising@gmail.com)
    				if (typeof (regexList[i]) == "object")
    					result = result.concat(getMatches(code, regexList[i]));
		
    		// sort and remove nested the matches
    		return this.removeNestedMatches(result.sort(matchesSortCallback));
    	},
	
    	/**
    	 * Checks to see if any of the matches are inside of other matches. 
    	 * This process would get rid of highligted strings inside comments, 
    	 * keywords inside strings and so on.
    	 */
    	removeNestedMatches: function(matches)
    	{
    		// Optimized by Jose Prado (http://joseprado.com)
    		for (var i = 0; i < matches.length; i++) 
    		{ 
    			if (matches[i] === null)
    				continue;
			
    			var itemI = matches[i],
    				itemIEndPos = itemI.index + itemI.length
    				;
			
    			for (var j = i + 1; j < matches.length && matches[i] !== null; j++) 
    			{
    				var itemJ = matches[j];
				
    				if (itemJ === null) 
    					continue;
    				else if (itemJ.index > itemIEndPos) 
    					break;
    				else if (itemJ.index == itemI.index && itemJ.length > itemI.length)
    					matches[i] = null;
    				else if (itemJ.index >= itemI.index && itemJ.index < itemIEndPos) 
    					matches[j] = null;
    			}
    		}
		
    		return matches;
    	},
	
    	/**
    	 * Creates an array containing integer line numbers starting from the 'first-line' param.
    	 * @return {Array} Returns array of integers.
    	 */
    	figureOutLineNumbers: function(code)
    	{
    		var lines = [],
    			firstLine = parseInt(this.getParam('first-line'))
    			;
		
    		eachLine(code, function(line, index)
    		{
    			lines.push(index + firstLine);
    		});
		
    		return lines;
    	},
	
    	/**
    	 * Determines if specified line number is in the highlighted list.
    	 */
    	isLineHighlighted: function(lineNumber)
    	{
    		var list = this.getParam('highlight', []);
		
    		if (typeof(list) != 'object' && list.push == null) 
    			list = [ list ];
		
    		return indexOf(list, lineNumber.toString()) != -1;
    	},
	
    	/**
    	 * Generates HTML markup for a single line of code while determining alternating line style.
    	 * @param {Integer} lineNumber	Line number.
    	 * @param {String} code Line	HTML markup.
    	 * @return {String}				Returns HTML markup.
    	 */
    	getLineHtml: function(lineIndex, lineNumber, code)
    	{
    		var classes = [
    			'line',
    			'number' + lineNumber,
    			'index' + lineIndex,
    			'alt' + (lineNumber % 2 == 0 ? 1 : 2).toString()
    		];
		
    		if (this.isLineHighlighted(lineNumber))
    		 	classes.push('highlighted');
		
    		if (lineNumber == 0)
    			classes.push('break');
			
    		return '<div class="' + classes.join(' ') + '">' + code + '</div>';
    	},
	
    	/**
    	 * Generates HTML markup for line number column.
    	 * @param {String} code			Complete code HTML markup.
    	 * @param {Array} lineNumbers	Calculated line numbers.
    	 * @return {String}				Returns HTML markup.
    	 */
    	getLineNumbersHtml: function(code, lineNumbers)
    	{
    		var html = '',
    			count = splitLines(code).length,
    			firstLine = parseInt(this.getParam('first-line')),
    			pad = this.getParam('pad-line-numbers')
    			;
		
    		if (pad == true)
    			pad = (firstLine + count - 1).toString().length;
    		else if (isNaN(pad) == true)
    			pad = 0;
			
    		for (var i = 0; i < count; i++)
    		{
    			var lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i,
    				code = lineNumber == 0 ? sh.config.space : padNumber(lineNumber, pad)
    				;
				
    			html += this.getLineHtml(i, lineNumber, code);
    		}
		
    		return html;
    	},
	
    	/**
    	 * Splits block of text into individual DIV lines.
    	 * @param {String} code			Code to highlight.
    	 * @param {Array} lineNumbers	Calculated line numbers.
    	 * @return {String}				Returns highlighted code in HTML form.
    	 */
    	getCodeLinesHtml: function(html, lineNumbers)
    	{
    		html = trim(html);
		
    		var lines = splitLines(html),
    			padLength = this.getParam('pad-line-numbers'),
    			firstLine = parseInt(this.getParam('first-line')),
    			html = '',
    			brushName = this.getParam('brush')
    			;

    		for (var i = 0; i < lines.length; i++)
    		{
    			var line = lines[i],
    				indent = /^(&nbsp;|\s)+/.exec(line),
    				spaces = null,
    				lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i;
    				;

    			if (indent != null)
    			{
    				spaces = indent[0].toString();
    				line = line.substr(spaces.length);
    				spaces = spaces.replace(' ', sh.config.space);
    			}

    			line = trim(line);
			
    			if (line.length == 0)
    				line = sh.config.space;
			
    			html += this.getLineHtml(
    				i,
    				lineNumber, 
    				(spaces != null ? '<code class="' + brushName + ' spaces">' + spaces + '</code>' : '') + line
    			);
    		}
		
    		return html;
    	},
	
    	/**
    	 * Returns HTML for the table title or empty string if title is null.
    	 */
    	getTitleHtml: function(title)
    	{
    		return title ? '<caption>' + title + '</caption>' : '';
    	},
	
    	/**
    	 * Finds all matches in the source code.
    	 * @param {String} code		Source code to process matches in.
    	 * @param {Array} matches	Discovered regex matches.
    	 * @return {String} Returns formatted HTML with processed mathes.
    	 */
    	getMatchesHtml: function(code, matches)
    	{
    		var pos = 0, 
    			result = '',
    			brushName = this.getParam('brush', '')
    			;
		
    		function getBrushNameCss(match)
    		{
    			var result = match ? (match.brushName || brushName) : brushName;
    			return result ? result + ' ' : '';
    		};
		
    		// Finally, go through the final list of matches and pull the all
    		// together adding everything in between that isn't a match.
    		for (var i = 0; i < matches.length; i++) 
    		{
    			var match = matches[i],
    				matchBrushName
    				;
			
    			if (match === null || match.length === 0) 
    				continue;
			
    			matchBrushName = getBrushNameCss(match);
			
    			result += wrapLinesWithCode(code.substr(pos, match.index - pos), matchBrushName + 'plain')
    					+ wrapLinesWithCode(match.value, matchBrushName + match.css)
    					;

    			pos = match.index + match.length + (match.offset || 0);
    		}

    		// don't forget to add whatever's remaining in the string
    		result += wrapLinesWithCode(code.substr(pos), getBrushNameCss() + 'plain');

    		return result;
    	},
	
    	/**
    	 * Generates HTML markup for the whole syntax highlighter.
    	 * @param {String} code Source code.
    	 * @return {String} Returns HTML markup.
    	 */
    	getHtml: function(code)
    	{
    		var html = '',
    			classes = [ 'syntaxhighlighter' ],
    			tabSize,
    			matches,
    			lineNumbers
    			;
		
    		// process light mode
    		if (this.getParam('light') == true)
    			this.params.toolbar = this.params.gutter = false;

    		className = 'syntaxhighlighter';

    		if (this.getParam('collapse') == true)
    			classes.push('collapsed');
		
    		if ((gutter = this.getParam('gutter')) == false)
    			classes.push('nogutter');

    		// add custom user style name
    		classes.push(this.getParam('class-name'));

    		// add brush alias to the class name for custom CSS
    		classes.push(this.getParam('brush'));

    		code = trimFirstAndLastLines(code)
    			.replace(/\r/g, ' ') // IE lets these buggers through
    			;

    		tabSize = this.getParam('tab-size');

    		// replace tabs with spaces
    		code = this.getParam('smart-tabs') == true
    			? processSmartTabs(code, tabSize)
    			: processTabs(code, tabSize)
    			;

    		// unindent code by the common indentation
    		code = unindent(code);

    		if (gutter)
    			lineNumbers = this.figureOutLineNumbers(code);
		
    		// find matches in the code using brushes regex list
    		matches = this.findMatches(this.regexList, code);
    		// processes found matches into the html
    		html = this.getMatchesHtml(code, matches);
    		// finally, split all lines so that they wrap well
    		html = this.getCodeLinesHtml(html, lineNumbers);

    		// finally, process the links
    		if (this.getParam('auto-links'))
    			html = processUrls(html);
		
    		if (typeof(navigator) != 'undefined' && navigator.userAgent && navigator.userAgent.match(/MSIE/))
    			classes.push('ie');
		
    		html = 
    			'<div id="' + getHighlighterId(this.id) + '" class="' + classes.join(' ') + '">'
    				+ (this.getParam('toolbar') ? sh.toolbar.getHtml(this) : '')
    				+ '<table border="0" cellpadding="0" cellspacing="0">'
    					+ this.getTitleHtml(this.getParam('title'))
    					+ '<tbody>'
    						+ '<tr>'
    							+ (gutter ? '<td class="gutter">' + this.getLineNumbersHtml(code) + '</td>' : '')
    							+ '<td class="code">'
    								+ '<div class="container">'
    									+ html
    								+ '</div>'
    							+ '</td>'
    						+ '</tr>'
    					+ '</tbody>'
    				+ '</table>'
    			+ '</div>'
    			;
			
    		return html;
    	},
	
    	/**
    	 * Highlights the code and returns complete HTML.
    	 * @param {String} code     Code to highlight.
    	 * @return {Element}        Returns container DIV element with all markup.
    	 */
    	getDiv: function(code)
    	{
    		if (code === null) 
    			code = '';
		
    		this.code = code;

    		var div = this.create('div');

    		// create main HTML
    		div.innerHTML = this.getHtml(code);
		
    		// set up click handlers
    		if (this.getParam('toolbar'))
    			attachEvent(findElement(div, '.toolbar'), 'click', sh.toolbar.handler);
		
    		if (this.getParam('quick-code'))
    			attachEvent(findElement(div, '.code'), 'dblclick', quickCodeHandler);
		
    		return div;
    	},
	
    	/**
    	 * Initializes the highlighter/brush.
    	 *
    	 * Constructor isn't used for initialization so that nothing executes during necessary
    	 * `new SyntaxHighlighter.Highlighter()` call when setting up brush inheritence.
    	 *
    	 * @param {Hash} params Highlighter parameters.
    	 */
    	init: function(params)
    	{
    		this.id = guid();
		
    		// register this instance in the highlighters list
    		storeHighlighter(this);
		
    		// local params take precedence over defaults
    		this.params = merge(sh.defaults, params || {})
		
    		// process light mode
    		if (this.getParam('light') == true)
    			this.params.toolbar = this.params.gutter = false;
    	},
	
    	/**
    	 * Converts space separated list of keywords into a regular expression string.
    	 * @param {String} str    Space separated keywords.
    	 * @return {String}       Returns regular expression string.
    	 */
    	getKeywords: function(str)
    	{
    		str = str
    			.replace(/^\s+|\s+$/g, '')
    			.replace(/\s+/g, '|')
    			;
		
    		return '\\b(?:' + str + ')\\b';
    	},
	
    	/**
    	 * Makes a brush compatible with the `html-script` functionality.
    	 * @param {Object} regexGroup Object containing `left` and `right` regular expressions.
    	 */
    	forHtmlScript: function(regexGroup)
    	{
    		this.htmlScript = {
    			left : { regex: regexGroup.left, css: 'script' },
    			right : { regex: regexGroup.right, css: 'script' },
    			code : new XRegExp(
    				"(?<left>" + regexGroup.left.source + ")" +
    				"(?<code>.*?)" +
    				"(?<right>" + regexGroup.right.source + ")",
    				"sgi"
    				)
    		};
    	}
    }; // end of Highlighter

    return sh;
    }(); // end of anonymous function

    // CommonJS
    typeof(exports) != 'undefined' ? exports['SyntaxHighlighter'] = SyntaxHighlighter : null;
    // (inc clojure-brush) ;; an improved SyntaxHighlighter brush for clojure
    //
    // Copyright (C) 2011 Andrew Brehaut
    //
    // Distributed under the Eclipse Public License, the same as Clojure.
    //
    // https://github.com/brehaut/inc-clojure-brush
    //
    // Written by Andrew Brehaut
    // V0.9.1, November 2011

    if (typeof net == "undefined") net = {};
    if (!(net.brehaut)) net.brehaut = {};

    net.brehaut.ClojureTools = (function (SH) {
      "use strict";
      // utiliies
      if (!Object.create) Object.create = function object(o) {
        function F() {};
        F.prototype = o;  
        return new F();
      };
        
      // data
  
      function Token(value, index, tag, length) {
        this.value = value;
        this.index = index;
        this.length = length || value.length;
        this.tag = tag;
        this.secondary_tags = {};
      }
  
      // null_token exists so that LispNodes that have not had a closing tag attached
      // can have a dummy token to simplify annotation
      var null_token = new Token("", -1, "null", -1);
  
      /* LispNodes are aggregate nodes for sexpressions. 
       *
       */
      function LispNode(tag, children, opening) {
        this.tag = tag;            // current metadata for syntax inference
        this.parent = null;        // the parent expression
        this.list = children;      // all the child forms in order
        this.opening = opening;    // the token that opens this form.
        this.closing = null_token; // the token that closes this form.
        this.meta = null;          // metadata nodes will be attached here if they are found
      }

      var null_lispnode = new LispNode("null", [], null_token);

  
      function PrefixNode(tag, token, attached_node) {
        this.tag = tag;
        this.token = token;
        this.attached_node = attached_node;
        this.parent = null;
      }

  
  
      // tokenize

      function tokenize(code) {
        var tokens = [];
        var tn = 0;
    
        var zero = "0".charCodeAt(0);
        var nine = "9".charCodeAt(0); 
        var lower_a = "a".charCodeAt(0);
        var lower_f = "f".charCodeAt(0);    
        var upper_a = "A".charCodeAt(0);
        var upper_f = "F".charCodeAt(0);
    
        var dispatch = false; // have we just seen a # character?
    
        // i tracks the start of the current window
        // extent is the window for slicing
    
        for (var i = 0, 
                 extent = i, 
                 j = code.length; 
                 i < j && extent <= j;) {          
                
          var c = code[i];
      
          // we care about capturing the whole token when dispatch is used, so back up the
          // starting index by 1
          if (dispatch) i--; 
      
          switch (c) {
            // dispatch alters the value of the next thing read
            case "#":
              dispatch = true;
              i++;
              extent++;
              continue;
          
            case " ":    // ignore whitespace
            case "\t":
            case "\n":
            case "\r":
            case ",":   
              extent++
              break; 
          
            // simple terms
            case "^":
            case "`":
            case ")":
            case "[":
            case "]":
            case "}":
            case "@":
              tokens[tn++] = new Token(c, i, c, ++extent - i);
              break;
        
            case "'":
              tokens[tn++] = new Token(code.slice(i, ++extent), i, dispatch ? "#'" : "'", extent - i);
              break
        
            case "(":
              tokens[tn++] = new Token(code.slice(i, ++extent), i, "(", extent - i);
              break;          
          
            case "{":
              tokens[tn++] = new Token(code.slice(i, ++extent), i, dispatch ? "#{" : "{", extent - i);
              break;  
        
            case "\\":
              if (code.slice(i + 1, i + 8) === "newline") {
                tokens[tn++] = new Token("\\newline", i, "value", 8);
                extent = i + 9; 
              }
              else if (code.slice(i + 1, i + 6) === "space") {
                tokens[tn++] = new Token("\\space", i, "value", 6);
                extent = i + 6;
              }
              else if (code.slice(i + 1, i + 4) === "tab") {
                tokens[tn++] = new Token("\\tab", i, "value", 4);
                extent = i + 5;
              } // work around fun bug with &,>,< in character literals
              else if (code.slice(i + 1, i + 6) === "&amp;") {
                tokens[tn++] = new Token("\\&amp;", i, "value", 6);
                extent = i + 6; 
              }
              else if (code.slice(i + 1, i + 5) === "&lt;") {
                tokens[tn++] = new Token("\\&lt;", i, "value", 5);
                extent = i + 5;
              }
              else if (code.slice(i + 1, i + 5) === "&gt;") {
                tokens[tn++] = new Token("\\&gt;", i, "value", 5);
                extent = i + 5;
              }
          
              else {
                extent += 2;
                tokens[tn++] = new Token(code.slice(i, extent), i, "value", 2);
              }
              break;
        
            case "~": // slice
              if (code[i + 1] === "@") {
                extent += 2;
                tokens[tn++] = new Token(code.slice(i, extent), i, "splice", 2);
              }
              else {
                tokens[tn++] = new Token(code.slice(i, ++extent), i, "unquote", 2);
              }
              break;
        
            // complicated terms
            case "\"": // strings and regexps
              for (extent++; extent <= j; extent++) {
                if (code[extent] === "\\") extent++;
                else if (code[extent] === "\"") break;
              }
              tokens[tn++] = new Token(code.slice(i, ++extent), i, dispatch ? "regexp" : "string", extent - i);       
              break;
          
            case ";":
              for (; extent <= j && code[extent] !== "\n" && code[extent] !== "\r"; extent++);
              tokens[tn++] = new Token(code.slice(i, ++extent), i, "comments", extent - i);   
              break;
        
            case "+": // numbers; fall through to symbol for + and - not prefixing a number
            case "-":
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            // todo: exponents, hex
            // http://my.safaribooksonline.com/9781449310387/14?reader=pf&readerfullscreen=&readerleftmenu=1
              var c2 = code.charCodeAt(i + 1);
              if (((c === "+" || c === "-") && (c2 >= zero && c2 <= nine)) // prefixes
                  || (c !== "+" && c !== "-")) {
                if (c === "+" || c === "-") extent++; 
                for (; extent <= j; extent++) {
                  var charCode = code.charCodeAt(extent);
                  if (charCode < zero || charCode > nine) break;
                }
            
                c = code[extent];
                c2 = code.charCodeAt(extent + 1);
                if ((c === "r" || c === "R" || c === "/" || c === ".") // interstitial characters
                    && (c2 >= zero && c2 <= nine)) {
                  for (extent++; extent <= j; extent++) {
                    var charCode = code.charCodeAt(extent);
                    if (charCode < zero || charCode > nine) break;
                  }
                }
            
                c = code[extent];
                c2 = code.charCodeAt(extent + 1);
                if ((c === "x" || c === "X") && 
                    ((c2 >= zero && c2 <= nine) 
                     || (c2 >= lower_a && c2 <= lower_f)
                     || (c2 >= upper_a && c2 <= upper_f))) {
                  for (extent++; extent <= j; extent++) {
                    var charCode = code.charCodeAt(extent);
                    if (((charCode >= zero && charCode <= nine) 
                        || (charCode >= lower_a && charCode <= lower_f)
                        || (charCode >= upper_a && charCode <= upper_f))) continue;
                    break;
                  }
                }
            
                c = code[extent];
                c2 = code.charCodeAt(extent + 1);
                if ((c === "e" || c === "E") 
                    && (c2 >= zero && c2 <= nine)) {
                  for (extent++; extent <= j; extent++) {
                    var charCode = code.charCodeAt(extent);
                    if (charCode < zero || charCode > nine) break;
                  }
                }
            
                c = code[extent];
                if (c === "N" || c === "M") extent++;

                tokens[tn++] = new Token(code.slice(i, extent), i, "value", extent - i);
                break;
              }

            case "_":
              if (dispatch && c === "_") {
                tokens[tn++] = new Token(code.slice(i, ++extent), i, "skip", extent - i);
                break;
              } // if not a skip, fall through to symbols
        
            // Allow just about any other symbol as a symbol. This is far more permissive than 
            // clojure actually allows, but should catch any weirdo crap that accidentally gets
            // into the code.
            default: 
              for (extent++; extent <= j; extent++) {
                switch (code[extent]) {
                  case " ":
                  case "\t":
                  case "\n":
                  case "\r":
                  case "\\":
                  case ",":
                  case "{":
                  case "}":
                  case "(":
                  case ")":
                  case "[":
                  case "]":
                  case "^":
                  case "`":
                  case "@":   
                    break;
                  case ";":   
                    // theres a weird bug via syntax highligher that gives us escaped entities.
                    // need to watch out for these
                    if (code.slice(extent-3, extent+1) === "&lt;"
                        ||code.slice(extent-3, extent+1) === "&gt;"
                        ||code.slice(extent-4, extent+1) === "&amp;") {
                      continue;
                    }
                    break;
                  default:
                    continue;
                }
                break;
              }
          
              var value = code.slice(i, extent);
              var tag = "symbol";
              if (value[0] == ":") {
                tag = "keyword";
              }
              else if (value === "true" || value === "false" || value === "nil") {
                tag = "value";
              }
              tokens[tn++] = new Token(value, i, tag, extent - i);
          }
      
          dispatch = false;
          i = extent;
        } 

        return tokens;
      }


      function build_tree(tokens) {
        var toplevel = {
          list: [], 
          tag: "toplevel", 
          parent: null, 
          opening: null,
          closing: null,
          depth: -1
        };
    
        // loop variables hoisted out as semi globals to track position in token stream
        var i = -1;
        var j = tokens.length;
    
        function parse_one(t) {
          // ignore special tokens and forms that dont belong in the tree
          for (; t && (t.tag === "comments" || t.tag === "invalid" || t.tag == "skip") && i < j; ) {
            if (t.tag === "skip") {
              t.tag = "preprocessor";
              annotate_comment(parse_one(tokens[++i]));
            }
            t = tokens[++i];
          }
      
          if (!t) return {}; // hackity hack
      
          switch (t.tag) {
            case "{":
              return build_aggregate(new LispNode("map", [], t), "}");
            case "(":
              return build_aggregate(new LispNode("list", [], t), ")");
            case "#{":
              return build_aggregate(new LispNode("set", [], t), "}");
            case "[":
              return build_aggregate(new LispNode("vector", [], t), "]");
            case "'":
              return new PrefixNode("quote", t, parse_one(tokens[++i]));
            case "#'":
              return new PrefixNode("varquote", t, parse_one(tokens[++i]));  
            case "@":
              return new PrefixNode("deref", t, parse_one(tokens[++i]));  
            case "`":
              return new PrefixNode("quasiquote", t, parse_one(tokens[++i]));  
            case "unquote":
              return new PrefixNode("unquote", t, parse_one(tokens[++i]));
            case "splice":
              return new PrefixNode("splice", t, parse_one(tokens[++i]));  
            case "^":
              t.tag = "meta";
              var meta = parse_one(tokens[++i]);
              var next = parse_one(tokens[++i]);
              next.meta = meta;
              return next;
          }
      
          return t;
        }
    
        // build_aggregate collects to ether sub forms for one aggregate for. 
        function build_aggregate(current, expected_closing) {
          for (i++; i < j; i++) {
            var t = tokens[i];

            if (t.tag === "}" || t.tag === ")" || t.tag === "]") {
              if (t.tag !== expected_closing) t.tag = "invalid";
              current.closing = t;
              if (expected_closing) return current;
            }
            var node = parse_one(t);

            node.parent = current;
            current.list[current.list.length] = node;
          }
      
          return current;
        }
    
        build_aggregate(toplevel, null);
    
        return toplevel;
      }

      // annotation rules to apply to a form based on its head

      var show_locals = true;  // HACK. would rather not use a (semi)-global.

      /* annotate_comment is a special case annotation. 
       * in addition to its role in styling specific forms, it is called by parse_one to
       * ignore any forms skipped with #_
       */ 
      function annotate_comment(exp) {
        exp.tag = "comments";

        if (exp.list) {
          exp.opening.tag = "comments";
          exp.closing.tag = "comments";
    
          for (var i = 0; i < exp.list.length; i++) {
            var child = exp.list[i];
            if (child.list) {
              annotate_comment(child);
            }
            if (child.attached_node) {
              annotate_comment(child.attached_node);
            }
            else {
              child.tag = "comments";
            }
          }
        }
      }

      /* custom annotation rules are stored here */
      var annotation_rules = {};
  
      // this function is exposed to allow ad hoc extension of the customisation rules
      function register_annotation_rule(names, rule) {
        for (var i = 0; i < names.length; i++) {
          annotation_rules[names[i]] = rule;
        }
      }


      function annotate_destructuring (exp, scope) {
        if (exp.list) {
          if (exp.tag === "vector") {
            for (var i = 0; i < exp.list.length; i++) {
              annotate_destructuring(exp.list[i], scope);
            }
          } 
          else if (exp.tag === "map") {
            for (var i = 0; i < exp.list.length; i += 2) {
              var key = exp.list[i];
              var val = exp.list[i + 1];
          
              if (key.tag === "keyword" && val.tag === "vector") {
                for (var ii = 0, jj = val.list.length; ii < jj; ii++) {
                  if (val.list[ii].tag !== "symbol") continue;
                  val.list[ii].tag = "variable";
                  scope[val.list[ii].value] = true;
                }
              }
              else {
                annotate_destructuring(key, scope);
                annotate_expressions(val, scope);
              }
            } 
          }
        } 
        else if (exp.tag === "symbol" && (exp.value !== "&" && exp.value !== "&amp;")){
          exp.tag = "variable";
          scope[exp.value] = true;
        }
      }

      function _annotate_binding_vector (exp, scope) {
        if (exp.tag !== "vector") return;
  
        var bindings = exp.list;

        if (bindings.length % 2 === 1) return;
    
        for (var i = 0; i < bindings.length; i += 2) {
          annotate_destructuring(bindings[i], scope);
          annotate_expressions(bindings[i + 1], scope);
        }    
      }

      function annotate_binding (exp, scope) {
        var bindings = exp.list[1];
        if (!show_locals) return; // HACK

        if (bindings) {
          scope = Object.create(scope);
          _annotate_binding_vector(bindings, scope);
        }
        for (var i = 2; i < exp.list.length; i++) {
          annotate_expressions(exp.list[i], scope);
        }
      }
  
      function _annotate_function_body (exp, scope, start_idx) {
        var argvec = exp.list[start_idx];
        if (argvec.tag !== "vector") return;

        scope = Object.create(scope);

        for (var i = 0, j = argvec.list.length; i < j; i++) {
          annotate_destructuring(argvec.list[i], scope);
        }
    
        for (var i = start_idx, j = exp.list.length; i < j; i++) {
          annotate_expressions(exp.list[i], scope);
        }
      }
  
      function annotate_function (exp, scope) {
        for (var i = 1, j = exp.list.length; i < j; i++) {
          var child = exp.list[i];
      
          if (child.tag === "vector") {
            _annotate_function_body (exp, scope, i);
            return;
          }
          else if (child.tag === "list") {
            _annotate_function_body(child, scope, 0)
          }
        }
      }
  
      function annotate_letfn (exp, scope) {
        scope = Object.create(scope);
        var bindings = exp.list[1];
    
        var fn;
        for (var i = 0, j = bindings.list.length; i < j; i++) {
          fn = bindings.list[i];
          if (!fn.list[0]) continue;
          fn.list[0].tag = "variable";
          scope[fn.list[0].value] = true;
        }
    
        for (i = 0, j = bindings.list.length; i < j; i++) {
          var fn = bindings.list[i];
          annotate_function(fn, scope);
        }
    
        for (i = 2, j = exp.list.length; i < j; i++) {
          annotate_expressions(exp.list[i], scope);
        }
      }

      register_annotation_rule(
        ["comment"],
        annotate_comment
      );
  
      register_annotation_rule(
        ["let", "when-let", "if-let", "binding", "doseq", "for", "dotimes", "let*"],
        annotate_binding
      );
  
      register_annotation_rule(
        ["defn", "defn-", "fn", "bound-fn", "defmacro", "fn*", "defmethod"],
        annotate_function
      );
  
      register_annotation_rule(
        ["letfn"],
        annotate_letfn
      );

      // standard annotations

      function _annotate_metadata_recursive(meta, scope) {
        if (!meta) return;

        if (meta.list !== undefined && meta.list !== null) {
          for (var i = 0, j = meta.list.length; i < j; i++) {
            meta.opening.secondary_tags.meta = true
            meta.closing.secondary_tags.meta = true
            _annotate_metadata_recursive(meta.list[i], scope);
          }
        }
        else if (meta.attached_node) {
          meta.token.secondary_tags.meta = true;
          _annotate_metadata_recursive(meta.attached_node, scope);
        }
        else {
          meta.secondary_tags.meta = true;
        }
      }
  
      function annotate_metadata(exp) {
        if (!(exp && exp.meta)) return;
        var meta = exp.meta;
    
         annotate_expressions(meta, {});    
        _annotate_metadata_recursive(meta, {});
      }


      function annotate_quoted(exp, scope) {
        if (!exp) return;

        if (exp.list !== undefined && exp.list !== null) {
          for (var i = 0, j = exp.list.length; i < j; i++) {
            exp.opening.secondary_tags.quoted = true
            exp.closing.secondary_tags.quoted = true
            annotate_quoted(exp.list[i], scope);
          }
        }
        else if (exp.attached_node) {
          if (exp.tag === "unquote" || exp.tag === "splice") return;
          exp.token.secondary_tags.quoted = true;
          annotate_quoted(exp.attached_node, scope);
        }
        else {
          exp.secondary_tags.quoted = true;
        }
      }


      function annotate_expressions(exp, scope) {
        annotate_metadata(exp);
    
        switch (exp.tag) {
          case "toplevel": 
            for (var i = 0; i < exp.list.length; i++) {
              annotate_expressions(exp.list[i], scope);
            }
            break;
      
          case "list": // functions, macros, special forms, comments
            var head = exp.list[0];
      
            if (head) {
              if (head.tag === "list" || head.tag === "vector" 
               || head.tag === "map" || head.tag === "set") {
                annotate_expressions(head, scope);
              }
              else if (head.attached_node) {
                annotate_expressions(head.attached_node, scope);
              }
              else {
                head.tag = (head.value.match(/(^\.)|(\.$)|[A-Z].*\//)
                            ? "method"
                            : "function");
              }

              // apply specific rules
              if (annotation_rules.hasOwnProperty(head.value)) {
                annotation_rules[head.value](exp, scope);
              } 
              else {
                for (var i = 1; i < exp.list.length; i++) {
                  annotate_expressions(exp.list[i], scope);
                }
              } 
            }
            else { // empty list
              exp.opening.tag = "value";
              exp.closing.tag = "value";
            }
      
            break;
      
          case "vector": // data
          case "map":
          case "set":
            for (var i = 0; i < exp.list.length; i++) {
              annotate_expressions(exp.list[i], scope);
            }
            break;
      
          case "symbol":
            if (exp.value.match(/[A-Z].*\/[A-Z_]+/)) {
              exp.tag = "constant";
            }
            else if (show_locals && scope[exp.value]) {
              exp.tag = "variable";
            }
            else if (exp.tag === "symbol" && exp.value.match(/([A-Z].*\/)?[A-Z_]+/)) {
              exp.tag = "type";
            }
            break;
      
          case "quote":
          case "quasiquote":
            annotate_quoted(exp.attached_node, scope);
        
          default:
            if (exp.attached_node) annotate_expressions(exp.attached_node, scope);
        }
      }

      // translation of tag to css:
      var css_translation = {
        "constant":     "constants",
        "keyword":      "constants",
        "method":       "color1",
        "type":         "color3", 
        "function":     "functions",
        "string":       "string",
        "regexp":       "string",
        "value":        "value",
        "comments":     "comments",
        "symbol":       "symbol",
        "variable":     "variable",
        "splice":       "preprocessor", 
        "unquote":      "preprocessor",     
        "preprocessor": "preprocessor",
        "meta":         "preprocessor", 
        "'":            "preprocessor", 
        "#'":           "preprocessor",    
        "(":            "plain",
        ")":            "plain",
        "{":            "keyword",
        "}":            "keyword",
        "#{":           "keyword",   
        "[":            "keyword",
        "]":            "keyword",
        "invalid":      "invalid",
        "@":            "plain" 
      };
  
      function translate_tags_to_css(tokens) {
        for (var i = 0, j = tokens.length; i < j; i++) {
          var token = tokens[i];
          token.css = css_translation[token.tag];
          for (var k in token.secondary_tags) if (token.secondary_tags.hasOwnProperty(k))
            token.css += " " + k ;
        };
      }
  
  
      // create the new brush

      SH.brushes.Clojure = function () {};
      SH.brushes.Clojure.prototype = new SyntaxHighlighter.Highlighter();
  
      SH.brushes.Clojure.prototype.findMatches = function find_matches (regexpList, code) {
        // this is a nasty global hack. need to resolve this
        if (this.params && this.params.locals) {
          show_locals = this.params.locals === true || this.params.locals === "true"; 
        }
        else {
          show_locals = true;
        }
    
        var tokens = tokenize(code);
        annotate_expressions(build_tree(tokens), {});
        translate_tags_to_css(tokens);

        return tokens;
      };
  
      SH.brushes.Clojure.aliases = ['clojure', 'Clojure', 'clj'];
      SH.brushes.Clojure.register_annotation_rule = register_annotation_rule;

      return {
        tokenize: tokenize,
        build_tree: build_tree
      };
    })(SyntaxHighlighter);

    // hackity-hack

    $(document).ready(function() {
        var ft = $("#floating-toc")
        var ul = ft.find('ul')
        var lis = ft.find('li')

        ul.css('maring', '0px')

        var liHeight = $(lis.get(0)).height()

        ft.css('height', (liHeight) + 'px')


        showNs = function(ns) {
            //this is killing performance, lookup table.
            //var el = $("[id='floating-toc_" + ns + "']")
            //var index = lis.index(el)

            var index = 0

            for(i in nsPositions.nss) {
                if(ns == nsPositions.nss[i]) index = i
            }

            console.log(index)

            if(index == lastNsIndex) return;

            lastNsIndex = index


            ul.animate({marginTop: (-1 * liHeight * index) + 'px'},
                   300)
            //        ul.css('margin-top', (-1 * liHeight * index) + 'px')

        }

        var calcNsPositions = function() {
            var nss = []
            var anchors = []
            var positions = []
            $.each(lis, function(i, el) {
                var ns = $(el).attr('id').split('_')[1]
                nss.push(ns)
                var a = $("a[name='"+ns+"']")
                anchors.push(a)
                positions.push(a.offset().top)
                console.log(a.offset().top)
            });

            return {nss: nss, positions: positions}
        }

        var nsPositions = calcNsPositions()

        console.log(nsPositions)

        var lastNsIndex = -1

        var $window = $(window)

        var currentSection = function(nsp) {

            var ps = nsp.positions
            var nss = nsp.nss
            var scroll = $window.scrollTop() + 300
            var nsIndex = -1
            for(var i in ps) {
                var p = ps[i]
                if(p >= scroll) {
                    nsIndex = i-1
                    break;
                }
                
            }

            if(nsIndex == -1 && scroll >= ps[0]) {
                nsIndex = ps.length-1
            }

            if(nsIndex == -1) nsIndex = 0

            return nss[nsIndex]
        }

        $(window).scroll(function(e) {
            showNs(currentSection(nsPositions))
        })

        ul.css('margin-top', '0px')

    })