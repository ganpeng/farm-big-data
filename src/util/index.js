
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

const taskStatusOption = [
    {
        value: 'READY',
        text: '未开始'
    },
    {
        value: 'UNDERWAY',
        text: '进行中'
    },
    {
        value: 'COMPLETE',
        text: '已结束'
    }
];

const CAREER_OPTION = [
    // STUDENT | CLERK | OFFICIAL | MERCHANT | FARMER | FULLTIME_PARENT | OTHER
    {
        value: 'STUDENT',
        text: '学生'
    },
    {
        value: 'CLERK',
        text: '职员'
    },
    {
        value: 'OFFICIAL',
        text: '企事业单位'
    },
    {
        value: 'MERCHANT',
        text: '商人'
    },
    {
        value: 'FARMER',
        text: '务农'
    },
    {
        value: 'FULLTIME_PARENT',
        text: '全职父母'
    },
    {
        value: 'OTHER',
        text: '其他'
    }
];

const SENIORITY_OPTION = [
    // ONE2FIVE | SIX2TEN | TEN2FIFTEEN | FIFTEEN2TWENTY | TWENTYABOVE
    {
        value: 'ONE2FIVE',
        text: '1~5年'
    },
    {
        value: 'SIX2TEN',
        text: '6~10年'
    },
    {
        value: 'TEN2FIFTEEN',
        text: '10~15年'
    },
    {
        value: 'FIFTEEN2TWENTY',
        text: '15~20年'
    },
    {
        value: 'TWENTYABOVE',
        text: '20年以上'
    },
];

export default {
    trueFalseOptions,
    downloadFile,
    taskStatusOption,
    CAREER_OPTION,
    SENIORITY_OPTION
};