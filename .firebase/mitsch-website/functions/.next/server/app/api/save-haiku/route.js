"use strict";(()=>{var e={};e.id=765,e.ids=[765],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1473:(e,t,s)=>{let r;s.r(t),s.d(t,{originalPathname:()=>k,patchFetch:()=>x,requestAsyncStorage:()=>m,routeModule:()=>h,serverHooks:()=>v,staticGenerationAsyncStorage:()=>g});var a={};s.r(a),s.d(a,{GET:()=>d,POST:()=>l});var o=s(3278),i=s(5002),n=s(4877);let u=require("mongodb"),c=process.env.MONGODB_URI;if(!process.env.MONGODB_URI)throw Error("Please add your Mongo URI to .env.local");r=new u.MongoClient(c,{}).connect();var p=s(1309);async function d(e){try{let e=await r;console.log("Connected to MongoDB successfully");let t=e.db("MitschWebsite").collection("Haikus"),s=await t.find({}).toArray();return p.NextResponse.json(s||[],{status:200})}catch(e){return console.error("Error in GET /api/haikus:",e),p.NextResponse.json({message:"Error fetching haikus"},{status:500})}}async function l(e){try{let t=(await r).db("MitschWebsite").collection("Haikus"),{haiku:s}=await e.json();if(!s)return p.NextResponse.json({message:"Haiku cannot be empty"},{status:400});return await t.insertOne({haiku:s}),p.NextResponse.json({message:"Haiku added",haiku:s},{status:200})}catch(e){return console.error("Error in POST /api/haikus:",e),p.NextResponse.json({message:"Error adding haiku"},{status:500})}}let h=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/save-haiku/route",pathname:"/api/save-haiku",filename:"route",bundlePath:"app/api/save-haiku/route"},resolvedPagePath:"/Users/miriamschwartz/_miRi/2024_Hamburg-Coding-School/mitsch-website/mitsch-website/app/api/save-haiku/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:v}=h,k="/api/save-haiku/route";function x(){return(0,n.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:g})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[787,833],()=>s(1473));module.exports=r})();