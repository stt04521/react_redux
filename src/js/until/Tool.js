/**
 * Created by shitengteng on 2017/1/3.
 */


export const Tool = {};

Tool.paramType = data => {
    let paramArr = [];
    let paramStr = '';
    for (let attr in data) {
        paramArr.push(attr + '=' + data[attr]);
    }
    paramStr = paramArr.join('&');
    paramStr = '?' + paramStr;
    return paramStr
}
Tool.target= process.env.NODE_ENV !== 'production' ? 'http://www.joyoungtest.com/jymbms' : 'http://120.55.189.92:9999/jymbms';