(()=>{var e={};e.id=383,e.ids=[383],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8078:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(8237),s(1375),s(5866);var r=s(3191),i=s(8716),a=s(7922),n=s.n(a),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["playground",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8237)),"/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/app/playground/page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,1375)),"/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/app/playground/page.js"],h="/playground/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/playground/page",pathname:"/playground",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6495:(e,t,s)=>{Promise.resolve().then(s.bind(s,4432)),Promise.resolve().then(s.bind(s,8873)),Promise.resolve().then(s.bind(s,5336))},7885:(e,t,s)=>{Promise.resolve().then(s.bind(s,7230))},7842:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},7230:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(326),i=s(7577),a=s(8873);function n(){let[e,t]=(0,i.useState)([]),[s,n]=(0,i.useState)(""),[l,o]=(0,i.useState)(""),[c,d]=(0,i.useState)(!1),h=async e=>{if(e.preventDefault(),!s.trim())return;d(!0);let r=await fetch("/api/generate-haiku",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:s})}),i=await r.json();r.ok?(o(i.haiku),(await fetch("/api/haikus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({haiku:i.haiku})})).ok&&(t(await fetch("/api/haikus").then(e=>e.json())),n(""),o(""))):o("Error generating haiku"),d(!1)};return(0,r.jsxs)("div",{className:"bg-black min-h-screen flex flex-col",children:[r.jsx(a.default,{}),r.jsx("div",{className:"flex-grow flex justify-center items-center",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsxs)("form",{onSubmit:h,className:"mt-4",children:[r.jsx("input",{type:"text",value:s,onChange:e=>n(e.target.value),className:"p-2 border border-gray-300 rounded",placeholder:"Leave a 3-word prompt..."}),r.jsx("button",{type:"submit",className:"ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700",children:c?"Generating...":"Submit"})]}),l&&(0,r.jsxs)("div",{className:"mt-4 text-white p-2",children:[r.jsx("strong",{children:"Generated Haiku:"}),r.jsx("pre",{children:l})]}),r.jsx("div",{className:"mt-4",children:e.length>0?e.map((e,t)=>(0,r.jsxs)("div",{className:"text-white p-2 border-b border-gray-300",children:[r.jsx("strong",{children:"Haiku:"})," ",e.haiku]},t)):r.jsx("p",{className:"text-white",children:"No haikus yet."})})]})})]})}},4432:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var r=s(326),i=s(434),a=s(6226);function n(){return(0,r.jsxs)("footer",{className:"bg-black text-white p-4",children:[r.jsx("nav",{className:"flex justify-center",children:(0,r.jsxs)("ul",{className:"flex m-6 space-x-4",children:[r.jsx("li",{children:r.jsx(i.default,{href:"https://github.com/mitsch01",target:"_blank","aria-label":"GitHub",className:"hover:opacity-75",children:r.jsx(a.default,{src:"/images/iconmonstr-github-1-24.png",alt:"GitHub",width:50,height:50,className:"w-6 h-6"})})}),r.jsx("li",{children:r.jsx(i.default,{href:"https://www.linkedin.com/in/miriam-schwartz-568aaa30b/",target:"_blank","aria-label":"LinkedIn",className:"hover:opacity-75",children:r.jsx(a.default,{src:"/images/iconmonstr-linkedin-3-24.png",alt:"LinkedIn",width:50,height:50,className:"w-6 h-6"})})})]})}),(0,r.jsxs)("p",{className:"mt-4 text-center",children:["\xa9 ",new Date().getFullYear()," Miriam Schwartz. All rights reserved."]})]})}},8873:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(326),i=s(7577),a=s(434);function n(){let[e,t]=(0,i.useState)(!1),s=()=>t(!e);return(0,r.jsxs)("header",{className:"fixed top-0 w-full p-16 z-50 flex justify-between items-center transition duration-300",children:[r.jsx(a.default,{href:"/",children:r.jsx("div",{className:"clickable text-white font-homemade text-5xl",children:"mitsch"})}),r.jsx("button",{className:" text-white focus:outline-none",onClick:s,"aria-label":"Open Menu",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),e&&(0,r.jsxs)("div",{className:"fixed inset-0 bg-black z-50 flex flex-col justify-center items-center",children:[r.jsx("button",{className:"absolute top-16 right-16 text-white text-6xl",onClick:s,"aria-label":"Close Menu",children:"\xd7"}),r.jsx("div",{className:"clickable absolute top-16 left-16",children:r.jsx(a.default,{href:"/",children:r.jsx("div",{className:"font-homemade text-5xl text-white",children:"mitsch"})})}),(0,r.jsxs)("nav",{className:"font-cooperhewitt mt-16 flex flex-col space-y-8 text-center text-white",children:[r.jsx(a.default,{href:"/",onClick:s,className:"text-6xl font-bold uppercase tracking-wider",children:"Home"}),r.jsx(a.default,{href:"/#about",onClick:s,className:"text-6xl font-bold uppercase tracking-wider",children:"About"}),r.jsx(a.default,{href:"/#projects",onClick:s,className:"text-6xl font-bold uppercase tracking-wider",children:"Projects"}),r.jsx(a.default,{href:"/playground",onClick:s,className:"text-6xl font-bold uppercase tracking-wider",children:"Playground"}),r.jsx(a.default,{href:"/contact",onClick:s,className:"text-6xl font-bold uppercase tracking-wider",children:"Contact"})]})]})]})}},5336:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(326),i=s(7577),a=s(6226),n=s(434);let l=()=>{let[e,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=!1,s=()=>{e||(window.requestAnimationFrame(()=>{t(.1*window.scrollY),e=!1}),e=!0)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),r.jsx(n.default,{href:"/playground",children:r.jsx("button",{className:"fixed z-10 bottom-8 right-8 focus:outline-none","aria-label":"Create a poem",children:r.jsx("div",{className:"clickable relative w-36 h-36 transition-transform duration-300 transform hover:scale-125 flex items-center justify-center",style:{transform:`rotate(${e}deg)`,transition:"transform 0.1s ease-out"},children:r.jsx(a.default,{src:"/images/create-button.png",alt:"Play Button",width:100,height:100,className:"absolute w-full h-full"})})})})}},1375:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>l});var r=s(9510);s(7272),s(6371);var i=s(8570);let a=(0,i.createProxy)(String.raw`/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/components/Footer.js#default`),n=(0,i.createProxy)(String.raw`/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/components/PlayButton.js#default`),l={title:"Mitsch \uD83E\uDD0D Coding",description:"Portfolio Miriam Schwartz",keywords:"fullstack-development, frontend-development, react, nextjs",author:"Miriam Schwartz"};function o({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{children:r.jsx("link",{rel:"icon",href:"/favicon.ico"})}),(0,r.jsxs)("body",{className:"min-h-screen flex flex-col",children:[r.jsx("main",{className:"flex-grow",children:e}),r.jsx(n,{}),r.jsx(a,{})]})]})}},8237:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(8570).createProxy)(String.raw`/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/app/playground/page.js#default`)},6371:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=(0,s(8570).createProxy)(String.raw`/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/components/HeaderWhite.js#default`)},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[276,363],()=>s(8078));module.exports=r})();