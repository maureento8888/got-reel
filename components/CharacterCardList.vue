<template>
  <section class="centered list" role="list">
      <CharacterCard
        v-for="(name, index) in names"
        :key="index"
        :name="name"
        role="listitem"
      />
  </section>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue';
import ApiService from '@/services/ApiService.js';

export default {

  components: {
    CharacterCard
  },

  data() {
    return {
      names: {}
    }
  },

  mounted() {
    ApiService.getCharacterNames()
      .then(response => {
        this.names = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.list {
  display: flex;
  justify-content: center;
  padding-top: 2em;
}

/* Desktop viewports */
@media screen and (min-width: 280px) {
  .list {
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 928px;
  }
}
</style>
