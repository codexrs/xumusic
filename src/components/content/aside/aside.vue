<template>
  <div id="aside">
      <div class="recommnet">
          <span class="reco">推荐</span>
          <ul>
                <router-link to="/findmusic">
                    <li>
                        <img src="~assets/aside/music.png" alt="">
                        <span>发现音乐</span> 
                    </li>
                </router-link>
                <router-link to="/asidemv">
                    <li>
                        <img src="~assets/aside/rmvb.png" alt="">
                        <span>MV</span>
                    </li>
                 </router-link>
                <li>
                    <img src="~assets/aside/zhibo.png" alt="">
                    <span>直播</span>
                </li>
                <li>
                    <img src="~assets/aside/video.png" alt="">
                    <span>视频</span>
                </li>
                <li>
                    <img src="~assets/aside/friend.png" alt="">
                    <span>朋友</span>
                </li>
            </ul>
      </div>
      <div class="mymusic">
          <span class="mymu">我的音乐</span>
          <ul>
              <li>
                  <img src="~assets/aside/mymusic.png" alt="">
                  <span>本地音乐</span>
              </li>
              <li>
                  <img src="~assets/aside/download.png" alt="">
                  <span>下载管理</span>
              </li>
              <li>
                  <img src="~assets/aside/cloud.png" alt="">
                  <span>我的音乐云盘</span>
              </li>
          </ul>
      </div>
      <div class="after"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color:black;
    }
    ul {
        list-style: none;
        margin-top: 50px;     
    }
    ul li {
        list-style-type: none;
        height: 40px;
        line-height: 40px;
    }
   
    ul li:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
  
    ul li span {
        display: inline-block;
        height: 40px;
        vertical-align: middle;
    }
    ul li img {
        width: 25px;
        height: 25px;
        margin-left: 20px;
        margin-right: 20px;
        display:inline-block;
        vertical-align: middle;
    }
    #aside {
        width: 299px;
        display:flex;
        position: fixed;
        flex-direction: column;
        color: black;
        font-weight: 700;
        font-size: 15px;
        border-right: 1px solid black;
    }
    #aside .recommnet{
        position: relative;
        flex: 1;
    }
    #aside .recommnet .reco {
        margin: 10px;
        position: absolute;
        top: 10px;
       
    }
    #aside .mymusic {
        position: relative;
        flex: 1;
    }
    #aside .mymusic .mymu {
        margin: 10px;
        position: absolute;
        top: 10px;
    } 
    #aside .after {
        height: 230px;
    }
</style>
