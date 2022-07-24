<template>
  <div id="tabbar">
      <div class="bar">
        <ul>
        <router-link to="/findmusic"><li>个性推荐</li></router-link> 
        <router-link to="/tabsongsheet"><li>歌单</li></router-link> 
        <li><a href="javascript:;">排行榜</a></li>
        <li> <router-link to="/singger">歌手</router-link> </li>
        <li><a href="javascript:;">最新音乐</a></li>
        <router-link to="/mv"><li>MV</li></router-link> 
      </ul>
      </div>
  </div>
</template>

<script>

export default {
  name: 'TabBar',

}
</script>

<style scoped>
  ul {
    margin: 0 auto;
    list-style: none;
    justify-content:space-around;
    align-items: center;
    align-content: center;
    width: 900px;

  }
  ul li {
    list-style-type: none;
    float: left;
    display: block;
    height: 50px;
    width:80px;
    line-height: 50px;
    margin-right:50px;
  }
  ul li:hover {
    width:80px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  a {
    text-decoration: none;
    color: black;
  }
  #tabbar {
    height: 50px; 
    text-align:center;
    margin-left: 100px;
    color: black;
    width: 100%;
    background-color: #ccc;
  }

</style>
