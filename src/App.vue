<template>
  <v-app>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </v-app>
</template>

<script>
import productListOne from './components/productListOne.vue';
import productListTwo from './components/productListTwo.vue';
export default {
  components: {
    'product-list-one': productListOne,
    'product-list-two': productListTwo
  },
    data () {
    return {
      products: [
        {name: "Banana skin", price: 20},
        {name: "Tiny star", price: 40},
        {name: "Green shells", price: 60},
        {name: "Red shells", price: 80},
      ],
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
