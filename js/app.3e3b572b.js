(function(t){function e(e){for(var r,o,l=e[0],c=e[1],s=e[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},i={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0a58":function(t,e,a){t.exports=a.p+"img/dm.7c46f79f.png"},"3a19":function(t,e,a){t.exports=a.p+"img/profile.951763ae.jpg"},"3c4d":function(t,e,a){t.exports=a.p+"img/feature.79e08275.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{absolute:"",color:"teal lighten-3","elevate-on-scroll":"","scroll-target":"#main"}},[a("v-spacer"),a("v-breadcrumbs",{attrs:{items:t.items,large:""},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[a("a",{staticClass:"link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.onClickLink(r.href)}}},[t._v(" "+t._s(r.text)+" ")])]}}])})],1),a("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"main","max-height":"100vh"}},[a("v-main",{staticStyle:{margin:"0px 10px 0px",position:"relative"}},[a("Profile"),a("Career"),a("Products")],1)],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",id:"Profile"}},[a("v-layout",{staticStyle:{display:"block"},attrs:{wrap:"","fill-height":""}},[a("h1",[t._v("Profile")]),a("v-card",{attrs:{tile:"",elevation:"5"}},[a("v-row",{staticStyle:{margin:"10px 10px 0px"}},[a("v-dialog",{attrs:{"max-width":"500",align:"center","align-content":"center"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-avatar",t._g(t._b({staticStyle:{margin:"25px"},attrs:{size:"150"}},"v-avatar",i,!1),r),[a("img",{attrs:{src:t.profile,alt:"profileImg"}})])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("img",{attrs:{src:t.profile,alt:"profileImg",width:"500"}})])],1),a("v-col",[a("div",[a("b",[t._v("Name:")]),t._v(" 斎木翔太")]),a("div",[a("b",[t._v("Birthday(age):")]),t._v(" 2001/02/10 (20)")]),a("div",[a("b",[t._v("Link:")]),a("br"),a("ul",t._l(t.links,(function(e){return a("li",{key:e.site},[a("a",{attrs:{href:e.href}},[t._v(t._s(e.site))])])})),0)])]),a("v-col",[a("h2",[t._v("Self-introduction:")]),a("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 新米Androidエンジニアです。"),a("br"),t._v("SNSアプリやBluetoothで接続されたセンサを制御するアプリを作ってきました。"),a("br"),t._v("新しい技術に日々触れながら、常に成長し続けられるエンジニアでありたいと思っています。 ")])])],1)],1)],1)],1)},l=[],c={name:"Profile",data:function(){return{profile:a("3a19"),links:[{site:"GitHub",href:"https://github.com/shouta02jp"},{site:"Qiita",href:"https://qiita.com/5alt_NaCl"},{site:"Twitter",href:"https://twitter.com/5alt_NaCl"},{site:"Wantedly",href:"https://www.wantedly.com/id/NaCl_5alt"}],dialog:!1}}},s=c,u=a("2877"),p=a("6544"),d=a.n(p),f=a("8212"),v=a("b0af"),g=a("62ad"),m=a("a523"),h=a("169a"),x=a("a722"),y=a("0fd9"),b=Object(u["a"])(s,o,l,!1,null,null,null),_=b.exports;d()(b,{VAvatar:f["a"],VCard:v["a"],VCol:g["a"],VContainer:m["a"],VDialog:h["a"],VLayout:x["a"],VRow:y["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",id:"Career"}},[a("v-layout",{staticStyle:{display:"block"},attrs:{wrap:"","fill-height":""}},[a("h1",[t._v("Career")]),a("v-card",{attrs:{tile:"",elevation:"5"}},t._l(t.career,(function(e){return a("v-row",{key:e.text,staticStyle:{margin:"10px 10px 0px","padding-bottom":"10px"}},[a("div",{staticStyle:{margin:"10px 10px 0px"}},[t._v(" "+t._s(e.date)+": "+t._s(e.text)+" ")])])})),1)],1)],1)},S=[],k={name:"Career",data:function(){return{career:[{date:"2016/04",text:"東京都立産業技術高等専門学校 ものづくり工学科入学"},{date:"2017/10",text:"全国高等専門学校第28回プログラミングコンテスト 課題部門 本選出場"},{date:"2018/08",text:"第24回スーパーコンピューティングコンテスト SuperCon2018 本選出場"},{date:"2019/11",text:"基本情報技術者試験 取得"},{date:"2019/11",text:"Internet Week 2019 NOCチーム"},{date:"2020/11",text:"株式会社レボーン モバイル開発チーム アルバイト入社"},{date:"2021/03",text:"東京都立産業技術高等専門学校 ものづくり工学科卒業"},{date:"2021/04",text:"東京都立産業技術高等専門学校 創造工学専攻 情報工学コース入学"}]}}},V=k,C=Object(u["a"])(V,w,S,!1,null,null,null),P=C.exports;d()(C,{VCard:v["a"],VContainer:m["a"],VLayout:x["a"],VRow:y["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{height:"100vh"},attrs:{fluid:"",id:"Products"}},[a("v-layout",{staticStyle:{display:"block"},attrs:{wrap:"","fill-height":""}},[a("h1",[t._v("Products")]),a("v-card",{attrs:{tile:"",elevation:"5"}},[a("v-row",{staticStyle:{margin:"10px 10px 0px"}},[a("v-col",t._l(t.products,(function(e){return a("div",{key:e.name},[a("v-dialog",{attrs:{"max-width":"400"},scopedSlots:t._u([{key:"activator",fn:function(r){var i=r.on,n=r.attrs;return[a("v-row",t._g(t._b({staticStyle:{cursor:"pointer","margin-top":"10px"},attrs:{align:"center",title:e.name}},"v-row",n,!1),i),[a("v-avatar",{attrs:{size:"72"}},[a("img",{attrs:{src:e.logo,alt:"profileImg"}})]),a("h2",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.name))])],1)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticStyle:{padding:"10px"},attrs:{align:"center","align-content":"center"}},[a("div",{staticStyle:{"font-size":"large",margin:"10px"}},[t._v(" GooglePlayStoreへ移動しますか？ ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){return t.onClickLink(e.link)}}},[t._v("はい")])],1)],1)],1),a("v-row",{staticStyle:{margin:"30px 10px 0px"}},[a("div",{staticStyle:{margin:"10px 0px 20px"}},[t._v(" "+t._s(e.description)+" ")]),a("v-carousel",{attrs:{height:"400",cycle:"","hide-delimiters":"","show-arrows-on-hover":""}},t._l(e.images,(function(t,e){return a("v-carousel-item",{key:e},[a("v-img",{attrs:{src:t.href,alt:t.alt,contain:"","max-height":"400"}})],1)})),1)],1)],1)})),0)],1)],1)],1)],1)},O=[],I={name:"Products",data:function(){return{dialog:!1,products:[{name:"Piperia - 学生専用SNS（ピペリア）",description:"全ての学生にオープンな場所を提供する学生専用SNS",logo:a("7aec"),link:"https://play.google.com/store/apps/details?id=net.piperia.android",images:[{alt:"PiperiaFeature",href:a("3c4d")},{alt:"PiperiaHome",href:a("f98e")},{alt:"PiperiaCommunity",href:a("ba63")},{alt:"PiperiaDM",href:a("0a58")}]}]}},methods:{onClickLink:function(t){this.dialog=!1,window.open(t,"_blank")}}},L=I,N=a("8336"),A=a("99d9"),B=a("5e66"),M=a("3e35"),E=a("adda"),$=a("2fa4"),T=Object(u["a"])(L,j,O,!1,null,null,null),z=T.exports;d()(T,{VAvatar:f["a"],VBtn:N["a"],VCard:v["a"],VCardActions:A["a"],VCarousel:B["a"],VCarouselItem:M["a"],VCol:g["a"],VContainer:m["a"],VDialog:h["a"],VImg:E["a"],VLayout:x["a"],VRow:y["a"],VSpacer:$["a"]});var D={name:"App",methods:{onClickLink:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth"})}},components:{Profile:_,Career:P,Products:z},data:function(){return{items:[{text:"Profile",disabled:!1,href:"Profile",exact:!0},{text:"Career",disabled:!1,href:"Career",exact:!0},{text:"Products",disabled:!1,href:"Products",exact:!0}]}}},R=D,G=(a("034f"),a("7496")),H=a("40dc"),J=a("2bc5"),W=a("f6c4"),q=a("8dd9"),F=Object(u["a"])(R,i,n,!1,null,null,null),Q=F.exports;d()(F,{VApp:G["a"],VAppBar:H["a"],VBreadcrumbs:J["a"],VMain:W["a"],VSheet:q["a"],VSpacer:$["a"]});var K=a("f309");r["a"].use(K["a"]);var U=new K["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:U,render:function(t){return t(Q)}}).$mount("#app")},"7aec":function(t,e,a){t.exports=a.p+"img/logo.7b82ae81.png"},"85ec":function(t,e,a){},ba63:function(t,e,a){t.exports=a.p+"img/community.3342aaa5.png"},f98e:function(t,e,a){t.exports=a.p+"img/home.2cde0ac9.png"}});
//# sourceMappingURL=app.3e3b572b.js.map