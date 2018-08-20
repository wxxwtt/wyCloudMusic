import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import RecommendedMusic from '@/components/RecommendedMusic'
import HotSongList from '@/components/HotSongList'
import Search from '@/components/Search'
import Find from '@/components/navbar/Find'
import Movie from '@/components/navbar/Movie'
import SongListDetali from '@/components/songList/SongListDetali'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
