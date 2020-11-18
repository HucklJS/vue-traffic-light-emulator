import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLight from "../components/TrafficLight.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/red'
  },
  {
    path: '/red',
    name: 'Red Signal',
    component: TrafficLight,
    props: {
      activeColor: 'red',
      timer: 4000
    }
  },
  {
    path: '/yellow',
    name: 'Yellow Signal',
    component: TrafficLight,
    props: {
      activeColor: 'yellow',
      timer: 7000
    }
  },
  {
    path: '/green',
    name: 'Green Signal',
    component: TrafficLight,
    props: {
      activeColor: 'green',
      timer: 12000
    }
  }
]

const router = new VueRouter({
  routes
})

export default router