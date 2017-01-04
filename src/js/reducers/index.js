
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
import posts from './posts'
import {jySaleStatus,ctSaleTypes} from  './global'
import requestData from './requestData'
import prompt from  './prompt'

const rootReducer = combineReducers({
    posts,
    jySaleStatus,
    ctSaleTypes,
    requestData,
    prompt
});

export default rootReducer;