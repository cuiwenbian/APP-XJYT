(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/unbindemail/unbindemail"],{"0391":function(e,n,t){"use strict";var a=t("fe86"),i=t.n(a);i.a},"0e11":function(e,n,t){"use strict";(function(e){t("c860"),t("921b");a(t("66fd"));var n=a(t("da72"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"0f99":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t("965e");var i={data:function(){return{email:"",email1:"",emailCode:"",codename:" 获取验证码",disabled:!1,flag:!0}},onShow:function(){var n=this;e.request({url:this.url+"delemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at my\\unbindemail\\unbindemail.vue:41"));var t=e.data.data;console.log(a(t," at my\\unbindemail\\unbindemail.vue:43"));var i=e.data.data;n.email1=i;var l=t.split("@");t=l[0].substr(0,l[0].length-5)+"****@"+l[1],n.email=t}})},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getEmailCode:function(e){this.emailCode=e.detail.value},sendcode:function(){var n=this;e.request({url:this.url+"deleteemail/",method:"POST",data:{email:n.email,email_msg:n.emailCode},header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at my\\unbindemail\\unbindemail.vue:74"));var t=121,i=setInterval(function(){t--,t<=0?(clearInterval(i),n.flag=!0,n.codename="重新发送",n.disabled=!1):(n.flag=!1,n.disabled=!0,n.codename=t+"s")},1e3)},fail:function(e){console.log(a(e," at my\\unbindemail\\unbindemail.vue:93"))}})},unbind:function(){if(console.log(a(this.global_.token," at my\\unbindemail\\unbindemail.vue:99")),console.log(a(this.email," at my\\unbindemail\\unbindemail.vue:100")),""==this.emailCode)return e.showToast({title:"请输入验证码",icon:"none",duration:2e3}),!1;e.request({url:this.url+"delemail/",method:"POST",data:{email:this.email1,email_msg:this.emailCode},header:{Authorization:"JWT "+this.global_.token},success:function(n){if(console.log(a(n," at my\\unbindemail\\unbindemail.vue:120")),400==n.statusCode)return e.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1;200==n.statusCode&&(e.showToast({title:"邮箱已解绑",icon:"none",duration:2e3}),e.switchTab({url:"../my/my"}))}})}}};n.default=i}).call(this,t("6e42")["default"],t("0de9")["default"])},6059:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})},ab4f:function(e,n,t){"use strict";t.r(n);var a=t("0f99"),i=t.n(a);for(var l in a)"default"!==l&&function(e){t.d(n,e,function(){return a[e]})}(l);n["default"]=i.a},da72:function(e,n,t){"use strict";t.r(n);var a=t("6059"),i=t("ab4f");for(var l in i)"default"!==l&&function(e){t.d(n,e,function(){return i[e]})}(l);t("0391");var o=t("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},fe86:function(e,n,t){}},[["0e11","common/runtime","common/vendor"]]]);