<template>
  <div class="course">
    <div class="clearfix fl">
      <div class="headnav">
      <headnav></headnav>
    </div>
      <span class="span">方向:</span>
      <div class="lei">
        <ul>
          <li @click="showall()" :class="{actives:active_num===0}">全部</li>
          <li v-for="lei in lei" :key="lei.id" @click="showlei(lei.id)" :class="{actives:active_num===lei.id}">{{lei.classfiy}}</li>
        </ul>
      </div>
    </div>
    <div class="clearfix fl">
      <span class="span">分类:</span>
      <div class="lei">
        <ul>
          <li @click="showlei(c_id)" :class="{actives:active_num2===0}">全部</li>
          <li v-for="leixx in leixx" :key="leixx.id" @click="showleixx(leixx.id)" :class="{actives:active_num2===leixx.id}">{{leixx.classfication}}</li>
        </ul>
      </div>
    </div>
    <div>
        <card slot="card"  v-for="item in card" :key="item.id"  @click.native="xiangq(item.c_id,item.jiangs)">
           <img slot="picture_src" :src="item.picture_src"  />
          <a slot="title" name="title">{{item.title}}</a>
          <a slot="author">{{item.author}}</a>
           <p slot="money" class="p_color">{{item.cost}}</p>
          <span slot="watch">{{item.watch}}</span>
        </card>
    </div>
  </div>
</template>

<script>
import card from "../components/Card";
import headnav from "../components/head_nav";

export default {
  name: "course",
  components:{
    card,
    headnav
  },
  data() {
    return {
      lei: [],
      leixx: [],
      card:[],
      c_id:'',
      active_num:0,
      active_num2:0,
    };
  },
  methods: {
   xiangq(val1,val2){
        this.$router.push(`/xiangq?xq_id=${val1}&&jiangs=${val2}`);
    },
    showlei(val) {
      this.active_num=val;
      this.active_num2=0;
      axios({
        method: "GET",
        url: "http://localhost:3000/api/con_one2",
        params: { c_id: val }
      }).then(res => {
        this.leixx = res.data.classfiyxx;
        this.card=res.data.card;
        this.c_id=val;
      });
    },
    showleixx(val){
       this.active_num2=val;
        axios({
        method: "GET",
        url: "http://localhost:3000/api/leixx",
        params: { c_id: val }
      }).then(res => {
        this.card=res.data.card;
      });
    },
    showall(){
      this.active_num=0;
         this.$axios({
      method: "GET",
      url: "http://localhost:3000/api/con_one"
    }).then(res => {
      this.lei = res.data.classfiy;
      // window.console.log(res);
    });
    this.$axios({
      method: "GET",
      url: "http://localhost:3000/api/leixx"
    }).then(res => {
      this.leixx = res.data.leixx;
    });
     this.$axios({
      method: "GET",
      url: "http://localhost:3000/api/cardall"
    }).then(res => {
      this.card = res.data.article;
    });
    },
    cardall(){
         this.$axios({
      method: "GET",
      url: "http://localhost:3000/api/cardall"
    }).then(res => {
      this.card = res.data.article;
    });
    }
  },
  mounted() {
    this.showall();
  }
};
</script>

<style  scoped>
.headnav{
  position: fixed;
  z-index: 500;
  top: 0px;
  left: 0;
  background: white;
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
.clearfix {
  zoom: 1;
}
.course {
  width: 960px;
  margin: 82px auto;
  height: auto;
  background:  rgb(81, 81, 100,.08);
}
.lei ul > li {
  margin: 10px;
  float: left;
}
.span {
  float: left;
  margin: 10px;
  width: 40px;
}
.lei ul > li:hover{
    color: #46db01;
}
.p_color{
    color: #46db01;
}
.fl{
    border-bottom: 1px solid rgba(54, 53, 53,.3);
}
.actives{
  color: #df0ef1;
  background: #ccc;
  padding: 0 8px;
  border-radius: 6px;
}
</style>