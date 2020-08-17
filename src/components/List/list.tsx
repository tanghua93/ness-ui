import React from 'react';
import classNames from 'classnames';
import ListItem from './listItem'
import { IListProps } from './propType'
type ListFC<P> = React.FC<P> & { Item: typeof ListItem }
const List: ListFC<IListProps> = (props: IListProps) => {
    const {
        classPrefix,
        inset,
        ...restProps
    } = props
    const listClass = classNames(classPrefix, {
        [`${classPrefix}-inset`]: inset
    });
    return <ul
        {...restProps}
        className={listClass}
    >

    </ul>
}
List.Item = ListItem
List.defaultProps = {
    classPrefix: 'list'
}


export default List 