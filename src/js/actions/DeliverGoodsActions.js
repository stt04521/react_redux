/**
 * Created by shitengteng on 2017/1/5.
 */


import {
    CHECK_ALL,
    SELECT_THE_RADIO,
    SELECT_RECEIVE_DATA,
    SELECT_LOGISTICS_COMPANY,
    LOGISTICS_RECEIVE_DATA,
    NUMBER_OF_LOGISTICS,
    REDUCTION_SELECTION,
    MAIL_FROM_MENTIONING,
    CONTACT_INFORMATION
} from './actionsTypes'

//selectAll
export  const onReceiveCheck=(json)=>({
    type:SELECT_RECEIVE_DATA,
    json
})


export  const onCheckAll =(flag)=>({
  type:CHECK_ALL,
    flag
})

export  const onSelectRadio =(id,flag)=>({
    type: SELECT_THE_RADIO,
    id,
    flag
})

//logistics
export  const  onrestLogistics=()=>({
    type:REDUCTION_SELECTION
})


export  const onReceiveLogistics=(json)=>({
    type:LOGISTICS_RECEIVE_DATA,
    json
})
export  const onSelectLogistics =(index)=>({
    type: SELECT_LOGISTICS_COMPANY,
    index,
})
export  const onNumberofLogistics=(value)=>({
    type: NUMBER_OF_LOGISTICS,
    value
})

export const onMainFromMentioning=(mail)=>({
    type:MAIL_FROM_MENTIONING,
    mail
})
export const onContactInformation=(type)=>({
    type:CONTACT_INFORMATION,
    type
})

