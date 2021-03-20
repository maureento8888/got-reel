<template>
	<body>
        <h1 class="centered cinzel-ff">Game of Thrones Character Reel</h1>
        <!-- Insert CharacterCardList page -->
        <CharacterCardList />
	</body>
</template>

<script>
import CharacterCardList from '@/pages/CharacterCardList.vue';

export default {
	components: {
		CharacterCardList
	}
}
</script>

<style>
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

</style>