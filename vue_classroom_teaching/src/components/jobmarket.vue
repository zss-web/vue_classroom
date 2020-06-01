<template>
  <div class="jobmarket">
    <div class="j_top clearfix">
      <h2>职场进阶</h2>
      <p>1年以上开发经验系统成长</p>
    </div>
    <div class="job_bottom">
      <div class="job_li">
        <a href="#">
         <img src="../assets/img/java-end.png" alt="">
        </a>
      </div>
      <div class="job_li">
        <a href="#">
         <img src="../assets/img/web-qz.png" alt="">
        </a>
      </div>
      <div class="job_li">
        <a href="#">
         <img src="../assets/img/java.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobmarket",
  data() {
    return {};
  }
};
</script scoped>

<style scoped>
@import "../assets/css/mystyle.css";
.jobmarket {
  margin: 0 auto;
  width: 960px;
  height: 152px;
}
.job_bottom .job_li a>img{
  width: 310px;
  height: 70px;
}

.job_bottom{
  display: flex;
}
.job_bottom .job_li{
  flex: 1;
  text-align: center;
}
.job_bottom .job_li:nth-child(2){
  margin: 0 10px;
}
</style>