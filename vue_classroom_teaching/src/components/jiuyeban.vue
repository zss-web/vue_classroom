<template>
  <div class="jiuyeban">
    <div class="j_top clearfix">
      <h2>就业班</h2>
      <p>零基础就业</p>
    </div>
    <div class="j_bottom clearfix">
      <div class="j_bottom_li">
        <a href="#">
          <i class="i-web"></i>
          <h1>Web前端攻城狮</h1>
          <p>从未接触编程也可以学好</p>
        </a>
      </div>
       <div class="j_bottom_li">
        <a href="#">
          <i class="i-web"></i>
          <h1>Web前端攻城狮</h1>
          <p>从未接触编程也可以学好</p>
        </a>
      </div>
       <div class="j_bottom_li">
        <a href="#">
          <i class="i-web"></i>
          <h1>Web前端攻城狮</h1>
          <p>从未接触编程也可以学好</p>
        </a>
      </div>
       <div class="j_bottom_li">
        <a href="#">
          <i class="i-web"></i>
          <h1>Web前端攻城狮</h1>
          <p>从未接触编程也可以学好</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jiuyeban",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import "../assets/css/mystyle.css";
.jiuyeban {
  margin: 0 auto;
  width: 960px;
  height: 140px;
}
.j_bottom{
    display: flex;
}
.j_bottom_li {
  background: #f3f5f6 url(../assets/img/web.png) 10% 66% no-repeat;
  background-size: 46px;
  border-radius: 10px;
  float: left;
  flex: 1;
  margin: 0 12px 0 0 ;
}
.j_bottom_li:hover{
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    transition: all .3s ease;
}
.j_bottom_li:hover h1{
     color: #46bd01;
}
.j_bottom_li:nth-child(4){
  margin: 0;
}
.j_bottom_li h1{
    font-size: 16px;
    font-weight: bold;
    color: #1C1F21;
    letter-spacing: 1px;
    margin-top: 4px;
    padding: 12px 0 0 70px;
}
.j_bottom_li p{
    font-size: 12px;
    color: #1C1F21;
    line-height: 16px;
    margin-top: 2px;
    font-weight: 400;
    padding: 0px 0 2px 70px;
}

</style>