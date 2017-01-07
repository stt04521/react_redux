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

// let http_1="http://192.168.0.112:8082/jymbms";
let http_1="http://192.168.0.185:9991/jymbms";
Tool.target= process.env.NODE_ENV !== 'production' ? http_1 : 'http://shopro.putaoevent.com';