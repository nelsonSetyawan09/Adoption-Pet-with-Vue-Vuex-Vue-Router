<template>
  <div class="cats">
	<h2>Cats For Adoption</h2> <span> Total: {{catsSpeciesCount}} Cats</span>
	<PetTable species="cat" :pets="cats"/>
  </div>
</template>


<script>
	// @ is an alias to /src
	// import cats from '@/data/cats';

	import PetTable  from '@/components/PetTable.vue';
	import {mapState, mapGetters} from 'vuex';

	export default {
		name: 'cats',
		data(){
		  return {}
		},
		computed:{
			...mapState(['cats']),
			...mapGetters(['catsSpeciesCount'])
		},
		components:{
			PetTable
		}
	}
</script>
