import{f as i,n as k,q as f,o as e,c as t,F as l,r as m,x as y,h as r,a as h,t as d,y as x,s as u,i as g}from"./entry.2d5a7698.js";import{_ as v}from"./Cell.vue.b7dd1bd7.js";const b={class:"flex gap-1em mb-2em"},C=["onClick"],B={class:"text-title"},z=i({__name:"SubNav",setup(c){const p=k(),{path:_}=p,a=f();return(s,n)=>(e(),t("ul",b,[(e(!0),t(l,null,m(r(x),o=>(e(),t("li",{key:o.path,class:y(["cursor-pointer",r(_)===o.path?"text-deep font-bold":"deep-hover"]),onClick:L=>r(a).push(o.path)},[h("span",B,d(o.title),1)],10,C))),128))]))}}),$={class:"text-8em font-bold op-15 absolute -top-0.2em -left-0.3em color-transparent text-stroke-2 text-stroke-hex-aaa"},F=i({__name:"PostList",props:["posts"],setup(c){return(p,_)=>{const a=v;return e(),t("ul",null,[(e(!0),t(l,null,m(c.posts,(s,n)=>(e(),t(l,{key:s._path},[s.isMarked?(e(),t("div",{key:0,class:"relative pointer-events-none select-none h-20","slide-enter":"",style:u({"--stagger":n+1})},[h("span",$,d(s.year),1)],4)):(e(),g(a,{key:1,article:s,"slide-enter":"",style:u({"--stagger":n+1})},null,8,["article","style"]))],64))),128))])}}});export{z as _,F as a};