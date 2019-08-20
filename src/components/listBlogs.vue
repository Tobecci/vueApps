<template>
  <div>
    
    <v-text-field
    label="search blog"
    color="purple"
    v-model="search"
    >
      
    </v-text-field>
    <v-card max-width="700px" class="mx-auto mt-3" v-for="blog in filteredBlogs" :key="blog.key">
     <v-card-title>{{ blog.title }}</v-card-title>
     <v-card-text>{{ blog.body }}</v-card-text>
     <v-card-actions><v-btn>Read More</v-btn></v-card-actions>
   </v-card>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin.js';

export default {
  name: 'App',
    data () {
    return {
      blogs: [],
      search: "",
    }
  },
  computed : {

  },
  created: function(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  },
  mixins: [searchMixin],
}
</script>
