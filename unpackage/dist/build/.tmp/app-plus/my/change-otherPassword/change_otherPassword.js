(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-otherPassword/change_otherPassword"],{"06e8":function(t,e,s){"use strict";var o=s("a957"),a=s.n(o);a.a},"1a8b":function(t,e,s){"use strict";(function(t){s("9c0b"),s("921b");o(s("66fd"));var e=o(s("5d2c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},3838:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return a})},"529b":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{isPassword:!0,isPassword1:!0,email:"",email1:"",code:"",codename:" 获取验证码",password:"",password1:"",shade:!1,disabled:!1}},onLoad:function(){var e=this;t.request({url:this.url+"delemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var s=t.data.data,o=t.data.data;e.email1=o;var a=s.split("@");s=a[0].substr(0,a[0].length-5)+"****@"+a[1],e.email=s}})},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},getCodeValue:function(t){this.code=t.detail.value},getPassword:function(t){this.password=t.detail.value},getPassword1:function(t){this.password1=t.detail.value},getCode:function(){var e=this;t.request({method:"POST",data:{email:this.email1},url:this.url+"setemail/",header:{Authorization:"JWT "+this.global_.token},success:function(t){var s=121,o=setInterval(function(){s--,s<=0?(clearInterval(o),e.codename="重新发送",e.disabled=!1):(e.codename=s+"s",e.disabled=!0)},1e3)}})},getCodeNumber:function(t){this.getCode()},setPwd:function(){if(""==this.code)return t.showToast({icon:"none",title:"请输入验证码",duration:2e3}),!1;if(""==this.password)return t.showToast({icon:"none",title:"请输入交易密码",duration:2e3}),!1;var e=this.global_.checkPassword(this.password);return e?""==this.password1?(t.showToast({icon:"none",title:"请确认交易密码",duration:2e3}),!1):this.password1!==this.password?(t.showToast({icon:"none",title:"两次密码不一致",duration:2e3}),!1):void t.request({url:this.url+"setmoney/",method:"POST",data:{email:this.email1,email_msg:this.code,password:this.password,password1:this.password1},header:{Authorization:"JWT "+this.global_.token},success:function(e){200==e.statusCode&&(t.showToast({title:"资金密码已修改",icon:"none",duration:2e3}),t.switchTab({url:"../my/my"})),400==e.statusCode&&t.showToast({title:"验证码错误",icon:"none",duration:2e3})}}):(t.showToast({title:"交易密码为六位数字",icon:"none",duration:2e3}),!1)}}};e.default=s}).call(this,s("6e42")["default"])},"5d2c":function(t,e,s){"use strict";s.r(e);var o=s("3838"),a=s("8ed4");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("06e8");var i=s("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"8ed4":function(t,e,s){"use strict";s.r(e);var o=s("529b"),a=s.n(o);for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);e["default"]=a.a},a957:function(t,e,s){}},[["1a8b","common/runtime","common/vendor"]]]);