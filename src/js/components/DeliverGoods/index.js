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
    encodeUnicode=(str)=>{
        var res = [];
        for ( var i=0; i<str.length; i++ ) {
            res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
        }
        return "\\u" + res.join("\\u");
    }
    sumbit=()=>{
        let {select,courier}=this.props
        let list = select.items.filter((item,index)=>{
            return  item.checked==true
        }).map((i)=>{
            return i.subid
        })
        let string=''
        for(let i=0;i<list.length;i++){
            string+=list[i]+","
        }
        let data ={
            "tid":this.props.params.tid,
            "source":this.props.location.query.source,
            "send_type":courier.send_type,
            "online":courier.online,
            "logisticsname":courier.show.courierName,
            "courierCode":courier.show.courierCode,
            "courierNo":courier.Number,
            "oids":string,
            "userId":JSON.parse(sessionStorage.getItem('user')).id
        }


        const {actions} = this.props;
        actions.getDataStart('/order/save_send',data,'/index')

    }

    render(){
        let {state,actions,select,courier}=this.props
        let source = this.props.location.query.source;

        let title = source==2?"九阳商城":"农村淘宝";
        return(
            <div>
                <DeliverList  state={state} title={title}/>
                <SelectAll shopList={state.shopList} actions={actions} select={select}/>

                <Handover courier={courier} tid={state.tid} source={source}  actions={actions}/>
                <div className={styles.zw}></div>
                <button className={styles.delivery_b} onClick={this.sumbit}>
                    发货
                </button>
            </div>
        )
    }
}