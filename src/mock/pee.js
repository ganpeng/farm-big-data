
const peeList = [
    {
        id: 1,
        dId: 'qx233rt4t23r32',
        sn: 'd3f34f43t54', // 设备sn
        type: 1, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/大桥村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 1, // 厂商名称
        farm: '吉林市十月稻田生态农场', // 所属农场
        head: {
            name: '王进',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 2,
        dId: 'cq233rt4t23r32',
        sn: 'd3f34f43t53', // 设备sn
        type: 2, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/大桥村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 1, // 厂商名称
        farm: '吉林市十月稻田生态农场', // 所属农场
        head: {
            name: '王进',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 3,
        dId: 'tr233rt4t23r32',
        sn: 'd3f34f43t52', // 设备sn
        type: 3, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/大桥村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 1, // 厂商名称
        farm: '吉林市十月稻田生态农场', // 所属农场
        head: {
            name: '王进',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 4,
        dId: 'qj233rt4t23r32',
        sn: 'd3f34f43t51', // 设备sn
        type: 6, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/大桥村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 3, // 厂商名称
        farm: '吉林市十月稻田生态农场', // 所属农场
        head: {
            name: '李德农',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 5,
        dId: 'qs233rt4t23r32',
        sn: 'd3f34f43t50', // 设备sn
        type: 5, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/大桥村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 3, // 厂商名称
        farm: '吉林市十月稻田生态农场', // 所属农场
        head: {
            name: '李德农',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 6,
        dId: 'qx233rt4t23r10',
        sn: '223-def-34-err', // 设备sn
        type: 1, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/四道村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 1, // 厂商名称
        farm: '吉林市意禾田生态农场', // 所属农场
        head: {
            name: '王进',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 7,
        dId: 'cq233rt4t23r10',
        sn: '224-def-34-err', // 设备sn
        type: 2, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/四道村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 1, // 厂商名称
        farm: '吉林市意禾田生态农场', // 所属农场
        head: {
            name: '王进',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 8,
        dId: 'tr233rt4t23r10',
        sn: '225-def-34-err', // 设备sn
        type: 3, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/四道村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 1, // 厂商名称
        farm: '吉林市意禾田生态农场', // 所属农场
        head: {
            name: '王进',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 9,
        dId: 'qj233rt4t23r10',
        sn: '226-def-34-err', // 设备sn
        type: 6, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/四道村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 3, // 厂商名称
        farm: '吉林市意禾田生态农场', // 所属农场
        head: {
            name: '李德农',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    },
    {
        id: 10,
        dId: 'qs233rt4t23r10',
        sn: '227-def-34-err', // 设备sn
        type: 6, // 传感器类型
        address: {
            province: '吉林省',
            city: '吉林市',
            area: '磐石市',
            detail: '取柴河镇/四道村'
        }, // 地址
        latitude: '123.3432', // 经度
        longitude: '43.3423', // 纬度
        firmName: 3, // 厂商名称
        farm: '吉林市意禾田生态农场', // 所属农场
        head: {
            name: '李德农',
            phone: '1584757335',
            company: '吉视传媒磐石市分公司运维部'
        }, // 负责人
        createdAt: '2020-04-02', // 上线日期
        status: 1 // 状态
    }
];

export default peeList;
