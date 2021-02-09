<template>
  <div>
    <div class="default-margin">
        <Nuxt keep-alive />
    </div>
    <footer class="centered">
      Built with
      <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt.js</a>
      <NuxtLink to="~/pages/privacy.vue" class="privacy">Privacy &amp; Accessibility</NuxtLink>
    </footer>
  </div>
</template>

<script></script>

<style>
/* Global Styles */
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.75em;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0 0;
}

.default-margin {
    padding: 1.5em 1.5em;
}

body {
    background: var(--g-bg);
}

/* Footer */
footer {
  padding: 1.875em 0;
  background: var(--g-primary-black);
}

footer,
footer a {
  color: var(--g-primary-white);
  font-size: var(--g-m-body-txt);
}

footer a {
  margin-left: 5px;
}

.privacy {
  margin-left: 3em;
}
/*  */
</style>