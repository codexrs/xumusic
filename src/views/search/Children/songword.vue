<template>
    <div id="songword">
        <div class="bar" v-for="item in searchsongword" :key="item.id">
            <div class="tabbar">
                <div class="play" title="播放" @click="getMusicUrl(item.id)"><img src="./images/play.png" alt=""></div>
                <span class="name" :title="item.name">{{item.name}}</span>
                <div class="mv" title="MV" v-if="item.mv !==0"  @click="ToMvplay(item.mv)"><img src="./images/MV.png" alt=""></div>
                
                <span class="arname">{{item.ar[0].name}}</span>
                
                <span class="alname">{{'《'+item.al.name+'》'}}</span>
                <span class="time">{{formatDuring(item.dt)}}</span>

                
            </div>
           <div class="wrapper">
                <input id="exp1" class="exp"  type="checkbox">
                <div class="text">
                    <label class="btn" for="exp1"></label>
                   <p ref="word">{{getSongwords(item.lyrics)}}</p>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'songword',
  
    computed: {
        ...mapState({
            searchsongword: (state) => state.search.searchsongword
        })
    },
    mounted() {
         
        
    },
    methods: {
        //将歌单时间毫秒转为分钟
        formatDuring(mss) {
            var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((mss % (1000 * 60)) / 1000);
            return '0'+minutes + ":" + seconds;
        },
        //将歌词遍历
        getSongwords(words) {
            let result = ''
            words.forEach(item => {
                result += item 
            });
            // this.$nextTick(() => {
            //     this.$refs.word.innerHTML = 'result' //DOM渲染完毕后就能正常获取了
            // })
            return result
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
<style lang="less" scoped>
#songword {
    width:100%;
    margin-left: 50px;
}
#songword .bar {
    
    position: relative;
}
#songword .bar .tabbar {
    height:30px;
    background:#ccc;
    
} 
#songword .bar img{
    width:20px;
    height:20px;
}
#songword .bar .play {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    cursor: pointer;
    margin-left: 20px;
}
#songword .bar .mv {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    cursor: pointer;
}
#songword .bar .name{
    display: inline-block;
    line-height: 30px;
}
#songword .bar .arname {
    display: inline-block;
    
    
}
#songword .bar .arname {
    position: absolute;
    left: 400px;
    top: 5px;
}
#songword .bar .alname {
    position: absolute;
    left: 500px;
    top: 5px;  
}
#songword .bar .time {
    float:right;
    margin-right: 20px;
    margin-top: 5px;  
}

//点击展开收起
.wrapper {
  display: flex;
 
  width: 800px;
  overflow: hidden;
/*   resize: horizontal; */
  border-radius: 8px;
  padding: 15px ;
  box-shadow: 20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}
.text {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  /* display: flex; */
/*   display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
  position: relative;
  line-height: 1.5;
  max-height: 4.5em;
  transition: .3s max-height;
}
.text::before {
  content: '';
  height: calc(100% - 26px);
  float: right;
}
.text::after {
  content: '';
  width: 999vw;
  height: 999vw;
  position: absolute;
  box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
    margin-left: -100px;
}
.btn{
  position: relative;
  float: right;
  clear: both;
  margin-left: 20px;
  font-size: 16px;
  padding: 0 8px;
  background: #3F51B5;
  line-height: 24px;
  border-radius: 4px;
  color:  #fff;
  cursor: pointer;
  /* margin-top: -30px; */
}
.btn::after{
  content:'展开'
}
.exp{
  display: none;
}
.exp:checked+.text{
  max-height: none;
}
.exp:checked+.text::after{
  visibility: hidden;
}
.exp:checked+.text .btn::before{
  visibility: hidden;
}
.exp:checked+.text .btn::after{
  content:'收起'
}
.btn::before{
  content: '...';
  position: absolute;
  left: -5px;
  color: #333;
  transform: translateX(-100%)
}

</style>