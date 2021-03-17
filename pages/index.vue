<template>
	<body>
        <h1 class="centered cinzel-ff">Game of Thrones Character Reel</h1>
        <!-- Insert SearchBar component -->
        <SearchBar />
        <!-- Insert CardList component -->
        <CardList />
        <!-- Insert Pagination component-->
        <Pagination />
	</body>
</template>

<script>
import CardList from '@/components/CardList.vue';
import SearchBar from '@/components/SearchBar.vue';
import Pagination from '@/components/Pagination.vue';

export default {
	components: {
		CardList,
		SearchBar,
        Pagination
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@800&display=swap');

.cinzel-ff {
    font-family: 'Cinzel', serif;
    text-align: center;
}

/* Main */
h1 {
    padding-bottom: 1.5em;

    font-size: var(--g-header-txt);
    color: var(--g-primary-black);
}

</style>