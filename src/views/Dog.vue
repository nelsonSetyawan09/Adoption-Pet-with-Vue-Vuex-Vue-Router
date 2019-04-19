<template>
  <div class="dog">
	<h2>Dog </h2>
	<hr/>
	<h3>name: {{dog.name}}</h3>
	<h3>gender: {{dog.gender}}</h3>
	<h3>age: {{dog.age}}</h3>
	<h3>color: {{dog.color}}</h3>
  </div>
</template>

<script>
	// @ is an alias to /src
	import {mapState} from 'vuex';
	export default {
		name: 'dog-id',
		data(){
			return {
				dog:[]
			}
		},
		computed:{
			...mapState(['dogs'])

		},
		mounted(){
			let dog = this.dogs[this.$route.params.id]
			this.dog = 	dog;
		}
	}


</script>
