export const NAV_LIST = [
    '首页',
    '页面布局',
    '评测管理',
    '账户管理',
    '管理员',
    ''
];

export const ASIDE_LIST = [
    [
        {
            text: '控制台',
            uri: '/console',
            icon: 'aside_console'
        }
    ],
    [
        {
            text: '评测首页',
            uri: '/layout/setting',
            icon: 'aside_console'
        }
    ],
    [
        {
            text: '量表管理',
            uri: '/manage_scale/list',
            icon: 'aside_console'
        },
        {
            text: '任务管理',
            uri: '/manage_task/list',
            icon: 'aside_console'
        },
        {
            text: '搜索管理',
            uri: '/manage_search/list',
            icon: 'aside_console'
        }
    ],
    [
        {
            text: '机构管理',
            uri: '/manage_org/list',
            icon: 'aside_console'
        },
        {
            text: '账户管理',
            uri: '/manage_account/list',
            icon: 'aside_console'
        }
    ],
    [
        {
            text: '管理员',
            uri: '/admin/list',
            icon: 'admin_icon'
        }
    ],
    [
        {
            text: '个人中心',
            uri: '/profile',
            icon: 'profile_icon'
        }
    ]
];


const ORG_NAV_LIST = ['评测管理', ''];
const ORG_ASIDE_LIST = [
    [
        {
            text: '任务管理',
            uri: '/manage_task/list',
            icon: 'aside_console'
        }
    ],
    [
        {
            text: '个人中心',
            uri: '/profile',
            icon: 'profile_icon'
        }
    ]
];


export const DEFAULT_PAGINATION = {
    pageNum: 1,
    pageSize: 10,
    total: 0
};

export const DEFAULT_LIST = {
    data: [],
    pagination: DEFAULT_PAGINATION
};

export default {
    NAV_LIST,
    ASIDE_LIST,
    ORG_NAV_LIST,
    ORG_ASIDE_LIST,
    DEFAULT_PAGINATION,
    DEFAULT_LIST
};
