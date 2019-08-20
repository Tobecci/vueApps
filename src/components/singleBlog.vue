<template>
	<div id="single-blog">
		<v-card
		max-width="700"
		class="mx-auto mt-3"
		>
			<v-card-title class="text-uppercase font-weight-bold">{{ blog.title }}</v-card-title>
			<v-card-text>{{ blog.body }}</v-card-text>
		</v-card>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id: this.$route.params.id,
				blog: {},
			}
		},
		created(){
			this.$http.get("https://tobecci-vue-learn.firebaseio.com/posts/" + this.id).then(function(data){
				// console.log(data);
				this.blog = data.body;
			});
		}

	}
</script>
