<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view class="left-item" :class="active===index?'active':''" 
				v-for="(item,index) in pics" :key="item.id" @click="tabSwitch(index,item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true">
			<view class="item" v-for="item in cateDetails" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"  mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="cateDetails.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pics:[],
				active:0,
				cateDetails:[]
			}
		},
		onLoad() {
			this.getPicsCate();
		},
		methods: {
			async getPicsCate(){
				const res=await this.httpService({
					url:'/api/getimgcategory'
				});
				this.pics=res.data.message;
				this.getPicsCate(this.pics[0].id);
			},
			async getCateDetails(id){
				const res=await this.httpService({
					url:`/api/getimages/${id}`
				});
				this.cateDetails=res.data.message;
			},
			tabSwitch(index,id){
				this.active=index;
				this.getCateDetails(id);
			},
			previewImg(current){
				const urls=this.cateDetails.map(item=>{
					return item.img_url;
				});
				uni.previewImage({
					current:current,
					urls:urls
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	.pics{
		height: 100%;
		display: flex;
		.left{
			height: 100%;
			width: 200rpx;
			border-right: 2rpx solid #eee;
			margin-top: 2rpx;
			.left-item{
				height: 120rpx;
				line-height: 120rpx;
				border-bottom: 2rpx solid #eee;
				text-align: center;
				font-size: 30rpx;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 12rpx;
				}
				text{
					font-size: 30rpx;
					line-height: 50rpx;
				}
			}
		}
	}
}
</style>
