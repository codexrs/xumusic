<template>
    <div id="simi">
        <ul>
            <li v-for="user in simiplayerlist" :key="user.id" @click="Goartist(user.id,user.picUrl,user.name,user.musicSize,user.albumSize)">
                 <img :src="user.picUrl" alt="" class="singPic">
                 <span class="name">{{user.name}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'simiplayer',
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

    mounted() {
        //获取相似歌手
        this.$store.dispatch('GetSiMiPlayger',this.$route.params.id)
    },
    computed: {
        ...mapState({
            simiplayerlist: (state) => state.artistslist.simiplayerlist
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
#simi {
    margin-top:50px;
}
#simi ul{
    list-style:none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 1000px;
}
#simi ul li {
    list-style-type:none;
    flex: 1;
    margin: 10px;
    text-align: center;
}
#simi ul li img {
    width:150px;
    height:150px;
    
}
#simi ul li img:hover {
   
    transform: scale(1.1)
}
#simi ul li .name {
    display:block;
}
</style>