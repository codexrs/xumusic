import {getTabSongCatList,getTabSongMusicListHot,getTabSongHighquality,getTabSongAllPlayList} from '@/api/index.js'

const state = {
    //获取歌单分类
    tabsongcatlist:{},

    //获取全部歌单
    tabsongallplaylist: []
    
    
}

const mutations = {
    /**获取歌单分类 */
    GETTABSONGCATLIST(state,tabsongcatlist) {
        state.tabsongcatlist = tabsongcatlist
    },

    /**获取热门歌单 */

    /**获取不同tag的精品歌单 */

    /**获取歌单--网友精选碟，全部歌单 */
    GETTABSONGALLPALYLIST(state, tabsongallplaylist) {
        state.tabsongallplaylist = tabsongallplaylist
    }

}
const actions = {
    /**获取歌单分类 */
    async GetTabSongCatList({commit}) {
        let result = await getTabSongCatList()
        if(result.code == 200) {
            //console.log(result);
            commit('GETTABSONGCATLIST',result)
        }
    },

    /**获取热门歌单 */

    /**获取不同tag的精品歌单 */

    /**获取歌单--网友精选碟，全部歌单 */
    async GetTabSongAllPlayList({commit},cat,limit,offset) {
        let result = await getTabSongAllPlayList(cat, limit,offset)
        if(result.code == 200) {
            commit('GETTABSONGALLPALYLIST',result.playlists)
            //console.log(result.playlists);
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}