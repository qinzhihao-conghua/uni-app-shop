<template>
	<view class="goods-conatiner">
		<goods-list @clickHandle="goGoodsDetail($event)" :goodsList="goodsList"></goods-list>
		<text v-if="flag">---我是有底线的---</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[],
				pageindex:1,
				flag:false
			}
		},
		onLoad() {
			this.getGoodsList();
		},
		methods: {
			async getGoodsList(callbanck){
				const res=await this.httpService({
					url:`/api/getgoods?pageindex=${this.pageindex}`
				});
				this.goodsList=[...this.goodsList,...res.data.message];
				callbanck&&callbanck();
			},
			goGoodsDetail(value){
				uni.navigateTo({
					url:`/pages/goods-detail/goods-detail?id=${value}`
				})
			}
		},
		onReachBottom() {
			if(this.goodsList.length<this.pageindex*10){
				return this.flag=true;
			}
			this.pageindex++;
			this.getGoodsList();
		},
		onPullDownRefresh() {
			this.pageindex=1;
			this.flag=false;
			setTimeout(()=>{
			    this.goodsList=[];
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh();
				});
			},500);
		}
	}
</script>

<style lang="scss">
.goods-conatiner{
	background-color: #eee;
}
</style>
