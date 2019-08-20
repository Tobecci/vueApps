<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
  </v-app>
</template>

<script>
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import appHeader from './components/appHeader.vue';

export default {
  name: 'App',
  components: {
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': appHeader,
  },
    data () {
    return {
      blogs: [],
    }
  },
  computed : {

  },
  created: function(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  },

  // filters : {
  //   'to-uppercase' : function(value){
  //     return value.toUpperCase();
  //   },
  // },
}
</script>
