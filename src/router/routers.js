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
        path: '/farm/visual/detail',
        name: 'FarmVisualDetail',
        component: () => import('@/views/farm/VisualFarm'),
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
                title: '数据概览',
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
                    title: '农场信息'
                }
            },
            {
                path: 'manage/:id(\\d+)',
                name: 'FarmManage',
                component: () => import('@/views/farm/FarmManage'),
                meta: {
                    title: '农场信息>管理',
                    activeMenu: '/farm/list'
                }
            },
            {
                path: 'detail/:id(\\d+)',
                name: 'FarmDetail',
                component: () => import('@/views/farm/FarmDetail'),
                meta: {
                    title: '农场信息>详情',
                    activeMenu: '/farm/list'
                }
            },
            {
                path: 'edit/:id(\\d+)',
                name: 'FarmEdit',
                component: () => import('@/views/farm/FarmEdit'),
                meta: {
                    title: '农场信息>编辑',
                    activeMenu: '/farm/list'
                }
            },
            {
                path: 'create/',
                name: 'FarmCreate',
                component: () => import('@/views/farm/FarmCreate'),
                meta: {
                    title: '农场信息>新增',
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
    //  销售
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
                path: 'tracing/edit/:id(\\d+)',
                name: 'TracingEdit',
                component: () => import('@/views/sale/TracingEdit'),
                meta: {
                    title: '溯源农品>编辑',
                    activeMenu: '/sale/tracing'
                }
            },
            {
                path: 'channel',
                name: 'ChannelList',
                component: () => import('@/views/sale/ChannelList'),
                meta: {
                    title: '渠道管理',
                }
            },
            {
                path: 'channel/create',
                name: 'ChannelCreate',
                component: () => import('@/views/sale/ChannelCreate'),
                meta: {
                    title: '渠道管理>新增',
                    activeMenu: '/sale/channel'
                }
            },
            {
                path: 'channel/edit/:id(\\d+)',
                name: 'ChannelEdit',
                component: () => import('@/views/sale/ChannelEdit'),
                meta: {
                    title: '渠道管理>编辑',
                    activeMenu: '/sale/channel'
                }
            },
            {
                path: 'channel/detail/:id(\\d+)',
                name: 'ChannelDetail',
                component: () => import('@/views/sale/ChannelDetail'),
                meta: {
                    title: '渠道管理>详情',
                    activeMenu: '/sale/channel'
                }
            },
            {
                path: 'statistics/:id(\\d+)',
                name: 'ChannelStatistics',
                component: () => import('@/views/sale/ChannelStatistics'),
                meta: {
                    title: '渠道统计',
                    activeMenu: '/sale/channel'
                }
            }
        ]
    },
    //  5G网络
    {
        path: '/base-station',
        component: Layout,
        children: [
            {
                path: '',
                name: 'BaseStation',
                component: () => import('@/views/base_station/BaseStation'),
                meta: {
                    title: '基站管理',
                    activeMenu: '/base-station'
                }
            }
        ]
    },
    {
        path: '/internet',
        component: Layout,
        children: [
            {
                path: 'list',
                name: 'InternetList',
                component: () => import('@/views/base_station/InternetList'),
                meta: {
                    title: '网络管理',
                    activeMenu: '/internet/list'
                }
            }
        ]
    },
    //  仓储物流
    {
        path: '/logistics',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Logistics',
                component: () => import('@/views/logistics/Logistics'),
                meta: {
                    title: '仓储管理',
                    activeMenu: '/logistics'
                }
            }
        ]
    },
    {
        path: '/cars',
        component: Layout,
        children: [
            {
                path: 'list',
                name: 'CarsList',
                component: () => import('@/views/logistics/CarsList'),
                meta: {
                    title: '车辆管理',
                    activeMenu: '/cars/list'
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
                    title: '设备管理'
                }
            },
            {
                path: 'create',
                name: 'PeeCreate',
                component: () => import('@/views/pee/PeeCreate'),
                meta: {
                    title: '设备管理>新增',
                    activeMenu: '/pee/list'
                }
            },
            {
                path: 'edit/:id(\\d+)',
                name: 'PeeEdit',
                component: () => import('@/views/pee/PeeEdit'),
                meta: {
                    title: '设备管理>编辑',
                    activeMenu: '/pee/list'
                }
            },
            {
                path: 'detail/:id(\\d+)',
                name: 'PeeDetail',
                component: () => import('@/views/pee/PeeDetail'),
                meta: {
                    title: '设备管理>详情',
                    activeMenu: '/pee/list'
                }
            },
            //  设备分组
            {
                path: 'group/list',
                name: 'PeeGroupList',
                component: () => import('@/views/pee/PeeGroupList'),
                meta: {
                    title: '设备分组',
                    activeMenu: '/pee/group/list'
                }
            },
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
                    title: '数据统计',
                    activeMenu: '/data/statistics'
                }
            },
            {
                path: 'detail',
                name: 'DataStatisticsDetail',
                component: () => import('@/views/data/DataStatisticsDetail'),
                meta: {
                    title: '数据统计',
                    activeMenu: '/data/statistics'
                }
            },
            {
                path: 'alert',
                name: 'DataAlert',
                component: () => import('@/views/data/DataAlert'),
                meta: {
                    title: '大数据预警'
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