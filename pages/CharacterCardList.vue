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

    <transition name="cards" mode="out-in">
      <section class="centered list" role="list">
          <p v-if="emptyResults">
            Your search has 0 results
          </p>
          <CharacterCard
            v-for="(name, index) in names"
            :key="index"
            :name="name"
            role="listitem"
          />
      </section>
    </transition>

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
      emptyResults: false
    }
  },

  computed: {
    
    // filteredNames() {
    //   if ( !this.text ) {
    //     return this.names;
    //   }

    //   return this.names.filter((name) => name.name.match(this.text) || name.aliases.toString().match(this.text))
    // },
   filterByAllegiance() {
      console.log("Names: " );
      // for ( allegiance of this.names ) {
      //   if ( allegiance.allegiance.length ) {
          
      //   }
      //   return allegiance.allegiance.sort();
      // }
    },

    filterByName() {
      console.log(this.names);
      // return this.names.sort();
    },

    page() {
      return parseInt(this.$route.query.page) || 1;
    }
  },

  created() {
    ApiService.getCharacterNames(10, this.page)
      .then(response => {
        this.names = response.data;
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
/* .cards-enter-active,
.cards-leave-active {
  transition: opacity 0.5s;
}
.cards-enter,
.cards-leave-active {
  opacity: 0;
} */
/*  */

.filter,
.filter-list {
  align-items: center;
}

.filter-label {
  padding: 0 1em;
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
  font-size: 0.8em;

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

/* Desktop viewports */
@media screen and (min-width: 280px) {
  .list {
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 928px;
  }
}
</style>
