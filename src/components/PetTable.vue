<template>
    <b-table striped hover :items="pets">
		<template slot="name" slot-scope="data">
		    <router-link :to="`/${species}/${data.index}`">
				{{ data.value }}
			</router-link>
      	</template>
	</b-table>
</template>

<script>
	export default {
		name:'pet-table',
		props:{
			pets: Array,
			species: String
		}
	}
</script>
