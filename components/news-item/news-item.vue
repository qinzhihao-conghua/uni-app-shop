<template>
	<view class="">
		<view class="view-item" v-for="item in newList" :key="item.id" @click="goDetail(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间:{{item.add_time | dateFormat(item.add_time,'yyyy-mm-dd hh:mm:ss')}}</text>
					<text>浏览:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'news-item',
		props:{
			newList:{
				type:Array
			}
		},
		data() {
			return{}
		},
		methods:{
			goDetail(id){
				this.$emit('clickHandle',id);
			}
		}
	}
</script>

<style lang="scss">
	.view-item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 2rpx solid $shop-color;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx;
				text{
					&:nth-of-type(2){
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
