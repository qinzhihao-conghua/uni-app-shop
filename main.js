import Vue from 'vue'
import App from './App'
import {httpService} from 'utils/http.js'

Vue.prototype.httpService=httpService;

Vue.config.productionTip = false

App.mpType = 'app'

Vue.filter('dateFormat',function(dateStr, pattern=""){
	//根据给定的时间字符串，得到特定的时间
　　let dt = new Date(dateStr)
　　let y = dt.getFullYear() //得到年份
　　let m = (dt.getMonth() + 1).toString().padStart(2,0); //得到月份
　　let d = dt.getDate().toString().padStart(2,0); //得到日期

　　if(pattern.toLowerCase() ==="yyy-mm-dd"){
　　　　return `${y}-${m}-${d}`
　　}else {
　　　　let hh = dt.getHours().toString().padStart(2,0) //得到时
　　　　let mm = dt.getMinutes().toString().padStart(2,0) //得到分
　　　　let ss = dt.getSeconds().toString().padStart(2,0) //得到秒
　　　　return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
　　}
})

const app = new Vue({
    ...App
})
app.$mount()
