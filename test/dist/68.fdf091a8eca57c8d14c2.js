(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[68],{1257:function(t,n){"use strict";n.default=void 0;var e={fixRadiusClip:function(){return{maskImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)"}}};n.default=e},1495:function(t,n,e){"use strict";e.d(n,{AW:function(){return y},F0:function(){return d},gx:function(){return b},rs:function(){return k},s6:function(){return f},LX:function(){return A},k6:function(){return P},UO:function(){return B}});var r=e(1501),o=e(353),i=(e(842),e(1502)),a=e(1496),u=e(1503),c=e(1504),s=e(1497),l=e.n(s),p=(e(1499),e(1505)),h=(e(657),function(t){var n=(0,a.Z)();return n.displayName=t,n}("Router-History")),f=function(t){var n=(0,a.Z)();return n.displayName=t,n}("Router"),d=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}(0,r.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return o.createElement(f.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(h.Provider,{children:this.props.children||null,value:this.props.history}))},n}(o.Component);o.Component;o.Component;var m={},v=0;function A(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,u=void 0!==a&&a,c=e.sensitive,s=void 0!==c&&c;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=m[e]||(m[e]={});if(r[t])return r[t];var o=[],i={regexp:l()(t,o,n),keys:o};return v<1e4&&(r[t]=i,v++),i}(e,{end:i,strict:u,sensitive:s}),o=r.regexp,a=r.keys,c=o.exec(t);if(!c)return null;var p=c[0],h=c.slice(1),f=t===p;return i&&!f?null:{path:e,url:"/"===e&&""===p?"/":p,isExact:f,params:a.reduce((function(t,n,e){return t[n.name]=h[e],t}),{})}}),null)}var y=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(f.Consumer,null,(function(n){n||(0,u.Z)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?A(e.pathname,t.props):n.match,i=(0,c.Z)({},n,{location:e,match:r}),a=t.props,s=a.children,l=a.component,p=a.render;return Array.isArray(s)&&0===s.length&&(s=null),o.createElement(f.Provider,{value:i},i.match?s?"function"==typeof s?s(i):s:l?o.createElement(l,i):p?p(i):null:"function"==typeof s?s(i):null)}))},n}(o.Component);function g(t){return"/"===t.charAt(0)?t:"/"+t}function C(t,n){if(!t)return n;var e=g(t);return 0!==n.pathname.indexOf(e)?n:(0,c.Z)({},n,{pathname:n.pathname.substr(e.length)})}function E(t){return"string"==typeof t?t:(0,i.Ep)(t)}function Z(t){return function(){(0,u.Z)(!1)}}function x(){}var b=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return x},n.handleBlock=function(){return x},n}(0,r.Z)(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,a=e.context,u=void 0===a?{}:a;u.action=n,u.location=function(t,n){return t?(0,c.Z)({},n,{pathname:g(t)+n.pathname}):n}(o,(0,i.ob)(t)),u.url=E(u.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,a=void 0===r?{}:r,u=t.location,s=void 0===u?"/":u,l=(0,p.Z)(t,["basename","context","location"]),h={createHref:function(t){return g(e+E(t))},action:"POP",location:C(e,(0,i.ob)(s)),push:this.handlePush,replace:this.handleReplace,go:Z(),goBack:Z(),goForward:Z(),listen:this.handleListen,block:this.handleBlock};return o.createElement(d,(0,c.Z)({},l,{history:h,staticContext:a}))},n}(o.Component);var k=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return o.createElement(f.Consumer,null,(function(n){n||(0,u.Z)(!1);var e,r,i=t.props.location||n.location;return o.Children.forEach(t.props.children,(function(t){if(null==r&&o.isValidElement(t)){e=t;var a=t.props.path||t.props.from;r=a?A(i.pathname,(0,c.Z)({},t.props,{path:a})):n.match}})),r?o.cloneElement(e,{location:i,computedMatch:r}):null}))},n}(o.Component);var R=o.useContext;function P(){return R(h)}function B(){var t=R(f).match;return t?t.params:{}}}}]);