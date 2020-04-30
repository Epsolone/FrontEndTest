import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ImageGallery',
    component: () => import('../views/image-gallery.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
