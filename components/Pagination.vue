<template>
	<div class="centered margin">
		<span>
			<button class="page-link" @click="goBack">U+003C</button>
		</span>
		<span>page num ratio</span>
		<span>
			<button class="page-link" @click="goForw">U+00EC</button>
		</span>
	</div>
</template>

<script>
	export default {
		methods: {
			goBack() {
				return this.$router.go(-1);
			},
			goForw() {
				return this.$router.go(1);
			}
		}
	}
</script>

<style scoped>
button {
	margin: 0 1em;
	padding: 1em 1em;

	border-radius: 100px;
}

.page-link {
	padding: 1em auto;

	background: var(--g-primary-white);
	border-style: none;
	border-radius: 100%;
	cursor: pointer;
}

.margin {
	padding: 2em 0 2em 0;
	visibility: hidden;
}
</style>