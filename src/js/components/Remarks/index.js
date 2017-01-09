/**
 * Created by shitengteng on 2016/12/28.
 */


import React, { Component } from 'react'
import styles from './index.scss'
import {List, TextareaItem,WingBlank, WhiteSpace,Card,Flex,Button } from 'antd-mobile';
import { createForm } from 'rc-form';


 class Remarks extends  Component{
     constructor(props){
         super(props)
     }
     handleChange=()=>{
         // {
         //     "source":"1",
         //     "subid":"",//子订单编号
         //     "remark":"",
         //     "userId":""
         // }
       const {actions} =this.props;
         actions.openPrompt("ssss")
     }

    render(){

        const {list,posts}=this.props;

        return(
            <div>
                    {
                        list&&list.map((item,index)=>{

                            return(
                                <div key={index} >
                                <Card  >
                                    <Card.Header
                                        title={<span className="font-32" >{item.title}</span>}
                                    />
                                    <Card.Body>
                                        <div className="font-32" >
                                            <TextareaItem

                                                rows={3}
                                                placeholder="请填写备注"
                                            />
                                        </div>
                                    </Card.Body>
                                    <Card.Footer content={
                                       <div>
                                           <WhiteSpace size="lg" />
                                           <Flex>

                                               <Flex.Item><div className="hor-center"><Button className="btn" onClick={
                                              this.handleChange
                                               } >保存备注</Button></div></Flex.Item>

                                           </Flex>
                                           <WhiteSpace size="lg" />
                                       </div>
                                    }  />
                                </Card>
                                <WhiteSpace size="lg" />
                                </div>
                                )

                        })
                    }

            </div>
        )
    }
}

export  default Remarks