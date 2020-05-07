import qs from 'querystring';
import _ from 'lodash';
import service from './config';

/**
 * 获取所有机构的根节点
 */
export const getOrgRootList = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));

    return service.get(`/v1/institute/page?${paramsStr}`);
};

/**
 * 新增机构
 */
export const postInstitute = (reqBody) => {
    return service.post(`/v1/institute`, reqBody);
};

/**
 * 更新机构
 */
export const putInstitute = (reqBody) => {
    return service.put(`/v1/institute`, reqBody);
};

/**
 * 删除子节点
 */
export const deleteInstitute = (id) => {
    return service.delete(`/v1/institute?id=${id}`);
};

/**
 * 获取子节点
 */
export const getOrgChildren = (id) => {
    return service.get(`/v1/institute/list?id=${id}`);
};

/**
 * 根据机构的id获取该机构下的管理员
 */
export const getOrgAdminListById = (id) => {
    return service.get(`/v1/admin/list?instituteId=${id}`);
};
