(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/mill/mill"],{"50be":function(e,t,a){},"517a":function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{many:"0",user_id:[],flag:!1,greed:"去阅读",cancl:"取消",lerst:"若不阅读和同意协议,无法使用此功能哦",selectilall:!1,deoor:!1,stus:"",shade:!1,machine_id:"",lo:!1,arr:[],isSelected:!1,checkbox:[{value:"A",checked:!1}]}},onShow:function(t){var n=this;e.request({url:this.url+"mainmachine/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at mill\\mill\\mill.vue:98")),n.user_id=e.data.data,205==e.statusCode&&(n.flag=!0),n.many=e.data.data.length,console.log(a(n.many," at mill\\mill\\mill.vue:105")),0==n.many?n.flag=!0:n.flag=!1}})},onHide:function(){this.shade=!1},methods:{pay:function(){e.navigateTo({url:"../pay/pay"})},sale:function(){e.navigateTo({url:"../sale/sale"})},CheckboxChange:function(e){var t=this;t.arr=[];for(var a=0;a<t.user_id.length;a++)t.user_id.checked=!1;for(var n=t.user_id,l=e.detail.value,i=0,s=n.length;i<s;++i){n.checked=!0;for(var u=0,o=l.length;u<o;++u)if(n[i].number==l[u]){n.checked=!0,t.arr.push(n[i].machine_id);break}}},btn2:function(){var t=this,n=t.arr.join(",");console.log(a(n," at mill\\mill\\mill.vue:152")),e.request({url:this.url+"buildorders/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{machine_id_list:n},success:function(n){console.log(a(n," at mill\\mill\\mill.vue:164")),console.log(a(t.shade," at mill\\mill\\mill.vue:165"));var l=JSON.stringify(n.data.data);if(410==n.statusCode)t.shade=!0,t.stus=n.statusCode;else if(0==t.arr.length)return e.showToast({title:"请选择矿机",icon:"none"}),!1;return 401==n.statusCode?(t.stus=n.statusCode,t.lerst="未进行实名认证",t.greed="去验证",t.shade=!0,!1):302==n.statusCode?(e.showToast({title:"实名认证审核中,请耐心等待...",icon:"none"}),!1):400==n.statusCode?(t.stus=n.statusCode,t.lerst="未设置交易密码",t.greed="去设置",t.shade=!0,!1):void(200==n.statusCode&&e.navigateTo({url:"../sell/sell?tar="+l}))}})},sure:function(){400==this.stus&&e.switchTab({url:"../../my/my/my"}),410==this.stus&&e.navigateTo({url:"../../pages/agreement/agreement"}),401==this.stus&&e.navigateTo({url:"../../my/identity/identity"})},cancel:function(){this.shade=!1}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},"5d46":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},l=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l})},"67f0":function(e,t,a){"use strict";var n=a("50be"),l=a.n(n);l.a},"747d":function(e,t,a){"use strict";(function(e){a("c860"),a("921b");n(a("66fd"));var t=n(a("89e2"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"89e2":function(e,t,a){"use strict";a.r(t);var n=a("5d46"),l=a("d5ff");for(var i in l)"default"!==i&&function(e){a.d(t,e,function(){return l[e]})}(i);a("67f0");var s=a("2877"),u=Object(s["a"])(l["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},d5ff:function(e,t,a){"use strict";a.r(t);var n=a("517a"),l=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=l.a}},[["747d","common/runtime","common/vendor"]]]);