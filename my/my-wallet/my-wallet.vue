<template>
	<!-- 资产 -->
	<view class="container">
		<view class="banner">
			<view class="all">
				总资产
			</view>
			<view class='assets'>0.000000</view>
			<view class="coins">
				<view class='availed_num'>可用币：54.47854</view>
				<view class='lock_num'>可用币：0.00</view>
				<button type="primary" class="transer">转账</button>
			</view>
		</view>
		<!-- <image class="banner" src="../../static/images/wallet-banner.png" mode="">
			
		</image> -->
		<view class='mill'> 
			<view class="machine">
				<view>0</view>
				<view>矿机收益</view>
			</view>
			<view class="machine">
				<view>0</view>
				<view>存力收益</view>
			</view>
		</view>
		<view class='line'></view>
		<view class="haide">
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
			</view>
			<view class="list" v-if="tabCurrentIndex === 0">
				<view>
					<text class="all1">FIL:{{month_profit}}</text>
					<div class="item">
                        <dyDatePicker  :value="date"   timeType="month" @getData="DateChange" :placeholder="date"></dyDatePicker>
					</div>
					<view v-if="flag">
						<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
						<view class="info">没有记录～</view>
					</view>
					<view v-else class="boxx">
						<view class="list-one" v-for="(item , index) in ention" :key="index">
							<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
							<view class='list-txt'>
								<view class='list-info'>收款</view>
								<view class='list-time'>{{item.add_time}}</view>
							</view>
							<view class='list-income'>+{{item.num}}</view>
                            <view class="l"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="list" v-if="tabCurrentIndex === 1">
				<scroll-view scroll-y='true'>
					<view>
						<text class="all1">FIL:{{profit}}</text>
						<div class="item">
							<dyDatePicker timeType="month" :value="date1" @getData="DateChang" :placeholder="date1" ></dyDatePicker>
						</div>
						<view v-if="flag">
							<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
							<view class="info">没有记录～</view>
						</view>
						<view v-else class="boxx">	
							<view class="list-one" v-for="(item , index) in entin" :key="index">
								<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
								<view class='list-txt'>
									<view class='list-info'>支出</view>
									<view class='list-time'>{{item.add_time}}</view>
								</view>
								<view class='list-income'>-{{item.num}}</view>
                                <view class="l"></view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>                 
		</view>
	</view>
	</view>
</template>

<script>
    import dyDatePicker from '../../common/dy-Date.vue'
	export default {
		data() {
			return {
				num: '0.0000',
				ber: '0.0000',
				
				nuber: '0.0000',
				fee: '',
				month_profit: '0',
				numm: '',
				tabCurrentIndex: 0,
				add_item: '',
				profit:'0',
				entin: '',
				flag: false,
				ention: '',
				//控制下拉列表的显示隐藏，false隐藏、true显示
				index: 0,
				//选择的下拉列表下标
				navList: [{
						state: 0,
						text: '收入'
					},
					{
						state: 1,
						text: '支出'
					}
				],
				date: '本月',
				date1: '本月',
				teran: ''
			}
		},
        components: {
        	dyDatePicker
        },
		onShow: function(opetions) {
            var that = this
			var data = new Date()
			var text = data.getFullYear('-')
			var txt = data.getMonth()+1
			var teran = text + '-' + txt
			that.teran = teran
			uni.request({
				url: this.url + "assets/",
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					that.num = res.data.fil_count
					that.ber = res.data.availed_num
					that.nuber = res.data.locked_num
					that.fee = res.data.fee
				}
			})
            // 这是收入记录请求API
			uni.request({
				url: this.url + 'assets/month/profit/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				data: {
					month: teran
				},
				success(res) {
					console.log(res)
					var seront = res.data.data
					var ention = res.data.data.profit_records
					that.ention = ention
					if(ention.length==0){
						that.flag=true
					}else{
						that.flag=false
					}
					that.month_profit = seront.month_profit
				}
			})
		},
		methods: {
			tabClick: function(index) {
				var that = this
                var data = new Date()
                var text = data.getFullYear('-')
                var txt = data.getMonth()+1
                var teran = text + '-' + txt
                that.teran = teran
				if (this.tabCurrentIndex === index) {
					return false
				} else {
					that.tabCurrentIndex = index
				}if(this.tabCurrentIndex === 0){
					that.date="本月";
                    uni.request({
                    	url: this.url + 'assets/month/profit/',
                    	method: 'GET',
                    	header: {
                    		Authorization: 'JWT' + ' ' + this.global_.token
                    	},
                    	data: {
                    		month: teran
                    	},
                    	success(res) {
                    		var seront = res.data.data
                    		var ention = res.data.data.profit_records
                    		that.ention = ention
                    		console.log(ention)
							if(ention.length==0){
								that.flag=true
							}else{
								that.flag=false
							}
                    		that.month_profit = seront.month_profit
                    	}
                    })
                }
                if(this.tabCurrentIndex === 1){
				    that.date1="本月";
                    uni.request({
                    	url: this.url + 'assets/month/bill/',
                    	method: 'GET',
                    	header: {
                    		Authorization: 'JWT' + ' ' + this.global_.token
                    	},
                    	data: {
                    		month: teran
                    	},
                    	success(res) {
                    		var seron = res.data.data
                    		var entin = res.data.data.bill_records
                    		that.entin = entin
							if(entin.length==0){
								that.flag=true
							}else{
								that.flag=false
							}
                    		that.profit = seron.month_bill
                    	}
                    })
                }
			},
			bindChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			btn() {
				uni.navigateTo({
					url: '../../my/transfer/transfer?bar=' + this.ber + '&fee=' + this.fee,
				})
			},
			btnCoin(){
				uni.showToast({
					title:'此功能暂未开放',
					duration:2000,
					icon:'none'
				})
			},
			optionTap(e) {
				var that = this;
				let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
				var time = this.selectData[Index];
				this.index = Index,
					this.selectShow = !this.selectShow
				uni.request({
					url: this.url + 'month/profit/',
					method: 'GET',
					data: {
						month: that.selectData[that.index]
					},
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success(res) {
					}
				})
			},
			DateChange(e) {
				var that = this
				that.date = e
				uni.request({
					url: this.url + 'assets/month/profit/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					data: {
						month: e
					},
					success(res) {
						var seront = res.data.data
						var ention = res.data.data.profit_records
						that.ention = ention
						if(ention.length == 0){
							that.flag=true
						}else{
							that.flag=false
						}
						that.month_profit = seront.month_profit
					}
				})
			},
			DateChang(e) {
				var that = this
				this.date1 = e
				uni.request({
					url: this.url + 'assets/month/bill/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					data: {
						month: e
					},
					success(res) {
						var seron = res.data.data
						var entin = res.data.data.bill_records
						that.entin = entin
						if(entin.length == 0){
							that.flag=true
						}else{
							that.flag=false
						}
						that.profit = seron.month_bill
					}
				})
			},
			
		}
	}
