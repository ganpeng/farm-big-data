export default {
    // 邮箱
    email: /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/,
    // 网址
    url: /[a-zA-z]+:\/\/[^s]*/,
    // 国内电话(0511-4405222 或 021-87888822)
    telephone: /d{3}-d{8}|d{4}-d{7}/,
    // qq号(腾讯QQ号从10000开始)
    qq: /[1-9][0-9]{4,}/,
    // 国内邮编(中国邮政编码为6位数字)
    zipCode: /[1-9]d{5}(?!d)/,
    // 密码(以字母开头，长度在6-18之间)
    password: /^[a-zA-Z]w{5,17}$/,
    // 身份证正则表达式(15位)
    idCard15: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,
    // 身份证正则表达式(18位)
    idCard18: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/,
    // ip地址
    ip: /(\d+)\.(\d+)\.(\d+)\.(\d+)/,
    // 账号字母数字下划线6-16位
    account: /^[a-zA-Z0-9_]{6,16}$/
};
