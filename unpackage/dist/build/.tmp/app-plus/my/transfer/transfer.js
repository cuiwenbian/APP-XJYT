(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/transfer/transfer"],{"3b57":function(t,n,e){},"4ff3":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return s})},"64aa":function(t,n,e){"use strict";(function(t){e("c860"),e("921b");o(e("66fd"));var n=o(e("67c9"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"67c9":function(t,n,e){"use strict";e.r(n);var o=e("4ff3"),s=e("cd9c");for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);e("9be7");var r=e("2877"),i=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"9be7":function(t,n,e){"use strict";var o=e("3b57"),s=e.n(o);s.a},"9de2":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=function(){return e.e("components/keyboard-package/keyboard-package").then(e.bind(null,"2e84"))},a=function(){return e.e("components/password-input/password-input").then(e.bind(null,"2d9e"))},r={data:function(){return{bar:"",moder:"",fee:"",fil_num:"",transferAdd:"",password:"",numberList:[],length:6,type:"number",passIn:!1,success:!1}},components:{keyboardPackage:s,passwordInput:a},onLoad:function(n){var e=this;console.log(t(n," at my\\transfer\\transfer.vue:71")),e.bar=n.sole,e.fee=n.fee},methods:{getFilNum:function(t){this.fil_num=t.detail.value},getTranferAdd:function(t){this.transferAdd=t.detail.value},link:function(){o.navigateTo({url:"../address/address"})},fusre:function(){this.moder=this.bar},clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onConfirm:function(){o.showToast({title:"完成输入！",duration:2e3,icon:"none"})},over:function(){o.reLaunch({url:"../my-wallet/my-wallet"})},onInput:function(n){var e=this;this.numberList.push(n),this.password=this.numberList.join().replace(/,/g,""),this.numberList.length>=this.length&&(this.passIn=!1,this.$refs["number"].close(),o.request({url:this.url+"assets/capitalcode/",method:"POST",data:{capital_code:this.password},header:{Authorization:"JWT "+this.global_.token},success:function(n){if(console.log(t(n," at my\\transfer\\transfer.vue:127")),400==n.statusCode){var s=n.data.data.err_num;console.log(t(s," at my\\transfer\\transfer.vue:131"));var a=5-s;console.log(t("剩余"+a+"次机会"," at my\\transfer\\transfer.vue:133")),o.showToast({title:"交易密码错误,剩余"+a+"次机会",icon:"none",duration:2e3})}423==n.statusCode&&o.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),201==n.statusCode&&(e.success=!0)}}),this.numberList.length=0)},save:function(){var n=this;return""==n.transferAdd?(o.showToast({title:"转账地址不能为空",icon:"none",duration:2e3}),!1):""==n.fil_num?(o.showToast({title:"提币数量不能为空",icon:"none",duration:2e3}),!1):n.fil_num<=0?(o.showToast({title:"请输入正确的金额",icon:"none",duration:2e3}),!1):n.fil_num>n.bar?(o.showToast({title:"提币数量余额不足",icon:"none",duration:2e3}),!1):void o.request({url:n.url+"assets/transfer/",method:"POST",data:{fil_num:n.fil_num,address:n.transferAdd},header:{Authorization:"JWT "+this.global_.token},success:function(e){return console.log(t(e," at my\\transfer\\transfer.vue:201")),411==e.statusCode?(o.showToast({title:"未进行实名认证",icon:"none",duration:2e3}),!1):412==e.statusCode?(o.showToast({title:"实名认证中，请耐心等待",icon:"none",duration:2e3}),!1):403==e.statusCode?(o.showToast({title:"资金密码未设置",icon:"none",duration:2e3}),!1):400==e.statusCode?(o.showToast({title:"输入信息有误(提币地址最少32位)",icon:"none",duration:2e3}),!1):423==e.statusCode?(o.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),!1):void(200==e.statusCode&&(n.passIn=!0,n.$refs["number"].open(),n.onInput(val)))}})}}};n.default=r}).call(this,e("0de9")["default"],e("6e42")["default"])},cd9c:function(t,n,e){"use strict";e.r(n);var o=e("9de2"),s=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=s.a}},[["64aa","common/runtime","common/vendor"]]]);