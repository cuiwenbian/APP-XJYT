<template>
	<!-- 资产 -->
	<view class="container">
		<view class="height"></view>
		<view class="box">
			<text class="assets">总资产</text>
			<view class="number">{{num}} FIL</view>
			<text class="coin">可用币: 
                <text class="berot">{{ber}}</text>
            </text>
			<text class="lock">锁定币: 
                <text class="berot">{{nuber}}</text>
            </text>
		</view>
		<view class="btn">
			<button class="primary">提交</button>
			<button class="primary1" @click="btn">转账</button>
		</view>
		<view class="haide">
			<view class="swiper-tab">
				<view v-for="(item, index) in navList" :key="index" class="tab-item" :class="{ current: tabCurrentIndex === index }"
				 @click="tabClick(index)">
					{{item.text}}
				</view>
			</view>
			<view class="list" v-if="tabCurrentIndex === 0">
				<view>
					<text class="all1">Filecoin:{{month_profit}}</text>
					<div class="item">
						<dyDatePicker  :value="date"   timeType="month" @getData="DateChange" :placeholder="date"></dyDatePicker>
					</div>
					<view v-if="flag">
						<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
						<view class="info">暂无记录</view>
					</view>
					<view v-else class="boxx">
						<view class="list-one" v-for="(item , index) in ention" :key="index">
							<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
							<view class='list-txt'>
								<view class='list-info'>收款</view>
								<view class='list-time'>{{item.add_time}}</view>
							</view>
							<view class='list-income'>+{{item.num}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list" v-if="tabCurrentIndex === 1">
				<scroll-view scroll-y='true'>
					<view>
						<text class="all1">Filecoin:{{profit}}</text>
						<div class="item">
							<dyDatePicker timeType="month" :value="date1" @getData="DateChang" :placeholder="date1" ></dyDatePicker>
						</div>
						<view v-if="flag">
							<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
							<view class="info">暂无记录</view>
						</view>
						<view v-else class="boxx">	
							<view class="list-one" v-for="(item , index) in entin" :key="index">
								<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
								<view class='list-txt'>
									<view class='list-info'>支出</view>
									<view class='list-time'>{{item.add_time}}</view>
								</view>
								<view class='list-income'>-{{item.num}}</view>
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
				num: '',
				ber: '',
				nuber: '',
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
						text: '收入记录'

					},
					{
						state: 1,
						text: '支出记录'

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
		onLoad: function(opetions) {
			var that = this
			var data = new Date()
			var text = data.getFullYear('-')
			var txt = data.getMonth()+1
			var teran = text + '-' + txt
			that.teran = teran
            console.log(teran)
			uni.request({
				url: this.url + "assets/",
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					console.log(res)
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
					console.log(res.data.data)
					var seront = res.data.data
					var ention = res.data.data.profit_records
					that.ention = ention
					console.log(ention)
					that.month_profit = seront.month_profit
                    console.log(that.month_profit)
					that.add_item = ention[0].add_time
					that.numm = ention[0].num
					console.log(ention)
					if(ention.length==0){
						that.flag=true
					}else{
						that.flag=false
					}
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
                    		console.log(res.data.data)
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
                    		that.add_item = ention[0].add_time
                    		that.numm = ention[0].num
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
                    		console.log(res)
                    		console.log(res.data.data)
                    		var seron = res.data.data
                    		var entin = res.data.data.bill_records
                    		that.entin = entin
            
                    		console.log(entin)
							if(entin.length==0){
								that.flag=true
							}else{
								that.flag=false
							}
                    		that.profit = seron.month_bill
                    		that.add_item = entin[0].add_time
                    		that.numm = entin[0].num
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
					url: '/my/transfer/transfer?bar=' + this.ber + '&fee=' + this.fee,
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
						console.log(res)
					}
				})
			},
			DateChange(e) {
				var that = this
                console.log(that.date)
				console.log(e)
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
						console.log(res.data.data)
						var seront = res.data.data
                        console.log(seront)
						var ention = res.data.data.profit_records
						that.ention = ention
						console.log(ention.length)
						if(ention.length == 0){
							that.flag=true
						}else{
							that.flag=false
						}
						that.month_profit = seront.month_profit
                        // console.log(that.month_profit)
						that.add_time = ention[0].add_time
						that.numm = ention[0].num
                        
                       

					}
				})
			},
			DateChang(e) {
				var that = this
				console.log(e)
				
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
						console.log(res.data.data)
						var seron = res.data.data
						var entin = res.data.data.bill_records
						that.entin = entin
						console.log(entin)
						if(entin.length == 0){
							that.flag=true
						}else{
							that.flag=false
						}
						that.profit = seron.month_bill
						that.add_item = entin[0].add_time
						that.numm = entin[0].num


					}
				})
			},
			transfer: function() {
				uni.navigateTo({
					url: '../transfer/transfer'
				})
			}


		}
	}
