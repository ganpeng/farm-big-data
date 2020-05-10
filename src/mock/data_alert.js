//  1: 红色， 2: 黄色，3: 橙色， 4: 蓝色
const dataAlertList = [
    {
        id: 1,
        level: 1,
        type: 1,
        desc: '冰雹伴有大风降温，最大降幅为10度左右，请做好农作物保护工作。',
        source: 1,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 1,
        processingResult: '',
        createdAt: '30分钟前'
    },
    {
        id: 2,
        level: 2,
        type: 3,
        desc: '根据农业部统计显示，大米今日收购价格低于去年最低值。',
        source: 2,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 1,
        processingResult: '',
        createdAt: '2小时前'
    },
    {
        id: 3,
        level: 3,
        type: 4,
        desc: '物联网设备监测目前水稻的长势分析预判，今年水稻亩产可能减少0.5吨，请采取应对措施。',
        source: 3,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 1,
        processingResult: '',
        createdAt: '2小时前'
    },
    {
        id: 4,
        level: 4,
        type: 5,
        desc: '物联网监测设备发现当前“吉林十月稻田生态农场”的地块：DK2413414的种植的玉米，与当前土壤和环境的适合度为45%，低于60%，请注意采取措施。',
        source: 3,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 1,
        processingResult: '',
        createdAt: '1天前'
    },
    {
        id: 5,
        level: 1,
        type: 2,
        desc: '物联网监测设备发现，稻瘟病的爆发系数为0.8，高于0.6，请及时除虫、预防。',
        source: 3,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 2,
        processingResult: {
            user: '王进',
            phone: '133144445566',
            dateTime: '90分钟前',
            desc: '对农作物进行了防护，并通知了有关负责人'
        },
        createdAt: '2天前'
    },
    {
        id: 6,
        level: 2,
        type: 6,
        desc: '冰雹伴有大风降温，最大降幅为10度左右，请做好农作物保护工作。',
        source: 1,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 2,
        processingResult: {
            user: '王进',
            phone: '133144445566',
            dateTime: '90分钟前',
            desc: '对农作物进行了防护，并通知了有关负责人'
        },
        createdAt: '7天前'
    },
    {
        id: 7,
        level: 1,
        type: 4,
        desc: '根据农业部统计显示，大米今日收购价格低于去年最低值。',
        source: 2,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 2,
        processingResult: {
            user: '王进',
            phone: '133144445566',
            dateTime: '90分钟前',
            desc: '对农作物进行了防护，并通知了有关负责人'
        },
        createdAt: '2020-04-02'
    },
    {
        id: 8,
        level: 2,
        type: 3,
        desc: '物联网设备监测目前水稻的长势分析预判，今年水稻亩产可能减少0.5吨，请采取应对措施。',
        source: 3,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 2,
        processingResult: {
            user: '王进',
            phone: '133144445566',
            dateTime: '90分钟前',
            desc: '对农作物进行了防护，并通知了有关负责人'
        },
        createdAt: '2020-04-02'
    },
    {
        id: 9,
        level: 3,
        type: 2,
        desc: '物联网监测设备发现当前“吉林十月稻田生态农场”的地块：DK2413414的种植的玉米，与当前土壤和环境的适合度为45%，低于60%，请注意采取措施。',
        source: 3,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 2,
        processingResult: {
            user: '王进',
            phone: '133144445566',
            dateTime: '90分钟前',
            desc: '对农作物进行了防护，并通知了有关负责人'
        },
        createdAt: '2020-04-02'
    },
    {
        id: 10,
        level: 4,
        type: 6,
        desc: '物联网监测设备发现，稻瘟病的爆发系数为0.8，高于0.6，请及时除虫、预防。',
        source: 3,
        startAt: '5/1 12:00',
        endAt: '5/2 23:50',
        processingStatus: 2,
        processingResult: {
            user: '王进',
            phone: '133144445566',
            dateTime: '90分钟前',
            desc: '对农作物进行了防护，并通知了有关负责人'
        },
        createdAt: '2020-04-02'
    }
];

export default dataAlertList;
