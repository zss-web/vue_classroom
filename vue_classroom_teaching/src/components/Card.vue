<template>
  <div class="CD">
    <Card style="width:310px;" class="card" >
      <div style="text-align:left">
        <div class="card_img" >
          <slot name="picture_src"></slot>
        </div>
        <h5 class="h5">
          <a href="#">
            <slot name="title"></slot>
          </a>
        </h5>
        <div class="p_mar">
          <p>
            <a href="#" class="p1">
              <slot name="author"></slot>
            </a>
          </p>
          <p class="p2">美好学院 讲师</p>
          <br />
        </div>
        <div>
          <span class="span1">
            <slot name="money"></slot>
          </span>
          <span class="span2">
            <slot name="watch"></slot>
          </span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script scoped>
export default {
  name: "CD",
  data() {
    return {};
  },
 
  methods: {
   
  },
};
</script>

<style scoped>

.card_img {
  width:100%;
  height:185px;
  overflow: hidden;
  margin-bottom: 10px;
  position: absolute;
  top:0px;
  left: 0px;
  
}
.h5{
  margin-top: 175px;
}

.p1,
.p2,
.span2 {
  font-size: 12px;
}
.p2 {
  margin: 3px 0 0 3px;
  color: #ccc;
}
.span2 {
  float: right;
}
.p1:hover {
  color: #46bd01;
}
.span1 {
  font-size: 14px;
  color: #e91d00;
}
.p_mar {
  margin: 8px 0;
}

.card {
  float: left;
  margin: 10px 5px;
  box-sizing: border-box;
  height: 287px;
  position: relative;
}


</style>