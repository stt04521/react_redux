/**
 * Created by shitengteng on 2016/12/21.
 */

import  bj from '../../../images/nodate.png'
import React, { Component } from 'react'
import styles from './index.scss'

export default class NoData extends Component {

    render(){
        const {ntext} =this.props
        return (
                <div className={styles.Nodata}>
                    <div className={styles.Nodata_img} ><img src={bj} alt=""/></div>
                    <p>{ntext}</p>
                </div>
        )
        
    }
    
}