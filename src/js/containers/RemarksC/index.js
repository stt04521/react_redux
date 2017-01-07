/**
 * Created by shitengteng on 2016/12/28.
 */

import React, { Component } from 'react'
import {Remarks,Prompt} from 'app/components'
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import { bindActionCreators } from 'redux'
import * as Actions from 'app/actions'



 class  RemarksC extends Component{
    list=[
        {
            "subid":"子订单主键",
            "oid":"子订单编号",
            "title": "九阳Joyoung豆浆机D88SG",
            "remark":"备注"
        },
        {
            "subid":"子订单主键",
            "oid":"子订单编号",
            "title": "九阳Joyoung豆浆机D88SG",
            "remark":"备注"
        }
    ]
     shouldComponentUpdate(nextProps, nextState) {
         return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
     }

     render(){
        const {prompt} = this.props;
        return(
            <div>
                <Remarks list={this.list}  {...this.props}/>
                <Prompt prompt={prompt} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts.toJS(),
    prompt:state.prompt.toJS()
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemarksC)