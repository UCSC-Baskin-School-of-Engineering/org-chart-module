"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}!function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).embedOrgChart=e()}}(function(){return function(){return function e(t,r,n){function i(o,a){if(!r[o]){if(!t[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var h=r[o]={exports:{}};t[o][0].call(h.exports,function(e){var r=t[o][1][e];return i(r||e)},h,h.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}}()({1:[function(e,t,r){var n;n=this,function(e){var t,r,n=window,i=document,s="mousemove",o="mouseup",a="mousedown",u="EventListener",l="add"+u,h="remove"+u,f=[],d=function(e,u){for(e=0;e<f.length;)(u=(u=f[e++]).container||u)[h](a,u.md,0),n[h](o,u.mu,0),n[h](s,u.mm,0);for(f=[].slice.call(i.getElementsByClassName("dragscroll")),e=0;e<f.length;)!function(e,u,h,f,d,c){(c=e.container||e)[l](a,c.md=function(t){e.hasAttribute("nochilddrag")&&i.elementFromPoint(t.pageX,t.pageY)!=c||(f=1,u=t.clientX,h=t.clientY,t.preventDefault())},0),n[l](o,c.mu=function(){f=0},0),n[l](s,c.mm=function(n){f&&((d=e.scroller||e).scrollLeft-=t=-u+(u=n.clientX),d.scrollTop-=r=-h+(h=n.clientY),e==i.body&&((d=i.documentElement).scrollLeft-=t,d.scrollTop-=r))},0)}(f[e++])};"complete"==i.readyState?d():n[l]("load",d,0),e.reset=d}(void 0!==r?r:n.dragscroll={})},{}],2:[function(e,t,r){var n,i;n=this,i=function(){var e,t,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},n=!r.document&&!!r.postMessage,i=n&&/(\?|&)papaworker(=|&|$)/.test(r.location.search),s=!1,o={},a=0,u={parse:function(t,n){var i=(n=n||{}).dynamicTyping||!1;w(i)&&(n.dynamicTypingFunction=i,i={});if(n.dynamicTyping=i,n.worker&&u.WORKERS_SUPPORTED){var l=function(){if(!u.WORKERS_SUPPORTED)return!1;if(!s&&null===u.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var t=u.SCRIPT_PATH||e;t+=(-1!==t.indexOf("?")?"&":"?")+"papaworker";var n=new r.Worker(t);return n.onmessage=_,n.id=a++,o[n.id]=n,n}();return l.userStep=n.step,l.userChunk=n.chunk,l.userComplete=n.complete,l.userError=n.error,n.step=w(n.step),n.chunk=w(n.chunk),n.complete=w(n.complete),n.error=w(n.error),delete n.worker,void l.postMessage({input:t,config:n,workerId:l.id})}var h=null;"string"==typeof t?h=n.download?new f(n):new c(n):!0===t.readable&&w(t.read)&&w(t.on)?h=new p(n):(r.File&&t instanceof File||t instanceof Object)&&(h=new d(n));return h.stream(t)},unparse:function(e,t){var r=!1,n=!0,i=",",s="\r\n",o='"';!function(){if("object"!==(void 0===t?"undefined":_typeof(t)))return;"string"==typeof t.delimiter&&1===t.delimiter.length&&-1===u.BAD_DELIMITERS.indexOf(t.delimiter)&&(i=t.delimiter);("boolean"==typeof t.quotes||t.quotes instanceof Array)&&(r=t.quotes);"string"==typeof t.newline&&(s=t.newline);"string"==typeof t.quoteChar&&(o=t.quoteChar);"boolean"==typeof t.header&&(n=t.header)}();var a=new RegExp(o,"g");"string"==typeof e&&(e=JSON.parse(e));if(e instanceof Array){if(!e.length||e[0]instanceof Array)return h(null,e);if("object"===_typeof(e[0]))return h(l(e[0]),e)}else if("object"===(void 0===e?"undefined":_typeof(e)))return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),e.data instanceof Array&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=e.data[0]instanceof Array?e.fields:l(e.data[0])),e.data[0]instanceof Array||"object"===_typeof(e.data[0])||(e.data=[e.data])),h(e.fields||[],e.data||[]);throw"exception: Unable to serialize unrecognized input";function l(e){if("object"!==(void 0===e?"undefined":_typeof(e)))return[];var t=[];for(var r in e)t.push(r);return t}function h(e,t){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=e instanceof Array&&e.length>0,a=!(t[0]instanceof Array);if(o&&n){for(var u=0;u<e.length;u++)u>0&&(r+=i),r+=f(e[u],u);t.length>0&&(r+=s)}for(var l=0;l<t.length;l++){for(var h=o?e.length:t[l].length,d=0;d<h;d++){d>0&&(r+=i);var c=o&&a?e[d]:d;r+=f(t[l][c],d)}l<t.length-1&&(r+=s)}return r}function f(e,t){if(null==e)return"";e=e.toString().replace(a,o+o);var n="boolean"==typeof r&&r||r instanceof Array&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>-1)return!0;return!1}(e,u.BAD_DELIMITERS)||e.indexOf(i)>-1||" "===e.charAt(0)||" "===e.charAt(e.length-1);return n?o+e+o:e}}};if(u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\ufeff",u.BAD_DELIMITERS=["\r","\n",'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!n&&!!r.Worker,u.SCRIPT_PATH=null,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=m,u.ParserHandle=g,u.NetworkStreamer=f,u.FileStreamer=d,u.StringStreamer=c,u.ReadableStreamStreamer=p,r.jQuery){var l=r.jQuery;l.fn.parse=function(e){var t=e.config||{},n=[];return this.each(function(e){if(!("INPUT"===l(this).prop("tagName").toUpperCase()&&"file"===l(this).attr("type").toLowerCase()&&r.FileReader)||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:l.extend({},t)})}),i(),this;function i(){if(0!==n.length){var t,r,i,o,a=n[0];if(w(e.before)){var h=e.before(a.file,a.inputElem);if("object"===(void 0===h?"undefined":_typeof(h))){if("abort"===h.action)return t="AbortError",r=a.file,i=a.inputElem,o=h.reason,void(w(e.error)&&e.error({name:t},r,i,o));if("skip"===h.action)return void s();"object"===_typeof(h.config)&&(a.instanceConfig=l.extend(a.instanceConfig,h.config))}else if("skip"===h)return void s()}var f=a.instanceConfig.complete;a.instanceConfig.complete=function(e){w(f)&&f(e,a.file,a.inputElem),s()},u.parse(a.file,a.instanceConfig)}else w(e.complete)&&e.complete()}function s(){n.splice(0,1),i()}}}function h(e){this._handle=null,this._paused=!1,this._finished=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new g(t),this._handle.streamer=this,this._config=t}.call(this,e),this.parseChunk=function(e){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var t=this._config.beforeFirstChunk(e);void 0!==t&&(e=t)}this.isFirstChunk=!1;var n=this._partialLine+e;this._partialLine="";var s=this._handle.parse(n,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var o=s.meta.cursor;this._finished||(this._partialLine=n.substring(o-this._baseIndex),this._baseIndex=o),s&&s.data&&(this._rowCount+=s.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)r.postMessage({results:s,workerId:u.WORKER_ID,finished:a});else if(w(this._config.chunk)){if(this._config.chunk(s,this._handle),this._paused)return;s=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),!a||!w(this._config.complete)||s&&s.meta.aborted||this._config.complete(this._completeResults,this._input),a||s&&s.meta.paused||this._nextChunk(),s}},this._sendError=function(e){w(this._config.error)?this._config.error(e):i&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:e,finished:!1})}}function f(e){var t;(e=e||{}).chunkSize||(e.chunkSize=u.RemoteChunkSize),h.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i),t.setRequestHeader("If-None-Match","webkit-no-cache")}try{t.send()}catch(e){this._chunkError(e.message)}n&&0===t.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4==t.readyState&&(t.status<200||t.status>=400?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(r)}}function d(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=u.LocalChunkSize),h.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error.message)}}function c(e){var t;e=e||{},h.call(this,e),this.stream=function(e){return e,t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,r=e?t.substr(0,e):t;return t=e?t.substr(e):"",this._finished=!t,this.parseChunk(r)}}}function p(e){e=e||{},h.call(this,e);var t=[],r=!0;this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._nextChunk=function(){t.length?this.parseChunk(t.shift()):r=!0},this._streamData=k(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=k(function(e){this._streamCleanUp(),this._sendError(e.message)},this),this._streamEnd=k(function(){this._streamCleanUp(),this._finished=!0,this._streamData("")},this),this._streamCleanUp=k(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function g(e){var t,r,n,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,s=this,o=0,a=!1,l=!1,h=[],f={data:[],errors:[],meta:{}};if(w(e.step)){var d=e.step;e.step=function(t){if(f=t,p())c();else{if(c(),0===f.data.length)return;o+=t.data.length,e.preview&&o>e.preview?r.abort():d(f,s)}}}function c(){if(f&&n&&(_("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<f.data.length;t++)1===f.data[t].length&&""===f.data[t][0]&&f.data.splice(t--,1);return p()&&function(){if(!f)return;for(var e=0;p()&&e<f.data.length;e++)for(var t=0;t<f.data[e].length;t++)h.push(f.data[e][t]);f.data.splice(0,1)}(),function(){if(!f||!e.header&&!e.dynamicTyping)return f;for(var t=0;t<f.data.length;t++){for(var r=e.header?{}:[],n=0;n<f.data[t].length;n++){var i=n,s=f.data[t][n];e.header&&(i=n>=h.length?"__parsed_extra":h[n]),s=g(i,s),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(s)):r[i]=s}f.data[t]=r,e.header&&(n>h.length?_("FieldMismatch","TooManyFields","Too many fields: expected "+h.length+" fields but parsed "+n,t):n<h.length&&_("FieldMismatch","TooFewFields","Too few fields: expected "+h.length+" fields but parsed "+n,t))}e.header&&f.meta&&(f.meta.fields=h);return f}()}function p(){return e.header&&0===h.length}function g(t,r){return s=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[s]&&(e.dynamicTyping[s]=e.dynamicTypingFunction(s)),!0===(e.dynamicTyping[s]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(n=r,i.test(n)?parseFloat(n):n):r;var n,s}function _(e,t,r,n){f.errors.push({type:e,code:t,message:r,row:n})}this.parse=function(i,s,o){if(e.newline||(e.newline=function(e){var t=(e=e.substr(0,1048576)).split("\r"),r=e.split("\n"),n=r.length>1&&r[0].length<t[0].length;if(1===t.length||n)return"\n";for(var i=0,s=0;s<t.length;s++)"\n"===t[s][0]&&i++;return i>=t.length/2?"\r\n":"\r"}(i)),n=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(i),f.meta.delimiter=e.delimiter);else{var l=function(t,r,n){for(var i,s,o,a=[",","\t","|",";",u.RECORD_SEP,u.UNIT_SEP],l=0;l<a.length;l++){var h=a[l],f=0,d=0,c=0;o=void 0;for(var p=new m({delimiter:h,newline:r,preview:10}).parse(t),g=0;g<p.data.length;g++)if(n&&1===p.data[g].length&&0===p.data[g][0].length)c++;else{var _=p.data[g].length;d+=_,void 0!==o?_>1&&(f+=Math.abs(_-o),o=_):o=_}p.data.length>0&&(d/=p.data.length-c),(void 0===s||f<s)&&d>1.99&&(s=f,i=h)}return e.delimiter=i,{successful:!!i,bestDelimiter:i}}(i,e.newline,e.skipEmptyLines);l.successful?e.delimiter=l.bestDelimiter:(n=!0,e.delimiter=u.DefaultDelimiter),f.meta.delimiter=e.delimiter}var h=b(e);return e.preview&&e.header&&h.preview++,t=i,r=new m(h),f=r.parse(t,s,o),c(),a?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return a},this.pause=function(){a=!0,r.abort(),t=t.substr(r.getCharIndex())},this.resume=function(){a=!1,s.streamer.parseChunk(t)},this.aborted=function(){return l},this.abort=function(){l=!0,r.abort(),f.meta.aborted=!0,w(e.complete)&&e.complete(f),t=""}}function m(e){var t=(e=e||{}).delimiter,r=e.newline,n=e.comments,i=e.step,s=e.preview,o=e.fastMode;if(void 0===e.quoteChar)var a='"';else a=e.quoteChar;if(("string"!=typeof t||u.BAD_DELIMITERS.indexOf(t)>-1)&&(t=","),n===t)throw"Comment character same as delimiter";!0===n?n="#":("string"!=typeof n||u.BAD_DELIMITERS.indexOf(n)>-1)&&(n=!1),"\n"!=r&&"\r"!=r&&"\r\n"!=r&&(r="\n");var l=0,h=!1;this.parse=function(e,u,f){if("string"!=typeof e)throw"Input must be a string";var d=e.length,c=t.length,p=r.length,g=n.length,m=w(i);l=0;var _=[],v=[],y=[],b=0;if(!e)return D();if(o||!1!==o&&-1===e.indexOf(a)){for(var k=e.split(r),C=0;C<k.length;C++){y=k[C];if(l+=y.length,C!==k.length-1)l+=r.length;else if(f)return D();if(!n||y.substr(0,g)!==n){if(m){if(_=[],x(y.split(t)),L(),h)return D()}else x(y.split(t));if(s&&C>=s)return _=_.slice(0,s),D(!0)}}return D()}for(var E=e.indexOf(t,l),R=e.indexOf(r,l),S=new RegExp(a+a,"g");;)if(e[l]!==a)if(n&&0===y.length&&e.substr(l,g)===n){if(-1===R)return D();l=R+p,R=e.indexOf(r,l),E=e.indexOf(t,l)}else if(-1!==E&&(E<R||-1===R))y.push(e.substring(l,E)),l=E+c,E=e.indexOf(t,l);else{if(-1===R)break;if(y.push(e.substring(l,R)),T(R+p),m&&(L(),h))return D();if(s&&_.length>=s)return D(!0)}else{var O=l;for(l++;;){if(-1===(O=e.indexOf(a,O+1)))return f||v.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:_.length,index:l}),I();if(O===d-1)return I(e.substring(l,O).replace(S,a));if(e[O+1]!==a){if(e[O+1]===t){y.push(e.substring(l,O).replace(S,a)),l=O+1+c,E=e.indexOf(t,l),R=e.indexOf(r,l);break}if(e.substr(O+1,p)===r){if(y.push(e.substring(l,O).replace(S,a)),T(O+1+p),E=e.indexOf(t,l),m&&(L(),h))return D();if(s&&_.length>=s)return D(!0);break}v.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:_.length,index:l}),O++}else O++}}return I();function x(e){_.push(e),b=l}function I(t){return f?D():(void 0===t&&(t=e.substr(l)),y.push(t),l=d,x(y),m&&L(),D())}function T(t){l=t,x(y),y=[],R=e.indexOf(r,l)}function D(e){return{data:_,errors:v,meta:{delimiter:t,linebreak:r,aborted:h,truncated:!!e,cursor:b+(u||0)}}}function L(){i(D()),_=[],v=[]}},this.abort=function(){h=!0},this.getCharIndex=function(){return l}}function _(e){var t=e.data,r=o[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){n=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(w(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},i),!n);s++);delete t.results}else w(r.userChunk)&&(r.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!n&&v(t.workerId,t.results)}function v(e,t){var r=o[e];w(r.userComplete)&&r.userComplete(t),r.terminate(),delete o[e]}function y(){throw"Not implemented."}function b(e){if("object"!==(void 0===e?"undefined":_typeof(e)))return e;var t=e instanceof Array?[]:{};for(var r in e)t[r]=b(e[r]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return i?r.onmessage=function(e){var t=e.data;void 0===u.WORKER_ID&&t&&(u.WORKER_ID=t.workerId);if("string"==typeof t.input)r.postMessage({workerId:u.WORKER_ID,results:u.parse(t.input,t.config),finished:!0});else if(r.File&&t.input instanceof File||t.input instanceof Object){var n=u.parse(t.input,t.config);n&&r.postMessage({workerId:u.WORKER_ID,results:n,finished:!0})}}:u.WORKERS_SUPPORTED&&(t=document.getElementsByTagName("script"),e=t.length?t[t.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){s=!0},!0):s=!0),f.prototype=Object.create(h.prototype),f.prototype.constructor=f,d.prototype=Object.create(h.prototype),d.prototype.constructor=d,c.prototype=Object.create(c.prototype),c.prototype.constructor=c,p.prototype=Object.create(h.prototype),p.prototype.constructor=p,u},"object"===(void 0===t?"undefined":_typeof(t))&&void 0!==r?t.exports=i():n.Papa=i()},{}],3:[function(e,t,r){var n=e("dragscroll");if(!google||!google.charts)throw new Error("Must include google script loader: https://www.gstatic.com/charts/loader.js");google.charts.load("current",{packages:["orgchart"]});t.exports=function(e,t){var r=null,i=document.getElementById(t);i?new Promise(function(e){return google.charts.setOnLoadCallback(function(){return e()})}).then(function(){var t=new google.visualization.arrayToDataTable([[{label:"EmployeeID",type:"string"},{label:"ManagerID",type:"string"},{label:"ToolTip",type:"string"}]].concat(_toConsumableArray(e.map(function(e){var t=e.EmployeeID,r=e.ManagerID;return[{v:t,f:function(e){var t=e.FirstName,r=e.LastName,n=e.Role;e.Phone,e.Email,e.ImageURL;return"<p><strong>"+t+" "+r+"</strong></p><p><em>"+n+"</em></p>"}(_objectWithoutProperties(e,["EmployeeID","ManagerID"]))},r,"Double click to collapse"]}))));for(console.log(t);i.firstChild;)myNode.removeChild(i.firstChild);i.style.position="relative";var s=document.createElement("div");s.classList.add("dragscroll","orgchart"),i.appendChild(s);var o=document.createElement("div");o.classList.add("orgchart-legend","disabled"),i.appendChild(o);var a=function(e,t){!1!==e&&(r=e),console.log(e,t);var n,i,s,a,u,l=t||r;l?(o.innerHTML=(i=(n=l).FirstName,s=n.LastName,a=n.Role,n.Phone,n.Email,u=i+" "+s,'<img src="'+n.ImageURL+'" alt="'+u+'">\n<div>\n<p><strong>'+u+"</strong></p><p><em>"+a+"</em></p>\n</div>"),o.classList.remove("disabled")):o.classList.add("disabled")},u=new google.visualization.OrgChart(s);google.visualization.events.addListener(u,"select",function(){var t=u.getSelection()[0];a(t?e[t.row]:null,!1)}),google.visualization.events.addListener(u,"onmouseover",function(t){var r=t.row;a(!1,e[r])}),google.visualization.events.addListener(u,"onmouseout",function(){a(!1,null)}),u.draw(t,{allowHtml:!0,selectedNodeClass:"orgchart-node-selected",nodeClass:"orgchart-node",allowCollapse:!0,size:"large"}),n.reset()}).catch(console.error):console.error("OrgChart: no element with id '"+t+"'")}},{dragscroll:1}],4:[function(e,t,r){var n=e("papaparse"),i=e("./orgchart");t.exports=function(e,t){var r;(r=e,new Promise(function(e,t){n.parse(r,{download:!0,skipEmptyLines:!0,header:!0,complete:function(r){0===r.data.length||0===r.data[0].length||r.errors.length>0?t("OrgChart: failed to parse data:",r.error[0]):e(r.data)},error:function(){return t("OrgChart: failed to load data")}})})).then(function(e){return i(e,t)}).catch(console.error)}},{"./orgchart":3,papaparse:2}]},{},[4])(4)});