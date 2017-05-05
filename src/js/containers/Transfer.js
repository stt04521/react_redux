/**
 * Created by shitengteng on 2016/12/21.
 */
import React,{ Component } from 'react';

import { connect } from 'react-redux';
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { bindActionCreators } from 'redux'
import * as Actions from 'app/actions'



 class Transfer extends Component {


     static contextTypes= {
         router: React.PropTypes.object.isRequired
     }
     getQueryString=(name)=>{
     //匹配任意字url 所传name后的= 具体参数
     let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
     //location.search 从当前URL的?号开始的字符串
     let  r = window.location.search.substr(1).match(reg);
     //unescape解码字符串
     if (r != null) return unescape(r[2]); return null;
     }
     replacePage=(href)=> {
         let page = this.getQueryString("page");
         let page_n = Number(page);

         switch (page_n) {
             case undefined:
                 this.replaceOnly({
                     pathname: "index"
                 })
                 break;
             case 1://扫码商品view

                 var goodsId = this.getQueryString("goodsId");

                 break;

             default:
                 this.skip('/index')
                 break;
         }
     }
     componentWillMount () {

     }
     componentDidMount () {
         let that = this;
         let href = location.href.split("#")[0];
         //用户同意授权 获取code
         //进入中转页面时 对微信进行配置
         let code = this.getQueryString("code");
         let openid=localStorage.getItem("openid")?localStorage.getItem("openid"):"";
        const {actions} = this.props
         // actions.onSendWechatRequest('/getJyAdver',{url:'111'},'/getCustomerInfo',{code:'111',openid:'ozoOtuMCsZe3Kjr8kweVI4l_rdJg'})
         actions.onSendWechatRequest('/getJyAdver',{url:href},'/getCustomerInfo',{code:code,openid:openid})
     }
     skip=(url,data)=>{
         this.context.router.push({
             pathname:url,
             query: data
         })
     }
    render() {
        const { children } =this.props;
        return <div></div>

    }
}

const mapStateToProps = state => ({
    posts: state.posts.toJS()
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transfer)