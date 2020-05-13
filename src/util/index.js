import _ from 'lodash';

const trueFalseOptions = (type) => {
    let trueLabel = '是';
    let falseLabel = '否';

    switch (type) {
        case 1:
            trueLabel = '是';
            falseLabel = '否';
            break;
        case 2:
            trueLabel = '上架';
            falseLabel = '下架';
            break;
        default:

    }

    return [
        {
            label: trueLabel,
            value: true
        },
        {
            label: falseLabel,
            value: false
        }
    ];
};

const downloadFile = (url, name) => {
    if (typeof url === 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url); // 创建blob地址
    }
    let aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = name || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    let event;
    if (window.MouseEvent) {
        event = new MouseEvent('click');
    } else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
};

// level级别
const levelOptions = [
    {
        value: 1,
        label: '红色预警'
    },
    {
        value: 2,
        label: '黄色预警'
    },
    {
        value: 3,
        label: '橙色预警'
    },
    {
        value: 4,
        label: '蓝色预警'
    }
];

const dataAlertTypeOptions = [
    {
        value: 1,
        label: '气象灾害预警'
    },
    {
        value: 2,
        label: '虫灾预警'
    },
    {
        value: 3,
        label: '农产品价格波动'
    },
    {
        value: 4,
        label: '农作物产量异动'
    },
    {
        value: 5,
        label: '种植适合度预警'
    },
    {
        value: 6,
        label: '设备异常预警'
    }
];

const dataAlertSourceOptions = [
    {
        value: 1,
        label: '中央气象局'
    },
    {
        value: 2,
        label: '农业部'
    },
    {
        value: 3,
        label: '内部大数据平台'
    }
];

const processingStatusOptions = [
    {
        value: 1,
        label: '未处理'
    },
    {
        value: 2,
        label: '已处理'
    }
];

const sensorTypeOptions = [
    {
        value: 1,
        label: '气象传感器'
    },
    {
        value: 2,
        label: '虫情传感器'
    },
    {
        value: 3,
        label: '土壤传感器'
    },
    {
        value: 4,
        label: '水质传感器'
    },
    {
        value: 5,
        label: '枪机摄像头'
    },
    {
        value: 6,
        label: '球机摄像头'
    }
];

const peeStatusOptions = [
    {
        value: 1,
        label: '正常'
    },
    {
        value: 2,
        label: '异常'
    }
];

const peeFirmOptions = [
    {
        value: 1,
        label: '飞利信'
    },
    {
        value: 2,
        label: '上海大唐'
    },
    {
        value: 3,
        label: '华为'
    },
    {
        value: 4,
        label: '海康威视'
    }
];

const peeFarmOptions = [
    {
        value: '吉林市十月稻田生态农场',
        label: '吉林市十月稻田生态农场'
    },
    {
        value: '吉林市意禾田家庭生态农场',
        label: '吉林市意禾田家庭生态农场'
    },
    {
        value: '吉林市绿源农业观光农场',
        label: '吉林市绿源农业观光农场'
    },
    {
        value: '白山市长白上下家庭生态农场',
        label: '白山市长白上下家庭生态农场'
    }
];

const peeCompanyOptions = [
    {
        value: '舒兰分公司',
        label: '舒兰分公司'
    },
    {
        value: '白山分公司',
        label: '白山分公司'
    },
    {
        value: '长春分公司',
        label: '长春分公司'
    },
    {
        value: '双阳分公司',
        label: '双阳分公司'
    },
    {
        value: '榆树分公司',
        label: '榆树分公司'
    }
];

const staffOptions = [
    {
        value: '王进',
        label: '王进 运维部'
    },
    {
        value: '李德农',
        label: '李德农 运维部'
    },
    {
        value: '张许',
        label: '张许 运维部'
    }
];

const channelTypeOptions = [
    {
        value: '自营电商',
        label: '自营电商'
    },
    {
        value: '合作渠道',
        label: '合作渠道'
    },
    {
        value: '线下渠道',
        label: '线下渠道'
    }
];

const tracingTypeOptions = [
    {
        value: '稻米',
        label: '稻米'
    },
    {
        value: '杂粮',
        label: '杂粮'
    },
    {
        value: '果蔬',
        label: '果蔬'
    },
    {
        value: '菌类',
        label: '菌类'
    },
    {
        value: '其他',
        label: '其他'
    }
];

