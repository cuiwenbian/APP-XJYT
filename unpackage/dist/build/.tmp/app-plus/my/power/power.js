(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/power/power"],{"67db":function(t,e,a){"use strict";var n=a("a945"),o=a.n(n);o.a},"684b":function(t,e,a){"use strict";a.r(e);var n=a("9a16"),o=a("7a4c");for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);a("67db");var u,c=a("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=s.exports},"7a4c":function(t,e,a){"use strict";a.r(e);var n=a("8571"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},8571:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{n:!0,contract:"",hashrate_total:"0",use_avg:"0",cunli:!0}},onLoad:function(){var e=this;t.request({url:this.url+"mycloud/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(a(t," at my\\power\\power.vue:77"));var n=[],o=0,r=0,u=0;t.data.data&&t.data.data.length&&(n=t.data.data.map(function(t){return t.starttime=t.starttime?t.starttime.substring(0,10):"",t.endtime=t.endtime?t.endtime.substring(0,10):"",o+=parseFloat(t.hashrate||0),r+=parseFloat(t.use||0),t}),u=(r/t.data.data.length).toFixed(2)),e.hashrate_total=o,e.use_avg=u,e.contract=n,console.log(a(e.contract," at my\\power\\power.vue:95")),0==e.contract.length&&(e.cunli=!1)}})},methods:{transfer:function(e){console.log(a(e.days," at my\\power\\power.vue:105")),t.request({url:this.url+"cloudtransfer/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(a(n," at my\\power\\power.vue:113")),200==n.statusCode&&t.navigateTo({url:"../power-transfer/power-transfer?ids="+e.id+"&day="+e.days+"&rate="+e.hashrate}),400==n.statusCode&&t.showToast({icon:"none",title:"未实名认证通过或未设置资金密码"})}})},bt:function(){t.navigateBack({delta:1})}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},"9a16":function(t,e,a){"use strict";var n,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"b",function(){return o}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return n})},a945:function(t,e,a){},f09a:function(t,e,a){"use strict";(function(t){a("c860"),a("921b");n(a("66fd"));var e=n(a("684b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["f09a","common/runtime","common/vendor"]]]);