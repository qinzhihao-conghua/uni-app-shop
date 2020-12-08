<template>
	<view class="contact">
		<image class="img" src="../../static/icon/cart-active.png" mode=""></image>
		<view class="info">
			<view class="phone" @click="call()">
				电话：13456789888（点击拨打）
			</view>
			<view class="addr">
				地址:南宁市
			</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:108.366492,
				latitude:22.818136,
				markers:[{
					latitude: 22.818136,
					longitude: 108.366492,
					iconPath: '../../static/address.jpg',
					width:30,
					height:50
				}]
			}
		},
		methods: {
			call(){
				uni.makePhoneCall({
					phoneNumber:'1355000000'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			line-height: 54rpx;
			font-size: 30rpx;
			padding: 8rpx 32rpx;
			.phone{
				height: 64rpx;
				border-bottom: 2rpx solid #ccc;
			}
			.addr{
				height: 64rpx;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
