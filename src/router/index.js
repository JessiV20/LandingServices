import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';
import Services from '../views/Services.vue';
import Team from '../views/Team.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
  { path: '/portfolio', component: Portfolio },
  { path: '/services', component: Services },
  { path: '/team', component: Team },
  { path: '/', redirect: '/Home' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
