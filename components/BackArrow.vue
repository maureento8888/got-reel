<template>
	<div role="button">
		<NuxtLink to="/">
			<img class="arrow" :src="arrow" alt="back to previous page" />
		</NuxtLink>
	</div>
</template>

<script>
import arrow from '@/assets/icon-feather-arrow-left.svg';

export default {
	data() {
		return {
			arrow
		}
	}
}
</script>

<style scoped>
.arrow {
	width: 1.5em;
	height: auto;
}
</style>