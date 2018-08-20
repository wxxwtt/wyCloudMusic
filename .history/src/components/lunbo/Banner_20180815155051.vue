<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  created(){
    this.getLunBo();
  },
  methods : {
    getLunBo(){
      this.$axios.get('/banner',{ xhrFields: { withCredentials: true } })
      .then(res => {
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
