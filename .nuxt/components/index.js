export { default as BackButton } from '../../components/BackButton.vue'
export { default as Card } from '../../components/Card.vue'
export { default as CardList } from '../../components/CardList.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as ProfileBadge } from '../../components/ProfileBadge.vue'
export { default as ProfileModal } from '../../components/ProfileModal.vue'
export { default as SearchBar } from '../../components/SearchBar.vue'

export const LazyBackButton = import('../../components/BackButton.vue' /* webpackChunkName: "components/back-button" */).then(c => c.default || c)
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyCardList = import('../../components/CardList.vue' /* webpackChunkName: "components/card-list" */).then(c => c.default || c)
export const LazyPagination = import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => c.default || c)
export const LazyProfileBadge = import('../../components/ProfileBadge.vue' /* webpackChunkName: "components/profile-badge" */).then(c => c.default || c)
export const LazyProfileModal = import('../../components/ProfileModal.vue' /* webpackChunkName: "components/profile-modal" */).then(c => c.default || c)
export const LazySearchBar = import('../../components/SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => c.default || c)
