(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/agreement/agreement"],{"0b18":function(e,t,a){},"10fd":function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");n(a("66fd"));var t=n(a("a665"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},5629:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"5db6":function(e,t,a){"use strict";var n=a("0b18"),o=a.n(n);o.a},a0e9:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{agreement:"",chnerot:"",flag:!1,fllaag:!1}},onShow:function(){var t=this;e.request({url:this.url+"usermachine/agreement/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at pages\\agreement\\agreement.vue:34")),t.chnerot=e.data.data.user_agreement,t.agreement=e.data.data.agreement,console.log(a(t.agreement," at pages\\agreement\\agreement.vue:37")),0==t.chnerot&&(t.flag=!0)}})},methods:{sss:function(){var t=this;e.request({url:this.url+"usermachine/agreement/",method:"POST",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(a(n," at pages\\agreement\\agreement.vue:55")),200==n.statusCode&&(t.fllaag=!0,t.flag=!1,e.showToast({title:"已阅读并同意协议"}))}})},aaa:function(){e.downloadFile({url:this.url+"media/用户服务协议.pdf",success:function(t){console.log(a(t," at pages\\agreement\\agreement.vue:71")),200===t.statusCode&&(console.log(a("下载成功"," at pages\\agreement\\agreement.vue:73")),e.showToast({title:"下载成功",duration:3e3}))}})}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},a665:function(e,t,a){"use strict";a.r(t);var n=a("5629"),o=a("e3de");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("5db6");var u=a("2877"),s=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},e3de:function(e,t,a){"use strict";a.r(t);var n=a("a0e9"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a}},[["10fd","common/runtime","common/vendor"]]]);