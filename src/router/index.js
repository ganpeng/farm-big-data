import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
    // 登录页面
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login')
    },
    //  404
    {
        path: '/error404',
        name: 'Error404',
        component: () => import('@/views/404/Error404')
    },
    // 网站内容结构
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('@/views/layout/Layout'),
        // 首页
        children: [
            //  首页
            {
                path: '/',
                name: 'Console',
                component: () => import('@/views/console/Console')
            },
            //  评测任务管理
            {
                path: '/manage_task/list',
                name: 'TaskList',
                component: () => import('@/views/manage_task/TaskList')
            },
            {
                path: '/manage_task/create',
                name: 'TaskCreate',
                component: () => import('@/views/manage_task/TaskCreate')
            },
            {
                path: '/manage_task/edit/:id',
                name: 'TaskEdit',
                component: () => import('@/views/manage_task/TaskEdit')
            },
            {
                path: '/manage_task/detail/:id',
                name: 'TaskDetail',
                component: () => import('@/views/manage_task/TaskDetail')
            },
            //  物环设备
            {
                path: '/pee/list',
                name: 'PeeList',
                component: () => import('@/views/pee/PeeList')
            },
            //  个人中心
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('@/views/profile/Profile')
            }
        ]
    }
];

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
