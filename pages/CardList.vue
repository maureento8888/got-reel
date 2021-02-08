<template>
  <div class="row">
    <div class="item">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
    <div class="item">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import ApiService from '@/services/ApiService.js';

  export default {
    components: {
      Card
    },
    data() {
      return {
        cards: null
      }
    },
    computed: {}, // https://medium.com/swlh/filtering-sorting-and-searching-in-arrays-with-vue-js-f60951c040fc
    created() {
      ApiService.getCharacterNames()
        .then(response => {
          this.cards = response.data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  </script>

  <style scoped>
  .row {
    display: flex;
    justify-content: center;
    padding-top: 2em;
  }
</style>