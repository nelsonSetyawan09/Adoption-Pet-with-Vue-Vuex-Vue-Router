<template>
  <div class="cat">
	<h2>Cat </h2>
	<hr/>
	<h3>name: {{cat.name}}</h3>
	<h3>gender: {{cat.gender}}</h3>
	<h3>age: {{cat.age}}</h3>
	<h3>color: {{cat.color}}</h3>
  </div>
</template>

<script>
	import {mapState} from 'vuex';

	export default {
		name: 'cat-id',
		data(){
			return {
				cat:[]
			}
		},
		computed:{
			...mapState(['cats'])
		},
		mounted(){
			let cat = this.cats[this.$route.params.id]
			this.cat = 	cat;
		}
	}
</script>
