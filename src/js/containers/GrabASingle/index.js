/**
 * Created by shitengteng on 2016/12/23.
 */

import React,{ Component } from 'react'
import {Nav,NoData,OrderData} from '../../components'
import * as PostActions from 'app/actions/PostActions'
import { connect } from 'react-redux';
import pureRender from 'pure-render-decorator';
import { bindActionCreators } from 'redux'

@pureRender
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
        this.props.actions.onRequestPosts(`https://api.github.com/users`,{id:11111})
    }

    render() {

        const { taobaoNum, jiuyangNum, cuntaoList, jiuyangList } = this.state
        return (
            <div ref="box" className="box">
                {
                    cuntaoList&&<OrderData num ={taobaoNum}  list={jiuyangList } status="qd"/>

                }
                {
                    jiuyangList &&<OrderData num={jiuyangNum} list={cuntaoList} status="qd"/>

                }
                {
                    !jiuyangList && !cuntaoList &&  <NoData ntext="暂时没有单可抢"/>

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
)(GrabASingle)