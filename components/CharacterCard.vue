<template>
	<div class="card">
		<nuxt-img provider="cloudinary" class="card-image" width="347" height="462" :src="img" alt="" />
		<div class="card-overlay">
			<p class="card-name">{{ name.name || name.aliases.toString() }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonder_Lake_and_Denali.jpg/600px-Wonder_Lake_and_Denali.jpg'
		}
	}
}
</script>

<style scoped>
.card,
.card-image,
.card-overlay {
	border-radius: 15px;
}

.card {
	position: relative;
	margin: 0.5em 0.5em;
	max-width: 9em;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.card-image,
.card-overlay {
	width: 100%;
}

.card-image {
	display: block;
	height: 12em;
	
	object-fit: cover;
}

.card-overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	padding: 6em 1em;

	background: rgba(0, 0, 0, 0.5);
}

/* Card Text */
.card-name {
	color: var(--g-primary-white);
	text-align: right;
}
/*  */
</style>