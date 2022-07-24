<template>
    <div id="findmusic">
        <Swiper :bannerlist="bannerlist"></Swiper>
        <div class="recomentsinger">
            <h3>推荐歌单</h3>
            <ul>
                <li v-for="item in persionlized" :key="item.id" @click="ToSongSheet(item)">
                    <img :src="item.picUrl" alt="">
                    <div><img src="~/assets/listen.png" alt="" class="listen"> <span class="count">{{item.playCount}}</span></div>
                    <span class="name">{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import Swiper from '@/components/content/swiper/Swiper.vue'
import {mapState} from 'vuex'
export default {
    name:'FineMusic',
    components: {
        Swiper
    },
    mounted() {
        //请求获取轮播图数据
        this.$store.dispatch('GetBanner')
        //请求推荐歌单数据
        this.$store.dispatch('GetPersonalized',12)
    },
    computed: {
        //获取轮播图数据
        ...mapState({
            bannerlist: (state) => state.findmusic.bannerlist       
        }),
        //获取推荐歌单
        ...mapState({
            persionlized: (state) => state.findmusic.persionlized
        })
    },
    methods: {
        ToSongSheet(item) {
            //this.$bus.$emit('SongSheetItem',item)
            this.$router.push({
                name:'songsheet',
                params: {
                    item: item
                }
            })
        }
    }
}
</script>

<style scoped>
#findmusic {
    color:black;
    margin-left: 30px;
}
#findmusic .recomentsinger h3 {
    margin-left:110px;
}
#findmusic .recomentsinger ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 0 auto;
}
#findmusic .recomentsinger ul li {
    list-style-type:none;
    flex: 1;
    color: white;
    
    margin-top: 10px;
}
#findmusic .recomentsinger ul li img {
    width:150px;
    height:100px;
    
}
#findmusic .recomentsinger ul li img:hover {
    transform:scale(1.1)
}
#findmusic .recomentsinger ul li .listen{
    width:20px;
    height:20px;
}
#findmusic .recomentsinger ul li div {
    position: relative;
    left: 55px;
    top: -102px;
    height: 20px;
    width: 100px;
    
    background: #ccc;
    opacity: 0.8;
}
#findmusic .recomentsinger ul li div .count {
   position: relative;
   display: inline-block;
   height: 20px;
   top: -6px;
  
}
#findmusic .recomentsinger ul li .name {
    display:block;
    margin-top: 0px;
    color: black;
}
</style>