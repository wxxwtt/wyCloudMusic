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
  nav ul{
    // list-style: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
    }
  }
</style>

