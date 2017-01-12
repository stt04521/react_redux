/**
 * Created by shitengteng on 2017/1/3.
 */

import {
    GET_DATA_START,
    GET_DATA_SUCCESS,
    TEST_DISPATCH,
    POST_DATA_START,
    POST_DATA_SUCCESS
} from './actionsTypes'



export  const getDataStart = (path, data, success, url,state) =>{
    return {
        type: GET_DATA_START,
        path,
        data,
        success,
        url,
        state
    }
}
export  const PostDataStart = (path, json, success,name) => {
    return {
        type: POST_DATA_START,
        path,
        json,
        success,
        name
    }
}
