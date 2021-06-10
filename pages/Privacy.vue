<template>
	<main>
		<TheBackButton />
		<h1 class="centered">Game of Thrones Character Reel</h1>
		<h3>Privacy</h3>
		<p>This application does not use cookies or any other third-party services to collect user data. <a href="https://www.cookiesandyou.com" target="_blank" rel="noopener noreferrer">What are cookies?</a></p>
		<h3>Accessibility</h3>
		<p>Accessibility is paramount to my work in front-end software development. As an able-bodied individual, I do my best to research the best web accessibility practices from sources like <a href="https://www.w3.org/TR/wai-aria-practices-1.2/" target="_blank" rel="noopener noreferrer" alt="link to World Wide Web Consortium site">
		<abbr title="World Wide Web Consortium">W3C</abbr>
		</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank" rel="noopener noreferrer">Mozilla's MDN docs on accessibility</a>. I understand accessibility coverage may not always be 100% but I do my best to ensure use of semantic HTML and accessible implementations.</p>
		<p>It is my core belief as a front-end developer that we have the power and tools to build the web so it is accessible to diverse populations.</p>
	</main>
</template>

<script>
import TheBackButton from '@/components/TheBackButton.vue';

export default {
  components: {
	  TheBackButton
  }
}
</script>

<style scoped>
h1 {
	font-size: var(--g-header-txt);
}

h3 {
	padding-bottom: 0.5em;
}

p {
	padding-bottom: 2em;
}
</style>