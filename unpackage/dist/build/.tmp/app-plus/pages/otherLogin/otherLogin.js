(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/otherLogin/otherLogin"],{"1b60":function(e,t,n){"use strict";(function(e){n("c860"),n("921b");o(n("66fd"));var t=o(n("ca74"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"27c7":function(e,t,n){"use strict";n.r(t);var o=n("c1ee"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"93ed":function(e,t,n){"use strict";var o=n("d624"),a=n.n(o);a.a},c1ee:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{phone:"",code:"",iscode:"",codename:" 获取验证码",disabled:!1}},methods:{getPhoneValue:function(e){11==e.detail.value.length&&(this.disabled=!1),this.phone=e.detail.value},getCodeValue:function(e){this.code=e.detail.value},getCode:function(){var t=this,n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==t.phone?(e.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):n.test(t.phone)?void e.request({method:"POST",data:{mobile:t.phone},url:t.url+"users/forgot/sms/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){var o=n.statusCode;if(200==o){t.iscode=n.data.data;var a=61,i=setInterval(function(){a--,a<=0?(clearInterval(i),t.codename="重新发送",t.disabled=!1):(t.codename=a+"s",t.disabled=!0)},1e3)}else{if(400==o)return e.showToast({title:"用户不存在",icon:"none",duration:2e3}),!1;if(411==o)return e.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}}}):(e.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)},getCodeNumber:function(e){this.getCode()},login:function(){var t=this,n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==t.phone?(e.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):n.test(t.phone)?""==t.code?(e.showToast({title:"验证码不能为空",icon:"none",duration:1e3}),!1):t.code!=t.iscode?(e.showToast({title:"验证码错误",icon:"none",duration:1e3}),!1):void e.request({url:t.url+"users/login/",method:"POST",data:{mobile:t.phone,code:t.code},success:function(n){e.setStorageSync("phone",t.phone),e.setStorageSync("token",n.data.data),t.global_.phone=t.phone,t.global_.token=n.data.data,400==n.statusCode&&e.showToast({title:"验证码不正确",icon:"none"}),200==n.statusCode&&e.switchTab({url:"../index/index"})}}):(e.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)}}};t.default=n}).call(this,n("6e42")["default"])},ca74:function(e,t,n){"use strict";n.r(t);var o=n("f81b"),a=n("27c7");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("93ed");var u,c=n("f0c5"),d=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=d.exports},d624:function(e,t,n){},f81b:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o})}},[["1b60","common/runtime","common/vendor"]]]);