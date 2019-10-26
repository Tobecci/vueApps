<template>
  <div>
    
    <v-container>
      <v-text-field
    label="search blog"
    color="blue"
    v-model="search"
    >  
    </v-text-field>
    </v-container>
      
    <v-card max-width="700px" class="mx-auto mt-3" v-for="blog in filteredBlogs" :key="blog.key">
     <v-card-title>{{ blog.title }}</v-card-title>
     <v-card-text>{{ blog.body }}</v-card-text>
     <v-card-actions><v-btn><router-link :to="'/blog/' + blog.id +'.json'">Read More</router-link></v-btn></v-card-actions>
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
    this.$http.get("https://tobecci-vue-learn.firebaseio.com/posts.json").then(function(data){
      return data.json();
    })
    .then(function(data){
        // console.log(data);
        var myBlog = [];
        for(let key in data){
          var blogItem = {
              id: key,
              title: data[key].title,
              body: data[key].body,
          };
          myBlog.push(blogItem);
        }
        this.blogs = myBlog;
        // console.log(this.blogs);
    });
  },
  mixins: [searchMixin],
}
</script>
