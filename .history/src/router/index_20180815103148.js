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
      // name: 'Index',
      redirect : '/RecommendedMusic',
      // component: Index
    },

    {
      path: '/RecommendedMusic',
      name: 'RecommendedMusic',
      component: RecommendedMusic
    },
    {
      path: '/HotSongList',
      name: 'HotSongList',
      component: HotSongList
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
