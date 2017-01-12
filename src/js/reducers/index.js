
/**
 * Created by shitengteng on 2016/12/30.
 */

// import { combineReducers } from 'redux-immutable';
// import posts from './posts'
//
// const rootReducer = combineReducers({
//     posts
// });
//
// export default rootReducer;



import { combineReducers } from 'redux'
import {posts} from './posts'
import {jySaleStatus,ctSaleTypes,TradingStatus} from  './global'
import requestData from './requestData'
import prompt from  './prompt'
import timer from  './timer'
import select from  './select'
import courier from './courier'
import postData from  './postData'

const rootReducer = combineReducers({
    posts,
    jySaleStatus,
    ctSaleTypes,
    TradingStatus,
    requestData,
    prompt,
    timer,
    select,
    courier,
    postData
});

export default rootReducer;