(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/otherLogin/otherLogin"],{1655:function(e,o,t){"use strict";(function(e,t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{phone:"",code:"",iscode:"",codename:" 获取验证码",disabled:!1}},methods:{getPhoneValue:function(o){11==o.detail.value.length&&(this.disabled=!1),this.phone=o.detail.value,console.log(e(this.phone," at pages\\otherLogin\\otherLogin.vue:41"))},getCodeValue:function(e){this.code=e.detail.value},getCode:function(){var o=this,n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==o.phone?(t.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):n.test(o.phone)?void t.request({method:"POST",data:{mobile:o.phone},url:o.url+"users/forgot/sms/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){console.log(e(n," at pages\\otherLogin\\otherLogin.vue:78"));var a=n.statusCode;if(console.log(e(a," at pages\\otherLogin\\otherLogin.vue:80")),200==a)o.iscode=n.data.data,console.log(e(n.data.data," at pages\\otherLogin\\otherLogin.vue:83"));else if(400==a)return t.showToast({title:"用户不存在",icon:"none",duration:2e3}),!1;console.log(e(n," at pages\\otherLogin\\otherLogin.vue:92"));var i=61,u=setInterval(function(){i--,i<=0?(clearInterval(u),o.codename="重新发送",o.disabled=!1):(o.codename=i+"s",o.disabled=!0)},1e3)}}):(t.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)},getCodeNumber:function(e){this.getCode()},login:function(){var o=this,n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==o.phone?(t.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):n.test(o.phone)?""==o.code?(t.showToast({title:"验证码不能为空",icon:"none",duration:1e3}),!1):o.code!=o.iscode?(t.showToast({title:"验证码错误",icon:"none",duration:1e3}),!1):void t.request({url:o.url+"users/login/",method:"POST",data:{mobile:o.phone,code:o.code},success:function(n){console.log(e(n," at pages\\otherLogin\\otherLogin.vue:161")),o.global_.phone=o.phone,o.global_.token=n.data.data,console.log(e(n.data.data," at pages\\otherLogin\\otherLogin.vue:164")),400==n.statusCode&&t.showToast({title:"验证码不正确",icon:"none"}),200==n.statusCode&&t.switchTab({url:"../index/index"})}}):(t.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)}}};o.default=n}).call(this,t("0de9")["default"],t("6e42")["default"])},"1b60":function(e,o,t){"use strict";(function(e){t("c860"),t("921b");n(t("66fd"));var o=n(t("ca74"));function n(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("6e42")["createPage"])},"27c7":function(e,o,t){"use strict";t.r(o);var n=t("1655"),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,function(){return n[e]})}(i);o["default"]=a.a},7552:function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},a=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return a})},"7bc3":function(e,o,t){},"93ed":function(e,o,t){"use strict";var n=t("7bc3"),a=t.n(n);a.a},ca74:function(e,o,t){"use strict";t.r(o);var n=t("7552"),a=t("27c7");for(var i in a)"default"!==i&&function(e){t.d(o,e,function(){return a[e]})}(i);t("93ed");var u=t("2877"),s=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);o["default"]=s.exports}},[["1b60","common/runtime","common/vendor"]]]);