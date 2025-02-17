import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import MentoriasView from '@/views/MentoriasView.vue';
import ConocenosView from '@/views/ConocenosView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/mentorias', component: MentoriasView },
  { path: '/conocenos', component: ConocenosView },
  { path: '/login', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
