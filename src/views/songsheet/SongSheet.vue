<template>
    <div id="songsheet">
        <div class="left">
            <div class="head">
                <img :src="SongSheetItem.picUrl ||SongSheetItem.coverImgUrl" alt="">
                <div>
                    <span class="name">{{SongSheetItem.name}}</span>
                    <span class="count">播放次数:{{SongSheetItem.playCount}}00</span>
                </div>
             </div>
             <div class="songlist"> 
                <h2>歌单50首</h2>
                <div class="table">
                    <div class="tr" v-for="(item,index) in songsheetlist" :key="item.id">
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

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'SongSheet',
    data() {
        return {
            SongSheetItem: {}
        }
    },
    mounted() {
        
        this.getSongSheetItem()
        
    },
    computed: {
        ...mapState({
            songsheetlist: (state) => state.songsheet.songsheetlist
        })
    },
    methods: {
        //事件总线获取
        // getSongSheetItem() {   
        //     this.$bus.$on('SongSheetItem',(data) => {
        //         this.SongSheetItem = data
        //         this.$store.dispatch('GetSongSheet',this.SongSheetItem.id)
        //         //console.log(data);
        //     }) 
        // },
        getSongSheetItem() {   
            this.SongSheetItem = this.$route.params.item
            this.$store.dispatch('GetSongSheet',this.SongSheetItem.id)
                //console.log(data);
    
        },
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
        },

    },
    //destoryed() {
        //this.$bus.$off('SongSheetItem')
    // }
}
</script>
<style scoped>
#songsheet {
    color:black;
    width: 1000px;
    margin-left: 50px;
    margin-top: 20px;
}
#songsheet .head {
    width:100%;
    margin-left:100px;
}

#songsheet .head img{
    float: left;
    width:300px;
    height:200px;
}
#songsheet .head div {
    
}
#songsheet .head .name {
    display: block;
    line-height:300ox;
    font-size: 30px;
}
#songsheet .head .count {
    display:inline-block;
    height: 30px;
    width: 200px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 40px 30px;
}
#songsheet .songlist {
    width:1000px;
   
    margin-left: 100px;
    margin-top: 100px;
}
#songsheet .songlist .table {
    position: relative;
}
#songsheet .songlist .table .tr {
    height:40px;
    border: 1px solid #ccc;
    
}
#songsheet .songlist .table .tr .conut {
    float: left;
    left:20px;
    position: absolute;
    margin: 10px 10px ;
}
#songsheet .songlist .table .tr .like {
    display: inline-block;
    margin: 7.5px 20px 7.5px 60px;
}
#songsheet .songlist .table .tr .download {
    display: inline-block;
    margin: 7.5px 50px 7.5px 0;
}
#songsheet .songlist .table .tr .singname {
    display: inline-block;
    position: relative;
    top: -7.5px;
}
#songsheet .songlist .table .tr .alname {
    position: relative;
    left: 500px;
    top: -35px;
    
}
#songsheet .songlist .table .tr .time {
    position: relative;
    left: 950px;
    top: -50px;
  
}
#songsheet .songlist .table .tr img {
    width:25px;
    height: 25px;
}
</style>