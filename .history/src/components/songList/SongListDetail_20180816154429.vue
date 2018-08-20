<template>
    <ul class="mui-table-view songlist">
      <li class="mui-table-view-cell" v-for="(item) in songList" :key="item.id">
        <div class="songer-box">
         <P> <span class="mui-navigate-right">{{item.name}}</span></p>
       
          <p><span class="songer mui-flat-right">{{item.ar[0].name}}</span></p>
        </div>
      </li>
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
        .get("/playlist/detail?id=" + this.id, {
          xhrFields: { withCredentials: true }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.songList = res.data.playlist.tracks;
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
