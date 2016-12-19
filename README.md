高清方案布局

 // flex模式
<script>!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);</script>
这是ant-design-mobile的高清方案布局代码，所谓高清方案就是根据设备屏幕的DPR（设备像素比，又称DPPX，比如dpr=2时，表示1个CSS像素由4个物理像素点组成） 动态设置 html 的font-size, 同时根据设备DPR调整页面的缩放值，进而达到高清效果。
有何优势?

引用简单，布局简便
根据设备屏幕的DPR,自动设置最合适的高清缩放。
保证了不同设备下视觉体验的一致性。
有效解决移动端真实1px问题
如何使用?

只需要把上面的js代码放到head里面就行了。
将你的效果图等比例缩放至640px宽，然后量取效果图上的元素尺寸，用rem做单位进行布局
比如某个元素宽35px，样式写为width: 0.35rem。
对于图片的尺寸，如果是全屏图片，请保证其样式拥有以下设置
.yourImg {
    display: block;
    width: 100%
}
本人心得，关于图片，比如640px宽度的效果图下，你量取某图片宽120px, 高80px, 它的样式应该是width: 1.2rem; height: 0.8rem 没问题，但是图片实际尺寸应该是此基础上的1.5倍，即图片应该宽180px, 高120px，这是因为现在很多设备的屏幕的DPR达到了3的水平。如此，图片在次屏幕上会“高清显示”。
本模板包含step-02用到的所有包，下面将介绍 额外 添加的包

react-router [必需]

React Router 一个针对 React 而设计的路由解决方案、可以友好的帮你解决 React components 到 URl 之间的同步映射关系。
推荐教程 React Router 使用教程
安装：npm install react-router --save
antd-mobile [强烈推荐]

antd的移动端版本
安装：npm install antd-mobile --save
rc-form [搭配antd-mobile必需]

antd-mobile 表单组件需要
安装：npm install rc-form --save-dev
babel-plugin-import [搭配antd-mobile必需]

Modular antd build plugin for babel，让antd-mobile 中模块组件的引入实现按需加载
安装：npm install babel-plugin-import --save-dev
postcss-pxtorem [antd-mobile高清方案需要]

顾名思义，就是将px转化为rem的小插件，实际生产中，我们完全可以直接写rem,这个小插件就是为antd-mobile 的样式服务的。
使用方法参照高清方案,另外特别指出，在此基础上还需在webpack.config.js上配置

{
    test: /\.css$/,
    include: /node_modules/,
    loader: 'style!css!postcss'
}
安装：npm install babel-plugin-antd --save-dev

#### [redux](https://github.com/reactjs/redux) [必需]
> Redux 是 JavsScript 状态容器，提供可预测化的状态管理  
  安装：`npm install redux --save`
  
---

#### [react-redux](https://github.com/reactjs/react-router) [强烈推荐]
> 一个官方推出的，强大的灵活的将Redux绑定到React上的脚手架。  
  安装：`npm install react-redux --save`
  
---

#### [redux-saga](https://github.com/yelouafi/redux-saga/) [强烈推荐]
> 一个替代[redux-thunk](https://github.com/gaearon/redux-thunk)更优雅的用于管理Redux异步操作的中间件  
  [redux-sage中文文档(繁体，同步)](https://neighborhood999.github.io/redux-saga/)  
  安装：`npm install redux-saga --save`
  
---

#### [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) [强烈推荐]
> Isomorphic WHATWG Fetch API, for Node & Browserify  
  安装：`npm install isomorphic-fetch --save`
  
---


#### [redux-logger](https://github.com/evgenyrodionov/redux-logger) [开发需要]
> 实时监控Redux的状态树的Store  
  打开浏览器调试F12，在 console 面板中可查看。  
  安装：`npm install redux-logger --save-dev`
  
---

#### [react-fastclick](https://github.com/JakeSidSmith/react-fastclick) [可选]
> 众所周知，移动设备屏幕的点击有300毫秒的延迟，这个库就是用来消除那300毫秒延迟的，从而  
获得更加灵敏的点击体验。
  安装：`npm install react-fastclick --save`
  
---
#### [humps](https://github.com/domchristie/humps) [推荐]
> 一个用来在字符串和对象键的驼峰写法的转换器。  
  安装：`npm install humps --save-dev`
  
---

#### [lodash](https://github.com/lodash/lodash) [推荐]
> 一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库  
  安装：`npm install lodash --save-dev`
  
---

#### [normalizr](https://github.com/paularmstrong/normalizr) [推荐]
> 按照一个规范化模式来嵌套JSON  
  安装：`npm install normalizr --save-dev`
  
---

#### [moment](https://github.com/moment/moment) [强烈推荐]
> 一个专门针对日期进行解析，操作，验证，展示的非常强大好用的JS库  
  安装：`npm install moment --save`
  
---

#### [iscroll](https://github.com/cubiq/iscroll/) [示例需要]
> 一个高性能，小体积，无依赖，跨平台的使页面平滑滚动的JS库  
  安装：`npm install iscroll --save-dev`
  
---

#### [react-iscroll](https://github.com/schovi/react-iscroll) [示例需要]
> 一个对 iscroll 进行封装的 React 组件  
  安装：`npm install react-iscroll --save-dev`
  
---


