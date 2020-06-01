<template>
  <div class="content-one clearfix">
    <div class="left">
      <ul class="items" >
        <li v-for="classfiy in fenlei.classfiy" :key="classfiy.id" @mouseover="showitem_id(classfiy.id)" >
          <Icon type="ios-book-outline" />{{classfiy.classfiy}}
        </li>
        <div class="item_p" >
          <p v-for="classfiyxx in fenlei1.classfiyxx" :key="classfiyxx.id"><a @click="tiaocourse()" >{{classfiyxx.classfication}}</a> </p>
        </div>
      </ul>
    </div>
    <div class="right">
      <Carousel loop autoplay>
        <CarouselItem>
          <div class="demo-carousel">
            <img :style="style" src="https://img.mukewang.com/5e0ab08e0001842f18720764.jpg" alt />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img :style="style" src="https://img.mukewang.com/5e09596e000185c518720764.jpg" alt />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img :style="style" src="https://img.mukewang.com/5e0aafc800010b5318720764.jpg" alt />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img :style="style" src="https://img1.sycdn.imooc.com/5e00222200015a9218720764.jpg" alt />
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "content-one",
  data() {
    return {

      fenlei:[],
      fenlei1:[],
      style: "width:100%;height:400px",
    };
  },
  methods: {
   
    showitem_id(val) {
      axios({
      method: "GET",
      url: "http://localhost:3000/api/con_one2",
      params:{c_id:val}
    }).then(res => {
      this.fenlei1 = res.data;
      // window.console.log(res.data)
    });
    },

    tiaocourse(){
      
        this.$router.push(`/course`);
    }

  },
   mounted() {
    this.$axios({
      method: "GET",
      url: "http://localhost:3000/api/con_one",
    }).then(res => {
      this.fenlei = res.data;
      // window.console.log(res.data.classfiy);
    });
  }
};
</script>

<style scoped>
@import "../assets/css/mystyle.css";
.content-one {
  margin: 30px auto;
  width: 960px;
  height: 400px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
}
.left {
  width: 200px;
  height: 400px;
  float: left;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}
.right {
  float: left;
  width: 760px;
  height: 100%;
}
.items {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 66px;
}
.items > li {
  width: 100%;
  height: 66.3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.items li:hover {
  color: #46bd01;
}

.item_p {
  width: 480px;
  height: 400px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 196px;
  top: -1px;
  z-index: 88;
  display: none;
}

.item_p p{
  width: 130px;
  margin: 0 10px;
}

.items li:hover~.item_p {
  display: block;
}
.item_p p>a:hover{
  color: #46bd01;
}
.item_p:hover{
  display: block;
}
</style>