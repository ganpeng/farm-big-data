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
    lonlatOptions
};
