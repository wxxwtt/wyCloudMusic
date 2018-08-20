import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import RecommendedMusic from '@/components/RecommendedMusic'
import HotSongList from '@/components/HotSongList'
import Search from '@/components/Search'
import Find from '@/components/navbar/Find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      redirect : '/Find',
      // component: Index
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
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
