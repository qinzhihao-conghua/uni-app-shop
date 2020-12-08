<template>
	<view class="news-detail">
		<view class="title">
			{{newsDetail.title}}
		</view>
		<view class="info">
			<text>发表时间:{{newsDetail.add_time | dateFormat(newsDetail.add_time,'yyyy-mm-dd hh:mm:ss')}}</text>
			<text>浏览:{{newsDetail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="newsDetail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsDetail:{}
			}
		},
		onLoad(option) {
			this.getNewsDetail(option.id);
		},
		methods: {
			async getNewsDetail(id){
				const res=await this.httpService({
					url:`/api/getnew/${id}`
				});
				console.log(res);
				this.newsDetail=res.data.message[0];
			}
		}
	}
</script>

<style lang="scss">
	.news-detail{
		font-size: 30rpx;
		padding: 20rpx;
		.title{
			display: block;
			width: 710rpx;
			text-align: center;
			margin: 40rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		},
		.content{}
	}
</style>
