<template>
    <div class="login">
         <div class="headnav">
      <headnav></headnav>
    </div>
            <form action="#" method="post">
               <template>
                   <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" class="logo_box">
                        <div><a href="/registor" class="zc">注册></a></div>
                        <p style="color:red;">{{mag}}</p>
                        <FormItem  prop="name">
                         <Input v-model="formValidate.name" prefix="ios-contact" size="large" placeholder="请输入账号" class="input"/>
                       </FormItem>
                          <FormItem  prop="password">
                        <Input v-model="formValidate.password"  prefix="md-lock" type="password"  size="large"  password placeholder="请输入密码"  class="input"/>
                        </FormItem>
                         <Button type="success" long  @click="getusers()" >登录</Button>
                   </Form>
                </template>
            </form>
            <div class="foot_content">
                <footCon></footCon>
            </div>
    </div>
</template>

<script>
import footCon from '../down_con';
import headnav from "../head_nav";

    export default {
        name: 'login',
        components:{
            footCon,
           headnav

        },
        data() {
            return {
                mag:'',
                formValidate:{
                     name:'',
                password:'',
                },
                ruleValidate: {
                  name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
             },
            }
        },
            

        methods: {
            getusers(){
                this.$axios({
                method:"GET",
                url:"http://localhost:3000/api/login",
                params:{ name:this.formValidate.name,
                    password:this.formValidate.password,
                }
            }).then(res=>{
            if( res.data.error === 200){
                // window.console.log(res.data.users)
                this.$store.commit('userlogin',res.data.users);
                    if(res.data.users !==null){
                        this.$router.push('/');
                    }
            }else if(res.data.error === 500){
                this.mag="账号或密码错误";
            }      
            })
           }
        },
        mounted() {
           
        },
    }
</script>

<style  scoped>
.headnav{
  position: fixed;
  z-index: 500;
  top: 0px;
  left: 0;
  background: white;
}
.login{
    margin-top: 85px;
}
.logo_box{
    width: 360px;
    height:280px;
    background: rgb(255, 255, 255);
    border-radius: 2px;
    margin: 160px auto 30px;
    border: 1px solid rgba(70, 68, 68,.3);
    box-shadow: 1px 2px 3px  rgba(70, 68, 68,.3);
    position: relative;
    padding: 50px ;
}
.logo_box .input{
    margin-bottom: 20px;
}
.foot_content{
        width: 100%;
       background: rgb(235, 233, 233);
       position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.zc{
    position: absolute;
    top: 20px;
    right: 20px;
    color: #46bd02;
}
</style>