(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/my-machine/my-machine"],{"12d8":function(e,n,t){},"2f92":function(e,n,t){"use strict";(function(e){t("9c0b"),t("921b");a(t("66fd"));var n=a(t("cb73"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"5e0c":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{flag:!1,user_machine:"",machine_id:"",shade:!0}},onLoad:function(){var n=this;e.request({url:this.url+"usermachine/",method:"GET",data:{},header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(t(e," at my\\my-machine\\my-machine.vue:104")),n.user_machine=e.data.data,""==e.data.data&&(n.flag=!0)},fail:function(){},complete:function(){}})},methods:{sure:function(){e.navigateTo({url:"../../pages/agreement/agreement"})},select:function(n){e.navigateTo({url:"../machine-detail/machine-detail?machine_id="+n.machine_id})}}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},bae2:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},cb73:function(e,n,t){"use strict";t.r(n);var a=t("bae2"),u=t("d695");for(var c in u)"default"!==c&&function(e){t.d(n,e,function(){return u[e]})}(c);t("f90e");var i=t("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},d695:function(e,n,t){"use strict";t.r(n);var a=t("5e0c"),u=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);n["default"]=u.a},f90e:function(e,n,t){"use strict";var a=t("12d8"),u=t.n(a);u.a}},[["2f92","common/runtime","common/vendor"]]]);