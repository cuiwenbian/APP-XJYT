(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/email/email"],{3440:function(e,t,n){},"3a18":function(e,t,n){"use strict";n.r(t);var a=n("3b59"),i=n("5dee");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("e5d9");var l=n("2877"),u=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},"3b59":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"5dee":function(e,t,n){"use strict";n.r(t);var a=n("eaf8"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},6286:function(e,t,n){"use strict";(function(e){n("c860"),n("921b");a(n("66fd"));var t=a(n("3a18"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e5d9:function(e,t,n){"use strict";var a=n("3440"),i=n.n(a);i.a},eaf8:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("965e"),o={data:function(){return{email:"",emailCode:"",codename:" 获取验证码",disabled:!1,flag:!0}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getEmailValue:function(e){this.email=e.detail.value},getEmailStyle:function(t){var n=i.checkEmail(this.email);if(!n)return e.showToast({title:"邮箱格式不正确",icon:"none",duration:2e3}),!1},getEmailCode:function(e){this.emailCode=e.detail.value},sendcode:function(){var t=this;if(!t.email)return e.showToast({title:"请输入邮箱",icon:"none",duration:2e3}),!1;var n=i.checkEmail(t.email);if(!n)return e.showToast({title:"邮箱格式不正确",icon:"none",duration:2e3}),!1;e.request({url:this.url+"binding/",method:"POST",data:{email:t.email},success:function(n){if(console.log(a(n," at my\\email\\email.vue:79")),200==n.statusCode)var i=121,o=setInterval(function(){i--,i<=0?(clearInterval(o),t.flag=!0,t.codename="重新发送",t.disabled=!1):(t.flag=!1,t.codename=i+"s",t.disabled=!0)},1e3);if(401==n.statusCode)return e.showToast({title:"该邮箱已被使用",icon:"none",duration:2e3}),!1},fail:function(e){console.log(a(e," at my\\email\\email.vue:107"))}})},save:function(){return""==this.email?(e.showToast({title:"请输入邮箱地址",icon:"none",duration:2e3}),!1):""==this.emailCode?(e.showToast({title:"请输入验证码",icon:"none",duration:2e3}),!1):void e.request({url:this.url+"linkemail/",method:"POST",data:{email:this.email,email_msg:this.emailCode},header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(a(t," at my\\email\\email.vue:140")),200==t.statusCode&&(e.showToast({title:"邮箱已绑定",icon:"none",duration:2e3}),e.switchTab({url:"../my/my"})),400==t.statusCode&&e.showToast({title:"验证码错误",icon:"none",duration:2e3})}})}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["6286","common/runtime","common/vendor"]]]);