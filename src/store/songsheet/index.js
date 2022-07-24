import {getSongSheet} from '@/api/index.js'

const state = {
    songsheetlist :[],

    
}

const mutations = {
    GETSONGSHEET(state, songsheetlist) {
        state.songsheetlist = songsheetlist
    }
}
const actions = {
       async GetSongSheet({commit},id) {
        let result = await getSongSheet(id)
        if(result.code == 200) {
            commit('GETSONGSHEET', result.songs)
        }
        //console.log(result);
    
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