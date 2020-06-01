<template>
    <div class="foot-con">
        <div class="foot_title"><img src="//cdn.meia.me//common/images/flogo.png"> </div>
        <div class="foot_list">
            <dl>
                <dt>合作</dt>
                <dd><a  href="">直播合作</a></dd>
                <dd><a  href="">成为讲师</a></dd>
                <dd><a  href="">机构入驻</a></dd>
            </dl>
           <dl>
                <dt>帮助</dt>
                <dd><a href="">常见问题</a></dd>
                <dd><a href="">故障反馈</a></dd>
                <dd><a  href="">在线客服</a></dd>
                <dd><a href="">服务条款</a></dd>
            </dl>
            <dl>
                <dt>探索</dt>
                <dd><a href="">找课程</a></dd>
                <dd><a href="">找活动</a></dd>
                <dd><a href="">直播表</a></dd>
            </dl>
            <dl>
                <dt>学习</dt>
                <dd><a href="">注册</a></dd>
                <dd><a href="">登录</a></dd>
                <dd><a href="">下载APP</a></dd>
            </dl>
            <dl>
                <dt>关注</dt>
                <dd><a href="">关于我们</a></dd>
                <dd><a href="">工作机会</a></dd>
            </dl>
        </div>
           <div class="foot_bottom clearfix">
            <div class="l">
                <span class="phone">
                   <Icon type="ios-call" />
                    <a href="">1008611</a>
                </span>
                <span class="email">
                    咨询邮箱：<a href="">service@meia.me</a>
                </span>
            </div>
            <div class="r">
                <a  href="">粤ICP备15063798号</a>
                &nbsp;&nbsp;©2015-2019 Meia版权所有
            </div>
            <div class="r clause">
                <a  href="">服务条款</a>
                <a t href="">知识产权</a>
            </div>

        </div>  
    </div>
</template>

<script>
    export default {
        name: 'foot-con',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .foot-con{
        width: 960px;
        margin:0 auto;
        background: rgb(235, 233, 233);
       font-size: 12px;
        
    }
    .foot_title {
    height:56px;
    border-bottom: 1px solid #C4CBD2;
    color: #333;
   
}
.foot_title img {
    height: 13px;
    width: auto;
    margin-top: 33px;
}
.foot_list dl {
    width: 20%;
    float: left;
    padding-bottom: 20px;
    padding-top: 30px;
}

ul, dl {
    list-style: none;
}
.foot_list dt {
    font-weight: bold;
    color: #333;
    padding-bottom: 10px;
}
.foot_list dd {
    line-height: 1;
    height: 26px;
}
.foot_list dd a{
     color:#797E83;

    }
.foot_bottom {
    clear: both;
    width: 100%;
    border-top: 1px solid #C4CBD2;
    color: #797E83;
    padding: 20px;
}
.l {
    float: left;
}
.r{
    float: right;
}
.foot_bottom a {
    color: #797E83;
}
</style>