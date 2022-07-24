import {Search} from '@/api/index.js'


const state = {
    //搜索单曲
    searchsong :[],
    //搜索歌手
    searchsinger:[],
    //搜索专辑
    searchablum: [],
    //搜索视频
    searchvideo:[],

    //获取搜索歌词
    searchsongword:[]
    
}

const mutations = {
    //获取搜索单曲
    GETSEARCH(state, searchsong) {
        state.searchsong = searchsong
    },
    //获取搜索歌手
    GETSEARCHSINGER(state,searchsinger) {
        state.searchsinger = searchsinger
    },
    //获取搜索专辑
    GETSEARCHABLUM(state,searchablum) {
        state.searchablum = searchablum
    },
    //获取搜索mv
    GETSEARCHVIDEO(state,searchvideo) {
        state.searchvideo = searchvideo
    },
    //获取搜索歌词
    GETSEARCHSONGWORD(state, searchsongword) {
        state.searchsongword = searchsongword
    }
}
const actions = {
    //默认为 1 即单曲
    async GetSearch({commit},{query,type}) {
        let result = await Search(query,type)

        if(result.code == 200  && type == 1) {
            commit('GETSEARCH', result.result.songs)
            //console.log(result);
        } 
    },
    //获取搜索歌手
    async GetSearchSinger({commit},{query,type}) {
        let result = await Search(query,type)
        if(result.code == 200) {
           // console.log(result);
           commit('GETSEARCHSINGER',result.result.artists)
        } 
    },
    //获取搜索专辑
    async GetSearchAblum({commit},{query,type}) {
        let result = await Search(query, type)
        if(result.code == 200) {
            //console.log(result);
            commit('GETSEARCHABLUM',result.result.playlists)
        }
    },
    //获取搜索MV视频
    async GetSearchVideo({commit},{query,type}) {
        let result = await Search(query, type)
        if(result.code == 200) {
            //console.log(result);
            commit('GETSEARCHVIDEO',result.result.mvs)
        }
    },

    //获取搜索歌词
    async GetSearchWord({commit},{query,type}) {
        let result = await Search(query, type)
        if(result.code == 200) {
            //console.log(result);
            commit('GETSEARCHSONGWORD',result.result.songs)
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