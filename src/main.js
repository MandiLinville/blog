// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Post from './components/Post'
import New from './components/New'
import Blog from './components/Blog'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
      components: {
        default: Blog
      }
  },
  {
    path: '/post/:id',
      name: 'Post',
      component: Post,
        props: true
  },
  {
    path: '/new',
      components: {
        default: New
      }
  }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
