(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{8792:function(n,t,e){},"8d49":function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return o})},"8f08":function(n,t,e){"use strict";e.r(t);var o=e("d451"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a},a559:function(n,t,e){"use strict";(function(n){e("c860"),e("921b");o(e("66fd"));var t=o(e("ea8f"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},c714:function(n,t,e){"use strict";var o=e("8792"),i=e.n(o);i.a},d451:function(n,t,e){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{isHide:!1,n:!0,show:!1,phone:"",password:"",shade:!1}},onLoad:function(){},methods:{autuWXLogin:function(t){if(console.log(n(t," at pages\\login\\login.vue:108")),t.detail.userInfo){var o=this;console.log(n("用户的信息如下："," at pages\\login\\login.vue:113")),console.log(n(t.detail.userInfo," at pages\\login\\login.vue:114")),o.isHide=!1}else e.showModal({title:"警告",content:"您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",showCancel:!1,confirmText:"返回授权",success:function(t){t.confirm&&console.log(n("用户点击了“返回授权”"," at pages\\login\\login.vue:127"))}})},quickLogin:function(){e.redirectTo({url:"../otherLogin/otherLogin"})},forgetPassword:function(){e.navigateTo({url:"../getBackPassword/getBackPassword",animationType:"fade-in",animationDuration:200})},next:function(){this.n=!1},back:function(){this.n=!0},cancel:function(){this.shade=!1},getPhoneValue:function(n){this.phone=n.detail.value},getPasswordValue:function(n){this.password=n.detail.value},sure:function(){e.redirectTo({url:"../register/register"})},login:function(){var n=this,t=this;if(""==this.phone)return e.showToast({icon:"none",title:"请输入手机号"}),!1;var o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return o.test(this.phone)?this.password?void e.request({url:this.url+"users/login/",method:"POST",data:{mobile:this.phone,password:this.password},headers:{"Content-Type":"application/json"},success:function(o){e.setStorageSync("phone",n.phone),e.setStorageSync("token",o.data.token),t.global_.phone=n.phone,t.global_.token=e.getStorageSync("token"),401==o.sthatusCode&&(n.shade=!0),402==o.statusCode&&e.showToast({title:"密码错误",icon:"none"}),200==o.statusCode&&e.reLaunch({url:"../index/index"}),412==o.statusCode&&e.showToast({title:"请用手机短信快速登录,并设置密码",icon:"none"})},fail:function(){},complete:function(){}}):(e.showToast({title:"请输入密码",icon:"none",duration:2e3}),!1):(e.showToast({title:"请输入正确的手机号",icon:"none",mask:!0,duration:2e3}),!1)}}};t.default=o}).call(this,e("0de9")["default"],e("6e42")["default"])},ea8f:function(n,t,e){"use strict";e.r(t);var o=e("8d49"),i=e("8f08");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("c714");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=r.exports}},[["a559","common/runtime","common/vendor"]]]);