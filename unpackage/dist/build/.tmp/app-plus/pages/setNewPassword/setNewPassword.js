(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setNewPassword/setNewPassword"],{"0499":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"272d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isPassword:!0,isPassword1:!0,newPwd:"",newPwd1:"",iscode:"",phone:""}},onLoad:function(e){this.iscode=e.code,this.phone=e.phone},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{newpassword:function(e){this.newPwd=e.detail.value},newpassword1:function(e){this.newPwd1=e.detail.value},next:function(){var t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;if(t.test(this.newPwd)||e.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),""==this.newPwd)return e.showToast({title:"请输入新密码",icon:"none",duration:2e3}),!1;if(""==this.newPwd1)return e.showToast({title:"请确认密码",icon:"none",duration:2e3}),!1;if(this.newPwd1!==this.newPwd)return e.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1;t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;if(!t.test(this.newPwd))return e.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1;e.request({url:this.url+"users/forgot/change/",method:"POST",data:{mobile:this.phone,password:this.newPwd,sec_password:this.newPwd1,code:this.iscode},header:{},success:function(t){e.navigateTo({url:"../login/login"}),e.showToast({title:"密码已重设，请登录",icon:"none",duration:2e3})}})}}};t.default=n}).call(this,n("6e42")["default"])},"5dec":function(e,t,n){},6013:function(e,t,n){"use strict";var o=n("5dec"),i=n.n(o);i.a},"781d":function(e,t,n){"use strict";(function(e){n("c860"),n("921b");o(n("66fd"));var t=o(n("eca7"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a476:function(e,t,n){"use strict";n.r(t);var o=n("272d"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=i.a},eca7:function(e,t,n){"use strict";n.r(t);var o=n("0499"),i=n("a476");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("6013");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports}},[["781d","common/runtime","common/vendor"]]]);