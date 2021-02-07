<template>
	<div>
        <div>
            <header>
                Made by
                <a href="https://github.com/maureento8888" target="_blank" rel="noopener noreferrer">Maureen T'o</a>
            </header>
            <h1 class="centered cinzel-ff">Game of Thrones Character Reel</h1>
            <!-- Insert SearchBar component -->
            <SearchBar />
            <!-- Insert CardList component -->
            <CardList />
            <!-- Insert Profile Card component -->
            <ProfileCard />
        </div>
	</div>
</template>

<script>
import CardList from '@/pages/CardList.vue';
import SearchBar from '@/components/SearchBar.vue';
import Pagination from '@/components/Pagination.vue';
import ProfileCard from '@/components/ProfileCard.vue';

export default {
	components: {
		CardList,
		SearchBar,
		Pagination,
		ProfileCard
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@800&display=swap');

:root {
  /* Mobile - Main styles */
  --g-primary-black: #333333;
  --g-primary-white: #ffffff;
  --g-secondary-grey: #707070;
  --g-border: #a0a0a0;
  --g-bg: #f0f0f0;
  --g-disabled: #bfbfbf;

  --g-m-header-txt: 1.25em; /* 20px */
  --g-m-body-txt: 0.9375em; /* 15px */
  --g-m-secondary-txt: 1.375em; /* 22px */
}

.cinzel-ff {
    font-family: 'Cinzel', serif;
    text-align: center;
}

.centered {
    display: flex;
    justify-content: center;
}

/* Header */
header {
    display: block;
    padding-bottom: 3em;

    font-size: var(--g-m-body-txt);
    text-align: right;
}
/*  */

/* Main */
h1 {
    padding-bottom: 1.5em;

    font-size: var(--g-m-header-txt);
    color: var(--g-primary-black);
}

</style>