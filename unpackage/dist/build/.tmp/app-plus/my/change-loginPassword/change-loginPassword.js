(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-loginPassword/change-loginPassword"],{5578:function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isPassword:!0,isPassword1:!0,phone:this.global_.phone,codename:" 获取验证码 ",pwd:"",pwd1:"",iscode:"",code:"",disabled:!1}},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getLoginPassword:function(t){this.pwd=t.detail.value},getLoginPassword1:function(t){this.pwd1=t.detail.value},getCodeValue:function(t){this.code=t.detail.value},show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},other:function(){t.navigateTo({url:"../change-pass/change-pass"})},getCode:function(){var e=this;t.request({url:e.url+"users/login/sms/",method:"POST",data:{mobile:this.phone},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){console.log(o(n," at my\\change-loginPassword\\change-loginPassword.vue:84"));var s=n.statusCode;if(200==s){e.iscode=n.data.data;var i=61,a=setInterval(function(){i--,i<=0?(clearInterval(a),e.codename="重新发送",e.disabled=!1):(e.codename=i+"s",e.disabled=!0)},1e3)}else if(411==s)return t.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}})},getCodeBtn:function(t){this.getCode()},save:function(){if(""==this.pwd)return t.showToast({title:"请输入登录密码",icon:"none",duration:2e3}),!1;var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;return e.test(this.pwd)?""==this.pwd1?(t.showToast({title:"请确认登录密码",icon:"none",duration:2e3}),!1):this.pwd1!==this.pwd?(t.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1):""==this.code?(t.showToast({title:"验证码不能为空",icon:"none",duration:2e3}),!1):this.code!=this.iscode?(t.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1):void t.request({url:this.url+"updataloginpassword/",method:"POST",data:{mobile:this.phone,password:this.pwd,password1:this.pwd1,code:this.code},headers:{"Content-Type":"application/json"},success:function(e){200==e.statusCode&&(t.showToast({title:"登陆密码设置成功",icon:"none",duration:2e3}),t.removeStorageSync("phone"),t.removeStorageSync("token"),t.reLaunch({url:"../../pages/login/login"})),400==e.statusCode&&t.showToast({title:"验证码已过期",icon:"none"})},fail:function(){},complete:function(){}}):(t.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1)}}};e.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},"71c9":function(t,e,o){"use strict";o.r(e);var n=o("9865"),s=o("c20b");for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);o("b005");var a,d=o("f0c5"),c=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=c.exports},9865:function(t,e,o){"use strict";var n,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"b",function(){return s}),o.d(e,"c",function(){return i}),o.d(e,"a",function(){return n})},b005:function(t,e,o){"use strict";var n=o("f413"),s=o.n(n);s.a},c20b:function(t,e,o){"use strict";o.r(e);var n=o("5578"),s=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},e150:function(t,e,o){"use strict";(function(t){o("c860"),o("921b");n(o("66fd"));var e=n(o("71c9"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},f413:function(t,e,o){}},[["e150","common/runtime","common/vendor"]]]);