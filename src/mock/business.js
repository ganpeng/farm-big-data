export const governmentProjectsList = [
    {
        id: 1,
        name: '吉林市农业机械化改造项目', // 项目名称
        level: '市级', // 项目级别
        department: '农业部', // 部门
        leader: {
            name: '王进',  // 负责人
            phone: '13786478564' // 负责人电话
        },
        step: '立项阶段', // 项目阶段
        cycleStartedAt: '2018-02-03', // 周期开始
        cycleEndedAt: '2022-02-03', // 周期结束
        moneyInfo: {
            totalMoney: 5500000, // 项目总额
            govPay: 500000, // 政府拨款
            payedList: [ //  到账金额
                {
                    amount: '',
                    date: ''
                }
            ],
            payedTotal: 1123879, // 到账总计
        },
        useDetailList: [
            {
                type: '设备费', // 费用类型
                amount: 1000, // 金额
                code: 's1212311', // 资金适用凭证号
                createdAt: '2020-02-02', // 产生时间
                invoiceList: [] // 发票列表
            }
        ]
    },
    {
        id: 2,
        name: '吉林省黑土资源保护项目', // 项目名称
        level: '省级', // 项目级别
        department: '自然资源厅', // 部门
        leader: {
            name: '王进',  // 负责人
            phone: '13786478564' // 负责人电话
        },
        step: '执行阶段', // 项目阶段
        cycleStartedAt: '2018-02-03', // 周期开始
        cycleEndedAt: '2022-02-03', // 周期结束
        moneyInfo: {
            totalMoney: 5500000, // 项目总额
            govPay: 500000, // 政府拨款
            payedList: [ //  到账金额
                {
                    amount: '',
                    date: ''
                }
            ],
            payedTotal: 1123879, // 到账总计
        },
        useDetailList: [
            {
                type: '设备费', // 费用类型
                amount: 1000, // 金额
                code: 's1212311', // 资金适用凭证号
                createdAt: '2020-02-02', // 产生时间
                invoiceList: [] // 发票列表
            }
        ]
    },
    {
        id: 3,
        name: '国家农业部专业农品技工培养计划', // 项目名称
        level: '国家级', // 项目级别
        department: '农业部', // 部门
        leader: {
            name: '王进',  // 负责人
            phone: '13786478564' // 负责人电话
        },
        step: '验收阶段', // 项目阶段
        cycleStartedAt: '2018-02-03', // 周期开始
        cycleEndedAt: '2022-02-03', // 周期结束
        moneyInfo: {
            totalMoney: 5500000, // 项目总额
            govPay: 500000, // 政府拨款
            payedList: [ //  到账金额
                {
                    amount: '',
                    date: ''
                }
            ],
            payedTotal: 1123879, // 到账总计
        },
        useDetailList: [
            {
                type: '设备费', // 费用类型
                amount: 1000, // 金额
                code: 's1212311', // 资金适用凭证号
                createdAt: '2020-02-02', // 产生时间
                invoiceList: [] // 发票列表
            }
        ]
    }
];

export const specialSubList = [
    {
        id: 1,
        type: '耕地地力保护补贴', // 补贴类型
        code: 'BT202002031119', // 文件编号
        leaderOne: {
            name: '王进',
            phone: '13786478564'
        }, // 申请负责人
        leaderTwo: {
            name: '王德金',
            phone: '13786478564'
        }, // 政府负责人
        applyDate: '2020-1-19', // 申请时间
        passDate: '2020-2-3', // 通过时间
        subStatus: '已通过', // 补贴状态
        moneyInfo: {
            totalMoney: 5000, // 项目总额
            govPay: 500000, // 政府拨款
            payedList: [ //  到账金额
                {
                    amount: '',
                    date: ''
                }
            ],
            payedTotal: 1120, // 到账总计
        },
        useDetailList: [
            {
                type: '设备费', // 费用类型
                amount: 1000, // 金额
                code: 's1212311', // 资金适用凭证号
                createdAt: '2020-02-02', // 产生时间
                invoiceList: [] // 发票列表
            }
        ]
    },
    {
        id: 2,
        type: '农机购置补贴', // 补贴类型
        code: 'BT202002031119', // 文件编号
        leaderOne: {
            name: '王进',
            phone: '13786478564'
        }, // 申请负责人
        leaderTwo: {
            name: '王德金',
            phone: '13786478564'
        }, // 政府负责人
        applyDate: '2020-1-19', // 申请时间
        passDate: '2020-2-3', // 通过时间
        subStatus: '申请中', // 补贴状态
        moneyInfo: {
            totalMoney: 10000, // 项目总额
            govPay: 500000, // 政府拨款
            payedList: [ //  到账金额
                {
                    amount: '',
                    date: ''
                }
            ],
            payedTotal: 0, // 到账总计
        },
        useDetailList: [
            {
                type: '设备费', // 费用类型
                amount: 1000, // 金额
                code: 's1212311', // 资金适用凭证号
                createdAt: '2020-02-02', // 产生时间
                invoiceList: [] // 发票列表
            }
        ]
    },
    {
        id: 3,
        type: '玉米、大豆和稻谷生产者补贴', // 补贴类型
        code: 'BT202002031119', // 文件编号
        leaderOne: {
            name: '王进',
            phone: '13786478564'
        }, // 申请负责人
        leaderTwo: {
            name: '王德金',
            phone: '13786478564'
        }, // 政府负责人
        applyDate: '2020-1-19', // 申请时间
        passDate: '2020-2-3', // 通过时间
        subStatus: '款项到位', // 补贴状态
        moneyInfo: {
            totalMoney: 100000, // 项目总额
            govPay: 500000, // 政府拨款
            payedList: [ //  到账金额
                {
                    amount: '',
                    date: ''
                }
            ],
            payedTotal: 10000, // 到账总计
        },
        useDetailList: [
            {
                type: '设备费', // 费用类型
                amount: 1000, // 金额
                code: 's1212311', // 资金适用凭证号
                createdAt: '2020-02-02', // 产生时间
                invoiceList: [] // 发票列表
            }
        ]
    }
];
