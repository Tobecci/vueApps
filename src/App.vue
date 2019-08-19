<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
    data () {
    return {
      //
    }
  },
  computed : {

  },
  methods: {

  },
  created: function(){
    
  }, 
  filters : {
    'to-uppercase' : function(value){
      return value.toUpperCase();
    },
  },
  mixins: [],
}
</script>
