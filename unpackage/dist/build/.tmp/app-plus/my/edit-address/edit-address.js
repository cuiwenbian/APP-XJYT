(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/edit-address/edit-address"],{"19cd":function(e,t,n){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("components/keyboard-package/keyboard-package").then(n.bind(null,"2e84"))},a=function(){return n.e("components/password-input/password-input").then(n.bind(null,"2d9e"))},i={data:function(){return{nickname:"",address:"",password:"",id:"",user_id:"",numberList:[],length:6,type:"number",passIn:!1,delShow:!1}},components:{keyboardPackage:o,passwordInput:a},onLoad:function(e){this.nickname=e.wallet_key,this.address=e.wallet_value,this.id=e.id,this.user_id=e.user_id},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{back:function(){e.navigateBack({delta:1})},clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},cloo:function(){this.delShow=!1,this.$refs["numbers"].close(),this.numberList.length=0},onChange:function(e){console.log(s(e.show," at my\\edit-address\\edit-address.vue:96")),0==e.show&&(this.passIn=!1),this.numberList.length=0},onChange1:function(e){console.log(s(e.show," at my\\edit-address\\edit-address.vue:103")),0==e.show&&(this.delShow=!1),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onConfirm:function(){6!=this.numberList.length&&e.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},getAddress:function(e){this.address=e.detail.value},getRemark:function(e){this.nickname=e.detail.value},save:function(){return""==this.address?(e.showToast({title:"请输入提币地址",icon:"none",duration:2e3}),!1):this.address.length<=32?(e.showToast({title:"提币地址最少32位",icon:"none",duration:2e3}),!1):""==this.nickname?(e.showToast({title:"请输入地址备注",icon:"none",duration:2e3}),!1):(this.passIn=!0,this.$refs["number"].open(),void this.onInput(val))},onInput:function(t){var n=this;n.numberList.push(t),console.log(s(n.numberList.join().replace(/,/g,"")," at my\\edit-address\\edit-address.vue:161")),n.password=n.numberList.join().replace(/,/g,""),console.log(s(n.password," at my\\edit-address\\edit-address.vue:163")),n.numberList.length>=n.length&&(e.request({url:n.url+"updatadeleteaddress/",method:"PUT",data:{wallet_value:n.address,wallet_key:n.nickname,id:n.id,password:n.password,user_id:n.user_id},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(console.log(s(t," at my\\edit-address\\edit-address.vue:180")),400==t.statusCode){n.numberList.pop(),n.numberList.length=0,n.$refs.wrong.flag=!1;var o=t.data.data.err_num,a=5-o;n.$refs.wrong.tip="剩余"+a+"次机会"}423==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3})),204==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.navigateBack({delta:1}),e.showToast({title:"修改成功",icon:"none",duration:1500}));var i=getCurrentPages().pop();void 0!=i&&null!=i&&i.onLoad()}}),this.numberList.length=0)},onNavigationBarButtonTap:function(){this.delShow=!0,this.$refs["numbers"].open(),this.onInput1(val)},onInput1:function(t){var n=this;n.numberList.push(t),n.password=n.numberList.join().replace(/,/g,""),n.numberList.length>=n.length&&(e.request({url:n.url+"updatadeleteaddress/",method:"DELETE",data:{id:this.id,password:this.password},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(console.log(s(t," at my\\edit-address\\edit-address.vue:243")),204==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.showToast({title:"删除成功",icon:"none",duration:2e3}),e.navigateBack({delta:1})),400==t.statusCode){n.numberList.pop(),n.numberList.length=0,n.$refs.wrong.flag=!1;var o=t.data.data.err_num,a=5-o;n.$refs.wrong.tip="剩余"+a+"次机会"}423==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}));var i=getCurrentPages().pop();void 0!=i&&null!=i&&i.onLoad()}}),this.numberList.length=0)}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},2217:function(e,t,n){"use strict";n.r(t);var s=n("19cd"),o=n.n(s);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);t["default"]=o.a},"27e0":function(e,t,n){"use strict";n.r(t);var s=n("4769"),o=n("2217");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("df0b");var i=n("2877"),r=Object(i["a"])(o["default"],s["a"],s["b"],!1,null,null,null);t["default"]=r.exports},4769:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o})},bc1a:function(e,t,n){"use strict";(function(e){n("c860"),n("921b");s(n("66fd"));var t=s(n("27e0"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},df0b:function(e,t,n){"use strict";var s=n("f326"),o=n.n(s);o.a},f326:function(e,t,n){}},[["bc1a","common/runtime","common/vendor"]]]);