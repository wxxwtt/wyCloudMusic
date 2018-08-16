<template>
  <h1>推荐音乐</h1>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getMusicList();
  },
  methods: {
    getMusicList() {
      this.$axios
        .get("/personalized", { xhrFields: { withCredentials: true } })
        .then(res => {
          console.log(res);
        }).catch(err=>{
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>


