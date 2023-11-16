import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import("@/layout");
Vue.use(Router)

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

var router = new Router({
    routes: [{
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index')
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('@/views/message/index')
            },
            {
                path: '/brand',
                name: 'brand',
                component: () => import('@/views/brand/index')
            },
            {
                path: '/partner',
                name: 'partner',
                component: () => import('@/views/partner/index')
            },
            {
                path: '/faqs',
                name: 'faqs',
                component: () => import('@/views/faqs/index')
            },
            {
                path: '/connection',
                name: 'connection',
                component: () => import('@/views/connection/index')
            },
            {
                path: '/brandList',
                name: 'brandList',
                component: () => import('@/views/brandList/index')
            },
            {
                path: '/partnerList',
                name: 'partnerList',
                component: () => import('@/views/partnerList/index')
            },
            {
                path: '/messageDetail',
                name: 'messageDetail',
                component: () => import('@/views/messageDetail/index')
            },
        ]
    },

        // 单独跳转页面
        // {
        //   path: '/profitRecord',
        //   name: 'profitRecord',
        //   component: () => import('@/views/wallet/profit')
        // }
    ],
    scrollBehavior: function (to, from, savedPosition) {
        if (savedPosition || typeof savedPosition == 'undefined') {
            if (savedPosition) {
                return savedPosition;
            }
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router
