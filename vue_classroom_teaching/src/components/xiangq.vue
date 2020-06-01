<template>
    <div class="xiangq">
        <div v-for="item in xiangq_con" :key="item.id">
         <div class="top">
            <head-nav2></head-nav2>
        </div>
        <div class="top2">

            <div class="con1">
                <h1>{{item.title}}</h1>
                <p>{{item.t_title}}</p>
            </div>
            <div class="con2" >
                <div class="left">
                    <div class="l1">
                          <div class="youh">
                            <p class="l_0">限时优惠，截止至2月6日</p>
                        </div>
                         <div class="price">￥{{item.cost}}</div>
                        <div class="del_price"><del>￥388.00</del></div>

                        <div class="huab">
                            <p class="l_1">花呗付款</p>
                        </div>
                        <div class="jingd">
                            <p class="l_2">京东白条</p>
                        </div>
                    </div>
                    <div class="l2">
                    <div >
					<span class="sp">难度</span>
					<span class="spans">初级</span>
					<i class="spans"> . </i> 
					<span  class="sp">时长</span>
					<span class="spans">27小时10分钟</span>
					<i class="spans"> . </i> 
					<span  class="sp">学习人数</span>
					<span class="spans">48</span>
	    			<i class="spans"> . </i> 
					<span  class="sp">综合评分</span>
					<span class="spans">10.00</span>
					</div>
                    </div>
                </div>
                <div class="right ">
                    <div >
                       <p class="r1">立即购买</p> 
                    </div>
                    <div >
                      <Button class="r2"  @click.native="jiacart(item.c_id,item.cost,item.title,item.picture_src)">加入购物车</Button>
                      
                    </div>
                </div>
            </div>
        </div>
        <div class="top3 clearfix">
            <div class="left">
           <Icon type="logo-youtube" size="96" color="#515a6e" style="margin-top:66%"/>
           <div><p style="width:100%">观看试看视频</p ></div>
            </div>
            <div class="center">    
                <h1>{{item.title}}</h1>
                <p>{{item.content}}</p>
            </div>
            <div class="right" v-for="jiangs in jiangs" :key="jiangs.id">
                <div class="toux">
                    <img :src="jiangs.tx_pic" alt="">
                </div><br>
                <h5>{{jiangs.school}}</h5>
                <p>{{jiangs.education}}</p>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import headNav2 from './headvue'
    export default {
        name: 'xiangQ',
        components:{
          headNav2,  
        },
        data() {
            return {
                users:JSON.parse(sessionStorage.getItem('users')),
                jiangs:[],
             xiangq_con:[],
            }
        },
        mounted() {
      this.$axios({
        method:"GET",
        url:'http://localhost:3000/api/xiangq',
        params:{
          c_id:this.$route.query.xq_id,
          jiangs:this.$route.query.jiangs,
        }
      }).then(res=>{
        this.jiangs=res.data.jiangs;
        this.xiangq_con=res.data.article;
      });
        },
        methods: {
            jiacart(c_id,cost,title,pic){
                 this.$Message.success('加入成功。');
                this.$axios({
                    method:"GET",
                    url:'http://localhost:3000/api/jiacart',
                    params:{
                        users_id:this.users.id,
                        lesson_id:c_id,
                        price:cost,
                        name:title,
                        pic:pic,
                    }
                }).then(res=>{
                    // window.console.log(lesson_id);

                })
            }
        }
        
    }
</script>

<style  scoped>
.clearfix{
    clear: both;
}
.top{
    background:#515a6e; 
}  
.top2{
    width: 100%;
    height: 288px;
    background-image: linear-gradient(to right, rgb(74, 236, 74) , rgb(55, 116, 248));
    position: relative;
     text-align: center;
}
.top2 .con1{
    color: white;
}
.con1{
    width: 1020px;
    height: 90px;
    background: transparent;
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.con1 p{
    width: 100%;
    margin-top: 6px;
}
.con2{
    width: 1020px;
    height: 120px;
    background: white;
    border-radius: 12px;
    box-shadow: 1px 2px 3px rgba(100, 96, 96,.6);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 30px 40px;
    display: flex;
}
.right{
    float: right;
    align-content: center;
    font-size: 24px;
    /* color: white; */
    display: flex;
}
.r1,.r2{
    width: 160px;
    margin: 6px;
    float: left;
    border-radius: 50px;
    background: red;
    color: white;

}
.l_0{
    width: 160px;
    margin: 6px;
    float: left;
    border-radius: 50px;
    background: red;
}
.r2{
    background: pink;
    color: red;
}
.left{
    height: auto;
    width: 592px;
    align-content: center;
    font-size:14px;
    color: white;
}
.huab,.jingd{
    float: left;;
}
.l_1,.l_2{
    width: 80px;
    margin: 6px;
    border-radius: 50px;
    background: red;
}
.l_2{
     background: pink;
    color: red;
}
.l_0 p{
    font-size: 16px;
    color: white;
}
.l_0{
    width: 177px;
    height: 24px;
    background-image: linear-gradient(to right,rgba(233, 90, 90,.6),rgba(252, 127, 10,.7));
    border-radius: 30px;
}
.l1{
    display: flex;
}
.price{
    font-size: 32px;
    color: #f01414;
    line-height: 32px;
    font-weight: 700;
    margin-left: 8px;
}
.del_price{
    font-size: 14px;
    color: #93999f;
    font-weight: 700;
    line-height: 32px;
    margin-left: 8px;
    margin-right: 2px;
}
.sp{
    font-size: 12px;
    color: #545c63;
    line-height: 24px;
    font-weight: 700;
    padding-right: 8px;
}
.spans{
    color: #ccc;
}
.l2{
    margin-left: 20px;
    text-align: left;
}
.top3{
    width: 1020px;
    height: 448px;
    border-radius: 30px;
    background-image: linear-gradient(to right bottom,rgba(2, 211, 248, 0.6),rgba(6, 22, 253, 0.7));
    margin: 80px auto 20px;
    
}
.top3 .left,.right{
    width: 22%;
    height: 100%;
    float: left;
}
.top3 .center{
    width: 50%;
    height: 64%;
    float: left;
    color: white;
    box-sizing: content-box;
    margin: 100px 0;
    padding: 0px 40px 0 10px;
    line-height: 28px;
    border-right: 1px solid rgb(253, 251, 251,.6);
}
.top3 .left {
   text-align: center;
}
.top3 .center h1{
    margin-top: 20px;
    margin-bottom: 22px;
}
.top3 .right .toux{
    /* float: left; */
    width: 132px;
    height: 132px;
    border: 2px solid snow;
    border-radius: 50%;
    overflow: hidden;
    
}
.top3 .right{
    flex-direction:column;
      align-items:center;
      margin: 102px 0;
      color: white;
}
.top3 .right .toux img{
    width: 132px;
    height: 132px;
    border-radius: 50%; 
}
.top3 .right p{
    font-size: 14px;
    margin-bottom: 20px;
}
</style>