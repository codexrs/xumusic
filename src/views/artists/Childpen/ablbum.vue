<template>
    <div id="ablbum">
        <img class='artist' :src="artistAlbum.hotAlbums[0].blurPicUrl" alt="">
        <div class="songlist"> 
                <h2>歌曲50首</h2>
                <div class="table">
                    <div class="tr" v-for="(item,index) in artistHot.songs" :key="item.id">
                        <div class="conut">{{index +1 }}</div>
                        <div class="like"><img src="./images/xihuan.png" alt=""></div>
                        <div class="download" ><img src="./images/xiazai.png" alt=""></div>
                        <div class="singname" title="播放" @click="getMusicUrl(item.id)">{{item.name}}</div>
                        <div class="alname">{{'《'+item.al.name+'》'}}</div>
                        <div class="time" >{{formatDuring(item.dt)}}</div>
                    </div>
                </div>  
        </div>
      
    </div>
</template>

<script>
//获取歌手专辑数据
import {mapState} from 'vuex'

export default {
    name: 'ablbum',
    data() {
        return {
           tabData: [],
           i: 0
        }
    },
    mounted() {
        
    },
    computed: {
        //获取歌手专辑
        ...mapState({
            artistAlbum: (state) => state.artistslist.artistalbum
        }),
        //获取歌手热门50首
        ...mapState({
            artistHot: (state) => state.artistslist.artistHot
        }),

        //将artistHot数据转为对象
    },
    methods: {
        getMusicUrl(id) {
           this.$store.dispatch('GetMusicUrl',id)
           this.$store.dispatch('GetSongsDetail',id)
           //获取歌词
           this.$store.dispatch('GetLyric',id)
        },
        //将歌单时间毫秒转为分钟
        formatDuring(mss) {
            var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((mss % (1000 * 60)) / 1000);
            return '0'+minutes + ":" + seconds;
        }
    }
}
</script>

<style  scoped>
#ablbum {
    position: relative;
    width: 100%;
}

#ablbum .artist {
    float: left;
    display:block;
    width: 150px;
}
 .songlist {
    width:800px;
    margin-left: 200px;
    margin-top: 80px;
}
 .songlist .table {
    position: relative;
}
 .songlist .table .tr {
    height:40px;
    border: 1px solid #ccc;
    
}
 .songlist .table .tr .conut {
    float: left;
    left:20px;
    position: absolute;
    margin: 10px 10px ;
}
 .songlist .table .tr .like {
    display: inline-block;
    margin: 7.5px 20px 7.5px 60px;
}
 .songlist .table .tr .download {
    display: inline-block;
    margin: 7.5px 100px 7.5px 0;
}
 .songlist .table .tr .singname {
    display: inline-block;
    position: relative;
    top: -7.5px;
}
 .songlist .table .tr .alname {
    position: relative;
    left: 400px;
    top: -35px;
    
}
 .songlist .table .tr .time {
    position: relative;
    left: 750px;
    top: -50px;
  
}
 .songlist .table .tr img {
    width:25px;
    height: 25px;
}
</style>