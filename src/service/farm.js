import qs from 'querystring';
import _ from 'lodash';
import service from './config';

export const createFarm = (reqBody) => {
    return service.post(`/v1/farm/add`, reqBody);
};

export const updateFarmById = (reqBody) => {
    return service.put(`/v1/farm/edit`, reqBody);
};

export const deleteFarmById = (id) => {
    return service.delete(`/v1/farm/${id}`);
};

export const getFarmById = (id) => {
    return service.get(`/v1/farm/${id}`);
};

export const getFarmList = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));
    return service.get(`/v1/farm/list?${paramsStr}`);
};
