<template>
	<!-- 商品列表 -->
	<view class="goods-list">
		<view class="goods-item" v-for="item in goodsList" :key="item.id" @click="goGoodsDetail(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="goods-price">
				<text class="new">￥{{item.sell_price}}</text>
				<text class="old">￥{{item.market_price}}</text>
			</view>
			<view class="goods-name">
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'good-list',
		props:{
			goodsList:{
				type:Array
			}
		},
		methods:{
			goGoodsDetail(id){
				this.$emit('clickHandle',id);
			}
		}
	}
</script>

<style lang="scss">
	.goods-list{
		padding: 0 16rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods-item{
			background-color: #fff;
			width: 355rpx;
			padding: 16rpx;
			box-sizing: border-box;
			margin-bottom: 16rpx;
			image{
				width: 85%;
				height: 300rpx;
				display: block;
				margin: 0 auto;
			}
			.goods-price{
				color: $shop-color;
				font-size: 36rpx;
				.new{}
				.old{
					color: #ccc;
					font-size: 28rpx;
				}
			}
			.goods-name{
				font-size: 28rpx;
				padding: 16rpx 0;
				line-height: 48rpx;
			}
		}
	}
</style>
