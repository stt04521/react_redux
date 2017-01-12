/**
 * Created by shitengteng on 2017/1/5.
 */
import {
    SEND_DELETE_REQUEST,
    DELETE_DATA
} from './actionsTypes'

export const onSendDeleteRequest =(path,data,path2,data2)=>({
    type:SEND_DELETE_REQUEST,
    path,
    data,
    path2,
    data2
})

