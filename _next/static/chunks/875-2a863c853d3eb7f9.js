"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{6186:function(n,e,o){o.d(e,{E:function(){return k}});var t=o(7328),r=o(6297),i=o(2322),s=o(1560),d=o(8694),c=o(6030),a=o(2784),l=o(9291);a.createElement;const u=(0,s.z)(l.Z,{name:"Image",position:"relative",source:{uri:""},zIndex:1}),k=u.extractable((n=>{const e=(0,d.p)(n),{src:o}=e,s=(0,r.Z)(e,["src"]),a="string"===typeof o?(0,t.Z)({uri:o},c.$L&&{width:e.width,height:e.height}):o;return(0,i.jsx)(u,(0,t.Z)({source:a},s))}))},390:function(n,e,o){o.d(e,{r:function(){return d}});var t=o(2322),r=o(6030),i=o(5300),s=o(2784);function d(n){let{children:e,columns:o,itemMinWidth:d=200,gap:c}=n;if(r.$L)return(0,t.jsx)("div",{style:{gap:c,display:"grid",justifyContent:"stretch",gridTemplateColumns:"repeat( auto-fit, minmax(".concat(d,"px, 1fr) )")},children:e});const a=s.Children.toArray(e);return(0,t.jsx)(i.sL,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:a.map(((n,e)=>n?(0,t.jsx)(i.sL,{flex:1,minWidth:d,marginRight:c,marginBottom:c,children:n},e):null))})}},7312:function(n,e,o){o.d(e,{o:function(){return m}});var t=o(7328),r=o(6670),i=o(6297),s=o(2322),d=o(4018),c=o(1560),a=o(4722),l=o(5678),u=o(5300),k=o(2784),h=o(5314),f=o(8033),x=o(4902),p=o(2267);function L({colors:n,locations:e,startPoint:o,endPoint:t,...r}){const[i,s]=k.useState(null),{width:d=1,height:c=1}=i??{},a=`linear-gradient(${k.useMemo((()=>{const[n,e]=(()=>{let n=[0,0];Array.isArray(o)&&(n=[null!=o[0]?o[0]:0,null!=o[1]?o[1]:0]);let e=[0,1];return Array.isArray(t)&&(e=[null!=t[0]?t[0]:0,null!=t[1]?t[1]:1]),[n,e]})();n[0]*=d,e[0]*=d,n[1]*=c,e[1]*=c;const r=e[1]-n[1],i=e[0]-n[0];return 90+180*Math.atan2(r,i)/Math.PI}),[d,c,o,t])}deg, ${k.useMemo((()=>n.map(((n,o)=>{const t=function(n,e=1){if(null==n)return;if("string"===typeof n&&(n=>"currentcolor"===n||"currentColor"===n||"inherit"===n||0===n.indexOf("var("))(n))return n;const o=(0,x.a)(n);if(null!=o)return`rgba(${o>>16&255},${o>>8&255},${255&o},${((o>>24&255)/255*e).toFixed(2)})`}(n);let r=t;if(e&&e[o]){r+=` ${100*Math.max(0,Math.min(1,e[o]))}%`}return r}))),[n,e]).join(",")})`;return k.createElement(p.Z,{...r,style:[r.style,{backgroundImage:a}],onLayout:n=>{const{x:e,y:o,width:t,height:d}=n.nativeEvent.layout,c=i??{x:0,y:0,width:1,height:1};e===c.x&&o===c.y&&t===c.width&&d===c.height||s({x:e,y:o,width:t,height:d}),r.onLayout&&r.onLayout(n)}})}class j extends k.Component{render(){const{colors:n,locations:e,start:o,end:t,...r}=this.props;let i=e;return e&&n.length!==e.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),i=e.slice(0,n.length)),k.createElement(L,{...r,colors:f.Z.select({web:n,default:n.map(x.a)}),locations:i,startPoint:y(o),endPoint:y(t)})}}function y(n){if(n){if(!Array.isArray(n)||2===n.length)return Array.isArray(n)?n:[n.x,n.y];console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}")}}k.createElement;const m=u.FA.extractable((0,d.Y)(k.forwardRef(((n,e)=>{const{start:o,end:d,colors:c,locations:a,children:l}=n,u=(0,i.Z)(n,["start","end","colors","locations","children"]),k=$(c||[]);return(0,s.jsx)(g,(0,r.Z)((0,t.Z)({ref:e},u),{children:(0,s.jsx)(j,{start:o,end:d,colors:k,locations:a,style:[h.Z.absoluteFill],children:l})}))})))),g=(0,c.z)(u.FA,{name:"LinearGradient",overflow:"hidden",position:"relative"}),$=n=>{const e=(0,a.Fg)();return n.map((n=>"$"===n[0]?(0,l.E0)(e[n]||n):n))}},858:function(n,e,o){o.d(e,{Zb:function(){return f}});var t=o(2322),r=o(1560),i=o(7537),s=o(4018),d=o(3716),c=o(9377),a=o(2784);a.createElement;const l=(0,r.z)(c.K,{name:"Card",backgroundColor:"$background",position:"relative",overflow:"hidden",variants:{size:{"...size":(n,{tokens:e})=>({borderRadius:e.radius[n]??n})}},defaultVariants:{size:"$4"}}),u=(0,r.z)(c.K,{name:"CardHeader",zIndex:10,backgroundColor:"transparent",marginBottom:"auto",variants:{size:{"...size":(n,{tokens:e})=>({padding:e.space[n]??n})}}}),k=(0,r.z)(u,{name:"CardFooter",zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}),h=(0,r.z)(c.K,{name:"CardBackground",zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}),f=(0,i.$)(l.extractable((0,s.Y)((0,a.forwardRef)((({size:n,__scopeCard:e,children:o,...r},i)=>(0,t.jsx)(l,{ref:i,...r,children:a.Children.map(o,(e=>(0,d.y)(e)&&!e.props.size?(0,a.cloneElement)(e,{size:n}):e))}))))),{Header:u,Footer:k,Background:h})},2029:function(n,e,o){o.d(e,{K:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.x1,{x1:"12",y1:"5",x2:"12",y2:"19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"19 12 12 19 5 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="ArrowDown";const c=(0,r.memo)((0,s.H)(d))},5503:function(n,e,o){o.d(e,{J:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.aH,{points:"20 6 9 17 4 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Check";const c=(0,r.memo)((0,s.H)(d))},1255:function(n,e,o){o.d(e,{s:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.aH,{points:"15 18 9 12 15 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="ChevronLeft";const c=(0,r.memo)((0,s.H)(d))},9941:function(n,e,o){o.d(e,{_:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.aH,{points:"9 18 15 12 9 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="ChevronRight";const c=(0,r.memo)((0,s.H)(d))},3161:function(n,e,o){o.d(e,{E:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.aH,{points:"16 18 22 12 16 6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"8 6 2 12 8 18",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Code";const c=(0,r.memo)((0,s.H)(d))},3557:function(n,e,o){o.d(e,{C:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.y$,{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Copy";const c=(0,r.memo)((0,s.H)(d))},5920:function(n,e,o){o.d(e,{x:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.UL,{x:"9",y:"9",width:"6",height:"6",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"9",y1:"2",x2:"9",y2:"4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"15",y1:"2",x2:"15",y2:"4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"9",y1:"21",x2:"9",y2:"22",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"15",y1:"20",x2:"15",y2:"22",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"20",y1:"9",x2:"22",y2:"9",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"20",y1:"14",x2:"22",y2:"14",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"2",y1:"9",x2:"4",y2:"9",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.x1,{x1:"2",y1:"14",x2:"4",y2:"14",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Cpu";const c=(0,r.memo)((0,s.H)(d))},2930:function(n,e,o){o.d(e,{N:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.mg,{points:"13 19 22 12 13 5 13 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.mg,{points:"2 19 11 12 2 5 2 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="FastForward";const c=(0,r.memo)((0,s.H)(d))},726:function(n,e,o){o.d(e,{S:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.mg,{points:"12 2 2 7 12 12 22 7 12 2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"2 17 12 22 22 17",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.aH,{points:"2 12 12 17 22 12",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Layers";const c=(0,r.memo)((0,s.H)(d))},1190:function(n,e,o){o.d(e,{H:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.y$,{d:"M7 11V7a5 5 0 0 1 10 0v4",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Lock";const c=(0,r.memo)((0,s.H)(d))},7576:function(n,e,o){o.d(e,{$:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.y$,{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.Cd,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="MapPin";const c=(0,r.memo)((0,s.H)(d))},6935:function(n,e,o){o.d(e,{d:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.UL,{x:"6",y:"4",width:"4",height:"16",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.UL,{x:"14",y:"4",width:"4",height:"16",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Pause";const c=(0,r.memo)((0,s.H)(d))},4128:function(n,e,o){o.d(e,{s:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.mg,{points:"5 3 19 12 5 21 5 3",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Play";const c=(0,r.memo)((0,s.H)(d))},5032:function(n,e,o){o.d(e,{F:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsxs)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[(0,t.jsx)(i.mg,{points:"11 19 2 12 11 5 11 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)(i.mg,{points:"22 19 13 12 22 5 22 19",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})};d.displayName="Rewind";const c=(0,r.memo)((0,s.H)(d))},2800:function(n,e,o){o.d(e,{U:function(){return c}});var t=o(2322),r=o(2784),i=o(3398),s=o(1618);const d=n=>{const{color:e="black",size:o=24,...r}=n;return(0,t.jsx)(i.ny,{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:(0,t.jsx)(i.mg,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${e}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};d.displayName="Star";const c=(0,r.memo)((0,s.H)(d))},8682:function(n,e,o){o.d(e,{Q:function(){return l}});var t=o(2322),r=o(6747),i=o(4128),s=o(3554),d=o(1439),c=o(6669),a=o(9145);function l(n){const[e,o]=(0,s.T)({strategy:"most-recent-wins",prop:n.position,defaultProp:0}),l=u[e],k=(0,d.z)((()=>{o((n=>(n+1)%u.length))}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.b,{focusable:!1,animation:n.animation||"bouncy",onPress:k,size:104,boc:"$backgroundHover",bw:1,br:"$9",bc:"$backgroundStrong",hoverStyle:{scale:1.1},pressStyle:{scale:.9},...l,children:n.children||(0,t.jsx)(r.K7,{downscale:.75})}),(0,t.jsx)(a.zx,{pos:"absolute",b:20,l:20,icon:i.s,theme:n.tint,size:"$5",circular:!0,onPress:k})]})}const u=[{x:0,y:0,scale:1,rotate:"0deg"},{x:-50,y:-50,scale:.5,rotate:"-45deg",hoverStyle:{scale:.6},pressStyle:{scale:.4}},{x:50,y:50,scale:1,rotate:"180deg",hoverStyle:{scale:1.1},pressStyle:{scale:.9}}]},1428:function(n,e,o){o.d(e,{O:function(){return c},q:function(){return a}});var t=o(2784),r=o(6030),i=o(1439),s=o(5378),d=o(941);function c(n,{once:e,...o}={}){const[i,s]=(0,t.useState)([]);return r.$L&&a(n,(n=>{const o=n.some((n=>null==n?void 0:n.isIntersecting));e&&!o||s((e=>{const o=n.map((n=>(null==n?void 0:n.isIntersecting)??!1));return e.length===o.length&&e.every(((n,e)=>n===o[e]))?e:o}))}),o),Array.isArray(n)?i:i[0]}function a(n,e,{threshold:o=0,root:r,rootMargin:c}={},a=[]){const l=(0,i.z)(e),u=(0,s.nj)((0,d.d)());(0,t.useEffect)((()=>{const e=Array.isArray(n)?n:[n];if(!e.length)return;let t=null,i=[];const s=new IntersectionObserver((n=>{i=e.map(((e,o)=>n.find((n=>n.target===e.current))??i[o]??null)),null==t||t(),t=l(i)||null}),{threshold:o,root:r,rootMargin:c});for(const n of e)n.current&&s.observe(n.current);return()=>{null==t||t(),s.disconnect()}}),[u,l,n,r,c,o,...a])}}}]);