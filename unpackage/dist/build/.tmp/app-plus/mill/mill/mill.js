(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/mill/mill"],{"50be":function(e,t,a){},"517a":function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={data:function(){return{many:"0",user_id:[],flag:!1,greed:"去阅读",cancl:"取消",lerst:"若不阅读和同意协议,无法使用此功能",selectilall:!1,deoor:!1,stus:"",shade:!1,shade1:!1,machine_id:"",lo:!1,arr:[],isSelected:!1,checkbox:[{value:"A",checked:!1}]}},onShow:function(t){var l=this;e.request({url:this.url+"mainmachine/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at mill\\mill\\mill.vue:107")),l.user_id=e.data.data,205==e.statusCode&&(l.flag=!0),l.many=e.data.data.length,console.log(a(l.many," at mill\\mill\\mill.vue:114")),0==l.many?l.flag=!0:l.flag=!1}})},onHide:function(){this.shade=!1},methods:{pay:function(){e.navigateTo({url:"../pay/pay"})},sale:function(){e.navigateTo({url:"../sale/sale"})},CheckboxChange:function(e){var t=this;t.arr=[];for(var a=0;a<t.user_id.length;a++)t.user_id.checked=!1;for(var l=t.user_id,n=e.detail.value,s=0,i=l.length;s<i;++s){l.checked=!0;for(var u=0,o=n.length;u<o;++u)if(l[s].number==n[u]){l.checked=!0,t.arr.push(l[s].machine_id);break}}},btn2:function(){var t=this,l=t.arr.join(",");console.log(a(l," at mill\\mill\\mill.vue:161")),e.request({url:this.url+"buildorders/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{machine_id_list:l},success:function(l){console.log(a(l," at mill\\mill\\mill.vue:173")),console.log(a(t.shade," at mill\\mill\\mill.vue:174"));var n=JSON.stringify(l.data.data);if(410==l.statusCode)t.shade=!0,t.stus=l.statusCode;else if(0==t.arr.length)return e.showToast({title:"请选择矿机",icon:"none"}),!1;return 401==l.statusCode?(t.stus=l.statusCode,t.lerst="未进行实名认证",t.greed="去验证",t.shade=!0,!1):302==l.statusCode?(t.stus=l.statusCode,t.shade1=!0,!1):400==l.statusCode?(t.stus=l.statusCode,t.lerst="未设置交易密码",t.greed="去设置",t.shade=!0,!1):void(200==l.statusCode&&e.navigateTo({url:"../sell/sell?tar="+n}))}})},sure:function(){400==this.stus&&e.switchTab({url:"../../my/my/my"}),410==this.stus&&e.navigateTo({url:"../../pages/agreement/agreement"}),401==this.stus&&e.navigateTo({url:"../../my/identity/identity"}),302==this.stus&&(this.shade1=!1)},cancel:function(){this.shade=!1}}};t.default=l}).call(this,a("6e42")["default"],a("0de9")["default"])},"67f0":function(e,t,a){"use strict";var l=a("50be"),n=a.n(l);n.a},"747d":function(e,t,a){"use strict";(function(e){a("c860"),a("921b");l(a("66fd"));var t=l(a("89e2"));function l(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"77b7":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n})},"89e2":function(e,t,a){"use strict";a.r(t);var l=a("77b7"),n=a("d5ff");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("67f0");var i=a("2877"),u=Object(i["a"])(n["default"],l["a"],l["b"],!1,null,null,null);t["default"]=u.exports},d5ff:function(e,t,a){"use strict";a.r(t);var l=a("517a"),n=a.n(l);for(var s in l)"default"!==s&&function(e){a.d(t,e,function(){return l[e]})}(s);t["default"]=n.a}},[["747d","common/runtime","common/vendor"]]]);