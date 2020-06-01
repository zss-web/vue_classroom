import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_con:[],
    users:[],
    
  },
  mutations: {
    setsearch_con(state,data){
      state.search_con=data;
    },
    userlogin(state,data){
      state.users=data;
      window.sessionStorage.setItem('users',JSON.stringify(data));
    },
    
  },
  actions: {
  },
  modules: {
    
  }
})
