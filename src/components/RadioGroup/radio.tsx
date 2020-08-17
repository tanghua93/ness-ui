import React from 'react';
import List from '../List/list';
import { IListProps} from '../List/propType';
import RadioItem from './radioItem';
type RadioFC<P> = React.FC<P> & { Item: typeof RadioItem }
const Radio: RadioFC<IListProps> = (props: IListProps)=> {
    return (
        <List {...props} />
    )
}
Radio.Item = RadioItem
export default Radio 