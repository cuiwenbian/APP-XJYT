(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{1900:function(e,t,o){},2273:function(e,t,o){"use strict";o.r(t);var r=o("4c90"),n=o.n(r);for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);t["default"]=n.a},"37c1":function(e,t,o){"use strict";var r,n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"b",function(){return n}),o.d(t,"c",function(){return a}),o.d(t,"a",function(){return r})},"4c90":function(e,t,o){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return Promise.all([o.e("common/vendor"),o.e("components/keyboard-package/keyboard-package")]).then(o.bind(null,"bd7f"))},a=function(){return Promise.all([o.e("common/vendor"),o.e("components/password-input/password-input")]).then(o.bind(null,"d391"))},s={data:function(){return{tabCurrentIndex:0,data_loading:!0,navList:[{state:"[101,102,103,104,105]",text:"全部"},{state:"[101]",text:"待付款"},{state:"[102]",text:"待确认"},{state:"[104,105]",text:"历史订单"}],orderList:[],buy:"所属矿池",state:"待付款",price:"购买单价",numbr:"购买数量",pay:"支付金额",trading:"交易类型",dater:"下单日期",shod:!0,numberList:[],length:6,type:"number",passIn:!1,delShow:!1,titl:!1,password:"",num:"",num1:"",num2:"",phone:""}},components:{keyboardPackage:n,passwordInput:a},onShow:function(){this.orderSource()},onLoad:function(){this.orderSource()},methods:{shensu:function(){this.titl=!1},orderSource:function(){var t=this,o=this.navList[this.tabCurrentIndex].state;t.data_loading=!0,e.showLoading({title:"加载中..."}),e.request({url:this.url+"orderall/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{orderstatus:o},success:function(o){console.log(r(o," at pages\\order\\order.vue:254"));var n=(o.data.data||[]).map(function(e){switch(e.type){case 9:e.type_text="矿机买入",e.type_text_color="#FFB931";break;case 10:e.type_text="矿机卖出",e.type_text_color="#FF3131";break;case 11:e.type_text="矿力买入",e.type_text_color="#3D97D6";break;case 12:e.type_text="矿力转让",e.type_text_color="#7466FF";break;default:e.type_text="",e.type_text_color="#888";break}switch(e.status){case 101:e.state_text="待付款";break;case 102:e.state_text="待确认";break;case 103:e.state_text="待确认";break;case 104:e.state_text="已完成";break;case 105:e.state_text="已取消";break;default:e.state_text="-";break}return e});console.log(r(n," at pages\\order\\order.vue:300")),t.orderList=n.reverse(),e.hideLoading(),t.data_loading=!1},fail:function(){e.hideLoading(),t.data_loading=!1}})},handleToDetail:function(t){101==t.status&&"矿机买入"==t.type_text&&e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ordernum},success:function(t){console.log(r(t," at pages\\order\\order.vue:327"));var o=JSON.stringify(t.data.data);console.log(r(o," at pages\\order\\order.vue:329")),e.navigateTo({url:"../../mill/staypay/staypay?mvvp="+o})}}),101==t.status&&"矿机卖出"==t.type_text&&e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ordernum},success:function(t){console.log(r(t," at pages\\order\\order.vue:347"));var o=JSON.stringify(t.data.data);console.log(r(o," at pages\\order\\order.vue:349")),e.navigateTo({url:"../../mill/machine-sale/machine-sale?mvvp="+o})}}),102==t.status&&"矿机卖出"==t.type_text&&e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ordernum},success:function(t){var o=JSON.stringify(t.data.data);e.navigateTo({url:"../../mill/salepay/salepay?aser="+o})}}),102==t.status&&"矿机买入"==t.type_text&&e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ordernum},success:function(t){var o=JSON.stringify(t.data.data);e.navigateTo({url:"../../mill/sale-out/sale-out?aser="+o})}}),"矿机卖出"==t.type_text&&104==t.status&&e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ordernum},success:function(t){var o=JSON.stringify(t.data.data);e.navigateTo({url:"../../mill/completed/completed?deattr="+o})}}),"矿机买入"==t.type_text&&104==t.status&&e.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ordernum},success:function(t){var o=JSON.stringify(t.data.data);console.log(r(o," at pages\\order\\order.vue:422")),e.navigateTo({url:"../../mill/salecompleted/salecompleted?cshug="+o})}})},onBackPress:function(e){plus.key.hideSoftKeybord()},clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},cloo:function(){this.delShow=!1,this.$refs["numbers"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange1:function(e){0==e.show&&(this.delShow=!1),this.numberList.length=0},onChange:function(e){0==e.show&&(this.passIn=!1),this.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&e.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},handleOrderPay:function(e){var t=this;console.log(r(e.ordernum," at pages\\order\\order.vue:474")),t.num=e.ordernum,t.passIn=!0,t.$refs["number"].open(),t.onInput(val)},onInput:function(t){var o=this;o.numberList.push(t),o.password=o.numberList.join().replace(/,/g,""),o.numberList.length>=o.length&&(e.request({url:o.url+"buyaffirm/",method:"POST",data:{order_num:o.num,password:o.password},header:{Authorization:"JWT "+o.global_.token},success:function(t){if(console.log(r(t," at pages\\order\\order.vue:496")),400==t.statusCode){o.numberList.pop(),o.numberList.length=0,o.$refs.wrong.flag=!1;var n=t.data.data.err_num,a=5-n;o.$refs.wrong.tip="剩余"+a+"次机会"}401==t.statusCode&&(console.log(r("未设置资金密码"," at pages\\order\\order.vue:506")),o.passIn=!1,o.$refs["number"].close(),e.showModal({title:"提示",content:"未设置资金密码",showCancel:!1,cancelText:"",confirmText:"确定",success:function(e){},fail:function(){},complete:function(){}})),423==t.statusCode&&(o.passIn=!1,o.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3})),201==t.statusCode&&(o.success=!0),200==t.statusCode&&(o.passIn=!1,o.$refs["number"].close(),e.showToast({title:"付款完成",duration:3e3}));var s=getCurrentPages().pop();void 0!=s&&null!=s&&s.onLoad()}}),this.numberList.length=0)},handleOrderCancel:function(t){var o=this;e.request({url:this.url+"ordercancel/",method:"POST",header:{Authorization:"JWT "+this.global_.token},data:{order_num:t.ordernum},success:function(t){200==t.statusCode?e.showToast({title:"取消成功",icon:"none",duration:2e3}):400==t.statusCode&&e.showToast({title:"该订单不可删除",icon:"none",duration:2e3}),o.orderSource()}})},onInput1:function(t){var o=this;console.log(r(o.num1," at pages\\order\\order.vue:590")),o.numberList.push(t),o.password=o.numberList.join().replace(/,/g,""),o.numberList.length>=o.length&&(e.request({url:o.url+"saleaffirm/",method:"POST",data:{order_num:o.num1,password:o.password},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(400==t.statusCode){o.numberList.pop(),o.numberList.length=0,o.$refs.wrong.flag=!1;var r=t.data.data.err_num,n=5-r;o.$refs.wrong.tip="剩余"+n+"次机会"}423==t.statusCode&&(o.delShow=!1,o.$refs["numbers"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3})),201==t.statusCode&&(o.success=!0),200==t.statusCode&&(o.delShow=!1,o.$refs["numbers"].close(),e.showToast({title:"收款完成",duration:2e3}));var a=getCurrentPages().pop();void 0!=a&&null!=a&&a.onLoad(o.val)}}),this.numberList.length=0)},handleOrderConfirm:function(e){this.num1=e.ordernum,console.log(r(this.num1," at pages\\order\\order.vue:643")),this.delShow=!0,this.$refs["numbers"].open(),this.onInput1(val)},changeTab:function(e){this.tabCurrentIndex=e.target.current},tabClick:function(e){var t=this;t.tabCurrentIndex=e,t.orderList=[],this.orderSource()},getPhoneValue:function(e){this.phone=e.detail.value,console.log(r(this.phone," at pages\\order\\order.vue:664"))},handleOrderAppeal:function(e){this.num2=e.ordernum,console.log(r(e.ordernum," at pages\\order\\order.vue:668")),this.titl=!0,this.arr=[]},deer:function(){var t=this;if(""==t.phone)return e.showToast({title:"填写内容不能为空",icon:"none"}),!1;e.request({url:this.url+"orderappeal/",method:"POST",header:{Authorization:"JWT "+this.global_.token},data:{info:t.phone,order_num:t.num2},success:function(o){console.log(r(t.phone," at pages\\order\\order.vue:692")),200==o.statusCode?(t.titl=!1,e.showToast({title:"已提交"})):400==o.statusCode&&(e.showToast({title:"该订单不可申诉",icon:"none"}),t.titl=!1)}})}}};t.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},"6bb2":function(e,t,o){"use strict";o.r(t);var r=o("37c1"),n=o("2273");for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);o("e2b6");var s,u=o("f0c5"),i=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);t["default"]=i.exports},"9f41":function(e,t,o){"use strict";(function(e){o("9c0b"),o("921b");r(o("66fd"));var t=r(o("6bb2"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},e2b6:function(e,t,o){"use strict";var r=o("1900"),n=o.n(r);n.a}},[["9f41","common/runtime","common/vendor"]]]);