<template>
  
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods : {
    getSonglist(){
      this.$axios.get('/playlist/detail',{ xhrFields: { withCredentials: true } })
      .then(res +>{
        
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
