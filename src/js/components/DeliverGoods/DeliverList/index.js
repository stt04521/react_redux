/**
 * Created by shitengteng on 2016/12/26.
 */

import React,{ Component } from 'react'
import styles from './index.scss'
import { List,WingBlank, WhiteSpace,Flex,Button} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class DeliverList extends Component {
    render(){
        const  {state,title}=this.props;
        const  {
                tid,
                payTime,
                payableAmt,
                recvGoName,
                detailAddr,
                recvMobile,
                buyerMessage
                }=state
        return(
            <div className="Details">

                <List  className="my-list">
                    <WhiteSpace size="lg" />
                    <Item extra="订单平台 :" multipleLine align="top" wrap>
                        {title}
                    </Item>
                    <Item extra="订单编号 :" multipleLine align="top" wrap>
                        {tid}
                    </Item>
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
            </div>
        )
    }
}