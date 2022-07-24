<template>
    <div id="play" > 
        <img @click="ToDetail()" :src="songdetail[0].al.picUrl" alt="">
        <div class="name">{{songdetail[0].name}}</div>
        <div class="alname">{{songdetail[0].al.name}}</div>
        <audio ref="player" @play="play" @pause="pause" :src="artistMusicUrl.url" controls autoplay loop class="myaudio"></audio>
    </div>
</template>

<script>
//获取音乐播放url
import {mapState} from 'vuex'

export default {
    name:'Audio',

    data() {
        return {
            //音乐是否播放，图像转圈样式是否生效
            isPlaying:false,
            //当前音乐时间
            currentTime:0,
            duration:0
        }
    },
    created() {
        
        this.addEventHnader()
       
    },
 
    computed: {
        //歌曲url
        ...mapState({
            artistMusicUrl: (state) => state.artistslist.artistMusicUrl
        }),
        //歌曲详情
        ...mapState({
            songdetail: (state) => state.detail.songdetail
        })
        
    },
    watch: {
        //isPlay监听变化
        isPlaying:  {
            handler(newValue) {
                 //将当前时间和isPlay存储到vuex中
                this.$store.commit('isPlay', newValue)        
            }

        },
        currentTime: {
            handler(newValue) {
                
                this.$store.commit('currentTime', newValue)
                
            }
        },
        immediate: true
    },
    methods: {
         //动画
        play:function () {
            this.isPlaying = true
           
        },
        pause:function () {
            this.isPlaying = false
            
        },

        //跳转到detail页面
        ToDetail() {
            //获取歌词
            //this.$store.dispatch('GetLyric',id)

            this.$router.push('/detail')
        },

         //获取音乐播放时间
        //1.音乐总时长
        //2.音乐正在播放的时间
        addEventHnader() {
            //html5事件,固定的timeupdate
            this.$refs.player.addEventListener('timeupdate',() => {
                this.currentTime = this.$refs.player.currentTime
            })
            
        },
        currentTineHandle() {
            //属性值也是固定的currentTime
           //console.log(this.$refs.player.currentTime);
            //当前时间
            this.currentTime = this.$refs.player.currentTime
            //console.log(this.currentTime)
            //总时间
             //this.duration = this.$refs.player.duration
        }
       

    }
    
       
    
}
</script>

<style scoped>
#play {
  position: absolute;
  
}
#play img {
    width: 60px;
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40px;
}
#play .name {
    position: fixed;
    left: 65px;
    right: 0;
    bottom: 80px;
    color:black;
}
#play .alname {
    position: fixed;
    left: 65px;
    right: 0;
    bottom: 40px;
    color: black;
}
audio { 
    width: 100%;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction : column;
    box-shadow: 0 -3px 1px rgba(66, 66, 66, .08);
}
</style>