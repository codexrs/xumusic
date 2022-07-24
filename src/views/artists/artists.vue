<template>
  <div id="artists">
    <div class="header">
      <img :src="artistParams.picUrl" alt="" class="singPic">
      <div class="desc">
        <div class="name">{{artistParams.name}}</div>
        <span class="songNum">单曲数:{{artistParams.musicSize}}</span>
        <span class="albumNum">专辑数:{{artistParams.albumSize}}</span>
        <div class="descript">个人介绍:{{ArtistList.briefDesc}}</div>
      </div>
    </div>
    <div class='tabbar'> 
      <ul>
        <router-link to="/artists/album"><li>专辑</li></router-link>
        <router-link to="/artists/mv"><li>MV</li></router-link>
        <li @click="ToArtistDesc()">歌手详情</li>
        <li @click="ToSiMiPlayer()">相似歌手</li>
      </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  
  </div>
</template>
<script>
//引入歌单数据和歌手信息,歌手参数信息
import {mapState} from 'vuex'
//
export default {
  name: 'artists',
  data() {
    return {
      
    }
  },
  components: {
    
  },
  mounted() {
    this.getSingerDesc(this.artistParams.id)
  },
 
  computed: {
    ...mapState({
      //歌手描述信息
      ArtistList: (state) =>  state.artistslist.artistsList
    }),
    ...mapState({
      //歌手参数信息
      artistParams: (state) =>  state.artistslist.artistParams
    })
  },
  methods: {
    //获取歌手描述信息
    getSingerDesc(id) {
     
      //获取歌手专辑
      this.$store.dispatch('GetArtistAlbum',id)

      //获取歌手热门50首
      this.$store.dispatch('GetArtistHot', id)

      //获取歌手MV
      this.$store.dispatch('GetArtistMv',id)
    },
   
    //跳转到歌手描述路由，带数据歌曲
    ToArtistDesc() {
      //使用params传递参数，需要name,router也是需要name
      this.$router.push({
         name:'artistdesc',
         params: {
           ArtistList:this.ArtistList,
           name:this.artistParams.name
         }
      })
    },

    //跳转到相似歌手路由
    ToSiMiPlayer() {
      this.$router.push({
        name:'simiplayer',
        params: {
          id:this.artistParams.id
        }
      })
    }
  }
}
</script>

<style scoped>
#artists {
  
  width: 100%;
  margin-left: 120px;
  color: black;
}

#artists .header .singPic {
  float:left;
  height:150px;
  width:150px;
  
}
#artists .header .desc .name { 
  display:block;
  font-weight: 900;
  font-size: 20px;
  margin-left: 180px;
}

#artists .header .desc .songNum {
  display:inline-block;
  height: 30px;
  width: 100px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 40px 30px;
}
#artists .header .desc .albumNum {
  display:inline-block;
  height: 30px;
  width: 100px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
 .header .desc .descript {
  margin-left: 180px;
  word-break:keep-all;       /* 不换行 */
  white-space:nowrap;        /* 不换行 */
  overflow:hidden;           /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow:ellipsis;    /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
}
#artists .tabbar ul {
  width:500px;
  
  list-style: none;
  justify-content:space-around;
  align-items: center;
  align-content: center;
}

#artists .tabbar ul li {
  list-style-type: none;
  float: left;
  display: block;
  height: 50px;
  width:70px;
  line-height: 50px;
  margin-right:50px; 
}
#artists .tabbar ul li:hover {
  border-bottom: 2px solid red;
}
#artists .tabbar {
  position: absolute;
  height: 80px;
  text-align:center;

  width: 100%;
}
</style>>




