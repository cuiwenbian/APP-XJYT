(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/address/address"],{"0cff":function(e,n,t){"use strict";t.r(n);var a=t("d94e"),s=t("4d57");for(var o in s)"default"!==o&&function(e){t.d(n,e,function(){return s[e]})}(o);t("1ba3");var u=t("2877"),i=Object(u["a"])(s["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},"1ba3":function(e,n,t){"use strict";var a=t("e9df"),s=t.n(a);s.a},"4d57":function(e,n,t){"use strict";t.r(n);var a=t("9ac1"),s=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=s.a},"9ac1":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-swipe-action/uni-swipe-action")]).then(t.bind(null,"689a"))},o=function(){return t.e("components/keyboard-package/keyboard-package").then(t.bind(null,"2e84"))},u=function(){return t.e("components/password-input/password-input").then(t.bind(null,"2d9e"))},i=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"cec5"))},d={data:function(){return{options:[{text:"删除",style:{backgroundColor:"#dd524d"}}],wallet_value:"",wallet_key:"",address_out:"",flag:!0,right:"",id:"",shade:!0,password:"",user_id:"",numberList:[],length:6,type:"number",passIn:!1}},components:{uniSwipeAction:s,keyboardPackage:o,passwordInput:u,uniNavBar:i},onLoad:function(){var n=this;e.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at my\\address\\address.vue:89")),""==e.data.data?n.flag=!1:n.flag=!0,n.address_out=e.data.data}})},methods:{clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange:function(e){console.log(a(e.show," at my\\address\\address.vue:111")),0==e.show&&(this.passIn=!1),this.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&e.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(n){var t=this;t.numberList.push(n),console.log(a(t.numberList.join().replace(/,/g,"")," at my\\address\\address.vue:129")),t.password=t.numberList.join().replace(/,/g,""),t.numberList.length>=t.length&&(e.request({url:t.url+"updatadeleteaddress/",method:"DELETE",data:{id:t.id,password:t.password},header:{Authorization:"JWT "+t.global_.token},success:function(n){if(console.log(a(n," at my\\address\\address.vue:143")),204==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"删除成功",icon:"none",duration:2e3})),400==n.statusCode){t.$refs.wrong.flag=!1;var s=n.data.data.err_num,o=5-s;t.$refs.wrong.tip="剩余"+o+"次机会"}423==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}));var u=getCurrentPages().pop();void 0!=u&&null!=u&&u.onLoad()}}),this.numberList.length=0)},click:function(e){var n=this;n.id=e.id,this.passIn=!0,this.$refs["number"].open(),this.onInput(val)},add_address:function(){e.navigateTo({url:"../add-address/add-address?flag="+this.flag,success:function(e){},fail:function(){},complete:function(){}})},add:function(){e.navigateTo({url:"../add-address/add-address?flag="+this.flag,success:function(e){},fail:function(){},complete:function(){}})},back:function(){e.navigateBack({delta:1})},edit:function(n){var t=this;t.id=n.id,t.wallet_key=n.wallet_key,t.wallet_value=n.wallet_value,t.user_id=n.user_id,e.navigateTo({url:"../edit-address/edit-address?id="+t.id+"&wallet_key="+t.wallet_key+"&wallet_value="+t.wallet_value+"&user_id="+t.user_id,success:function(e){},fail:function(){},complete:function(){}})}}};n.default=d}).call(this,t("6e42")["default"],t("0de9")["default"])},c88a:function(e,n,t){"use strict";(function(e){t("c860"),t("921b");a(t("66fd"));var n=a(t("0cff"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},d94e:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return s})},e9df:function(e,n,t){}},[["c88a","common/runtime","common/vendor"]]]);