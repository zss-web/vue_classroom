<template>
    <div class="info">
         <div class="top">
            <head-shop></head-shop>
        </div>
        <div class="top1">
           <div class="top1_tx ">
               <div class="toux">
                   <img src="//img.mukewang.com/5b8cd7ec0001a8f502000200-140-140.jpg" alt="">
               </div>
               <div class="top1_txcon">
                   <div class="top1_txcon1">
                   <h3>名字就不打了，太难了</h3>
                   <p>男</p>
                   </div>
                   <div class="top_right">
                       <div class="top_right_li">
                           <em class="em">0</em><br>
                           <span>学习时长</span>
                       </div>
                       <div class="top_right_li">
                           <em class="em">0</em><br>
                           <span>经验</span>
                       </div>
                       <div class="top_right_li">
                           <em class="em">0</em><br>
                           <span>积分</span>
                       </div>
                       <div class="top_right_li">
                           <em class="em">0</em><br>
                           <span>关注</span>
                       </div>
                       <div class="top_right_li">
                           <em class="em">0</em><br>
                           <span>粉丝</span>
                       </div>
                       <div class=" lil">
                           <span class="span"><Icon type="md-snow" />个人设置</span>
                       </div>
                   </div>
            </div>
           </div>
           
       </div>
       <div class="info_con">
           <div class="info_left">
               <ul>
                   <li><a href="/personageinfo" >个人信息</a></li>
                   <li style="background:#46db01"><a href="/lessoninfo" >我的课程</a></li>
               </ul>
           </div>
           <div class="info_right" v-for="lesson in lessoninfo" :key="lesson.id">
              <div class="lessoncon">
                  <img :src="lesson.pic" alt="">
                 <div class="lessoncon2"> <h4>{{lesson.name}}</h4>
                  <p>￥{{lesson.price}}</p>
                  </div>
              </div>
           </div>
       </div>


    </div>
</template>

<script>
import headShop from '../headvue'
    export default {
        name: 'info',
        components:{
            headShop
        },
        data() {
            return {
                lessoninfo:[],
            }
        },
       mounted() {
            this.$axios({
                method:'GET',
                 url:"http://localhost:3000/api/lessoninfo",
            }).then(res=>{
                this.lessoninfo=res.data.lessoninfo;
            })
       },
    }
</script>

<style  scoped>
     .top{
        background: #07111b;
    }
        .top1{
        width: 100%;
        height: 140px;
        background-image: linear-gradient(to right bottom,rgba(20, 37, 59, 0.6),rgba(41, 38, 43, 0.8));
    }
    .top1 .top1_tx{
        width: 1102px;
        height: 110px;
        background: transparent;
        margin: 0 auto;
        position: relative;

    }
     .top1 .top1_tx .toux{
         width: 140px;
         height: 140px;
         border: 2px solid white;
         border-radius: 50%;
         box-shadow: 1px 2px 3px black;
         position: absolute;
         top: 30px;
         left: 66px;
        background: white;
        overflow: hidden;
     }
      .top1 .top1_con .toux img{
        width: 140px;
        height: 140px;
        border-radius: 50%;
      }
        .top1_txcon{
            width: 880px;
            height: 120px;
            float: right;
        }
        .top1_txcon .top1_txcon1{
            float: left;
            padding-top: 60px;
             line-height: 30px;
             color: white;
        }
        .top_right{
            width: 400px;
            float: right;
            text-align: center;
            padding-top: 40px;

        }
        .top_right .top_right_li{
            float: left;
            margin: 0 10px;
            color: white;

        }
        .em{
            font-size: 30px;
            color: white;

        }
        .span{
            width: 120px;
            padding: 6px;
            border-radius: 30px;
            border: 1px solid white;
        }
        .lil{
            margin-top: 30px;
            color: white;

        }
        .info_con{
            width: 1080px;
            height: 400px;
            margin: 0 auto;
        }
        .info_left{
            width: 220px;
            height: 100%;
            background: #ccc;
            float: left;
        }
        .info_left ul{
            margin-top: 90px;
        }
        .info_left ul li{
            width: 100%;
            height: 60px;
            font-size: 24px;
            color: #07111b;
            text-align: center;
            line-height: 60px;
        }
        .info_left ul li:hover{
            background: #46db02;
        }
        .info_right{
            width: 79%;
            height: auto;
            float: right;
            
        }
        .lessoncon{
            width: 100%;
            height: auto;
            padding: 12px;
            margin: 10px 0;
            border-top:1px solid #2f3336;
            border-bottom:1px solid #2f3336;
            display: flex;
            align-items: center;
        }
        .lessoncon img{
            width: 280px;
        }
        .lessoncon2{
            margin:0 30px 0 30px;
            font-size: 24px;
            color: #07111b;
        }
        .lessoncon2 h2{
            text-shadow: 1px 2px 3px black;
            margin-bottom: 6px;
        }
        .lessoncon2 p{
            font-size: 20px;
            color: #ccc;
        }
</style>