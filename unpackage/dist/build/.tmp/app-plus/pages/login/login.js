(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{1653:function(t,n,e){"use strict";var o=e("d0d8"),a=e.n(o);a.a},"52e8":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"9c8a":function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");o(e("66fd"));var n=o(e("dbfb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},ab89:function(t,n,e){"use strict";e.r(n);var o=e("d0bd"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},d0bd:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{show:!1,phone:"",password:""}},onLoad:function(){},methods:{getPhoneValue:function(t){this.phone=t.detail.value},getPasswordValue:function(t){this.password=t.detail.value},login:function(){var n=this,e=this;if(""==this.phone)return t.showToast({icon:"none",title:"请输入手机号"}),!1;var o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return o.test(this.phone)?this.password?void t.request({url:this.url+"users/login/",method:"POST",data:{mobile:this.phone,password:this.password},headers:{"Content-Type":"application/json"},success:function(o){t.setStorageSync("phone",n.phone),t.setStorageSync("token",o.data.token),e.global_.phone=n.phone,e.global_.token=o.data.token,401==o.statusCode&&t.showToast({title:"用户信息不存在",icon:"none"}),402==o.statusCode&&t.showToast({title:"密码错误",icon:"none"}),200==o.statusCode&&t.reLaunch({url:"../index/index"})},fail:function(){},complete:function(){}}):(t.showToast({title:"请输入密码",icon:"none",duration:2e3}),!1):(t.showToast({title:"请输入正确的手机号",icon:"none",mask:!0,duration:2e3}),!1)},agree:function(){t.navigateTo({url:"../agreement/agreement"})}}};n.default=e}).call(this,e("6e42")["default"])},d0d8:function(t,n,e){},dbfb:function(t,n,e){"use strict";e.r(n);var o=e("52e8"),a=e("ab89");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("1653");var s=e("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports}},[["9c8a","common/runtime","common/vendor"]]]);