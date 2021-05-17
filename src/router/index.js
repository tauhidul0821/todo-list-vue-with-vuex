import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from "@/components/Todo";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/components/About.vue')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  