</script>

<style>
	page{
		background:#121E2C;
	}
	.banner{
		width:706rpx;
		height:296rpx;
		display: block;
		margin:35rpx auto;
		background-image: url('../../static/images/wallet-banner.png');
		background-size: 706rpx 296rpx;
		position: relative;
		padding-top:69rpx;
		padding-left:60rpx;
		box-sizing: border-box;
	}
	.all{
		font-size: 30rpx;
		color:#FFFFFF;
	}
	.assets{
		font-size: 42rpx;
		color:#FFFFFF;
		margin-top:19rpx;
	}
	.coins{
		width:100%;
		height:46rpx;
		margin-top:35rpx;
	}
	.availed_num{
		float: left;
		font-size: 24rpx;
		color:#FFFFFF;
		margin-right:20rpx;
	}
	.lock_num{
		float: left;
		font-size: 24rpx;
		color:#FFFFFF;
	}
	.transer{
		float:right;
		width:110rpx;
		height:46rpx;
		color:#FFFFFF;
		text-align: center;
		font-size: 22rpx;
		line-height: 46rpx;
		background: #41BEC9;
		margin-top:-20rpx;
		margin-right: 38rpx;
	}
	.mill{
		width:100%;
		height:165rpx;
	}
	.machine{
		width:50%;
		height:100%;
		float: left;
		text-align: center;
	}
	.line{
		width:100%;
		height:20rpx;
		background: #091926;
	}
.item {
		height: 70rpx;
        font-size: 22rpx;
        padding-top: 20rpx;
        padding-left: 45rpx;
		text-align: left;
	}
	.picker {
		width: 30%;
		text-align: center;
		margin-top: 40rpx;
		margin-left: 40rpx;
		font-size: 30rpx;
		border: 2rpx solid #CCCCCC;
		border-radius: 25rpx;
	}

	.haide {
		width: 100%;
		height: 60rpx;
		background-color: #EDEDED;
	}
	.transfer {
		width: 234rpx;
		height: 147rpx;
		display: block;
		margin: 152rpx auto 35rpx;
	}
	.info {
		text-align: center;
        color:#8796AA;
		font-size: 26rpx;
	}
	.all1 {
		float: right;
		font-size: 24rpx;
		color: #FFFFFF;
        margin-top: 20rpx;
		margin-right: 48rpx;
	}
	.list {
		height: 100;
	}
	.list-one {
		width: 100%;
		height: 116rpx;
		background:#121E2C;
		padding-left: 50rpx;
		box-sizing: border-box;
        position: relative;
	}
	.list-icon {
		float: left;
		width: 70rpx;
		height: 70rpx;
		display: block;
		margin-top: 15rpx;
	}
	.list-txt {
		float: left;
		margin-left: 20rpx;
		color: #FFFFFF;
		line-height: 50rpx;
	}
	.list-info {
		font-size: 26rpx;
	}
	.list-time {
		font-size: 30rpx;
		color:#8796AA;
	}
	.list-income {
		float: right;
		margin-right: 48rpx;
		line-height: 100rpx;
		color: #FFFFFF;
		font-size: 30rpx;
	}
	.navbar {
		display: flex;
		height: 98rpx;
		
		background: #121E2C;
		position: relative;
		z-index: 10;
	}
	.nav-item {
		float:left;
		width:20%;
		height: 100%;
		font-size: 26rpx;
		color: #FFFFFF;
		position: relative;
		text-align: center;
		line-height: 98rpx;
	}
	.current {
		color: #41bec9;
	}
	.current:after {
		content: '';
		width: 66rpx;
		height: 1rpx;
		background: #41bec9;
		position: absolute;
		top: 80rpx;
		left: 40rpx;
	}
    
</style>
