<template>
  
</template>
<script>
export default {
  data(){
    return {

    }
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
