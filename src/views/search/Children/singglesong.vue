<template>
    <div id="singglesong" >
        <div v-for="item in searchsong" :key="item.id" class="row">
            <div  title="播放" class="play" @click="getMusicUrl(item.id)"><img src="./images/play.png" alt="" ></div>
            <span :title="item.name" class="name">{{item.name}}</span>
            <div title="MV" class="mv" v-if="item.mv != 0"  @click="ToMvplay(item.mv)"><img src="./images/MV.png" alt=""></div>
            <div  class="arname"><span>{{item.ar[0].name}}</span></div>
            <span>{{'《'+item.al.name+'》'}}</span>
            <span class="time">{{formatDuring(item.dt)}}</span>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'singglesong',
    computed: {
        ...mapState({
            searchsong: (state) => state.search.searchsong
        }),
        
    },
    methods: {
        //将歌单时间毫秒转为分钟
        formatDuring(mss) {
            var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((mss % (1000 * 60)) / 1000);
            return '0'+minutes + ":" + seconds;
        },

        //点击播放
        getMusicUrl(id) {
           this.$store.dispatch('GetMusicUrl',id)
        },

        //点击播放mv
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
#singglesong {
 margin-left: 50px;
}
#singglesong .row {
    height: 30px;
   
    
}
#singglesong .row:nth-child(n+1) {
    background-color: #fff;
   
}
#singglesong .row:nth-child(2n) {
    background-color: #ccc;
}
#singglesong .row:hover {
    background-color: #aaa;
}
#singglesong .row img{
    width:20px;
    height:20px;
}
#singglesong .row .play {
    display:inline-block;
    vertical-align: middle;
    margin-right: 5px;
    cursor: pointer;
}

#singglesong .row  .mv {
    display:inline-block;
    vertical-align: middle;
    margin-left: 5px;
    cursor: pointer;
}
#singglesong .row .name {
    display: inline-block;
    line-height: 30px;
    
}
#singglesong .row  .arname {
    display:inline-block;
    margin-left: 200px;
}
#singglesong .row .time {
    float: right;
    margin-right: 20px;
}
</style>