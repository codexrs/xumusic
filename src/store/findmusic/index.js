import {getBanner,getPersonalized} from '@/api/index.js'

const state = {
    bannerlist :[],
    //推荐歌单
    persionlized: []
}

const mutations = {
    //轮播图数据
    GETBANNER(state, bannerlist) {
        state.bannerlist = bannerlist
    },
    //推荐歌单
    GETPERSONLIZED(state,persionlized) {
        state.persionlized = persionlized
    }

}
const actions = {
    //获取轮播图数据
    async GetBanner({commit}) {
        let result = await getBanner()
        if(result.code == 200) {
            commit('GETBANNER',result.banners)
        }
        //console.log(result);
    
    },
    //推荐歌单
    async GetPersonalized({commit},config) {
        let result = await getPersonalized(config)
        if(result.code == 200) {
            commit('GETPERSONLIZED',result.result)
            //console.log(result.result);
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