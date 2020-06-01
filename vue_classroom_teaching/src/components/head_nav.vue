<template>
  <div class="head_nav">
    <div class="nav clearfix">
      <h1 class="logo">
        <a href="#">
          <img class="lazy" src="http://cdn.meia.me/public/images/ilogo.svg" alt="meia" />
        </a>
      </h1>
    </div>
    <div class="nav_left">
      <Menu mode="horizontal"  class="Menu">
        <MenuItem  to="/" name='1' >
          <span >
            <Icon type="ios-apps" />首页
          </span>
        </MenuItem>
        <MenuItem  to="/course" name='2' >
        <span >
           <Icon type="ios-headset" />免费课程
        </span>
           
        </MenuItem>
         <!-- <MenuItem name="3" to="">
         <Icon type="ios-happy-outline" />统计分析
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-brush" />综合设置
        </MenuItem> -->
      </Menu>
    </div>
    <div class="nav_sousuo">
      <!-- 搜索 -->
      <search></search>
    </div>
    <!-- 登录 -->
    <div class="nav_right">
      <div class="nav_user" v-if='!users' >
        <a href="/shopcart" id="deng-card" @click="cart('success')">
          <Icon type="ios-cart" />购物车
        </a> /
        <a href="login" id="deng-btn" >
          <Icon type="ios-contact" />登录
        </a> /
        <a href="registor" id="zhu=btn" >
          <Icon type="md-person-add" />注册
        </a>
      </div>
      <div class="nav_user" v-else>
        <a href="/shopcart" id="deng-card" >
          <Icon type="ios-cart" />购物车
        </a> /
        <a href="/personageinfo" class="toux" >
            <img :src="users.url" alt="">
        </a> 
        <a href="/personageinfo" id="deng-btn" >
          {{users.name}}
        </a> /
        <a href="" id="deng-btn" @click="tuic()">
          <Icon type="ios-exit-outline"   />退出
        </a> /
      </div>
      
    </div>
  </div>
</template>

<script>
import search from "../components/search";

export default {
  name: "head_nav",
  components: {
    search
  },
  data(){
    return{
       users:JSON.parse(sessionStorage.getItem('users'))
    };
  },
  mounted() {
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
    },
 
  }

};
</script>

<style scoped>
.head_nav {
  overflow: hidden;
  width: 1540px;
  justify-content: center;
  align-content: center;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
  border-top: 2px solid #46bd01;
}

.lazy {
  margin: 18px 70px 0 0;
  height: 24px;
}
.nav_sousuo {
  margin: 10px 0 0 120px;
}
.nav_right {
  width: 350px;
  margin: 10px 0 0 88px;
}
.nav_right .nav_user a {
  color: #515a6e;
  margin: 0px 10px 0px 10px;
}
.nav_right .nav_user a:hover {
  color: #46bd01;
}
.nav_left {
  width: 486px;
}
.nav{
  margin-left: 3%;
}
.nav,
.nav_left,
.nav_sousuo {
  float: left;
}
.nav_right{
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
.nav_user{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
