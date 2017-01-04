/**
 * Created by shitengteng on 2016/12/28.
 */

import React, { Component } from 'react'
import {Remarks,Prompt} from '../../components'
import { connect } from 'react-redux';
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { bindActionCreators } from 'redux'
import * as PostActions from 'app/actions/PostActions'
import * as PromptActions from 'app/actions/PromptActions'


@pureRender
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


     render(){

        return(
            <div>
                <Remarks list={this.list}/>
                <Prompt />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    state: state.posts
})

const mapDispatchToProps = dispatch => ({
    Post: bindActionCreators(PostActions, dispatch),
    Prompt:bindActionCreators(PromptActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemarksC)