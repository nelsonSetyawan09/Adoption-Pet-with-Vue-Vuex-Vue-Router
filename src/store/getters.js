export default{
	catsSpeciesCount: state => {
		return state.cats.length;
	},
	dogsSpeciesCount: state => {
		return state.dogs.length;
	}
}
