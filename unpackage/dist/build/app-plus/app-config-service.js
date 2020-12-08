
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/card/card","pages/member/member","pages/news/news","pages/goods/goods","pages/contact/contact","pages/pics/pics","pages/news-detail/news-detail","pages/goods-detail/goods-detail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"个人商城","navigationBarBackgroundColor":"#b50e03","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#ccc","selectedColor":"#b50e03","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/icon/home.png","selectedIconPath":"static/icon/home-active.png"},{"text":"资讯","pagePath":"pages/news/news","iconPath":"static/icon/news.png","selectedIconPath":"static/icon/news-active.png"},{"text":"购物车","pagePath":"pages/card/card","iconPath":"static/icon/cart.png","selectedIconPath":"static/icon/cart-active.png"},{"text":"会员","pagePath":"pages/member/member","iconPath":"static/icon/member.png","selectedIconPath":"static/icon/member-active.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"zh-shop","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/card/card","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/member/member","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false}},{"path":"/pages/goods/goods","meta":{},"window":{"navigationBarTitleText":"商品列表","enablePullDownRefresh":true}},{"path":"/pages/contact/contact","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/pics/pics","meta":{},"window":{"navigationBarTitleText":"社区图片","enablePullDownRefresh":false}},{"path":"/pages/news-detail/news-detail","meta":{},"window":{"navigationBarTitleText":"资讯","enablePullDownRefresh":false}},{"path":"/pages/goods-detail/goods-detail","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
