import { createRouter, createWebHistory } from 'vue-router';
import TableView from '../view/TableView.vue';
import CommentView from '../view/CommentView.vue';

const routes = [
  {
    path: '/',
    component: TableView
  },
  {
    path: '/comment/:id',
    component: CommentView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;