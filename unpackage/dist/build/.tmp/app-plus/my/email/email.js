(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/email/email"],{"2b24":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},3440:function(e,t,n){},"3a18":function(e,t,n){"use strict";n.r(t);var i=n("2b24"),a=n("5dee");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("e5d9");var l=n("2877"),u=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"5dee":function(e,t,n){"use strict";n.r(t);var i=n("eaf8"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},6286:function(e,t,n){"use strict";(function(e){n("c860"),n("921b");i(n("66fd"));var t=i(n("3a18"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e5d9:function(e,t,n){"use strict";var i=n("3440"),a=n.n(i);a.a},eaf8:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("965e"),o={data:function(){return{email:"",emailCode:"",codename:" 获取验证码",disabled:!1}},methods:{getEmailValue:function(e){this.email=e.detail.value},getEmailStyle:function(t){var n=a.checkEmail(this.email);if(!n)return e.showToast({title:"邮箱格式不正确",icon:"none",duration:2e3}),!1},getEmailCode:function(e){this.emailCode=e.detail.value},sendcode:function(){var t=this;if(!t.email)return e.showToast({title:"请输入邮箱",icon:"none",duration:2e3}),!1;var n=a.checkEmail(t.email);if(!n)return e.showToast({title:"邮箱格式不正确",icon:"none",duration:2e3}),!1;e.request({url:this.url+"binding/",method:"POST",data:{email:t.email},success:function(n){if(console.log(i(n," at my\\email\\email.vue:76")),200==n.statusCode)var a=121,o=setInterval(function(){a--,a<=0?(clearInterval(o),t.codename="重新发送",t.disabled=!1):(t.codename=a+"s",t.disabled=!0)},1e3);if(401==n.statusCode)return e.showToast({title:"该邮箱已被使用",icon:"none",duration:2e3}),!1},fail:function(e){console.log(i(e," at my\\email\\email.vue:102"))}})},save:function(){return""==this.email?(e.showToast({title:"请输入邮箱地址",icon:"none",duration:2e3}),!1):""==this.emailCode?(e.showToast({title:"请输入验证码",icon:"none",duration:2e3}),!1):void e.request({url:this.url+"linkemail/",method:"POST",data:{email:this.email,email_msg:this.emailCode},header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(i(t," at my\\email\\email.vue:135")),200==t.statusCode&&(e.showToast({title:"邮箱已绑定",icon:"none",duration:2e3}),e.switchTab({url:"../my/my"}))}})}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["6286","common/runtime","common/vendor"]]]);