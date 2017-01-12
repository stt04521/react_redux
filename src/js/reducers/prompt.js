/**
 * Created by shitengteng on 2017/1/3.
 */

import {
    OPEN_THE_WINDOW,
    CLOSE_THE_WINDOW
} from '../actions/actionsTypes'
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const init=Immutable.fromJS({flag:false,message:[]})

export default createReducer(init,{
    [OPEN_THE_WINDOW]:(state,action)=>state.merge({
        flag:true,
        message:action.message
    }),
    [CLOSE_THE_WINDOW]:(state,action)=>init
})