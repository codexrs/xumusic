import {ArtistsList,getArtistAlbum,getArtistHot,getSiMiPlayger,
    getMusicUrl, getArtistMv,getVideoUrl,
    getMvDetail,getCommentMv,getMVComment

} from '@/api/index.js'

const state = {
    //歌手描述信息
    artistsList :{},
    //歌手专辑
    artistalbum: {},
    //歌手热门50首,
    artistHot: {},
    //歌曲播放url
    artistMusicUrl: '',
    
    //歌手MV信息
    artistmv: {},
    //相似歌手
    simiplayerlist: [],

    //mv数据
    mvdetail: {},
    //mv评论
    commentmv: [],

    //歌手mv地址
    artistmvUrl: {},

    //推荐mv
    recommentmv: {},

    //歌手参数信息
    artistParams: {},

   
}

const mutations = {
    //获取歌手描述信息
    ARTISTSLIST(state, artistsList) {
        state.artistsList = artistsList
    },
    //获取歌手参数
    GETARTISTPARAM(state,artistParams) {
        state.artistParams = artistParams
    },
    //获取歌手专辑
    GETARTISTALBUM(state,artistalbum) {
        state.artistalbum = artistalbum
    },
    //获取歌手热门50首
    GETARTISTHOT(state, artistHot) {
        state.artistHot = artistHot
    },
    //获取歌手音乐播放URL
    GETMUSICURL(state,artistMusicUrl) {
        state.artistMusicUrl = artistMusicUrl
    },
    //获取歌手MV
    GETARTISTMV(state,artistmv) {
        state.artistmv = artistmv
    },
    //获取相似歌手
    SIMIPLAYER(state, simiplayerlist) {
        state.simiplayerlist = simiplayerlist
    },
    //歌手mv地址
    GETVIDEOURL(state, artistmvUrl) {
        state.artistmvUrl = artistmvUrl
    },
    //获取歌手mv数据
    GETMVDETAIL(state,mvdetail) {
        state.mvdetail = mvdetail
    },
    //获取推荐MV
    GETCOMMENTMV(state,recommentmv) {
        state.recommentmv = recommentmv
    },
    //获取mv评论
    GETCOMMNETMV(state, commentmv) {
        state.commentmv = commentmv
    }
}
const actions = {
    //获取歌手描述信息
    async getArtistsList({commit},id) {
        let result = await ArtistsList(id)
        if(result.code == 200) {
            commit('ARTISTSLIST', result)
        }
       //console.log(result);
    },

    //获取歌手专辑
    async GetArtistAlbum({commit}, id) {
        let result = await getArtistAlbum(id)
        if(result.code == 200) {
            commit('GETARTISTALBUM',result)
        }
        //console.log(result);
    },
    //获取歌手热门50首
    async GetArtistHot({commit}, id) {
        let result = await getArtistHot(id)
        if(result.code == 200) {
            commit('GETARTISTHOT',result)
        }
    },
    //获取歌手音乐播放url
    async GetMusicUrl({commit}, id) {
        let result = await getMusicUrl(id)
        if(result.code == 200) {
            commit('GETMUSICURL',result.data[0])
        }
        //console.log(result.data[0].url);
    },

    //获取歌手MV
    async GetArtistMv({commit}, id) {
        let result = await getArtistMv(id)
        if(result.code == 200) {
            commit('GETARTISTMV',result)
        }
    },
    //获取相似歌手
    async GetSiMiPlayger({commit}, id) {
        let result = await getSiMiPlayger(id)
        if(result.code == 200) {
            //console.log(result);
            commit('SIMIPLAYER',result.artists)
        }
    },

    //获取歌手mv地址
    async GetVideoUrl({commit}, id) {
        let result = await getVideoUrl(id)
        if(result.code == 200) {
            //console.log(result.data);
            commit('GETVIDEOURL',result.data)
        }
    },
    //获取mv数据
    async GetMvDetail({commit}, mvid) {
        let result = await getMvDetail(mvid)
        if(result.code == 200) {
           // console.log(result);
           commit('GETMVDETAIL',result.data)
        }
    },
    //推荐mv
    async GetCommentMv({commit}) {
        let result = await getCommentMv()
        if(result.code == 200) {
            //console.log(result);
            commit('GETCOMMENTMV',result.data)
        }
    },
    //mv评论
    async GetMVComment({commit}, id) {
        let result = await getMVComment(id)
        if(result.code == 200) {
            commit('GETCOMMNETMV',result.hotComments)
            //console.log(result.hotComments);
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