import{i as H,r as m,o as l,c as p,a as c,w as a,b as n,d as b,p as C,e as k,f as u,g as z,h as v,j as N,t as U,n as O,k as q,l as S,m as h,F as D,q as ot,T as st,s as X,u as lt,v as it,x as rt,y as at,z as ut,A as ct,B as dt,C as _t}from"./vendor.3b81cf7a.js";const mt=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const _ of d)if(_.type==="childList")for(const s of _.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(d){const _={};return d.integrity&&(_.integrity=d.integrity),d.referrerpolicy&&(_.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?_.credentials="include":d.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function t(d){if(d.ep)return;d.ep=!0;const _=r(d);fetch(d.href,_)}};mt();var f=(e,o)=>{const r=e.__vccOpts||e;for(const[t,d]of o)r[t]=d;return r};const pt={props:{toggleMenuButtonVisible:{type:Boolean,default:!1}},setup(){const e=H("getmenuVisible");return{toggleMenu:()=>{e.value=!e.value}}}},j=e=>(C("data-v-2e7e350b"),e=e(),k(),e),ht={class:"topnav"},vt=j(()=>n("svg",{class:"icon"},[n("use",{"xlink:href":"#icon-psyduck"})],-1)),ft={class:"menu"},gt=u("\u6587\u6863"),bt=j(()=>n("use",{"xlink:href":"#icon-menu"},null,-1)),yt=[bt];function Dt(e,o,r,t,d,_){const s=m("router-link");return l(),p("div",ht,[c(s,{to:"/",class:"logo"},{default:a(()=>[vt]),_:1}),n("ul",ft,[n("li",null,[c(s,{to:"/doc"},{default:a(()=>[gt]),_:1})])]),r.toggleMenuButtonVisible?(l(),p("svg",{key:0,class:"toggleAside",onClick:o[0]||(o[0]=(...i)=>t.toggleMenu&&t.toggleMenu(...i))},yt)):b("",!0)])}var R=f(pt,[["render",Dt],["__scopeId","data-v-2e7e350b"]]);const Bt={components:{Topnav:R}},L=e=>(C("data-v-3baaa652"),e=e(),k(),e),$t={class:"topnavAndBanner"},Ct={class:"banner"},kt=L(()=>n("h1",null,"Psyduck-UI\u6846\u67B6",-1)),Et=L(()=>n("h2",null,"\u4E00\u4E2A\u5389\u5BB3\u7684 UI \u6846\u67B6",-1)),xt={class:"actions"},wt=L(()=>n("a",{href:"https://github.com/pengcheng433/Vite-Vue3-TS/tree/master/Vite%2Bvue3"},"GitHub",-1)),Tt=u("\u5F00\u59CB"),Ft=z('<div class="features" data-v-3baaa652><ul data-v-3baaa652><li data-v-3baaa652><svg data-v-3baaa652><use xlink:href="#icon-vue" data-v-3baaa652></use></svg><h3 data-v-3baaa652>\u57FA\u4E8E Vue 3</h3><p data-v-3baaa652>\u9A84\u50B2\u5730\u4F7F\u7528\u4E86 Vue 3 Composition API</p></li><li data-v-3baaa652><svg data-v-3baaa652><use xlink:href="#icon-ts" data-v-3baaa652></use></svg><h3 data-v-3baaa652>\u57FA\u4E8E TypeScript</h3><p data-v-3baaa652>\u6E90\u4EE3\u7801\u91C7\u7528 TypeScript \u4E66\u5199</p></li><li data-v-3baaa652><svg data-v-3baaa652><use xlink:href="#icon-light" data-v-3baaa652></use></svg><h3 data-v-3baaa652>\u4EE3\u7801\u6613\u8BFB</h3><p data-v-3baaa652>\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u90FD\u6781\u5176\u7B80\u6D01</p></li></ul></div>',1);function It(e,o,r,t,d,_){const s=m("Topnav"),i=m("router-link");return l(),p("div",null,[n("div",$t,[c(s),n("div",Ct,[kt,Et,n("p",xt,[wt,c(i,{to:"/doc"},{default:a(()=>[Tt]),_:1})])])]),Ft])}var Vt=f(Bt,[["render",It],["__scopeId","data-v-3baaa652"]]);const St={components:{Topnav:R},setup(){return{asideVisible:H("getmenuVisible")}}},G=e=>(C("data-v-55dd8ade"),e=e(),k(),e),Ot={class:"layout"},At={class:"content"},Lt={key:0},Pt=G(()=>n("h2",null,"\u6587\u6863",-1)),Kt=u("\u4ECB\u7ECD"),Mt=u("\u5B89\u88C5"),Ht=u("\u5F00\u59CB\u4F7F\u7528"),zt=G(()=>n("h2",null,"\u7EC4\u4EF6\u5217\u8868",-1)),Nt=u("Switch \u7EC4\u4EF6"),Ut=u("Button \u7EC4\u4EF6"),qt=u("Dialog \u7EC4\u4EF6"),Xt=u("Tabs \u7EC4\u4EF6"),jt=u("Input \u7EC4\u4EF6");function Rt(e,o,r,t,d,_){const s=m("Topnav"),i=m("router-link"),g=m("router-view");return l(),p("div",Ot,[c(s,{toggleMenuButtonVisible:!0,class:"nav"}),n("div",At,[t.asideVisible?(l(),p("aside",Lt,[Pt,n("ol",null,[n("li",null,[c(i,{to:"/doc/intro"},{default:a(()=>[Kt]),_:1})]),n("li",null,[c(i,{to:"/doc/install"},{default:a(()=>[Mt]),_:1})]),n("li",null,[c(i,{to:"/doc/get-started"},{default:a(()=>[Ht]),_:1})])]),zt,n("ol",null,[n("li",null,[c(i,{to:"/doc/switch"},{default:a(()=>[Nt]),_:1})]),n("li",null,[c(i,{to:"/doc/button"},{default:a(()=>[Ut]),_:1})]),n("li",null,[c(i,{to:"/doc/dialog"},{default:a(()=>[qt]),_:1})]),n("li",null,[c(i,{to:"/doc/tabs"},{default:a(()=>[Xt]),_:1})]),n("li",null,[c(i,{to:"/doc/input"},{default:a(()=>[jt]),_:1})])])])):b("",!0),n("main",null,[c(g)])])])}var Gt=f(St,[["render",Rt],["__scopeId","data-v-55dd8ade"]]);const Wt={props:{value:{type:Boolean},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e,o){let r=v(null);return N(()=>{}),{toggle:()=>{if(e.disabled||e.loading)return!1;o.emit("update:value",!e.value)},isdata:r}}},Jt={key:0,class:"ui-switch-inner"},Qt={key:1,class:"ui-switch-loadingIndicator"};function Yt(e,o,r,t,d,_){return l(),p("button",{class:O(["ui-switch",{"ui-checked":r.value,"ui-switch-disabled":r.disabled,"ui-switch-loading":r.loading}]),onClick:o[0]||(o[0]=(...s)=>t.toggle&&t.toggle(...s))},[e.$attrs?(l(),p("span",Jt,U(r.value==!0?e.$attrs.checkedValue:e.$attrs.uncheckedValue),1)):b("",!0),r.loading?(l(),p("span",Qt)):b("",!0)],2)}var T=f(Wt,[["render",Yt]]);const Zt={props:{theme:{type:String,default:"button"},size:{type:String,default:"normal"},level:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const{theme:o,size:r,level:t}=e;return{classes:q(()=>({[`ui-theme-${o}`]:o,[`ui-size-${r}`]:r,[`ui-level-${t}`]:t}))}}},tn=["disabled"],nn={key:0,class:"ui-loadingIndicator"};function en(e,o,r,t,d,_){return l(),p("button",{disabled:r.disabled,class:O(["ui-button",t.classes])},[r.loading?(l(),p("span",nn)):b("",!0),S(e.$slots,"default")],10,tn)}var B=f(Zt,[["render",en]]);const on={components:{Switch:T},setup(){return{bool:v(!1)}}};function sn(e,o,r,t,d,_){const s=m("Switch");return l(),h(s,{value:t.bool,"onUpdate:value":o[0]||(o[0]=i=>t.bool=i),disabled:""},null,8,["value"])}var ln=f(on,[["render",sn]]);const rn={components:{Switch:T},setup(){return{bool:v(!1)}}};function an(e,o,r,t,d,_){const s=m("Switch");return l(),h(s,{value:t.bool,"onUpdate:value":o[0]||(o[0]=i=>t.bool=i)},null,8,["value"])}var un=f(rn,[["render",an]]);const cn={components:{Switch:T},setup(){const e=v(!1),o=v(!0);return{bool1:e,bool2:o}}},dn=n("br",null,null,-1);function _n(e,o,r,t,d,_){const s=m("Switch");return l(),p(D,null,[c(s,{value:t.bool1,"onUpdate:value":o[0]||(o[0]=i=>t.bool1=i),checkedValue:"\u5F00",uncheckedValue:"\u5173"},null,8,["value"]),dn,c(s,{value:t.bool2,"onUpdate:value":o[1]||(o[1]=i=>t.bool2=i),checkedValue:"\u5F00",uncheckedValue:"\u5173"},null,8,["value"])],64)}var mn=f(cn,[["render",_n]]);const pn={components:{Switch:T},setup(){const e=v(!1),o=v(!0);return{bool1:e,bool2:o}}},hn=n("br",null,null,-1);function vn(e,o,r,t,d,_){const s=m("Switch");return l(),p(D,null,[c(s,{value:t.bool1,"onUpdate:value":o[0]||(o[0]=i=>t.bool1=i),loading:""},null,8,["value"]),hn,c(s,{value:t.bool2,"onUpdate:value":o[1]||(o[1]=i=>t.bool2=i),loading:""},null,8,["value"])],64)}var fn=f(pn,[["render",vn]]),gn=`\r
<template>\r
<Switch v-model:value="bool" disabled />\r
</template>\r
\r
<script lang="ts">\r
import Switch from '../lib/Switch.vue'\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    Switch,\r
  },\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,bn=`\r
<template>\r
  <Switch  v-model:value="bool"   />\r
</template>\r
\r
<script lang="ts">\r
import Switch from "../lib/Switch.vue";\r
import { ref } from "vue";\r
export default {\r
  components: {\r
    Switch,\r
  },\r
  setup() {\r
    const bool = ref(false);\r
    return {\r
      bool,\r
    };\r
  },\r
};\r
<\/script>`,yn=`\r
<template>\r
  <Switch v-model:value="bool1" checkedValue="\u5F00" uncheckedValue="\u5173" />\r
  <br />\r
  <Switch v-model:value="bool2" checkedValue="\u5F00" uncheckedValue="\u5173" />\r
</template>\r
\r
<script lang="ts">\r
import Switch from "../lib/Switch.vue";\r
import { ref } from "vue";\r
export default {\r
  components: {\r
    Switch,\r
  },\r
  setup() {\r
    const bool1 = ref(false);\r
    const bool2 = ref(true);\r
    return {\r
      bool1,\r
      bool2,\r
    };\r
  },\r
};\r
<\/script>`,Dn=`\r
<template>\r
  <Switch v-model:value="bool1" loading />\r
  <br/>\r
  <Switch v-model:value="bool2" loading />\r
</template>\r
\r
<script lang="ts">\r
import Switch from "../lib/Switch.vue";\r
import { ref } from "vue";\r
export default {\r
  components: {\r
    Switch,\r
  },\r
  setup() {\r
    const bool1 = ref(false);\r
    const bool2 = ref(true);\r
    return {\r
      bool1,\r
      bool2,\r
    };\r
  },\r
};\r
<\/script>`;const Bn=window.Prism,$n={components:{Switch:T,Button:B,Switch1Demo:un,Switch2Demo:ln,Switch3Demo:mn,Switch4Demo:fn},setup(){const e=v(!0),o=v(!1),r=v(!1),t=v(!1);return{Switch4DemoD:Dn,Switch3DemoD:yn,Switch2DemoD:gn,Switch1DemoD:bn,Prism:Bn,routineVisibly:e,disabledVisibly:o,textVisibly:r,loadingVisibly:t,openroutine:()=>{e.value=!e.value},opendisabled:()=>{o.value=!o.value},opentext:()=>{r.value=!r.value},openloading:()=>{t.value=!t.value}}}},F=e=>(C("data-v-7885ba82"),e=e(),k(),e),Cn=F(()=>n("h1",null,"Switch \u7EC4\u4EF6\u793A\u4F8B",-1)),kn={class:"demo"},En=F(()=>n("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1)),xn={class:"demo-component"},wn={class:"demo-actions"},Tn=u("\u67E5\u770B\u4EE3\u7801"),Fn=u("\u9690\u85CF\u4EE3\u7801"),In={class:"demo-code"},Vn=["innerHTML"],Sn={class:"demo"},On=F(()=>n("h2",null,"\u652F\u6301disabled",-1)),An={class:"demo-component"},Ln={class:"demo-actions"},Pn=u("\u67E5\u770B\u4EE3\u7801"),Kn=u("\u9690\u85CF\u4EE3\u7801"),Mn={class:"demo-code"},Hn=["innerHTML"],zn={class:"demo"},Nn=F(()=>n("h2",null,"\u652F\u6301\u6587\u5B57\u63CF\u8FF0",-1)),Un={class:"demo-component"},qn={class:"demo-actions"},Xn=u("\u67E5\u770B\u4EE3\u7801"),jn=u("\u9690\u85CF\u4EE3\u7801"),Rn={class:"demo-code"},Gn=["innerHTML"],Wn={class:"demo"},Jn=F(()=>n("h2",null,"\u652F\u6301Loading",-1)),Qn={class:"demo-component"},Yn={class:"demo-actions"},Zn=u("\u67E5\u770B\u4EE3\u7801"),te=u("\u9690\u85CF\u4EE3\u7801"),ne={class:"demo-code"},ee=["innerHTML"];function oe(e,o,r,t,d,_){const s=m("Switch1Demo"),i=m("Button"),g=m("Switch2Demo"),$=m("Switch3Demo"),y=m("Switch4Demo");return l(),p("div",null,[Cn,n("div",kn,[En,n("div",xn,[c(s)]),n("div",wn,[t.routineVisibly?(l(),h(i,{key:1,onClick:t.openroutine},{default:a(()=>[Fn]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openroutine},{default:a(()=>[Tn]),_:1},8,["onClick"]))]),n("div",In,[t.routineVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Switch1DemoD,t.Prism.languages.html,"html")},null,8,Vn)):b("",!0)])]),n("div",Sn,[On,n("div",An,[c(g)]),n("div",Ln,[t.disabledVisibly?(l(),h(i,{key:1,onClick:t.opendisabled},{default:a(()=>[Kn]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.opendisabled},{default:a(()=>[Pn]),_:1},8,["onClick"]))]),n("div",Mn,[t.disabledVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Switch2DemoD,t.Prism.languages.html,"html")},null,8,Hn)):b("",!0)])]),n("div",zn,[Nn,n("div",Un,[c($)]),n("div",qn,[t.textVisibly?(l(),h(i,{key:1,onClick:t.opentext},{default:a(()=>[jn]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.opentext},{default:a(()=>[Xn]),_:1},8,["onClick"]))]),n("div",Rn,[t.textVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Switch3DemoD,t.Prism.languages.html,"html")},null,8,Gn)):b("",!0)])]),n("div",Wn,[Jn,n("div",Qn,[c(y)]),n("div",Yn,[t.loadingVisibly?(l(),h(i,{key:1,onClick:t.openloading},{default:a(()=>[te]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openloading},{default:a(()=>[Zn]),_:1},8,["onClick"]))]),n("div",ne,[t.loadingVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Switch4DemoD,t.Prism.languages.html,"html")},null,8,ee)):b("",!0)])])])}var se=f($n,[["render",oe],["__scopeId","data-v-7885ba82"]]);const le={components:{Button:B},setup(){return{onClick:()=>{console.log("hi")}}}},ie=u("\u4F60\u597D"),re=u("\u4F60\u597D"),ae=u("\u4F60\u597D"),ue=u("\u4F60\u597D");function ce(e,o,r,t,d,_){const s=m("Button");return l(),p(D,null,[c(s,null,{default:a(()=>[ie]),_:1}),c(s,{theme:"button"},{default:a(()=>[re]),_:1}),c(s,{theme:"link"},{default:a(()=>[ae]),_:1}),c(s,{theme:"text"},{default:a(()=>[ue]),_:1})],64)}var de=f(le,[["render",ce]]),_e=`<template>\r
  <Button>\u4F60\u597D</Button>\r
  <Button theme="button">\u4F60\u597D</Button>\r
  <Button theme="link">\u4F60\u597D</Button>\r
  <Button theme="text">\u4F60\u597D</Button>\r
</template>\r
<script lang="ts">\r
import Button from "../lib/Button.vue";\r
export default {\r
  components: { Button },\r
  setup() {\r
    const onClick = () => {\r
      console.log("hi");\r
    };\r
    return { onClick };\r
  },\r
};\r
<\/script>\r
\r
<style lang="scss" scoped>\r
\r
</style>`;const me={components:{Button:B}},pe=u("\u5927\u5927\u5927"),he=u("\u666E\u666E\u901A"),ve=u("\u5C0F\u5C0F\u5C0F"),fe=u("\u5927\u5927\u5927"),ge=u("\u666E\u666E\u901A"),be=u("\u5C0F\u5C0F\u5C0F"),ye=u("\u5927\u5927\u5927"),De=u("\u666E\u666E\u901A"),Be=u("\u5C0F\u5C0F\u5C0F");function $e(e,o,r,t,d,_){const s=m("Button");return l(),p(D,null,[n("div",null,[c(s,{size:"big"},{default:a(()=>[pe]),_:1}),c(s,null,{default:a(()=>[he]),_:1}),c(s,{size:"small"},{default:a(()=>[ve]),_:1})]),n("div",null,[c(s,{theme:"link",size:"big"},{default:a(()=>[fe]),_:1}),c(s,{theme:"link"},{default:a(()=>[ge]),_:1}),c(s,{size:"small",theme:"link"},{default:a(()=>[be]),_:1})]),n("div",null,[c(s,{size:"big",theme:"text"},{default:a(()=>[ye]),_:1}),c(s,{theme:"text"},{default:a(()=>[De]),_:1}),c(s,{size:"small",theme:"text"},{default:a(()=>[Be]),_:1})])],64)}var Ce=f(me,[["render",$e]]),ke=`<template>\r
  <div>\r
    <Button size="big">\u5927\u5927\u5927</Button>\r
    <Button>\u666E\u666E\u901A</Button>\r
    <Button size="small">\u5C0F\u5C0F\u5C0F</Button>\r
  </div>\r
  <div>\r
    <Button theme="link" size="big">\u5927\u5927\u5927</Button>\r
    <Button theme="link">\u666E\u666E\u901A</Button>\r
    <Button size="small" theme="link">\u5C0F\u5C0F\u5C0F</Button>\r
  </div>\r
  <div>\r
    <Button size="big" theme="text">\u5927\u5927\u5927</Button>\r
    <Button theme="text">\u666E\u666E\u901A</Button>\r
    <Button size="small" theme="text">\u5C0F\u5C0F\u5C0F</Button>\r
  </div>\r
</template>\r
\r
<script>\r
import Button from "../lib/Button.vue";\r
\r
export default {\r
  components: { Button },\r
};\r
<\/script>\r
\r
<style>\r
</style>`;const Ee={components:{Button:B}},xe=u("\u7981\u7528\u6309\u94AE"),we=u("\u7981\u7528\u94FE\u63A5\u6309\u94AE"),Te=u("\u7981\u7528\u6309\u94AE"),Fe=u("\u52A0\u8F7D\u4E2D"),Ie=u("\u52A0\u8F7D\u5B8C\u6BD5"),Ve=u("\u52A0\u8F7D\u4E2D"),Se=u("\u52A0\u8F7D\u5B8C\u6BD5"),Oe=u("\u52A0\u8F7D\u4E2D"),Ae=u("\u52A0\u8F7D\u5B8C\u6BD5");function Le(e,o,r,t,d,_){const s=m("Button");return l(),p(D,null,[n("div",null,[c(s,{disabled:""},{default:a(()=>[xe]),_:1}),c(s,{theme:"link",disabled:!0},{default:a(()=>[we]),_:1}),c(s,{theme:"text",disabled:""},{default:a(()=>[Te]),_:1})]),n("div",null,[c(s,{loading:""},{default:a(()=>[Fe]),_:1}),c(s,null,{default:a(()=>[Ie]),_:1})]),n("div",null,[c(s,{theme:"link",loading:""},{default:a(()=>[Ve]),_:1}),c(s,{theme:"link"},{default:a(()=>[Se]),_:1})]),n("div",null,[c(s,{theme:"text",loading:""},{default:a(()=>[Oe]),_:1}),c(s,{theme:"text"},{default:a(()=>[Ae]),_:1})])],64)}var Pe=f(Ee,[["render",Le]]),Ke=`<template>\r
  <div>\r
    <Button disabled>\u7981\u7528\u6309\u94AE</Button>\r
    <Button theme="link" :disabled="true">\u7981\u7528\u94FE\u63A5\u6309\u94AE</Button>\r
    <Button theme="text" disabled>\u7981\u7528\u6309\u94AE</Button>\r
  </div>\r
  <div>\r
    <Button loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button>\u52A0\u8F7D\u5B8C\u6BD5</Button>\r
  </div>\r
  <div>\r
    <Button theme="link" loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button theme="link">\u52A0\u8F7D\u5B8C\u6BD5</Button>\r
  </div>\r
  <div>\r
    <Button theme="text" loading>\u52A0\u8F7D\u4E2D</Button>\r
    <Button theme="text">\u52A0\u8F7D\u5B8C\u6BD5</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue";\r
\r
export default {\r
  components: { Button },\r
};\r
<\/script>\r
\r
<style>\r
</style>`;const Me=window.Prism,He={components:{Button:B,Button1Demo:de,Button2Demo:Ce,Button3Demo:Pe},setup(){const e=v(!0),o=v(!1),r=v(!1);return{Button1DemoD:_e,Button2DemoD:ke,Button3DemoD:Ke,Prism:Me,routineVisibly:e,staticeVisibly:o,moveVisibly:r,openroutine:()=>{e.value=!e.value},openstatic:()=>{o.value=!o.value},openmove:()=>{r.value=!r.value}}}},A=e=>(C("data-v-7540b99f"),e=e(),k(),e),ze=A(()=>n("h1",null,"Button \u7EC4\u4EF6\u793A\u4F8B",-1)),Ne={class:"demo"},Ue=A(()=>n("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1)),qe={class:"demo-component"},Xe={class:"demo-actions"},je=u("\u67E5\u770B\u4EE3\u7801"),Re=u("\u9690\u85CF\u4EE3\u7801"),Ge={class:"demo-code"},We=["innerHTML"],Je={class:"demo"},Qe=A(()=>n("h2",null,"\u5927\u5C0F\u4E0E\u7C7B\u578B",-1)),Ye={class:"demo-component"},Ze={class:"demo-actions"},to=u("\u67E5\u770B\u4EE3\u7801"),no=u("\u9690\u85CF\u4EE3\u7801"),eo={class:"demo-code"},oo=["innerHTML"],so={class:"demo"},lo=A(()=>n("h2",null,"\u7981\u7528\u72B6\u6001\u4E0E\u52A0\u8F7D\u4E2D",-1)),io={class:"demo-component"},ro={class:"demo-actions"},ao=u("\u67E5\u770B\u4EE3\u7801"),uo=u("\u9690\u85CF\u4EE3\u7801"),co={class:"demo-code"},_o=["innerHTML"];function mo(e,o,r,t,d,_){const s=m("Button1Demo"),i=m("Button"),g=m("Button2Demo"),$=m("Button3Demo");return l(),p(D,null,[ze,n("div",Ne,[Ue,n("div",qe,[c(s)]),n("div",Xe,[t.routineVisibly?(l(),h(i,{key:1,onClick:t.openroutine},{default:a(()=>[Re]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openroutine},{default:a(()=>[je]),_:1},8,["onClick"]))]),n("div",Ge,[t.routineVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Button1DemoD,t.Prism.languages.html,"html")},null,8,We)):b("",!0)])]),n("div",Je,[Qe,n("div",Ye,[c(g)]),n("div",Ze,[t.staticeVisibly?(l(),h(i,{key:1,onClick:t.openstatic},{default:a(()=>[no]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openstatic},{default:a(()=>[to]),_:1},8,["onClick"]))]),n("div",eo,[t.staticeVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Button2DemoD,t.Prism.languages.html,"html")},null,8,oo)):b("",!0)])]),n("div",so,[lo,n("div",io,[c($)]),n("div",ro,[t.moveVisibly?(l(),h(i,{key:1,onClick:t.openmove},{default:a(()=>[uo]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openmove},{default:a(()=>[ao]),_:1},8,["onClick"]))]),n("div",co,[t.moveVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Button3DemoD,t.Prism.languages.html,"html")},null,8,_o)):b("",!0)])])],64)}var po=f(He,[["render",mo],["__scopeId","data-v-7540b99f"]]);const ho={components:{Button:B},props:{visibly:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!1},OK:{type:Function},CANCEL:{type:Function}},setup(e,o){const r=()=>{o.emit("update:visibly",!1)},t=()=>{e.OK()},d=()=>{o.emit("CANCEL"),e.CANCEL(),r()};return ot(()=>e.visibly,_=>{_==!0?document.querySelector("body").setAttribute("style","overflow:hidden;"):document.querySelector("body").setAttribute("style","")}),{close:r,OK:t,CANCEL:d}}},vo={class:"ui-dialog-wrapper"},fo={class:"ui-dialog"},go=u("\u6807\u9898"),bo=n("p",null,"\u9ED8\u8BA4\u63D2\u69FD\u5185\u5BB91",-1),yo=n("p",null,"\u9ED8\u8BA4\u63D2\u69FD\u5185\u5BB92",-1),Do=u("OK"),Bo=u("CANCEL");function $o(e,o,r,t,d,_){const s=m("Button");return r.visibly?(l(),h(st,{key:0,to:"body"},[n("div",{class:"ui-dialog-overlay",onClick:o[0]||(o[0]=i=>r.closeOnClickOverlay==!1?t.close():!1)}),n("div",vo,[n("div",fo,[n("header",null,[S(e.$slots,"title",{},()=>[go]),n("span",{onClick:o[1]||(o[1]=(...i)=>t.close&&t.close(...i)),class:"ui-dialog-close"})]),n("main",null,[S(e.$slots,"main",{},()=>[bo,yo])]),n("footer",null,[c(s,{onClick:t.OK,level:"main"},{default:a(()=>[Do]),_:1},8,["onClick"]),c(s,{onClick:t.CANCEL},{default:a(()=>[Bo]),_:1},8,["onClick"])])])])])):b("",!0)}var x=f(ho,[["render",$o]]);const Co={components:{Button:B,Dialog:x},setup(){const e=v(!1);return{visibly1:e,openDialog1:()=>{e.value=!e.value},exit:()=>{console.log("EXIT")},OK:()=>{console.log("OK")}}}},ko=u("\u6253\u5F001\u5BF9\u8BDD\u6846");function Eo(e,o,r,t,d,_){const s=m("Button"),i=m("Dialog");return l(),p(D,null,[c(s,{onClick:t.openDialog1},{default:a(()=>[ko]),_:1},8,["onClick"]),c(i,{visibly:t.visibly1,"onUpdate:visibly":o[0]||(o[0]=g=>t.visibly1=g),CANCEL:t.exit,OK:t.OK},null,8,["visibly","CANCEL","OK"])],64)}var xo=f(Co,[["render",Eo]]),wo=`<template>\r
  <Button @click="openDialog1">\u6253\u5F001\u5BF9\u8BDD\u6846</Button>\r
  <Dialog v-model:visibly="visibly1" :CANCEL="exit" :OK="OK" />\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "@vue/reactivity";\r
import Button from "../lib/Button.vue";\r
import Dialog from "../lib/Dialog.vue";\r
export default {\r
  components: { Button, Dialog },\r
  setup() {\r
    const visibly1 = ref(false);\r
    const openDialog1 = () => {\r
      visibly1.value = !visibly1.value;\r
    };\r
\r
    const exit = () => {\r
      console.log("EXIT");\r
    };\r
    const OK = () => {\r
      console.log("OK");\r
    };\r
\r
\r
    return {\r
      visibly1,\r
      openDialog1,\r
      exit,\r
      OK,\r
    };\r
  },\r
};\r
<\/script>\r
\r
<style>\r
</style>\r
\r
`;const To={components:{Button:B,Dialog:x},setup(){const e=v(!1);return{visibly2:e,openDialog2:()=>{e.value=!e.value},exit:()=>{console.log("EXIT")},OK:()=>{console.log("OK")}}}},Fo=u("\u6253\u5F002\u5BF9\u8BDD\u6846"),Io=u("\u63D2\u69FD\u6807\u9898"),Vo=n("p",null,"\u63D2\u69FD\u5185\u5BB91",-1),So=n("p",null,"\u63D2\u69FD\u5185\u5BB92",-1);function Oo(e,o,r,t,d,_){const s=m("Button"),i=m("Dialog");return l(),p(D,null,[c(s,{onClick:t.openDialog2},{default:a(()=>[Fo]),_:1},8,["onClick"]),c(i,{visibly:t.visibly2,"onUpdate:visibly":o[0]||(o[0]=g=>t.visibly2=g),CANCEL:t.exit,OK:t.OK},{title:a(()=>[Io]),main:a(()=>[Vo,So]),_:1},8,["visibly","CANCEL","OK"])],64)}var Ao=f(To,[["render",Oo]]),Lo=`<template>\r
  <Button @click="openDialog2">\u6253\u5F002\u5BF9\u8BDD\u6846</Button>\r
  <Dialog v-model:visibly="visibly2"  :CANCEL="exit" :OK="OK">\r
    <template #title>\u63D2\u69FD\u6807\u9898</template>\r
    <template #main>\r
      <p>\u63D2\u69FD\u5185\u5BB91</p>\r
      <p>\u63D2\u69FD\u5185\u5BB92</p>\r
    </template>\r
  </Dialog>\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "@vue/reactivity";\r
import Button from "../lib/Button.vue";\r
import Dialog from "../lib/Dialog.vue";\r
export default {\r
  components: { Button, Dialog },\r
  setup() {\r
    const visibly2 = ref(false);\r
\r
\r
    const exit = () => {\r
      console.log("EXIT");\r
    };\r
    const OK = () => {\r
      console.log("OK");\r
    };\r
    const openDialog2 = () => {\r
      visibly2.value = !visibly2.value;\r
    };\r
\r
    return {\r
      visibly2,\r
      openDialog2,\r
      exit,\r
      OK,\r
    };\r
  },\r
};\r
<\/script>\r
\r
<style>\r
</style>\r
\r
`;const Po={components:{Button:B,Dialog:x},setup(){const e=v(!1);return{visibly3:e,openDialog3:()=>{e.value=!e.value},exit:()=>{console.log("EXIT")},OK:()=>{console.log("OK")}}}},Ko=u("\u6253\u5F003\u5BF9\u8BDD\u6846");function Mo(e,o,r,t,d,_){const s=m("Button"),i=m("Dialog");return l(),p(D,null,[c(s,{onClick:t.openDialog3},{default:a(()=>[Ko]),_:1},8,["onClick"]),c(i,{visibly:t.visibly3,"onUpdate:visibly":o[0]||(o[0]=g=>t.visibly3=g),closeOnClickOverlay:!0,CANCEL:t.exit,OK:t.OK},null,8,["visibly","CANCEL","OK"])],64)}var Ho=f(Po,[["render",Mo]]),zo=`<template>\r
  <Button @click="openDialog3">\u6253\u5F003\u5BF9\u8BDD\u6846</Button>\r
\r
  <Dialog v-model:visibly="visibly3" :closeOnClickOverlay="true" :CANCEL="exit" :OK="OK"></Dialog>\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "@vue/reactivity";\r
import Button from "../lib/Button.vue";\r
import Dialog from "../lib/Dialog.vue";\r
export default {\r
  components: { Button, Dialog },\r
  setup() {\r
    const visibly3 = ref(false);\r
\r
\r
    const exit = () => {\r
      console.log("EXIT");\r
    };\r
    const OK = () => {\r
      console.log("OK");\r
    };\r
    const openDialog3 = () => {\r
      visibly3.value = !visibly3.value;\r
    };\r
\r
    return {\r
      visibly3,\r
      openDialog3,\r
      exit,\r
      OK,\r
    };\r
  },\r
};\r
<\/script>\r
\r
<style>\r
</style>\r
\r
`;const No=e=>{const{title:o,content:r,ok:t,cancel:d}=e,_=document.createElement("div");document.body.appendChild(_);const s=()=>{i.unmount(_),_.remove()},i=X({render(){return lt(x,{visibly:!0,"onUpdate:visibly":g=>{g===!1&&s()},OK:t,CANCEL:d},{title:o,main:r})}});i.mount(_)},Uo={components:{Button:B},setup(){return{showDialog:()=>{No({title:"openDialog\u6807\u9898",content:"openDialog\u4F60\u597D content",ok(){console.log("ok")},cancel(){console.log("cancel")}})}}}},qo=u("\u6253\u5F004\u5BF9\u8BDD\u6846");function Xo(e,o,r,t,d,_){const s=m("Button");return l(),h(s,{onClick:t.showDialog},{default:a(()=>[qo]),_:1},8,["onClick"])}var jo=f(Uo,[["render",Xo]]),Ro=`<template>\r
  <Button @click="showDialog">\u6253\u5F004\u5BF9\u8BDD\u6846</Button>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue";\r
import { openDialog } from "../lib/openDialog";\r
\r
export default {\r
  components: { Button, },\r
  setup() {\r
    const showDialog = () => {\r
      openDialog({\r
        title: "openDialog\u6807\u9898",\r
        content: "openDialog\u4F60\u597D content",\r
        ok() {\r
          console.log("ok");\r
        },\r
        cancel() {\r
          console.log("cancel");\r
        },\r
      });\r
    };\r
\r
    return {\r
\r
      showDialog,\r
\r
    };\r
  },\r
};\r
<\/script>\r
\r
<style>\r
</style>\r
\r
`;const Go={components:{Button:B,Dialog:x},setup(){const e=v(!1),o=v(!1);return{visibly3:e,visibly4:o,exit:()=>{console.log("EXIT")},OK:()=>{console.log("OK")},openDialog3:()=>{e.value=!e.value},openDialog4:()=>{o.value=!o.value}}}},Wo=u("\u6253\u5F004\u5BF9\u8BDD\u6846"),Jo=u("\u63D2\u69FD\u6807\u9898"),Qo=u(" \u70B9\u51FBok\u6253\u5F00\u5D4C\u5957\u5BF9\u8BDD\u6846 "),Yo=u("\u5BF9\u8BDD\u6846\u5185\u7684\u5BF9\u8BDD\u6846"),Zo=n("p",null,"\u5BF9\u8BDD\u6846\u5185\u7684\u5BF9\u8BDD\u6846",-1),ts=n("p",null,"\u5BF9\u8BDD\u6846\u5185\u7684\u5BF9\u8BDD\u6846",-1);function ns(e,o,r,t,d,_){const s=m("Button"),i=m("Dialog");return l(),p(D,null,[c(s,{onClick:t.openDialog3},{default:a(()=>[Wo]),_:1},8,["onClick"]),c(i,{visibly:t.visibly3,"onUpdate:visibly":o[1]||(o[1]=g=>t.visibly3=g),closeOnClickOverlay:!0,CANCEL:t.exit,OK:t.openDialog4},{title:a(()=>[Jo]),main:a(()=>[Qo,c(i,{visibly:t.visibly4,"onUpdate:visibly":o[0]||(o[0]=g=>t.visibly4=g),closeOnClickOverlay:!0,CANCEL:t.exit,OK:t.OK},{title:a(()=>[Yo]),main:a(()=>[Zo,ts]),_:1},8,["visibly","CANCEL","OK"])]),_:1},8,["visibly","CANCEL","OK"])],64)}var es=f(Go,[["render",ns]]),os=`<template>\r
  <Button @click="openDialog3">\u6253\u5F004\u5BF9\u8BDD\u6846</Button>\r
  <Dialog v-model:visibly="visibly3" :closeOnClickOverlay="true" :CANCEL="exit" :OK="openDialog4">\r
    <template #title>\u63D2\u69FD\u6807\u9898</template>\r
    <template #main>\r
      \u70B9\u51FBok\u6253\u5F00\u5D4C\u5957\u5BF9\u8BDD\u6846\r
      <Dialog v-model:visibly="visibly4" :closeOnClickOverlay="true" :CANCEL="exit" :OK="OK">\r
        <template #title>\u5BF9\u8BDD\u6846\u5185\u7684\u5BF9\u8BDD\u6846</template>\r
        <template #main>\r
          <p>\u5BF9\u8BDD\u6846\u5185\u7684\u5BF9\u8BDD\u6846</p>\r
          <p>\u5BF9\u8BDD\u6846\u5185\u7684\u5BF9\u8BDD\u6846</p>\r
        </template>\r
      </Dialog>\r
    </template>\r
  </Dialog>\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "@vue/reactivity";\r
\r
import Button from "../lib/Button.vue";\r
import Dialog from "../lib/Dialog.vue";\r
\r
export default {\r
  components: { Button, Dialog },\r
  setup() {\r
\r
    const visibly3 = ref(false);\r
    const visibly4 = ref(false);\r
    const openDialog3 = () => {\r
      visibly3.value = !visibly3.value;\r
    };\r
\r
    const openDialog4 = () => {\r
      visibly4.value = !visibly4.value;\r
    };\r
\r
\r
\r
    const exit = () => {\r
      console.log("EXIT");\r
    };\r
    const OK = () => {\r
      console.log("OK");\r
    };\r
\r
    return {\r
      visibly3, visibly4,exit,OK,\r
      openDialog3, openDialog4\r
\r
    };\r
  },\r
};\r
<\/script>\r
\r
<style>\r
</style>\r
\r
`;const ss=window.Prism,ls={components:{Button:B,Dialog:x,Dialog1Demo:xo,Dialog2Demo:Ao,Dialog3Demo:Ho,Dialog4Demo:jo,Dialog5Demo:es},setup(){const e=v(!0),o=v(!1),r=v(!1),t=v(!1),d=v(!1);return{Prism:ss,Dialog1DemoD:wo,Dialog2DemoD:Lo,Dialog3DemoD:zo,Dialog4DemoD:Ro,Dialog5DemoD:os,routineVisibly:e,slotVisibly:o,coverVisibly:r,functionVisibly:t,nestVisibly:d,openroutine:()=>{e.value=!e.value},openslot:()=>{o.value=!o.value},opencover:()=>{r.value=!r.value},openfunction:()=>{t.value=!t.value},opennest:()=>{d.value=!d.value}}}},w=e=>(C("data-v-88d1742c"),e=e(),k(),e),is=w(()=>n("h1",null,"Dialog\u7EC4\u4EF6\u793A\u4F8B",-1)),rs={class:"demo"},as=w(()=>n("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1)),us={class:"demo-component"},cs={class:"demo-actions"},ds=u("\u67E5\u770B\u4EE3\u7801"),_s=u("\u9690\u85CF\u4EE3\u7801"),ms={class:"demo-code"},ps=["innerHTML"],hs={class:"demo"},vs=w(()=>n("h2",null,"\u63D2\u69FD\u7528\u6CD5",-1)),fs={class:"demo-component"},gs={class:"demo-actions"},bs=u("\u67E5\u770B\u4EE3\u7801"),ys=u("\u9690\u85CF\u4EE3\u7801"),Ds={class:"demo-code"},Bs=["innerHTML"],$s={class:"demo"},Cs=w(()=>n("h2",null,"\u906E\u76D6\u5C42\u8BBE\u7F6E",-1)),ks={class:"demo-component"},Es={class:"demo-actions"},xs=u("\u67E5\u770B\u4EE3\u7801"),ws=u("\u9690\u85CF\u4EE3\u7801"),Ts={class:"demo-code"},Fs=["innerHTML"],Is={class:"demo"},Vs=w(()=>n("h2",null,"\u51FD\u6570\u542F\u52A8\u5BF9\u8BDD\u6846",-1)),Ss={class:"demo-component"},Os={class:"demo-actions"},As=u("\u67E5\u770B\u4EE3\u7801"),Ls=u("\u9690\u85CF\u4EE3\u7801"),Ps={class:"demo-code"},Ks=["innerHTML"],Ms={class:"demo"},Hs=w(()=>n("h2",null,"\u5D4C\u5957\u5BF9\u8BDD\u6846",-1)),zs={class:"demo-component"},Ns={class:"demo-actions"},Us=u("\u67E5\u770B\u4EE3\u7801"),qs=u("\u9690\u85CF\u4EE3\u7801"),Xs={class:"demo-code"},js=["innerHTML"];function Rs(e,o,r,t,d,_){const s=m("Dialog1Demo"),i=m("Button"),g=m("Dialog2Demo"),$=m("Dialog3Demo"),y=m("Dialog4Demo"),E=m("Dialog5Demo");return l(),p(D,null,[is,n("div",rs,[as,n("div",us,[c(s)]),n("div",cs,[t.routineVisibly?(l(),h(i,{key:1,onClick:t.openroutine},{default:a(()=>[_s]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openroutine},{default:a(()=>[ds]),_:1},8,["onClick"]))]),n("div",ms,[t.routineVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Dialog1DemoD,t.Prism.languages.html,"html")},null,8,ps)):b("",!0)])]),n("div",hs,[vs,n("div",fs,[c(g)]),n("div",gs,[t.slotVisibly?(l(),h(i,{key:1,onClick:t.openslot},{default:a(()=>[ys]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openslot},{default:a(()=>[bs]),_:1},8,["onClick"]))]),n("div",Ds,[t.slotVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Dialog2DemoD,t.Prism.languages.html,"html")},null,8,Bs)):b("",!0)])]),n("div",$s,[Cs,n("div",ks,[c($)]),n("div",Es,[t.coverVisibly?(l(),h(i,{key:1,onClick:t.opencover},{default:a(()=>[ws]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.opencover},{default:a(()=>[xs]),_:1},8,["onClick"]))]),n("div",Ts,[t.coverVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Dialog3DemoD,t.Prism.languages.html,"html")},null,8,Fs)):b("",!0)])]),n("div",Is,[Vs,n("div",Ss,[c(y)]),n("div",Os,[t.functionVisibly?(l(),h(i,{key:1,onClick:t.openfunction},{default:a(()=>[Ls]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openfunction},{default:a(()=>[As]),_:1},8,["onClick"]))]),n("div",Ps,[t.functionVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Dialog4DemoD,t.Prism.languages.html,"html")},null,8,Ks)):b("",!0)])]),n("div",Ms,[Hs,n("div",zs,[c(E)]),n("div",Ns,[t.nestVisibly?(l(),h(i,{key:1,onClick:t.opennest},{default:a(()=>[qs]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.opennest},{default:a(()=>[Us]),_:1},8,["onClick"]))]),n("div",Xs,[t.nestVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Dialog5DemoD,t.Prism.languages.html,"html")},null,8,js)):b("",!0)])])],64)}var Gs=f(ls,[["render",Rs],["__scopeId","data-v-88d1742c"]]);const Ws={};function Js(e,o){return l(),p("div",null,[S(e.$slots,"default")])}var P=f(Ws,[["render",Js]]);const Qs={props:{selected:String},setup(e,o){const r=v([]),t=v(null),d=v(null),_=()=>{const E=r.value.filter(et=>et.classList.contains("selected"))[0],{width:Y}=E.getBoundingClientRect();t.value.style.width=Y+"px";const{left:Z}=d.value.getBoundingClientRect(),{left:tt}=E.getBoundingClientRect(),nt=tt-Z;t.value.style.left=nt+"px"};N(_),it(_);const s=o.slots.default();s.forEach(y=>{if(y.type!=P)throw new Error("Tabs \u7684\u5B50\u6807\u7B7E\u5FC5\u987B\u662FTab")});const i=s.map(y=>y),g=q(()=>s.filter(y=>y.props.title==e.selected)[0]);return{titles:i,Vnode:s,changgeTab:y=>{var E;((E=y==null?void 0:y.props)==null?void 0:E.hasOwnProperty("disabled"))||o.emit("update:selected",y.props.title)},navItems:r,Current:g,indicatorItem:t,container:d}}},Ys={class:"ui-tabs"},Zs={class:"ui-tabs-nav",ref:"container"},tl=["onClick"],nl={ref:"indicatorItem",class:"ui-tabs-nav-indicator"},el={class:"ui-tabs-content"};function ol(e,o,r,t,d,_){return l(),p("div",Ys,[n("div",Zs,[(l(!0),p(D,null,rt(t.titles,(s,i)=>{var g;return l(),p("div",{class:O(["ui-tabs-nav-item",{selected:s.props.title==r.selected,"ui-tabs-nav-item-disabled":(g=s==null?void 0:s.props)==null?void 0:g.hasOwnProperty("disabled")}]),ref_for:!0,ref:$=>{$&&(t.navItems[i]=$)},key:i,onClick:$=>t.changgeTab(s)},U(s.props.title),11,tl)}),128)),n("div",nl,null,512)],512),n("div",el,[(l(),h(at(t.Current),{key:t.Current.props.title}))])])}var W=f(Qs,[["render",ol]]);const sl={components:{Tab:P,Tabs:W},setup(){return{selectedTitle:v("\u5BFC\u822A\u4E00")}}},ll=u("\u5185\u5BB91"),il=u("\u5185\u5BB92");function rl(e,o,r,t,d,_){const s=m("Tab"),i=m("Tabs");return l(),h(i,{selected:t.selectedTitle,"onUpdate:selected":o[0]||(o[0]=g=>t.selectedTitle=g)},{default:a(()=>[c(s,{title:"\u5BFC\u822A\u4E00"},{default:a(()=>[ll]),_:1}),c(s,{title:"\u5BFC\u822A\u4E8C"},{default:a(()=>[il]),_:1})]),_:1},8,["selected"])}var al=f(sl,[["render",rl]]),ul=`<template>\r
  <Tabs v-model:selected="selectedTitle">\r
    <Tab title="\u5BFC\u822A\u4E00">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A\u4E8C">\u5185\u5BB92</Tab>\r
  </Tabs>\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "@vue/reactivity";\r
import Tab from "../lib/Tab.vue";\r
import Tabs from "../lib/Tabs.vue";\r
export default {\r
  components: { Tab, Tabs },\r
  setup() {\r
    const selectedTitle = ref("\u5BFC\u822A\u4E00");\r
    return { selectedTitle };\r
  },\r
};\r
<\/script>\r
\r
<style>\r
</style>`;const cl={components:{Tab:P,Tabs:W},setup(){return{selectedTitle:v("\u5BFC\u822A\u4E00")}}},dl=u("\u5185\u5BB91"),_l=u("\u5185\u5BB92"),ml=u("\u5185\u5BB93");function pl(e,o,r,t,d,_){const s=m("Tab"),i=m("Tabs");return l(),h(i,{selected:t.selectedTitle,"onUpdate:selected":o[0]||(o[0]=g=>t.selectedTitle=g)},{default:a(()=>[c(s,{title:"\u5BFC\u822A\u4E00"},{default:a(()=>[dl]),_:1}),c(s,{title:"\u5BFC\u822A\u4E8C",disabled:""},{default:a(()=>[_l]),_:1}),c(s,{title:"\u5BFC\u822A\u4E09"},{default:a(()=>[ml]),_:1})]),_:1},8,["selected"])}var hl=f(cl,[["render",pl]]),vl=`<template>\r
  <Tabs v-model:selected="selectedTitle">\r
    <Tab title="\u5BFC\u822A\u4E00">\u5185\u5BB91</Tab>\r
    <Tab title="\u5BFC\u822A\u4E8C" disabled>\u5185\u5BB92</Tab>\r
    <Tab title="\u5BFC\u822A\u4E09">\u5185\u5BB93</Tab>\r
  </Tabs>\r
</template>\r
\r
<script lang="ts">\r
import { ref } from "@vue/reactivity";\r
import Tab from "../lib/Tab.vue";\r
import Tabs from "../lib/Tabs.vue";\r
export default {\r
  components: { Tab, Tabs },\r
  setup() {\r
    const selectedTitle = ref("\u5BFC\u822A\u4E00");\r
    return { selectedTitle };\r
  },\r
};\r
<\/script>\r
\r
<style>\r
</style>`;const fl=window.Prism,gl={components:{Tabs1Demo:al,Tabs2Demo:hl,Button:B},setup(){const e=v(!0),o=v(!1);return{Prism:fl,Tabs1DemoD:ul,Tabs2DemoD:vl,routineVisibly:e,disabledVisibly:o,openroutine:()=>{e.value=!e.value},opendisabled:()=>{o.value=!o.value}}}},K=e=>(C("data-v-6ddb5507"),e=e(),k(),e),bl=K(()=>n("h1",null,"Tabs \u7EC4\u4EF6\u793A\u4F8B",-1)),yl={class:"demo"},Dl=K(()=>n("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1)),Bl={class:"demo-component"},$l={class:"demo-actions"},Cl=u("\u67E5\u770B\u4EE3\u7801"),kl=u("\u9690\u85CF\u4EE3\u7801"),El={class:"demo-code"},xl=["innerHTML"],wl={class:"demo"},Tl=K(()=>n("h2",null,"\u7981\u7528\u7528\u6CD5",-1)),Fl={class:"demo-component"},Il={class:"demo-actions"},Vl=u("\u67E5\u770B\u4EE3\u7801"),Sl=u("\u9690\u85CF\u4EE3\u7801"),Ol={class:"demo-code"},Al=["innerHTML"];function Ll(e,o,r,t,d,_){const s=m("Tabs1Demo"),i=m("Button"),g=m("Tabs2Demo");return l(),p(D,null,[bl,n("div",yl,[Dl,n("div",Bl,[c(s)]),n("div",$l,[t.routineVisibly?(l(),h(i,{key:1,onClick:t.openroutine},{default:a(()=>[kl]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openroutine},{default:a(()=>[Cl]),_:1},8,["onClick"]))]),n("div",El,[t.routineVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Tabs1DemoD,t.Prism.languages.html,"html")},null,8,xl)):b("",!0)])]),n("div",wl,[Tl,n("div",Fl,[c(g)]),n("div",Il,[t.disabledVisibly?(l(),h(i,{key:1,onClick:t.opendisabled},{default:a(()=>[Sl]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.opendisabled},{default:a(()=>[Vl]),_:1},8,["onClick"]))]),n("div",Ol,[t.disabledVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Tabs2DemoD,t.Prism.languages.html,"html")},null,8,Al)):b("",!0)])])],64)}var Pl=f(gl,[["render",Ll],["__scopeId","data-v-6ddb5507"]]);const Kl={props:{value:{type:String},size:{type:String,default:"default"},rows:{type:String||Number,default:4}},setup(e,o){const r=o.attrs.placeholder||"",t=g=>{o.emit("update:value",g.target.value)};let d=o.attrs.hasOwnProperty("show-password"),_=o.attrs.hasOwnProperty("type")==!0?o.attrs.type:"";const s=v(!1);return ut(()=>{s.value=d}),{placeholder:r,iptChange:t,ispassword:d,showpass:()=>{s.value=!s.value},ispasswordVisibly:s,istextarea:_}}},Ml={key:0,class:"ui-input-div"},Hl=["placeholder","value","type"],zl=n("svg",null,[n("use",{"xlink:href":"#icon-eye"})],-1),Nl=[zl],Ul={key:1,class:"ui-textarea-area"},ql=["value","placeholder","rows"];function Xl(e,o,r,t,d,_){return t.istextarea!=="textarea"?(l(),p("div",Ml,[n("input",{class:O(["ui-input",`ui-input-size-${r.size}`]),placeholder:t.placeholder,value:r.value,onInput:o[0]||(o[0]=(...s)=>t.iptChange&&t.iptChange(...s)),type:t.ispasswordVisibly==!0?"password":"text"},null,42,Hl),t.ispassword?(l(),p("div",{key:0,onClick:o[1]||(o[1]=(...s)=>t.showpass&&t.showpass(...s)),class:"ui-input__suffix"},Nl)):b("",!0)])):(l(),p("div",Ul,[n("textarea",{class:"ui-textarea",value:r.value,placeholder:t.placeholder,rows:r.rows},null,8,ql)]))}var I=f(Kl,[["render",Xl]]);const jl={components:{Input:I},setup(){return{value:v("\u9ED8\u8BA4\u6587\u672C\u503C")}}};function Rl(e,o,r,t,d,_){const s=m("Input");return l(),h(s,{value:t.value,"onUpdate:value":o[0]||(o[0]=i=>t.value=i),placeholder:"\u8BF7\u8F93\u5165"},null,8,["value"])}var Gl=f(jl,[["render",Rl]]),Wl=`<template>\r
  <Input v-model:value="value" placeholder="\u8BF7\u8F93\u5165"></Input>\r
</template>\r
<script lang="ts">\r
import Input from "../lib/Input.vue";\r
import { ref } from "@vue/reactivity";\r
\r
export default {\r
  components: {\r
    Input,\r
  },\r
  setup() {\r
    const value = ref<any>("\u9ED8\u8BA4\u6587\u672C\u503C");\r
 \r
    return { value,   };\r
  },\r
};\r
<\/script>\r
`;const Jl={components:{Input:I},setup(){}},Ql={class:"mb"},Yl={class:"mb"},Zl={class:"mb"};function ti(e,o,r,t,d,_){const s=m("Input");return l(),p(D,null,[n("div",Ql,[c(s,{placeholder:"large",size:"large"})]),n("div",Yl,[c(s,{placeholder:"default"})]),n("div",Zl,[c(s,{placeholder:"mini",size:"mini"})])],64)}var ni=f(Jl,[["render",ti],["__scopeId","data-v-65a35e7c"]]),ei=`<template>\r
  <div class="mb">\r
    <Input placeholder="large" size="large"></Input>\r
  </div>\r
  <div class="mb">\r
    <Input placeholder="default"></Input>\r
  </div>\r
  <div class="mb">\r
    <Input placeholder="mini" size="mini"></Input>\r
  </div>\r
</template>\r
<script lang="ts">\r
import Input from "../lib/Input.vue";\r
export default {\r
  components: {\r
    Input,\r
  },\r
  setup() {\r
\r
  },\r
};\r
<\/script>\r
<style lang="scss" scoped>\r
.mb {\r
  margin-bottom: 10px;\r
}\r
</style>`;const oi={components:{Input:I},setup(){return{value:v("123456")}}};function si(e,o,r,t,d,_){const s=m("Input");return l(),h(s,{value:t.value,"onUpdate:value":o[0]||(o[0]=i=>t.value=i),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])}var li=f(oi,[["render",si],["__scopeId","data-v-be0c564c"]]),ii=`<template>\r
  <Input v-model:value="value" show-password placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></Input>\r
</template>\r
<script lang="ts">\r
import { ref } from "vue";\r
import Input from "../lib/Input.vue";\r
\r
export default {\r
  components: {\r
    Input,\r
  },\r
  setup() {\r
    const value = ref<any>("123456");\r
\r
\r
    return { value, };\r
  },\r
};\r
<\/script>\r
<style lang="scss" scoped>\r
.mb {\r
  margin-bottom: 10px;\r
}\r
</style>`;const ri={components:{Input:I},setup(){const e=v("\u6587\u672C\u68461"),o=v("\u6587\u672C\u68462");return{value1:e,value2:o}}};function ai(e,o,r,t,d,_){const s=m("Input");return l(),p(D,null,[c(s,{value:t.value1,"onUpdate:value":o[0]||(o[0]=i=>t.value1=i),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"},null,8,["value"]),c(s,{value:t.value2,"onUpdate:value":o[1]||(o[1]=i=>t.value2=i),type:"textarea",rows:6,placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"},null,8,["value"])],64)}var ui=f(ri,[["render",ai],["__scopeId","data-v-5061ad78"]]),ci=`<template>\r
  <Input v-model:value="value1" type="textarea" placeholder="\u8BF7\u8F93\u5165\u6587\u672C"></Input>\r
  <Input v-model:value="value2" type="textarea" :rows="6" placeholder="\u8BF7\u8F93\u5165\u6587\u672C"></Input>\r
</template>\r
<script lang="ts">\r
import { ref } from "vue";\r
import Input from "../lib/Input.vue";\r
\r
export default {\r
  components: {\r
    Input,\r
  },\r
  setup() {\r
    const value1 = ref<any>("\u6587\u672C\u68461");\r
    const value2 = ref<any>("\u6587\u672C\u68462");\r
\r
\r
    return { value1, value2};\r
  },\r
};\r
<\/script>\r
<style lang="scss" scoped>\r
.mb {\r
  margin-bottom: 10px;\r
}\r
</style>`;const di=window.Prism,_i={components:{Button:B,Input:I,Input1Demo:Gl,Input2Demo:ni,Input3Demo:li,Input4Demo:ui},setup(){const e=v(!1),o=v(!1),r=v(!1),t=v(!1);return{Prism:di,routineVisibly:e,sizeVisibly:o,passwordVisibly:r,textareaVisibly:t,openroutine:()=>{e.value=!e.value},opensize:()=>{o.value=!o.value},openpassword:()=>{r.value=!r.value},opentextarea:()=>{t.value=!t.value},Input1DemoD:Wl,Input2DemoD:ei,Input3DemoD:ii,Input4DemoD:ci}}},V=e=>(C("data-v-2a92b88b"),e=e(),k(),e),mi=V(()=>n("h1",null,"Input\u7EC4\u4EF6\u793A\u4F8B",-1)),pi={class:"demo"},hi=V(()=>n("h2",null,"\u5E38\u89C4\u7528\u6CD5",-1)),vi={class:"demo-component"},fi={class:"demo-actions"},gi=u("\u67E5\u770B\u4EE3\u7801"),bi=u("\u9690\u85CF\u4EE3\u7801"),yi={class:"demo-code"},Di=["innerHTML"],Bi={class:"demo"},$i=V(()=>n("h2",null,"\u652F\u6301size",-1)),Ci={class:"demo-component"},ki={class:"demo-actions"},Ei=u("\u67E5\u770B\u4EE3\u7801"),xi=u("\u9690\u85CF\u4EE3\u7801"),wi={class:"demo-code"},Ti=["innerHTML"],Fi={class:"demo"},Ii=V(()=>n("h2",null,"\u652F\u6301\u5BC6\u7801",-1)),Vi={class:"demo-component"},Si={class:"demo-actions"},Oi=u("\u67E5\u770B\u4EE3\u7801"),Ai=u("\u9690\u85CF\u4EE3\u7801"),Li={class:"demo-code"},Pi=["innerHTML"],Ki={class:"demo"},Mi=V(()=>n("h2",null,"\u652F\u6301\u6587\u672C\u6846",-1)),Hi={class:"demo-component"},zi={class:"demo-actions"},Ni=u("\u67E5\u770B\u4EE3\u7801"),Ui=u("\u9690\u85CF\u4EE3\u7801"),qi={class:"demo-code"},Xi=["innerHTML"];function ji(e,o,r,t,d,_){const s=m("Input1Demo"),i=m("Button"),g=m("Input2Demo"),$=m("Input3Demo"),y=m("Input4Demo");return l(),p(D,null,[mi,n("div",pi,[hi,n("div",vi,[c(s)]),n("div",fi,[t.routineVisibly?(l(),h(i,{key:1,onClick:t.openroutine},{default:a(()=>[bi]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openroutine},{default:a(()=>[gi]),_:1},8,["onClick"]))]),n("div",yi,[t.routineVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Input1DemoD,t.Prism.languages.html,"html")},null,8,Di)):b("",!0)])]),n("div",Bi,[$i,n("div",Ci,[c(g)]),n("div",ki,[t.sizeVisibly?(l(),h(i,{key:1,onClick:t.opensize},{default:a(()=>[xi]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.opensize},{default:a(()=>[Ei]),_:1},8,["onClick"]))]),n("div",wi,[t.sizeVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Input2DemoD,t.Prism.languages.html,"html")},null,8,Ti)):b("",!0)])]),n("div",Fi,[Ii,n("div",Vi,[c($)]),n("div",Si,[t.passwordVisibly?(l(),h(i,{key:1,onClick:t.openpassword},{default:a(()=>[Ai]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.openpassword},{default:a(()=>[Oi]),_:1},8,["onClick"]))]),n("div",Li,[t.passwordVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Input3DemoD,t.Prism.languages.html,"html")},null,8,Pi)):b("",!0)])]),n("div",Ki,[Mi,n("div",Hi,[c(y)]),n("div",zi,[t.textareaVisibly?(l(),h(i,{key:1,onClick:t.opentextarea},{default:a(()=>[Ui]),_:1},8,["onClick"])):(l(),h(i,{key:0,onClick:t.opentextarea},{default:a(()=>[Ni]),_:1},8,["onClick"]))]),n("div",qi,[t.textareaVisibly?(l(),p("pre",{key:0,class:"language-html",innerHTML:t.Prism.highlight(t.Input4DemoD,t.Prism.languages.html,"html")},null,8,Xi)):b("",!0)])])],64)}var Ri=f(_i,[["render",ji],["__scopeId","data-v-2a92b88b"]]);const Gi={class:"markdown-body"},Wi=n("h1",null,"\u4ECB\u7ECD",-1),Ji=n("p",null,"Psyduck UI \u662F\u4E00\u6B3E\u57FA\u4E8E Vue 3 \u548C TypeScript \u7684 UI \u7EC4\u4EF6\u5E93\u3002",-1),Qi=n("p",null,"\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u5176\u5B9E\u662F\u6211\u4E3A\u4E86\u4E0A\u624B\u65B0\u6280\u672F\u800C\u5199\u7684\uFF0C\u5168\u7A0B\u4EB2\u624B\u7F16\u5199\uFF0C\u5C3D\u91CF\u4E0D\u91C7\u7528\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5305\u62EC\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u5B98\u7F51\u4E5F\u51E0\u4E4E\u90FD\u662F\u6211\u81EA\u5DF1\u5199\u7684\u3002",-1),Yi=n("p",null,"\u6240\u4EE5\u5982\u679C\u5F3A\u70C8\u4E0D\u5EFA\u8BAE\u4F60\u5C06\u6B64 UI \u5E93\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u4F46\u5982\u679C\u4F60\u662F\u62B1\u7740\u770B\u6E90\u4EE3\u7801\u7684\u76EE\u7684\u6765\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5E93\u8FD8\u662F\u503C\u5F97\u4E00\u770B\u7684\u3002",-1),Zi=n("p",null,[u("\u6E90\u4EE3\u7801\u653E\u5728\u4E86 "),n("a",{href:"https://github.com/pengcheng433/Vite-Vue3-TS"},"https://github.com/pengcheng433/Vite-Vue3-TS"),u(" \u4F60\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002")],-1),tr=n("p",null,[u("\u4E0B\u4E00\u8282\uFF1A"),n("a",{href:"#/doc/install"},"\u5B89\u88C5")],-1),nr=[Wi,Ji,Qi,Yi,Zi,tr],M={setup(e,{expose:o}){return o({frontmatter:{}}),(t,d)=>(l(),p("div",Gi,nr))}},er={components:{Intro:M},data(){return{Intro:M}}};function or(e,o,r,t,d,_){const s=m("Intro",!0);return l(),h(s)}var sr=f(er,[["render",or]]);const lr={class:"markdown-body"},ir=z(`<h1>\u5F00\u59CB\u4F7F\u7528</h1><p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p><p>\u7136\u540E\u5728\u4F60\u7684\u4EE3\u7801\u4E2D\u5199\u5165\u4E0B\u9762\u7684\u4EE3\u7801</p><pre><code>import {Button, Tabs, Switch, Dialog} from &quot;Psyduck-ui&quot;
</code></pre><p>\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u4E86\u3002</p><h2>Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h2><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Button&gt;\u6309\u94AE&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import {Button, Tabs, Switch, Dialog} from &quot;Psyduck-ui&quot;
export default {
  components: {Button}
}
&lt;/script&gt;
</code></pre>`,8),rr=[ir],ar={setup(e,{expose:o}){return o({frontmatter:{}}),(t,d)=>(l(),p("div",lr,rr))}},ur={components:{GetStarted:ar}};function cr(e,o,r,t,d,_){const s=m("GetStarted",!0);return l(),h(s)}var dr=f(ur,[["render",cr]]);const _r={class:"markdown-body"},mr=n("h1",null,"\u5B89\u88C5",-1),pr=n("p",null,"\u6253\u5F00\u7EC8\u7AEF\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A",-1),hr=n("pre",null,[n("code",null,`npm install Psyduck-ui
`)],-1),vr=n("p",null,"\u6216",-1),fr=n("pre",null,[n("code",null,`yarn add Psyduck-ui
`)],-1),gr=n("p",null,[u("\u4E0B\u4E00\u8282\uFF1A"),n("a",{href:"#/doc/get-started"},"\u5F00\u59CB\u4F7F\u7528")],-1),br=[mr,pr,hr,vr,fr,gr],yr={setup(e,{expose:o}){return o({frontmatter:{}}),(t,d)=>(l(),p("div",_r,br))}},Dr={components:{Install:yr}};function Br(e,o,r,t,d,_){const s=m("Install",!0);return l(),h(s)}var $r=f(Dr,[["render",Br]]);const Cr=ct(),J=dt({history:Cr,routes:[{path:"/",component:Vt},{path:"/doc",component:Gt,children:[{path:"intro",component:sr},{path:"get-started",component:dr},{path:"install",component:$r},{path:"switch",component:se},{path:"button",component:po},{path:"dialog",component:Gs},{path:"tabs",component:Pl},{path:"input",component:Ri}]}]}),kr={name:"App",setup(){const e=document.documentElement.clientWidth,o=v(!(e<=500));_t("getmenuVisible",o),J.afterEach(()=>{e<=500&&(o.value=!1)})}};function Er(e,o,r,t,d,_){const s=m("router-view");return l(),h(s)}var xr=f(kr,[["render",Er]]);const Q=X(xr);Q.use(J);Q.mount("#app");
