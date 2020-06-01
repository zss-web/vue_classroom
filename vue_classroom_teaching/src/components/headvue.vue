<template>
    <div class="top">
      <ul class="nav-item">
        <li>
          <a href="/">首页</a>
        </li>
        <li>
          <a href="/course">免费课程</a>
        </li>
        <!-- <li>
          <a href="">实战课程</a>
        </li>
        <li>
          <a href="">就业班</a>
        </li> -->
      </ul>
      <ul class="nav_right" v-if='!users'>
        <li @click="cart('success')">
          <a href="/shopcart" >
             <Icon type="ios-cart" />购物车
          </a> /
        </li>
        <li>
          <a href="/login" >
            <Icon type="ios-contact" />登录
          </a> /
        </li>
        <li>
          <a href="" >
            <Icon type="md-person-add" />注册
          </a>
        </li>
      </ul>
      <ul class="nav_right" v-else>
        <li>
          <a href="/shopcart">
            <Icon type="" />购物车
          </a> /
        </li>
        <li  class="tx" :style="{display:'flex'}">
          <a href="/personageinfo" class="toux" >
            <img :src="users.url" alt="">
        </a> 
          <a href="/personageinfo" >
            {{users.name}}
          </a> /
        </li>
        <li>
          <a href="" @click="tuic()">
            <Icon type="ios-exit-outline" />退出
          </a>
        </li>
      </ul>
      
    </div>
</template>

<script>
    export default {
        name: 'top',
        data() {
             return{
            users:JSON.parse(window.sessionStorage.getItem('users'))
           };
        },
        methods: {
          tuic(){
          sessionStorage.removeItem('users')
          this.users="";
        },
        cart(type) {
        this.$Message[type]({
            background: true,
            content: '请先登录'
        });
       }
  },
        
        
    }
</script>

<style  scoped>
    .top {
  width: 1152px;
  height: 40px;
  margin: 0 auto;
  font-size: 14px;
}
.nav-item li {
  float: left;
  margin-right: 30px;
  line-height: 40px;
}
.top > ul > li a {
  color: rgba(151, 148, 148, 0.8);
}
.top > ul > li a:hover {
  color: #46db01;
}
.nav_right li {
  float: left;
  margin-left: 30px;
  line-height: 40px;
}
.nav_right {
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

}
</style>