//对axios进行二次封装
import axios from 'axios'

//引入进度条
import nprogress from 'nprogress'

//引入进度条样式
import "nprogress/nprogress.css"

//1.创建axios实例
const requests = axios.create({
    //基础路径，发送请求的时候，路径当中会出现api
    baseURL: 'https://autumnfish.cn',
    //代表请求超时时间
    timeout: 90000,

})
//请求拦截器
requests.interceptors.request.use((config) => {

    //进度条开始动
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use(res => {
    //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到

    //进度条结束
    nprogress.done()
    
    return res.data
},err => {
    //响应失败的回调函数
    return err

})
export default requests