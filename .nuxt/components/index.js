export { default as CharacterCard } from '../../components/CharacterCard.vue'
export { default as CharacterCardList } from '../../components/CharacterCardList.vue'
export { default as TheBackButton } from '../../components/TheBackButton.vue'
export { default as ThePagination } from '../../components/ThePagination.vue'
export { default as TheProfileBadge } from '../../components/TheProfileBadge.vue'
export { default as TheProfileBadgeModal } from '../../components/TheProfileBadgeModal.vue'
export { default as TheSearchBar } from '../../components/TheSearchBar.vue'

export const LazyCharacterCard = import('../../components/CharacterCard.vue' /* webpackChunkName: "components/character-card" */).then(c => c.default || c)
export const LazyCharacterCardList = import('../../components/CharacterCardList.vue' /* webpackChunkName: "components/character-card-list" */).then(c => c.default || c)
export const LazyTheBackButton = import('../../components/TheBackButton.vue' /* webpackChunkName: "components/the-back-button" */).then(c => c.default || c)
export const LazyThePagination = import('../../components/ThePagination.vue' /* webpackChunkName: "components/the-pagination" */).then(c => c.default || c)
export const LazyTheProfileBadge = import('../../components/TheProfileBadge.vue' /* webpackChunkName: "components/the-profile-badge" */).then(c => c.default || c)
export const LazyTheProfileBadgeModal = import('../../components/TheProfileBadgeModal.vue' /* webpackChunkName: "components/the-profile-badge-modal" */).then(c => c.default || c)
export const LazyTheSearchBar = import('../../components/TheSearchBar.vue' /* webpackChunkName: "components/the-search-bar" */).then(c => c.default || c)
