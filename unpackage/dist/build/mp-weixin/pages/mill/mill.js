(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mill/mill"],{4299:function(t,e,a){"use strict";a.r(e);var n=a("76aa"),s=a("d562");for(var u in s)"default"!==u&&function(t){a.d(e,t,function(){return s[t]})}(u);a("ea61");var i,r=a("f0c5"),o=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=o.exports},"76aa":function(t,e,a){"use strict";var n,s=function(){var t=this,e=t.$createElement;t._self._c},u=[];a.d(e,"b",function(){return s}),a.d(e,"c",function(){return u}),a.d(e,"a",function(){return n})},"7e10":function(t,e,a){"use strict";(function(t){a("c860"),a("921b");n(a("66fd"));var e=n(a("4299"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},d562:function(t,e,a){"use strict";a.r(e);var n=a("d62a"),s=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=s.a},d62a:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{many:"0",user_id:[],flag:!1,greed:"去阅读",cancl:"取消",lerst:"若不阅读和同意协议,无法使用此功能",selectilall:!1,deoor:!1,stus:"",shade:!1,shade1:!1,machine_id:"",lo:!1,arr:[],isSelected:!1,checkbox:[{value:"A",checked:!1}]}},onShow:function(e){var a=this;t.request({url:this.url+"mainmachine/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){a.user_id=t.data.data,205==t.statusCode&&(a.flag=!0),a.many=t.data.data.length,console.log(a.many),0==a.many?a.flag=!0:a.flag=!1}})},onHide:function(){this.shade=!1},methods:{pay:function(){t.navigateTo({url:"../../mill/pay/pay"})},sale:function(){t.navigateTo({url:"../../mill/sale/sale"})},CheckboxChange:function(t){var e=this;e.arr.length=0;for(var a=0;a<e.user_id.length;a++)e.user_id.checked=!1;for(var n=e.user_id,s=t.detail.value,u=0,i=n.length;u<i;++u){n.checked=!0;for(var r=0,o=s.length;r<o;++r)if(n[u].number==s[r]){n[u].checked=!0,e.arr.push(n[u].machine_id);break}}},btn2:function(){var e=this,a=e.arr.join(",");t.request({url:this.url+"buildorders/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{machine_id_list:a},success:function(a){if(console.log(a),410==a.statusCode)e.shade=!0,e.stus=a.statusCode;else if(0==e.arr.length)return t.showToast({title:"请选择矿机",icon:"none"}),!1;if(401==a.statusCode)return e.stus=a.statusCode,e.lerst="未进行实名认证",e.greed="去验证",e.shade=!0,!1;if(302==a.statusCode)return e.stus=a.statusCode,e.shade1=!0,!1;if(400==a.statusCode)return e.stus=a.statusCode,e.lerst="未设置交易密码",e.greed="去设置",e.shade=!0,!1;if(200==a.statusCode){var n=JSON.stringify(a.data.data);t.navigateTo({url:"../../mill/sell/sell?tar="+n,success:function(){e.arr=[]}})}}})},sure:function(){400==this.stus&&t.switchTab({url:"../my/my"}),410==this.stus&&t.navigateTo({url:"../agreement/agreement"}),401==this.stus&&t.navigateTo({url:"../../my/identity/identity"}),302==this.stus&&(this.shade1=!1)},cancel:function(){this.shade=!1}}};e.default=a}).call(this,a("543d")["default"])},ea61:function(t,e,a){"use strict";var n=a("f616"),s=a.n(n);s.a},f616:function(t,e,a){}},[["7e10","common/runtime","common/vendor"]]]);