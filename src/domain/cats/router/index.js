export default [
  {
    path: '/cat/:name',
    name: 'cats',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../page/Cats.vue')
  }
]
