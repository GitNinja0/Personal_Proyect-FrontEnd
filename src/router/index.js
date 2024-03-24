import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RentView from '@/views/RentView.vue'
import SaleView from '@/views/SaleView.vue'
import DetailsSaleView from '@/views/DetailsSaleView.vue'
import DetailsRentView from '@/views/DetailsRentView.vue'
import FormPostView from '@/views/FormPostView.vue'
import FormPutRentView from '@/views/FormPutRentView.vue'
import FormPutSaleView from '@/views/FormPutSaleView.vue'

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
    },
    {
      path: '/detail/:id',
      name: 'DetailsRent',
      component: DetailsRentView,
      props: true
    },
    {
      path:'/formPost',
      name: 'PostForm',
      component: FormPostView
    },
    {
      path:'/formPut/:id',
      name: 'FormPutRent',
      component: FormPutRentView,
      props: true
    },
    {
      path:'/formPutSale/:id',
      name: 'FormPutSale',
      component: FormPutSaleView,
      props: true
    }
  ]
})

export default router
