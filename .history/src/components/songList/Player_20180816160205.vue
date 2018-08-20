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
        })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
