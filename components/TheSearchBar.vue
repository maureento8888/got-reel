<template>
	<section class="centered" role="search">
		<input
			class="search"
			type="search"
			enterkeyhint="search"
			placeholder="e.g. Khaleesi..."
			aria-placeholder="e.g. Khaleesi..."
		>
		<div class="filter">
			<button class="filter-button" @click="toggleModal()">
				<img class="filter-icon" :src="options" alt="filter by age, name/ alias, or allegiance" />
			</button>
			<div v-show="isOpen" class="modal">
				<p role="link">Age <!-- @click="sortByAge()" --></p>
				<p role="link">Name / Alias <!-- @click="sortByName()" --></p>
				<p role="link">Allegiances <!-- @click="sortByAllegiance()" --></p>
			</div>
		</div>
	</section>
</template>

<script>
import options from "@/assets/icon-ionic-ios-options.svg";
// import ApiService from "@/services/ApiService.js";

export default {
	data() {
		return {
			isOpen: false,
			// name: "",
			options
		}
	},

	// computed: {
	// 	ApiService.filterCharacterNames()
	// 		.then(response => {
	// 			this.name = response.data
	// 		})
	// 		.catch(error => {
	// 		console.log(error)
	// 		})
	// },

	methods: {
		toggleModal() {
			return this.isOpen = !this.isOpen;
		}
	}
}
</script>

<style scoped>
.search,
.filter-button {
	border-style: none;
	border-radius: 100px;
}

.search {
	padding: 0.25em 1.5em;
	width: 50ch;
}

.search:focus {
	border-style: solid 3px var(--g-primary-black);
}

.filter-button {
	display: flex;
	padding: 1em 1em;
	margin-left: 10px;

	background: var(--g-primary-white);
	border-radius: 100px;

	cursor: pointer;
}

.filter-icon {
	width: 1.4em;
	height: auto;
}

.modal p + p {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding-top: 0.75em;
}

.filter {
	display: flex;
	position: relative;
	align-items: center;
}

.modal {
	position: absolute;
	top: 4em;
	right: -1em;
	padding: 2em 1.5em;
	width: 10em;
	z-index: 2;

	background: var(--g-primary-white);
	border-radius: 20px;
}
</style>