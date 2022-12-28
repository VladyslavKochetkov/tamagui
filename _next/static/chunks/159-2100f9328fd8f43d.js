"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{1045:function(e,t,n){n.d(t,{H:function(){return s}});var r=n(2322),o=n(7729),i=n.n(o),l=n(5632);function s(e){var t;let{url:n="https://tamagui.dev",pathname:o,title:s="Tamagui",description:a="",poster:u,...d}=e,c=(0,l.useRouter)(),h=null!==(t=d.image)&&void 0!==t?t:u?"".concat(n,"/").concat(u):"".concat(n,"/social.png"),k=o||c.asPath;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:s}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(n).concat(k)}),(0,r.jsx)("meta",{property:"og:title",content:s}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:image",content:h}),(0,r.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}n(2784)},7611:function(e,t,n){n.d(t,{B:function(){return u}});var r=n(2322),o=n(1401),i=n(102),l=n(4697),s=n(2784),a=n(8652);function u(e){let t=e.extractable((0,s.forwardRef)((t,n)=>{let u=(0,i.R)(e)&&e.staticConfig.isInput,d=(0,s.useRef)(t.value||t.defaultValue||""),c=(0,s.useCallback)(e=>{t.id&&e&&(0,a.QS)(t.id,{focus:e.focus,...u&&{focusAndSelect(){e.focus(),e.setSelection&&"string"==typeof d.current&&e.setSelection(0,d.current.length)}}})},[u,t.id]),h=(0,o.F)(n,c);(0,s.useEffect)(()=>{if(t.id)return()=>{(0,a.Xe)(t.id)}},[t.id]);let k=(0,l.z)(e=>{var n;d.current=e,null===(n=t.onChangeText)||void 0===n||n.call(t,e)}),f=u?{...t,onChangeText:k}:t;return(0,r.jsx)(e,{ref:h,...f})}));return t}},8652:function(e,t,n){n.d(t,{Q8:function(){return i},QS:function(){return r},Xe:function(){return o}});let r=(e,t)=>{},o=e=>{},i=e=>{}},4476:function(e,t,n){n.d(t,{E:function(){return d}});var r=n(2322),o=n(2717),i=n(1560),l=n(8694),s=n(6030),a=n(2832);(0,o.Gy)({Image:a.Z});let u=(0,i.z)(a.Z,{name:"Image",position:"relative",source:{uri:""},zIndex:1}),d=u.extractable(e=>{let t=(0,l.p)(e),{src:n,...o}=t,i="string"==typeof n?{uri:n,...s.$L&&{width:t.width,height:t.height}}:n;return(0,r.jsx)(u,{source:i,...o})})},6270:function(e,t,n){n.d(t,{HC:function(){return W}});var r=n(2322),o=n(1560),i=n(3983),l=n(4289),s=n(5678),a=n(9122),u=n(7537),d=n(4018),c=n(3393),h=n(3235),k=n(3164),f=n(2655),p=n(1218),x=n(1019),m=n(2784);let y="ListItem",g=(0,o.z)(k.K,{name:y,tag:"li",alignItems:"center",flexWrap:"nowrap",width:"100%",borderColor:"$borderColor",maxWidth:"100%",overflow:"hidden",flexDirection:"row",variants:{size:{"...size"(e,t){let{tokens:n}=t;return{minHeight:n.size[e],paddingHorizontal:n.space[e],paddingVertical:(0,h.getSpace)(e,-2)}}},active:{true:{hoverStyle:{backgroundColor:"$background"}}},disabled:{true:{opacity:.5,pointerEvents:"none"}}},defaultVariants:{size:"$4"}}),j=(0,o.z)(p.J,{name:"ListItemText",color:"$color",userSelect:"none",flexGrow:1,flexShrink:1,ellipse:!0,cursor:"default"}),L=(0,o.z)(j,{name:"ListItemSubtitle",color:"$colorPress",marginTop:"$-2",opacity:.65,maxWidth:"100%",size:"$3"}),v=(0,o.z)(j,{name:"ListItemTitle"}),$=function(e){let{Text:t=j,Subtitle:n=L,Title:o=v}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{Text:j,Subtitle:L,Title:v},{children:u,icon:d,iconAfter:k,noTextWrap:p,theme:m,space:y,spaceFlex:g,scaleIcon:$=1,scaleSpace:w=1,subTitle:b,color:W,fontWeight:C,letterSpacing:z,fontSize:H,fontFamily:S,textAlign:T,textProps:F,title:E,...B}=e,I=(0,i.lA)(e),N=I.size||"$4",A=(0,l.a)(N,-3),P="$".concat(A.key),Z=(0,c.yv)(N)*$,R=(0,h.useGetThemedIcon)({size:Z,color:W}),[M,_]=[d,k].map(R),V=(0,s.Ve)(Z)*w,G=(0,x.k)(t,I);return{props:{fontFamily:S,...B,children:(0,r.jsxs)(r.Fragment,{children:[M?(0,r.jsxs)(r.Fragment,{children:[M,(0,r.jsx)(a.LZ,{size:V})]}):null,E||b?(0,r.jsxs)(f.FA,{flex:1,children:["all"===p?E:(0,r.jsx)(o,{size:N,children:E}),b?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.LZ,{flex:!0,size:.333*V}),"string"==typeof b&&"all"!==p?(0,r.jsx)(n,{size:P,children:b}):b]}):null,G]}):G,_?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.LZ,{size:V}),_]}):null]})}}},w=(0,m.forwardRef)((e,t)=>{let{props:n}=$(e);return(0,r.jsx)(g,{ref:t,justifyContent:"space-between",...n})}),b={inlineProps:new Set(["color","fontWeight","fontSize","fontFamily","letterSpacing","textAlign"])},W=(0,u.$)(g.extractable((0,d.Y)(w,{componentName:y}),b),{Text:j,Subtitle:L})},8848:function(e,t,n){n.d(t,{G:function(){return u},y:function(){return a}});var r=n(4289),o=n(6030),i=n(5678),l=n(8480),s=n(7800);let a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$4",t=arguments.length>1?arguments[1]:void 0;if(t.props.multiline||t.props.numberOfLines>1)return u(e,t);let n=(0,l.f)(e,t),i=(0,r.C)(t.tokens.space,e,-1,[2]),a=(0,s.H)(e,t);return!o.$L&&a&&delete a.lineHeight,{...a,...n,paddingHorizontal:i}},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$4",t=arguments.length>1?arguments[1]:void 0,{props:n}=t,o=(0,l.f)(e,t),a=(0,s.H)(e,t),u=n.numberOfLines?(n.numberOfLines||1)*(0,i.Ve)(a.lineHeight):"auto",d=(0,r.C)(t.tokens.space,e,-2,[2]),c=(0,r.C)(t.tokens.space,e,-1,[2]);return{...o,...a,paddingVertical:d,paddingHorizontal:c,height:u}}},712:function(e,t,n){n.d(t,{r:function(){return s}});var r=n(2322),o=n(6030),i=n(2655),l=n(2784);function s(e){let{children:t,columns:n,itemMinWidth:s=200,gap:a}=e;if(o.$L)return(0,r.jsx)("div",{style:{gap:a,display:"grid",justifyContent:"stretch",gridTemplateColumns:"repeat( auto-fit, minmax(".concat(s,"px, 1fr) )")},children:t});let u=l.Children.toArray(t);return(0,r.jsx)(i.sL,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:u.map((e,t)=>e?(0,r.jsx)(i.sL,{flex:1,minWidth:s,marginRight:a,marginBottom:a,children:e},t):null)})}},3197:function(e,t,n){n.d(t,{I:function(){return C},z:function(){return W}});var r=n(2717),o=n(1560),i=n(7611),l=n(2784),s=n(4545),a=n(302),u=n(9005),d=n(4393),c=n(9973),h=n(4304),k=n(9538),f=n(7851),p=n(2424),x=n(6218);let m=(e,t)=>{let{selectionEnd:n,selectionStart:r}=e,{start:o,end:i}=t;return o!==r||i!==n},y=(e,t)=>{if(m(e,t)){let{start:n,end:r}=t;try{e.setSelectionRange(n,r||n)}catch(o){}}},g=Object.assign({},a.Tf.defaultProps,a.Tf.accessibilityProps,a.Tf.clickProps,a.Tf.focusProps,a.Tf.keyboardProps,a.Tf.mouseProps,a.Tf.touchProps,a.Tf.styleProps,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),j=e=>(0,u.Z)(e,g),L="undefined"==typeof window?l.useEffect:l.useLayoutEffect,v=null,$=l.forwardRef((e,t)=>{let n,r;let{autoCapitalize:o="sentences",autoComplete:i,autoCompleteType:s,autoCorrect:a=!0,blurOnSubmit:u,clearTextOnFocus:m,dir:g,editable:$=!0,keyboardType:b="default",multiline:W=!1,numberOfLines:C=1,onBlur:z,onChange:H,onChangeText:S,onContentSizeChange:T,onFocus:F,onKeyPress:E,onLayout:B,onMoveShouldSetResponder:I,onMoveShouldSetResponderCapture:N,onResponderEnd:A,onResponderGrant:P,onResponderMove:Z,onResponderReject:R,onResponderRelease:M,onResponderStart:_,onResponderTerminate:V,onResponderTerminationRequest:G,onScrollShouldSetResponder:K,onScrollShouldSetResponderCapture:O,onSelectionChange:U,onSelectionChangeShouldSetResponder:D,onSelectionChangeShouldSetResponderCapture:Q,onStartShouldSetResponder:q,onStartShouldSetResponderCapture:J,onSubmitEditing:X,placeholderTextColor:Y,returnKeyType:ee,secureTextEntry:et=!1,selection:en,selectTextOnFocus:er,spellCheck:eo}=e;switch(b){case"email-address":n="email";break;case"number-pad":case"numeric":r="numeric";break;case"decimal-pad":r="decimal";break;case"phone-pad":n="tel";break;case"search":case"web-search":n="search";break;case"url":n="url";break;default:n="text"}et&&(n="password");let ei=l.useRef({height:null,width:null}),el=l.useRef(null),es=l.useCallback(e=>{if(W&&T&&null!=e){let t=e.scrollHeight,n=e.scrollWidth;(t!==ei.current.height||n!==ei.current.width)&&(ei.current.height=t,ei.current.width=n,T({nativeEvent:{contentSize:{height:ei.current.height,width:ei.current.width}}}))}},[W,T]),ea=l.useMemo(()=>e=>{null!=e&&(e.clear=function(){null!=e&&(e.value="")},e.isFocused=function(){return null!=e&&d.Z.currentlyFocusedField()===e},es(e))},[es]);L(()=>{let e=el.current;null!=e&&null!=en&&y(e,en),document.activeElement===e&&(d.Z._currentlyFocusedNode=e)},[el,en]),(0,c.Z)(el,B),(0,h.Gy)(el,{onMoveShouldSetResponder:I,onMoveShouldSetResponderCapture:N,onResponderEnd:A,onResponderGrant:P,onResponderMove:Z,onResponderReject:R,onResponderRelease:M,onResponderStart:_,onResponderTerminate:V,onResponderTerminationRequest:G,onScrollShouldSetResponder:K,onScrollShouldSetResponderCapture:O,onSelectionChangeShouldSetResponder:D,onSelectionChangeShouldSetResponderCapture:Q,onStartShouldSetResponder:q,onStartShouldSetResponderCapture:J});let{direction:eu}=(0,k.PE)(),ed=j(e);ed.autoCapitalize=o,ed.autoComplete=i||s||"on",ed.autoCorrect=a?"on":"off",ed.dir=void 0!==g?g:"auto",ed.enterKeyHint=ee,ed.inputMode=r,ed.onBlur=function(e){d.Z._currentlyFocusedNode=null,z&&(e.nativeEvent.text=e.target.value,z(e))},ed.onChange=function(e){let t=e.target,n=t.value;e.nativeEvent.text=n,es(t),H&&H(e),S&&S(n)},ed.onFocus=function(e){let t=e.target;F&&(e.nativeEvent.text=t.value,F(e)),null!=t&&(d.Z._currentlyFocusedNode=t,m&&(t.value=""),er&&(null!=v&&clearTimeout(v),v=setTimeout(()=>{null!=t&&t.select()},0)))},ed.onKeyDown=function(e){let t=e.target;e.stopPropagation();let n=e.nativeEvent,r=n.isComposing||229===n.keyCode;E&&E(e),"Enter"!==e.key||e.shiftKey||r||e.isDefaultPrevented()||((u||!W)&&X&&(e.preventDefault(),n.text=e.target.value,X(e)),(null==u?!W:u)&&null!=t&&(t.blur(),setTimeout(()=>t.blur(),0)))},ed.onSelect=function(e){if(U)try{let t=e.target,{selectionStart:n,selectionEnd:r}=t;e.nativeEvent.selection={start:n,end:r},e.nativeEvent.text=e.target.value,U(e)}catch(o){}},ed.readOnly=!$,ed.rows=W?C:void 0,ed.spellCheck=null!=eo?eo:a,ed.style=[{"--placeholderTextColor":Y},w.textinput$raw,w.placeholder,e.style],ed.type=W?void 0:n;let ec=(0,f.Z)(ed),eh=(0,p.q)(el,ec,ea,t);ed.ref=eh;let ek=null!=e.lang?(0,k.w1)(e.lang):null,ef=e.dir||ek,ep=(0,x.Z)(W?"textarea":"input",ed,{writingDirection:ef||eu});return ep});$.displayName="TextInput",$.State=d.Z;let w=s.Z.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"}});var b=n(8848);(0,r.Gy)({TextInput:$});let W=(0,o.z)($,{name:"Input",fontFamily:"$body",borderWidth:1,outlineWidth:0,color:"$color",focusable:!0,borderColor:"$borderColor",backgroundColor:"$background",placeholderTextColor:"$placeholderColor",minWidth:0,hoverStyle:{borderColor:"$borderColorHover"},focusStyle:{borderColor:"$borderColorFocus",borderWidth:2,marginHorizontal:-1},variants:{size:{"...size":b.y}},defaultVariants:{size:"$4"}},{isInput:!0}),C=(0,i.B)(W)},8876:function(e,t,n){n.d(t,{o:function(){return y}});var r=n(2322),o=n(4018),i=n(1560),l=n(6604),s=n(5678),a=n(2655),u=n(2784),d=n(4545),c=n(3819),h=n(7882),k=n(7465);let f=e=>"currentcolor"===e||"currentColor"===e||"inherit"===e||0===e.indexOf("var(");function p({colors:e,locations:t,startPoint:n,endPoint:r,...o}){let[i,l]=u.useState(null),{width:s=1,height:a=1}=i??{},d=u.useMemo(()=>(function(e,t,n,r,o=1,i=1){let l=e.map((e,n)=>{let r=function(e,t=1){if(null==e)return;if("string"==typeof e&&f(e))return e;let n=(0,h.a)(e);if(null!=n){let r=((n>>24&255)/255*t).toFixed(2);return`rgba(${n>>16&255},${n>>8&255},${255&n},${r})`}}(e),o=r;if(t&&t[n]){let i=Math.max(0,Math.min(1,t[n]));o+=` ${100*i}%`}return o}),s=function(e,t,n,r){let o,i;let[l,s]=(o=[0,0],Array.isArray(n)&&(o=[null!=n[0]?n[0]:0,null!=n[1]?n[1]:0]),i=[0,1],Array.isArray(r)&&(i=[null!=r[0]?r[0]:0,null!=r[1]?r[1]:1]),[o,i]);l[0]*=e,s[0]*=e,l[1]*=t,s[1]*=t;let a=s[1]-l[1],u=s[0]-l[0];return 90+180*Math.atan2(a,u)/Math.PI}(o,i,n,r);return`linear-gradient(${s}deg, ${l.join(", ")})`})(e,t,n,r,s,a),[e,t,n,r,s,a]);return u.createElement(k.Z,{...o,style:[o.style,{backgroundImage:d}],onLayout(e){let{x:t,y:n,width:r,height:s}=e.nativeEvent.layout,a=i??{x:0,y:0,width:1,height:1};(t!==a.x||n!==a.y||r!==a.width||s!==a.height)&&l({x:t,y:n,width:r,height:s}),o.onLayout&&o.onLayout(e)}})}class x extends u.Component{render(){let{colors:e,locations:t,start:n,end:r,...o}=this.props,i=t;return t&&e.length!==t.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),i=t.slice(0,e.length)),u.createElement(p,{...o,colors:c.Z.select({web:e,default:e.map(h.a)}),locations:i,startPoint:m(n),endPoint:m(r)})}}function m(e){if(e){if(Array.isArray(e)&&2!==e.length){console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}");return}return Array.isArray(e)?e:[e.x,e.y]}}let y=a.FA.extractable((0,o.Y)(u.forwardRef((e,t)=>{let{start:n,end:o,colors:i,locations:l,children:s,...a}=e,u=j(i||[]);return(0,r.jsx)(g,{ref:t,...a,children:(0,r.jsx)(x,{start:n,end:o,colors:u,locations:l,style:d.Z.absoluteFill,children:s})})}))),g=(0,i.z)(a.FA,{name:"LinearGradient",overflow:"hidden",position:"relative"}),j=e=>{let t=(0,l.Fg)();return e.map(e=>"$"===e[0]?(0,s.E0)(t[e]||e):e)}},858:function(e,t,n){n.d(t,{Zb:function(){return k}});var r=n(2322),o=n(1560),i=n(7537),l=n(3716),s=n(3164),a=n(2784);let u=(0,o.z)(s.K,{name:"Card",backgroundColor:"$background",position:"relative",overflow:"hidden",variants:{size:{"...size":(e,{tokens:t})=>({borderRadius:t.radius[e]??e})}},defaultVariants:{size:"$4"}}),d=(0,o.z)(s.K,{name:"CardHeader",zIndex:10,backgroundColor:"transparent",marginBottom:"auto",variants:{size:{"...size":(e,{tokens:t})=>({padding:t.space[e]??e})}}}),c=(0,o.z)(d,{name:"CardFooter",zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}),h=(0,o.z)(s.K,{name:"CardBackground",zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}),k=(0,i.$)(u.extractable((0,a.forwardRef)(({size:e,__scopeCard:t,children:n,...o},i)=>(0,r.jsx)(u,{ref:i,...o,children:a.Children.map(n,t=>(0,l.y)(t)&&!t.props.size?(0,a.cloneElement)(t,{size:e}):t)}))),{Header:d,Footer:c,Background:h})},2029:function(e,t,n){n.d(t,{K:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.x1,{x1:"12",y1:"5",x2:"12",y2:"19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"19 12 12 19 5 12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="ArrowDown";let a=(0,o.memo)((0,l.H)(s))},5503:function(e,t,n){n.d(t,{J:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.aH,{points:"20 6 9 17 4 12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};s.displayName="Check";let a=(0,o.memo)((0,l.H)(s))},1255:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};s.displayName="ChevronLeft";let a=(0,o.memo)((0,l.H)(s))},9941:function(e,t,n){n.d(t,{_:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.aH,{points:"9 18 15 12 9 6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};s.displayName="ChevronRight";let a=(0,o.memo)((0,l.H)(s))},3161:function(e,t,n){n.d(t,{E:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.aH,{points:"16 18 22 12 16 6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"8 6 2 12 8 18",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Code";let a=(0,o.memo)((0,l.H)(s))},3557:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.y$,{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Copy";let a=(0,o.memo)((0,l.H)(s))},5920:function(e,t,n){n.d(t,{x:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.UL,{x:"9",y:"9",width:"6",height:"6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"9",y1:"2",x2:"9",y2:"4",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"15",y1:"2",x2:"15",y2:"4",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"9",y1:"21",x2:"9",y2:"22",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"15",y1:"20",x2:"15",y2:"22",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"20",y1:"9",x2:"22",y2:"9",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"20",y1:"14",x2:"22",y2:"14",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"2",y1:"9",x2:"4",y2:"9",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.x1,{x1:"2",y1:"14",x2:"4",y2:"14",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Cpu";let a=(0,o.memo)((0,l.H)(s))},2930:function(e,t,n){n.d(t,{N:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.mg,{points:"13 19 22 12 13 5 13 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.mg,{points:"2 19 11 12 2 5 2 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="FastForward";let a=(0,o.memo)((0,l.H)(s))},726:function(e,t,n){n.d(t,{S:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.mg,{points:"12 2 2 7 12 12 22 7 12 2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"2 17 12 22 22 17",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.aH,{points:"2 12 12 17 22 12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Layers";let a=(0,o.memo)((0,l.H)(s))},1190:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.y$,{d:"M7 11V7a5 5 0 0 1 10 0v4",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Lock";let a=(0,o.memo)((0,l.H)(s))},3669:function(e,t,n){n.d(t,{M:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"2",y:"4",width:"20",height:"16",rx:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.y$,{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Mail";let a=(0,o.memo)((0,l.H)(s))},7576:function(e,t,n){n.d(t,{$:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.y$,{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.Cd,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="MapPin";let a=(0,o.memo)((0,l.H)(s))},6935:function(e,t,n){n.d(t,{d:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.UL,{x:"6",y:"4",width:"4",height:"16",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.UL,{x:"14",y:"4",width:"4",height:"16",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Pause";let a=(0,o.memo)((0,l.H)(s))},4128:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.mg,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};s.displayName="Play";let a=(0,o.memo)((0,l.H)(s))},5032:function(e,t,n){n.d(t,{F:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsxs)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,r.jsx)(i.mg,{points:"11 19 2 12 11 5 11 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)(i.mg,{points:"22 19 13 12 22 5 22 19",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};s.displayName="Rewind";let a=(0,o.memo)((0,l.H)(s))},2800:function(e,t,n){n.d(t,{U:function(){return a}});var r=n(2322),o=n(2784),i=n(1862),l=n(1618);let s=e=>{let{color:t="black",size:n=24,...o}=e;return(0,r.jsx)(i.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:(0,r.jsx)(i.mg,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};s.displayName="Star";let a=(0,o.memo)((0,l.H)(s))},8682:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(2322),o=n(3630),i=n(4128),l=n(3554),s=n(4697),a=n(8785),u=n(9145);function d(e){let[t,n]=(0,l.T)({strategy:"most-recent-wins",prop:e.position,defaultProp:0}),d=c[t],h=(0,s.z)(()=>{n(e=>(e+1)%c.length)});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.b,{animation:e.animation||"bouncy",onPress:h,size:104,boc:"$borderColor",bw:1,br:"$9",bc:"$color9",hoverStyle:{scale:1.1},pressStyle:{scale:.9},...d,children:e.children||(0,r.jsx)(o.K7,{downscale:.75})}),(0,r.jsx)(u.zx,{pos:"absolute",b:20,l:20,icon:i.s,theme:e.tint,size:"$5",circular:!0,onPress:h})]})}let c=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},1428:function(e,t,n){n.d(t,{O:function(){return l},q:function(){return s}});var r=n(2784),o=n(6030),i=n(4697);function l(e,{once:t,...n}={}){let[i,l]=(0,r.useState)([]);return o.$L&&s(e,e=>{let n=e.some(e=>null==e?void 0:e.isIntersecting);(!t||n)&&l(t=>{let n=e.map(e=>(null==e?void 0:e.isIntersecting)??!1);return t.length===n.length&&t.every((e,t)=>e===n[t])?t:n})},n),Array.isArray(e)?i:i[0]}function s(e,t,{threshold:n=0,root:o,rootMargin:l}={},s=[]){let a=(0,i.z)(t);(0,r.useEffect)(()=>{let t=Array.isArray(e)?e:[e];if(!t.length)return;let r=null,i=[],s=new IntersectionObserver(e=>{i=t.map((t,n)=>e.find(e=>e.target===t.current)??i[n]??null),null==r||r(),r=a(i)||null},{threshold:n,root:o,rootMargin:l});for(let u of t)u.current&&s.observe(u.current);return()=>{null==r||r(),s.disconnect()}},[a,e,o,l,n,...s])}}}]);