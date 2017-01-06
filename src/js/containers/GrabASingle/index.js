/**
 * Created by shitengteng on 2016/12/23.
 */

import React,{ Component } from 'react'
import {Nav,NoData,OrderData} from '../../components'
import * as Actions from 'app/actions'
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import pureRender from 'pure-render-decorator';
import { bindActionCreators } from 'redux'

class GrabASingle extends Component {
    state =
    {
        "taobaoNum":1,
        "jiuyangNum":1,
        "cuntaoList":[
            {
                "id":"001",
                "time_flg":"true",
                "source":"2",
                "timer":"11:00:00",
                "tid":"JY20160723215303180934144",
                "detailAddr":"收货城市",
                "shopList":[
                    {
                        "title":"九阳Joyoung豆浆机D88SG",
                        "num":2
                    }
                ]
            }
        ],
        "jiuyangList":[
            {
                "id":"001",
                "time_flg":"true",
                "source":"2",
                "timer":"11:00:00",
                "tid":"JY20160723215303180934144",
                "detailAddr":"收货城市",
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
        ]
    }



    componentDidMount() {
        const { actions } = this.props
        actions.onRequestPosts(`https://api.github.com/users`,{id:11111})
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    // }
    render() {

        const { taobaoNum, jiuyangNum, cuntaoList, jiuyangList } = this.state
        return (
            <div ref="box" className="box">
                {
                    cuntaoList&&<OrderData num ={taobaoNum}  list={jiuyangList } status="qd" {...this.props}/>

                }
                {
                    jiuyangList &&<OrderData num={jiuyangNum} list={cuntaoList} status="qd" {...this.props}/>

                }
                {
                    !jiuyangList && !cuntaoList &&  <NoData ntext="暂时没有单可抢"/>

                }

            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.toJS(),
    timer:state.timer.toJS()
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GrabASingle)