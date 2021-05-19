<template>
  <div>
    <h1 class="centered cinzel-ff">Game of Thrones Character Reel</h1>
    <section class="centered filter">
      <p class="centered filter-label">Filter:</p>
      <ul class="centered filter-list">
        <li class="filter-item">
          <button class="filter-button">Names</button> <!-- @click="filterByName" -->
        </li>
        <li class="filter-item">
          <button class="filter-button">Allegiances</button> <!-- @click="filterByAllegiance" -->
        </li>
      </ul>
    </section>

      <section>
        <span v-if="beforeCall" class="centered placeholder-block">Loading more characters...</span>
        <transition-group name="cards" class="centered list" role="list">
          <CharacterCard
            v-for="(name, index) in names"
            :key="index"
            :name="name"
            role="listitem"
          />
        </transition-group>
      </section>

    <section class="centered pagination-links">
      <NuxtLink
        :to="{ name: 'CharacterCardList', query: { page: page - 1 } }"
        rel="prev"> 
        <button class="pagination-button">
          <p v-text="prev">{{ prev }}</p>
        </button>
      </NuxtLink>
      <span>{{ page }}</span>
      <NuxtLink
        :to="{ name: 'CharacterCardList', query: { page: page + 1 } }"
        rel="next">
        <button class="pagination-button">
          <p v-text="next">{{ next }}</p>
        </button>
      </NuxtLink>
    </section>
  </div>
</template>

<script>
import options from "@/assets/icon-ionic-ios-options.svg";
import CharacterCard from '@/components/CharacterCard.vue';
import ApiService from '@/services/ApiService.js';

export default {

  components: {
    CharacterCard
  },

  data() {
    return {
      next: ">",
      prev: "<",
      options,
      names: {},
      filteredNames: [],
      filteredAllegiances: [],
      beforeCall: false
    }
  },

  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    }
  },

  mounted() {
    this.beforeCall = true;
    ApiService.getCharacterNames(10, this.page)
      .then(response => {
        this.names = response.data;
        this.beforeCall = false;
      })
      .catch(error => {
        console.log(`An error ${error.response} occured`);
      })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@800&display=swap');

.cinzel-ff {
    font-family: 'Cinzel', serif;
    text-align: center;
}

h1 {
    padding-bottom: 3em;

    font-size: var(--g-header-txt);
    color: var(--g-primary-black);
}

/* Transitions */
.cards-enter-active,
.cards-leave-active {
	transition: opacity 1s;
}

.cards-enter,
.cards-leave-active {
	opacity: 0;
}
/*  */

.placeholder-block {
  display: block;
  height: 52.80vh; /* specifically "replace" cards grid pre-API response to mitigate Content Layout Shift */

  padding-top: 3em;
  text-align: center;
}

.filter {
  align-items: center;
}

.filter-list {
  padding: 0;
}

.filter-item {
  padding: 0 0.5em;

  list-style: none;
}

.filter-button {
	padding: 0.75em 2em;

	background: var(--g-primary-white);
	border-radius: 100px;
  border: 0.5px solid var(--g-border);
  /* font-size: 1em; */

	cursor: pointer;
}

.list {
  padding-top: 2em;
}

/* Pagination */
.pagination-links {
	align-items: center;
}

.pagination-button {
	margin: 3em 3em;
	padding: 1em auto;
	height: 44px;
	width: 44px;

	border-radius: 100px;
	border: 0.5px solid var(--g-border);
	background: var(--g-primary-white);
	cursor: pointer;
}
/*  */

/* Galaxy Fold viewport */
@media screen and (max-width: 280px) {
  .filter-label {
    display: none;
    visibility: none;
  }
}

/* Desktop viewports */
@media screen and (min-width: 280px) {
  .list {
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 800px;
  }
}
</style>
