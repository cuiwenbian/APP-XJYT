(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/transfer/transfer"],{"3b57":function(t,e,n){},"64aa":function(t,e,n){"use strict";(function(t){n("c860"),n("921b");o(n("66fd"));var e=o(n("67c9"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"67c9":function(t,e,n){"use strict";n.r(e);var o=n("8f13"),s=n("cd9c");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("9be7");var r=n("2877"),u=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"8f13":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},"9be7":function(t,e,n){"use strict";var o=n("3b57"),s=n.n(o);s.a},"9de2":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return n.e("components/keyboard-package/keyboard-package").then(n.bind(null,"2e84"))},a=function(){return n.e("components/password-input/password-input").then(n.bind(null,"2d9e"))},r={data:function(){return{bar:"",moder:"",fee:"",fil_num:"",password:"",numberList:[],length:6,type:"number",passIn:!1,wallet_value:""}},components:{keyboardPackage:s,passwordInput:a},onLoad:function(e){console.log(t(e," at my\\transfer\\transfer.vue:65")),this.bar=e.bar,this.fee=e.fee,this.wallet_value=e.wallet_value,console.log(t(this.bar," at my\\transfer\\transfer.vue:69"))},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getFilNum:function(t){this.fil_num=t.detail.value},getTranferAdd:function(t){this.wallet_value=t.detail.value},link:function(){var e=this;o.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(t(n," at my\\transfer\\transfer.vue:91")),400==n.statusCode&&o.showToast({title:"用户未实名认证",icon:"none",duration:2e3}),201==n.statusCode&&o.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),200==n.statusCode&&o.navigateTo({url:"../choose-address/choose-address?bar="+e.bar+"&fee="+e.fee}),302==n.statusCode&&o.showToast({title:"用户未设置资金密码",icon:"none",duration:2e3})}})},fusre:function(){this.moder=this.bar},clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onChange:function(e){console.log(t(e.show," at my\\transfer\\transfer.vue:134")),0==e.show&&(this.passIn=!1),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onConfirm:function(){6!=this.numberList.length&&o.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(e){var n=this;n.numberList.push(e),n.password=n.numberList.join().replace(/,/g,""),n.numberList.length>=n.length&&(o.request({url:n.url+"assets/capitalcode/",method:"POST",data:{capital_code:n.password},header:{Authorization:"JWT "+n.global_.token},success:function(e){if(console.log(t(e," at my\\transfer\\transfer.vue:168")),400==e.statusCode){n.numberList.pop(),n.numberList.length=0,n.$refs.wrong.flag=!1;var s=e.data.data.err_num,a=5-s;n.$refs.wrong.tip="剩余"+a+"次机会"}423==e.statusCode&&(n.passIn=!1,n.$refs["number"].close(),o.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3})),201==e.statusCode&&(n.passIn=!1,n.$refs["number"].close(),o.redirectTo({url:"../commit/commit?fil_num="+n.fil_num+"&wallet_value="+n.wallet_value}));var r=getCurrentPages().pop();void 0!=r&&null!=r&&r.onLoad()}}),this.numberList.length=0)},save:function(){var e=this,n=parseFloat(e.bar),s=parseFloat(e.fil_num);return""==e.wallet_value?(o.showToast({title:"转账地址不能为空",icon:"none",duration:2e3}),!1):""==e.fil_num?(o.showToast({title:"提币数量不能为空",icon:"none",duration:2e3}),!1):e.fil_num<.001?(o.showToast({title:"请输入正确的金额(提币数量不能少于0.001)",icon:"none",duration:2e3}),!1):s>n?(o.showToast({title:"提币数量余额不足",icon:"none",duration:2e3}),!1):void o.request({url:e.url+"assets/transfer/",method:"POST",data:{fil_num:e.fil_num,address:e.wallet_value},header:{Authorization:"JWT "+this.global_.token},success:function(n){return console.log(t(n," at my\\transfer\\transfer.vue:249")),411==n.statusCode?(o.showToast({title:"未进行实名认证",icon:"none",duration:2e3}),!1):412==n.statusCode?(o.showToast({title:"实名认证中，请耐心等待",icon:"none",duration:2e3}),!1):403==n.statusCode?(o.showToast({title:"资金密码未设置",icon:"none",duration:2e3}),!1):400==n.statusCode?(o.showToast({title:"输入信息有误(提币地址最少32位)",icon:"none",duration:2e3}),!1):423==n.statusCode?(o.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),!1):void(200==n.statusCode&&(e.passIn=!0,e.$refs["number"].open(),e.onInput(val)))}})}}};e.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},cd9c:function(t,e,n){"use strict";n.r(e);var o=n("9de2"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=s.a}},[["64aa","common/runtime","common/vendor"]]]);