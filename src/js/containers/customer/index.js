/**
 * Created by shitengteng on 2016/12/23.
 */


import React,{ Component } from 'react'
import {Nav,NoData,OrderData,CustomerList} from '../../components'
import * as PostActions from 'app/actions/PostActions'
import { connect } from 'react-redux';
import pureRender from 'pure-render-decorator';
import { bindActionCreators } from 'redux'
import { is, fromJS} from 'immutable';


@pureRender
class Customer extends Component {
state={
    "taobaoNum":1,
    "jiuyangNum":1,
    "cuntaoList":[
        {
            "source":"1",
            "type":"3",
            "shopList":[
                {
                    "title":"九阳Joyoung豆浆机D88SG",
                    "num":2
                },
                {
                    "title":"九阳Joyoung豆浆机D88SG",
                    "num":2
                }
            ]
        }
    ],
    "jiuyangList":[{
        "source":"2",
        "type":"1",
        "SaleStatus":"WAIT_BUYER_RETURN_GOODS",
        "shopList":[
            {
                "title":"九阳Joyoung豆浆机D88SG",
                "num":2
            },
            {
                "title":"九阳Joyoung豆浆机D88SG",
                "num":2
            }
        ]
    }]
}

jySaleStatus={
    NO_REFUND:"无退款",
    WAIT_SELLER_AGREE:"买家已经申请退款",
    SELLER_REFUSE_BUYER:"卖家拒绝退款",
    WAIT_BUYER_RETURN_GOODS:"卖家已经同意退款",
    WAIT_SELLER_CONFIRM_GOODS:"买家已经退货",
    WAIT_SELLER_SEND_GOODS:"等待买家退货",
    CLOSED:"退款关闭",
    SUCCESS:"退款成功"
}

ctSaleTypes={
    1:"仅退款",
    2:"退货退款",
    3:"补开发票",
    4:"补发配件/赠品",
    5:"快件追踪",
    6:"净水安装",
    7:"换货",
    8:"其他",

}


    componentDidMount() {
    this.props.actions.onRequestPosts(`https://api.github.com/users`,{id:11111})

    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    // }

render() {

    const { taobaoNum, jiuyangNum, cuntaoList, jiuyangList } = this.state;

    return (
        <div ref="box" className="box">
            {
                cuntaoList&&<CustomerList num ={taobaoNum}  list={jiuyangList } jySaleStatus={this.jySaleStatus} />

            }
            {
                jiuyangList &&<CustomerList num={jiuyangNum} list={cuntaoList}  ctSaleTypes={this.ctSaleTypes}/>

            }
            {
                !jiuyangList && !cuntaoList &&  <NoData ntext="暂时没有售后的订单"/>

            }

        </div>
    )
}
}


const mapStateToProps = state => ({
    state: state.posts
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PostActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customer)
