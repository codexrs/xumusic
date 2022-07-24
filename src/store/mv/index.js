import {getNewMV, getWangYiMv,getAllAllNewMv} from '@/api/index.js'

const state = {
    newmvlist :{},
    wangyimv: [],
    allallnewmv: []
    
}

const mutations = {
    //最新mv
    GETNEWMV(state, newmvlist) {
        state.newmvlist = newmvlist
    },
    GETWANGYIMV(state, wangyimv) {
        state.wangyimv = wangyimv
    },
    //全部，全部，最新mv
    GETALLALLNEWMV(state, allallnewmv) {
        state.allallnewmv = allallnewmv
    }
}
const actions = {
    //最新mv
    async GetNewMV({commit}) {
        let result = await getNewMV()
        if(result.code == 200) {
            commit('GETNEWMV', result.data)
        }
        //console.log(result.data);
    },
    //网易出品mv
    async GetWangYiMv({commit}) {
        let result = await getWangYiMv()
        if(result.code == 200) {
            commit('GETWANGYIMV',result.data)
            //console.log(result);
        }
    },
    //全部mv
    async GetAllAllNewMv({commit},area='全部',type='全部',order='最新',limit=12,offset=1) {
        let result = await getAllAllNewMv(area,type,order,limit,offset)
        if(result.code == 200) {
            commit('GETALLALLNEWMV',result.data)
            //console.log(result.data);
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