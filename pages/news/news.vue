<template>
	<view class="view">
		<news-item @clickHandle="goDetail($event)" :newList="newList"></news-item>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newList:[]
			};
		},
		onLoad() {
			this.getNewsList();
		},
		methods:{
			async getNewsList(){
				const res=await this.httpService({
					url:'/api/getnewslist'
				});
				this.newList=res.data.message;
			},
			goDetail(value){
				console.log(value);
				uni.navigateTo({
					url:`/pages/news-detail/news-detail?id=${value}`
				})
			}
		}
	}
</script>

<style lang="scss">
.view{
	
}
</style>
