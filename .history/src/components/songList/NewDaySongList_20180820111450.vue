<template>
    <ul class="mui-table-view songlist">
      <router-link tag="li" :to="{name:'Player',query:{id:item.id,name:item.name,songer:item.ar[0].name}}" class="mui-table-view-cell" v-for="(item) in songList" :key="item.id">
        <div class="songer-box">
         <P> <span class="mui-navigate-right">{{item.name}}</span></p>
          <p><span class="songer mui-flat-right">{{item.ar[0].name}}</span></p>
        </div>
      </router-link>
    </ul>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      songList: []
    };
  },
  created() {
    this.getSonglist();
  },
  methods: {
    getSonglist() {
      this.$axios
        .get("/personalized/newsong", {
          xhrFields: { withCredentials: true }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.songList = res.data.result;
            console.log(res.data)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
  .songlist {
    .songer-box {
      display: flex;
      // justify-content: space-between;
    }
    p {
      color: #333;
      font-size: 14px;
      // display: flex;
    }
    .songer {
      color: #666;
      padding-left: 20px;
      font-size: 12px;
    }
  }
</style>
