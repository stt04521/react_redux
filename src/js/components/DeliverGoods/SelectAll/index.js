import { List, Checkbox, Flex,WhiteSpace } from 'antd-mobile';
import React,{ Component } from 'react'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const Item = List.Item;

    export default class SelectAll extends Component {

    onChange(id,flag) {
        const {actions} = this.props;
            actions.onSelectRadio(id,!flag)
    }
    isCheckAll=(flag)=>{
        const {actions} = this.props;
            actions.onCheckAll(!flag)
    }

    render() {
            const {select} = this.props
            let data = select.items
            let object={"NO_REFUND":"NO_REFUND","SELLER_REFUSE_BUYER":"SELLER_REFUSE_BUYER","CLOSED":"CLOSED"}
        return (<div>
            <List >
                <WhiteSpace size="lg" />
                    <CheckboxItem   checked={select.isCheckAll} onClick={ev=>{this.isCheckAll(select.isCheckAll)}} >
                        全选
                        <WhiteSpace size="lg" />
                    </CheckboxItem>


                {select.items.length>0&&data.map((i,index) => {
                 let flag =i.checked=="false"||!i.checked?false:true;

                    return (
                        <div key={index}>
                           <WhiteSpace size="lg" />
                            {i.subStatus=="WAIT_SELLER_SEND_GOODS"&&object[i.saleStatus]&&<CheckboxItem  onClick={ev=>{this.onChange(index,flag)}} checked={flag} >
                            {i.title} <span className="fr"> X{i.num}</span>
                            <WhiteSpace size="lg" />
                        </CheckboxItem>}

                        </div>
                    )
                })}
            </List>

        </div>);
    }
}

