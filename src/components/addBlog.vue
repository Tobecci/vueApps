<template>
  <div>
    <v-container>
    <v-text-field
      name="Post title"
      label="label"
      id="id"
      v-model="blog.title"
    ></v-text-field>
   <v-textarea
     label="write post contents here..."
      v-model="blog.body"
   ></v-textarea>
   <v-btn @click="addPost">Add</v-btn>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'App',
    data () {
    return {
      blog: {
        title: "",
        body: "",
      },
    }
  },
  computed : {

  },
  methods: {
    addPost: function(){
      this.$http.post("https://tobecci-vue-learn.firebaseio.com/posts.json",this.blog)
      .then(function(){
        this.blog = {};
      });
    },
  }
}
</script>
