export { default as BackArrow } from '../../components/BackArrow.vue'
export { default as Card } from '../../components/Card.vue'
export { default as CreditBadge } from '../../components/CreditBadge.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as ProfileCard } from '../../components/ProfileCard.vue'
export { default as SearchBar } from '../../components/SearchBar.vue'

export const LazyBackArrow = import('../../components/BackArrow.vue' /* webpackChunkName: "components/back-arrow" */).then(c => c.default || c)
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyCreditBadge = import('../../components/CreditBadge.vue' /* webpackChunkName: "components/credit-badge" */).then(c => c.default || c)
export const LazyPagination = import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => c.default || c)
export const LazyProfileCard = import('../../components/ProfileCard.vue' /* webpackChunkName: "components/profile-card" */).then(c => c.default || c)
export const LazySearchBar = import('../../components/SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => c.default || c)
