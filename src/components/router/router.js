import Main from '@/views/Main.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: {
      title: 'Products',
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../../views/Cart.vue'),
    props: true,
    meta: {
      title: 'Cart',
    },
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../../views/Product.vue'),
    meta: {
      title: 'Selected product',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
