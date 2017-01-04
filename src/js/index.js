
import React from 'react'
import Immutable from 'immutable';
import { AppContainer } from 'react-hot-loader'
// import 'react-fastclick'  // 这个需要放到react下方才行
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import rootSage from './sagas'



const RedBox = require('redbox-react').default;
const rootEl = document.getElementById('app');

// const jySaleStatus={
//   NO_REFUND:"无退款",
//   WAIT_SELLER_AGREE:"买家已经申请退款",
//   SELLER_REFUSE_BUYER:"卖家拒绝退款",
//   WAIT_BUYER_RETURN_GOODS:"卖家已经同意退款",
//   WAIT_SELLER_CONFIRM_GOODS:"买家已经退货",
//   WAIT_SELLER_SEND_GOODS:"等待买家退货",
//   CLOSED:"退款关闭",
//   SUCCESS:"退款成功"
// }
//
// const ctSaleTypes={
//   1:"仅退款",
//   2:"退货退款",
//   3:"补开发票",
//   4:"补发配件/赠品",
//   5:"快件追踪",
//   6:"净水安装",
//   7:"换货",
//   8:"其他",
//
// }
// const initialState = Immutable.fromJS({
//   SaleStatus:jySaleStatus,SaleTypes:ctSaleTypes
// });

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSage)

try {
  render(
    <AppContainer>
      <Root store={store} history={browserHistory} />
    </AppContainer>,
    rootEl
  )
} catch (e) {
  render(
    <RedBox error={e}>
      <AppContainer>
        <Root store={store} history={browserHistory} />
      </AppContainer>
    </RedBox>,
    rootEl
  )
}

if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
      // Log the error as normally
      orgError.apply(console, [message]);
    }
  };
  module.hot.accept('./containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./containers/Root').default;
    try {
      render(
        <AppContainer>
          <NextApp history={browserHistory} />
        </AppContainer>,
        rootEl
      )
    } catch (e) {
      render(
        <RedBox error={e}>
          <AppContainer>
            <NextApp history={browserHistory} />
          </AppContainer>
        </RedBox>,
        rootEl
      )
    }
  });
}