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
    // {
    //     path: '/',
    //     redirect: '/console'
    // },
    // 网站内容结构
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('@/views/layout/Layout'),
        // 首页
        children: [
            //  首页
            {
                path: '/console',
                name: 'Console',
                component: () => import('@/views/console/Console')
            },
            //  页面布局
            {
                path: '/layout/setting',
                name: 'Setting',
                component: () => import('@/views/layout_setting/Setting')
            },
            {
                path: '/layout/type/edit',
                name: 'TypeRecommendEdit',
                component: () => import('@/views/layout_setting/TypeRecommendEdit')
            },
            {
                path: '/layout/daily/edit',
                name: 'DailyRecommendEdit',
                component: () => import('@/views/layout_setting/DailyRecommendEdit')
            },
            //  量表管理
            {
                path: '/manage_scale/list',
                name: 'ScaleList',
                component: () => import('@/views/manage_scale/ScaleList')
            },
            {
                path: '/manage_scale/create',
                name: 'ScaleCreate',
                component: () => import('@/views/manage_scale/ScaleCreate')
            },
            {
                path: '/manage_scale/edit/:id',
                name: 'ScaleEdit',
                component: () => import('@/views/manage_scale/ScaleEdit')
            },
            {
                path: '/manage_scale/detail/:id',
                name: 'ScaleDetail',
                component: () => import('@/views/manage_scale/ScaleDetail')
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
            //  搜索管理
            {
                path: '/manage_search/list',
                name: 'Search',
                component: () => import('@/views/manage_search/Search')
            },
            //  机构管理
            {
                path: '/manage_org/list',
                name: 'OrgList',
                component: () => import('@/views/manage_org/OrgList')
            },
            {
                path: '/manage_org/create',
                name: 'OrgCreate',
                component: () => import('@/views/manage_org/OrgCreate')
            },
            {
                path: '/manage_org/edit/:id',
                name: 'OrgEdit',
                component: () => import('@/views/manage_org/OrgEdit')
            },
            {
                path: '/manage_org/detail/:id',
                name: 'OrgDetail',
                component: () => import('@/views/manage_org/OrgDetail')
            },
            //  账号管理
            {
                path: '/manage_account/list',
                name: 'AccountList',
                component: () => import('@/views/manage_account/AccountList')
            },
            {
                path: '/manage_account/detail/:id',
                name: 'AccountDetail',
                component: () => import('@/views/manage_account/AccountDetail')
            },
            //  管理员增删改查
            {
                path: '/admin/list',
                name: 'AdminList',
                component: () => import('@/views/admin/AdminList')
            },
            {
                path: '/admin/create',
                name: 'AdminCreate',
                component: () => import('@/views/admin/AdminCreate')
            },
            {
                path: '/admin/detail/:id',
                name: 'AdminDetail',
                component: () => import('@/views/admin/AdminDetail')
            },
            {
                path: '/admin/edit/:id',
                name: 'AdminEdit',
                component: () => import('@/views/admin/AdminEdit')
            },
            //  用户增改查
            {
                path: '/user/create',
                name: 'UserCreate',
                component: () => import('@/views/user/UserCreate')
            },
            {
                path: '/user/edit/:id',
                name: 'UserEdit',
                component: () => import('@/views/user/UserEdit')
            },
            {
                path: '/user/detail/:id',
                name: 'UserDetail',
                component: () => import('@/views/user/UserDetail')
            },
            {
                path: '/user/list',
                name: 'UserList',
                component: () => import('@/views/user/UserList')
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


export const authRoutes = [
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
    {
        path: '/console',
        redirect: '/manage_task/list'
    },
    // 网站内容结构
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('@/views/layout/Layout'),
        // 首页
        children: [
            //  评测任务管理
            {
                path: '/manage_task/list',
                name: 'TaskList',
                component: () => import('@/views/manage_task/TaskList')
            },
            {
                path: '/manage_task/detail/:id',
                name: 'TaskDetail',
                component: () => import('@/views/manage_task/TaskDetail')
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


export const createRouter = routes => new Router({
    mode: 'history',
    routes
});

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token');
    if (to.name === 'Login') {
        if (token) {
            router.push({name: 'Console'});
        }
    } else {
        if (!token) {
            router.push({name: 'Login'});
        } else {
            next();
        }
    }
    next();
});

export default router;
