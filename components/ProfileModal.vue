<template>
	<span>
		<button @click="toggleModal()">
			<img :src="horizontalKebab" alt="See more" class="more" />
		</button>
		<!-- Display if isOpen = true -->
		<div v-show="isOpen" class="modal">
			<p>Hi! I'm the developer of this project.</p>
			<p>View the repo on <a href="https://github.com/maureento8888" target="_blank" rel="noopener noreferral">GitHub</a>
			or connect with me below!</p>
			<br>
			<div class="external-media">
				<a href="https://github.com/maureento8888" target="_blank" rel="noopener noreferral" class="media">
					<img class="icon" :src="github" alt="GitHub">
				</a>
				<a href="https://dribbble.com/maureen_to" target="_blank" rel="noopener noreferral" class="media">
					<img class="icon" :src="dribbble" alt="Dribbble">
				</a>
				<a href="https://www.linkedin.com/in/maureento/" target="_blank" rel="noopener noreferral" class="media">
					<img class="icon" :src="linkedin" alt="LinkedIn">
				</a>
				<a href="https://dev.to/maureento8888" target="_blank" rel="noopener noreferral" class="media">
					<img class="icon" :src="dev" alt="dev.to">
				</a>
			</div>
		</div>
	</span>
</template>

<script>
import horizontalKebab from 'assets/icon-feather-more-horizontal.svg';
import github from 'assets/icon-awesome-github.svg';
import dribbble from 'assets/icon-awesome-dribbble.svg';
import linkedin from 'assets/icon-awesome-linkedin.svg'
import dev from 'assets/icon-awesome-dev.svg';

	export default {
		data() {
			return {
				isOpen: false,
				horizontalKebab,
				github,
				dribbble,
				linkedin,
				dev
			}
		},
		methods: {
			toggleModal() {
				return this.isOpen = !this.isOpen;
			}
		}
	}
</script>

<style scoped>
button,
.modal {
	box-shadow: 0 4px 8px 0 rgba(169, 169, 169, 0.19), 0 6px 20px 0 rgba(169, 169, 169, 0.19);
}

button {
	position: fixed;
	right: 2em;
	bottom: 2em;
	width: 4em;
	height: 4em;
	z-index: 1;
	cursor: pointer;

	background: var(--g-primary-white);
	border-radius: 100px;
	border-style: none;
}

.media {
	width: 1.5em;
	height: 1.5em;
}

/* Fit icons */
.icon {
	width: 100%;
	height: auto;
}

.more {
	width: 2em;
	height: auto;
}
/*  */

.modal {
	display: block;
	position: fixed;
	right: 0;
	bottom: 6em;
	margin: 0 1.5em;
	padding: 2em 1.5em;

	background: var(--g-primary-white);
	border-radius: 20px;
}

.external-media {
	display: flex;
	margin: 0 auto;
	justify-content: space-evenly;
	width: 75%;
}
</style>