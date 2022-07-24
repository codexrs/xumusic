<template>
  <div id="home">
      <NavBar class="home-nav"></NavBar>
      <Aside class="home-aside"></Aside>
      <Scroll
         class="content" ref="scroll" 
         :probe-type = "3"
         @scroll="contentScroll"
         :pullUpLoad = "true"
         
        >
        <Main></Main>
      </Scroll>
      <Audio></Audio>
      

  </div>
</template>

<script>
import NavBar from '@/components/content/navbar/NavBar.vue'
import Aside from '@/components/content/aside/aside.vue'
import Main from '@/views/main/main.vue'
import Audio from '@/components/content/audio/Audio.vue'
//引入封装好的BScroll,滚动功能
import Scroll from '@/components/content/scroll/Scroll.vue'
export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  components: {
      NavBar,
      Aside,
      Main,
      Audio,
      Scroll
  },
  mounted() {
    //派发action,歌手数据
    this.$store.dispatch('getSingGerList')
  },
  methods: {
    //实时监听位置事件
      contentScroll(position) {
            //console.log(position);
            //1.判断BackTop是否显示
            //this.isShowBackTop = (-position.y) > 1000 

            //2.决定tabControl是否吸顶
            //this.istabFixed = (-position.y) > this.$refs.tabControl2.$el.offsetTop
        },

      
  }
 

}
</script>

<style scoped>
#home {
  position: relative;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
 
}
.home-aside {
  position:relative;
  top: 50px;
 
}

</style>
