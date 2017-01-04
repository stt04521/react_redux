import { List, Checkbox, Flex,WhiteSpace } from 'antd-mobile';
import React,{ Component } from 'react'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const Item = List.Item;

    export default class SelectAll extends Component {

    onChange(val) {
        val.checked=!val.checked
    }
    render() {
            const {shopList} = this.props

        return (<div>
            <List >
                <WhiteSpace size="lg" />
                    <CheckboxItem   checked={false} >
                        全选
                        <WhiteSpace size="lg" />
                    </CheckboxItem>


                {shopList.map((i,index) => {
                    return (
                        <div key={index}>
                    <WhiteSpace size="lg" />
                        <CheckboxItem  onClick={ev=>{this.onChange(i)}} checked={true} >
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

