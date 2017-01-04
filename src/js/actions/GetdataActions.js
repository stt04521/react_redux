/**
 * Created by shitengteng on 2017/1/3.
 */

import {
    GET_DATA_START,
    GET_DATA_SUCCESS,
    TEST_DISPATCH
} from './actionsTypes'



export  const getDataStart = (path, json, success,name) => {
    return {
        type: GET_DATA_START,
        path,
        json,
        success,
        name
    }
}


const getDataSuccess = (path, json, success, name) => {
    return {
        type: GET_DATA_SUCCESS,
        path ,
        json ,
        success ,
        name
    }
}