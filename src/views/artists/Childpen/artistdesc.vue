<template>
    <div id="artdesc">
        <div class="desc">
            <h3>{{name}}简介</h3>
            <p>{{ArtistList.briefDesc}}</p>
        </div>

        <div  class="desc" v-for="(item,index) in ArtistList.introduction" :key="index">
            <h3>{{item.ti}}</h3>
            <p>{{item.txt}}</p>
        </div>
        
   
    </div>

</template>

<script>

export default {
    name:'artistdesc',
    data() {
        return {
            ArtistList:this.$route.params.ArtistList,
            name:this.$route.params.name
        }
    },
    

}
</script>

<style scoped>
#artdesc {
    margin: 50px;
    margin-left: 20px;
    width: 800px;
}
#artdesc .desc {
    margin-top:10px;
}
#artdesc .desc p {
    text-indent:2em;
}
</style>>