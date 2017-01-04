/**
 * Created by shitengteng on 2017/1/3.
 */
import {
    GET_DATA_START,
    GET_DATA_SUCCESS,
    TEST_DISPATCH
} from '../actions/actionsTypes'
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';


const init = Immutable.fromJS({})

export default createReducer(init,{
    [GET_DATA_START]:(state,action)=>state,
    [GET_DATA_SUCCESS]:(state,action)=>{
        action.success(action.json);
        state[action.name] = action.json;
        return state;
    },
    [TEST_DISPATCH]:(state,action)=>{
        return Object.assign({},state,action);
    }
})