import React,{ Component } from 'react';
import {Nav} from '../components'


export default class App extends Component {
  render() {
    const { children } =this.props;
    return children
  }
}