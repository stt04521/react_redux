import React, {Component, PropTypes} from 'react';
import {Nav,NoData,OrderData} from '../components'
import { connect } from 'react-redux';
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { bindActionCreators } from 'redux'
import * as Actions from 'app/actions'


@pureRender
class Home extends Component {
  state =
  {
    "taobaoNum":2,
    "jiuyangNum":2,
    "cuntaoList":[
      {
        "source":"1",
        "id":"001",
        "time_flg":"true",
        "timer":"11:00:00",
        "tid":"JY20160723215303180934144",
        "shopList":[
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          },
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          }
        ]
      },
      {
        "id":"001",
        "source":"1",
        "time_flg":"true",
        "timer":"11:00:00",
        "tid":"JY20160723215303180934144",
        "shopList":[
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          },
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          }
        ]
      }
    ],
    "jiuyangList":[
      {
        "id":"001",
        "source":"2",
        "time_flg":"true",
        "timer":"11:00:00",
        "tid":"JY20160723215303180934144",
        "shopList":[
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          },
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          }
        ]
      },
      {
        "id":"001",
        "source":"2",
        "time_flg":"true",
        "timer":"11:00:00",
        "tid":"JY20160723215303180934144",
        "shopList":[
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          },
          {
            "oid":"001",
            "title":"九阳Joyoung豆浆机D88SG",
            "num":2,
            "price":1100
          }
        ]
      }
    ]
  }


  componentDidMount() {
    const { actions } = this.props
   actions.onRequestPosts(`https://api.github.com/users`,{id:11111})
    // this.props.getData.getDataStart(`https://api.github.com/users`,{id:11111},function (data) {
    //   alert(data)
    // },"stt")
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  // }



  render() {
  // console.log(this.getDate())
    const { taobaoNum, jiuyangNum, cuntaoList, jiuyangList } = this.state
    return (
        <div ref="box" className="box">
          {
            cuntaoList&&<OrderData num ={taobaoNum}  list={jiuyangList } status="fh"/>

          }
          {
            jiuyangList &&<OrderData num={jiuyangNum} list={cuntaoList} status="fh"/>

          }
          {
            !jiuyangList && !cuntaoList &&  <NoData ntext="暂时没有待发货的订单"/>

          }

        </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
