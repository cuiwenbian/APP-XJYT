(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-password/change-password"],{4247:function(s,t,o){"use strict";o.r(t);var e=o("fe0e"),n=o.n(e);for(var a in e)"default"!==a&&function(s){o.d(t,s,function(){return e[s]})}(a);t["default"]=n.a},4309:function(s,t,o){"use strict";var e=o("c00e"),n=o.n(e);n.a},"65b9":function(s,t,o){"use strict";var e=function(){var s=this,t=s.$createElement;s._self._c},n=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return n})},8195:function(s,t,o){"use strict";(function(s){o("c860"),o("921b");e(o("66fd"));var t=e(o("d6a4"));function e(s){return s&&s.__esModule?s:{default:s}}s(t.default)}).call(this,o("6e42")["createPage"])},c00e:function(s,t,o){},d6a4:function(s,t,o){"use strict";o.r(t);var e=o("65b9"),n=o("4247");for(var a in n)"default"!==a&&function(s){o.d(t,s,function(){return n[s]})}(a);o("4309");var r=o("2877"),i=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,null,null);t["default"]=i.exports},fe0e:function(s,t,o){"use strict";(function(s,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{isPassword:!0,isPassword1:!0,password:"",newPassword:"",newPassword1:""}},onBackPress:function(s){plus.key.hideSoftKeybord()},methods:{show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},getPassword:function(s){this.password=s.detail.value},getNewPassword:function(s){this.newPassword=s.detail.value},getNewPassword1:function(s){this.newPassword1=s.detail.value},changePassword:function(){if(""==this.password)return s.showToast({icon:"none",title:"请输入现有密码",duration:2e3}),!1;if(""==this.newPassword)return s.showToast({icon:"none",title:"请输入新的交易密码",duration:2e3}),!1;var t=this.global_.checkPassword(this.newPassword);return t?""==this.newPassword1?(s.showToast({icon:"none",title:"请确认新的交易密码",duration:2e3}),!1):this.newPassword1!==this.newPassword?(s.showToast({icon:"none",title:"两次密码不一致",duration:2e3}),!1):void s.request({url:this.url+"updatapasswod/",method:"POST",data:{password1:this.password,password2:this.newPassword,password3:this.newPassword1},header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(o(t," at my\\change-password\\change-password.vue:108")),200==t.statusCode&&(s.showToast({title:"资金密码已修改",icon:"none",duration:2e3}),s.switchTab({url:"../my/my"})),400==t.statusCode&&s.showToast({title:"现有密码错误，或是新旧密码一样",icon:"none",duration:2e3})}}):(s.showToast({title:"交易密码为六位数字!!",icon:"none",duration:2e3}),!1)},other:function(){s.navigateTo({url:"../change-otherPassword/change_otherPassword"})}}};t.default=e}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["8195","common/runtime","common/vendor"]]]);