

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

function callback(key) {
    console.log(key);
}

export default class TabExample  extends Component{
    render() {
        let {courier,tid,source}=this.props;
        console.log(source)
        return (
            <div>
                {
                    source==1&&<div>
                        <WhiteSpace />
                        <Tabs defaultActiveKey="1" animated={false} onChange={callback}>
                            <TabPane tab="邮寄" key="1">
                                <div>
                                    <Popup courier={courier} />


                                    <Flex style={{ padding: 30,backgroundColor:"white" }}>
                                        <Flex.Item>
                                            <div className={styles.option_item}>
                                                <input type="radio" className={styles.survey_form_checkbox} name="answer_1" id="option_1_1" value="是" />
                                                <label htmlFor={"option_1_1"}>
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
                                                <label htmlFor={"option_1_2"}>
                                                    <i className={styles.survey_form_ui}></i>
                                                    <div className={styles.option_text}>
                                                        <p>自己联系</p>
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
                        <Popup courier={courier} />
                    </div>
                }
            </div>
        );
    }
}


