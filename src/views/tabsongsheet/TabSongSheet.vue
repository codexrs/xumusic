<template>
  <div id="tabsonglist">
    <h3>
      <span>全部歌单</span>
      <button class="selt" @click="GetisSelete()">选择分类</button>
      <hr />
    </h3>
    <div class="selectframe" v-show="isSelete">
      <span class="zhixiang"></span>
      <div class="bd">
        <h4><a href="">全部风格</a></h4>
      </div>
      <div class="cate-item" v-for="(item, index) in list" :key="index">
        <div class="cate-item-left">
          <span>{{ categories[index] }}</span>
        </div>
        <div class="cate-item-right">
          <span
            v-for="(cate, index2) in item"
            :key="index2"
            width="80px"
            height="35px"
            @click="getCatList(cate)"
            >{{ cate.name }}
          </span>
        </div>
      </div>
    </div>

    <div class="musiclist">
      <PlayList :musiclist="playlist"></PlayList>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import PlayList from "./playlist/PlayList.vue";
export default {
  name: "TabSongSheet",
  data() {
    return {
      categories: [],
      list: [], //存放所有分类选项的列表,内部是categories所有分类的子数组
      /**@ ArrayItems
       *0：langs:[],//语种
       *1：styles:[],//风格
       *2：scenes:[],//场景
       *3：emotions:[],//情感
       *4：themes:[],//主题
       */

      //是否显示选择框
      isSelete: false,

      cat: "全部",
      limit: 500,
      offset: 1,
    };
  },
  components: {
    PlayList,
  },
  mounted() {
    /**获取歌单分类 */
    this.$store.dispatch("GetTabSongCatList");

    //获取全部歌曲,cat limit, offset
    this.$store.dispatch(
      "GetTabSongAllPlayList",
      this.cat,
      this.limit,
      this.offset
    );
  },
  computed: {
    ...mapState({
      tabsongcatlist: (state) => state.tabsongsheetlist.tabsongcatlist,
    }),
    ...mapState({
      playlist: (state) => state.tabsongsheetlist.tabsongallplaylist,
    }),
  },
  
 
  methods: {
    GetisSelete() {
      this.isSelete = !this.isSelete;
      this.getCatSub();
    },
    getCatSub() {
      this.categories = this.tabsongcatlist.categories;
      let subs = this.tabsongcatlist.sub;
      /**对sub进行分类 */

      let length = Object.keys(this.categories).length;
      for (let i = 0; i < length; i++) {
        this.list[i] = subs.filter((item) => {
          return item.category == i;
        });
      }
    },
    //点击分类标签
    getCatList(cat) {
      //获取新数据
      this.cat = cat.name;
      this.$store.dispatch(
        "GetTabSongAllPlayList",
        this.cat,
        this.limit,
        this.offset
      );
     

      //将isSelete设置隐藏
      this.isSelete = !this.isSelete;
    }
    
  }
};
</script>

<style scoped>
#tabsonglist {
  color: black;
  margin-left: 20px;
}
#tabsonglist h3 {
  margin: 20px 0px 20px 100px;
}
#tabsonglist h3 hr {
  margin-top: 10px;
}
#tabsonglist .selt {
  display: inline-block;
  font-size: 16px;
  background-color: pink;
}
#tabsonglist .selectframe {
  border: 1px solid #ccc;
  left:100px;
  width: 800px;
  position: relative;
  top: -15px;
  background-color: rgba(255, 255, 255, 0.1);
}
#tabsonglist .selectframe .zhixiang {
  display: inline-block;
  position: relative;
  right: -100px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  transform: rotate(-45deg);
}

#tabsonglist .selectframe .cate-item {
  width: 800px;
  display: flex;
}
.cate-item-left {
  display: inline-block;
  width: 80px;
  flex: 1;
  margin: 20px;
}
.cate-item-right {
  line-height: 60px;
  flex: 10;
}
.cate-item-right span {
  margin-right: 10px;
}
.cate-item-right span:hover {
  background-color: #ccc;
}
</style>