<template>
    <div id="mv">
        <div class="newmv">
            <h2>最新MV</h2>
            <span class="more">更多&gt;</span>
 
            <div class="mvvideo">
                <ul>
                    <li v-for="item in newmvlist" :key="item.id" @click="ToMvplay(item.id)">
                        <img :src="item.cover" alt="">
                        <span class="mvname">{{item.name}}</span>
                        <span class="artname">{{item.artists[0].name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="wangyimv">
            <h2>网易出品MV</h2>
            <span class="more">更多&gt;</span>
            <div class="wangyi">
                <ul>
                    <li v-for="item in wangyimv" :key="item.id" @click="ToMvplay(item.id)">
                        <img :src="item.cover" alt="">
                        <img src="~assets/MV.png" alt="" class="mvpic">
                       
                        <span class="artname">{{item.artistName}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
//获取vuex state数据
import {mapState} from 'vuex'
export default {
    name:'MV',
    data() {
        return {

        }
    },
    mounted() {
        //请求获取最新mv
        this.$store.dispatch('GetNewMV')
        //请求获取网易出品mv
        this.$store.dispatch('GetWangYiMv')
    },
    computed: {
        // 获取最新mv
        ...mapState({
            newmvlist: (state) => state.mv.newmvlist
        }),
        //获取网易出品mv
        ...mapState({
            wangyimv: (state) => state.mv.wangyimv
        })
    },
    methods: { 
        ToMvplay(id) {
            //请求获取mv播放地址
            this.$store.dispatch('GetVideoUrl', id)
            
            //请求mv数据
            this.$store.dispatch('GetMvDetail',id)
            //console.log(item)

            //请求获取mv评论数据
            this.$store.dispatch('GetMVComment',id)

            //路由跳转
            this.$router.push('/mvplay')
        }
    }
}
</script>

<style scoped>
#mv {
    color: black;
    width: 1000px;
    margin-left: 120px;
   
    
}
#mv ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
}
#mv ul li {
    flex: 1;
    list-style-type: none;
    margin: 5px;
}
#mv .newmv  h2{
    display: inline-block;
   
}
#mv .newmv .more {
    float: right;
    margin-right: 45px;
}
#mv .newmv  .mvvideo ul li img {
    width:200px;
    height: 150px;
}
#mv .mvvideo ul li img:hover {
    transform:scale(1.1)
}
#mv .newmv  .mvvideo ul li .mvname {
    display:block;
    font-size: 18px;
    color:white;
}
#mv .newmv  .mvvideo ul li .artname {
    display:inline-block;
    font-size: 14px;
}

#mv .wangyimv {
    height:400px;
}
#mv .wangyimv  h2{
    margin-top: 10px;
    display: inline-block;
    margin-bottom:10px;
}
#mv .wangyimv .more {
    float: right;
    margin-right: 45px;
    margin-bottom:10px;
}
#mv .wangyimv ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    height:600px;
    flex-direction: column;
    
}
#mv .wangyimv ul li {
    margin: 0 auto;
    list-style-type: none;
    flex:1;
}
#mv .wangyimv ul li img {
    width: 200px;
    height: 100px;
   
}
#mv .wangyimv ul li img:hover {
    transform:scale(1.1)
}
#mv .wangyimv ul li .mvpic {
    width: 20px;
    height: 20px;
    position:relative;
    top:-80px;
    right: 20px;
}
#mv .wangyimv ul li .artname {
    display:block;
    font-size: 14px;
}
</style>