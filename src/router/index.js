import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Blog = () => import('../views/Blog.vue')
const Contact = () => import('../views/Contact.vue')
const Portfolio = () => import('../views/Portfolio.vue')
const Services = () => import('../views/Services.vue')
const Team = () => import('../views/Team.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/services', name: 'Services', component: Services },
  { path: '/team', name: 'Team', component: Team }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
