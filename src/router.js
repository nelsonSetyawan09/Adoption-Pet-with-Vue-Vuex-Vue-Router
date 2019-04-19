import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Cats from './views/Cats.vue'
import Dogs from './views/Dogs.vue'
import Cat from './views/Cat.vue'
import Dog from './views/Dog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cats',
        name: 'cats',
        component: Cats
    },
    {
        path: '/cat/:id',
        name: 'cat-id',
        component: Cat
    },
    {
        path: '/dogs',
        name: 'dogs',
        component: Dogs
    },
    {
        path: '/dog/:id',
        name: 'dog-id',
        component: Dog
    }
  ]
})
