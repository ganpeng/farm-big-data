import tinytime from 'tinytime';
const FILTERS = {
    changeMoney(num) {
        const regexp = /(?:\.0*|(\.\d+?)0+)$/;
        if (num > 1000000) {
            num = JSON.stringify(num).slice(0, JSON.stringify(num).length - 4) / 100;
            return num + '万';
        } else {
            num = (num / 100).toFixed(2);
            num = num.replace(regexp, '$1');
            return num;
        }
    },
    timeFormat(time) {
        let timeStr = '';
        let stringFormat = (i) => {
            return i < 10 ? `0${i}` : `${i}`;
        }
        let minuteTime = 0;
        let secondTime = 0;
        let hourTime = 0;
        if(time < 60) {
            timeStr = `${stringFormat(time)}秒`;
        } else if(time >= 60 && time < 3600) {
            minuteTime = parseInt(time / 60);
            secondTime = parseInt(time % 60);
            timeStr = `${stringFormat(minuteTime)}分${stringFormat(secondTime)}秒`;
        } else if(time >= 3600) {
            let _t = parseInt(time % 3600);
            hourTime = parseInt(time / 3600);
            minuteTime = parseInt(_t / 60);
            secondTime = parseInt(_t % 60);
            timeStr = `${stringFormat(hourTime)}时${stringFormat(minuteTime)}分${stringFormat(secondTime)}秒`;
        }
        return timeStr;
    },
    dateFormat(timeStamp) {
        const template = tinytime('{YYYY}-{Mo}-{DD}', { padMonth: true });
        return timeStamp ? template.render(new Date(timeStamp)) : '';
    },
    dateTimeFormat(timeStamp) {
        const template = tinytime('{YYYY}-{Mo}-{DD} {h}:{mm}:{ss}', { padMonth: true });
        return timeStamp ? template.render(new Date(timeStamp)) : '';
    },
    // 数字和字母的对应关系
    numberToChar(num) {
        const map =  {
            0: 'A',
            1: 'B',
            2: 'C',
            3: 'D',
            4: 'E',
            5: 'F',
            6: 'G',
            7: 'H',
            8: 'I',
            9: 'J',
            10: 'K'
        };

        return map[num];
    },
    // PRIMARY | JUNIOR | SENIOR | BACHELOR | MASTER | DOCTOR
    culturalDegree(key) {
        let value = '无';
        switch (key) {
            case 'PRIMARY':
                value = '小学';
                break;
            case 'JUNIOR':
                value = '初中';
                break;
            case 'SENIOR':
                value = '高中';
                break;
            case 'BACHELOR':
                value = '本科';
                break;
            case 'MASTER':
                value = '硕士';
                break;
            case 'DOCTOR':
                value = '博士';
                break;
            default:
                break;
        }
        return value;
    },
    gender(key) {
        let value = '无';
        switch (key) {
            case 1:
                value = '男';
                break;
            case 2:
                value = '女';
                break;
            case 3:
                value = '其他';
                break;
            default:
                break;
        }
        return value;
    },
    marriage(key) {
        let value = '无';
        switch (key) {
            case 1:
                value = '已婚';
                break;
            case 2:
                value = '未婚';
                break;
            case 3:
                value = '其他';
                break;
            default:
                break;
        }
        return value;
    }
};

export default (global) => {
    for (let filter in FILTERS) {
        global.filter(filter, FILTERS[filter]);
    }
};
