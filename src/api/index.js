//API接口进行统一管理
import requests from './requests.js'

//进入页面默认显示歌手数据
export const SingGerList = () => {
    return requests({url:'artist/list', method: 'get'})
}


//1.获取歌手描述信息
export const ArtistsList = (id) => {
    return requests({url: `/artist/desc?id=${id}`, method: 'get'})
}
//2.获取歌手专辑
export const getArtistAlbum = (id) => {
    return requests({url: `/artist/album?id=${id}` ,method:'get'})
}
/*3.获取歌手MV */
export function getArtistMv(id){
    return requests({
        url:`/artist/mv?id=${id}`,
        method: 'get'
    })
}
//获取相似歌手
export function getSiMiPlayger(id) {
    return requests({url:`/simi/artist?id=${id}`, method:'get'})
}



//4.获取歌手热门50首
///artist/top/song
export const getArtistHot = (id) => {
    return requests({url: `/artist/top/song?id=${id}`, method: 'get'})
}

//5.获取歌曲url,播放
export const getMusicUrl = (id) => {
    return requests({url: `/song/url?id=${id}` ,method:'get'})
}

//6.获取mv地址
export const getVideoUrl = (id) => {
    return requests({url: `/mv/url?id=${id}`, method: 'get'})
}
//获取 mv 数据
export const getMvDetail = (mvid) => {
    return requests({url: `/mv/detail?mvid=${mvid}`, method:'get'})
}

//7.推荐mv
/**推荐mv */
export  function getCommentMv(limit=6){
    return requests({
        url:`/top/mv?limit=${limit}`,
    })
}

///**mv评论 */
export function getMVComment(id,type=1,limit=10){
    return requests({
        url:`/comment/hot?id=${id}&type=${type}&limit=${limit}`,
    })
}

//最新MV
export function getNewMV(limit=8) {
    return requests({ url:`/mv/first?limit=${limit}`, method:'get'})
}
//网易出品MV
export function getWangYiMv(limit=12) {
    return requests({url:`/mv/exclusive/rcmd?limit=${limit}`, method: 'get'})
}

//
/**全部mv */
export function getAllAllNewMv({area='全部',type='全部',order='最新',limit=12,offset=1}){
    return requests({
        url:'/mv/all',
        params:{
            area:area,
            type:type,
            order:order,
            limit:limit,
            offset:offset
        }
    })
}

//发现音乐界面
/**获取轮播图数据 */
export function getBanner() {
    return requests({
        url: '/banner',
        method:'get'
    })
}
/**推荐歌单 */
export function getPersonalized(config=12) {
    return requests({
        url: '/personalized',
        params: {
            limit: config
        }
    })
}

//根据歌单id 获取所有歌单的歌曲
export function getSongSheet(id,limit=50,offset=1) {
    return requests({
        url:'/playlist/track/all',
        params: {
            id:id,
            limit:limit,
            offset:offset
        }
    })
}

//tabsongsheetlist
/**获取歌单分类 */
export function getTabSongCatList(){
    return requests({
        url:'/playlist/catlist'
    })
}


/**获取歌单--网友精选碟，全部歌单 */
export function getTabSongAllPlayList(cat,limit,offset){
    return requests({
        url:'/top/playlist',
        params:{
            cat:cat,
            limit:limit,
            offset
        }
    })
}

//获取搜索
export function Search(keywords, type=1) {
    return requests({
        url:'/cloudsearch',
        params: {
            keywords,
            type
        },
        method:'get'
    })
}

//听过页面detail
/**获取歌词 */
export function getLyric(id){
    return requests ({
        url:'/lyric',
        params:{
            id:id
        }
    })
}

/**获取歌单歌曲信息 */
export function getSongsDetail(id){
    return requests({
        url:'/song/detail',
        params:{
            ids:id
        }
    })
}

