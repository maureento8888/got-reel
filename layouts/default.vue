<template>
  <div>
    <div class="default-margin">
      <CreditBadge />
      <Nuxt keep-alive />
      <!-- Insert Profile Card component -->
      <ProfileCard />
    </div>
    <footer class="centered">
      <p>Built with 
        <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt.js</a>
        <NuxtLink to="/privacy" class="privacy">Privacy &amp; Accessibility</NuxtLink>
      </p>
    </footer>
  </div>
</template>

<script>
import CreditBadge from '@/components/CreditBadge.vue';
import ProfileCard from '@/components/ProfileCard.vue';

export default {
  components: {
    CreditBadge,
    ProfileCard
  }
}
</script>

<style>
/* Global Styles */

:root {
  /* Mobile - Main styles */
  --g-primary-black: #333333;
  --g-primary-white: #ffffff;
  --g-secondary-grey: #707070;
  --g-border: #a0a0a0;
  --g-bg: #f0f0f0;
  --g-disabled: #bfbfbf;

  --g-m-header-txt: 1.25em; /* 20px */
  --g-m-body-txt: 0.9375em; /* 15px */
  --g-m-secondary-txt: 1.375em; /* 22px */
}

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
  line-height: 1.5em;
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

.centered {
    display: flex;
    justify-content: center;
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

.privacy {
  margin-left: 3em;
}
/*  */
</style>