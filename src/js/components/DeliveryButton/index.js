/**
 * Created by shitengteng on 2016/12/26.
 */
import React,{ Component } from 'react'
import {browserHistory} from 'react-router'
import {Modal,WhiteSpace,Flex,Button} from 'antd-mobile';

const alert = Modal.alert;

export default class DeliveryButton extends  Component{
    static contextTypes= {
        router: React.PropTypes.object.isRequired
    }

    constructor(props,context) {
        super(props,context);
        this.context.router;
    }
    skip=(url,data)=>{
        this.context.router.push({
            pathname:url,
            query: data
        })
    }
    sure=()=>{
        const {type,actions}=this.props;

        const that=this;
        if(type=="dd"){

            const {actions,index,source,id} = this.props;


            actions.onSendDeleteRequest('http://192.168.0.185:9991/jymbms/order/save_change_order',{tid:id,source:source,userId:111
            },'http://192.168.0.185:9991/jymbms/order/list',{busiid:"8518800100000000006"})

        }else {
            const {tid,source} = this.props.data;

            actions.getDataStart('http://192.168.0.185:9991/jymbms/order/save_change_order',{from:"xq",tid:tid,source:source,userId:111
            },'/index')
        }

    }
    render(){
        //type 判断 首页还是详情 位置
        let {type,data,actions,index,status}=this.props;
        let Size = type=="dd"?"font-28":"font-32";
        let buttons;
        if(status=='SELLER_CONSIGNED_PART'){
            buttons=<Button className={`btn ${Size}`} style={{backgroundColor:"#ddd"}}>申请改派</Button>
        }else {

            buttons= <Button className={`btn ${Size}`}
                             onClick={() => alert("",'确定要将该订单申请改派?', [
                                 { text: '确认', onPress: () =>{this.sure()}, style: {color:'#EF863C'} },
                                 { text: '放弃', onPress: () => console.log('ok'), style: {color:'black'} },
                             ])}
            >申请改派</Button>
        }



        return(
            <div >
                <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item>
                        <Button
                            className={`btn ${Size}`}
                            onClick={
                                ev=> {
                                    this.skip(
                                        `/RemarksC/${data.tid}`,
                                        data
                                    )
                                }
                            }
                        >备注</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <div className="hor-center">
                            {buttons}
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <Button
                            className={`btn ${Size}`}
                                onClick={
                            ev=>{this.skip(
                                `/ShippingDetails/${data.tid}`,
                                 data
                            )}
                        }>发货</Button>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
            </div>

        )
    }
}