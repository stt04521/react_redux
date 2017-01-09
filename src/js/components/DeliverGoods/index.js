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
    componentDidMount() {

     const   courier= [{
            "courierName":"圆通",
            "courierCode":"物流公司编码"
        },{
            "courierName":"顺丰",
            "courierCode":"物流公司编码"
        },{
            "courierName":"物流公司名称",
            "courierCode":"物流公司编码"
        },{
            "courierName":"物流公司名称",
            "courierCode":"物流公司编码"
        },{
            "courierName":"物流公司名称",
            "courierCode":"物流公司编码"
        },{
            "courierName":"物流公司名称",
            "courierCode":"物流公司编码"
        }
        ]
        const {actions} = this.props;

        actions.onReceiveLogistics(courier)
    }
    sumbit=()=>{
        let {select,courier}=this.props
        let list = select.items.filter((item,index)=>{
            return  item.checked==true
        }).map((i)=>{
            return i.oid
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
            "oids":string
        }
        console.log(data)

        const {actions} = this.props;
        actions.getDataStart(`https://api.github.com/users`,{id:11111},function (data) {

             },"stt")

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