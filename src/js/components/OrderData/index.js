/**
 * Created by shitengteng on 2016/12/21.
 */

import React, { Component } from 'react'
import cs from '../../../images/TimeoutIcon_red.svg'
import sy from '../../../images/RemainingTime.svg'
import styles from './index.scss'
import moment from 'moment'
import {Link} from  'react-router'
import DeliveryButton from '../DeliveryButton'
import { WingBlank, WhiteSpace,Card,Flex,Button} from 'antd-mobile';



class Grab extends  Component{
    sure=()=>{
        const {actions,source,tid} = this.props;
        let {busiId,busiName,account,nickname}=JSON.parse(sessionStorage.getItem('user'))
        let data = {
            tid:tid,
            source:source,
            busiid:busiId,
            busiName:busiName,
            account:account,
            nickname:nickname
        }

        actions.onSendDeleteRequest('/changeorder/changOrder',data,'/changeorder/changeorderList',{},'grabASingleNum')
    }
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

                    <Flex.Item><div className="hor-center"><Button className="btn" onClick={this.sure}>快速抢单</Button></div></Flex.Item>

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
                status:status,
                Salestatus:data.status
            }
        })
    }
    componentDidMount() {
        const { actions,list,timer} = this.props
        // if(list[0].source==2){
        //     actions.onReceiveTimer(list)
        // }else {
        //     actions.onReceiveTaobao(list)
        // }


        // list.length>0&&list.forEach((item)=>{
        //     actions.onStart(timer.seconds,"true","s")
        // })
        // actions.onSendDeleteRequest('https://api.github.com/users',{id:"1111"})

            //
            // const { actions } = this.props
            // // actions.onRequestPosts('../../json/home.json')
            //  actions.getDataStart(`https://api.github.com/users`,{id:11111},function (data) {
            //    alert(data)
            //  },"stt")

    }


    render(){
        const {posts,timer,actions}= this.props;
        const {list,num,status} =this.props;
        let name = list[0].source==2?"九阳商城":"农村淘宝";
        let main =list[0].source==2?timer.items:timer.taobao;

        let txt = status=="fh"?"待发货":"待抢";
        return (
                <WingBlank>

                    <WhiteSpace size="lg" />
                    <p className={styles.orderTitle}>{name}剩余{num}单{txt}</p>
                    <WhiteSpace size="sm" />
                        {main&&main.map((item,index)=>{

                            let style = item.timeFlg=="true"?styles.am_card_1:styles.am_card_2;
                            let title =item.timeFlg=="true"?sy:cs;
                            let arr={
                                "fh":<DeliveryButton
                                    type='dd'
                                    data={item}
                                    actions={actions}
                                    index={index}
                                    tid={item.tid}
                                    source={item.source}
                                    status={item.status}
                                />,
                                "qd":<Grab
                                    tid={item.tid}
                                    detailAddr={item.detailAddr}
                                    actions={actions}
                                    source={item.source}
                                />,
                            }




                          return (
                              <div key={index}  >

                              <Card  >
                                <Card.Header
                                    title={item.timeFlg&&<span className={style} > {item.fhTime}</span>}
                                    thumb={item.timeFlg&&title}
                                />
                                <Card.Body>
                                    <div className="font-32" onClick={ev=>this.skip({tid:item.tid,source:item.source,status:item.status},status)}>
                                        {  item.shopList.map((tem, index)=> {

                                            return (
                                                <div key={index}>
                                                    {status=="fh"&&tem.subStatus=="WAIT_SELLER_SEND_GOODS"&&(<div><p  className={styles.sp}>{tem.title} </p><span className="fr"> X{tem.num}</span></div>)}
                                                    {status=="qd"&&(<div><p  className={styles.sp}>{tem.title} </p><span className="fr"> X{tem.num}</span></div>)}
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