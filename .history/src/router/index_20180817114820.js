import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import RecommendedMusic from '@/components/RecommendedMusic'
import HotSongList from '@/components/HotSongList'
import Search from '@/components/Search'
import Find from '@/components/navbar/Find'
import Movie from '@/components/navbar/Movie'
import SongListDetail from '@/components/songList/SongListDetail'
import Player from '@/components/songList/Player'

Vue.use(Router)
let router =  new Router({
  linkActiveClass:'current',
  routes: [
    {
      path: '/',
      redirect : '/Find',
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/Find/SongListDetail',
      name: 'SongListDetail',
      component: SongListDetail
    },
    {
      path: '/Find/SongListDetail/Player',
      name: 'Player',
      component: Player
    }
  ]
})
router.beforeEach((to,form,next) => {
  let isShow = true
  if(to.path=="/Find/SongListDetail/Player") {
    isShow = false;
    sessionStorage.setItem('isShow',JSON.stringify(isShow))
  }else {
    isShow = true;
    sessionStorage.setItem('isShow',JSON.stringify(isShow))
  }
  next()
})

export default router