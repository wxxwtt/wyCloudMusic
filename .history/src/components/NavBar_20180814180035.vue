<template>
  <div class="nav-box">
    <ul>
      <li>推荐音乐</li>
      <li>热歌榜</li>
      <li>搜索</li>
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
     li {
       flex: 1;
       text-align: center;
     }
   }
 }
</style>

