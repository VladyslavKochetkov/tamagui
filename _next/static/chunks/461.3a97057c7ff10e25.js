"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{86029:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(2784);function o(e){const n=r.useRef(e);return r.useEffect((()=>{n.current=e})),r.useMemo((()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)}),[])}},94461:function(e,n,t){t.r(n),t.d(n,{Demo:function(){return v},default:function(){return m}});var r=t(52322),o=t(38866),c=t(46642),i=t(80858),u=t(79828),l=t(12070),a=(t(2784),t(56695)),s=t(30927),f=t(60505),d=t(92051);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function m(){return(0,r.jsxs)(a.FA,{space:!0,children:[(0,r.jsxs)(a.sL,{space:!0,children:[(0,r.jsx)(v,{placement:"top right",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:o.C},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}}),(0,r.jsx)(v,{placement:"top",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:c.K},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}}),(0,r.jsx)(v,{placement:"top left",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:o.C},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}})]}),(0,r.jsxs)(a.sL,{space:!0,children:[(0,r.jsx)(v,{placement:"left",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:i.s},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}}),(0,r.jsx)(s.z,{tag:"button",opacity:"_o-orgf3d",icon:o.C}),(0,r.jsx)(v,{placement:"right",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:u._},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}})]}),(0,r.jsxs)(a.sL,{space:!0,children:[(0,r.jsx)(v,{placement:"bottom right",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:o.C},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}}),(0,r.jsx)(v,{placement:"bottom",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:l._},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}}),(0,r.jsx)(v,{placement:"bottom left",trigger:function(e){return(0,r.jsx)(s.z,b({tag:"button",icon:o.C},e,{className:(0,d.concatClassName)(e&&e.className||"",e)}))}})]})]})}function v(e){return(0,r.jsxs)(f.U,b({},e,{children:[(0,r.jsx)(f.U.Arrow,{backgroundColor:"$background"}),(0,r.jsxs)("div",{className:" _ai-1oszu61 _bc-vcw901 _bblr-jttyys _bbrr-wae8j0 _btlr-zfawj4 _btrr-1cvu0hm _boxsha-4lcc89 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx _pb-12bic3x _pl-7ztw5e _pr-g6vdx7 _pt-1vq430g ",children:[(0,r.jsx)("p",{className:" _boxs-deolkf _col-1gcmrwd _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-a023e6 _fow-1kfrs79 _letsp-oxtfae _lh-1kt6imw _ussel-1xnzce8 _ww-qvutc0 ",children:"HoverablePopover contents"}),(0,r.jsx)("p",{className:" _boxs-deolkf _col-1gcmrwd _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-a023e6 _fow-1od2jal _letsp-oxtfae _lh-1kt6imw _ussel-1xnzce8 _ww-qvutc0 ",children:"Lorem ipsum dolor sit amet."})]})]}))}},60505:function(e,n,t){t.d(n,{U:function(){return N}});var r=t(52322),o=t(2330),c=t(82735),i=t(39905),u=t(23917),l=t(46886),a=t(2784),s=t(54503),f=Object.defineProperty,d=function(e,n){return f(e,"name",{value:n,configurable:!0})};a.createElement;var p=(0,a.forwardRef)((function(e,n){var t=e.onPressIn,o=e.onPressOut,c=e.onHoverIn,i=e.onHoverOut,u=e.onHoverMove,f=e.disableUntilSettled,p=e.hoverDelay,b=void 0===p?0:p,m=e.children;if(!s.$L)return m;var v=(0,a.useState)(!1),g=v[0],y=v[1],h=(0,l.Nr)((function(){return y(!1)}),b/2),j=(0,l.Nr)((function(){return y(!0)}),b),k=d((function(){j.cancel(),h.cancel()}),"cancelAll");(0,a.useImperativeHandle)(n,(function(){return{close:function(){y(!1)}}})),(0,a.useEffect)((function(){g?null==c||c():null==i||i()}),[g]);var O=d((function(){k(),h()}),"setOff"),w=d((function(){k(),j()}),"setOn"),x=d((function(){u&&u(),f&&w()}),"hoverMove");return(0,r.jsx)("span",{ref:n,style:{display:"contents"},onMouseEnter:w,onMouseLeave:O,onMouseMove:x,onMouseDown:t,onClick:o,children:m})})),b=t(56695);function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=(0,a.forwardRef)((function(e,n){var t=e.children,o=e.fallbackToPress,c=v(e,["children","fallbackToPress"]);if((0,i.Y)()){var u=(0,a.useState)(!1),l=(u[0],u[1]);return o?(0,r.jsx)(b.FA,{ref:n,onPress:function(){l((function(e){var n,t,r=!e;return r?null==(n=c.onHoverIn)||n.call(c):null==(t=c.onHoverOut)||t.call(c),r}))},children:t}):t}return(0,r.jsx)(p,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}({},c,{children:t}))})),y=t(94895),h=t(2209);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,c=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return c}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=Object.defineProperty,_=function(e,n){return x(e,"name",{value:n,configurable:!0})};a.createElement;var N=(0,c.$)((0,a.forwardRef)((function(e,n){var t=e.trigger,c=e.delay,s=void 0===c?0:c,f=e.children,d=e.allowHoverOnContent,b=e.fallbackToPress,m=e.disableUntilSettled,v=e.open,h=e.defaultOpen,j=e.onChangeOpen,x=O(e,["trigger","delay","children","allowHoverOnContent","fallbackToPress","disableUntilSettled","open","defaultOpen","onChangeOpen"]),N=(0,a.useRef)(null),P=w((0,u.T)({prop:v,defaultProp:h||!1,onChange:j}),2),C=P[0],S=P[1],E=(0,i.Y)(),L=(0,l.Nr)((function(){return S(!1)}),d?20:0),z=(0,l.Nr)((function(){return S(!0)}),d?40:0),I=_((function(){z.cancel(),L.cancel()}),"cancelAll"),A=_((function(){I(),L()}),"setOff"),H=_((function(){I(),z()}),"setOn");return(0,a.useImperativeHandle)(n,(function(){return{close:function(){var e;I(),S(!1),null==(e=N.current)||e.close()}}})),E&&!b?t(null,{open:!1}):(0,r.jsx)(y.J,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){k(e,n,t[n])}))}return e}({open:C},x,{trigger:function(e,n){return(0,r.jsx)(g,{ref:N,disableUntilSettled:m,onHoverIn:H,onHoverOut:A,hoverDelay:s,children:t(e,n)})},children:function(e){var n=(0,r.jsx)(o.M_,{children:"function"===typeof f?f(e):e.open?f:null});return(0,r.jsx)(y.J.Content,{children:E&&b?f:d?(0,r.jsx)(p,{onHoverIn:H,onHoverOut:A,children:n}):n})}}))})),{Arrow:h.c})},23917:function(e,n,t){t.d(n,{T:function(){return u}});var r=t(86029),o=t(2784),c=Object.defineProperty,i=function(e,n){return c(e,"name",{value:n,configurable:!0})};function u(e){var n=e.prop,t=e.defaultProp,c=e.onChange,i=e.strategy,u=void 0===i?"prop-wins":i,a=(0,o.useRef)(n),s=(0,r.W)(c),f=(0,o.useState)(null!=n?n:t),d=f[0],p=f[1],b="prop-wins"===u;return(0,o.useEffect)((function(){a.current=n,p((function(e){return l(e,n,s)}))}),[n]),[d,(0,o.useCallback)((function(e){b&&void 0!==a.current||p((function(n){return l(n,"function"===typeof e?e(n):e,s)}))}),[p,b])]}i(u,"useControllableState");var l=i((function(e,n,t){return e===n||void 0===n?e:(t(n),n)}),"getNextStateWithCallback")},46886:function(e,n,t){t.d(n,{Ds:function(){return l},Nr:function(){return s},nj:function(){return f}});var r=t(2784);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=Object.defineProperty,u=function(e,n){return i(e,"name",{value:n,configurable:!0})};function l(e,n,t){var r,o=function(){c=!1;var o=this,i=arguments;t&&!r&&e.apply(o,i),clearTimeout(r),r=setTimeout((function(){r=null,t||c||e.apply(o,i),c=!1}),n)},c=!1;return u(o,"debounced"),o.cancel=function(){c=!0},o}u(l,"debounce");var a={leading:!1};function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=(0,r.useRef)(null);return(0,r.useEffect)((function(){return function(){var e;null==(e=i.current)||e.cancel()}}),[]),(0,r.useMemo)((function(){return i.current=l(e,n,t.leading),i.current}),[t.leading].concat(c(o)))}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(0,r.useState)(e),o=t[0],c=t[1];return(0,r.useEffect)((function(){var t=setTimeout((function(){c((function(n){return n===e?n:e}))}),n);return function(){clearTimeout(t)}}),[e]),o}u(s,"useDebounce"),u(f,"useDebounceValue")},12070:function(e,n,t){t.d(n,{_:function(){return l}});var r=t(2784),o=t(71295),c=t(74479),i=Object.defineProperty;const u=((e,n)=>i(e,"name",{value:n,configurable:!0}))((e=>{const{color:n="black",size:t=24,...c}=e;return r.createElement(o.Svg,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c},r.createElement(o.Polyline,{points:"6 9 12 15 18 9",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="ChevronDown";const l=(0,r.memo)((0,c.H)(u))},80858:function(e,n,t){t.d(n,{s:function(){return l}});var r=t(2784),o=t(71295),c=t(74479),i=Object.defineProperty;const u=((e,n)=>i(e,"name",{value:n,configurable:!0}))((e=>{const{color:n="black",size:t=24,...c}=e;return r.createElement(o.Svg,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c},r.createElement(o.Polyline,{points:"15 18 9 12 15 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="ChevronLeft";const l=(0,r.memo)((0,c.H)(u))},79828:function(e,n,t){t.d(n,{_:function(){return l}});var r=t(2784),o=t(71295),c=t(74479),i=Object.defineProperty;const u=((e,n)=>i(e,"name",{value:n,configurable:!0}))((e=>{const{color:n="black",size:t=24,...c}=e;return r.createElement(o.Svg,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c},r.createElement(o.Polyline,{points:"9 18 15 12 9 6",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="ChevronRight";const l=(0,r.memo)((0,c.H)(u))},46642:function(e,n,t){t.d(n,{K:function(){return l}});var r=t(2784),o=t(71295),c=t(74479),i=Object.defineProperty;const u=((e,n)=>i(e,"name",{value:n,configurable:!0}))((e=>{const{color:n="black",size:t=24,...c}=e;return r.createElement(o.Svg,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c},r.createElement(o.Polyline,{points:"18 15 12 9 6 15",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="ChevronUp";const l=(0,r.memo)((0,c.H)(u))},38866:function(e,n,t){t.d(n,{C:function(){return l}});var r=t(2784),o=t(71295),c=t(74479),i=Object.defineProperty;const u=((e,n)=>i(e,"name",{value:n,configurable:!0}))((e=>{const{color:n="black",size:t=24,...c}=e;return r.createElement(o.Svg,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c},r.createElement(o.Circle,{cx:"12",cy:"12",r:"10",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");u.displayName="Circle";const l=(0,r.memo)((0,c.H)(u))}}]);