<template>
	<view class="goods-detail">
		<swiper indicator-dots class="swip">
			<swiper-item v-for="(item,index) in swiper" :key="index">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="pric-con">
			<view class="pric-item">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<view class="goods-name">
				{{info.title}}
			</view>
		</view>
		<view class="line"></view>
		<view class="info">
			<view class="info-num">
				<view>货号：{{info.goods_no}}</view>
				<view>库存：{{info.stock_quantity}}</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="detail">
			<view class="title">
				详情信息
			</view>
			<view class="content">
				<view class="content-tit">
					{{desc.title}}
				</view>
				<rich-text :nodes="desc.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[],
				info:{},
				desc:{}
			}
		},
		onLoad(option) {
			this.getGoodsDetail(option.id);
			this.getSwiper(option.id);
			this.getDesc(option.id);
		},
		methods: {
			async getGoodsDetail(id){
				const res= await this.httpService({
					url:`/api/goods/getinfo/${id}`
				});
				this.info=res.data.message[0];
			},
			async getSwiper(id){
				const res= await this.httpService({
					url:`/api/getthumimages/${id}`
				});
				this.swiper=res.data.message;
			},
			async getDesc(id){
				const res= await this.httpService({
					url:`/api/goods/getdesc/${id}`
				});
				this.desc=res.data.message[0];
			}
		}
	}
</script>

<style lang="scss">
	.goods-detail{
		.line{
			height: 10rpx;
			width: 750rpx;
			background-color: #eee;
		}
		.swip{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.pric-con{
			padding: 20rpx;
			.pric-item{
				font-size: 36rpx;
				color: $shop-color;
				line-height: 80rpx;
				text{
					&:nth-of-type(2){
						color: #ccc;
						font-size: 28rpx;
						text-decoration: line-through;
						margin-left: 30rpx;
					}
				}
			}
			.goods-name{
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.info{
			padding: 0 20rpx;
			font-size: 32rpx;
			line-height: 60rpx;
			.info-num{
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.detail{
			padding: 20rpx;
			.title{
				font-size: 32rpx;
				line-height: 60rpx;
				text-align: center;
			}
			.content{
				font-size: 28rpx;
				color: #333;
				line-height: 60rpx;
				.content-tit{
					text-align: center;
				}
			}
		}
	}
</style>
