<template>
	<div class="centered pagination-links">
		<span>
			<button class="pagination-button" @click="goBack()">p</button>
		</span>
		<span>{{ pageOutOfPage }}</span>
		<span>
			<button class="pagination-button" @click="goForward()">f</button>
		</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pageOutOfPage: "1 / 25"
		}
	},
	methods: {
		goBack() {
			console.log("Back to previous page");
		},
		goForward() {
			console.log("Forward to next page");
		}
	}
}
</script>

<style scoped>
.pagination-links {
	align-items: center;
}

.pagination-button {
	margin: 3em 3em;
	padding: 1em auto;
	height: 44px;
	width: 44px;

	border-radius: 100px;
	border: 0.5px solid #dfdfdf;
	background: var(--g-primary-white);
	cursor: pointer;
}
</style>