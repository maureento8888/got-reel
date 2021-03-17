<template>
	<span role="button">
		<NuxtLink to="/">
			<img
				class="arrow-icon"
				:src="arrow"
				alt="back to previous page"
			/>
		</NuxtLink>
	</span>
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
.arrow-icon {
	width: 1.5em;
	height: auto;
}
</style>