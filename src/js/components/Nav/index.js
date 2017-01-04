import React, { Component } from 'react'
import NavLink from './NavLink'
import styles from './index.scss'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div style={{height:'1.2rem'}}></div>
        <div className={styles.root}>
          <NavLink
            pathUrl="/index"
            icoName={styles.dd}
            active={styles.navOne}
            linkName="订单"
            onlyActiveOnIndex
          />
          <NavLink
            pathUrl="/index/GrabASingle"
            icoName={styles.qd}
            active={styles.navTwo}
            linkName="抢单"
          />
          <NavLink
            pathUrl="/index/Customer"
            icoName={styles.sh}
            active={styles.navThree}
            linkName="售后"
          />
        </div>
      </div>
    )
  }
}

