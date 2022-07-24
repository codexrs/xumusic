import {getLyric,getSongsDetail} from '@/api/index.js'


const state = {

    
    //单曲歌曲详情
    songdetail:[],
    lyric: "",
    
    //audio当前时间和是否播放
    isPlay:true,

    currentTime: 0

   
}

const mutations = {
    //获取歌词
    GETLYRIC(state, lyric) {
        state.lyric = lyric
    },
    //获取单曲歌曲详情
    GETSONGDETAIL(state,songdetail) {
        state.songdetail = songdetail
    },
    isPlay(state, isPlay) {
        state.isPlay = isPlay
    },
    currentTime(state, currentTime) {
        state.currentTime =currentTime
    }
     
}
const actions = {
    //获取歌词
    async GetLyric({commit},id) {
        let result = await getLyric(id)
        if(result.code == 200) {
            commit('GETLYRIC',result.lrc.lyric)
            //console.log(result.lrc);
        }
    },

    //获取单曲歌曲详情
    async GetSongsDetail({commit}, id) {
        let result = await getSongsDetail(id)
        if(result.code == 200) {
            //console.log(result);
            commit('GETSONGDETAIL',result.songs)
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