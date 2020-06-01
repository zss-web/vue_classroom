<template>
  <div class="home">
      <div class="headnav">
      <headnav></headnav>
    </div>
    <div class="content_one">
      <content-one></content-one>
    </div>
    <div class="jiuyeban">
      <jiuye-ban></jiuye-ban>
    </div>
    <div class="jobm">
      <job-market></job-market>
    </div>
    <div class="content_two">
      <content-two >
        <h2 slot="h2">畅销好课 你的同行都在学</h2>
        <p slot="p">更全面的实战案例、更细致的讲解和课后辅导，让你的职业生涯能更轻松的完成进阶。</p>
          <a slot="fx_a" href="#" class="fx_a">发现更多>></a>
        <card slot="card"  v-for="item in articles.article1" :key="item.c_id"  @click.native="xiangq(item.c_id,item.jiangs)">
           <img slot="picture_src" :src="item.picture_src" />
          <a slot="title" name="title" >{{item.title}}</a>
          <a slot="author">{{item.author}}</a>
          <span slot="money">￥361.00</span>
          <span slot="watch">{{item.watch}}</span>
        </card>
      </content-two>
    </div>
    <div class="content_three">
      <content-two >
        <h2 slot="h2">IXDC 机构精选</h2>
        <p slot="p">IXDC机构下1000+在线视频内容：历届大会演讲/大咖专访，国内外名企成功实战案例解析、行业精英经验分享，设计方法、团队管理及创业心得尽在其中。</p>
          <a slot="fx_a" href="#" class="fx_a">发现更多>></a>
        <card slot="card"  v-for="item in articles.article2" :key="item.id"  @click.native="xiangq(item.c_id,item.jiangs)">
           <img slot="picture_src" :src="item.picture_src"  />
          <a slot="title" name="title">{{item.title}}</a>
          <a slot="author">{{item.author}}</a>
           <p slot="money" class="p_color">{{item.cost}}</p>
          <span slot="watch">{{item.watch}}</span>
        </card>
      </content-two>
    </div>
    <div class="jiangshi1">
      <content-two >
        <h2 slot="h2">专业团队 业内顶尖</h2>
        <p slot="p">聚集全球的专业领袖，为你带来最前沿的案例剖析，量身定制你的职业发展计划，贡献最极致的成长体验。</p>
        <a slot="fx_a" href="#" class="fx_a">成为讲师>></a>
        <Row>
          <jiangshi v-for="item in jiangs.jiangs" :key="item.id">
              <img :src="item.tx_pic" alt="" slot="tx_pic">
              <a href="#" slot="name" class="h4">{{item.name}}</a>
              <div slot="school">{{item.school}}</div>
              <div slot="education">{{item.education}}</div>
          </jiangshi>
        </Row>
      </content-two>
    </div>
    <div class="foot_content">
          <foot-con ></foot-con>
     </div>
  </div>
</template>

<script>
import contentOne from "../components/content_one";
import jiuyeBan from "../components/jiuyeban";
import jobMarket from "../components/jobmarket";
import contentTwo from "../components/content_two";
import card from "../components/Card";
import jiangshi from "../components/jiangshi";
import footCon from '../components/down_con';
import headnav from "../components/head_nav";


export default {
  name: "home",
  components: {
    contentOne,
    jiuyeBan,
    jobMarket,
    contentTwo,
    card,
    jiangshi,
    footCon,
     headnav
  },
  data() {
    return {
      articles: [],
      jiangs:[]

    };
  },
  methods: {
    xiangq(val1,val2){
        this.$router.push(`/xiangq?xq_id=${val1}&&jiangs=${val2}`);
    }
  },
  
  mounted() {
    this.$axios({
      method: "GET",
      url: "http://localhost:3000/api/",
    }).then(res => {
      this.articles = res.data;
      // window.console.log(res);
    });
    this.$axios({
      methods:"GET",
      url: "http://localhost:3000/api/jiangs"
    }).then(res => {
          this.jiangs = res.data;
    });
  }
};
</script>
<style scoped>
@import "../assets/css/mystyle.css";
/* .home{
  margin-top: 82px;
} */

.jobm {
  width: 100%;
  box-shadow: 0 2px 2px rgba(83, 61, 61, 0.2);
}
.content_two {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.fx_a:hover{
  color: #46bd01;
}
.p_color{
  color: #46bd01;
}
.jiangshi1{
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: #fafafa;
}
.foot_content{
        width: 100%;
       background: rgb(235, 233, 233);
}

</style>
