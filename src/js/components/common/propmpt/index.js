/**
 * Created by Administrator on 2016/12/29.
 */
/**
 * Created by shitengteng on 16/8/8.
 * 提示框
 */
import React from 'react';
class Prompt extends React.Component{

    constructor(props){
        super(props);

    }
    render () {
            const  {flag,message}=this.props;
         let style=flag?"show":"hide"
        return(
            <div className={`show ${style}`} >
                <span>{message}</span>
            </div>
        )
    }
}
export default Prompt