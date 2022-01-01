
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect:'/home',
    children: [
      {name:"home", path: '/home', component: () => import('pages/Index.vue') },
      {name:"courses", path: '/courses', component: () => import('pages/Courses.vue') },
      {name:"blog", path: '/blog', component: () => import('pages/Blog.vue') },
      {name:"videos", path: '/videos', component: () => import('pages/Videos.vue') },
      {name:"product", path: '/courses/:productId', component: () => import('pages/Product.vue') },
      {name:"article", path: '/blog/:articleId', component: () => import('pages/Article.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
