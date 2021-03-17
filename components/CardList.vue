<template>
  <section class="centered" role="list">
      <Card v-for="(name, index) in names" :key="index" :name="name" />
  </section>
</template>

<script>
import Card from '@/components/Card.vue';
import ApiService from '@/services/ApiService.js';

  export default {

    data() {
      return {
        names: {}
      }
    },

    computed: {
      // filterCharacterNames(names) {}
    },

    components: {
      Card
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
  section {
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    padding-top: 2em;
  }

  /* Desktop viewports */
  @media screen and (min-width: 280px) {
    section {
      max-width: 928px;
      margin: 0 auto;
    }
  }
</style>
