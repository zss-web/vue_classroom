<template>
    <div class="search">
         <section class="suosou">
            <form action="#" method="" class="clearfix">
              <input type="search" placeholder="请输入关键词"  v-model="keyword" @keydown.enter="search_con()"/>
              <router-link to="/search_con" class="button" @click.native="search_con()"> <Icon type="md-search" class="Icon" /></router-link>
            </form>
          </section>
    </div>
</template>

<script>
    export default {
     name: 'search',
       data(){
           return{
               keyword:'',
           }
       },
       mounted() {
              
       },
       methods: {
           search_con(){
       this.$axios({
         method: "GET",
          url: "http://localhost:3000/api/search",
          params:{keyword:this.keyword}
    }).then(res => {
        this.$store.commit('setsearch_con', res.data);
        window.console.log(res.data)
    //    if(this.$route.name !='search_con'){
          this.$router.push('/search_con');
    //   }
    });
       }
      
       } 
    }

</script>

<style scoped>
    input{
    border: 1px solid  #46bd01;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 1px 0 #000;
    color: rgb(75, 72, 72);
    display: block;
    float: left;
    height: 40px;
    width: 200px;
    }
    .button{
    box-sizing: content-box;
    border: 1px solid #46bd01;
    border-left-color: #46bd01;
    border-radius: 0 5px 5px 0;
    box-shadow: 0 1px 0 #000;
    display: block;
    float: left;
    font-weight: 400;
    height: 38px;
    position: relative;
    width: 50px;
    background:#d0ffb6;
    text-align: center;
    }
    .button .Icon{
        margin-top: 8px;
        font-size:26px;
    }
    .button:hover{
        color: #5af700;
    }
    
</style>