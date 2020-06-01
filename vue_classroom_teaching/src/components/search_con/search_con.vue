<template >
  <div class="search_con">
    <div class="head-nav2">
      <head-nav2></head-nav2>
    </div>
    <div class="search-con">
        <template>
        <Row class="all_contents"  >
          <Col span="12" offset="3" class="nav2_left" >
          <div class="content">
              <a href="#" class="a">全部结果<span class="span">{{($store.state.search_con.lengths)}}</span></a>
          </div>
           <div v-if="$store.state.search_con.lengths">
            <div class="contents" v-for="item in $store.state.search_con.search_con" :key="item.id"  >
                <a href="" class=" item-img l ">
                    <img :src="item.cover_src">                    
                        <p class="type">实战课程</p>
                </a>
                  <div class="item-xj">
                    <a href="#" class="item-title">
                        <span class="highlight">{{item.title}}</span>核心技术
                    </a>
                    <p class="item-desc">应用开发，<span class="highlight">{{item.title}}</span>{{item.t_title}}<span class="highlight">{{item.cost}}</span></p>
                  <p class="item-classify">
                       <span>讲师： <a  href="">{{item.author}}</a> </span>
                      <span>高级</span>
                       <Icon type="ios-person" />
                        <span>{{item.watch}}</span>
                        <a href="" title="课程导学">
                         <Icon type="md-arrow-dropright-circle" />
                          <span >试看</span> 
                         </a>
                   </p>
                </div>
            </div>
             </div>

            <div v-else class="div_spans">
               没有找到"<span >{{$store.state.search_con.keywords}}</span>"相关内容
            </div>
          </Col>
          <Col span="5" offset="1" class="nav2_right">2</Col>
        </Row>
        </template>
    </div>
       
    </div>
</template>

<script>
import headNav2 from "../head_nav2";
export default {
  name: "search_con",
  components: {
    headNav2
  },
  data() {
    return {
        
    };
  },
  mounted() {
    
  }
};
</script>    

<style scoped>
.search_con {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f3f5f6;
}
.head-nav2 {
  background: rgba(18, 28, 37);
}
.nav2_left,.nav2_right{
    background: white;
}
.all_contents{
    margin-top: 16px;
    background: #9199a1;

}
.content{
    width: 100%;
    height: 82px;
    padding: 20px 32px;
    line-height: 41px;
    border-bottom: 1px solid rgba(209, 208, 208,.6);
    background: white;

}
.content .a{
    height: 40px;
    font-size: 14px;
    color: #f20d0d;
}
.content .span{
    font-size: 12px;
    color: #9199a1;
}
.contents{
    width: 736px;
    height: auto;
    padding: 16px 0;
    margin: 0 16px;
    border-bottom: 1px solid rgba(31, 30, 30,0.6);
    background: white;

}
.item-img {
    display: inline-block;
    width: 120px;
    height: 90px;
    margin-right: 32px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}
 .item-img img {
    width: 120px;
    height: 90px;
    border-radius: 4px;
}
.item-img .type {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background: #545c63;
    border-radius: 0 0 4px 0;
}
.item-xj .item-title{
    font-size: 16px;
    line-height: 32px;
    font-weight: 700;
    display: inline-block;
}
.highlight {
    color: red;
}
 .item-desc {
    max-height: 48px;
    color: #4d555d;
    font-size: 12px;
    line-height: 24px;
}
.item-classify {
    margin-top: 4px;
}
.item-classify span {
    line-height: 24px;
    color: #4d555d;
    font-size: 12px;
    margin: 0 10px 0 2px;
}
.item-xj{
  width:580px;
  float: right;
}
.div_spans span{
    color: red;
    font-size: 42px;
}
.div_spans{
    text-align: center;
    font-size: 26px;
}
</style>