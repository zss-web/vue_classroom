<template>
  <div class="jiangshi">
    <Col span="6" class="col_js">
      <div class="user_box">
        <a class="user_pic clearfix" href="#">
            <!-- <img class="img-circle" alt="韩晓燕" src="../assets/img/jiangshi1.png" /> -->
            <slot name="tx_pic"></slot>
        </a>
        <h4>
          <!-- <a href="#" class="h4">韩晓燕</a> -->
            <slot name="name"></slot>
        </h4>
        <div class="user_info">
          <!-- <div>（前）网易</div>
          <div>杭研产品开发部负责人...</div> -->
            <slot name="school"></slot>
            <slot name="education"></slot>
        </div>
      </div>
    </Col>
  </div>
</template>

<script scoped>
export default {
  name: "jiangshi",
  data() {
    return {};
  }
};
</script>

<style >
.user_pic{
    float: left;
    width: 100px;
    height: 100px;
    margin-right: 15px;
}
.user_pic img{
    border-radius: 50%;
}
.h4{
    float: left;
    line-height: 30px;
    margin-top: 12px;
    margin-left: -17px;
}
.user_pic img{
  width: 90px;
  height:100px;
}
.user_info{
    width: 140px;
    float: right;
    color: #767676;
    font-size: 12px;
    line-height: 21px;
}
.user_box{
    position: relative;
}
.user_box .user_info{
    position: absolute;
    right: 0px;
    top: 40px;
}
.col_js{
    margin-bottom: 16px;
}
</style>