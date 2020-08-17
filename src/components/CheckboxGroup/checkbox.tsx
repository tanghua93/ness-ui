import React from 'react';
import List from '../List/list'
import { IListProps } from '../List/propType'
import CheckboxItem from './checkBoxItem'
type CheckboxFC<P> = React.FC<P> & { Item: typeof CheckboxItem }
const CheckboxGroup: CheckboxFC<IListProps> = (props: IListProps)=> {
    return (
        <List {...props} />
    )
}
CheckboxGroup.Item = CheckboxItem
export default CheckboxGroup 