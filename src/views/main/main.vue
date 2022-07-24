<template>
  <div id="main">
      <TabBar></TabBar>
      
      <keep-live>
        <router-view></router-view>
      </keep-live>
    
     
  </div>
</template>

<script>


import TabBar from '@/components/content/tabbar/TabBar.vue'
export default {
  name: 'home',
  components: {
      TabBar
  },
  

}
</script>

<style scoped>
#main {
    position: absolute;
    top: 50px;
    left: 200px;
    
    width: 1218px;
    height: 100%;
}
</style>
