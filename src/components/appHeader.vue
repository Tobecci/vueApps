<template>
	<div>
		<v-toolbar dense>
    <v-toolbar-title>
      My Blog
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat style="text-decoration: none"><router-link style="text-decoration: none" to="/">Show Blogs</router-link></v-btn>
    <v-btn flat><router-link to="/list">List Blogs</router-link></v-btn>
    <v-btn flat class=""><router-link to="/add">Add Post</router-link></v-btn>

    </v-toolbar>
	</div>
</template>

<script>
	export default{
		data(){
			return {

			}
		},
	}
</script>
