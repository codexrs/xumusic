<template>
    <div id="mvshow">
        <!-- 封装mv展示组件 -->
        <ul>
            <li v-for="item in allallnewmv" :key="item.id" @click="ToMvplay(item.id)">
                <img :src="item.cover" alt="" class="coverpic">
                <img src="~assets/MV.png" alt="" class="mvpic">
                <span class="name">{{item.name}}</span>
                <span class="artname">{{item.artistName}}</span>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name: 'MasShow',
    props: {
        allallnewmv: {
            type:Array,
            defualt() {
                return []
            }
        }
    },
     methods: { 
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
#mvshow {
    color:black;
    width: 100%;
}
#mvshow ul {
    list-style: none;
    display:flex;
    flex-wrap: wrap;
    margin-left: 35px;
    margin-top: 20px;
    
}
#mvshow ul li {
    list-style-type: none;
    flex: 1;
    width: 200px;
    margin-right: 20px;
}
#mvshow ul li .coverpic {
    width:200px;
    height:100px;
}
#mvshow ul li .coverpic:hover {
    transform:scale(1.1)
}
#mvshow ul li .mvpic {
    position: relative;
    left: -20px;
    top: -80px;
    width: 20px;
    height: 20px;
}

#mvshow ul li .name {
    display:block;
    font-size: 16px;
    width: 200px;
}
#mvshow ul li .artname {
    display: inline-block;
    font-size: 12px;
}
</style>