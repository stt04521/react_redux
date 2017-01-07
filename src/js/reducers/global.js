/**
 * Created by shitengteng on 2017/1/3.
 */
import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable';

const init=Immutable.fromJS({
    NO_REFUND:"无退款",
    WAIT_SELLER_AGREE:"买家已经申请退款",
    SELLER_REFUSE_BUYER:"卖家拒绝退款",
    WAIT_BUYER_RETURN_GOODS:"卖家已经同意退款",
    WAIT_SELLER_CONFIRM_GOODS:"买家已经退货",
    WAIT_SELLER_SEND_GOODS:"等待买家退货",
    CLOSED:"退款关闭",
    SUCCESS:"退款成功"
})
export const jySaleStatus = createReducer (init,{});

const type=Immutable.fromJS({
    "1":"仅退款",
    "2":"退货退款",
    "3":"补开发票",
    "4":"补发配件/赠品",
    "5":"快件追踪",
    "6":"净水安装",
    "7":"换货",
    "8":"其他",

})


export const ctSaleTypes = createReducer (type,{})