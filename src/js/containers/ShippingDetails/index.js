/**
 * Created by shitengteng on 2016/12/26.
 */

import React,{ Component } from 'react'
import {DeliverGoods} from '../../components'


class ShippingDetails extends Component{
    state={
        "id": "001",
        "tid": "JY20160723215303180934144",
        "status":"WAIT_SELLER_SEND_GOODS",
        "payTime": "2016-08-05 11:00:00",
        "payableAmt":"2200.00",
        "recvGoName":"收货人姓名",
        "detailAddr":"收货地址",
        "recvMobile":"收货人电话",
        "buyerMessage":"买家留言",
        "shopList": [
            {
                "oid": "001",
                "title": "九阳Joyoung豆浆机D88SG",
                "num": 2,
                "price": 1100.00,
                "checked":false,
            },
            {
                "oid": "001",
                "title": "九阳Joyoung豆浆机D88G",
                "num": 2,
                "price": 1100.00,
                "checked":false,
            }
        ]
    }
    courier= [{
        "courierName":"物流公司名称",
        "courierCode":"物流公司编码"
    },{
        "courierName":"物流公司名称",
        "courierCode":"物流公司编码"
    },{
        "courierName":"物流公司名称",
        "courierCode":"物流公司编码"
    },{
        "courierName":"物流公司名称",
        "courierCode":"物流公司编码"
    },{
        "courierName":"物流公司名称",
        "courierCode":"物流公司编码"
    },{
        "courierName":"物流公司名称",
        "courierCode":"物流公司编码"
    }
    ]


    render(){
      return(
          <DeliverGoods state={this.state} {...this.props} courier={this.courier}/>
      )
    }
}

export  default ShippingDetails