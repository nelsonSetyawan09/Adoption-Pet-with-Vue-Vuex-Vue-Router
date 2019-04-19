<template>
	<div class="home">
    <h1>Home</h1>
	<button class="btn btn-primary" @click="togglePet">Add New Pet </button>

	<hr>
		<b-form v-if="toggleForm" @submit.prevent="addPetForm" @reset.prevent="onReset">
			<b-form-group id="input-group-1" label="Your pet name:" label-for="input-1">
				<b-form-input
					id="input-1"
					v-model="pet.name"
					required
					placeholder="Enter pet name"
				>
				</b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2" label="Your pet gender:" label-for="input-2">
				<b-form-input
					id="input-2"
					v-model="pet.gender"
					required
					placeholder="Enter pet gender"
				>
				</b-form-input>
			</b-form-group>

			<b-form-group id="input-group-3" label="Your pet age:" label-for="input-3">
				<b-form-input
					id="input-3"
					v-model="pet.age"
					required
					placeholder="Enter pet age"
				>
				</b-form-input>
			</b-form-group>

			<b-form-group id="input-group-4" label="Your pet color:" label-for="input-4">
				<b-form-input
					id="input-4"
					v-model="pet.color"
					required
					placeholder="Enter pet color"
				>
				</b-form-input>
			</b-form-group>

			<b-form-group id="input-group-5" label="Your pet weight:" label-for="input-5">
				<b-form-input
					id="input-5"
					v-model="pet.weight"
					required
					placeholder="Enter pet weight"
				>
				</b-form-input>
			</b-form-group>

			<b-form-group id="input-group-6" label="Your pet location:" label-for="input-6">
				<b-form-input
					id="input-6"
					v-model="pet.location"
					required
					placeholder="Enter pet location"
				>
				</b-form-input>
			</b-form-group>


			<b-form-group id="input-group-7" label="species:" label-for="input-7">
				<b-form-select
					id="input-7"
					v-model="species"
					:options="speciesOption"
					required
				></b-form-select>
			</b-form-group>

			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>
 	</div>
</template>

<script>
	// @ is an alias to /src
	import {mapActions} from 'vuex'
	export default {
		name: 'home',
		data(){
			return {
				toggleForm: false,
				speciesOption:[{ text: 'Select One', value: null }, 'cats', 'dogs'],
				species: null,
				pet:{
					name: '',
					gender:'',
					age: null,
					color:'',
					weight:null,
					location:''
				}
			}
		},
		methods:{
			...mapActions(['addPet']),
			togglePet(){
				this.toggleForm = !this.toggleForm;
			},
			addPetForm(){
				this.addPet({species:this.species, pet: this.pet});
				this.onReset();
			},
			onReset() {
				this.species='null';
				this.pet={
					name: '',
					gender:'',
					age: null,
					color:'',
					weight:null,
					location:''
				};
			}
		}
	}
</script>
