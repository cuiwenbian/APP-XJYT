(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/address/address"],{"0cff":function(e,n,t){"use strict";t.r(n);var a=t("d7d4"),s=t("4d57");for(var o in s)"default"!==o&&function(e){t.d(n,e,function(){return s[e]})}(o);t("1ba3");var i,r=t("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=u.exports},"1ba3":function(e,n,t){"use strict";var a=t("c7d5"),s=t.n(a);s.a},"3b77":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-swipe-action/uni-swipe-action")]).then(t.bind(null,"689a"))},s=function(){return Promise.all([t.e("common/vendor"),t.e("components/keyboard-package/keyboard-package")]).then(t.bind(null,"2e84"))},o=function(){return Promise.all([t.e("common/vendor"),t.e("components/password-input/password-input")]).then(t.bind(null,"2d9e"))},i=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"cec5"))},r={data:function(){return{options:[{text:"删除",style:{backgroundColor:"#dd524d"}}],wallet_value:"",wallet_key:"",address_out:"",flag:!0,right:"",id:"",shade:!0,password:"",user_id:"",numberList:[],length:6,type:"number",passIn:!1}},components:{uniSwipeAction:a,keyboardPackage:s,passwordInput:o,uniNavBar:i},onShow:function(){var n=this;e.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){""==e.data.data?n.flag=!1:n.flag=!0,n.address_out=e.data.data}})},methods:{clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange:function(e){0==e.show&&(this.passIn=!1),this.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&e.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(n){var t=this;t.numberList.push(n),t.password=t.numberList.join().replace(/,/g,""),t.numberList.length>=t.length&&(e.request({url:t.url+"updatadeleteaddress/",method:"DELETE",data:{id:t.id,password:t.password},header:{Authorization:"JWT "+t.global_.token},success:function(n){if(204==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"删除成功",icon:"none",duration:2e3})),400==n.statusCode){t.$refs.wrong.flag=!1;var a=n.data.data.err_num,s=5-a;t.$refs.wrong.tip="剩余"+s+"次机会"}423==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}));var o=getCurrentPages().pop();void 0!=o&&null!=o&&o.onLoad()}}),this.numberList.length=0)},click:function(e){var n=this;n.id=e.id,this.passIn=!0,this.$refs["number"].open(),this.onInput(val)},add_address:function(){e.navigateTo({url:"../add-address/add-address?flag="+this.flag})},back:function(){e.navigateBack({delta:1})},edit:function(n){var t=this;t.id=n.id,t.wallet_key=n.wallet_key,t.wallet_value=n.wallet_value,t.user_id=n.user_id,e.navigateTo({url:"../edit-address/edit-address?id="+t.id+"&wallet_key="+t.wallet_key+"&wallet_value="+t.wallet_value+"&user_id="+t.user_id})}}};n.default=r}).call(this,t("6e42")["default"])},"4d57":function(e,n,t){"use strict";t.r(n);var a=t("3b77"),s=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=s.a},c7d5:function(e,n,t){},c88a:function(e,n,t){"use strict";(function(e){t("c860"),t("921b");a(t("66fd"));var n=a(t("0cff"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},d7d4:function(e,n,t){"use strict";var a,s=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return s}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return a})}},[["c88a","common/runtime","common/vendor"]]]);