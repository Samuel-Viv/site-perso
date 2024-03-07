import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
 
  ]
})

export default router
