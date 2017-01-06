/**
 * Created by shitengteng on 2017/1/5.
 */


import {
    CHECK_ALL,
    SELECT_CANCEL,
    CANCEL_THE_RADIO,
    SELECT_THE_RADIO
} from './actionsTypes'

export  const onCheckAll =()=>({
  type:CHECK_ALL
})
export  const onSelectCancel =()=>({
    type:SELECT_CANCEL
})
export  const onCancelRadio =()=>({
    type: CANCEL_THE_RADIO
})
export  const onSelectRadio =()=>({
    type: SELECT_THE_RADIO
})