/**
 * Created by shitengteng on 2016/12/21.
 */

import React, { Component } from 'react'
import cs from '../../../images/超时时间图标_red.svg'
import sy from '../../../images/剩余发货时间图标.svg'
import styles from './index.scss'
import moment from 'moment'
import {Link} from  'react-router'
import DeliveryButton from '../DeliveryButton'
import { WingBlank, WhiteSpace,Card,Flex,Button} from 'antd-mobile';



class Grab extends  Component{
    render(){
        const  {detailAddr}=this.props;
        return(
            <div>

                    <Flex align="start" >
                        <div className="font-32">
                            <span className={styles.w4}>收货地址 :</span>

                        </div>
                       <div className="font-32">
                           <span className="color333">{detailAddr}</span>
                       </div>

                    </Flex>
                <WhiteSpace size="lg" />
                <Flex>

                    <Flex.Item><div className="hor-center"><Button className="btn">快速抢单</Button></div></Flex.Item>

                </Flex>
                <WhiteSpace size="lg" />
            </div>
        )
    }
}



export default class OrderData extends Component {
    static contextTypes= {
        router: React.PropTypes.object.isRequired
    }

    constructor(props,context) {
        super(props,context);
        this.context.router;
    }
    skip=(data,status)=>{
        this.context.router.push({
            pathname:`/OrderDetails/${data.tid}`,
            query: {
                source:data.source,
                status:status
            }
        })
    }
    componentDidMount() {
        const { actions,list,timer} = this.props
        list&&list.forEach((item)=>{
            actions.onStart(timer.seconds,"true","s")
        })

    }
    componentWillUnmount() {
        const {actions} = this.props
        actions.onStop()
    }
    render(){
        const {posts,timer,actions}= this.props;
        const {list,num,status} =this.props;
        let name = list[0].source==2?"九阳商城":"农村淘宝";
        let txt = status=="fh"?"待发货":"待抢"


        return (
                <WingBlank>

                    <WhiteSpace size="lg" />
                    <p className={styles.orderTitle}>{name}剩余{num}单{txt}</p>
                    <WhiteSpace size="sm" />
                        {list&&list.map((item,index)=>{

                            let style = item.time_flg=="true"?styles.am_card_1:styles.am_card_2;
                            let title =item.time_flg=="true"?sy:cs;
                            let arr={
                                "fh":<DeliveryButton type='dd' data={item}/>,
                                "qd":<Grab detailAddr={item.detailAddr}/>,
                            }


                          return (
                              <div key={index}  >

                              <Card  >
                                <Card.Header
                                    title={<span className={style} > {moment(timer.seconds*1000).subtract(8, 'hours').format("HH:mm:ss")}</span>}
                                    thumb={title}
                                />
                                <Card.Body>
                                    <div className="font-32" onClick={ev=>this.skip({tid:item.tid,source:item.source},status)}>
                                        {  item.shopList.map((tem, index)=> {
                                            return (
                                                <div key={index}>
                                                    <p  className={styles.sp}>{tem.title} </p><span className="fr"> X{tem.num}</span>
                                                </div>

                                            )
                                        })
                                        }
                                    </div>
                                </Card.Body>
                                <Card.Footer content={
                                    arr[status]
                                }  />
                            </Card>

                          <WhiteSpace size="lg" />

                              </div>
                          )
                        })}

                    <WhiteSpace size="lg" />

                </WingBlank>

        )
        
    }
    
}