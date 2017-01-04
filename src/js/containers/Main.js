/**
 * Created by Administrator on 2016/12/21.
 */
/**
 * Created by shitengteng on 2016/12/21.
 */
import React,{ Component } from 'react';
import {Nav} from '../components'


export default class Main extends Component {
    render() {
        const { children } =this.props;
        return (<div>
            { children}
            <Nav/>
        </div>)




    }
}