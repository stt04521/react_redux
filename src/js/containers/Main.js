/**
 * Created by Administrator on 2016/12/21.
 */
/**
 * Created by shitengteng on 2016/12/21.
 */
import React,{ Component } from 'react';
import {Nav} from '../components'
import { connect } from 'react-redux';
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { bindActionCreators } from 'redux'
import * as Actions from 'app/actions'

class Main extends Component {
    render() {
        const { children,orderNum,actions} =this.props;
        return (<div>
            { children}
            <Nav orderNum={orderNum} actions={actions}/>
        </div>)




    }
}

const mapStateToProps = state => ({
    orderNum: state.orderNum.toJS()
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)