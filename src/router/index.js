import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// TodoListコンポーネントをimport
import TodoList from '../views/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // '/todos'パス追加
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
