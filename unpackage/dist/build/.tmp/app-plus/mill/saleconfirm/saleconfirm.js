(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/saleconfirm/saleconfirm"],{"2df2":function(n,t,e){"use strict";(function(n){e("9c0b"),e("921b");o(e("66fd"));var t=o(e("6803"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},6803:function(n,t,e){"use strict";e.r(t);var o=e("f312"),a=e("cb3f");for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);e("dc4c");var r=e("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},"69c7":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("f7ed"),a=function(){return Promise.all([e.e("common/vendor"),e.e("components/keyboard-package/keyboard-package")]).then(e.bind(null,"bd7f"))},s=function(){return Promise.all([e.e("common/vendor"),e.e("components/password-input/password-input")]).then(e.bind(null,"d391"))},r={data:function(){return{type1:"卖出",state:"",mill:"",boe:"",price:"",rmb:"",x:"",pay_time:"",set_time:"",name:"",contact:"",numberList:[],length:6,type:"number",passIn:!1,frte:!0,checkall:"查看全部"}},components:{keyboardPackage:a,passwordInput:s},onLoad:function(n){var t=this,e=JSON.parse(n.mvp);t.vn=e;t.vn[1];t.boe=t.vn[1],t.state=e[0][0].order_status,102==t.state&&(t.state="已确认"),t.mill=t.vn[0][0].sale_num,t.price=t.vn[0][0].sale_money,t.x=t.vn[0][0].order_num,t.name=t.vn[0][0].name,t.contact=t.vn[0][0].mobile,t.set_time=t.vn[0][0].set_time,t.pay_time=t.vn[0][0].pay_time,t.rmb=o.getrmb(t.price)},methods:{clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange:function(n){0==n.show&&(this.passIn=!1),this.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&n.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(t){var e=this;e.numberList.push(t),e.password=e.numberList.join().replace(/,/g,""),e.numberList.length>=e.length&&(n.request({url:e.url+"saleaffirm/",method:"POST",data:{order_num:e.x,password:e.password},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(400==t.statusCode){e.numberList.pop(),e.numberList.length=0,e.$refs.wrong.flag=!1;var o=t.data.data.err_num,a=5-o;e.$refs.wrong.tip="剩余"+a+"次机会"}423==t.statusCode&&n.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),201==t.statusCode&&(e.success=!0),200==t.statusCode&&(n.showToast({title:"收款完成",icon:"none",duration:2e3}),n.navigateBack({url:"../sale/sale"}));var s=getCurrentPages().pop();void 0!=s&&null!=s&&s.onLoad(e.val)}}),this.numberList.length=0)},btn:function(){this.passIn=!0,this.$refs["number"].open(),this.onInput(val)},btn1:function(){var n=this;n.frte=!n.frte,0==n.frte?n.checkall="收起":n.checkall="查看全部"}}};t.default=r}).call(this,e("6e42")["default"])},"80ab":function(n,t,e){},cb3f:function(n,t,e){"use strict";e.r(t);var o=e("69c7"),a=e.n(o);for(var s in o)"default"!==s&&function(n){e.d(t,n,function(){return o[n]})}(s);t["default"]=a.a},dc4c:function(n,t,e){"use strict";var o=e("80ab"),a=e.n(o);a.a},f312:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})}},[["2df2","common/runtime","common/vendor"]]]);