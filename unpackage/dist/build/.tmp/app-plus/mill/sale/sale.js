(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/sale/sale"],{1115:function(e,t,a){},"2af5":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n})},3532:function(e,t,a){"use strict";a.r(t);var l=a("ccb0"),n=a.n(l);for(var o in l)"default"!==o&&function(e){a.d(t,e,function(){return l[e]})}(o);t["default"]=n.a},"68e4":function(e,t,a){"use strict";var l=a("1115"),n=a.n(l);n.a},"733d":function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");l(a("66fd"));var t=l(a("8dd8"));function l(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"8dd8":function(e,t,a){"use strict";a.r(t);var l=a("2af5"),n=a("3532");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("68e4");var s=a("2877"),u=Object(s["a"])(n["default"],l["a"],l["b"],!1,null,null,null);t["default"]=u.exports},ccb0:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={data:function(){return{flag:!1,many:"",tabCurrentIndex:0,dater:"",ter:"",name:"",phone:"",title:"",delwen:"",delewen:"",ebti:"",navList:[{state:0,text:"待付款"},{state:1,text:"待确认"},{state:2,text:"待审核"},{state:3,text:"已完成"}]}},onLoad:function(t){var l=this;e.request({url:this.url+"saleall/101",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){var t=e.data.data;l.dater=t,console.log(a(t.length," at mill\\sale\\sale.vue:223")),console.log(a(l.dater.order_num," at mill\\sale\\sale.vue:225"))}}),e.request({url:this.url+"ordernum/2",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at mill\\sale\\sale.vue:236")),l.many=e.data.data}})},methods:{tite:function(){},obtainOrderNum:function(e){var t=this;t.ebit=e,console.log(a(t.ebit," at mill\\sale\\sale.vue:249"))},getPhoneValue:function(e){this.phone=e.detail.value},tabClick:function(t){var l=this;if(this.tabCurrentIndex===t)return!1;l.tabCurrentIndex=t,1===this.tabCurrentIndex&&e.request({url:this.url+"saleall/102",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at mill\\sale\\sale.vue:269"));var t=e.data.data;console.log(a(t," at mill\\sale\\sale.vue:271")),l.ter=t}}),2===this.tabCurrentIndex&&e.request({url:this.url+"saleall/103",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at mill\\sale\\sale.vue:286"));var t=e.data.data;l.delwen=t}}),3===this.tabCurrentIndex&&e.request({url:this.url+"saleall/104",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at mill\\sale\\sale.vue:300"));var t=e.data.data;l.delewen=t}})},btn:function(t){console.log(a(t," at mill\\sale\\sale.vue:309"));e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.order_num},success:function(t){console.log(a(t," at mill\\sale\\sale.vue:321"));var l=JSON.stringify(t.data.data);e.navigateTo({url:"../salepay/salepay?aser="+l})}})},btn1:function(){var t=this;console.log(a(t.ter[0].order_num," at mill\\sale\\sale.vue:333")),e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ter[0].order_num},success:function(t){console.log(a(t," at mill\\sale\\sale.vue:344")),console.log(a(t.data.data," at mill\\sale\\sale.vue:345"));var l=JSON.stringify(t.data.data);e.navigateTo({url:"../saleconfirm/saleconfirm?mvp="+l})}})},btn2:function(){var t=this;console.log(a(t.delwen[0].order_num," at mill\\sale\\sale.vue:356")),e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.delwen[0].order_num},success:function(t){console.log(a(t," at mill\\sale\\sale.vue:367"));var l=JSON.stringify(t.data.data);e.navigateTo({url:"../saleaudit/saleaudit?suxang="+l})}})},btn3:function(){var t=this;console.log(a(t.delewen[0].order_num," at mill\\sale\\sale.vue:378")),e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.delewen[0].order_num},success:function(t){console.log(a(t," at mill\\sale\\sale.vue:389"));var l=JSON.stringify(t.data.data);e.navigateTo({url:"../salecompleted/salecompleted?cshug="+l})}})},butto:function(){var e=this;e.flag=!0,e.arr=[]},deer:function(){var t=this;e.request({url:this.url+"orderappeal/",method:"POST",header:{Authorization:"JWT "+this.global_.token},data:{info:t.phone,order_num:t.ebit},success:function(l){console.log(a(l," at mill\\sale\\sale.vue:418")),200==l.statusCode?t.flag=!1:400==l.statusCode&&(e.showToast({title:"该订单不可申诉",icon:"none"}),t.flag=!1),console.log(a(t.ebit," at mill\\sale\\sale.vue:428")),console.log(a(t.phone," at mill\\sale\\sale.vue:429"))}})}}};t.default=l}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["733d","common/runtime","common/vendor"]]]);