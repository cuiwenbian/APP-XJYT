(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/mill/mill"],{"09b1":function(t,e,a){"use strict";(function(t){a("9c0b"),a("921b");n(a("66fd"));var e=n(a("a7e0"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},2464:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{many:"0",user_id:[],flag:!1,selectilall:!1,machine_id:"",lo:!1,arr:[],isSelected:!1,checkbox:[{value:"A",checked:!1}]}},onLoad:function(e){setTimeout(function(){console.log(t("start pulldown"," at mill\\mill\\mill.vue:73"))},100),a.startPullDownRefresh()},onPullDownRefresh:function(){setTimeout(function(){a.stopPullDownRefresh()},100)},onShow:function(t){var e=this;a.request({url:this.url+"mainmachine/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){200==t.statusCode&&(e.user_id=t.data.data,e.many=t.data.data.length,e.machine_id=t.data.data[length].machine_id),205==t.statusCode&&(e.flag=!0)}})},methods:{pay:function(){a.navigateTo({url:"../pay/pay"})},sale:function(){a.navigateTo({url:"../sale/sale"})},CheckboxChange:function(t){var e=this;e.arr=[];for(var a=0;a<e.user_id.length;a++)e.user_id.checked=!1;for(var n=e.user_id,i=t.detail.value,o=0,u=n.length;o<u;++o){n.checked=!0;for(var r=0,l=i.length;r<l;++r)if(n[o].number==i[r]){n.checked=!0,e.arr.push(n[o].machine_id);break}}},btn2:function(){var t=this,e=t.arr.join(",");a.request({url:this.url+"buildorders/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{machine_id_list:e},success:function(e){var n=JSON.stringify(e.data.data);401==e.statusCode?a.showModal({title:"未进行实名认证",confirmText:"去验证",success:function(t){1==t.confirm&&a.navigateTo({url:"../../my/identity/identity"})}}):302==e.statusCode?a.showToast({title:"实名认证审核中"}):400==e.statusCode?a.showModal({title:"未设置交易密码",confirmText:"去设置",success:function(t){1==t.confirm&&a.navigateTo({url:"../../my/trade-password/trade-password"})}}):0==t.arr.length?a.showToast({title:"请选择矿机",icon:"none"}):200==e.statusCode&&a.navigateTo({url:"../sell/sell?tar="+n})}})}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},"6c9f":function(t,e,a){},"6e8b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},a3c0:function(t,e,a){"use strict";var n=a("6c9f"),i=a.n(n);i.a},a7e0:function(t,e,a){"use strict";a.r(e);var n=a("6e8b"),i=a("fb6d");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("a3c0");var u=a("2877"),r=Object(u["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},fb6d:function(t,e,a){"use strict";a.r(e);var n=a("2464"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a}},[["09b1","common/runtime","common/vendor"]]]);