</script>

<style>
	.height {
		height: var(--status-bar-height);
		background-color: #121212;
	}
	.box {
		width: 100%;
		height: 400rpx;
		background-color: #121212;
	}
	.boxx {
		height: 100%;
	}
	.item {
		height: 70rpx;
        font-size: 22rpx;
		background-color: #EDEDED;
        padding-top: 20rpx;
        padding-left: 45rpx;
		/* margin-bottom: 20rpx; */
		text-align: left;
	}
	.assets {
		text-align: center;
		padding-top: 80rpx;
		height: 60rpx;
		width: 100%;
		float: left;
		color: #FFFFFF;
	}
	.number {
		height: 300rpx;
		padding-left: 268rpx;
		padding-top: 40rpx;
		color: #F0AD4E;
	}

	.coin {
		float: left;
		padding-left: 48rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}

	.lock {
		float: right;
		padding-right: 48rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}
    .berot{
        font-size: 24rpx;
        color:#F0AD4E ;
    }
	.btn {
		height: 150rpx;
		width: 100%;
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

	.primary {
		width: 220rpx;
		height: 88rpx;
		float: left;
		margin-left: 48rpx;
		margin-top: 40rpx;
        font-size: 32rpx;
	}

	.primary1 {
		width: 220rpx;
        font-size: 32rpx;
		height: 88rpx;
		float: right;
		margin-right: 48rpx;

		margin-top: 40rpx;
		background-color: #121212;
		color: #FFFFFF;
	}

	.haide {
		width: 100%;
		height: 60rpx;
		background-color: #EDEDED;
	}

	.transfer {
		width: 130rpx;
		height: 130rpx;
		display: block;
		margin: 150rpx auto 20rpx;
	}

	.info {
		text-align: center;
		font-size: 32rpx;
	}

	.all1 {
		float: right;
		font-size: 30rpx;
		color: #333;
        margin-top: 20rpx;
		margin-right: 48rpx;
	}

	.list {
		height: 100;
	}

	.list-one {
		width: 100%;
		height: 116rpx;
		background: #fff;
		padding-left: 50rpx;
		box-sizing: border-box;

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
		color: #121212;
		line-height: 50rpx;
	}

	.list-info {
		font-size: 30rpx;
	}

	.list-time {
		font-size: 30rpx;
	}

	.list-income {
		float: right;
		margin-right: 48rpx;
		line-height: 100rpx;
		color: #41BEC9;
		font-size: 34rpx;
	}

	.swiper-tab {

		display: flex;

		flex-direction: row;

		line-height: 80rpx;

		background: #EDEDED;
		
		padding-left:48rpx;
		
		box-sizing: border-box;
	}

	.tab-item {

		width: 25%;
		height: auto;
		text-align: center;
		font-size: 30rpx;

		color: #777;
	}

	.current {
        width: 25%;
		color: #B39C01;
		border-bottom: 2rpx solid #B39C01;
	}


</style>
