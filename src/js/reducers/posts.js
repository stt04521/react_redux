/**
 * Created by shitengteng on 2017/1/2.
 */

import {
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/actionsTypes'
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';


const init = Immutable.fromJS({
    isFetching: false,
    items: []
})

//首次渲染时获取数据
export default createReducer (init, {

        [REQUEST_POSTS]:(state,action)=>state.set('isFetching',false),

        [RECEIVE_POSTS]:(state,action)=>state.merge({
            isFetching: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        })
    })


