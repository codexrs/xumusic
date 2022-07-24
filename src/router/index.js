import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = ()=> import('@/views/home/home.vue')
const FindMusic = () => import('@/views/finemusic/FineMusic.vue')
const Singger = () => import('@/views/singger/singger.vue')

const Artists = () => import('@/views/artists/artists.vue')
const Ablbum = () => import('@/views/artists/Childpen/ablbum.vue')
const MV = () => import('@/views/artists/Childpen/mv.vue')
const MvPlay = () => import('@/views/artists/Childpen/mvplay.vue')
const ArtistDesc = () => import('@/views/artists/Childpen/artistdesc.vue')
const SiMiPlayer = () => import('@/views/artists/Childpen/simiplayer.vue')

const FisteMv =() => import('@/views/MV/MV.vue')
const AsideMv = () => import('@/views/asidemv/AsideMv.vue')
const SongSheet = () => import('@/views/songsheet/SongSheet.vue')
const TabSongSheet =() => import('@/views/tabsongsheet/TabSongSheet.vue')

//搜索页
const Search = () => import('@/views/search/Search.vue')
const SearchAblum = () => import('@/views/search/Children/ablum.vue')
const SearchSingger = () => import('@/views/search/Children/singger.vue')
const SearchSingglesong = () => import('@/views/search/Children/singglesong.vue')
const SearchSongList = () => import('@/views/search/Children/songlist.vue')
const SearchSongWord = () => import('@/views/search/Children/songword.vue')
const SearchVideo = () => import('@/views/search/Children/searchvideo.vue')

//detail歌曲页面
const Detail = () => import('@/views/detail/detail.vue')
//1.安装插件
Vue.use(VueRouter)

//路由对象
const routes = [
    {
        path: '/',
        redirect: Home
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/singger',
        component: Singger
    },
    {
        path:'/mv',
        component: FisteMv
    },
    {
        path:'/asidemv',
        component: AsideMv
    },
  
    {
        path:'/findmusic',
        component: FindMusic
    },
    {
        path:'/mvplay',
        component: MvPlay
    },
    {
        path:'/songsheet',
        name:'songsheet',
        component: SongSheet
    },
    {
        path:'/tabsongsheet',
        component:TabSongSheet
    },
    {
        path:'/detail',
        name:'detail',
        component:Detail
    },
    {
        path:'/artists',
        component: Artists,
        children: [
            {
                path:'album',
                component: Ablbum
            }, 
            {
                path:'mv',
                component:MV
            }, 
            {
                path:'artistdesc/:ArtistList/:name',
                name:'artistdesc',
                component:ArtistDesc
            },
            {
                path:'simiplayer/:id',
                name:'simiplayer',
                component:SiMiPlayer
            },
           
        ]
    },
    {
        path:'/search',
        component:Search,
       
        children: [
           
            {
                path:'ablum',
                component:SearchAblum
            },
            {
                path:'singger',
                component:SearchSingger
            }, 
            {
                path:'singglesong',
                component:SearchSingglesong
            },
            {
                path:'songlist',
                component:SearchSongList
            },
            {
                path:'songword',
                component:SearchSongWord
            },
            {
                path:'video',
                component:SearchVideo
            }
        ]
    }
        
    
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//导出
export default router