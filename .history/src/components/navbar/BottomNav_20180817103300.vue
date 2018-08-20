<template>
    <nav v-if="isShow">
      <ul>
        <router-link tag='li' v-for="(item,i) in navList" :key="i" :to="item.route">
          <p><i :class="['iconfont', item.className]"></i></p>
        {{item.name}}</router-link>
      </ul>
		</nav>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      navList: [
        {
          name: "发现",
          className: "iconfont icon-iconset04100",
          route:'/Find'
        },
        {
          name: "视频",
          className: "iconfont icon-ziyuan",
          route:'/Movie'
        },
        {
          name: "我的",
          className: "iconfont icon-yinle",
          route:'/My'
        },
        {
          name: "朋友",
          className: "iconfont icon-haoyou",
          route :'/Friend'
        },
        {
          name: "账号",
          className: "iconfont icon-wode",
          route:'/AccountBumber'
        }
      ]
    };
  },
  props:['isShow'],
  created(){
    this.navIsShow()
  },methods:{
    navIsShow(flag) {
      let route = this.$route.path
      if(this.$route.path == '/Player'){
        this.$emit('isShow',false)
      }
      console.log(this.isShow,route)
    }
  }
};
</script>
<style lang="scss" scoped>
nav ul {
  // list-style: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  display: flex;
  padding-top: 15px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 3px #ccc;
  // -webkit-filter: blur(9px);
  // filter: blur(2px);

  li {
    flex: 1;
    text-align: center;
    color: #3e3c3c;
    font-size: 12px;
    p {
      margin-bottom: 5px;
      i {
        font-size: 30px;
      }
    }
  }
  li.current {
    color: red;
    i {
      color: red;
    }
  }
}
</style>

