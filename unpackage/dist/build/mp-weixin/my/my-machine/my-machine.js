(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/my-machine/my-machine"],{"2f92":function(e,t,n){"use strict";(function(e){n("9c0b"),n("921b");a(n("66fd"));var t=a(n("cb73"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"349d":function(e,t,n){},a749:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},b52c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{flag:!0,user_machine:"",machine_id:"",user_agreement:"",shade:!1,sha:!1,ress:"",verify:!1}},onShow:function(){var t=this;e.request({url:this.url+"usermachine/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){t.user_machine=e.data.data.machine_datas[1],0==t.user_machine.length&&(t.flag=!1),t.user_agreement=e.data.data.user_agreement,0==t.user_agreement?t.shade=!0:1==t.user_agreement&&(t.shade=!1),t.ress=e.data.data.machine_datas[0],0==t.ress?t.verify=!0:t.verify=!1}})},methods:{moveHandle:function(e){e.preventDefault(),e.stopPropagation()},sure:function(){e.navigateTo({url:"../../pages/agreement/agreement"})},cancel:function(){e.navigateBack({url:"../../pages/my/my"})},onNavigationBarButtonTap:function(){e.navigateTo({url:"../../pages/agreement/agreement"})},select:function(t){e.navigateTo({url:"../machine-detail/machine-detail?machine_id="+t.machine_id})},prompt:function(){this.sha=!0},can:function(){this.sha=!1},validation:function(){e.request({url:this.url+"usermachine/affirm/",method:"POST",header:{Authorization:"JWT "+this.global_.token},success:function(e){}}),e.showToast({title:"已验证"}),this.sha=!1,this.verify=!1}}};t.default=n}).call(this,n("543d")["default"])},cb73:function(e,t,n){"use strict";n.r(t);var a=n("a749"),i=n("d695");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("f90e");var u,c=n("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=o.exports},d695:function(e,t,n){"use strict";n.r(t);var a=n("b52c"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},f90e:function(e,t,n){"use strict";var a=n("349d"),i=n.n(a);i.a}},[["2f92","common/runtime","common/vendor"]]]);