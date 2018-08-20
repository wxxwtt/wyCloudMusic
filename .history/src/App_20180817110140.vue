<template>
  <div id="app">
    <!-- <nav-bar></nav-bar>  -->
    <transition>
      <router-view/>
    </transition>
    <bottom-nav :isShow="isShow"></bottom-nav>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import BottomNav from './components/navbar/BottomNav'
export default {
  name: 'App',
  data(){
    return {
      isShow:true
    }
  },
  mounted(){
    this.navIsShow()
  },
  methods:{
    navIsShow(){
      console.log('11111111111111')
      eventBus.$on('isShow',flag => {
        this.isShow = flag;
      });
      
    },
    
  },
  components : {
    'nav-bar' : NavBar,
    bottomNav : BottomNav
  }
}
</script>

<style lang="scss">
body {background-color: #fff;
font-size: 14px;}
  body,html,ul {
    list-style: none;
    padding :0;
    margin: 0;
  }
  #app {
    padding-bottom: 75px;
  }
  .v-enter,.v-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  .v-leave-to {
    transform: translateX(-100%);
    opacity: 0;
    position: absolute;
  }
  .v-enter-active,.v-leave-active {
    transition: all 0.5s ease;
    // opacity: 1;
  }
</style>


