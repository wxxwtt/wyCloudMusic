<template>
  <div class="nav-box">
    <ul>
      <router-link to="/RecommendedMusic">推荐音乐</router-link>
      <router-link to="/HotSongList">热歌榜</router-link>
      <router-link to="/Search">搜索</router-link>
    </ul>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
 .nav-box {
   ul {
     list-style: none;
     display: flex;
     height: 40px;
     line-height: 40px;
     font-size: 14px;
     justify-content: space-between;
     border-bottom: 1px solid #ccc;
     li {
       flex: 1;
       text-align: center;
     }
   }
 }
</style>

