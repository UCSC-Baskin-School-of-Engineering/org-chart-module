!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).embedOrgChart=e()}}(function(){return function(){return function e(t,r,n){function i(o,a){if(!r[o]){if(!t[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var u=r[o]={exports:{}};t[o][0].call(u.exports,function(e){var r=t[o][1][e];return i(r||e)},u,u.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}}()({1:[function(e,t,r){var n,i;n=this,i=function(){"use strict";var e,t,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},n=!r.document&&!!r.postMessage,i=n&&/(\?|&)papaworker(=|&|$)/.test(r.location.search),s=!1,o={},a=0,l={parse:function(t,n){var i=(n=n||{}).dynamicTyping||!1;b(i)&&(n.dynamicTypingFunction=i,i={});if(n.dynamicTyping=i,n.worker&&l.WORKERS_SUPPORTED){var h=function(){if(!l.WORKERS_SUPPORTED)return!1;if(!s&&null===l.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var t=l.SCRIPT_PATH||e;t+=(-1!==t.indexOf("?")?"&":"?")+"papaworker";var n=new r.Worker(t);return n.onmessage=_,n.id=a++,o[n.id]=n,n}();return h.userStep=n.step,h.userChunk=n.chunk,h.userComplete=n.complete,h.userError=n.error,n.step=b(n.step),n.chunk=b(n.chunk),n.complete=b(n.complete),n.error=b(n.error),delete n.worker,void h.postMessage({input:t,config:n,workerId:h.id})}var u=null;"string"==typeof t?u=n.download?new d(n):new c(n):!0===t.readable&&b(t.read)&&b(t.on)?u=new p(n):(r.File&&t instanceof File||t instanceof Object)&&(u=new f(n));return u.stream(t)},unparse:function(e,t){var r=!1,n=!0,i=",",s="\r\n",o='"';!function(){if("object"!=typeof t)return;"string"==typeof t.delimiter&&1===t.delimiter.length&&-1===l.BAD_DELIMITERS.indexOf(t.delimiter)&&(i=t.delimiter);("boolean"==typeof t.quotes||t.quotes instanceof Array)&&(r=t.quotes);"string"==typeof t.newline&&(s=t.newline);"string"==typeof t.quoteChar&&(o=t.quoteChar);"boolean"==typeof t.header&&(n=t.header)}();var a=new RegExp(o,"g");"string"==typeof e&&(e=JSON.parse(e));if(e instanceof Array){if(!e.length||e[0]instanceof Array)return u(null,e);if("object"==typeof e[0])return u(h(e[0]),e)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),e.data instanceof Array&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=e.data[0]instanceof Array?e.fields:h(e.data[0])),e.data[0]instanceof Array||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[]);throw"exception: Unable to serialize unrecognized input";function h(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function u(e,t){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=e instanceof Array&&e.length>0,a=!(t[0]instanceof Array);if(o&&n){for(var l=0;l<e.length;l++)l>0&&(r+=i),r+=d(e[l],l);t.length>0&&(r+=s)}for(var h=0;h<t.length;h++){for(var u=o?e.length:t[h].length,f=0;f<u;f++){f>0&&(r+=i);var c=o&&a?e[f]:f;r+=d(t[h][c],f)}h<t.length-1&&(r+=s)}return r}function d(e,t){if(void 0===e||null===e)return"";e=e.toString().replace(a,o+o);var n="boolean"==typeof r&&r||r instanceof Array&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>-1)return!0;return!1}(e,l.BAD_DELIMITERS)||e.indexOf(i)>-1||" "===e.charAt(0)||" "===e.charAt(e.length-1);return n?o+e+o:e}}};if(l.RECORD_SEP=String.fromCharCode(30),l.UNIT_SEP=String.fromCharCode(31),l.BYTE_ORDER_MARK="\ufeff",l.BAD_DELIMITERS=["\r","\n",'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!n&&!!r.Worker,l.SCRIPT_PATH=null,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=m,l.ParserHandle=g,l.NetworkStreamer=d,l.FileStreamer=f,l.StringStreamer=c,l.ReadableStreamStreamer=p,r.jQuery){var h=r.jQuery;h.fn.parse=function(e){var t=e.config||{},n=[];return this.each(function(e){if(!("INPUT"===h(this).prop("tagName").toUpperCase()&&"file"===h(this).attr("type").toLowerCase()&&r.FileReader)||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:h.extend({},t)})}),i(),this;function i(){if(0!==n.length){var t,r,i,o,a=n[0];if(b(e.before)){var u=e.before(a.file,a.inputElem);if("object"==typeof u){if("abort"===u.action)return t="AbortError",r=a.file,i=a.inputElem,o=u.reason,void(b(e.error)&&e.error({name:t},r,i,o));if("skip"===u.action)return void s();"object"==typeof u.config&&(a.instanceConfig=h.extend(a.instanceConfig,u.config))}else if("skip"===u)return void s()}var d=a.instanceConfig.complete;a.instanceConfig.complete=function(e){b(d)&&d(e,a.file,a.inputElem),s()},l.parse(a.file,a.instanceConfig)}else b(e.complete)&&e.complete()}function s(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._paused=!1,this._finished=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=k(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new g(t),this._handle.streamer=this,this._config=t}.call(this,e),this.parseChunk=function(e){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var t=this._config.beforeFirstChunk(e);void 0!==t&&(e=t)}this.isFirstChunk=!1;var n=this._partialLine+e;this._partialLine="";var s=this._handle.parse(n,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var o=s.meta.cursor;this._finished||(this._partialLine=n.substring(o-this._baseIndex),this._baseIndex=o),s&&s.data&&(this._rowCount+=s.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)r.postMessage({results:s,workerId:l.WORKER_ID,finished:a});else if(b(this._config.chunk)){if(this._config.chunk(s,this._handle),this._paused)return;s=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),!a||!b(this._config.complete)||s&&s.meta.aborted||this._config.complete(this._completeResults,this._input),a||s&&s.meta.paused||this._nextChunk(),s}},this._sendError=function(e){b(this._config.error)?this._config.error(e):i&&this._config.error&&r.postMessage({workerId:l.WORKER_ID,error:e,finished:!1})}}function d(e){var t;(e=e||{}).chunkSize||(e.chunkSize=l.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)),t.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i),t.setRequestHeader("If-None-Match","webkit-no-cache")}try{t.send()}catch(e){this._chunkError(e.message)}n&&0===t.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4==t.readyState&&(t.status<200||t.status>=400?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(r)}}function f(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=l.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error.message)}}function c(e){var t;e=e||{},u.call(this,e),this.stream=function(e){return e,t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,r=e?t.substr(0,e):t;return t=e?t.substr(e):"",this._finished=!t,this.parseChunk(r)}}}function p(e){e=e||{},u.call(this,e);var t=[],r=!0;this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._nextChunk=function(){t.length?this.parseChunk(t.shift()):r=!0},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e.message)},this),this._streamEnd=w(function(){this._streamCleanUp(),this._finished=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function g(e){var t,r,n,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,s=this,o=0,a=!1,h=!1,u=[],d={data:[],errors:[],meta:{}};if(b(e.step)){var f=e.step;e.step=function(t){if(d=t,p())c();else{if(c(),0===d.data.length)return;o+=t.data.length,e.preview&&o>e.preview?r.abort():f(d,s)}}}function c(){if(d&&n&&(_("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<d.data.length;t++)1===d.data[t].length&&""===d.data[t][0]&&d.data.splice(t--,1);return p()&&function(){if(!d)return;for(var e=0;p()&&e<d.data.length;e++)for(var t=0;t<d.data[e].length;t++)u.push(d.data[e][t]);d.data.splice(0,1)}(),function(){if(!d||!e.header&&!e.dynamicTyping)return d;for(var t=0;t<d.data.length;t++){for(var r=e.header?{}:[],n=0;n<d.data[t].length;n++){var i=n,s=d.data[t][n];e.header&&(i=n>=u.length?"__parsed_extra":u[n]),s=g(i,s),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(s)):r[i]=s}d.data[t]=r,e.header&&(n>u.length?_("FieldMismatch","TooManyFields","Too many fields: expected "+u.length+" fields but parsed "+n,t):n<u.length&&_("FieldMismatch","TooFewFields","Too few fields: expected "+u.length+" fields but parsed "+n,t))}e.header&&d.meta&&(d.meta.fields=u);return d}()}function p(){return e.header&&0===u.length}function g(t,r){return function(t){return e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)}(t)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(n=r,i.test(n)?parseFloat(n):n):r;var n}function _(e,t,r,n){d.errors.push({type:e,code:t,message:r,row:n})}this.parse=function(i,s,o){if(e.newline||(e.newline=function(e){var t=(e=e.substr(0,1048576)).split("\r"),r=e.split("\n"),n=r.length>1&&r[0].length<t[0].length;if(1===t.length||n)return"\n";for(var i=0,s=0;s<t.length;s++)"\n"===t[s][0]&&i++;return i>=t.length/2?"\r\n":"\r"}(i)),n=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(i),d.meta.delimiter=e.delimiter);else{var h=function(t,r,n){for(var i,s,o,a=[",","\t","|",";",l.RECORD_SEP,l.UNIT_SEP],h=0;h<a.length;h++){var u=a[h],d=0,f=0,c=0;o=void 0;for(var p=new m({delimiter:u,newline:r,preview:10}).parse(t),g=0;g<p.data.length;g++)if(n&&1===p.data[g].length&&0===p.data[g][0].length)c++;else{var _=p.data[g].length;f+=_,void 0!==o?_>1&&(d+=Math.abs(_-o),o=_):o=_}p.data.length>0&&(f/=p.data.length-c),(void 0===s||d<s)&&f>1.99&&(s=d,i=u)}return e.delimiter=i,{successful:!!i,bestDelimiter:i}}(i,e.newline,e.skipEmptyLines);h.successful?e.delimiter=h.bestDelimiter:(n=!0,e.delimiter=l.DefaultDelimiter),d.meta.delimiter=e.delimiter}var u=k(e);return e.preview&&e.header&&u.preview++,t=i,r=new m(u),d=r.parse(t,s,o),c(),a?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return a},this.pause=function(){a=!0,r.abort(),t=t.substr(r.getCharIndex())},this.resume=function(){a=!1,s.streamer.parseChunk(t)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),d.meta.aborted=!0,b(e.complete)&&e.complete(d),t=""}}function m(e){var t=(e=e||{}).delimiter,r=e.newline,n=e.comments,i=e.step,s=e.preview,o=e.fastMode;if(void 0===e.quoteChar)var a='"';else a=e.quoteChar;if(("string"!=typeof t||l.BAD_DELIMITERS.indexOf(t)>-1)&&(t=","),n===t)throw"Comment character same as delimiter";!0===n?n="#":("string"!=typeof n||l.BAD_DELIMITERS.indexOf(n)>-1)&&(n=!1),"\n"!=r&&"\r"!=r&&"\r\n"!=r&&(r="\n");var h=0,u=!1;this.parse=function(e,l,d){if("string"!=typeof e)throw"Input must be a string";var f=e.length,c=t.length,p=r.length,g=n.length,m=b(i);h=0;var _=[],v=[],y=[],k=0;if(!e)return T();if(o||!1!==o&&-1===e.indexOf(a)){for(var w=e.split(r),C=0;C<w.length;C++){y=w[C];if(h+=y.length,C!==w.length-1)h+=r.length;else if(d)return T();if(!n||y.substr(0,g)!==n){if(m){if(_=[],x(y.split(t)),L(),u)return T()}else x(y.split(t));if(s&&C>=s)return _=_.slice(0,s),T(!0)}}return T()}for(var E=e.indexOf(t,h),R=e.indexOf(r,h),S=new RegExp(a+a,"g");;)if(e[h]!==a)if(n&&0===y.length&&e.substr(h,g)===n){if(-1===R)return T();h=R+p,R=e.indexOf(r,h),E=e.indexOf(t,h)}else if(-1!==E&&(E<R||-1===R))y.push(e.substring(h,E)),h=E+c,E=e.indexOf(t,h);else{if(-1===R)break;if(y.push(e.substring(h,R)),D(R+p),m&&(L(),u))return T();if(s&&_.length>=s)return T(!0)}else{var O=h;for(h++;;){if(-1===(O=e.indexOf(a,O+1)))return d||v.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:_.length,index:h}),I();if(O===f-1)return I(e.substring(h,O).replace(S,a));if(e[O+1]!==a){if(e[O+1]===t){y.push(e.substring(h,O).replace(S,a)),h=O+1+c,E=e.indexOf(t,h),R=e.indexOf(r,h);break}if(e.substr(O+1,p)===r){if(y.push(e.substring(h,O).replace(S,a)),D(O+1+p),E=e.indexOf(t,h),m&&(L(),u))return T();if(s&&_.length>=s)return T(!0);break}v.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:_.length,index:h}),O++}else O++}}return I();function x(e){_.push(e),k=h}function I(t){return d?T():(void 0===t&&(t=e.substr(h)),y.push(t),h=f,x(y),m&&L(),T())}function D(t){h=t,x(y),y=[],R=e.indexOf(r,h)}function T(e){return{data:_,errors:v,meta:{delimiter:t,linebreak:r,aborted:u,truncated:!!e,cursor:k+(l||0)}}}function L(){i(T()),_=[],v=[]}},this.abort=function(){u=!0},this.getCharIndex=function(){return h}}function _(e){var t=e.data,r=o[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){n=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},i),!n);s++);delete t.results}else b(r.userChunk)&&(r.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!n&&v(t.workerId,t.results)}function v(e,t){var r=o[e];b(r.userComplete)&&r.userComplete(t),r.terminate(),delete o[e]}function y(){throw"Not implemented."}function k(e){if("object"!=typeof e)return e;var t=e instanceof Array?[]:{};for(var r in e)t[r]=k(e[r]);return t}function w(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return i?r.onmessage=function(e){var t=e.data;void 0===l.WORKER_ID&&t&&(l.WORKER_ID=t.workerId);if("string"==typeof t.input)r.postMessage({workerId:l.WORKER_ID,results:l.parse(t.input,t.config),finished:!0});else if(r.File&&t.input instanceof File||t.input instanceof Object){var n=l.parse(t.input,t.config);n&&r.postMessage({workerId:l.WORKER_ID,results:n,finished:!0})}}:l.WORKERS_SUPPORTED&&(t=document.getElementsByTagName("script"),e=t.length?t[t.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){s=!0},!0):s=!0),d.prototype=Object.create(u.prototype),d.prototype.constructor=d,f.prototype=Object.create(u.prototype),f.prototype.constructor=f,c.prototype=Object.create(c.prototype),c.prototype.constructor=c,p.prototype=Object.create(u.prototype),p.prototype.constructor=p,l},"object"==typeof t&&void 0!==r?t.exports=i():n.Papa=i()},{}],2:[function(e,t,r){if(!window.google||!window.google.charts)throw new Error("Orgchart: Must include google charts script loader: https://www.gstatic.com/charts/loader.js");google.charts.load("current",{packages:["orgchart"]});t.exports=((e,t)=>{let r=null;const n=(e=>"string"==typeof e?document.getElementById(e):("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?e:null)(t);if(!n)return void console.error("OrgChart: invalid element or id provided");for(;n.firstChild;)n.removeChild(n.firstChild);n.style.position="relative",n.style.height="700px";const i=document.createElement("div");i.classList.add("orgchart"),n.appendChild(i);const s=document.createElement("div");if(s.classList.add("orgchart-legend","disabled"),n.appendChild(s),!e||0===e.length)return i.classList.add("invalid-data-provided"),void console.error("Orgchart Error: undefined or empty user data provided");const o={};for(const t of e)o[t.EmployeeID]=!0;for(const t of e){const e=t.ManagerID;!e||e in o||(console.error(`Orgchart Error: employee '${t.EmployeeID}' has undefined manager '${e}'`),delete t.ManagerID)}const a=(e,t)=>{!1!==e&&(r=e);const n=t||r;n?(s.innerHTML=(({EmployeeID:e,Name:t,Role:r,Email:n,ImageURL:i,Link:s,OtherInfo:o})=>`${i?`<div class="orgchart-legend-img"><img src="${i}" alt="${t}"></div>`:""}<div><p><strong>${t||e}</strong></p>${r?`<p class="orgchart-legend-role"><em>${r}</em></p>`:""}${o?`<p class="orgchart-legend-otherinfo">${o}</p>`:""}${n?`<p class="orgchart-legend-email"><a href="mailto:${n}">${n}</a></p>`:""}${s?`<a class="orgchart-legend-link" href="${s}" title="${t} Account Page"></a>`:""}</div>`)(n),s.classList.remove("disabled")):s.classList.add("disabled")};new Promise(e=>google.charts.setOnLoadCallback(()=>e())).then(()=>{const t=new google.visualization.arrayToDataTable([[{label:"EmployeeID",type:"string"},{label:"ManagerID",type:"string"},{label:"ToolTip",type:"string"}],...e.map(e=>[{v:e.EmployeeID,f:(({EmployeeID:e,Name:t,Role:r=""})=>`<p><strong>${t||e}</strong></p><p><em>${r}</em></p>`)(e)},e.ManagerID,"Double click to collapse"])]),r=new google.visualization.OrgChart(i);google.visualization.events.addListener(r,"select",()=>{const t=r.getSelection()[0];a(t?e[t.row]:null,!1)}),google.visualization.events.addListener(r,"onmouseover",({row:t})=>{a(!1,e[t])}),google.visualization.events.addListener(r,"onmouseout",()=>{a(!1,null)});const n=()=>{const e=i.children[0];e.style.transformOrigin="top left";const t=Math.min(i.clientWidth/e.clientWidth,i.clientHeight/e.clientHeight);t<1&&(e.style.transform=`scale(${t})`);const r=i.offsetWidth/2-e.offsetWidth*(t<1?t:1)/2;r>=0&&(e.style.marginLeft=`${r}px`)};window.addEventListener("resize",n),google.visualization.events.addListener(r,"collapse",n),google.visualization.events.addListener(r,"ready",n),r.draw(t,{allowHtml:!0,selectedNodeClass:"orgchart-node-selected",nodeClass:"orgchart-node",allowCollapse:!0,size:"large"})}).catch(console.error)})},{}],3:[function(e,t,r){const n=e("papaparse"),i=e("./orgchart");t.exports=((e,t)=>{(e=>new Promise((t,r)=>{n.parse(e,{download:!0,skipEmptyLines:!0,header:!0,complete:e=>{0===e.data.length||0===e.data[0].length||e.errors.length>0?r("OrgChart: failed to parse data:",e.error[0]):t(e.data)},error:()=>r("OrgChart: failed to load data")})}))(e).then(e=>{i(e,t)}).catch(console.error)})},{"./orgchart":2,papaparse:1}]},{},[3])(3)});