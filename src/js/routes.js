import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
    Main,
  App,
  Home,
    GrabASingle,
    OrderDetails,//通用订单详情页
  NotFoundPage,
    Transfer,
    Customer,
    ShippingDetails,
    RemarksC
} from './containers'

export default (
  <Route path="/" component={App}>
      <IndexRoute component={Transfer} />
      <Route path="/index"  component={Main} >
          <IndexRoute component={Home}/>
          <Route path="GrabASingle" component={GrabASingle} />
            <Route path="Customer" component={Customer} />
      </Route>
      <Route path="ShippingDetails/:tid" component={ShippingDetails}/>
      <Route path="OrderDetails/:tid" component={OrderDetails}/>
      <Route path="RemarksC/:id" component={RemarksC}/>
          <Route path="*" component={NotFoundPage}/>

  </Route>
);