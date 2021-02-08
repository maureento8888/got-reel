<template>
	<div>
		<div v-for="mountain in mountains" :key="mountain.id"> 
			<div class="card">
				<img :src="mountain.image" :alt="mountain.title">
				<div class="overlay">
					<p class="age">AGE
						<span>---</span>
						<!-- prop {{ agify.age }} -->
					</p>
					<br>
					<NuxtLink :to="mountain.slug" class="name">{{ card.name ? card.name : card.aliases.toString() }}</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    // GET mountain imgs from API (https://api.nuxtjs.dev/)
		async fetch() {
			this.mountains = await fetch('https://api.nuxtjs.dev/mountains')
			.then(res =>
			res.json())
		},
		props: {
			card: {
				type: Object,
				required: true
			},
		},
		data() {
			return {
				mountains: []
			}
		}
	}
</script>

<style scoped>
.card,
img,
.overlay {
	border-radius: 15px;
}

.card {
	position: relative;
	margin: 1em 0.5em;
	max-width: 10em;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

img {
	display: block;
	width: 100%;
	height: 12em;
	
	object-fit: cover;
}

.overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 2.25em 1em;

	background: rgba(0, 0, 0, 0.55);
}

/* Card Text */
.age,
.name {
	color: var(--g-primary-white);
}

.name {
	text-align: right;
}

.age {
	font-size: var(--g-m-body-txt);
}
/*  */

/* Galaxy Fold media query */
@media screen and (max-width: 280px) {
	img {
		height: 14em;
	}
}
</style>