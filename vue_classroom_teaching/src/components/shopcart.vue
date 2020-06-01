<template>
    <div class="shopcart">
        <div class="top">
            <head-shop></head-shop>
        </div>
       <div class="top1">
           <div class="top1_con clearfix">
               <h1>我的购物车</h1>
               <p>我的订单历史</p>
           </div>
       </div>
       <div class="cart">
          <div>
                <Table border ref="selection" :columns="columns" :data="shopcart" >
                   <template slot-scope="{ row }" slot="pic">
                  <img :src="row.pic" alt="" :style="{width:'123px'}">
                 </template>
      
                  <template slot-scope="{ row,index}" slot="num" >
                  <Button v-if="row.num<=1" type="success" ghost @click.native="jian(index)" disabled>-</Button>
                  <Button v-else type="success" ghost @click.native="jian(index)" >-</Button>
                  <input type="text" v-model="row.num" disabled :style="{width:'72px',height:'32px'}" class="num_wz">
                  <Button type="success" ghost @click.native="jia(index)">+</Button>
                 </template>
                <template slot-scope="{ row,index}" slot="cz">
                  <Button type="error" ghost  @click.native="del('warning',index,row.lesson_id)" >删除</Button>
                 </template>
                </Table>
                <Button @click="handleSelectAll(true) " >全选</Button>
                <Button @click="handleSelectAll(false)">取消</Button>
                <div :style="{display:'flex',}"><h3>总价格：</h3><span class="spansprice">{{totalprice}}</span><h3>总数量</h3><span  class="spansprice">{{total}}</span></div>
                 <Button type="primary" ghost   @click.native="jiesuan()">去结算</Button>
                <Modal
                    v-model="modal1"
                    :title="'总价格：'+totalprice"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <img src="../assets/img/erweima.png" alt="" class="erweima">
                </Modal>
         </div>
       </div>
    </div>
</template>

<script>
import headShop from '../components/headvue'
    export default {
        name: 'shopcart',
        components:{
            headShop,
        },
        data() {
            return {
                 modal1: false,
                users:JSON.parse(sessionStorage.getItem('users')),
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '图片',
                        key: 'pic',
                        slot:'pic',
                        width:'120px',
                    },
                    {
                        title: '课程',
                        key: 'name',
                        width:'500px',
                    },
                    {
                        title: '金额',
                        key: 'price',
                        width:'70px',
                    },
                    {
                        title: '数量',
                        key: 'num',
                        slot:'num',
                        width:'220px',
                    },
                    {
                        title: '操作',
                        key: 'cz',
                        slot:'cz',
                    }
                   
                ],
                shopcart: [],
                total:0,
                totalprice:0,
                k:[],
            }
        },
         methods: {
              ok () {
                this.$Message.info('购买成功,查看个人中心');
                this.show_cart();
                this.shopcart.splice(this.k,1);
            },
            cancel () {
                this.$Message.info('下次再来');
            },
             error () {
                this.$Message.error('删除失败');
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            jia(index){
                this.shopcart[index].num++;
                this.total++;
                this.totalprice += this.shopcart[index].price;
            },
            jian(index){
                 this.shopcart[index].num--;
                this.total--;
                this.totalprice -= this.shopcart[index].price;
              
            },
            del(warning,index,lesson_id){
                 this.$Message[warning]({
                    background: true,
                    content: '删除成功'
                });
                this.show_cart();
                this.shopcart.splice(index,1);
                this.$axios({
                    method:"GET",
                    url:"http://localhost:3000/api/cart_del",
                    params:{
                        lesson_id:lesson_id,
                    }
                }).then(res=>{

                })
            },
            show_cart(){
                var that=this;
                this.$axios({
                method:'GET',
                url:'http://localhost:3000/api/cart_con',
                params:{
                    users_id:this.users.id,
                }
            }).then(res=>{
                this.shopcart=res.data.cart_con;
                this.shopcart.forEach(function(v,k){
                    that.total +=v.num;
                    that.totalprice +=v.price*v.num;
                })
            })
            },
            jiesuan(){
                this.modal1=true;
                 var _this=this;
                   this.shopcart.forEach(function(v,k){
                       axios({
                        method:'GET',
                        url:'http://localhost:3000/api/lesson_con',
                        params:{
                            lesson_id:v.lesson_id,
                            price:v.price,
                            name:v.name,
                            pic:v.pic,
                        }
                      }).then(res=>{
                           var _this2=_this;
                         axios({
                        method:'GET',
                        url:'http://localhost:3000/api/cart_del',
                        params:{
                            lesson_id:v.lesson_id,
                        }
                      }).then(res=>{
                        //   if (res.data.error === 200) {
                        //       _this2.show_cart();
                        //       _this2.shopcart.splice(k,1);
                        //   }
                        _this2.k=k;
                        
                      })
                      })
                })
            }
        },
        mounted() {
            this.show_cart();
        },
    }
</script>

<style  scoped>
    .top{
        background: #07111b;
    }
    .top1{
        width: 100%;
        height: 160px;
        background-image: linear-gradient(to right bottom,rgba(37, 123, 235,.6),rgba(135, 20, 230,.6))
    }
    .top1 .top1_con{
        width: 1102px;
        height: 110px;
        background: transparent;
        margin: 0 auto;
       line-height: 110px;
    }
     .top1 .top1_con h1{
         float: left;
     }
      .top1 .top1_con p{
          float: right;
      }
    .shopcart .cart{
        width: 1152px;
        height: auto;
        border-radius: 20px;
        box-shadow: 1px 2px 3px rgba(71, 67, 67,.6);
        margin: 0 auto ;
        padding: 36px 36px 36px 36px;
        transform: translate(0 ,-10%);
        background: white;

    }
    .num_wz{
        text-align: center;
    }
    .erweima{
        width: 100%;
        padding: 30px;
    }
    .cart .spansprice{
        margin: 2px 10px 2px 6px;
    }
</style>