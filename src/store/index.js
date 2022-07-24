import Vuex from 'vuex'
import Vue from 'vue'

//安装插件
Vue.use(Vuex)

import singerlist from './singerlist/index.js'
import artistslist from './artistslist/index.js'
import mv from './mv/index.js'
import findmusic from './findmusic/index.js'
import songsheet from './songsheet/index.js'
import tabsongsheetlist from './tabsongsheetlist/index.js'
import search from './search/index.js'

import detail from './detail/index.js'
const store =  new Vuex.Store({
    //vuex模块化开发
    modules: {
       singerlist,
       artistslist,
       mv,
       findmusic,
       songsheet,
       tabsongsheetlist,
       search,
       detail
   }
})
export default store