(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/sale/sale"],{"02a3":function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];a.d(e,"b",function(){return r}),a.d(e,"c",function(){return u}),a.d(e,"a",function(){return n})},"106f":function(t,e,a){"use strict";(function(t){a("c860"),a("921b");n(a("66fd"));var e=n(a("b295"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"6a60":function(t,e,a){},b295:function(t,e,a){"use strict";a.r(e);var n=a("02a3"),r=a("c626");for(var u in r)"default"!==u&&function(t){a.d(e,t,function(){return r[t]})}(u);a("e6be");var s,o=a("f0c5"),i=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=i.exports},c626:function(t,e,a){"use strict";a.r(e);var n=a("d414"),r=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=r.a},d414:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{flag:!1,many:"0",tabCurrentIndex:0,dater:"",ter:"",name:"",phone:"",title:"",delwen:"",delewen:"",ebti:"",navList:[{state:0,text:"待付款"},{state:1,text:"待确认"},{state:2,text:"待审核"},{state:3,text:"已完成"}]}},onShow:function(e){var a=this;t.request({url:this.url+"saleall/101",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.dater=e.reverse()}}),t.request({url:this.url+"ordernum/2",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){a.many=t.data.data}})},methods:{obtainOrderNum:function(t){var e=this;e.ebit=t},getPhoneValue:function(t){this.phone=t.detail.value},tabClick:function(e){var a=this;if(this.tabCurrentIndex===e)return!1;if(a.tabCurrentIndex=e,0===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/101",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.dater=e.reverse()}})}if(1===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/102",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.ter=e.reverse()}})}if(2===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/103",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.delwen=e.reverse()}})}if(3===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/104",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.delewen=e.reverse()}})}},btn:function(e){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){var a=JSON.stringify(e.data.data);t.navigateTo({url:"../salepay/salepay?aser="+a})}})},btn1:function(e){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){var a=JSON.stringify(e.data.data);t.navigateTo({url:"../saleconfirm/saleconfirm?mvp="+a})}})},btn2:function(e){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){var a=JSON.stringify(e.data.data);t.navigateTo({url:"../saleaudit/saleaudit?suxang="+a})}})},btn3:function(e){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){var a=JSON.stringify(e.data.data);t.navigateTo({url:"../salecompleted/salecompleted?cshug="+a})}})},butto:function(){var t=this;t.flag=!0,t.arr=[]},deer:function(){var e=this;t.request({url:this.url+"orderappeal/",method:"POST",header:{Authorization:"JWT "+this.global_.token},data:{info:e.phone,order_num:e.ebit},success:function(a){200==a.statusCode?(e.flag=!1,t.showToast({title:"已提交"})):400==a.statusCode&&(t.showToast({title:"该订单不可申诉",icon:"none"}),e.flag=!1)}})}}};e.default=a}).call(this,a("543d")["default"])},e6be:function(t,e,a){"use strict";var n=a("6a60"),r=a.n(n);r.a}},[["106f","common/runtime","common/vendor"]]]);