<template>
    <nav >
      <ul>
        <li v-for="(item,i) in navList" :key="i" :class="i==current"><i class="iconfont icon-iconset04100"></i>
       <br> {{item.name}}</li>
      </ul>
		</nav>
</template>
<script>
export default {
  data(){
    return {
      current:0,
      navList:[
        {
          name : '发现',
          src :''
        },
        {
          name : '视频',
          src :''
        },
        {
          name : '我的',
          src :''
        },
        {
          name : '朋友',
          src :''
        },
        {
          name : '账号',
          src :''
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

  nav ul{
    // list-style: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      color: #ccc;
      font-size: 12px;
      i {
        font-size: 30px;
      }
    }
    li.current {
      color: red;
    }
  }
</style>

