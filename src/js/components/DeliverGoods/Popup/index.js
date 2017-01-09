import React from 'react';
import Rodal from 'rodal';
import styles from './index.scss'
import { List,WingBlank, WhiteSpace,Flex,Button,InputItem} from 'antd-mobile';
// include styles
import 'rodal/lib/rodal.css';
import { createForm } from 'rc-form';

const Item = List.Item;
const Brief = Item.Brief;

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false,flag:false};
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }
    Check=(index)=>{
        const {actions} = this.props;
        actions.onSelectLogistics(index)
        this.setState({ visible: false,flag:true});
    }

    componentWillUnmount (){
        const {actions} = this.props;
        actions.onrestLogistics()
    }
    render() {
        const { getFieldProps, getFieldError,getFieldValue} = this.props.form;
            const  {courier,actions}=this.props;
            let style = this.state.flag?styles.wl_black:styles.wl_button

        return (
            <div>
                <List >
                    <Item multipleLine align="top" wrap >
                        <span className={style} onClick={this.show.bind(this)}>{courier.show.courierName}</span>
                    </Item>

                    <InputItem
                        {...getFieldProps('required', {
                            rules: [{required: true}],
                            onChange(value){
                                actions.onNumberofLogistics(value)
                            }
                        })}
                        placeholder="请输入物流单号"
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
                                    courier.items&&courier.items.map((item,index)=>{
                                        return(
                                            <Item  multipleLine align="top" wrap key={index} onClick={ev=>this.Check(index)}>
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

export default createForm()(Popup);