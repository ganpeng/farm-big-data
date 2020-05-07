import qs from 'querystring';
import _ from 'lodash';
import service from './config';

/**
 * 根据id获取管理员
 */
export const getAdminById = (id) => {
    return service.get(`/admin/${id}`);
};

/**
 * 根据token获取用户的信息
 */
export const getUserByToken = () => {
    return service.get(`/v1/admin/self`);
};

/**
 * 新增管理员
 */
export const postAdmin = (admin) => {
    return service.post(`/v1/admin`, admin);
};


/**
 * 根据id修改管理员
 */
export const updateAdminById = (admin) => {
    return service.put(`/v1/admin`, admin);
};


/**
 * 获取管理员列表
 */
export const getAdminList = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));
    return service.get(`/v1/admin/page?${paramsStr}`);
}
