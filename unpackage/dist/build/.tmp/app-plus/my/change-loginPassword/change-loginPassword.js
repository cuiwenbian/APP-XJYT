(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-loginPassword/change-loginPassword"],{3294:function(e,t,o){},"71c9":function(e,t,o){"use strict";o.r(t);var n=o("eaa2"),s=o("c20b");for(var a in s)"default"!==a&&function(e){o.d(t,e,function(){return s[e]})}(a);o("b005");var i=o("2877"),d=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},"75c2":function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isPassword:!0,isPassword1:!0,phone:this.global_.phone,codename:" 获取验证码 ",pwd:"",pwd1:"",iscode:"",code:"",disabled:!1,flag:!0}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getLoginPassword:function(e){this.pwd=e.detail.value},getLoginPassword1:function(e){this.pwd1=e.detail.value},getCodeValue:function(e){this.code=e.detail.value},show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},other:function(){e.navigateTo({url:"../change-pass/change-pass"})},getCode:function(){var t=this;e.request({url:t.url+"users/login/sms/",method:"POST",data:{mobile:this.phone},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){console.log(o(n," at my\\change-loginPassword\\change-loginPassword.vue:83"));var s=n.statusCode;if(200==s){t.iscode=n.data.data;var a=61,i=setInterval(function(){a--,a<=0?(clearInterval(i),t.flag=!0,t.codename="重新发送",t.disabled=!1):(t.flag=!1,t.codename=a+"s",t.disabled=!0)},1e3)}else if(411==s)return e.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}})},getCodeBtn:function(e){this.getCode()},save:function(){if(""==this.pwd)return e.showToast({title:"请输入登录密码",icon:"none",duration:2e3}),!1;var t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;return t.test(this.pwd)?""==this.pwd1?(e.showToast({title:"请确认登录密码",icon:"none",duration:2e3}),!1):this.pwd1!==this.pwd?(e.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1):""==this.code?(e.showToast({title:"验证码不能为空",icon:"none",duration:2e3}),!1):this.code!=this.iscode?(e.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1):void e.request({url:this.url+"updataloginpassword/",method:"POST",data:{mobile:this.phone,password:this.pwd,password1:this.pwd1,code:this.code},headers:{"Content-Type":"application/json"},success:function(t){200==t.statusCode&&(e.showToast({title:"登陆密码设置成功",icon:"none",duration:2e3}),e.removeStorageSync("phone"),e.removeStorageSync("token"),e.reLaunch({url:"../../pages/login/login"})),400==t.statusCode&&e.showToast({title:"验证码已过期",icon:"none"})},fail:function(){},complete:function(){}}):(e.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1)}}};t.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},b005:function(e,t,o){"use strict";var n=o("3294"),s=o.n(n);s.a},c20b:function(e,t,o){"use strict";o.r(t);var n=o("75c2"),s=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},e150:function(e,t,o){"use strict";(function(e){o("c860"),o("921b");n(o("66fd"));var t=n(o("71c9"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},eaa2:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return s})}},[["e150","common/runtime","common/vendor"]]]);