(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{14:function(e,a,t){Promise.resolve().then(t.bind(t,9096)),Promise.resolve().then(t.bind(t,7572)),Promise.resolve().then(t.bind(t,6487))},8038:function(e,a,t){"use strict";t.d(a,{B9:function(){return c},L5:function(){return o},SR:function(){return i},yL:function(){return d}});var s=t(4660),r=t(4810),l=t(5467),n=t.n(l);let d=(0,s.Ue)((0,r.tJ)(()=>({title:"Mockitup",outerPadding:24,outerCornerRadius:0,innerBorder:0,innerCornerRadius:0,shadowx:0,shadowy:0,shadowz:0,shadowk:-20}),{name:"User Preference"})),i=(0,s.Ue)(e=>({selectedColor:"linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))",setSelectedColor:a=>e({selectedColor:a})})),o=(0,s.Ue)(e=>({image:null,setImage:a=>e({image:a}),isUploaded:!1,setUploaded:a=>e({isUploaded:a}),resetImage:()=>e({image:null,isUploaded:!1})})),c=(0,s.Ue)(e=>({targetDivRef:null,setTargetDivRef:a=>e({targetDivRef:a}),exportImage:()=>{let{targetDivRef:e}=c.getState();if(!e){console.error("Target div reference is not set");return}n().toPng(e).then(e=>{let a=document.createElement("a");a.download="mockitup.png",a.href=e,a.click()}).catch(e=>{console.error("Error exporting image:",e)})}}))},9096:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return o}});var s=t(7437),r=t(8038),l=t(2440);function n(){let{setImage:e}=(0,r.L5)(),{setUploaded:a}=(0,r.L5)(),{getRootProps:t,getInputProps:n}=(0,l.uI)({onDrop:t=>{let s=t[0],r=new FileReader;r.onload=t=>{var s;(null===(s=t.target)||void 0===s?void 0:s.result)&&(e(t.target.result),a(!0))},r.readAsDataURL(s)}});return(0,s.jsx)("div",{...t(),className:"w-72 mx-auto mt-6 justify-center items-center flex h-full",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-32 rounded-xl cursor-pointer bg-zinc-50 hover:bg-zinc-100 border-b",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,s.jsx)("svg",{className:"w-10 h-10 mb-3 text-blue-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),(0,s.jsxs)("p",{className:"mb-2 text-sm text-zinc-500 dark:text-zinc-400",children:[(0,s.jsx)("span",{className:"font-semibold text-blue-500",children:"Click to upload"})," ","or drag and drop"]}),(0,s.jsx)("p",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:"TEST MODE"})]}),(0,s.jsx)("input",{...n(),type:"file",className:"hidden"})]})})}var d=t(2265);function i(){let e=(0,d.useRef)(null),{setTargetDivRef:a}=(0,r.B9)();(0,d.useEffect)(()=>{a(e.current)},[a]);let{image:t}=(0,r.L5)(),{selectedColor:l}=(0,r.SR)(),n=(0,r.yL)(e=>e.outerPadding),i=(0,r.yL)(e=>e.innerBorder),o=(0,r.yL)(e=>e.outerCornerRadius),c=(0,r.yL)(e=>e.innerCornerRadius),u=(0,r.yL)(e=>e.shadowx),x=(0,r.yL)(e=>e.shadowy),m=(0,r.yL)(e=>e.shadowz),f=(0,r.yL)(e=>e.shadowk);return(0,s.jsx)("div",{className:" flex justify-center items-center max-w-xl  mx-auto h-full  ",children:(0,s.jsx)("div",{ref:e,style:{padding:"".concat(n,"px"),borderRadius:"".concat(o,"px"),background:l},children:(0,s.jsx)("div",{className:"bg-zinc-500/70 backdrop-blur-lg",style:{borderRadius:"".concat(c,"px"),padding:"".concat(i,"px"),boxShadow:"".concat(u,"px ").concat(x,"px ").concat(m,"px ").concat(f,"px #000")},children:(0,s.jsx)("img",{src:t||"",alt:"Uploaded",style:{borderRadius:"".concat(c,"px")}})})})})}function o(){let{isUploaded:e}=(0,r.L5)();return(0,s.jsx)("div",{className:"w-full bg-zin-200 py-4 px-8 mb-12",children:e?(0,s.jsx)(i,{}):(0,s.jsx)(n,{})})}},7572:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return _}});var s=t(7437),r=t(2265),l=t(6743),n=t(9213),d=t(1657);let i=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.f,{ref:a,className:(0,d.cn)(i(),t),...r})});o.displayName=l.f.displayName;var c=t(6072);let u=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsxs)(c.fC,{ref:a,className:(0,d.cn)("relative flex w-full touch-none select-none items-center",t),...r,children:[(0,s.jsx)(c.fQ,{className:"relative h-1 w-full grow overflow-hidden rounded-full bg-stone-200 dark:bg-slate-50/20",children:(0,s.jsx)(c.e6,{className:"absolute h-full bg-zinc-800 dark:bg-slate-50"})}),(0,s.jsx)(c.bU,{className:"block h-4 w-4 rounded-full border border-slate-200 border-slate-900/50 bg-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:border-slate-50/50 dark:bg-slate-950 dark:focus-visible:ring-slate-300"})]})});u.displayName=c.fC.displayName;var x=t(9394),m=t(9758);let f=m.fC,h=m.ZA,p=m.B4,g=r.forwardRef((e,a)=>{let{className:t,children:r,...l}=e;return(0,s.jsxs)(m.xz,{ref:a,className:(0,d.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300",t),...l,children:[r,(0,s.jsx)(m.JO,{asChild:!0,children:(0,s.jsx)(x.jnn,{className:"h-4 w-4 opacity-50"})})]})});g.displayName=m.xz.displayName;let b=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(m.u_,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(x.g8U,{})})});b.displayName=m.u_.displayName;let j=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(m.$G,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(x.v4q,{})})});j.displayName=m.$G.displayName;let y=r.forwardRef((e,a)=>{let{className:t,children:r,position:l="popper",...n}=e;return(0,s.jsx)(m.h_,{children:(0,s.jsxs)(m.VY,{ref:a,className:(0,d.cn)(" z-50 p-3 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:l,...n,children:[(0,s.jsx)(b,{}),(0,s.jsx)(m.l_,{className:(0,d.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(j,{})]})})});y.displayName=m.VY.displayName;let v=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(m.__,{ref:a,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",t),...r})});v.displayName=m.__.displayName;let w=r.forwardRef((e,a)=>{let{className:t,children:r,...l}=e;return(0,s.jsxs)(m.ck,{ref:a,className:(0,d.cn)("reltive flex w-ful cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",t),...l,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(m.wU,{children:(0,s.jsx)(x.nQG,{className:"h-4 w-4"})})}),(0,s.jsx)(m.eT,{children:r})]})});w.displayName=m.ck.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(m.Z0,{ref:a,className:(0,d.cn)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800",t),...r})}).displayName=m.Z0.displayName;var N=t(8038);let k=[{value:"color1",label:"Color 1",gradient:"red"},{value:"color2",label:"Color 2",gradient:"linear-gradient(to right, rgba(255, 193, 7, 1), rgba(255, 87, 34, 1))"},{value:"color3",label:"Color 3",gradient:"linear-gradient(to right, rgba(139, 195, 74, 1), rgba(76, 175, 80, 1))"},{value:"color4",label:"Color 4",gradient:"linear-gradient(to right, rgba(255, 87, 34, 1), rgba(255, 193, 7, 1))"},{value:"color5",label:"Color 5",gradient:"linear-gradient(to right, rgba(255, 152, 0, 1), rgba(255, 87, 34, 1))"},{value:"color6",label:"Color 6",gradient:"linear-gradient(to right, rgba(233, 30, 99, 1), rgba(156, 39, 176, 1))"}];function C(){let{selectedColor:e,setSelectedColor:a}=(0,N.SR)();return(0,s.jsxs)(f,{value:e,onValueChange:a,children:[(0,s.jsx)(g,{className:"w[50px]",style:{background:e},children:(0,s.jsx)(p,{placeholder:"Select a color"})}),(0,s.jsx)(y,{className:"w6",children:(0,s.jsxs)(h,{className:"",children:[(0,s.jsx)(v,{children:"Gradients"}),k.map(e=>(0,s.jsx)(w,{value:e.gradient,style:{background:e.gradient},className:"h-6 mb-1.5 rounded hover:scale-95 duration-150"},e.label))]})})]})}var R=t(2490);let L=R.fC,z=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(R.ck,{ref:a,className:(0,d.cn)("border-b",t),...r})});z.displayName="AccordionItem";let S=r.forwardRef((e,a)=>{let{className:t,children:r,...l}=e;return(0,s.jsx)(R.h4,{className:"flex",children:(0,s.jsxs)(R.xz,{ref:a,className:(0,d.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...l,children:[r,(0,s.jsx)(x.v4q,{className:"h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400"})]})})});S.displayName=R.xz.displayName;let V=r.forwardRef((e,a)=>{let{className:t,children:r,...l}=e;return(0,s.jsx)(R.VY,{ref:a,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...l,children:(0,s.jsx)("div",{className:(0,d.cn)("pb-4 pt-0",t),children:r})})});function _(){let e=(0,N.yL)(e=>e.outerCornerRadius),a=(0,N.yL)(e=>e.outerPadding),t=(0,N.yL)(e=>e.innerBorder),r=(0,N.yL)(e=>e.innerCornerRadius),l=(0,N.yL)(e=>e.shadowx),n=(0,N.yL)(e=>e.shadowy),d=(0,N.yL)(e=>e.shadowz),i=(0,N.yL)(e=>e.shadowk);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"py-8 px-6 space-y-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-3",children:"Padding Color"}),(0,s.jsx)(C,{})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"Padding"}),(0,s.jsx)(u,{max:100,step:1,value:[a],onValueChange:e=>{let[a]=e;return N.yL.setState({outerPadding:a})},className:"w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"Outer Corner Radius"}),(0,s.jsx)(u,{max:100,step:1,value:[e],onValueChange:e=>{let[a]=e;return N.yL.setState({outerCornerRadius:a})},className:"w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"Image Border"}),(0,s.jsx)(u,{max:100,step:1,value:[t],onValueChange:e=>{let[a]=e;return N.yL.setState({innerBorder:a})},className:"w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"Image Corner Radius"}),(0,s.jsx)(u,{max:100,step:1,value:[r],onValueChange:e=>{let[a]=e;return N.yL.setState({innerCornerRadius:a})},className:"w-full"})]}),(0,s.jsx)(L,{type:"single",collapsible:!0,className:"w-full",children:(0,s.jsxs)(z,{value:"item-1",children:[(0,s.jsx)(S,{children:"Shadow Options"}),(0,s.jsx)(V,{children:(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"Shadowx"}),(0,s.jsx)(u,{max:100,step:1,value:[l],onValueChange:e=>{let[a]=e;return N.yL.setState({shadowx:a})},className:"w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"Shadowy"}),(0,s.jsx)(u,{max:100,step:1,value:[n],onValueChange:e=>{let[a]=e;return N.yL.setState({shadowy:a})},className:"w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"Shadowz"}),(0,s.jsx)(u,{max:100,step:1,value:[d],onValueChange:e=>{let[a]=e;return N.yL.setState({shadowz:a})},className:"w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o,{className:"text-gray-600 block mb-6",children:"ShadowK"}),(0,s.jsx)(u,{max:100,min:-100,step:1,value:[i],onValueChange:e=>{let[a]=e;return N.yL.setState({shadowk:a})},className:"w-full"})]})]})})]})})]})})}V.displayName=R.VY.displayName},6487:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return C}});var s=t(7437),r=t(2265),l=t(1396),n=t.n(l),d=t(8712),i=t(9394),o=t(1657);let c=d.fC,u=d.xz,x=d.h_;d.x8;let m=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(d.aV,{ref:a,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r})});m.displayName=d.aV.displayName;let f=r.forwardRef((e,a)=>{let{className:t,children:r,...l}=e;return(0,s.jsxs)(x,{children:[(0,s.jsx)(m,{}),(0,s.jsxs)(d.VY,{ref:a,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",t),...l,children:[r,(0,s.jsxs)(d.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",children:[(0,s.jsx)(i.Pxu,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=d.VY.displayName;let h=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",a),...t})};h.displayName="DialogHeader";let p=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t})};p.displayName="DialogFooter";let g=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(d.Dx,{ref:a,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",t),...r})});g.displayName=d.Dx.displayName;let b=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(d.dk,{ref:a,className:(0,o.cn)("text-sm text-slate-500 dark:text-slate-400",t),...r})});b.displayName=d.dk.displayName;var j=t(7256);let y=(0,t(9213).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),v=r.forwardRef((e,a)=>{let{className:t,variant:r,size:l,asChild:n=!1,...d}=e,i=n?j.g7:"button";return(0,s.jsx)(i,{className:(0,o.cn)(y({variant:r,size:l,className:t})),ref:a,...d})});v.displayName="Button";var w=t(8038),N=t(1424);function k(){let{isUploaded:e}=(0,w.L5)(),{resetImage:a}=(0,w.L5)();return(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{disabled:!e,asChild:!0,children:(0,s.jsx)(v,{disabled:!e,variant:"outline",size:"sm",children:"Pick New"})}),(0,s.jsxs)(f,{children:[(0,s.jsxs)(h,{children:[(0,s.jsx)(g,{children:"Are you absolutely sure?"}),(0,s.jsx)(b,{children:"This action cannot be undone. This will delete your uploaded file."})]}),(0,s.jsx)(p,{children:(0,s.jsxs)(d.GG,{children:[" ",(0,s.jsx)(v,{type:"submit",variant:"destructive",onClick:()=>{a(),N.A.success("Deleted Successfully.")},children:"Reset"})]})})]})]})}function C(){let{exportImage:e}=(0,w.B9)();return(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"px-8 py-1.5 max-w-7xl mx-auto flex justify-between border items-center",children:[(0,s.jsx)("div",{children:(0,s.jsxs)(n(),{href:"/",className:"font-medium text-xl font-sans",children:["Mockup ",(0,s.jsx)("span",{className:"text-zinc-400",children:"Editor"})]})}),(0,s.jsxs)("div",{className:"space-x-2",children:[(0,s.jsx)(k,{}),(0,s.jsx)(v,{size:"sm",onClick:e,children:"Export"})]})]})})}},1657:function(e,a,t){"use strict";t.d(a,{cn:function(){return l}});var s=t(7042),r=t(4769);function l(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,r.m6)((0,s.W)(a))}}},function(e){e.O(0,[310,409,668,971,938,744],function(){return e(e.s=14)}),_N_E=e.O()}]);