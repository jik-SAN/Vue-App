import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/components/UserList.vue';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import UserDetails from '@/views/UserDetails.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/', name: 'Home', component: Home,
      },
      {
        path: '/about', name: 'About', component: About,
      },
      {
        path: '/users', name: 'Users', component: UserList,
      },
      {
        path: '/users/:userId', name: 'UserDetails', component: UserDetails,
      },
    ]
})

export default router
