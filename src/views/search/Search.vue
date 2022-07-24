<template>
  <div id="search">
    <span class="hr"></span>
    <div class="tabbar">
      <ul>
        <li @click="ToSinggleSong()">单曲</li>
        <li @click="ToSearchSingger()">歌手</li>
        <li @click="ToSearchAblum()">专辑</li>
        <li @click="ToSearchVideo()">视频</li>
        <li @click="ToSearchWord()">歌词</li>
        <li>歌单</li>
      </ul>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  mounted() {
    //获取搜索内容
    this.$bus.$on("getQuery", (data) => {
      this.query = data;
    });
  },
  methods: {
    //跳转单曲路由
    ToSinggleSong() {
      this.$router.push("/search/singglesong");
    },
    //获取搜索歌手
    ToSearchSingger() {
      //console.log('我收到了来自学生的信息',this.query);
      this.$store.dispatch("GetSearchSinger", { query: this.query, type: 100 });
      this.$router.push("/search/singger");
    },
    //获取搜索专辑
    ToSearchAblum() {
      this.$store.dispatch("GetSearchAblum", { query: this.query, type: 1000});
      this.$router.push("/search/ablum");
    },
    //获取搜索视频
    ToSearchVideo() {
        this.$store.dispatch('GetSearchVideo',{ query: this.query, type: 1004 })
        this.$router.push("/search/video");
    },
    //获取搜索歌词
    ToSearchWord() {
        this.$store.dispatch('GetSearchWord',{ query: this.query, type: 1006 })
        this.$router.push("/search/songword");
    }
  },
  beforeDestroy() {
    bus.$off("getQuery", this.query);
  },
};
</script>

<style scoped>
#search {
  background-color: #fff;
  
  width: 1000px;
  overflow: auto;
  margin-top:10px;
  margin-left: 101px;
}
#search .hr {
  display: block;
  border-top:1px solid black;
  left:-12px;
  position: relative;
  
}
#search .tabbar ul {
  list-style: none;
  display: flex;

  height: 50px;
  line-height: 50px;
}
#search .tabbar ul li {
  list-style-type: none;
  flex: 1;
  text-align: center;
}
#search .tabbar ul li:hover {
  background: #ccc;
}
</style>