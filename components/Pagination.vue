<template>
	<div class="centered align-items">
		<span>
			<button class="page-link" @click="goBack()">p</button>
		</span>
		<span>{{ pageOutOfPage }}</span>
		<span>
			<button class="page-link" @click="goForward()">f</button>
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
.align-items {
	align-items: center;
}

button {
	margin: 3em 2em;
	height: 44px;
	width: 44px;

	border-radius: 100px;
}

.page-link {
	padding: 1em auto;

	background: var(--g-primary-white);
	border-style: none;
	border-radius: 100%;
	cursor: pointer;
}
</style>