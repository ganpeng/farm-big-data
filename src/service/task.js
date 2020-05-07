import qs from 'querystring';
import _ from 'lodash';
import service from './config';

/**
 * 新增任务
 */
export const creatTask = (task) => {
    return service.post('/v1/test-task', task);
};

/**
 * 更新任务
 */
export const updateTask = (task) => {
    return service.put('/v1/test-task', task);
};

/**
 * 根据id查询任务
 */
export const getTaskById = (id) => {
    return service.get(`/v1/test-task/${id}`);
}

/**
 * 查询任务列表 /v1/test-task/page
 */
export const getTaskList = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));
    return service.get(`/v1/test-task/page?${paramsStr}`);
};

/**
 * 根据任务id删除任务
 */
export const deleteTaskById = (id) => {
    return service.delete(`/v1/test-task/delete/${id}`);
};

/**
 * 导出任务表格
 */
export const exportTaskTable = (id) => {
    return service.post(`/v1/test-task/export?testTaskId=${id}`, null, {
        responseType: 'blob'
    });
};

/**
 * 获取机构用户的任务
 */
export const getOrgTaskList = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));
    return service.get(`/v1/user-test-task/page?${paramsStr}`);
};

/**
 * 批量导出任务评测结果
 */
export const exportTaskResult = (id) => {
    return service.post(`/v1/test-task/export/testRest?testTaskId=${id}`, null, {
        responseType: 'blob'
    });
};
