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
    1:"仅退款",
    2:"退货退款",
    3:"补开发票",
    4:"补发配件/赠品",
    5:"快件追踪",
    6:"净水安装",
    7:"换货",
    8:"其他",

})


export const ctSaleTypes = createReducer (type,{})



const de = Immutable.fromJS({
    WAIT_BUYER_PAY:"等待买家付款",
    WAIT_SELLER_SEND_GOODS:"等待卖家发货",
    SELLER_CONSIGNED_PART:"卖家部分发货",
    WAIT_BUYER_CONFIRM_GOODS:"等待买家确认收货",
    TRADE_BUYER_SIGNED:"买家已签收__货到付款专用",
    TRADE_FINISHED:"交易成功",
    TRADE_CLOSED:"交易关闭",
    TRADE_CLOSED_BY_TAOBAO:"交易被淘宝关闭",
    TRADE_NO_CREATE_PAY:"没有创建外部交易__支付宝交易",
    WAIT_PRE_AUTH_CONFIRM:"余额宝0元购合约中",
    PAY_PENDING:" 外卡支付付款确认中",
    ALL_WAIT_PAY:"所有买家未付款的交易",
    ALL_CLOSED:"所有关闭的交易"
})

export const TradingStatus = createReducer (de,{})

