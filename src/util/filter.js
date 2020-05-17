const FILTERS = {
    tableRowClassName({rowIndex}) {
        if ((rowIndex % 2) === 0) {
            return 'warning-row';
        } else {
            return 'success-row';
        }
    }
};

export default (global) => {
    for (let filter in FILTERS) {
        global.filter(filter, FILTERS[filter]);
    }
};
