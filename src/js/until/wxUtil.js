/**
 * Created by shitengteng on 2017/1/12.
 */
let React = require('react')

let  WxUtil ={
    debug:false,
    useWxJs:function () {
        let res= JSON.parse(sessionStorage.getItem("adver"));
        wx.config({
            debug : true,
            appId :res.appId,
            timestamp : res.timestamp,
            nonceStr : res.nonceStr,
            signature : res.signature,
            //所调用的微信接口
            jsApiList : [ 'checkJsApi', 'addCard', 'getLocation',
                'onMenuShareTimeline', 'onMenuShareAppMessage',
                'hideMenuItems','chooseImage','uploadImage']
        });
    },
    hideMenuItems:function () {
        this.useWxJs();
        // wx.ready(function() {
        wx.hideMenuItems({
            // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
            menuList : [ "menuItem:share:qq", "menuItem:share:weiboApp",
                "menuItem:share:facebook", "menuItem:favorite",
                "menuItem:share:QZone", "menuItem:favorite",
                "menuItem:copyUrl", "menuItem:openWithQQBrowser",
                "menuItem:openWithSafari", "menuItem:share:email","chooseWXPay" ]
        });
        // });
    }
}
export default WxUtil