import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import RecommendedMusic from '@/components/RecommendedMusic'
import HotSongList from '@/components/HotSongList'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'RecommendedMusic',
      component: RecommendedMusic
    },
    {
      path: '/',
      name: 'HotSongList',
      component: HotSongList
    },
    {
      path: '/',
      name: 'Search',
      component: Search
    }
  ]
})
