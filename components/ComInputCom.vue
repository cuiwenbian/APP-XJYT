<template>
	<view class="c_form-list-wrap" :class="{ active: itemInputFocus }">
		<view class="title-box am-flex-row-center">
			<view class="default-img-box"><slot name="defaultIcon"></slot></view>
			<view class="default-img-active"><slot name="activeIcon"></slot></view>

			<!-- 	<image src="/static/images/icon-user-n.png" class="icon-img user-n"></image>
			<image src="/static/images/icon-user-n-active.png" class="icon-img icon-img-active user-n"></image> -->
			{{ labelText }}
		</view>
		<view class="write-wrap">
			<view class="inner-input-wrap">
				<input
					:type="type"
					class="write-input"
					@focus="formItemFocus"
					@blur="formItemBlur"
					:style="{ paddingRight: inputPRight }"
					:value="val"
					@input="formItemHandleInput"
					:maxlength="maxlength"
					:password="password"
					:placeholder="placeholder"
				/>
				<view class="handle-btn-wrap"><slot name="handleBtn"></slot></view>
			</view>
		</view>
		<view class="other-info am-flex-rc-between">
			<slot name="footerLeft"></slot>
			<slot name="footerRight"></slot>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		val: {
			type: [Number, String],
			default: ''
		},
		maxlength: {
			type: Number,
			default: 140
		},
		type: {
			type: String,
			default: 'text'
		},
		password: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
		labelText: {
			type: String,
			default: ''
		},
		inputPRight: {
			type: String
		}
	},
	data() {
		return {
			itemInputFocus: false,
		};
	},
	methods: {
		formItemFocus() {
			this.$emit('onFocus');
			this.itemInputFocus = true;
		},
		formItemBlur() {
			this.$emit('onBlur');
			this.itemInputFocus = false;
		},
		formItemHandleInput (event) {
			this.$emit('update:val', event.target.value);
		}
	}
};
</script>

<style lang="scss">
.am-flex-row-center {
	display: flex;
	align-items: center;
}
.am-flex-rc-between {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.c_form-list-wrap {
	$active-color: #02d393;
	$wrap-pl: 46rpx;
	box-sizing: border-box;
	&.active {
		.title-box {
			color: $active-color;
		}
		.default-img-box {
			display: none;
		}
		.default-img-active {
			display: inline-block;
		}
		.write-wrap {
			.write-input {
				border-color: $active-color;
			}
		}
	}
	.default-img-box {
		width: $wrap-pl;
	}
	.default-img-active {
		display: none;
		width: $wrap-pl;
	}
	.title-box {
		color: #333;
		transition: color 0.3s;

		.icon-img {
			margin-right: 18rpx;
			&.user-n {
				width: 26rpx;
				height: 31rpx;
			}
			&.trans-n {
				width: 26rpx;
				height: 25rpx;
			}
			&-active {
				display: none;
				margin-right: 18rpx;
				&.trans-n {
					width: 26rpx;
					height: 26rpx;
				}
			}
		}
	}
	.write-wrap {
		padding-top: 40rpx;
		padding-left: $wrap-pl;
		.write-input {
			$box-hei: 62rpx;
			height: $box-hei;
			width: 100%;
			padding: 0 15rpx;
			line-height: $box-hei;
			color: #000;
			font-size: 28rpx;
			font-weight: normal;
			border: none;
			outline: none;
			border-bottom: 1px solid #929097;
			transition: color 0.3s;
			box-sizing: border-box;
		}
	}
	.other-info {
		height: 48rpx;
		padding-left: $wrap-pl;
		padding-top: 15rpx;
		font-size: 26rpx;
		color: #8b8b8d;
		.tr-num {
			padding: 0 28rpx;
			color: $active-color;
			font-weight: 500;
		}
		.err-tip {
			color: #bc2c34;
		}
	}
}
.inner-input-wrap {
	// overflow: hidden;
	position: relative;
}
.handle-btn-wrap {
	position: absolute;
	z-index: 2;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}
</style>
