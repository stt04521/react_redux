

/**
 * Created by shitengteng on 2016/12/27.
 */
import React,{ Component } from 'react'
import styles from './index.scss'
import  Popup from  '../Popup'
import { List,WingBlank, WhiteSpace,Flex,Button,InputItem,Tabs,Checkbox} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const TabPane = Tabs.TabPane;



export default class TabExample  extends Component{
    callback=(key)=>{
        const {actions} = this.props;
        actions.onMainFromMentioning(key)
    }
    concat=(flag)=>{
        const {actions} = this.props;
        if(flag){
            actions.onContactInformation(1)
        }else{
            actions.onContactInformation(2)
        }

    }
    render() {
        let {courier,tid,source,actions}=this.props;
        return (
            <div>
                {
                    source==1&&<div>
                        <WhiteSpace />
                        <Tabs defaultActiveKey="1" animated={false} onChange={this.callback}>
                            <TabPane tab="邮寄" key="1">
                                <div>
                                    <Popup courier={courier} actions={actions} />


                                    <Flex style={{ padding: 30,backgroundColor:"white" }}>
                                        <Flex.Item>
                                            <div className={styles.option_item}>
                                                <input type="radio" className={styles.survey_form_checkbox} name="answer_1"  defaultChecked="defaultChecked" id="option_1_1" value="是" />
                                                <label htmlFor={"option_1_1"} onClick={ev=>this.concat(true)}>
                                                    <i className={styles.survey_form_ui}></i>
                                                    <div className={styles.option_text}>
                                                        <p>自己联系</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <div className={styles.option_item}>
                                                <input type="radio" className={styles.survey_form_checkbox} name="answer_1" id="option_1_2" value="是" />
                                                <label htmlFor={"option_1_2"} onClick={ev=>this.concat(false)}>
                                                    <i className={styles.survey_form_ui}></i>
                                                    <div className={styles.option_text}>
                                                        <p>在线下单</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </Flex.Item>
                                        <Flex.Item/>

                                    </Flex>
                                </div>
                            </TabPane>

                            <TabPane tab="自提" key="2">
                                <div>
                                    <List >
                                        <InputItem
                                            value="自提"
                                            editable={false}
                                            data-seed="logId"
                                        ></InputItem>

                                        <InputItem
                                            value={tid}
                                            editable={false}
                                            data-seed="logId"
                                        ></InputItem>
                                        <InputItem
                                            value="自己联系"
                                            editable={false}
                                            data-seed="logId"
                                        ></InputItem>
                                    </List>
                                </div>
                            </TabPane>

                        </Tabs>
                        <WhiteSpace />
                    </div>
                }

                {
                    source==2&&<div>
                        <WhiteSpace />
                        <Popup courier={courier} actions={actions} />
                    </div>
                }
            </div>
        );
    }
}


