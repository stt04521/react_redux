import React from 'react';
import Rodal from 'rodal';
import styles from './index.scss'
import { List,WingBlank, WhiteSpace,Flex,Button,InputItem} from 'antd-mobile';
// include styles
import 'rodal/lib/rodal.css';

const Item = List.Item;
const Brief = Item.Brief;

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {

            const  {courier}=this.props;

        return (
            <div>


                <List >
                    <Item multipleLine align="top" wrap >
                        <button className={styles.wl_button} onClick={this.show.bind(this)}>请选择物流公司</button>
                    </Item>

                    <InputItem
                        placeholder="请输入物流单号"
                        data-seed="logId"
                    ></InputItem>

                </List>
                <Rodal
                    visible={this.state.visible}
                    onClose={this.hide.bind(this)}
                    width={6.22}
                    height={7.35}
                    measure={"rem"}
                >
                    <div>
                     <p className={styles.wl_title}>请选择物流公司</p>
                        <div className={styles.dialog_list}>
                            <List className="my-list">
                                {
                                    courier.map((item,index)=>{
                                        return(
                                            <Item  multipleLine align="top" wrap key={index}>
                                                <WhiteSpace size="lg" />
                                                {item.courierName}
                                                <WhiteSpace size="lg" />
                                            </Item>
                                        )
                                    })
                                }

                            </List>

                        </div>

                    </div>
                </Rodal>
            </div>
        )
    }
}

export default Popup