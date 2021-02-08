<template>
  <div class="row" role="list">
    <div class="item" role="listitem">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
    <!-- Repeat component for appearance purposes only -->
    <div class="item" role="listitem">
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