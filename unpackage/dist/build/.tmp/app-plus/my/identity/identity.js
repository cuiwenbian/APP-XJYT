(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/identity/identity"],{"73a8":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"826d":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("a315"),o={data:function(){return{name:"",idcard:"",imgs:[],picPaths:[],positive:"positive",reverse:"reverse",pos:"",rev:"",type:"",p_flag:!0,r_flag:!0,p_url:"",r_url:"",shade:!1}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getName:function(e){this.name=e.detail.value},getIdcard:function(e){this.idcard=e.detail.value},chooseImageTap:function(t){var i=this,n=t.currentTarget.dataset.flag;e.showActionSheet({itemList:["从相册中选择","拍照"],itemColor:"#00000",success:function(e){e.cancel||(0==e.tapIndex?("positive"==n&&i.chooseWxImage1("album"),"reverse"==n&&i.chooseWxImage2("album")):1==e.tapIndex&&("positive"==n&&i.chooseWxImage1("camera"),"reverse"==n&&i.chooseWxImage2("camera")))}})},chooseWxImage1:function(t){var i=this,n=i.imgs,a={};e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(e){for(var t=n.length-1;t>=0;t--)for(var o in n[t])"positive"==o&&n.splice(t,1);a.positive=e.tempFilePaths[0],i.imgs.push(a),i.p_url=e.tempFilePaths[0],i.p_flag=!1,i.imgs=i.imgs}})},chooseWxImage2:function(t){var i=this,n=i.imgs,a={};e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(e){for(var t=n.length-1;t>=0;t--)for(var o in n[t])"reverse"==o&&n.splice(t,1);a.reverse=e.tempFilePaths[0],i.imgs.push(a),i.r_url=e.tempFilePaths[0],i.r_flag=!1,i.imgs=i.imgs,i.rev=n[1].reverse,i.pos=n[0].positive}})},upImgs:function(t,i){var a=this,o=this.global_.token;for(var s in t[i])e.uploadFile({url:this.url+"realname/",filePath:t[i][s],name:s,header:{Authorization:"JWT "+o},formData:null,success:function(s){if(400==s.statusCode)return e.showToast({title:"图片太大，请重新上传",icon:"none",duration:2e3}),!1;i++,i==t.length?e.request({url:a.url+"realname/",method:"POST",data:{name:a.name,idcard:a.idcard},header:{Authorization:"JWT "+o},success:function(t){if(console.log(n(t," at my\\identity\\identity.vue:239")),400==t.statusCode)return e.showToast({title:"身份证号已存在，请重新认证",icon:"none",duration:2e3}),!1;200==t.statusCode&&(a.shade=!0)}}):a.upImgs(t,i)},fail:function(e){}})},submitt:function(){var t=this;if(!t.name)return e.showToast({title:"用户名不能为空",icon:"none"}),!1;if(!t.idcard)return e.showToast({title:"身份证号不能为空",icon:"none"}),!1;var i=a.checkIdcard(t.idcard);return i?2!==t.imgs.length?(e.showToast({title:"身份证照不全",icon:"none"}),!1):void t.upImgs(t.imgs,0):(e.showToast({title:"身份证格式不正确",icon:"none",duration:2e3}),!1)},sure:function(){e.switchTab({url:"../../pages/my/my"})}}};t.default=o}).call(this,i("6e42")["default"],i("0de9")["default"])},"9ff0":function(e,t,i){"use strict";(function(e){i("9c0b"),i("921b");n(i("66fd"));var t=n(i("bcd0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},a19b:function(e,t,i){"use strict";var n=i("d488"),a=i.n(n);a.a},bcd0:function(e,t,i){"use strict";i.r(t);var n=i("73a8"),a=i("ee6c");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("a19b");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},d488:function(e,t,i){},ee6c:function(e,t,i){"use strict";i.r(t);var n=i("826d"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a}},[["9ff0","common/runtime","common/vendor"]]]);