<template>
  <div>
    <div class="default-margin">
      <TheProfileBadge />
      <Nuxt keep-alive :key="$route.fullPath"/>
      <TheProfileBadgeModal />
    </div>
    <footer class="centered footer">
      <p>Built with 
        <a
          href="https://nuxtjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Nuxt.js
        </a>
        <NuxtLink
          to="/privacy"
          class="privacy">
          Privacy &amp; Accessibility
        </NuxtLink>
      </p>
    </footer>
  </div>
</template>

<script>
import TheProfileBadge from '@/components/TheProfileBadge.vue';
import TheProfileBadgeModal from '@/components/TheProfileBadgeModal.vue';

export default {
  components: {
    TheProfileBadge,
    TheProfileBadgeModal
  }
}
</script>

<style>
/* Global Styles */

:root {
  /* Main styles */
  --g-primary-black: #333333;
  --g-primary-white: #ffffff;
  --g-secondary-grey: #707070;
  --g-border: #e2e2e2;
  --g-bg: #f0f0f0;
  --g-disabled: #bfbfbf;

  --g-header-txt: 1.5em; /* 20px */
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
  font-size: 14px;
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
  padding: 1.5em;
}

.centered {
  display: flex;
  justify-content: center;
}

body {
  background: var(--g-bg);
}

/* Footer */
.footer {
  margin-top: 15.5em;
  padding: 1.875em 0;
  
  background: var(--g-primary-black);
}

.footer,
.footer a {
  color: var(--g-primary-white);
}

.privacy {
  margin-left: 3em;
}
</style>