/**
 * Created by shitengteng on 2016/12/21.
 */

import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './index.scss'
import { WingBlank, WhiteSpace,Card,Flex} from 'antd-mobile';

class Grab extends  Component{
    render(){
        const  {saleStatus,saleType}=this.props;
        let  txt = saleStatus?"退款类型":"售后类型"
        return(
            <div>

                <Flex align="start" >
                    <div className="font-32">
                        <span  className={styles.w4}>{txt} :</span>

                    </div>
                    <div className="font-32">
                        <span className="color333">{saleType}</span>
                    </div>

                </Flex>

                {saleStatus && <Flex align="start" >
                    <div className="font-32">
                        <span className={styles.w4}>售后状态 :</span>

                    </div>
                    <div className="font-32">
                        <span className="color333">{saleStatus}</span>
                    </div>

                </Flex>}

                <WhiteSpace size="lg" />
            </div>
        )
    }
}



export default class CustomerList extends Component {

    render(){
        const {list,num,jySaleStatus,ctSaleTypes} =this.props;
        let name = list[0].source=="2"?"九阳商城":"农村淘宝";
        let JYtype={"1":"仅退款","2":"退货退款"}

        return (
            <WingBlank>

                    <WhiteSpace size="lg" />
                    <p className={styles.orderTitle}>{name}待处理{num}单售后</p>
                    <WhiteSpace size="sm" />
                    {list&&list.map((item,index)=>{
                        console.log(item.SaleStatus)
                        let saleStatus = item.SaleStatus?jySaleStatus[item.SaleStatus]:""

                        let saleType = item.SaleStatus?(JYtype[item.type]):(ctSaleTypes[item.type])

                        return (
                            <div key={index}>
                                <Card  >
                                    <Card.Body>
                                        <div className="font-32">
                                            {  item.shopList.map((tem, index)=> {
                                                return (
                                                    <div key={index}>
                                                        <p  className={classnames({[styles.w5]:true,textoverflow2:true})} >{tem.title} </p>
                                                    </div>

                                                )
                                            })
                                            }
                                        </div>
                                    </Card.Body>
                                    <Card.Footer content={
                                        <Grab type={item.type}  saleStatus={saleStatus} saleType={saleType}/>
                                    }  />
                                </Card>

                                <WhiteSpace size="lg" />

                            </div>
                        )
                    })}

                    <WhiteSpace size="lg" />
                {
                    list[0].source=='1'&&<p className={styles.orderFooter}>具体的售后操作请在后台用电脑操作</p>
                }
            </WingBlank>

        )

    }

}