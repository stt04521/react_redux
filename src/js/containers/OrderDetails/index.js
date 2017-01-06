/**
 * Created by Administrator on 2016/12/24.
 */
import React,{ Component } from 'react'
import {ODetails} from '../../components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as Actions from 'app/actions'
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';


  class OrderDetails extends  Component{
      state={
          "id": "001",
          "tid": "JY20160723215303180934144",
          "status":"WAIT_SELLER_SEND_GOODS",
          "payTime": "2016-08-05 11:00:00",
          "payableAmt":"2200.00",
          "recvGoName":"收货人姓名",
          "detailAddr":"收货地址",
          "recvMobile":"收货人电话",
          "buyerMessage":"买家留言",
          "shopList": [
              {
                  "oid": "001",
                  "title": "九阳Joyoung豆浆机D88SG",
                  "num": 2,
                  "price": 1100.00
              },
              {
                  "oid": "001",
                  "title": "九阳Joyoung豆浆机D88SG",
                  "num": 2,
                  "price": 1100.00
              }
          ]
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

      componentDidMount() {
          const { actions } = this.props
          //触发获取数据的动作
          actions.onRequestPosts(`https://api.github.com/users`,{id:11111})
          // this.props.getData.getDataStart(`https://api.github.com/users`,{id:11111},function (data) {
          //   alert(data)
          // },"stt")
      }
    render(){
        let from = this.props.location.query.status

        return(

            <ODetails
                state={this.props.posts}
                from={from}
                {...this.props}
                jySaleStatus={this.props.jySaleStatus}/>
        )
    }
}

//获取状态树上的数据
const mapStateToProps = state => ({
    posts: state.posts.toJS(),
    jySaleStatus:state.jySaleStatus.toJS()
})

//获取动作对象
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetails)
