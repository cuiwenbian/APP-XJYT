(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"021f":function(t,e,n){},"31c9":function(t,e,n){"use strict";n.r(e);var o=n("3ef2"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"3ef2":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{phone:""}},onLoad:function(){var t=this.global_.phone,e=t.split(""),n=e.slice(0,3).join().replace(/,/g,"")+"****"+e.slice(7,11).join().replace(/,/g,"");this.phone=n},methods:{personal:function(){t.navigateTo({url:"../../my/personal/personal?phone="+this.phone})},mailaddress:function(){t.request({url:this.url+"linkemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(n(e," at pages\\set\\set.vue:64")),200!=e.statusCode&&201!=e.statusCode||t.navigateTo({url:"../../my/email/email"}),400==e.statusCode&&t.navigateTo({url:"../../my/unbindemail/unbindemail"})}})},authentication:function(){t.request({url:this.url+"realname/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){return console.log(n(e," at pages\\set\\set.vue:86")),202==e.statusCode?(t.showToast({title:"已实名认证",icon:"none",duration:2e3}),!1):205==e.statusCode?(t.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),!1):void(200==e.statusCode&&t.navigateTo({url:"../../my/identity/identity"}))}})},loginpassword:function(){t.request({url:this.url+"updataloginpassword/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){400==e.statusCode&&t.navigateTo({url:"../../my/change-loginPassword/change-loginPassword"}),200==e.statusCode&&t.navigateTo({url:"../../my/change-pass/change-pass"})}})},radepassword:function(){t.request({url:this.url+"setmoney/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){if(302==e.statusCode)return t.showToast({title:"用户未绑定邮箱",icon:"none",duration:2e3}),!1;400==e.statusCode&&t.navigateTo({url:"../../my/change-password/change-password"}),200==e.statusCode&&t.navigateTo({url:"../../my/trade-password/trade-password"})}})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"8ebc":function(t,e,n){"use strict";var o=n("021f"),a=n.n(o);a.a},9770:function(t,e,n){"use strict";n.r(e);var o=n("c1bf"),a=n("31c9");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("8ebc");var u,i=n("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"4cd711a2",null,!1,o["a"],u);e["default"]=r.exports},c1bf:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return o})},dc06:function(t,e,n){"use strict";(function(t){n("c860"),n("921b");o(n("66fd"));var e=o(n("9770"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["dc06","common/runtime","common/vendor"]]]);