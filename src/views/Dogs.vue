<template>
  <div class="dogs">
	<h2>Dogs For Adoption</h2> <span> Total: {{dogsSpeciesCount}} Cats</span>
	<PetTable species="dog" :pets="dogs"/>
  </div>
</template>


<script>
	// @ is an alias to /src
	// import dogs from '@/data/dogs'
	import PetTable  from '@/components/PetTable.vue';
	import {mapState, mapGetters} from 'vuex';

	export default {
		name: 'dogs',
		data(){
		  return {}
		},
		computed:{
			...mapState(['dogs']),
			...mapGetters(['dogsSpeciesCount'])
		},
		components:{
					PetTable
				}
	}
</script>
