(()=>{var e={501:(e,t,n)=>{var r=n(14),i={access_key:"2cfef2156ca663aef6e79c31e0d05045",languages:"fr,-en",countries:"be,fr",limit:20,sort:"published_desc"};r.get("http://api.mediastack.com/v1/news",{params:i}).then((function(e){for(var t=e.data.data,n=function(e){var n=document.createElement("div");n.className="article",document.body.append(n);var r=document.createElement("div");r.className="divText",n.append(r);var i=document.createElement("p");t[e].author?i.innerHTML=t[e].author:i.innerHTML="Anonymous",i.className="author",r.append(i);var o=document.createElement("p");o.innerHTML=t[e].title,o.className="titleArticle",r.append(o);var s=document.createElement("div");s.innerHTML=t[e].description,s.className="description",r.append(s);var a=new Date(t[e].published_at),u="Le "+a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear()+"à "+a.getHours()+"h"+a.getMinutes(),c=document.createElement("p");c.innerHTML=u,c.className="date",r.append(c);var l=document.createElement("img");l.className="imgArticle",t[e].image?l.src=t[e].image:l.src="build/images/noImage.jpg",n.append(l),n.addEventListener("click",(function(){var e=document.querySelectorAll(".article"),t=window.scrollY;if("none"!==e[1].style.display||"none"!==e[8].style.display){n.style.cursor="initial";for(var r=0;r<20;r++)e[r]!==n?e[r].style.display="none":function(){var r,i,o=(i=(r=s).innerHTML,r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus libero eu mollis egestas. Sed vel justo in augue imperdiet sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam diam massa, malesuada eu finibus sed, sodales vel enim. Donec lacinia odio eget orci dignissim, malesuada consectetur turpis ornare. Vivamus ut est ut felis porta facilisis eget et libero. Aenean non justo sit amet lacus tempus iaculis egestas eget quam. Sed ut convallis augue. Curabitur sollicitudin enim malesuada turpis posuere tincidunt. Ut fermentum nec metus ut rutrum. Suspendisse erat est, ornare in feugiat viverra, maximus non mi.\n\nNullam ex dui, laoreet sed dui id, consequat euismod sapien. Morbi nec eros eu dolor posuere eleifend. Aliquam hendrerit metus vel lectus ultrices scelerisque. Nam nec felis et justo mattis facilisis. Maecenas fringilla urna quam, ut efficitur enim blandit at. Nam varius arcu sapien, consectetur efficitur lectus porta ut. Cras in vestibulum velit. Etiam pharetra diam urna, non dictum augue condimentum nec. Curabitur sodales lorem interdum porta feugiat. Vivamus in ante sapien. Suspendisse potenti. Aenean non eleifend ante. Praesent rutrum mauris risus, eget placerat sem iaculis sit amet. Suspendisse dui sapien, ultrices at lectus quis, posuere auctor enim. Duis vitae nulla felis. Proin maximus lobortis posuere.\n\nProin et diam a nibh varius placerat eu vehicula libero. Nam posuere ex et lorem iaculis, sit amet placerat erat rhoncus. Pellentesque arcu sapien, cursus sed risus eu, gravida congue sapien. Vivamus ultricies nulla neque, a scelerisque metus mollis sed. In sagittis metus sed euismod blandit. Maecenas rhoncus at dui eget lacinia. Mauris eget enim sit amet odio rhoncus ullamcorper. Aliquam mollis mi quis fringilla feugiat. Sed placerat ante sed magna scelerisque, congue finibus dui pharetra.\n\nEtiam eget aliquet mi. Mauris eu rutrum neque. Vestibulum a viverra velit. Nam convallis lectus est, sit amet pharetra dolor commodo eget. Donec scelerisque nulla at tortor luctus, quis tempus quam iaculis. Integer faucibus dolor non laoreet vulputate. Aliquam sed tellus nec metus mollis condimentum et tincidunt metus. Donec tempor arcu eget tortor placerat, nec viverra diam lobortis. Pellentesque at ante tortor. Quisque euismod egestas erat, at sollicitudin ligula convallis vitae. Suspendisse potenti. Suspendisse potenti. Quisque elementum ex nec lacus porttitor varius. Morbi et risus sed ante laoreet auctor. Integer rutrum ut nulla id convallis. Mauris sed quam erat.\n\nVivamus elementum imperdiet quam sed semper. Suspendisse varius in arcu quis finibus. Nunc ac molestie ante. Mauris ipsum neque, malesuada elementum sapien non, facilisis tempor elit. Sed vitae ante ultrices, tempus turpis id, ullamcorper metus. Phasellus a ultricies justo, sed pretium magna. Fusce pretium velit justo, eget venenatis justo cursus non. Nam blandit nisl dui, eu condimentum lorem consequat nec. Nullam laoreet mi et elit tristique, at varius odio tincidunt. Aenean sagittis metus nec mi tincidunt, sit amet feugiat mi pulvinar. Aliquam erat volutpat. Vestibulum sollicitudin risus mollis libero convallis tristique a quis eros. Aliquam fringilla lorem id malesuada dapibus. Pellentesque aliquam quis leo quis laoreet.",i),a=document.createElement("div");a.innerHTML="Retour",a.className="back",document.body.prepend(a),a.addEventListener("click",(function(){n.style.cursor="pointer";for(var r=0;r<20;r++)e[r].style.display="flex",s.innerHTML=o;console.log(t),window.scroll(0,t),a.remove()}))}()}}))},r=0;r<t.length;r++)n(r)})).catch((function(e){console.log(e)}))},14:(e,t,n)=>{e.exports=n(839)},875:(e,t,n)=>{"use strict";var r=n(26),i=n(998),o=n(109),s=n(717),a=n(135),u=n(438),c=n(262),l=n(57),f=n(223),d=n(396);e.exports=function(e){return new Promise((function(t,n){var p,m=e.data,h=e.headers,v=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(m)&&delete h["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(b+":"+w)}var x=a(e.baseURL,e.url);function S(){if(y){var r="getAllResponseHeaders"in y?u(y.getAllResponseHeaders()):null,o={data:v&&"text"!==v&&"json"!==v?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};i((function(e){t(e),g()}),(function(e){n(e),g()}),o),y=null}}if(y.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=S:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(S)},y.onabort=function(){y&&(n(l("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(l("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||c(x))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;E&&(h[e.xsrfHeaderName]=E)}"setRequestHeader"in y&&r.forEach(h,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete h[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),v&&"json"!==v&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){y&&(n(!e||e&&e.type?new d("canceled"):e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),m||(m=null),y.send(m)}))}},839:(e,t,n)=>{"use strict";var r=n(26),i=n(293),o=n(544),s=n(753);var a=function e(t){var n=new o(t),a=i(o.prototype.request,n);return r.extend(a,o.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(223));a.Axios=o,a.Cancel=n(396),a.CancelToken=n(726),a.isCancel=n(780),a.VERSION=n(830).version,a.all=function(e){return Promise.all(e)},a.spread=n(103),a.isAxiosError=n(776),e.exports=a,e.exports.default=a},396:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},726:(e,t,n)=>{"use strict";var r=n(396);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},780:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},544:(e,t,n)=>{"use strict";var r=n(26),i=n(717),o=n(104),s=n(648),a=n(753),u=n(545),c=u.validators;function l(e){this.defaults=e,this.interceptors={request:new o,response:new o}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!r){var l=[s,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),i=Promise.resolve(e);l.length;)i=i.then(l.shift(),l.shift());return i}for(var f=e;n.length;){var d=n.shift(),p=n.shift();try{f=d(f)}catch(e){p(e);break}}try{i=s(f)}catch(e){return Promise.reject(e)}for(;o.length;)i=i.then(o.shift(),o.shift());return i},l.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=l},104:(e,t,n)=>{"use strict";var r=n(26);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},135:(e,t,n)=>{"use strict";var r=n(310),i=n(198);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},57:(e,t,n)=>{"use strict";var r=n(764);e.exports=function(e,t,n,i,o){var s=new Error(e);return r(s,t,n,i,o)}},648:(e,t,n)=>{"use strict";var r=n(26),i=n(866),o=n(780),s=n(223),a=n(396);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(u(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},764:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},753:(e,t,n)=>{"use strict";var r=n(26);e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);r.isUndefined(i)&&t!==u||(n[e]=i)})),n}},998:(e,t,n)=>{"use strict";var r=n(57);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},866:(e,t,n)=>{"use strict";var r=n(26),i=n(223);e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},223:(e,t,n)=>{"use strict";var r=n(26),i=n(56),o=n(764),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(875)),u),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw o(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c},830:e=>{e.exports={version:"0.24.0"}},293:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},717:(e,t,n)=>{"use strict";var r=n(26);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},198:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},109:(e,t,n)=>{"use strict";var r=n(26);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},310:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},776:e=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.exports=function(e){return"object"===t(e)&&!0===e.isAxiosError}},262:(e,t,n)=>{"use strict";var r=n(26);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},56:(e,t,n)=>{"use strict";var r=n(26);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},438:(e,t,n)=>{"use strict";var r=n(26),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},103:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},545:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var i=n(830).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return r(n)===e||"a"+(t<1?"n ":" ")+e}}));var s={};o.transitional=function(e,t,n){function r(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,o){if(!1===e)throw new Error(r(i," has been removed"+(t?" in "+t:"")));return t&&!s[i]&&(s[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}},e.exports={assertOptions:function(e,t,n){if("object"!==r(e))throw new TypeError("options must be an object");for(var i=Object.keys(e),o=i.length;o-- >0;){var s=i[o],a=t[s];if(a){var u=e[s],c=void 0===u||a(u,s,e);if(!0!==c)throw new TypeError("option "+s+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:o}},26:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var i=n(293),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function u(e){return null!==e&&"object"===r(e)}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!==r(e)&&(e=[e]),s(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return u(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,r){e[r]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},380:(e,t,n)=>{"use strict";e.exports=n.p+"build/images/noImage.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="/",(()=>{"use strict";n(501),n(380);({addButton:function(){var e=this,t="light",n=document.createElement("div");n.className="themeButton",n.innerHTML="Changer de theme",document.body.prepend(n),n.addEventListener("click",(function(){"dark"===t?(e.light(),t="light"):(e.dark(),t="dark")}))},dark:function(){document.body.style.backgroundColor="#2f2f2f",document.body.style.color="#bebebe"},light:function(){document.body.style.backgroundColor="#f3f3f3",document.body.style.color="#2f2f2f"}}).addButton(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/build/js/sw.js").then((function(e){e.installing?console.log("Service worker installing"):e.waiting?console.log("Service worker installed"):e.active&&console.log("Service worker active")})).catch((function(e){console.log("Registration failed with "+e)}))})()})();