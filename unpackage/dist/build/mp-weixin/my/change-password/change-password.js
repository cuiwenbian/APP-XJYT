(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-password/change-password"],{"192a":function(s,t,o){},4247:function(s,t,o){"use strict";o.r(t);var n=o("bf93"),e=o.n(n);for(var a in n)"default"!==a&&function(s){o.d(t,s,function(){return n[s]})}(a);t["default"]=e.a},4309:function(s,t,o){"use strict";var n=o("192a"),e=o.n(n);e.a},8195:function(s,t,o){"use strict";(function(s){o("c860"),o("921b");n(o("66fd"));var t=n(o("d6a4"));function n(s){return s&&s.__esModule?s:{default:s}}s(t.default)}).call(this,o("543d")["createPage"])},"8bd8":function(s,t,o){"use strict";var n,e=function(){var s=this,t=s.$createElement;s._self._c},a=[];o.d(t,"b",function(){return e}),o.d(t,"c",function(){return a}),o.d(t,"a",function(){return n})},bf93:function(s,t,o){"use strict";(function(s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{isPassword:!0,isPassword1:!0,password:"",newPassword:"",newPassword1:""}},onBackPress:function(s){plus.key.hideSoftKeybord()},methods:{show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},getPassword:function(s){this.password=s.detail.value},getNewPassword:function(s){this.newPassword=s.detail.value},getNewPassword1:function(s){this.newPassword1=s.detail.value},changePassword:function(){if(""==this.password)return s.showToast({icon:"none",title:"请输入现有密码",duration:2e3}),!1;if(""==this.newPassword)return s.showToast({icon:"none",title:"请输入新的交易密码",duration:2e3}),!1;var t=this.global_.checkPassword(this.newPassword);return t?""==this.newPassword1?(s.showToast({icon:"none",title:"请确认新的交易密码",duration:2e3}),!1):this.newPassword1!==this.newPassword?(s.showToast({icon:"none",title:"两次密码不一致",duration:2e3}),!1):void s.request({url:this.url+"updatapasswod/",method:"POST",data:{password1:this.password,password2:this.newPassword,password3:this.newPassword1},header:{Authorization:"JWT "+this.global_.token},success:function(t){200==t.statusCode&&(s.showToast({title:"资金密码已修改",icon:"none",duration:2e3}),s.switchTab({url:"../../pages/my/my"})),400==t.statusCode&&s.showToast({title:"现有密码错误，或是新旧密码一样",icon:"none",duration:2e3})}}):(s.showToast({title:"交易密码为六位数字!!",icon:"none",duration:2e3}),!1)},other:function(){s.navigateTo({url:"../change-otherPassword/change_otherPassword"})}}};t.default=o}).call(this,o("543d")["default"])},d6a4:function(s,t,o){"use strict";o.r(t);var n=o("8bd8"),e=o("4247");for(var a in e)"default"!==a&&function(s){o.d(t,s,function(){return e[s]})}(a);o("4309");var r,i=o("f0c5"),u=Object(i["a"])(e["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);t["default"]=u.exports}},[["8195","common/runtime","common/vendor"]]]);