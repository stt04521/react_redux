/**
 * Created by shitengteng on 2017/1/4.
 */


import { START, STOP, RESET, TIMER} from '../actions/actionsTypes'
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const init = Immutable.fromJS({
    seconds: 4,
    status: 'Stopped'
})

export default createReducer(init,{
    [START]:(state,action)=>state.merge({
        status: 'Running',
        seconds:action.seconds?action.seconds: state.get('seconds'),
        flag:action.flag,
        name:action.name
    }),
    [STOP]:(state,action)=>state.merge({
        status: 'Stopped',
        seconds:state.get('seconds'),
    }),
    [RESET]:(state,action)=>state.merge({
        flag:state.get('seconds')==0?false:state.get('flag')
    }),
    [TIMER]:(state,action)=>state.mergeDeep({
        seconds:state.get('flag')?(state.get('seconds') - 1):(state.get('seconds') + 1)
    })
})