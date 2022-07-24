<template>
    <div id="playlist">
        <div class="song">
            <ul>
                <li v-for="item in musiclist" :key="item.id" @click="ToSongSheet(item)">
                    <img :src="item.coverImgUrl | item.picUrl" alt="">
                    <span class="desc">{{item.description}}</span>
                    <span class="name">{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
export default {
    name:'PlayList',
    props: {
        musiclist: {
            type:Array,
            defualt() {
                return []
            }
        }
    },
    methods: {
        ToSongSheet(item) {
            //this.$bus.$emit('SongSheetItem',item)
            this.$router.push({
                name:'songsheet',
                params: {
                    item: item
                }
            })
        }
    }
}
</script>

<style scoped>
#playlist {
    color: black;
    height: 800px;
    width: 1000px;
}
#playlist .song ul li img {
    width: 150px;
    height: 150px;
    
}
#playlist .song ul li img:hover {
    transform:scale(1.1)
}
#playlist .song ul {
    display:flex;
    flex-wrap: wrap;
    margin-left:100px ;
    list-style:none;
}
#playlist .song ul li {
    flex: 1;
    margin-right: 5px;
    list-style-type:none;
    margin-bottom: 5px;
}
#playlist .song ul li .desc {
    /* 文字超出显示... */
    display: block;
    width: 150px;
    height: 20px;
    overflow:hidden; 
    text-overflow:ellipsis;
    white-space: nowrap;
}
#playlist .song ul li .name {
    display: block;
    width: 100px;
    color:gray;
    height: 20px;
    font-size:12px;
    overflow:hidden; 
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>