<template>
    <div id="banner">
        <el-carousel :interval="2000" type="card" height="200px">
            <el-carousel-item v-for="item in bannerlist" :key="item.id">
                <img :src="item.imageUrl" alt="" >
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'Banner',
    props: {
        bannerlist: {
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
#banner {
    width:1000px;
    margin:0 auto;
}
.el-carousel__item img {
    opacity: 0.75;
    line-height: 200px;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>