<template>
	<view >
		<swiper class="swiper" indicator-dots="true" :autoplay="true" interval="2000" duration="500">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="item " @click="navItem('1')">
				<view class="iconfont icon-ziyuan">
				</view>
				<text>超市</text>
			</view>
			<view class="item " @click="navItem('2')">
				<view class="iconfont icon-guanyuwomen">
				</view>
				<text>联系我们</text>
			</view>
			<view class="item " @click="navItem('3')">
				<view class="iconfont icon-tupian">
				</view>
				<text>社区图片</text>
			</view>
			<view class="item " @click="navItem('4')">
				<view class="iconfont icon-shipin">
				</view>
				<text>学习视频</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="goods-container">
			<view class="hot-shop">
				<text>热门推荐</text>
			</view>
			<goods-list  @clickHandle="goGoodsDetail($event)" :goodsList="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	// uni-app中的自定义组件需要放置在与pages同级下的components文件夹中，
	// 这样就无需手动导入组件使用，如果手工导入反而报错说找不到组件
	// import goodsList from '../../components/goods-list/goods-list.vue'; 
	export default {
		data() {
			return {
				swipers:[],
				pageindex:1,
				goods:[]
			}
		},
		onLoad(){
			this.getSwipers();
			this.getGoodsList();
		},
		// comments:{
		// 	"goods-list":goodsList,
		// },
		methods:{
			// 获取轮播图
			async getSwipers(){
				const res=await this.httpService({
					url:'/api/getlunbo'
				});
				this.swipers=res.data.message;
			},
			async getGoodsList(){
				const res=await this.httpService({
					url:`/api/getgoods?pageindex=${this.pageindex}`
				});
				console.log('liebiao ',res);
				this.goods=res.data.message;
			},
			navItem(item){
				// 编码方式导航的时候注意加'/'不能直接中pages.json里复制过来直接使用
				// 无法导航应用也不会报任何错误
				switch(item){
					case '1':
					uni.navigateTo({
						url:'/pages/goods/goods'
					})
					break;
					case '2':
					uni.navigateTo({
						url:'/pages/contact/contact'
					})
					break;
					case '3':
					uni.navigateTo({
						url:'/pages/pics/pics'
					})
					break;
					case '4':
					break;
				}
			},
			goGoodsDetail(value){
				uni.navigateTo({
					url:`/pages/goods-detail/goods-detail?id=${value}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper{
		 width: 750rpx;
		 height: 380rpx;
		 image{
			 width: 100%;
			 height: 100%;
		 }
	}
	.nav{
		display: flex;
		.item{
			flex: 1;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background-color: $shop-color;
				border-radius: 50%;
				margin: 20rpx auto;
				line-height: 120rpx;
				font-size: 50rpx;
				color: #fff;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
	.goods-container{
		background-color: #eee;
		padding-top: 16rpx;
		.hot-shop{
			background-color: #fff;
			text-align: center;
			margin-bottom: 16rpx;
			text{
				height: 100rpx;
				line-height: 100rpx;
				color: $shop-color;
				letter-spacing: 30rpx;
			}
		}
		
	}
</style>
