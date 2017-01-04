/**
 * Created by shitengteng on 2016/12/21.
 */
import React,{ Component } from 'react';


 class Transfer extends Component {
     static contextTypes= {
         router: React.PropTypes.object.isRequired
     }
     componentWillMount () {
         this.skip({})


     }
     constructor(props,context) {
         super(props,context);
         this.context.router;
     }
     skip=(data)=>{
         this.context.router.push({
             pathname:"/index",
             query: data
         })
     }
    render() {
        const { children } =this.props;
        return <div></div>

    }
}

export default Transfer