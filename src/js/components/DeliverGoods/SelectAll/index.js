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
    componentDidMount() {
        const {actions,shopList} = this.props;
        actions.onReceiveCheck(shopList)
    }
    render() {
            const {select} = this.props
            let data = select.items

        return (<div>
            <List >
                <WhiteSpace size="lg" />
                    <CheckboxItem   checked={select.isCheckAll} onClick={ev=>{this.isCheckAll(select.isCheckAll)}} >
                        全选
                        <WhiteSpace size="lg" />
                    </CheckboxItem>


                {select.items&&data.map((i,index) => {
                    return (
                        <div key={index}>
                    <WhiteSpace size="lg" />
                        <CheckboxItem  onClick={ev=>{this.onChange(index,i.checked)}} checked={i.checked} >
                            {i.title} <span className="fr"> X{i.num}</span>
                            <WhiteSpace size="lg" />
                        </CheckboxItem>

                        </div>
                    )
                })}
            </List>

        </div>);
    }
}

