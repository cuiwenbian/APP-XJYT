(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"52ba":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return o})},8792:function(t,e,n){},"8f08":function(t,e,n){"use strict";n.r(e);var o=n("d451"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},a559:function(t,e,n){"use strict";(function(t){n("c860"),n("921b");o(n("66fd"));var e=o(n("ea8f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c714:function(t,e,n){"use strict";var o=n("8792"),a=n.n(o);a.a},d451:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{show:!1,phone:"",password:"",shade:!1}},methods:{cancel:function(){this.shade=!1},getPhoneValue:function(t){this.phone=t.detail.value},getPasswordValue:function(t){this.password=t.detail.value},sure:function(){t.navigateTo({url:"../register/register"})},login:function(){var e=this,n=this;if(""==this.phone)return t.showToast({icon:"none",title:"请输入手机号"}),!1;var o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return o.test(this.phone)?this.password?void t.request({url:this.url+"users/login/",method:"POST",data:{mobile:this.phone,password:this.password},headers:{"Content-Type":"application/json"},success:function(o){t.setStorageSync("phone",e.phone),t.setStorageSync("token",o.data.token),n.global_.phone=e.phone,n.global_.token=t.getStorageSync("token"),401==o.sthatusCode&&(e.shade=!0),402==o.statusCode&&t.showToast({title:"密码错误",icon:"none"}),200==o.statusCode&&t.reLaunch({url:"../index/index"}),412==o.statusCode&&t.showToast({title:"请用手机短信快速登录,并设置密码",icon:"none"})},fail:function(){},complete:function(){}}):(t.showToast({title:"请输入密码",icon:"none",duration:2e3}),!1):(t.showToast({title:"请输入正确的手机号",icon:"none",mask:!0,duration:2e3}),!1)},agree:function(){t.navigateTo({url:"../agreement/agreement"})}}};e.default=n}).call(this,n("6e42")["default"])},ea8f:function(t,e,n){"use strict";n.r(e);var o=n("52ba"),a=n("8f08");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("c714");var i,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=r.exports}},[["a559","common/runtime","common/vendor"]]]);