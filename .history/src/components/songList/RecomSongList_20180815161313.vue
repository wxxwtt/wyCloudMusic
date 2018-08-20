<template>
  <div class="song-list">
    <div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
		</div>
    <div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
		</div>
    <div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
		</div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getSongList() {
      this.$axios
        .get("/personalized", { xhrFields: { withCredentials: true } })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.song-list {
  display: flex;
}
</style>
