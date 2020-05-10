import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRouterMap = [{
        path: '/login',
        meta: {
            title: '登录',
            noCache: true
        },
        component: () => import('@/views/login/Login'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/404/Error404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/home/Home'),
            name: 'Dashboard',
            meta: {
                title: '首页',
                icon: 'index',
                affix: true,
                noCache: true
            }
        }]
    },
    {
        path: '/farm',
        component: Layout,
        redirect: '/farm/list',
        children: [
            {
                path: 'list',
                name: 'FarmList',
                component: () => import('@/views/farm/FarmList'),
                meta: {
                    title: '农场列表'
                }
            },
            {
                path: 'edit/:id(\\d+)',
                name: 'FarmEdit',
                component: () => import('@/views/farm/FarmEdit'),
                meta: {
                    title: '编辑农场',
                    activeMenu: '/farm/list'
                }
            },
            {
                path: 'visual',
                name: 'FarmVisual',
                component: () => import('@/views/farm/FarmVisual'),
                meta: {
                    title: '可视农场'
                }
            }
        ]
    },
    {
        path: '/sale',
        component: Layout,
        redirect: '/sale/tracing',
        children: [
            {
                path: 'tracing',
                name: 'TracingList',
                component: () => import('@/views/sale/TracingList'),
                meta: {
                    title: '溯源农品'
                }
            },
            {
                path: 'channel',
                name: 'ChannelList',
                component: () => import('@/views/sale/ChannelList'),
                meta: {
                    title: '编辑农场',
                    activeMenu: '/sale/tracing'
                }
            }
        ]
    },
    //  基站
    {
        path: '/base-station',
        component: Layout,
        children: [
            {
                path: '',
                name: 'BaseStation',
                component: () => import('@/views/base_station/BaseStation'),
                meta: {
                    title: '编辑农场'
                }
            }
        ]
    },
    //  物流
    {
        path: '/logistics',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Logistics',
                component: () => import('@/views/logistics/Logistics'),
                meta: {
                    title: '物流管理'
                }
            }
        ]
    },
    //  物环设备
    {
        path: '/pee',
        component: Layout,
        redirect: '/pee/list',
        children: [
            {
                path: 'list',
                name: 'PeeList',
                component: () => import('@/views/pee/PeeList'),
                meta: {
                    title: '物环设备列表'
                }
            },
            {
                path: 'create',
                name: 'PeeCreate',
                component: () => import('@/views/pee/PeeCreate'),
                meta: {
                    title: '物环设备新增',
                    activeMenu: '/pee/list'
                }
            },
            {
                path: 'edit/:id(\\d+)',
                name: 'PeeEdit',
                component: () => import('@/views/pee/PeeEdit'),
                meta: {
                    title: '物环设备编辑',
                    activeMenu: '/pee/list'
                }
            },
            {
                path: 'detail/:id(\\d+)',
                name: 'PeeDetail',
                component: () => import('@/views/pee/PeeDetail'),
                meta: {
                    title: '物环设备详情',
                    activeMenu: '/pee/list'
                }
            }
        ]
    },
    //  数据洞察
    {
        path: '/data',
        component: Layout,
        redirect: '/data/statistics',
        children: [
            {
                path: 'statistics',
                name: 'DataStatistics',
                component: () => import('@/views/data/DataStatistics'),
                meta: {
                    title: '数据统计'
                }
            },
            {
                path: 'alert',
                name: 'DataAlert',
                component: () => import('@/views/data/DataAlert'),
                meta: {
                    title: '数据预警'
                }
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})