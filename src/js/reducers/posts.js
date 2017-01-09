/**
 * Created by shitengteng on 2017/1/2.
 */

import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    DELETE_DATA,
    SELECT_SUBREDDIT
} from '../actions/actionsTypes'
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';



const defalut = 'reactjs'


//切换所需数据
export const  selectedsubreddit =createReducer (defalut,{
         [SELECT_SUBREDDIT]:(state,action)=>action.subreddit

    })


const init = Immutable.fromJS({
    isFetching: false,
    items: []
})


//首次渲染时获取数据
export const  posts= createReducer (init, {

        [REQUEST_POSTS]:(state,action)=>state.set('isFetching',false),

        [RECEIVE_POSTS]:(state,action)=>state.merge({
            isFetching: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        }),

        [DELETE_DATA]:(state,action)=>{
            return state.mergeDeep({
                items:state.getIn('items',action.source).map(item=>{
                    if(item.id!=action.id){
                        return item
                    }
                    }
                )
            })
        }
    })

//根据action.subreddit 获取切换后的数据

