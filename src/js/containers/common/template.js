/**
 * Created by Administrator on 2016/12/30.
 */
import pureRender from 'pure-render-decorator';
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';



const Main = mySeting =>{
    let seting = {
        id:'',//应用唯一id 表示
        url:'',//请求地址
        action:'',
        data:{},//发送给服务器的数据
        component: <div></div>//数据回调给的组件
    };

    for(let key in mySeting){
        seting[key] = mySeting[key];
    }


    @pureRender
    class Index extends  Component{
        static  defaultProps = { seting }
        constructor(props,context) {
            super(props,context);

        }
        render() {
            return <this.props.seting.component {...this.props} state={this.props.state.toJS()}/>;
        }
        componentDidMount() {//获取数据
            this.props.fetchPosts(this.props.seting.url,this.props.seting.data);
        }
        componentWillReceiveProps(nextProps) {
            //console.log(nextProps)
        }
        shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.state.get('isFetching')) {
                return false
            }
            return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
        }


    }

    return connect(state => { //将顶层组件与模版绑定后return回去，配置路由的时候用的就是和redux绑定的组件，所以其实每个路由匹配的都是同一个组件，只不过这个组件的内容不同
        let {producRecord, saleRecord,requestData} = state;
        return {
            state: state['fetchData'],
            producRecord ,
            saleRecord ,
            requestData ,
        }
    }, seting[action])(Index); //连接redux

}

export default Main;