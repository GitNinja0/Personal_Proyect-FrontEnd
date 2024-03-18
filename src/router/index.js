import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RentView from '@/views/RentView.vue'
import SaleView from '@/views/SaleView.vue'
import DetailsSaleView from '@/views/DetailsSaleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rent',
      name: 'rent',
      component: RentView
    },
    {
      path: '/sale',
      name: 'sale',
      component: SaleView
    },
    {
      path: '/details/:id',
      name: 'DetailsSale',
      component: DetailsSaleView,
      props: true
    }
  ]
})

export default router
