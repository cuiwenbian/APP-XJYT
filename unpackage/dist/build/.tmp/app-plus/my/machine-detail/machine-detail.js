(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/machine-detail/machine-detail"],{"140b":function(t,e,n){"use strict";var a=n("71d0"),i=n.n(a);i.a},"54c6":function(t,e,n){"use strict";(function(t,n){var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tabCurrentIndex:0,machine_config:"",machine_status:"",machine_id:"",navList:[{state:0,text:"矿机配置",orderList:[]},{state:1,text:"矿机状态",orderList:[]},{state:2,text:"矿机记录",orderList:[]}]}},onLoad:function(e){a=this,this.machine_id=e.machine_id,console.log(t(this.machine_id," at my\\machine-detail\\machine-detail.vue:131")),this.tabCurrentIndex=0,n.request({url:this.urll+"usermachineinfo/1/"+this.machine_id,method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(t(e," at my\\machine-detail\\machine-detail.vue:140")),a.machine_config=e.data.data,console.log(t(a.machine_config," at my\\machine-detail\\machine-detail.vue:142"))}}),n.request({url:this.urll+"usermachineinfo/2/"+this.machine_id,method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(t(e," at my\\machine-detail\\machine-detail.vue:152")),a.machine_status=e.data.data}})},methods:{changeTab:function(t){this.tabCurrentIndex=t.target.current},tabClick:function(t){a.tabCurrentIndex=t}}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},"62d9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"6a2b":function(t,e,n){"use strict";n.r(e);var a=n("62d9"),i=n("9d7a");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("140b");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"71d0":function(t,e,n){},"9d7a":function(t,e,n){"use strict";n.r(e);var a=n("54c6"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},a278:function(t,e,n){"use strict";(function(t){n("c860"),n("921b");a(n("66fd"));var e=a(n("6a2b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["a278","common/runtime","common/vendor"]]]);