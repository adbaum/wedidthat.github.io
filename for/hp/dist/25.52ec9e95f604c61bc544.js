(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[25],{1071:function(e,t,r){"use strict";var n=r(664),a=r(984);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=n(r(961)),u=n(r(872)),f=n(r(875)),s=n(r(874)),l=n(r(957)),c=a(r(353)),d=r(661),p=n(r(999)),b=r(685),m=r(955),v=r(651),h=(0,d.styled)("input")(i||(i=(0,l.default)(["\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  cursor: pointer;\n  width: 0;\n  left: 0;\n"]))),y=function(e){return e.isDirectory},g=function(e){return e.isFile},x=function(e,t){var r=[];!function n(){e.readEntries((function(e){if(!e.length)return t(r);r=r.concat(e),n()}))}()},k=function(){var e=(0,s.default)(f.default.mark((function e(t){var r,n;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n=0,e.abrupt("return",new Promise((function(e){for(var a=function t(a){if(y(a)){var i=a.createReader();n++,x(i,(function(a){n--,a.forEach((function(a){if(t(a),n<=0)return e(r)}))}))}g(a)&&(n++,a.file((function(t){if(n--,r.push(t),n<=0)return e(r)})))},i=0;i<t.length;i++){var o=t[i].webkitGetAsEntry();o&&a(o)}})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=c.forwardRef((function(e,t){var r=e.children,n=e.id,a=void 0===n?"rm-file-upload":n,i=e.readFileData,l=void 0===i||i,c=e.dropFile,d=void 0!==c&&c,m=e.name,y=e.onChange,g=e.onChangeMultiple,x=e.disabled,w=e.textStyle,j=e.multiple,O=(0,u.default)(e,["children","id","readFileData","dropFile","name","onChange","onChangeMultiple","disabled","textStyle","multiple"]),_=function(){var e=(0,s.default)(f.default.mark((function e(t){var r,n;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target.files){e.next=2;break}return e.abrupt("return");case 2:if(!j){e.next=6;break}g&&g(Array.from(t.target.files)),e.next=16;break;case 6:if(r=t.target.files[0],!l){e.next=13;break}return e.next=10,(0,b.readFile)(r);case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=null;case 14:n=e.t0,y&&y(r,n);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,s.default)(f.default.mark((function e(t){var r,n,a,i,o;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null===(r=t.dataTransfer)||void 0===r||null===(n=r.items)||void 0===n||!n[0]||!("webkitGetAsEntry"in t.dataTransfer.items[0])){e.next=7;break}return e.next=4,k(t.dataTransfer.items);case 4:a=e.sent,e.next=8;break;case 7:t.dataTransfer.files&&t.dataTransfer.files.length&&(a=Array.from(t.dataTransfer.files));case 8:if(a){e.next=10;break}return e.abrupt("return");case 10:if(!j){e.next=14;break}g&&g(a),e.next=24;break;case 14:if(i=a[0],!l){e.next=21;break}return e.next=18,(0,b.readFile)(i);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0=null;case 22:o=e.t0,y&&y(i,o);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsx)(p.default,(0,o.default)({ref:t,as:"label",htmlFor:a,disabled:x,cursor:"pointer",onDrop:function(e){return d&&C(e)},onDragOver:function(e){return d&&e.preventDefault()}},w),r,(0,v.jsx)(h,(0,o.default)({type:"file",name:m||a,id:a,style:{opacity:0,visibility:"hidden",position:"absolute",cursor:"pointer",width:0,left:0},onChange:_,multiple:Boolean(j),disabled:x},O)))})),j=m.Box.withComponent(w,{target:"e1jkez70"});t.default=j},1070:function(e,t,r){"use strict";var n=r(984);Object.defineProperty(t,"__esModule",{value:!0});var a={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(r(1071));Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}))},1055:function(e,t,r){"use strict";var n=r(664),a=r(984);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.loadingIndicatorSizes=void 0;var i,o,u=n(r(957)),f=(a(r(353)),r(955)),s=r(684),l=r(661),c=r(651),d=(0,l.keyframes)(i||(i=(0,u.default)(["\n  from {\n    transform: rotateZ(0deg);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n"]))),p={small:22,medium:48,big:56};t.loadingIndicatorSizes=p;var b=function(e){var t=e.size,r=e.bgColor,n=e.color,a="number"==typeof t?"".concat(t,"px"):t&&p[t]?p[t]:p.big,i="big"===t||"medium"===t?"50%":"100%";return(0,c.jsx)(f.Box,{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:r||("big"===t||"medium"===t?"tomato":"transparent"),height:a,width:a,borderRadius:"100%"},(0,c.jsx)(f.Box,{height:i,width:i,border:"2px solid",borderRadius:"100%",css:(0,l.css)(o||(o=(0,u.default)(["\n          animation: "," 2s infinite linear;\n        "])),d),borderColor:n?"".concat(n," ").concat(n," transparent transparent"):"big"===t||"medium"===t||"number"==typeof t?"white white transparent transparent":"".concat(s.colors.tomato," ").concat(s.colors.tomato," transparent transparent")}))};b.defaultProps={size:"big"};var m=b;t.default=m},1054:function(e,t,r){"use strict";var n=r(984);Object.defineProperty(t,"__esModule",{value:!0});var a={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(r(1055));Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}))}}]);