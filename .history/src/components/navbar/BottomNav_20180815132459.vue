<template>
    <nav >
      <ul>
        <li v-for="(item,i) in navList" :key="i">{{item.name}}</li>
      </ul>
		</nav>
</template>
<script>
export default {
  data(){
    return {
      navList:[
        {
          name : '发现1',
          src :''
        },
        {
          name : '发现',
          src :''
        },
        {
          name : '发现',
          src :''
        },
        {
          name : '发现',
          src :''
        },
        {
          name : '发现',
          src :''
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    display: flex;
  }
</style>

