<template>
    <div>
        <BackArrow />
        <h1>{{ card }}</h1>
        <img :src="mountain.image" :alt="mountain.title" />
        <p>{{ card.gender }}</p>
        <p>{{ card.allegiances }}</p>
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
            const mountain = await $axios.$get(`https://api.nuxtjs.dev/mountains/${params.slug}`)
            return {
                mountain
            }
        },
        created() {
            ApiService.getCharacterNames()
                .then(response => {
                this.card = response.data
                })
                .catch(error => {
                console.log(error)
            })
         },
        data() {
            return {
                card: {}
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