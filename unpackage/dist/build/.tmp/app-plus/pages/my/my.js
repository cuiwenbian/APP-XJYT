(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0c84":function(t,e,n){"use strict";n.r(e);var o=n("9849"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},"59d7":function(t,e,n){"use strict";var o=n("be22"),a=n.n(o);a.a},"8ca3":function(t,e,n){"use strict";n.r(e);var o=n("f137"),a=n("0c84");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("59d7");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=r.exports},9849:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{phone:"",shade:!1,categart:""}},onShow:function(){var e=this;t.request({url:this.url+"home/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){e.categart=t.data.data.categart}})},onLoad:function(){var t=this.global_.phone,e=t.split(""),n=e.slice(0,3).join().replace(/,/g,"")+"****"+e.slice(7,11).join().replace(/,/g,"");this.phone=n},onHide:function(){this.shade=!1},methods:{cancel:function(){this.shade=!1},sure:function(){this.global_.token,t.removeStorageSync("phone"),t.removeStorageSync("token"),t.reLaunch({url:"../login/login"})},power:function(){t.navigateTo({url:"../../my/power/power"})},personal:function(){t.navigateTo({url:"../../my/personal/personal?phone="+this.phone})},wallet:function(){t.navigateTo({url:"../../my/my-wallet/my-wallet"})},trans:function(){t.navigateTo({url:"../mill/mill"})},machinsale:function(){t.navigateTo({url:"../../my/machine-sale/machine-sale"})},address:function(){t.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){400==e.statusCode&&t.showToast({title:"用户未实名认证",icon:"none",duration:2e3}),201==e.statusCode&&t.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),200==e.statusCode&&t.navigateTo({url:"../../my/address/address"}),302==e.statusCode&&t.showToast({title:"用户未设置资金密码",icon:"none",duration:2e3})}})},tradePassword:function(){t.request({url:this.url+"setmoney/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){if(302==e.statusCode)return t.showToast({title:"用户未绑定邮箱",icon:"none",duration:2e3}),!1;400==e.statusCode&&t.navigateTo({url:"../../my/change-password/change-password"}),200==e.statusCode&&t.navigateTo({url:"../../my/trade-password/trade-password"})}})},loginPassword:function(){t.request({url:this.url+"updataloginpassword/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){400==e.statusCode&&t.navigateTo({url:"../../my/change-loginPassword/change-loginPassword"}),200==e.statusCode&&t.navigateTo({url:"../../my/change-pass/change-pass"})}})},bindEmail:function(){t.request({url:this.url+"linkemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){200!=e.statusCode&&201!=e.statusCode||t.navigateTo({url:"../../my/email/email"}),400==e.statusCode&&t.navigateTo({url:"../../my/unbindemail/unbindemail"})}})},suggest:function(){t.navigateTo({url:"../../my/suggest/suggest"})},help:function(){t.showToast({title:"暂未开放",icon:"none",duration:2e3})},certification:function(){t.request({url:this.url+"realname/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){return 202==e.statusCode?(t.showToast({title:"已实名认证",icon:"none",duration:2e3}),!1):205==e.statusCode?(t.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),!1):void(200==e.statusCode&&t.navigateTo({url:"../../my/identity/identity"}))}})},mymachine:function(){t.navigateTo({url:"../../my/my-machine/my-machine"})},logout:function(){this.shade=!0},coupon:function(){t.navigateTo({url:"../../my/coupon/coupon",success:function(t){},fail:function(){},complete:function(){}})},set:function(){t.navigateTo({url:"../set/set"})}}};e.default=n}).call(this,n("6e42")["default"])},aeaa:function(t,e,n){"use strict";(function(t){n("c860"),n("921b");o(n("66fd"));var e=o(n("8ca3"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},be22:function(t,e,n){},f137:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})}},[["aeaa","common/runtime","common/vendor"]]]);