import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/home/index.vue' // 自定义的 登录页
import Login from '@/views/login/index.vue' // 自定义的登出页
import details from '@/views/details/index.vue'
const routes = [{
        path: '/',
        name: 'Login',
        component: home
    },
    {
        path: '/login',
        name: 'LoginOut',
        component: Login
    },
    {
        path: '/details',
        name: 'details',
        component: details
    }
]

/**
 * 定义返回模块
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router