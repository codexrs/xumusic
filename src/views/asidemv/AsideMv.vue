<template>
    <div id="asidemv">
    <h1>全部MV</h1>
    <hr>
        <div class="bar">
            <ul class="ulone">
                <li>地区:</li>
                <li @click="getAreaALL()">全部</li>
                <li @click="getInlandmv()">内地</li>
                <li @click="getHoneTai()">港台</li>
                <li @click="getRuropeAmer()">欧美</li>
                <li @click="getKorean()">韩国</li>
                <li @click="getJapan()">日本</li>
            </ul>
           
            <ul class="ultwo">
                <li>类型:</li>
                <li @click="getTypeAll()">全部</li>
                <li @click="getTypeOfficial()">官方版</li>
                <li @click="getTypePrimordial()">原声</li>
                <li @click="getTypeLive()">现场版</li>
                <li @click="getTypeWebpage()">网易出品</li>
            </ul>
           
            <ul class="ulthree">
                <li>排序:</li>
                <li @click="getSortOrder()">上升排序</li>
                <li @click="getHotOrder()">最热</li>
                <li @click="getNewOrder()">最新</li>
            </ul>
        </div>
        <MvShow :allallnewmv="allallnewmv"></MvShow>
    </div>
</template>

<script>
import MvShow from '@/components/content/mvshow/MvShow.vue'
import {mapState} from 'vuex'

export default {
    name:'AsideMv',
    components: {
        MvShow
    },
    mounted() {
        this.$store.dispatch('GetAllAllNewMv')
    },
    computed: {
        ...mapState({
            allallnewmv:(state) => state.mv.allallnewmv
        })
    },
    methods: {
        getAreaALL() {
            this.$store.dispatch('GetAllAllNewMv')
        },
        getInlandmv() {
            this.$store.dispatch('GetAllAllNewMv',{area:'内地'})
        },
        getHoneTai() {
            this.$store.dispatch('GetAllAllNewMv',{area:'港台'})
        },
        getRuropeAmer() {
            this.$store.dispatch('GetAllAllNewMv',{area:'欧美'})
        },
        getKorean() {
            this.$store.dispatch('GetAllAllNewMv',{area:'韩国'})
        },
        getJapan() {
            this.$store.dispatch('GetAllAllNewMv',{area:'日本'})
        },

        getTypeAll() {
            this.$store.dispatch('GetAllAllNewMv',{type:'全部'})
        },
        getTypeOfficial() {
            this.$store.dispatch('GetAllAllNewMv',{type:'官方版'})
        },
        getTypePrimordial() {
            this.$store.dispatch('GetAllAllNewMv',{type:'原声'})
        },
        getTypeLive() {
            this.$store.dispatch('GetAllAllNewMv',{type:'现场版'})
        },
        getTypeWebpage() {
            this.$store.dispatch('GetAllAllNewMv',{type:'网易出品'})
        },
        
        getSortOrder() {
            this.$store.dispatch('GetAllAllNewMv',{order:'上升最快'})
        },
        getHotOrder() {
            this.$store.dispatch('GetAllAllNewMv',{order:'最热'})
        },
        getNewOrder() {
            this.$store.dispatch('GetAllAllNewMv',{order:'最新'})
        }

    }
}
</script>
<style scoped>
#asidemv {
    color: black;
    margin-left: 90px;
}
#asidemv h1 {
    margin-left: 35px;
}
#asidemv hr {
    margin-left: 35px;
    width: 100%;
}
#asidemv .bar {
    width:500px;
}
.bar ul {
    list-style: none;
    margin-left: 20px;
    display: flex;
    text-align: center;
}

.bar ul li {
    list-style-type: none;
    flex: 1;
    margin-top:10px;
}
#asidemv .bar .ultwo {
    width: 400px;
}
#asidemv .bar .ulthree {
    width: 400px;
    margin-left: 5px;
 
}

.bar ul li:hover {
    background-color:#ccc;
    color:white;
}
</style>