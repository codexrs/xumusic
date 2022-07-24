<template>
    <div id="mvplay">
        <div class="left">
            <div class="video">
                <video :src="MusicMvUrl.url"  controls= "controls" autoplay></video>
            </div>
            <div class="comment">
                <h2>评论</h2>
               <textarea rows="4" cols="94">
                  我的评论
                </textarea>
            </div>
            <div class="hotcomment">
                <p>精彩评论</p>
                <table>
                    <tr v-for="item in commentmv" :key="item.user.userId">
                        <td>
                            <img :src="item.user.avatarUrl" alt="">
                            <span class="nickname">{{item.user.nickname}}:</span>
                            <span class="content">{{item.content}}</span>
                            <br>
                            <span class="contenttime">{{getCommentMvTime(item.time)}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="right">
            <div class="bar">
                <h2>MV介绍</h2>
                <span class="time">发布时间:{{mvdetail.publishTime}}</span>
                <span class="playCount">播放次数:{{mvdetail.playCount}}次</span>
                <p>简介:{{mvdetail.desc}}</p>
            </div>
            <div class="mvrecommend">
                <h2>相关推荐</h2>
                <div class="mvcom">
                    <ul>
                        <li v-for="item in recommentmv" :key="item.id" @click="playMv(item.id)">
                            <img class="reqimg" :src="item.cover" alt="">
                            <div class="mvname">
                                <img src="./images/MV.png" alt="">
                                <h3>{{item.name}}</h3>
                                <span>{{item.artistName}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//引入mv地址
import {mapState} from 'vuex'
export default {
    name:'mvplay',
    data() {
        return {
          //mv信息
          
        }
    },
    computed: {
        ...mapState({
            MusicMvUrl: (state) => state.artistslist.artistmvUrl
        }),
        //mv数据
        ...mapState({
            mvdetail: (state) => state.artistslist.mvdetail
        }),
        //推荐mv
        ...mapState({
            recommentmv: (state) => state.artistslist.recommentmv
        }),
        //mv评论
        ...mapState({
            commentmv: (state) => state.artistslist.commentmv
        }),

       
        
    },
    methods: {
        playMv(id, item) {
            //传递数据给palymv
            //this.$bus.$emit('artistmv', 123455)

            //请求获取mv播放地址
            this.$store.dispatch('GetVideoUrl', id)
            
            //请求mv数据
            this.$store.dispatch('GetMvDetail',id)
            //console.log(item)

            //请求获取mv评论数据
            this.$store.dispatch('GetMVComment',id)

            //路由跳转
            this.$router.push('/mvplay')
      
        },
         //获取mv评论时间
        getCommentMvTime(commenttime) {
            let  timdedetail = commenttime;//假如是10位毫秒需要乘1000
            //获取年份
            let year = new Date(timdedetail).getFullYear();
            //获取月份，获取的月份比实际小1，所以在使用的时候需要+1
            let month = new Date(timdedetail).getMonth()+1;
            //获取日
            let date = new Date(timdedetail).getDate();
            //获取时
            let hours = new Date(timdedetail).getHours();
            //获取分
            let minutes = new Date(timdedetail).getMinutes();
            //获取秒
            var seconds = new Date(timdedetail).getSeconds();
            //组合格式为年-月-日 时：分：秒（2021-7-5 21:21:21）
            let time = year+"年-"+month+"月-"+date+"日 "+hours+":"+minutes+":"+seconds;
            return time
        }
    },
    mounted() {
        //获取事件总线mv组件给的数据artistmv
        // this.$bus.$on('artistmv', (data) => {
        //     //this.artistmvdesc = data
        //     //console.log(data.artistName);
        //     console.log(data);
        // })
        // console.log(123);

        //请求获取推荐mv数据
        this.$store.dispatch('GetCommentMv')
       
        //调用methodes里的mvtime方法
        this.getCommentMvTime(1234665)
    },
    //最好在接收数据的组件中的beforeDestroy钩子中，
    //用$bus的$off Api去解绑当前组件所用的事件
    // beforeDestroy() {
    //     this.$bus.$off('artistmv')
    // }
}
</script>

<style scoped>
#mvplay {
    color:black;
    margin-left: 50px;
    overflow: scroll;
    width: 100%;
   
}
#mvplay .left {
    width: 60%;
    float: left;
}
#mvplay .left .video  {
    border:1px solid #ccc;
    margin-top:20px;
    margin-left: 100px;
   
}
#mvplay .left .video video{
    width: 100%;
    height:400px;
}
#mvplay .left .comment {
    margin-top: 10px;
    margin-left: 100px;
}
#mvplay .left .comment textarea {
    margin-top:10px;
    color: #ccc;
    background-color: rgba(0,0,1,0.1);
   
}
#mvplay .left .hotcomment {
    margin-top: 10px;
    margin-left: 100px;
}
#mvplay .left .hotcomment table {
    border:1px solid #ccc;

}
#mvplay .left .hotcomment table td img {
    float: left;
    margin: 10px 20px 10px 20px;
    width:50px;
    height:50px;
    border-radius: 25px;
}
#mvplay .left .hotcomment table td {
    border-bottom: 1px solid #ccc;
    line-height: 20px;
}
#mvplay .left .hotcomment table td .nickname {
    float: left;
    color: blue;
   
    
}
#mvplay .left .hotcomment table td .content {
  text-align: center;
  
}
#mvplay .left .hotcomment table td .contenttime {
    display: inline-block;
    
    
}
#mvplay .right {
    float: left;
    margin-left:20px;
     
}
#mvplay .right .bar {
    margin-top: 15px;
}
#mvplay .right .bar p {
    color: blue;
    display: block;
    width: 400px;
}
#mvplay .right .bar .time {
    display: inline-block;
    margin: 10px 80px 10px 0;
}
#mvplay .right .mvrecommend {
    margin-top: 10px;
}
#mvplay .right .mvrecommend  ul {
    list-style: none;
    
}
#mvplay .right .mvrecommend  ul li {
    list-style-type: none;
    margin: 10px;
    
    width: 200px;
    height: 100px;
   
}
#mvplay .right .mvrecommend .reqimg {
    width:200px;
    height:100px;
}
#mvplay .right .mvrecommend li .mvname img {
    float: left;
    width:20px;
    height:20px;

}
#mvplay .right .mvrecommend .mvname {
    left: 210px;
    top: -100px;
    position: relative;
}

#mvplay .right .mvrecommend .mvname span {   
    display: inline-block;
    margin:10px;
}

</style>