<template>
    <div id="videos">
         <MvShow :allallnewmv="searchvideo"></MvShow>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import MvShow from '@/components/content/mvshow/MvShow.vue'
export default {
    name:'seachvideo',
    components: {
        MvShow
    },
    computed: {
        ...mapState({
            searchvideo: (state) => state.search.searchvideo
        })
    }
}
</script>
<style scoped>

</style>