<template>
    <nav >
      <ul>
        <li v-for="(item,i) in navList" :key="i"><i class="iconfont">&#x33;</i>{{item.name}}</li>
      </ul>
		</nav>
</template>
<script>
export default {
  data(){
    return {
      navList:[
        {
          name : '发现1',
          src :''
        },
        {
          name : '发现',
          src :''
        },
        {
          name : '发现',
          src :''
        },
        {
          name : '发现',
          src :''
        },
        {
          name : '发现',
          src :''
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';
  src: url('iconfont.eot');
  src: url('iconfont.eot?#iefix') format('embedded-opentype'),
  url('iconfont.woff') format('woff'),
  url('iconfont.ttf') format('truetype'),
  url('iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
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
    }
  }
</style>

