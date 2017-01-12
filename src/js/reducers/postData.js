/**
 * Created by Administrator on 2017/1/9.
 */
import {
    POST_DATA_START,
    POST_DATA_SUCCESS,

} from '../actions/actionsTypes'
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';


const init = Immutable.fromJS({})

export default createReducer(init,{
    [POST_DATA_START]:(state,action)=>state,
    [POST_DATA_SUCCESS]:(state,action)=>{
        action.success(action.json);
        state[action.name] = action.json;
        return state;
    }
})