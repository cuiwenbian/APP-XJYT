(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/add-address/add-address"],{"437f":function(t,e,n){"use strict";var a=n("dbb9"),o=n.n(a);o.a},"46b4":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{adr:"",remark:"",flag:""}},onLoad:function(t){this.flag=t.flag},methods:{getAddress:function(t){this.adr=t.detail.value},getRemark:function(t){this.remark=t.detail.value},save:function(){return""==this.adr?(t.showToast({title:"提币地址不能为空",icon:"none",duration:2e3}),!1):""==this.remark?(t.showToast({title:"备注名称不能为空",icon:"none",duration:2e3}),!1):void t.request({url:this.urll+"walletaddress/",method:"POST",data:{wallet_key:this.remark,wallet_value:this.adr},header:{Authorization:"JWT "+this.global_.token},success:function(e){if(console.log(n(e," at my\\add-address\\add-address.vue:65")),202==e.statusCode)return t.showToast({title:"地址格式不正确(只能是字母或数字)",icon:"none",duration:2e3}),!1;if(204==e.statusCode)return t.showToast({title:"昵称不可重复",icon:"none",duration:2e3}),!1;if(205==e.statusCode)return t.showToast({title:"地址不合法",icon:"none",duration:2e3}),!1;if(200==e.statusCode){t.navigateBack({delta:1}),t.showToast({title:"添加成功",icon:"none",duration:1500});var a=getCurrentPages().pop();if(void 0==a||null==a)return;a.onLoad()}}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"9bbe":function(t,e,n){"use strict";n.r(e);var a=n("46b4"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},aaf7:function(t,e,n){"use strict";(function(t){n("c860"),n("921b");a(n("66fd"));var e=a(n("d893"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d893:function(t,e,n){"use strict";n.r(e);var a=n("e6e3"),o=n("9bbe");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("437f");var u=n("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},dbb9:function(t,e,n){},e6e3:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["aaf7","common/runtime","common/vendor"]]]);