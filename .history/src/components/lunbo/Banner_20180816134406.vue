<template>
  <mt-swipe :auto="4000" style="height:180px">
    <mt-swipe-item v-for="item in imgList" :key="item.picUrl"><img :src="item.picUrl" alt=""></mt-swipe-item>
</mt-swipe>
</template>
<script>
export default {
  data(){
    return {
      imgList :[]
    }
  },
  created(){
    this.getLunBo();
  },
  methods : {
    getLunBo(){
      this.$axios.get('/banner',{ xhrFields: { withCredentials: true } })
      .then(res => {
        this.imgList = res.data.banners
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss">
  img {
    width: 100%;
    height: 100%;
  }
  .mint-swipe-indicator  .is-active {
    background: red !important;
  }
</style>
