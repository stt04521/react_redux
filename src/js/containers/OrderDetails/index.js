/**
 * Created by Administrator on 2016/12/24.
 */
import React,{ Component } from 'react'
import {ODetails,Prompt} from '../../components'
import { connect } from 'react-redux';
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { bindActionCreators } from 'redux'
import * as Actions from 'app/actions'

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


      componentDidMount() {
          const { actions } = this.props
          let id = this.props.params.tid;
          let from = this.props.location.query.status
          let source = this.props.location.query.source
          if(from=="qd"){
              actions.onRequestPosts('http://192.168.0.112:8082/jymbms/changeorder/getchangOrderinfo',{tid:id,source:source})
          }else {
              actions.onRequestPosts('http://192.168.0.185:9991/jymbms/order/detail',{tid:id,source:source,userId:"111"})

          }
          //  actions.getDataStart(`https://api.github.com/users`,{id:11111},function (data) {
          //    alert(data)
          //  },"stt")
      }

    render(){
        const {actions,prompt} = this.props
        let from = this.props.location.query.status

        return(
        <div>
            <ODetails
                state={this.props.posts.items}
                from={from}
                {...this.props}
                TradingStatus={this.props.TradingStatus}/>
            <Prompt prompt={prompt} />
        </div>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.toJS(),
    TradingStatus:state.TradingStatus.toJS(),
    prompt:state.prompt.toJS()
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetails)