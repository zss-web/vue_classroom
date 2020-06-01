<template>
    <div class="registor">
        <div class="headnav">
      <headnav></headnav>
    </div>
            <form action="#" method="post">
               <template>
                   <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" class="registor_box">
                        <div><a href="/login" class="dl">登录></a></div>
                        <p>{{mag}}</p>
                        <FormItem  prop="name">
                         <Input v-model="formValidate.name" prefix="ios-contact" size="large" placeholder="请输入用户名" class="input"/>
                       </FormItem>
                        <FormItem  prop="password">
                        <Input v-model="formValidate.password" prefix="md-create" type="password"  size="large"  password placeholder="请输入密码"  class="input"/>
                       </FormItem>
                       
                        <FormItem  prop="password1">
                        <Input v-model="formValidate.password1"  prefix="md-create" type="password"  size="large"  password placeholder="确认密码"  class="input"/>
                       </FormItem>
                      
                      <FormItem  prop="email">
                      <Input v-model="formValidate.email" prefix="ios-mail-outline" type="email" size="large" placeholder="请输入email" class="input"/>
                       </FormItem>
                       
                        <Button type="info" @click="getusers('formValidate')"  long>注册</Button>
                     </Form>
                </template>
            </form>
            <div class="foot_content">
                 <!-- <foot-con ></foot-con> -->
            </div>
    </div>
</template>

<script>
import footCon from '../down_con';
import headnav from "../head_nav";

    export default {
        name: 'registor',
        components:{
            footCon,
            headnav
        },
        data() {
             const validatePassCheck = (rule, value, callback) => {
                 if (value !== this.formValidate.password) {
                    callback(new Error('两次密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                mag:'',
                formValidate:{
                     name:'',
                password:'',
                password1:'',
                email:'',
                },
                 ruleValidate: {
                  name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' }
                    ],
                password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                 password1: [
                        { required: true, message: '请确认密码', trigger: 'blur' },
                         { validator: validatePassCheck, trigger: 'blur' }
                ],
                 email: [
                        { required: true, message: '请输入email', trigger: 'blur' },
                        { type: 'email', message: '不是正确的格式', trigger: 'blur' }
                ],
             },
            }
        },
         methods: {
            getusers(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');

                this.$axios({
                method:"POST",
                url:"http://localhost:3000/api/registor",
                params:{ name:this.formValidate.name,
                password:this.formValidate.password,
                password1:this.formValidate.password1,
                email:this.formValidate.email,
                }
            }).then(res=>{
                if (res.data.error ===200) {
                  this.$store.commit('setusers',res.data.users);
                  this.$router.push('/login');

                }else if (res.data.error === 500) {
                    this.mag="输入格式不对";
                }
             
            })
             } else {
                        this.$Message.error('请别留红框！！');
                    }
                })

                
            },
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
.registor{
    margin-top: 85px;
}
.registor_box{
    width: 360px;
    height:369px;
    background: rgb(255, 255, 255);
    border-radius: 2px;
    margin: 80px auto 30px;
    border: 1px solid rgba(70, 68, 68,.3);
    box-shadow: 1px 2px 3px  rgba(70, 68, 68,.3);
    padding: 50px ;
    position: relative;
}

.foot_content{
     width: 100%;
     background: rgb(235, 233, 233);
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.dl{
    position: absolute;
    top: 20px;
    right: 20px;
    color: #11afee;
}

</style>