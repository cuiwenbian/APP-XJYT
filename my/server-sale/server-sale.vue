<template>
    <view class="container">
        <view>
            <view class="tet">输入手机号</view>
            <input type="number" placeholder="请输入收购人手机号" :value="coloe" class="inp" @input="end">
            <view class="bor">
            </view>
        </view>
        <button class="btn" @click="btn">完成</button>
        <!-- #ifndef H5 -->
        <password-input v-if="passIn" @clo="clo" ref='wrong' @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
        <!-- #endif -->
        <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
        <!-- #ifdef H5 -->
        <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" ref='wrong' :list="numberList"></password-input></view>
        <!-- #endif -->
        <!-- 数字键盘 -->
        <keyboard-package  ref="number" @onChange='onChange' @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
    </view>
</template>

<script>
    import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
    import passwordInput from '../../components/password-input/password-input.vue';
    export default {
        data() {
            return {
                coloe:'',
                title: '',
                id: '',
                numberList: [],
                length: 6,
                type: 'number',
                passIn: false,
                password: '',
                way:'',
                cool:'',
                info: {}
            }
        },
        components: {
        	keyboardPackage,
        	passwordInput
        },
        onLoad(options) {
            console.log(options);
            var title = '';
            if (options.type === '1') {
                title = '转让'
            } else if (options.type === '2') {
                title = '出售'
            } else {
                return false;
            }
            uni.setNavigationBarTitle({
               title: '服务器' + title
            });
            this.title = title;
            this.info = JSON.parse(options.info);
            this.way = options.type//类型
            this.cool = parseInt(this.info.coloe)
            this.id = parseInt(this.info.id)//数量
            
            console.log(this.info)
            console.log(this.id)

        },
        methods:{
            onBackPress(option){
                 plus.key.hideSoftKeybord()    
            },
            end:function (e) {
                this.coloe = e.detail.value
                console.log(this.coloe)
            },
            clo: function() {
            	this.passIn = false;
            	this.$refs['number'].close();
            	this.numberList.length= 0;
            },
            onDelete() {
            	this.numberList.pop();
            },
            onChange(e){
            	if(e.show==false){
            		this.passIn = false
            	}
            	this.numberList.length= 0;
            },
            onConfirm() {
            	if(this.numberList.length!=6){
            		uni.showToast({
            			title: '请输入六位交易密码！',
            			duration: 2000,
            			icon: 'none'
            		});
            	}
            },
            onInput(val) {
            	var that=this;
            	that.numberList.push(val);
            	that.password = that.numberList.join().replace(/,/g, '');
            	if (that.numberList.length >= that.length) {
                    console.log(that.way)
            		uni.request({
            			url: this.url + 'usermachine/transfer/',
            			method: 'POST',
            			data: {
                            way:that.way,
                            number:that.cool,
                            mobile:that.coloe,
                            password:that.password,
                            type:that.id
            			},
            			header: {
            				Authorization: 'JWT' + ' ' + that.global_.token
            			},
            			success(res) {
                            console.log(res)
                            console.log(that.way)
                            console.log(that.password)
                            if(res.statusCode == 200){
                                uni.navigateTo({
                                    url:'../sful/sful?numb=' + that.coloe + '&cool=' + that.cool
                                })
                            }
            				if (res.statusCode == 204) {
            					that.passIn = false;
            					that.$refs['number'].close();
            					uni.showToast({
            						title: '删除成功',
            						icon: 'none',
            						duration: 2000
            					});
            				}
            				if(res.statusCode==401){
            					that.$refs.wrong.flag=false;
            					var n=res.data.data.err_num;
            					var s=5-n;
            					that.$refs.wrong.tip='剩余'+ s +'次机会';
            				}
            				if(res.statusCode==423){
            					that.passIn = false;
            					that.$refs['number'].close();
            					uni.showToast({
            						title:'交易密码已锁定,请在今日24:00后进行交易',
            						icon:'none',
            						duration:2000
            					})
            				}
                            if(res.statusCode == 302){
                                uni.showToast({
                                    title:'不允许转让经销商',
                                    icon:'none'
                                })
                            }
                            if(res.statusCode == 305){
                                uni.showToast({
                                    title:'交易发生错误，请重新创建',
                                    icon:'none'
                                })
                            }
            				var page = getCurrentPages().pop();
            				if (page == undefined || page == null) return;
            				page.onLoad();
            			},
            		});
            		this.numberList.length = 0;
            	}	 
            },
            //点击删除按钮
            btn: function(item) {
                var _self = this;
               if (this.coloe == '') {
                        uni.showToast({
                            icon: 'none',
                            title: '请输入手机号'
                        });
                        return false;
                    }
                    var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
                    if (!myreg.test(this.coloe)) {
                        uni.showToast({
                            title: '请输入正确的手机号',
                            icon: 'none',
                            mask: true,
                            duration: 2000
                        });
                        return false;
                    }
            	var that = this;
            	this.passIn = true;
            	this.$refs['number'].open();
            	this.onInput(val);
            },
            
        }
    }
</script>

<style>
.tet{
    padding-top: 110rpx;
    padding-left: 42rpx;
    color: #333333;
    font-weight:600;
    font-size: 42rpx;
}
.inp{
    font-size: 26rpx;
    padding-left: 42rpx;
    padding-top: 86rpx;
}
.bor{
    width: 90%;
    margin: 0 auto;
    border-bottom: 1rpx solid #F5F5F5;
}
.btn {
    width: 690rpx;
    height: 90rpx;
    background-color: #040404;
    color: #FFFFFF;
    margin-top: 220rpx;
    text-align: center;
}
</style>
