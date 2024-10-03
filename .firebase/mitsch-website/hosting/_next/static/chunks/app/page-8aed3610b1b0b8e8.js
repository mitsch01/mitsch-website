(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5388:function(e,t,n){Promise.resolve().then(n.bind(n,8058)),Promise.resolve().then(n.bind(n,3708)),Promise.resolve().then(n.bind(n,1707)),Promise.resolve().then(n.t.bind(n,8173,23))},8058:function(e,t,n){"use strict";n.d(t,{default:function(){return r}});var l=n(7437),a=n(2265),s=n(7138);function r(){let[e,t]=(0,a.useState)(!1),n=()=>t(!e);return(0,l.jsxs)("header",{className:"fixed top-0 w-full p-16 z-50 flex justify-between items-center transition duration-300",children:[(0,l.jsx)(s.default,{href:"/",children:(0,l.jsx)("div",{className:"clickable text-white font-homemade text-5xl",children:"mitsch"})}),(0,l.jsx)("button",{className:" text-white focus:outline-none",onClick:n,"aria-label":"Open Menu",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),e&&(0,l.jsxs)("div",{className:"fixed inset-0 bg-black z-50 flex flex-col justify-center items-center",children:[(0,l.jsx)("button",{className:"absolute top-16 right-16 text-white text-6xl",onClick:n,"aria-label":"Close Menu",children:"\xd7"}),(0,l.jsx)("div",{className:"clickable absolute top-16 left-16",children:(0,l.jsx)(s.default,{href:"/",children:(0,l.jsx)("div",{className:"font-homemade text-5xl text-white",children:"mitsch"})})}),(0,l.jsxs)("nav",{className:"font-cooperhewitt mt-16 flex flex-col space-y-8 text-center text-white",children:[(0,l.jsx)(s.default,{href:"/",onClick:n,className:"text-6xl font-bold uppercase tracking-wider",children:"Home"}),(0,l.jsx)(s.default,{href:"/#about",onClick:n,className:"text-6xl font-bold uppercase tracking-wider",children:"About"}),(0,l.jsx)(s.default,{href:"/#projects",onClick:n,className:"text-6xl font-bold uppercase tracking-wider",children:"Projects"}),(0,l.jsx)(s.default,{href:"/playground",onClick:n,className:"text-6xl font-bold uppercase tracking-wider",children:"Playground"}),(0,l.jsx)(s.default,{href:"/contact",onClick:n,className:"text-6xl font-bold uppercase tracking-wider",children:"Contact"})]})]})]})}},3708:function(e,t,n){"use strict";var l=n(7437),a=n(2265),s=n(6648),r=n(7138);t.default=()=>{let[e,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=!1,n=()=>{e||(window.requestAnimationFrame(()=>{t(.1*window.scrollY),e=!1}),e=!0)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),(0,l.jsx)(r.default,{href:"/playground",children:(0,l.jsx)("button",{className:"fixed z-10 bottom-8 right-8 focus:outline-none","aria-label":"Create a poem",children:(0,l.jsx)("div",{className:"clickable relative w-36 h-36 transition-transform duration-300 transform hover:scale-125 flex items-center justify-center",style:{transform:"rotate(".concat(e,"deg)"),transition:"transform 0.1s ease-out"},children:(0,l.jsx)(s.default,{src:"/images/create-button.png",alt:"Play Button",width:100,height:100,className:"absolute w-full h-full"})})})})}},1707:function(e,t,n){"use strict";var l=n(7437),a=n(2265),s=n(7138),r=n(6648);t.default=()=>{let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)([]),[o,c]=(0,a.useState)(4),d=(0,a.useRef)(null);(0,a.useEffect)(()=>{(async()=>{let e=await fetch("https://api.github.com/users/".concat("mitsch01","/repos"));t(await e.json())})()},[]),(0,a.useEffect)(()=>{e.length>0&&(async()=>{let t=d.current,n=t.getContext("2d"),l=new window.Image;l.src="/images/sprite-background.png",l.onload=()=>{i(e.map(()=>{let e=Math.floor(Math.random()*(l.width-1e3)),a=Math.floor(Math.random()*(l.height-1e3));return t.width=320,t.height=320,n.drawImage(l,e,a,1e3,1e3,0,0,320,320),t.toDataURL("image/png")}))}})()},[e]);let u=e=>e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,l.jsxs)("div",{className:"flex flex-col items-center py-8",children:[(0,l.jsx)("canvas",{ref:d,style:{display:"none"}}),(0,l.jsx)("div",{className:"flex flex-wrap justify-center",children:e.slice(0,o).map((e,t)=>(0,l.jsxs)(s.default,{href:"/project/".concat(e.name),className:"clickable mr-8 mb-8 w-80 flex flex-col justify-between overflow-hidden transition-transform duration-100 hover:scale-110 hover:rounded",children:[(0,l.jsx)("div",{className:"w-full",children:n[t]?(0,l.jsx)(r.default,{src:n[t],alt:"".concat(e.name," header"),width:320,height:320,className:"w-full h-full object-cover"}):null}),(0,l.jsx)("div",{className:"flex flex-col flex-grow justify-center items-center p-4 bg-black text-center",children:(0,l.jsx)("h3",{className:"text-white font-hind font-bold text-xl",children:u(e.name)})})]},e.id))}),o<e.length&&(0,l.jsx)("button",{onClick:()=>{c(e=>e+4)},className:"text-lg w-80 bg-[#e8175d] text-white py-2 px-4 hover:bg-[#c3144f]",children:"Load More"})]})}},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var l=n(5601),a=n.n(l)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return i}});let l=n(9920),a=n(497),s=n(8173),r=l._(n(1241));function i(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=s.Image}},function(e){e.O(0,[540,971,23,744],function(){return e(e.s=5388)}),_N_E=e.O()}]);