(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/machine-sale/machine-sale"],{"08f9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{flag:!1,verify:!1,sha:!1,selected:{},serverList:[],numb:[],lens:0}},onShow:function(){var e=this;t.request({url:this.url+"usermachine/transferlist/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(n),console.log(n.data.data[1]),e.serverList=n.data.data[1],e.numb=n.data.data[0],console.log(e.numb);for(var o=0,s=0;s<n.data.data[1].length;s++){var a=n.data.data[1][s];console.log(a.lens),o+=a.lens}e.lens=o,console.log(e.serverList.length),0==e.numb?e.verify=!0:e.verify=!1,0===e.serverList.length&&(e.flag=!0),400==n.statusCode&&t.showToast({title:"用户名实名认证未通过或未设置资金密码或",icon:"none"}),204==n.statusCode&&t.showToast({title:"由服务器未验收",icon:"none"})}})},methods:{prompt:function(){this.sha=!0,console.log(this.sha)},validation:function(){t.request({url:this.url+"usermachine/machinestatus/",method:"POST",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(e),200==e.statusCode&&t.showToast({title:"已验证"})}}),this.sha=!1,this.verify=!1},handleSelectRadio:function(t){t.id===this.selected.id?this.selected={}:this.selected=t},btn:function(e){if(!this.selected.id)return t.showToast({title:"请选中服务器",icon:"none"}),!1;t.request({url:this.url+"usermachine/transfer/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(t)}}),t.navigateTo({url:"../server/server?type="+e+"&info="+JSON.stringify(this.selected)})},onNavigationBarButtonTap:function(){t.navigateTo({url:"../record/record"})}}};e.default=n}).call(this,n("543d")["default"])},"2b48":function(t,e,n){},b2f5:function(t,e,n){"use strict";var o=n("2b48"),s=n.n(o);s.a},efdc:function(t,e,n){"use strict";var o,s=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},f244:function(t,e,n){"use strict";(function(t){n("c860"),n("921b");o(n("66fd"));var e=o(n("fb2a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},fb2a:function(t,e,n){"use strict";n.r(e);var o=n("efdc"),s=n("fe9e");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("b2f5");var i,r=n("f0c5"),u=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=u.exports},fe9e:function(t,e,n){"use strict";n.r(e);var o=n("08f9"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=s.a}},[["f244","common/runtime","common/vendor"]]]);