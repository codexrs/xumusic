import {SingGerList} from '@/api/index.js'

const state = {
    singgerList :{},

    
}

const mutations = {
    SINGGERLIST(state, singgerList) {
        state.singgerList = singgerList
    }
}
const actions = {
       async getSingGerList({commit}) {
        let result = await SingGerList()
        if(result.code == 200) {
            commit('SINGGERLIST', result.artists)
        }
        //console.log(result.artists);
    
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