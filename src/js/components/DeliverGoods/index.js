/**
 * Created by Administrator on 2016/12/26.
 */
import React,{ Component } from 'react'
import styles from './index.scss'
import { List,WingBlank, WhiteSpace,Flex,Button,InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import DeliverList from './DeliverList'
import SelectAll from './SelectAll'
import Handover from  './Handover'


export default class DeliverGoods extends Component {

    render(){
        let {state,courier}=this.props
        let source = this.props.location.query.source;
        console.log(source)
        let title = source==2?"九阳商城":"农村淘宝";
        return(
            <div>
                <DeliverList  state={state} title={title}/>
                <SelectAll shopList={state.shopList}/>

                <Handover courier={courier} tid={state.tid} source={source}/>
                <div className={styles.zw}></div>
                <button className={styles.delivery_b}>
                    发货
                </button>
            </div>
        )
    }
}