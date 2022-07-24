<template>
  <div id="navbar">
        <div class="logo">
            <router-link to="/findmusic"><img src="~assets/logo.png" alt=""></router-link>
            <router-link to="/findmusic"><h2>小徐音乐</h2></router-link>
        </div>

        <a @click="GoBack()" class="goback"  href="javascript:;">&lt;</a>
        
         <div class="search">
            <input type="search" placeholder="请输入搜索的歌名"  v-model="query" @keyup.enter="searchMusic" />
            <a href="javascript:;"  @click="searchMusic"><img src="~assets/search.png" alt=""></a>
        </div>

        <div class="user">
            <img src="~assets/user.png" alt="">
            <span class="login">未登录</span>
        </div>
        <div class="window">
            <a href=""><span class="back"> -</span></a>
            <a href=""><span class="big">□</span></a>
            <a href=""><span class="close">×</span></a>
        </div>
  </div>
</template>

<script>


export default {
  name: 'NavBar',
  data() {
    return {
      query: '',
      type: 1
    }
  },
  methods: {
     searchMusic() {
       //获取搜索歌曲
       this.$store.dispatch('GetSearch',{
           query:this.query,
           type:this.type
        })
       
       //将输入query通过事件总线传递给其他
       this.$bus.$emit('getQuery',this.query)
       
       //跳转搜索页面
       this.$router.push('/search/singglesong')
     },
     GoBack() {
       //返回上个路由
       this.$router.go(-1);
     }
  }

}
</script>

<style scoped>
    a {
      text-decoration: none;
      color: #fff;
    }
    #navbar {
      display: flex;
      height: 50px;
      background-color: black;
     
    }
    #navbar .logo {
      flex: 1;
      display: flex;
      height: 80px;
    }
    #navbar .logo img {
       position: relative;
       left: -10px;
       bottom: 25px;
       height: 100px;
       width:100px;
       
    }
    #navbar .logo h2 {
      position: relative;
      left: -20px;
      bottom: -10px;
      color: #fff;
    }
    .goback {
      flex: 1;
      color:white;
      font-weight: 800;
      font-size: 30px;
      line-height: 50px;
    }
    .search {
      flex: 1;
      line-height: 50px;
      position: relative;
      left: -150px;
    }
    .search input {
      width: 250px;
      height: 30px;
      border: 1px solid  white;;
      border-radius: 10px;
      padding-left: 20px;
    }
    .search img {
      width:30px;
      height: 30px;
      position: relative;
      left: -40px;
      bottom: -10px;
    }
    .user {
      flex:0.5;
      display: flex;
      height:100%
    }
    .user img {
      width: 40px;
      height: 40px;
      margin-top: 5px;
    }
    .user .login {
      flex: 0.8;
      text-align: center;
      line-height: 50px;
      color: #fff;
      margin-left: 0px;
    }
    .window {
      flex:0.5;
      margin: 0 auto;
      text-align: center;
      line-height: 50px;
      color: #fff;
    }
    .window .back {
      padding-right: 20px;
    }
    .window .big {
      padding-right: 20px;
    }

</style>>


