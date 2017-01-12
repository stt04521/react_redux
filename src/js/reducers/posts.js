/**
 * Created by shitengteng on 2017/1/2.
 */

import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    DELETE_DATA,
    SELECT_SUBREDDIT,
    SUCCESS_TO_LOISTICS,
    CHANGE_NOTES

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
    items: [],
    courier:[]
})


//首次渲染时获取数据
export const  posts= createReducer (init, {

        [REQUEST_POSTS]:(state,action)=>state.set('isFetching',false),

        [RECEIVE_POSTS]:(state,action)=>state.merge({
            isFetching: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        }),
        [SUCCESS_TO_LOISTICS]:(state,action)=>state.merge({
            isFetching: false,
            courier: action.posts,
            lastUpdated: action.receivedAt
        }),
        [CHANGE_NOTES]:(state,action)=>state.mergeDeep({
           items:state.get('items').map((item,index)=>{
               if(index==action.index){
                   return item.set('remark',action.value)
               }
               return item
           })
        }),
        [DELETE_DATA]:(state,action)=> {
       console.log(state.getIn(['items', action.source]))
            return     state.mergeDeep({
                items:state.get('items').mergeDeep({
                    [action.source]:state.getIn(['items', action.source]).filter((items, index)=>index!== action.index)})
            })


        }
    })

//根据action.subreddit 获取切换后的数据