const farmVisualTypeOptions = [
    {
        value: '农名专业合作社',
        label: '农名专业合作社'
    },
    {
        value: '农村集体经济组织',
        label: '农村集体经济组织'
    },
    {
        value: '家庭农场',
        label: '家庭农场'
    }
];

const tracingAuthOptions = [
    {
        value: '绿色农产品认证',
        label: '绿色农产品认证'
    },
    {
        value: '有机农产品认证',
        label: '有机农产品认证'
    },
    {
        value: '无公害农产品认证',
        label: '无公害农产品认证'
    }
];

const projectOptions = [
    {
        value: '水稻种植',
        label: '水稻种植'
    },
    {
        value: '杂粮种植',
        label: '杂粮种植'
    },
    {
        value: '菌类种植',
        label: '菌类种植'
    },
    {
        value: '果蔬种植',
        label: '果蔬种植'
    },
    {
        value: '家禽养殖',
        label: '家禽养殖'
    },
    {
        value: '水产养殖',
        label: '水产养殖'
    },
    {
        value: '其他',
        label: '其他'
    }
];

const farmLevelOptions = [
    {
        value: '省级专业合作社',
        label: '省级专业合作社'
    },
    {
        value: '市级专业合作社',
        label: '市级专业合作社'
    },
    {
        value: '县级专业合作社',
        label: '县级专业合作社'
    },
    {
        value: '无',
        label: '无'
    }
];

const divideOptions = [
    {
        value: '农作物种植',
        label: '农作物种植'
    },
    {
        value: '水产养殖',
        label: '水产养殖'
    },
    {
        value: '菌类培植',
        label: '菌类培植'
    },
    {
        value: '运输',
        label: '运输'
    },
    {
        value: '加工',
        label: '加工'
    },
    {
        value: '其他',
        label: '其他'
    }
];

const wccOptions = [
    {
        value: '水田',
        label: '水田'
    },
    {
        value: '旱田',
        label: '旱田'
    },
    {
        value: '水浇地',
        label: '水浇地'
    }
];

const roamTypeOptions = [
    {
        value: '土地托管',
        label: '土地托管'
    },
    {
        value: '成员出资',
        label: '成员出资'
    }
];

const purposeOptions = [
    {
        value: '复垦',
        label: '复垦'
    },
    {
        value: '租住',
        label: '租住'
    },
    {
        value: '旅游',
        label: '旅游'
    }
];

const farmMachineTypeOptions = [
    {
        value: '耕耘和整地机械',
        label: '耕耘和整地机械'
    },
    {
        value: '种地和施肥机械',
        label: '种地和施肥机械'
    },
    {
        value: '田间管理和植保机械',
        label: '田间管理和植保机械'
    },
    {
        value: '收获机械',
        label: '收获机械'
    },
    {
        value: '脱粒，清洗，烘干和贮存机械',
        label: '脱粒，清洗，烘干和贮存机械'
    },
    {
        value: '农副产品产品加工机械',
        label: '农副产品产品加工机械'
    },
    {
        value: '运输机械',
        label: '运输机械'
    },
    {
        value: '排灌机械',
        label: '排灌机械'
    },
    {
        value: '畜牧机械',
        label: '畜牧机械'
    },
    {
        value: '其他机械',
        label: '其他机械'
    }
];

const farmMachineSourceOptions = [
    {
        value: '自购',
        label: '自购'
    },
    {
        value: '租借',
        label: '租借'
    },
    {
        value: '政府补贴',
        label: '政府补贴'
    },
    {
        value: '获赠',
        label: '获赠'
    }
];

const lonlatOptions = _.times(180, (i) => {
    return {
        value: i + 1,
        label: i + 1
    };
});

const getLabelByValue = (options, value) => {
    let option = options.find((item) => item.value === value);
    return _.get(option, 'label');
}

export default {
    trueFalseOptions,
    downloadFile,
    levelOptions,
    dataAlertTypeOptions,
    dataAlertSourceOptions,
    processingStatusOptions,
    getLabelByValue,
    //  pee
    sensorTypeOptions,
    peeStatusOptions,
    peeFirmOptions,
    peeFarmOptions,
    peeCompanyOptions,
    staffOptions,
    lonlatOptions,
    //  channel
    channelTypeOptions,
    // tracing
    tracingTypeOptions,
    farmVisualTypeOptions,
    tracingAuthOptions,
    //  farm
    projectOptions,
    farmLevelOptions,
    divideOptions,
    wccOptions,
    roamTypeOptions,
    purposeOptions,
    //  农机具
    farmMachineTypeOptions,
    farmMachineSourceOptions
};
