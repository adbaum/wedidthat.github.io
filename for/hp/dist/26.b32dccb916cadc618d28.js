(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[26],{1064:function(e,t,n){"use strict";var i=n(664);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=i(n(957)),o=n(661),a=n(955),s=(0,o.styled)(a.Box)(r||(r=(0,l.default)(["\n  width: 1px;\n  height: 1px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  clip: rect(0 0 0 0);\n  opacity: 0;\n  overflow: hidden;\n"])));t.default=s},1063:function(e,t,n){"use strict";var i=n(664);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=i(n(1064))},1536:function(e,t,n){"use strict";n.r(t);var i=n(353),r=n(638),l=n(689),o=n(1374),a=n(651);t.default=function(){var e=(0,i.useContext)(l.BackboneContext).model;return(0,a.jsx)(o.Z,{mode:r.us.viewer,originRect:e.originRect,isVisible:e.isVisible,slides:e.slides,index:e.index,onClose:e.onClose,onSlideChange:e.onSlideChange})}},1374:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var i=n(353),r=n(955),l=n(998),o=n(638),a=n(624),s=n(1013),u=n.n(s),c=n(651);function d(){return(0,c.jsx)("svg",{width:"21",height:"36",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},(0,c.jsx)("g",{fill:"none",fillRule:"evenodd",opacity:".96"},(0,c.jsx)("path",{d:"M17.35 34.32a1 1 0 0 0 1.413-1.414L3.914 18.056l14.85-14.849a1 1 0 0 0-1.415-1.414L1.793 17.349a1 1 0 0 0 0 1.414L17.349 34.32Z",fillOpacity:".96",fill:"#FFF",fillRule:"nonzero"}),(0,c.jsx)("path",{d:"M16.996 34.673a1.5 1.5 0 1 0 2.121-2.12L4.621 18.055 19.117 3.561a1.5 1.5 0 1 0-2.121-2.122L1.439 16.996l.354.353-.354-.353a1.5 1.5 0 0 0 0 2.121l15.557 15.556Z",strokeOpacity:".32",stroke:"#282828"})))}function f(){return(0,c.jsx)("svg",{width:"21",height:"36",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},(0,c.jsx)("g",{fill:"none",fillRule:"evenodd",opacity:".96"},(0,c.jsx)("path",{d:"M3.207 34.32a1 1 0 0 1-1.414-1.414l14.85-14.85L1.792 3.207a1 1 0 0 1 1.414-1.414l15.556 15.556a1 1 0 0 1 0 1.414L3.207 34.32Z",fillOpacity:".96",fill:"#FFF",fillRule:"nonzero"}),(0,c.jsx)("path",{d:"M3.56 34.673a1.5 1.5 0 1 1-2.12-2.12l14.495-14.497L1.439 3.561a1.5 1.5 0 1 1 2.122-2.122l15.556 15.557-.354.353.354-.353a1.5 1.5 0 0 1 0 2.121L3.561 34.673Z",strokeOpacity:".32",stroke:"#282828"})))}function p(){return(0,c.jsx)("svg",{width:"20",height:"36",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},(0,c.jsx)("g",{opacity:".96"},(0,c.jsx)("path",{d:"M17.264 34.264a1 1 0 0 0 1.414-1.415L3.828 18l14.85-14.85a1 1 0 0 0-1.415-1.413L1.708 17.293a1 1 0 0 0 0 1.414l15.556 15.557Z",fill:"#000",fillOpacity:".96"}),(0,c.jsx)("path",{d:"M16.91 34.617a1.5 1.5 0 1 0 2.121-2.121L4.536 18 19.03 3.505a1.5 1.5 0 1 0-2.121-2.122L1.354 16.94l.353.354-.353-.354a1.5 1.5 0 0 0 0 2.122L16.91 34.617Z",stroke:"#fff",strokeOpacity:".88"})))}function h(){return(0,c.jsx)("svg",{width:"20",height:"36",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},(0,c.jsx)("g",{fill:"none",fillRule:"evenodd",opacity:".96"},(0,c.jsx)("path",{d:"M3.121 34.264a1 1 0 0 1-1.414-1.415L16.557 18 1.706 3.15a1 1 0 0 1 1.414-1.413l15.557 15.556a1 1 0 0 1 0 1.414L3.12 34.264Z",fillOpacity:".96",fill:"#000",fillRule:"nonzero"}),(0,c.jsx)("path",{d:"M3.475 34.617a1.5 1.5 0 1 1-2.121-2.121L15.849 18 1.354 3.505a1.5 1.5 0 1 1 2.12-2.122L19.032 16.94l-.353.354.353-.354a1.5 1.5 0 0 1 0 2.122L3.475 34.617Z",strokeOpacity:".88",stroke:"#FFF"})))}var g,m=n(1063);!function(e){e.left="left",e.right="right"}(g||(g={}));var v=(0,l.animated)(u()),x=function(e){var t=e.isVisible,n=e.isDarkBackground,i=e.type,r=e.onClick,o=(0,l.useSpring)({opacity:t?1:0,left:i===g.left?t?24:-40:"auto",right:i===g.right?t?24:-40:"auto"}),a="lightbox-arrow-".concat(i);return(0,c.jsx)(v,{"data-testid":a,position:"absolute",top:"50%",marginTop:"-4rm",zIndex:3100,onClick:r,style:o,variant:"clean"},(0,c.jsx)(m.default,{id:a},i===g.left?"Previous":"Next"),i===g.left?n?(0,c.jsx)(d,null):(0,c.jsx)(p,null):n?(0,c.jsx)(f,null):(0,c.jsx)(h,null))},y=function(e){var t=e.isVisible,n=e.isDarkBackground,r=e.onPrev,l=e.onNext;return(0,c.jsx)(i.Fragment,null,(0,c.jsx)(x,{isVisible:t,isDarkBackground:n,type:g.left,onClick:r}),(0,c.jsx)(x,{isVisible:t,isDarkBackground:n,type:g.right,onClick:l}))};function w(){return(0,c.jsx)("svg",{width:"56",height:"56",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},(0,c.jsx)("mask",{id:"a",maskUnits:"userSpaceOnUse",x:"9.615",y:"9.615",width:"36.77",height:"36.77",fill:"#000"},(0,c.jsx)("path",{fill:"#fff",d:"M9.615 9.615h36.77v36.77H9.615z"}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.485 19.515a1 1 0 0 0-1.414 0L28 26.585l-7.071-7.07a1 1 0 0 0-1.414 1.414L26.585 28l-7.07 7.071a1 1 0 0 0 1.414 1.414L28 29.415l7.071 7.07a1 1 0 0 0 1.414-1.414l-7.07-7.07 7.07-7.072a1 1 0 0 0 0-1.414Z"})),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.485 19.515a1 1 0 0 0-1.414 0L28 26.585l-7.071-7.07a1 1 0 0 0-1.414 1.414L26.585 28l-7.07 7.071a1 1 0 0 0 1.414 1.414L28 29.415l7.071 7.07a1 1 0 0 0 1.414-1.414l-7.07-7.07 7.07-7.072a1 1 0 0 0 0-1.414Z",fill:"#fff"}),(0,c.jsx)("path",{d:"m28 26.586-.707.707L28 28l.707-.707-.707-.707ZM26.586 28l.707.707L28 28l-.707-.707-.707.707ZM28 29.414l.707-.707L28 28l-.707.707.707.707ZM29.414 28l-.707-.707L28 28l.707.707.707-.707Zm6.364-7.778 1.414-1.414a2 2 0 0 0-2.828 0l1.414 1.414Zm-7.07 7.071 7.07-7.071-1.414-1.414-7.071 7.07 1.414 1.415Zm-8.486-7.071 7.07 7.071 1.415-1.414-7.071-7.071-1.414 1.414Zm0 0 1.414-1.414a2 2 0 0 0-2.828 0l1.414 1.414Zm0 0-1.414-1.414a2 2 0 0 0 0 2.828l1.414-1.414Zm7.07 7.071-7.07-7.071-1.414 1.414 7.07 7.071 1.415-1.414Zm-7.07 8.485 7.07-7.07-1.413-1.415-7.071 7.071 1.414 1.414Zm0 0-1.414-1.414a2 2 0 0 0 0 2.829l1.414-1.415Zm0 0-1.414 1.415a2 2 0 0 0 2.828 0l-1.414-1.415Zm7.07-7.07-7.07 7.07 1.414 1.415 7.071-7.072-1.414-1.414Zm8.486 7.07-7.07-7.07-1.415 1.413 7.071 7.072 1.414-1.415Zm0 0-1.414 1.415a2 2 0 0 0 2.828 0l-1.414-1.415Zm0 0 1.414 1.415a2 2 0 0 0 0-2.829l-1.414 1.414Zm-7.07-7.07 7.07 7.07 1.414-1.414-7.07-7.071-1.415 1.414Zm7.07-8.486-7.07 7.071 1.413 1.414 7.071-7.07-1.414-1.415Zm0 0 1.414 1.414a2 2 0 0 0 0-2.828l-1.414 1.414Z",fill:"rgba(40, 40, 40, 0.32)",mask:"url(#a)"}))}function j(){return(0,c.jsx)("svg",{width:"56",height:"56",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},(0,c.jsx)("g",{opacity:".96"},(0,c.jsx)("mask",{id:"a",maskUnits:"userSpaceOnUse",x:"9.615",y:"9.615",width:"36.77",height:"36.77",fill:"#000"},(0,c.jsx)("path",{fill:"#fff",d:"M9.615 9.615h36.77v36.77H9.615z"}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.485 19.515a1 1 0 0 0-1.414 0L28 26.585l-7.071-7.07a1 1 0 0 0-1.414 1.414L26.585 28l-7.07 7.071a1 1 0 0 0 1.414 1.414L28 29.415l7.071 7.07a1 1 0 0 0 1.414-1.414l-7.07-7.07 7.07-7.072a1 1 0 0 0 0-1.414Z"})),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.485 19.515a1 1 0 0 0-1.414 0L28 26.585l-7.071-7.07a1 1 0 0 0-1.414 1.414L26.585 28l-7.07 7.071a1 1 0 0 0 1.414 1.414L28 29.415l7.071 7.07a1 1 0 0 0 1.414-1.414l-7.07-7.07 7.07-7.072a1 1 0 0 0 0-1.414Z",fill:"#000",fillOpacity:".96"}),(0,c.jsx)("path",{d:"m28 26.586-.707.707L28 28l.707-.707-.707-.707ZM26.586 28l.707.707L28 28l-.707-.707-.707.707ZM28 29.414l.707-.707L28 28l-.707.707.707.707ZM29.414 28l-.707-.707L28 28l.707.707.707-.707Zm6.364-7.778 1.414-1.414a2 2 0 0 0-2.828 0l1.414 1.414Zm-7.07 7.071 7.07-7.071-1.414-1.414-7.071 7.07 1.414 1.415Zm-8.486-7.071 7.07 7.071 1.415-1.414-7.071-7.071-1.414 1.414Zm0 0 1.414-1.414a2 2 0 0 0-2.828 0l1.414 1.414Zm0 0-1.414-1.414a2 2 0 0 0 0 2.828l1.414-1.414Zm7.07 7.071-7.07-7.071-1.414 1.414 7.07 7.071 1.415-1.414Zm-7.07 8.485 7.07-7.07-1.413-1.415-7.071 7.071 1.414 1.414Zm0 0-1.414-1.414a2 2 0 0 0 0 2.829l1.414-1.415Zm0 0-1.414 1.415a2 2 0 0 0 2.828 0l-1.414-1.415Zm7.07-7.07-7.07 7.07 1.414 1.415 7.071-7.072-1.414-1.414Zm8.486 7.07-7.07-7.07-1.415 1.413 7.071 7.072 1.414-1.415Zm0 0-1.414 1.415a2 2 0 0 0 2.828 0l-1.414-1.415Zm0 0 1.414 1.415a2 2 0 0 0 0-2.829l-1.414 1.414Zm-7.07-7.07 7.07 7.07 1.414-1.414-7.07-7.071-1.415 1.414Zm7.07-8.486-7.07 7.071 1.413 1.414 7.071-7.07-1.414-1.415Zm0 0 1.414 1.414a2 2 0 0 0 0-2.828l-1.414 1.414Z",fill:"#fff",fillOpacity:".88",mask:"url(#a)"})))}var b,k=(0,l.animated)(u());function Z(e){var t=(0,l.useSpring)({opacity:e.isVisible?1:0});return(0,c.jsx)(k,{"data-testid":"lightbox-cross",onClick:e.onClick,position:"absolute",right:"2rm",top:"2rm",zIndex:3100,style:t,variant:"clean"},(0,c.jsx)(m.default,{id:"lightbox-cross"},"Close"),e.isDarkBackground?(0,c.jsx)(w,null):(0,c.jsx)(j,null))}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,r=!1,l=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,l=e}finally{try{i||null==a.return||a.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}!function(e){e.prev="prev",e.next="next"}(b||(b={}));var R=function(e){var t=e.mode,n=e.isVisible,s=e.slides,u=e.onClose,d=e.index,f=e.onSlideChange,p=e.originRect,h=C((0,i.useState)(b.prev),2),g=h[0],m=h[1],v=(0,i.useMemo)((function(){return s[d]}),[s,d]),x=C((0,i.useState)(!1),2),w=x[0],j=x[1],k=C((0,i.useState)(!1),2),O=k[0],P=k[1],R=(0,i.useMemo)((function(){return s.map((function(e,t){return e.gallery?t:null})).filter((function(e){return null!==e}))}),[s]),I=s.length>1&&v.gallery,z=function(){var e=C((0,i.useState)({}),2),t=e[0],n=e[1];function r(e){if(t.hasOwnProperty(e))return t[e];var i=new Image;i.onload=function(){n(L(L({},t),{},M({},e,!0)))},i.onerror=function(){var i=L({},t);delete i[e],n(i)},i.src=e,n(L(L({},t),{},M({},e,!1)))}function l(e){return!!t.hasOwnProperty(e)&&t[e]}return{isImageLoaded:l,preloadImage:r}}(),D=z.isImageLoaded,E=z.preloadImage,B=D(v.imgSrc)||w&&O&&E(v.imgSrc),F=B?"zoom-out":"wait",V=C((0,i.useState)({height:window.innerHeight,width:window.innerWidth}),2),A=V[0],_=V[1];function U(){_({height:window.innerHeight,width:window.innerWidth})}var H=(0,i.useMemo)((function(){var e=(0,a.gn)(v.color),t=e.r,n=e.g,i=e.b,r=e.a;return"rgba(".concat(t,", ").concat(n,", ").concat(i,", ").concat(r,")")}),[v.color]),T=(0,l.useSpring)({opacity:n?1:0}),N=(0,i.useMemo)((function(){var e=p.top,t=void 0===e?0:e,n=p.left,i=void 0===n?0:n;return L(L({},S(p,["top","left"])),{},{top:"".concat(100*t/A.height,"%"),left:"".concat(100*i/A.width,"%"),opacity:0})}),[p,A]),W=(0,l.useTransition)(n,null,{from:N,enter:{top:"50%",left:"50%",height:v.height,width:v.width,opacity:1},leave:I?{opacity:0}:N,onDestroyed:function(e){P(!e),j(!e)}}),$=(0,l.useTransition)(v,(function(e){return e._id}),{immediate:!O,from:{opacity:0,left:g===b.next?"100%":"-100%"},enter:{opacity:1,left:"0%"},leave:{opacity:0,left:g===b.next?"-100%":"100%"},onDestroyed:function(){w||j(!0)}});function q(e){if(I&&f){j(!1),m(e);var t=R.indexOf(d),n=e===b.next?t+1:t-1;e===b.next?n<R.length?f(R[n]):f(R[0]):f(n>=0?R[n]:R[R.length-1])}}function G(){O&&u&&u()}function J(e){switch(e.key){case"Escape":G();break;case"ArrowLeft":q(b.prev);break;case"ArrowRight":q(b.next)}}(0,i.useEffect)((function(){return window.addEventListener("resize",U),t===o.us.viewer&&O&&(n?window.addEventListener("keyup",J):window.removeEventListener("keyup",J)),function(){window.removeEventListener("resize",U),window.removeEventListener("keyup",J)}}),[n,v,O]);var K=(0,i.useMemo)((function(){return(0,a.eO)(v.color)}),[v]);return(0,c.jsx)(r.Box,{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:2999,pointerEvents:O?"all":"none"},(0,c.jsx)(Z,{isDarkBackground:!K,isVisible:n&&O,onClick:G}),t===o.us.viewer&&I&&(0,c.jsx)(y,{isDarkBackground:!K,isVisible:n&&O,onPrev:function(){return q(b.prev)},onNext:function(){return q(b.next)}}),(0,c.jsx)(l.animated.div,{onClick:G,style:L({backgroundColor:H,position:"absolute",zIndex:0,width:"100%",height:"100%",transition:".3s background-color",cursor:F},T)}),$.map((function(e){var t=e.item,i=e.key,o=e.props;return(0,c.jsx)(l.animated.div,{onClick:G,key:i,style:L({position:"absolute",zIndex:10,width:"100%",height:"100%",cursor:F},o)},W.map((function(e){var i=e.item,o=e.key,a=e.props,s=a.height,u=a.width,d=S(a,["height","width"]);if(!i)return null;var f=L({position:"absolute",transform:"translate(-50%, -50%)",height:n&&O||!n&&O&&t.gallery?t.height:s,width:n&&O||!n&&O&&t.gallery?t.width:u},d);return(0,c.jsx)(r.Box,{key:o},B&&(0,c.jsx)(l.animated.img,{style:L(L({},f),{},{zIndex:20}),src:t.imgSrc}),(0,c.jsx)(l.animated.img,{"data-testid":"lightbox-image",style:L(L({},f),{},{zIndex:10,filter:"blur(0.4px)"}),src:t.previewImgSrc}))})))})))}}}]);