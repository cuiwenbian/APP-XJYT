(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/add-address/add-address"],{"437f":function(t,e,n){"use strict";var a=n("d6bd"),o=n.n(a);o.a},"4e57":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{adr:"",remark:"",flag:""}},onLoad:function(t){this.flag=t.flag},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getAddress:function(t){this.adr=t.detail.value},getRemark:function(t){this.remark=t.detail.value},save:function(){return""==this.adr?(t.showToast({title:"提币地址不能为空",icon:"none",duration:2e3}),!1):this.adr.length<=32?(t.showToast({title:"提币地址最少32位",icon:"none",duration:2e3}),!1):""==this.remark?(t.showToast({title:"备注名称不能为空",icon:"none",duration:2e3}),!1):void t.request({url:this.url+"walletaddress/",method:"POST",data:{wallet_key:this.remark,wallet_value:this.adr},header:{Authorization:"JWT "+this.global_.token},success:function(e){return 202==e.statusCode?(t.showToast({title:"地址格式不正确(只能是字母或数字)",icon:"none",duration:2e3}),!1):204==e.statusCode?(t.showToast({title:"昵称不可重复",icon:"none",duration:2e3}),!1):205==e.statusCode?(t.showToast({title:"地址不合法",icon:"none",duration:2e3}),!1):void(200==e.statusCode&&(t.navigateBack({delta:1}),t.showToast({title:"添加成功",icon:"none",duration:1500})))}})}}};e.default=n}).call(this,n("6e42")["default"])},"9bbe":function(t,e,n){"use strict";n.r(e);var a=n("4e57"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},a299:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},aaf7:function(t,e,n){"use strict";(function(t){n("c860"),n("921b");a(n("66fd"));var e=a(n("d893"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d6bd:function(t,e,n){},d893:function(t,e,n){"use strict";n.r(e);var a=n("a299"),o=n("9bbe");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("437f");var u,r=n("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=s.exports}},[["aaf7","common/runtime","common/vendor"]]]);