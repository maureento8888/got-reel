<template>
	<body>
        <h1 class="centered cinzel-ff">Game of Thrones Character Reel</h1>
        <!-- Insert SearchBar component -->
        <TheSearchBar />
        <!-- Insert CardList component -->
        <CharacterCardList />
        <!-- Insert Pagination component-->
        <ThePagination />
	</body>
</template>

<script>
import CharacterCardList from '@/components/CharacterCardList.vue';
import TheSearchBar from '@/components/TheSearchBar.vue';
import ThePagination from '@/components/ThePagination.vue';

export default {
	components: {
		CharacterCardList,
		TheSearchBar,
        ThePagination
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
    padding-bottom: 1.5em;

    font-size: var(--g-header-txt);
    color: var(--g-primary-black);
}

</style>