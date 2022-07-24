<template>
    <div id="mv">
        <ul>
            <li v-for="item in artistmv.mvs" :key="item.id" @click="playMv(item.id,item)"> 
                <img :src="item.imgurl" alt="">
                <p class="mvname">{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
//获取mv信息
import {mapState} from 'vuex'
export default {
    name: 'mv',

    mounted() {

    },
    computed: {
        ...mapState({
            artistmv: (state) => state.artistslist.artistmv
        }),
        ...mapState({
            artistmvUrl: (state) => state.artistslist.artistmvUrl
        })
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
      
        }

    }
}
</script>

<style scoped>
#mv {
    position: relative;
    top:60px;
    height: 400px;
   
}
#mv ul {
    position: relative;
    list-style: none;
    display:flex;
       /* flex换行 */
    flex-wrap: wrap;
}
#mv ul li {
    list-style-type: none;
    flex: 1;
    margin: 0px 10px;
   
}
#mv ul li img {
    width:200px;
    height:150px;
}
#mv ul li .playCount img {
    width:30px;
    height:20px;
}


</style>