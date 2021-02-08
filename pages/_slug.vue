<template>
    <div>
        <BackArrow />
            <img :src="mountains.image" :alt="mountains.title" />
            <h1>{{ cards.name || cards.aliases.toString() }}</h1>
            <p>{{ cards.gender }}</p>
            <p>{{ cards.allegiances || null }}</p>
        <!-- Insert Profile Card component -->
        <ProfileCard />
    </div>
</template>

<script>
import ApiService from '@/services/ApiService.js';
import BackArrow from '@/components/BackArrow.vue';
import ProfileCard from '@/components/ProfileCard.vue';

    export default {
        // GET mountain imgs from API (https://api.nuxtjs.dev/)
        async asyncData({ params, $axios }) {
            const mountains = await $axios.$get(`https://api.nuxtjs.dev/mountains/${params.slug}`)
            return {
                mountains
            }
        },
        mounted() {
            ApiService.getCharacterNames()
                .then(response => {
                this.cards = response.data
                })
                .catch(error => {
                console.log(error)
            })
         },
        data() {
            return {
                cards: {}
            }
        },
        components: {
            ProfileCard,
            BackArrow
        }
    }
</script>

<style scoped>
/* Edit image dimenions */
img {
    width: auto;
    height: 10em;
    
    border-radius: 15px;
    object-fit: cover;
}

/* Edit character info */

/* Create and import prev arrow component */
</style>