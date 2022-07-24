<template>
    <div id="singger">
        <div class="cat">
            <ul>
                <li>语种:</li>
                <li><a href="">全部</a></li>
                <li><a href="">华语</a></li>
                <li><a href="">欧美</a></li>
                <li><a href="">日本</a></li>
                <li><a href="">韩国</a></li>
                <li><a href="">其他</a></li>
            </ul>
        </div>
        <div class="sort">
             <ul>
                <li>分类:</li>
                <li><a href="">全部</a></li>
                <li><a href="">男歌手</a></li>
                <li><a href="">女歌手</a></li>
                <li><a href="">乐队</a></li>
               
            </ul>
        </div>
        <div class="allsinger">
            <ul>
                <li v-for="user in SinggerList" :key="user.id" @click="Goartist(user.id,user.picUrl,user.name,user.musicSize,user.albumSize)">
                    <img :src="user.picUrl" alt="">
                    <span class="username">{{user.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

//引入歌单数据
import {mapState} from 'vuex'

export default {
    name:'singger',
    data() {
        return {
            artistParams: {
                id:0,
                picUrl: '',
                name: '',
                musicSize: 0,
                albumSize: 0
            }
        }
    },
    computed: {
        ...mapState({
            SinggerList: (state) =>  state.singerlist.singgerList
        })
    },
    methods: {
        Goartist(id, picUrl, name, musicSize,albumSize) {
            this.artistParams.id = id
            this.artistParams.picUrl = picUrl
            this.artistParams.name = name
            this.artistParams.musicSize = musicSize
            this.artistParams.albumSize = albumSize
            //将artist参数存储到vuex中

            this.$store.commit('GETARTISTPARAM', this.artistParams)
            
            //获取歌手描述信息
            this.$store.dispatch('getArtistsList',id)

            //路由跳转
            this.$router.replace({path:'/artists/album' })
        }
    }
}
</script>

<style scoped>
  ul {
    margin: 0 auto;
    list-style: none;
    margin-left:100px;
  }
  .cat ul li {
    list-style-type: none;
    float: left;
    display: block;
    margin:10px 10px ;
  }
  .sort ul li {
    list-style-type: none;
    float: left;
    display: block;
    margin:0px 10px ;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color:black;
  }
#singger {
    color:black;
    width: 100%;
    height:550px;
    margin-left: 10px;
    overflow: auto;
}
#singger .cat {
    display: inline-block;
}
#singger .allsinger {
    float: left;
}
#singger .allsinger ul {
    display: flex;
    flex-wrap: wrap;
}
#singger .allsinger ul li {
    flex:1;
    margin: 20px 10px;
}
#singger .allsinger ul li img {
    width:100px;
    height:100px;
}
</style>