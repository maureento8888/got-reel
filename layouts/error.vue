<template>
	<div>
		<h1 class="header-text">Oops! It seems you've come across a missing page!</h1>
		<p>It's great to lose yourself in the land of mystery. Let 
			<a
				href="https://www.merriam-webster.com/dictionary/wanderlust"
				target="_blank"
				rel="noopener noreferral">
				wanderlust
			</a> take you to great heights. But let's get you back home first:
		</p>
		<section class="nav-links">
			<NuxtLink to="/">Home page</NuxtLink>
			<br>
			<a
				href="https://dribbble.com/maureen_to"
				target="_blank"
				rel="noopener noreferral">
				Visit me on Dribbble
			</a>
			<a
				href="https://github.com/maureento8888"
				target="_blank"
				rel="noopener noreferral">
				Visit me on GitHub
			</a>
			<a
				href="https://www.linkedin.com/in/maureento/"
				target="_blank"
				rel="noopener noreferral">
				Visit me on LinkedIn
			</a>
			<a
				href="https://dev.to/maureento8888"
				target="_blank"
				rel="noopener noreferral">
				Visit me on dev.to
			</a>
		</section>
	</div>
</template>

<style scoped>
.header-text {
    font-size: var(--g-header-txt);
    padding-bottom: 1em;
}

.nav-links {
	display: flex;
	flex-direction: column;
	margin-top: 4em;
}
</style>