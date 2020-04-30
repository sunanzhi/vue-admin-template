import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import LayoutAdmin from '@/layout-admin'
import LayoutHome from '@/layout-home'

export const constantRoutes = [
  // 登陆
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // 注册
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 前台
  {
    path: '/',
    component: LayoutHome,
    redirect: '/home',
    hidden: true,
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', needLogin: false }
    }, {
      path: 'bulletinBoard',
      name: 'BulletinBoard',
      component: () => import('@/views/home/bulletinBoard/index'),
      meta: { title: '公告栏', needLogin: false }
    }, {
      path: 'user',
      name: 'User',
      component: () => import('@/views/home/user/index'),
      meta: { title: '用户中心', needLogin: true }
    }, {
      path: 'paintingList',
      name: 'PaintingList',
      component: () => import('@/views/home/works/painting/list'),
      meta: { title: '绘画列表', needLogin: false }
    }]
  },

  // 后台首页
  {
    path: '/admin',
    component: LayoutAdmin,
    redirect: '/admin/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/admin/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/admin/cultures/category',
    component: LayoutAdmin,
    name: 'Admin/Cultures/Category',
    meta: { title: '作品', icon: 'example' },
    children: [
      {
        path: 'category-list',
        name: 'Category-List',
        component: () => import('@/views/admin/cultures/category/list'),
        meta: { title: '分类', icon: 'table' }
      },
      {
        path: 'category-edit',
        name: 'Category-Edit',
        hidden: true,
        component: () => import('@/views/admin/cultures/category/edit'),
        meta: { title: '分类', icon: 'table' }
      }
    ]
  },

  {
    path: '/admin/cultures/works/painting',
    component: LayoutAdmin,
    name: 'Admin/Cultures/Works/Painting',
    meta: { title: '绘画作品', icon: 'example' },
    children: [
      {
        path: 'paintint-list',
        name: 'Painting-List',
        component: () => import('@/views/admin/cultures/painting/list'),
        meta: { title: '列表', icon: 'table' }
      },
      {
        path: 'painting-add',
        name: 'Painting-Add',
        component: () => import('@/views/admin/cultures/painting/add'),
        meta: { title: '添加', icon: 'form' }
      }
    ]
  },

  {
    path: '/example',
    component: LayoutAdmin,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: LayoutAdmin,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: LayoutAdmin,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: LayoutAdmin,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
