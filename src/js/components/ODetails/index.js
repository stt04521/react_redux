/**
 * Created by shitengteng on 2016/12/24.
 */
import React,{ Component } from 'react'
import styles from './index.scss'
import { List,WingBlank, WhiteSpace} from 'antd-mobile';
import DeliveryButton from '../DeliveryButton'

const Item = List.Item;
const Brief = Item.Brief;

export default class ODetails extends Component {
    sure=(tid,source)=>{
        const {actions} = this.props;
        let {busiId,id,busiName,account,nickname}=JSON.parse(sessionStorage.getItem('user'))
        let data = {
            tid:tid,
            source:source,
            busiid:busiId,
            busiName:busiName,
            account:account,
            nickname:nickname
        }

        actions.getDataStart('/changeorder/changOrder',data,'GrabASingle')
    }



    render(){

        let {state,TradingStatus,from,actions}=this.props;
        let {
                tid,
                status,
                payTime,
                payableAmt,
                recvGoName,
                detailAddr,
                recvMobile,
                buyerMessage,
                 shopList,
             }=state
         let {source,Salestatus}= this.props.location.query;

         let title = source==2?"九阳商城":"农村淘宝";
         let id = this.props.params.tid;
         let txt = from=="fh"?"待发货":"待抢";
         let result = TradingStatus[status]
         let arr ={
             "fh":<DeliveryButton
                 type="xq"
                 data={{"tid":id,"source":source}}
                 actions={actions}
                 status={Salestatus}
             />,
             "qd": (<button className={styles.fh_foot} onClick={ev=>this.sure(tid,source)} >快速抢单</button>)
         }

            return(
                <div className="Details">
                    <List renderHeader={() => <span className={styles.D_title}>{title}{txt}详情</span>} className="my-list">
                        <Item data-seed="logId">订单信息</Item>
                        <Item extra="订单编号 :" multipleLine align="top" wrap>
                            {tid}
                        </Item>
                        <Item extra="交易状态 :" multipleLine align="top" wrap>
                            {result}
                        </Item>
                        <Item extra="付款时间 :" multipleLine align="top" wrap>
                            {payTime||" "}
                        </Item>
                        <Item extra="实付金额 :" multipleLine align="top" wrap>
                            {payableAmt}
                        </Item>

                        <WhiteSpace size="lg" />
                    </List>
                    <WhiteSpace size="lg" />
                    <List  className="my-list">
                        <Item data-seed="logId">买家信息</Item>
                        <Item extra="收货姓名 :" multipleLine align="top" wrap>
                            {recvGoName}
                        </Item>
                        <Item extra="收货地址 :" multipleLine align="top" wrap>
                            {detailAddr}
                        </Item>
                        <Item extra="收货电话 :" multipleLine align="top" wrap>
                            {recvMobile}
                        </Item>
                        <Item extra="买家留言 :" multipleLine align="top" wrap>
                            {buyerMessage||" "}
                        </Item>

                        <WhiteSpace size="lg" />
                    </List>
                    <WhiteSpace size="lg" />
                    <List  className="my-list">
                        <Item data-seed="logId">商品信息</Item>
                        {
                            shopList&&shopList.map((item,index)=>{
                         return    (   <div key={index}>
                                    <Item extra="商品名称 :" multipleLine align="top" wrap>
                                        <p className="textoverflow2">{item.title}</p>
                                    </Item>
                                    <Item extra="商品数量 :" multipleLine align="top" wrap>
                                        {item.num}
                                    </Item>

                                </div>
                         )
                            })

                        }


                        <WhiteSpace size="lg" />
                    </List>
                    <div className={styles.root_d}>
                        { arr[from]}
                    </div>

                </div>
            )
    }
}