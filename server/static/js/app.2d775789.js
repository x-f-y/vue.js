(function(){"use strict";var t={6271:function(t,e,n){var i=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Banner"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),n("router-link",{staticClass:"list-group-item",attrs:{replace:!0,"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")]),n("button",{on:{click:t.back}},[t._v("后退")]),n("button",{on:{click:t.forward}},[t._v("前进")]),n("button",{on:{click:t.go}},[t._v("测试一下go")])])])])},s=[],l={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},go(){this.$router.go(-3)}}},u=l,c=n(1001),v=(0,c.Z)(u,a,s,!1,null,null,null),m=v.exports,f={name:"App",components:{Banner:m}},p=f,h=(0,c.Z)(p,r,o,!1,null,null,null),d=h.exports,_=n(2809),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])},y=[],b={name:"Home"},w=b,x=(0,c.Z)(w,g,y,!1,null,null,null),k=x.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("我是About的内容")])])}],E={name:"About",beforeRouteEnter(t,e,n){if(console.log("About--beforeRouteEnter",t,e),t.meta.isAuth){if("atguigu"!==localStorage.getItem("school"))return void alert("学校名不对，无权限查看！");n()}n()},beforeRouteLeave(t,e,n){console.log("About--beforeRouteLeave",t,e),n()}},Z=E,O=(0,c.Z)(Z,$,C,!1,null,null,null),A=O.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"xiangqing",params:{id:e.id,title:e.title},query:{x:123,y:456}}}},[t._v(t._s(e.title))]),t._v("   "),n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("router-view")],1)},j=[],N={name:"Message",data(){return{messageList:[{id:"001",title:"message001"},{id:"002",title:"message002"},{id:"003",title:"message003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",params:{id:t.id,title:t.title},query:{x:123,y:456}})},replaceShow(t){this.$router.replace({name:"xiangqing",params:{id:t.id,title:t.title},query:{x:123,y:456}})}}},R=N,S=(0,c.Z)(R,q,j,!1,null,null,null),L=S.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news001 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news002 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news003 "),n("input",{attrs:{type:"text"}})])}],I={name:"News",data(){return{opacity:1}},activated(){console.log("News组件被激活了"),this.timer=setInterval((()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},M=I,T=(0,c.Z)(M,B,H,!1,null,null,null),D=T.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号："+t._s(t.id))]),n("li",[t._v("消息标题："+t._s(t.title))]),n("li",[t._v(t._s(t.x))]),n("li",[t._v(t._s(t.y))])])},V=[],z={name:"Detail",props:["id","title","x","y"],mounted(){console.log(this.$route)}},F=z,G=(0,c.Z)(F,P,V,!1,null,null,null),J=G.exports,K=new _.Z({mode:"history",routes:[{name:"zhuye",path:"/home",meta:{title:"主页"},component:k,children:[{name:"xinwen",path:"news",component:D,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:L,children:[{name:"xiangqing",path:"detail/:id/:title",meta:{title:"详情"},component:J,props(t){return{id:t.params.id,title:t.params.title,x:t.query.x,y:t.query.y}}}],meta:{isAuth:!0,title:"消息"}}]},{name:"guanyu",path:"/about",meta:{isAuth:!0,title:"关于"},component:A}]});i.Z.config.productionTip=!1,i.Z.use(_.Z),new i.Z({render:t=>t(d),router:K}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(s=!1,o<a&&(a=o));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,a=i[0],s=i[1],l=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(e&&e(i);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6271)}));i=n.O(i)})();
//# sourceMappingURL=app.2d775789.js.map