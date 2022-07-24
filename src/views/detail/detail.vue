<template>
    <div id="detail">
        <div class="head">
            <img :src="songdetail[0].al.picUrl" alt=""  :class="{playing: isPlay}">
            <h2>{{songdetail[0].name}}</h2>
           
        </div>
        
      
       <div class="lrcContailner">
           <div class="lrc" ref="lrc">
            <!-- key是时间s -->
               <p  :class="{'active' : currentTime > allKeys[index] && currentTime < allKeys[index+1]}" v-for="(item,key,index) in lrcData" :key="index">
                   <span v-if="currentTime > allKeys[index] && currentTime < allKeys[index+1]">
                      {{item}}{{scrollLRC(index)}}
                   </span>
                </p>
           </div>
       </div>

        

    </div>
</template>

<script>
import {mapState} from 'vuex'
//格式化歌词

export default {
    name:'detail',
    data() {
        return {
            lrcData: {},
            allKeys:[]

        }
    },
    computed: {
        //获取歌词
        ...mapState({
            lyric: (state) => state.detail.lyric
        }),
        //歌曲详情
        ...mapState({
            songdetail: (state) => state.detail.songdetail
        }),
        ...mapState({
            isPlay: (state) => state.detail.isPlay

        }),
        ...mapState({
            currentTime: (state) => state.detail.currentTime
        })
       
        
    },
    created() {
        this.filterLRC()
    },

    methods: {
        //歌词格式化
        //[01:37.19]->97s :对应文本

        filterLRC() {
            let values = this.lyric
            //如果没有歌词，返回空
            if(!values) return
            var lrc = {}
            //切割字符
            var lyrics = values.split('\n') //有问题，有的是\n,有的是 空格

            //获取文本,正则匹配,\d匹配数字
            var reg = /\[\d*:\d*(\.|:)\d*]/g;
            for(var i = 0; i < lyrics.length; i++) {
                var timeRegArr = lyrics[i].match(reg)
                
                //如果不符合的，过滤掉
                if(!timeRegArr) continue;

                //获取歌词
                var content = lyrics[i].replace(timeRegArr,"")
                
                //获取时间
                var t = timeRegArr[0]
                //分钟
                var min = parseInt(t.match(/\[\d*/i).toString().slice(1))
                //秒
                var sec = parseInt(t.match(/\:\d*/i).toString().slice(1))
                var time = min * 60 + sec
                
                lrc[time] = content
                
                //console.log(lrc);
            }
            this.lrcData = lrc
            this.getAllKeys(lrc)
            //console.log(this.getAllKeys(lrc));
        },
        getAllKeys(lrcArr) {
            for(var key in lrcArr) {
                this.allKeys.push(key)
            }
        },
        scrollLRC(index) {
            if(this.currentTime > this.allKeys[index] && this.currentTime < this.allKeys[index + 1]) {
                this.$refs.lrc.style.top = -(30 * (index - 2)) + 'px'
            }
        }
        
    
    }
   
}
</script>

<style lang="less" scoped>
#detail {
    color: black;
}
#detail .head {
   margin-top: 50px;
}
#detail .head img {
    width:200px;
    height:200px;
    border-radius: 100px;
    margin: 40px 0 0 150px;
}
#detail .head h2 {
    display: inline-block;
    margin-left: 30px;
    position: relative;
    top: -250px;
    
}

@keyframes rotate1 {
    form {
      transform: rotate(0deg);
    }
    to {
      transform:  rotate(360deg);
    }
  }
.playing {
    animation: rotate1  15s  linear infinite;
}
.active {
    color: red;
}
.lrcContailner {
    width: 300px;
    height: 300px;
    overflow: scroll;
    position: relative;
   
    left: 500px;
    top: -200px;
}
.lrc {
    width: 300px;
    position: absolute;
    //改变top滚动
    top: 30px;
    
}
.lrc-p {
    height: 300px;
    line-height: 30px;
}
.up30 {
    margin-top: -30px;
}
</style>