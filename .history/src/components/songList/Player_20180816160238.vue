<template>
  <div>player</div>
</template>
<script>
export default {
  data(){
    return {
      id: this.$route.query.id
    }
  },
  methods : {
    getSongById(){
      this.$axios.get('/music/url?id=' + this.id,{
          xhrFields: { withCredentials: true }
        }).then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
