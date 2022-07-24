<template>
    <div id="searchablum">
        <PlayList :musiclist="searchablum"></PlayList>
    </div>
</template>

<script>
import PlayList from '@/views/tabsongsheet/playlist/PlayList.vue'
import {mapState} from 'vuex'
export default {
    name:'ablum',
    components: {
        PlayList
    },

    computed: {
        ...mapState({
            searchablum: (state) => state.search.searchablum
        })
    }
}
</script>
<style scoped>
#searchablum {
    margin-top:20px;
    margin-left: -50px;
}
</style>