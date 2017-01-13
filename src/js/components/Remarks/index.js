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
     handleChange=(value,subid)=>{
         const {getFieldValue}=this.props.form
         let {id}=JSON.parse(sessionStorage.getItem('user'))
        let  data={
             "source":this.props.location.query.source,
             "subid":subid,//子订单编号
             "remark":getFieldValue(value),
             "userId":id
         }

       const {actions} =this.props;
         actions.getDataStart('/order/save_remark',data,'/index')

     }

    render(){
        const { getFieldProps,getFieldValue} = this.props.form;
        const {list,posts,actions}=this.props;

        return(
            <div>
                    {
                        list.length>0&&list.map((item,index)=>{

                            return(
                                <div key={index} >
                                <Card  >
                                    <Card.Header
                                        title={<span className="font-32" >{item.title}</span>}
                                    />
                                    <Card.Body>
                                        <div className="font-32" >
                                            <TextareaItem
                                                {...getFieldProps('remark'+index, {
                                                    rules: [{required: true}],
                                                    onChange(value){
                                                        actions.onChangeNotes(value,index)
                                                    }
                                                })}
                                                rows={3}
                                                placeholder="请填写备注"
                                                value={item.remark}
                                            />
                                        </div>
                                    </Card.Body>
                                    <Card.Footer content={
                                       <div>
                                           <WhiteSpace size="lg" />
                                           <Flex>

                                               <Flex.Item><div className="hor-center"><Button className="btn" onClick={ev=>
                                              this.handleChange('remark'+index,item.subid)
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

export default createForm()(Remarks);