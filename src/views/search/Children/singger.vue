<template>
    <div id="singer" @click="Goartist(searchsinger[0].id,searchsinger[0].picUrl,searchsinger[0].name,searchsinger[0].musicSize,searchsinger[0].albumSize)">
        <img :src="searchsinger[0].picUrl | '无' " alt="">
        <span >{{searchsinger[0].name | '无'}}</span>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'singger',
    data() {
        return {
            query:'',
            type:1000,
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
           searchsinger: (state) => state.search.searchsinger
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
            this.$router.replace({path:'/artists' })
        }
   }

    
}
</script>
<style scoped>
#singer {
    height:800px;
    margin-top:20px;
    margin-left: 50px;
}
#singer img{
    width:200px;
    height:200px;
}
#singer span {
    display:block;
}
</style>