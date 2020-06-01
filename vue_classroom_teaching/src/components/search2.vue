<template>
    <div class="bottom">
      <div class="search-form clearfix">
        <input
          type="text"
          class="nav2_inp l"
          value
          placeholder="请输入想搜索的内容"
          v-model="keyword"
          @keydown.enter="showsearch()"
        />
        <button class="nav2_btn r" @click="showsearch()">搜索</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'bottom',
         data() {
    return {
      keyword: ""
    };
  },
         methods: {
    showsearch() {
      this.$axios({
        method: "GET",
        url: "http://localhost:3000/api/search",
        params: { keyword: this.keyword }
      }).then(res => {
        this.$store.commit("setsearch_con", res.data);
        window.console.log(res.data)
        if (this.$route.name != "search_con") {
          this.router.push("search_con");
        }
      });
    }
  },
    }
</script>

<style  scoped>
    .bottom {
  height: 88px;
  background: white;
  padding-top: 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
.search-form {
  height: 48px;
  width: 840px;
  margin: 0 auto;
  position: relative;
}
.nav2_inp {
  font-size: 16px;
  color: #93999f;
  width: 736px;
  line-height: 48px;
  height: 48px;
  padding: 12px;
  background: #f1f1f1;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 0;
}
.nav2_btn {
  background: #f01414;
  width: 104px;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 0;
}
.l {
  float: left;
}
.r {
  float: right;
}
.toux{
  width: 34px;
  height: 34px;
  border-radius: 50%;
}
.toux img{
  width: 34px;
  border-radius: 50%;
  padding-right: 6px;

}
.tx{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>