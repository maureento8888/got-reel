import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1761b7cb = () => interopDefault(import('../pages/CardList.vue' /* webpackChunkName: "pages/CardList" */))
const _344de045 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _32973efd = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CardList",
    component: _1761b7cb,
    name: "CardList"
  }, {
    path: "/",
    component: _344de045,
    name: "index"
  }, {
    path: "/:slug",
    component: _32973efd,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
