(function(f,k,A,r){var p=function(){function c(b){if(b&&g.O(b)){var e={name:null,w:null,f:null};if(0<=b.indexOf(".")){b=b.split(".",2);var c=b[0];b=b[1];if(!d[c])return;e.w=c}if(0<=b.indexOf(":")){b=b.split(":",2);c=b[0];b=b[1];if(!a[c])return;e.f=c}if(e.f||x.prototype[b])return e.name=b,e}}var a={},d={},b={create:function(b,a,c){if(!b)return!1;a=a||b;if(d[a])return!1;d[a]=new x(b,a,c);return!0},exec:function(b){var e=Array.prototype.slice.call(arguments,1);if("exec"===b)return!1;if(p[b])return p[b].apply(null,
e);var n=c(b);if(!n)return!1;var l=a[n.f];if(g.isArray(l))return a[n.f].push(Array.prototype.slice.call(arguments,0)),!0;if(l&&!l[n.name])return!1;for(var f=n.w?[d[n.w]]:g.values(d),y=e.length&&g.o(e[-1])?e[-1].callback:r,z=g.H(),t=!0,k=0;k<f.length;k++){var m=f[k];y&&(e[-1].callback=z.B());t=(l||m)[n.name].apply(m,e)&&t}z.complete(y);return t},get:function(b,a){a=a||g.c;"identity"===b&&u.N(m.b(function(b){a(b)}))},register:function(b,d){if(!a[b]||!g.j(d))return!1;var c=a[b];a[b]=d();setTimeout(function(){for(var b=
0;b<c.length;b++)p.exec.apply(null,c[b])});return!0},require:function(b){if(a[b])return!1;a[b]=[];v.fa("/plugins/"+b+".js");return!0},set:function(a,d){b.h=b.h||function(b,a){p.exec("associate",b,{callback:a})};switch(a){case "captureEmailForms":d?w.C(b.h):w.da(b.h)}}};return b}(),w=function(){function c(){n=function(){k.addEventListener("submit",h,!1);setTimeout(function(){k.removeEventListener("submit",h,!1)});return!0};k.addEventListener("submit",n,!0);k.addEventListener("click",b,!0)}function a(b){var a=
/\S+@\S+.\S/;b=b.getElementsByTagName("input");for(var d,c=0;c<b.length;c++)if(d=b[c],!d.hasAttribute("center-ignore")&&(d.hasAttribute("center-associate-email")||"email"===d.type||0<=d.name.toLowerCase().replace(/[^a-z]+/gi,"").indexOf("email")||0<=d.id.toLowerCase().replace(/[^a-z]+/gi,"").indexOf("email")||0<=d.className.toLowerCase().replace(/[^a-z]+/gi,"").indexOf("email")))return a.test(d.value)?d.value:null;return null}function d(b,d){function c(){if(!b.G){b.G=!0;if(d){var a=k.createElement("input");
a.type="hidden";for(var e=["name","value"],h=0;h<e.length;h++){var l=a,g=e[h],f=void 0,f=f||g,g=d.getAttribute(g);null!==g&&l.setAttribute(f,g)}b.appendChild(a);a=["action","enctype","method","novalidate","target"];for(e=0;e<a.length;e++)h=b,f="form"+a[e],l=(l=a[e])||f,f=d.getAttribute(f),null!==f&&h.setAttribute(l,f)}HTMLFormElement.prototype.centerOldSubmit.call(b)}}try{for(var h=a(b),e=g.H(),l=0;l<m.length;l++)m[l].call(null,h,e.B());e.complete(c)}catch(f){c()}setTimeout(c,2E3)}function b(b){var a=
b.target;if(a&&0<="INPUT BUTTON".indexOf(a.tagName)&&0<="submit image button".indexOf(a.type)){b=b.target;a=b;if(a.form)a=a.form;else for(;a&&"FORM"!==a.tagName;)a=a.parentElement;a&&!a.hasAttribute("center-ignore")&&(a.centerActor=b)}}function h(b){if(!1!==b.returnValue&&!b.defaultPrevented){var c=b.target;if(c&&!c.hasAttribute("center-ignore")&&a(c))return d(c,c.centerActor),b.preventDefault(),!1}}function e(){HTMLFormElement.prototype.centerOldSubmit=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=
function(){if(this.hasAttribute("center-ignore")||!a(this))return HTMLFormElement.prototype.centerOldSubmit.call(this);d(this,null)}}var n,l=!1,m=[];return{C:function(b){!l&&k.addEventListener&&f.HTMLFormElement&&!l&&(c(),e(),l=!0);m.push(b)},da:function(a){a=m.indexOf(a);-1<a&&m.splice(a,1);!m.length&&l&&l&&(k.removeEventListener("submit",n,!0),k.removeEventListener("click",b,!0),HTMLFormElement.prototype.submit=void 0,l=!1)}}}(),v=function(){return{F:function(c,a,d){d=d||g.c;var b={method:"GET"};
b.url="https://api.leadpages.io"+c+"?"+g.R(a);var h=new XMLHttpRequest;"withCredentials"in h?(h.open(b.method,b.url,!0),h.onreadystatechange=function(){4===h.readyState&&(b.code=h.T,400<=h.status?d(h.responseText,b):d(null,b))},h.ontimeout=function(){b.T=0;d("TIMEOUT",b)},h.send()):(c=new Image,g.D(c,"load",function(){d(null,b)}),c.src=b.url)},fa:function(c){var a=k.createElement("script");a.async=!0;a.src="https://js.center.io"+c;k.getElementsByTagName("head")[0].appendChild(a)}}}(),m=function(){var c=
[],a={flush:function(){if(c.length){for(var a=[],b=[],h=[],e=0;e<c.length;e++)a.push(c[e].kind),b.push(c[e].label),h.push(c[e].value);c.length=0;a={version:"1.7.5",correlateBy:g.K("center-correlate-by")||g.L(),origin:"center-js",kind:a,label:b,value:h};v.F("/analytics/v1/observations/capture",a)}},g:function(d,b,h){c.push({kind:d,label:b,value:h});a.A=a.A||g.U(a.flush,4E3,!1);a.A()},u:function(d,b){if(f.performance&&f.performance.getEntriesByName){var c=performance.getEntriesByName(b)[0];c&&c.duration&&
a.g("timer",d,c.duration)}},ca:function(d){if(!(f.performance&&f.performance.mark&&f.performance.measure&&f.performance.getEntriesByName))return g.c;var b="center-"+d+"-s",c="center-"+d+"-e",e="center-"+d;performance.mark(b);return function(){performance.mark(c);performance.measure(e,b,c);a.u(d,e)}},P:function(d){if(d)try{var b={uid:g.i("centerVisitorId")||"",url:q.M(),ua:navigator.userAgent,n:(d.name||"").substr(0,100),m:(d.message||"").substr(0,100),s:(d.stack||"").replace(/\s+/gi," ").substr(0,
500)};a.g("text","error",g.R(b));a.flush()}catch(c){}},b:function(d,b){b=b||f;return function(){try{return d.apply(b,arguments)}catch(c){a.P(c)}}},ga:function(d){for(var b in d)d.hasOwnProperty(b)&&g.j(d[b])&&(d[b]=a.b(d[b],d))}};return a}(),q=function(){return{V:function(){return{x:f.innerWidth||(k.documentElement||{}).clientWidth||(k.body||{}).clientWidth||0,y:f.innerHeight||(k.documentElement||{}).clientHeight||(k.body||{}).clientHeight||0}},W:function(){return k.referrer},X:function(c){function a(a){a=
Math.abs(Math.floor(a));return(10>a?"0":"")+a}c=c||new Date;c=-c.getTimezoneOffset();return(0<=c?"+":"-")+a(c/60)+":"+a(c%60)},M:function(){return f.location.toString().replace(/ /g,"%20")},Y:function(){var c=g.J(q.Z());(c=c.utm_email||c.center_email||c.email||c.wemail||r)&&(c=c.replace(/ /g,"+"));return c},Z:function(){return f.location.search||""}}}(),x=function(){function c(d,b,c){var e=this;e.ba=d;e.name=b;e.options=g.I(c||{},a);e.options.captureEmailForms&&w.C(function(a,b){e.associate(a,{callback:b})});
e.options.captureEmailURLs&&(d=q.Y())&&e.associate(d)}var a={captureEmailForms:!1,captureEmailURLs:!0,customId:""};c.prototype.associate=function(a,b){b=b||{};b.email=a;return this.send("association",null,null,null,b)};c.prototype.send=function(a,b,c,e,f){var l=this,k={};k.callback=g.c;k.customId="";f=g.I(f||{},l.options,k);u.N(m.b(function(g){var k=q.V();g={k:a||"",a:b||"",l:c||"",v:e||"",e:f.email||"",pid:l.ba,uid:g.uid,sid:g.sid,cid:f.customId,uri:q.M().substr(0,1E3),rf:q.W().substr(0,500),rx:k.x,
ry:k.y,tz:q.X()};v.F("/analytics/v1/events/capture",g,function(a,b){m.u("send-events",b.url);a?(m.P({name:"HTTPError",message:b.method+" "+b.url+" "+b.T,stack:a}),m.flush(),f.callback(!1)):f.callback()})}));return!0};return c}(),g=function(){var c={D:function(a,d,b,c){a.addEventListener?a.addEventListener(d,b,c):a.attachEvent&&a.attachEvent("on"+d,b)},H:function(){return new function(){function a(){e>=c&&d&&!b&&(b=!0,d.call(f))}var d=null,b=!1,c=0,e=0;return{B:function(){c++;return function(){e++;
setTimeout(a)}},complete:function(a){d=a}}}},U:function(a,d,b){function c(){var f=this,h=Array.prototype.slice.call(arguments,0),g=b&&!e;clearTimeout(e);e=setTimeout(function(){e=null;b||a.apply(f,h)},d);g&&a.apply(f,h)}var e;c.clear=function(){clearTimeout(e);e=null};return c},I:function(a){var d=Array.prototype.slice.call(arguments,1);if(!d.length)return a;for(var b=0;b<d.length;b++)for(var c=d[b],e=g.keys(c),f=0;f<e.length;f++){var l=e[f];a[l]===r&&(a[l]=c[l])}return a},J:function(a){if(!g.O(a))return null;
if(!a)return{};var d={};a=a.replace(/(^\?)/,"").split("&");for(var b=0;b<a.length;b++){var c=a[b].split("=");if(c[1]&&0<=c[1].indexOf(","))try{d[decodeURIComponent(c[0])]=decodeURIComponent(c[1]).split(",")}catch(e){}else try{d[decodeURIComponent(c[0])]=decodeURIComponent(c[1])}catch(e){}}return d},forEach:function(a,d,b){if(Array.prototype.forEach)return Array.prototype.forEach.call(a,d,b);for(var c=0;c<a.length;c++)d.call(b,a[c],c,a)},G:function(a){return decodeURIComponent(k.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+
encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},K:function(a,d){d=d||f.location.search;var b=(new RegExp("[?&]"+encodeURIComponent(a)+"(=([^&#]*)|&|#|$)")).exec(d);return b?b[2]?decodeURIComponent(b[2].replace(/\+/g," ")):"":null},ha:function(a){try{return localStorage.getItem(a)}catch(d){return null}},i:function(a){try{return sessionStorage.getItem(a)}catch(d){return null}},L:function(){return"xxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return"23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".charAt(Math.floor(57*
Math.random()))})},isArray:function(a){return!(!a||!a.constructor||a.constructor!==Array)},j:function(a){return!(!a||"function"!==typeof a)},o:function(a){return!(!a||"object"!==typeof a)},O:function(a){return"string"===typeof a},keys:function(a){if(!g.o(a))return[];var d=[],b;for(b in a)a.hasOwnProperty(b)&&d.push(b);return d},ia:function(a){return Array.prototype.slice.call(a,0)},c:function(){},ea:function(a,d,b,c){a.removeEventListener?a.removeEventListener(d,b,c):a.detachEvent&&a.detachEvent("on"+
d,b)},R:function(a){var d="",b;for(b in a)a.hasOwnProperty(b)&&(d+="&"+encodeURIComponent(b)+"=",d=c.isArray(a[b])?d+encodeURIComponent(a[b]).replace(/%2C/g,","):d+encodeURIComponent(a[b]));return d.substr(1,d.length)},ja:function(a,d,b,c,e){k.cookie=encodeURIComponent(a)+"="+encodeURIComponent(d)+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"+(b?"; domain="+b:"")+(c?"; path="+c:"")+(e?"; secure":"")},ka:function(a,c){try{return localStorage.setItem(a,c)}catch(b){return null}},S:function(a,c){try{return sessionStorage.setItem(a,
c)}catch(b){return null}},values:function(a){if(!g.o(a))return[];var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(a[b]);return c}};return c}(),u=function(){function c(){for(var c=0;c<b.length;c++)b[c].call(f,{uid:d,sid:a});b.length=0}var a=null,d=null,b=[],h={$:function(a){var b=m.ca("load-identify"),c=k.createElement("iframe"),d=m.b(function(h){0==="https://js.center.io".indexOf(h.origin||(h.originalEvent||{}).origin)&&(h=g.J(h.data))&&h.s&&h.id&&(b(),g.ea(f,"message",d,!1),c.parentNode&&c.parentNode.removeChild(c),
a(h))});g.D(f,"message",d,!1);c.src="https://js.center.io/identify.html";c.style.display="none";c.style.visibility="hidden";c.style.position="absolute";c.style.left="-9999px";c.style.top="-9999px";k.getElementsByTagName("head")[0].appendChild(c)},aa:function(){a=g.i("centerSessionId");a||(a=g.L(),g.S("centerSessionId",a));(d=g.i("centerVisitorId"))?(m.g("counter","ident-cache","1"),c()):h.$(m.b(function(a){m.g("counter",a.s,"1");d=a.id;g.S("centerVisitorId",d);c()}))},N:function(c){d?c.call(f,{uid:d,
sid:a}):b.push(c)}};return h}();m.ga(p);m.b(function(){if(null===g.K("center-no-load")){var c=f[A]||"center";f[c]=f[c]||g.c;var a=f[c].q||[];f[c]=function(a){return g.j(a)?(a(f[c]),!0):p.exec.apply(p,arguments)};f[c].hash="ea5aba07d64a0d5e2bab6a8803c5e09ed57fc6ba";f[c].version="1.7.5";f[c].loaded=!0;u.aa();for(var d=0;d<a.length;d++)f[c].apply(f[name],a[d]);m.u("load-center","https://js.center.io/center.js")}})()})(window,document,"LeadPagesCenterObject");
