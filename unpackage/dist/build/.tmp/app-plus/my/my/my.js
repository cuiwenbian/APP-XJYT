(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/my/my"],{1563:function(t,e,o){"use strict";o.r(e);var n=o("d59e"),a=o("5534");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);o("89f7");var u=o("2877"),i=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"1bcd":function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{phone:"",shade:!1}},onLoad:function(){var t=this.global_.phone,e=t.split(""),o=e.slice(0,3).join().replace(/,/g,"")+"****"+e.slice(7,11).join().replace(/,/g,"");this.phone=o},methods:{cancel:function(){this.shade=!1},sure:function(){this.global_.token,t.reLaunch({url:"../../pages/login/login"})},personal:function(){t.navigateTo({url:"../personal/personal?phone="+this.phone})},wallet:function(){t.navigateTo({url:"../my-wallet/my-wallet"})},address:function(){t.request({url:this.urll+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(o(e," at my\\my\\my.vue:103")),400==e.statusCode&&t.showToast({title:"用户未实名认证",icon:"none",duration:2e3}),200==e.statusCode&&t.navigateTo({url:"../address/address"}),302==e.statusCode&&t.showToast({title:"用户未设置资金密码",icon:"none",duration:2e3})}})},tradePassword:function(){t.request({url:this.urll+"setmoney/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){if(console.log(o(e," at my\\my\\my.vue:137")),302==e.statusCode)return t.showToast({title:"用户未绑定邮箱",icon:"none",duration:2e3}),!1;400==e.statusCode&&t.navigateTo({url:"../change-password/change-password"}),200==e.statusCode&&t.navigateTo({url:"../trade-password/trade-password"})}})},loginPassword:function(){t.request({url:this.urll+"updataloginpassword/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(o(e," at my\\my\\my.vue:168")),400==e.statusCode&&t.navigateTo({url:"../change-loginPassword/change-loginPassword"}),200==e.statusCode&&t.navigateTo({url:"../login-password/login-password"})}})},bindEmail:function(){t.request({url:this.urll+"linkemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(o(e," at my\\my\\my.vue:191")),200!=e.statusCode&&201!=e.statusCode||t.navigateTo({url:"../email/email"}),400==e.statusCode&&t.navigateTo({url:"../unbindemail/unbindemail"})}})},suggest:function(){t.navigateTo({url:"../suggest/suggest"})},certification:function(){t.request({url:this.urll+"realname/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){return console.log(o(e," at my\\my\\my.vue:222")),202==e.statusCode?(t.showToast({title:"已实名认证",icon:"none",duration:2e3}),!1):205==e.statusCode?(t.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),!1):void(200==e.statusCode&&t.navigateTo({url:"../identity/identity"}))}})},mymachine:function(){t.navigateTo({url:"../my-machine/my-machine"})},logout:function(){this.shade=!0}}};e.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},5534:function(t,e,o){"use strict";o.r(e);var n=o("1bcd"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"7eb7":function(t,e,o){"use strict";(function(t){o("5578"),o("921b");n(o("66fd"));var e=n(o("1563"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"89f7":function(t,e,o){"use strict";var n=o("fd42"),a=o.n(n);a.a},d59e:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},fd42:function(t,e,o){}},[["7eb7","common/runtime","common/vendor"]]]);