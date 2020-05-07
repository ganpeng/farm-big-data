import qs from 'querystring';
import _ from 'lodash';
import service from './config';

/**
 * 新增量表
 */
export const createScale = (scale) => {
    return service.post('/v1/question-sheet', scale);
};

/**
 * 查询量表列表
 */
export const getScaleList = (params) => {
    let paramsStr = qs.stringify(_.pickBy(params, (item) => {
        return item !== '' && item !== undefined;
    }));
    return service.get(`/v1/question-sheet/page?${paramsStr}`);
};

/**
 * 根据id获取量表
 */
export const getScaleById = (id) => {
    return service.get(`/v1/question-sheet/${id}`);
};

/**
 * 给量表增加题目
 */
export const postQuestionToScale = (id, question) => {
    return service.post(`/v1/question-sheet/question?questionSheetId=${id}`, question);
};

/**
 * 修改题目信息
 */
export const updateQuestion = (questionSheetId, question) => {
    return service.put(`/v1/question-sheet/question?questionSheetId=${questionSheetId}`, question);
};

/**
 * 根据题目id删除题目
 */
export const deleteQuestionById = (id) => {
    return service.delete(`/v1/question-sheet/question/${id}`);
}

/**
 * 根据id更新量表
 */
export const putScaleById = (question) => {
    return service.put('/v1/question-sheet', question);
};

/**
 * 量表题目排序
 */
export const questionSort = (questionSheetId, idList) => {
    return service.put(`/v1/question-sheet/question/sort?questionSheetId=${questionSheetId}`, idList);
};

/**
 * 根据量表id删除量表
 */
export const deleteScaleById = (id) => {
    return service.delete(`/v1/question-sheet/${id}`);
};
