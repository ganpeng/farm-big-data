import qs from 'querystring';
import _ from 'lodash';
import service from './config';

/**
 * 获取量表的分类
 */
export const getCategoryList = () => {
    return service.get(`/v1/question-sheet/test-category/list`);
};

/**
 * 新增量表分类
 */
export const postCategory = (name) => {
    return service.post(`/v1/question-sheet/test-category`, {name});
};

/**
 * 设置推荐量表
 */
export const postRecommendList = (recommendItemList) => {
    return service.post(`/v1/recommend-item`, recommendItemList);
};

/**
 * 获取推荐量表
 */
export const getRecommendList = () => {
    return service.get(`/v1/recommend-item/list`);
};

/**
 * 管理员登录
 */
export const login = (admin) => {
    return service.post(`/v1/admin/login`, admin);
};

/**
 * 获取用户列表
 */
export const getAccountList = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));
    return service.get(`/v1/user/page?${paramsStr}`);
};

/**
 * 根据id获取账户详情
 */
export const getAccountById = (id) => {
    return service.get(`/v1/user/${id}`);
};


/**
 * 获取热搜
 */
export const getHotSearch = () => {
    return service.get('/v1/hot-search');
};


/**
 * 保存热搜
 */
export const postHotSearch = (searchList) => {
    return service.post('/v1/hot-search', searchList);
};


/**
 * 查询某个账户下符合条件的评测记录
 */
export const getTestListByUserId = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));
    return service.get(`/v1/user/filteredRecords?${paramsStr}`);
};
