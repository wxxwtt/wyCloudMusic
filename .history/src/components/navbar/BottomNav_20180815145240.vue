<template>
    <nav >
      <ul>
        <li v-for="(item,i) in navList" :key="i" :class="{'current' : i==current}">
          <p><i :class="['iconfont', item.className]"></i></p>
        {{item.name}}</li>
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
          className: "iconfont icon-iconset04100"
        },
        {
          name: "视频",
          className: "iconfont icon-ziyuan"
        },
        {
          name: "我的",
          className: "iconfont icon-wode",
          src: ""
        },
        {
          name: "朋友",
          className: "iconfont icon-haoyou",
          src: ""
        },
        {
          name: "账号",
          className: "iconfont wode",
          src: ""
        }
      ]
    };
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
  height: 60px;
  display: flex;
  li {
    flex: 1;
    text-align: center;
    color: #ccc;
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

