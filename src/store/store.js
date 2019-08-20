import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		products: [
        {name: "Banana skin", price: 20},
        {name: "Tiny star", price: 40},
        {name: "Green shells", price: 60},
        {name: "Red shells", price: 80},
      ]
	},
	getters: {
		salesProducts: function(state){
			var salesProducts = state.products.map(function(product){
				return {
					name: "**" + product.name + "**",
					price: product.price / 2,
				};
			});
		return salesProducts;	
		},
	},
	mutations: {
		reducePrice: function(state){
			state.products.forEach(function(product){
				product.price--;
			});
		},
	},
});