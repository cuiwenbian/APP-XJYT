(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/power/power"],{"67db":function(t,a,n){"use strict";var e=n("a945"),o=n.n(e);o.a},"684b":function(t,a,n){"use strict";n.r(a);var e=n("9a16"),o=n("7a4c");for(var r in o)"default"!==r&&function(t){n.d(a,t,function(){return o[t]})}(r);n("67db");var u,c=n("f0c5"),s=Object(c["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);a["default"]=s.exports},"7a4c":function(t,a,n){"use strict";n.r(a);var e=n("8571"),o=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,function(){return e[t]})}(r);a["default"]=o.a},8571:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{n:!0,contract:"",hashrate_total:"0",use_avg:"0",cunli:!0}},onLoad:function(){var a=this;t.request({url:this.url+"mycloud/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(t);var n=[],e=0,o=0,r=0;t.data.data&&t.data.data.length&&(n=t.data.data.map(function(t){return t.starttime=t.starttime?t.starttime.substring(0,10):"",t.endtime=t.endtime?t.endtime.substring(0,10):"",e+=parseFloat(t.hashrate||0),o+=parseFloat(t.use||0),t}),r=(o/t.data.data.length).toFixed(2)),a.hashrate_total=e,a.use_avg=r,a.contract=n,console.log(a.contract),0==a.contract.length&&(a.cunli=!1)}})},methods:{transfer:function(a){console.log(a.days),t.request({url:this.url+"cloudtransfer/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(n),200==n.statusCode&&t.navigateTo({url:"../power-transfer/power-transfer?ids="+a.id+"&day="+a.days+"&rate="+a.hashrate}),400==n.statusCode&&t.showToast({icon:"none",title:"未实名认证通过或未设置资金密码"})}})},bt:function(){t.navigateBack({delta:1})}}};a.default=n}).call(this,n("543d")["default"])},"9a16":function(t,a,n){"use strict";var e,o=function(){var t=this,a=t.$createElement;t._self._c},r=[];n.d(a,"b",function(){return o}),n.d(a,"c",function(){return r}),n.d(a,"a",function(){return e})},a945:function(t,a,n){},f09a:function(t,a,n){"use strict";(function(t){n("c860"),n("921b");e(n("66fd"));var a=e(n("684b"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("543d")["createPage"])}},[["f09a","common/runtime","common/vendor"]]]);