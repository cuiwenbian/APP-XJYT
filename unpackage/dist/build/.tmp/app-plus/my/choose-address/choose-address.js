(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/choose-address/choose-address"],{"083d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"099c":function(e,t,a){"use strict";(function(e){a("c860"),a("921b");n(a("66fd"));var t=n(a("ecde"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},2859:function(e,t,a){},"4e70":function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{wallet_value:"",wallet_key:"",address_out:"",flag:!0,right:"",id:"",shade:!0,bar:"",fee:"",user_id:""}},onLoad:function(t){var n=this;n.bar=t.bar,n.fee=t.fee,e.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(a(t," at my\\choose-address\\choose-address.vue:61")),302==t.statusCode&&e.showToast({title:"资金密码未设置",icon:"none",duration:2e3}),""==t.data.data?n.flag=!1:n.flag=!0,n.address_out=t.data.data}})},methods:{click:function(t){console.log(a(t.wallet_value," at my\\choose-address\\choose-address.vue:81")),e.redirectTo({url:"../transfer/transfer?wallet_value="+t.wallet_value+"&bar="+this.bar+"&fee="+this.fee})}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},6166:function(e,t,a){"use strict";var n=a("2859"),o=a.n(n);o.a},"6a35":function(e,t,a){"use strict";a.r(t);var n=a("4e70"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},ecde:function(e,t,a){"use strict";a.r(t);var n=a("083d"),o=a("6a35");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("6166");var u=a("2877"),s=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports}},[["099c","common/runtime","common/vendor"]]]);