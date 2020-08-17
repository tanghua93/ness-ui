import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon'
import ListItem from '../List/listItem'
import { ICheckboxProps } from './propType'
const CheckboxItem: React.FC<ICheckboxProps> = (props: ICheckboxProps) => {
    const {
        label,
        classPrefix,
        className,
        disabled,
        checked,
        ...restProps

    } = props;
   

    return (
        <ListItem
            nested="checkbox"
            className={classNames({
                [`item-disabled`]: disabled
            })}
        >
            <label
                className={classNames(`${classPrefix}-container`)}
                key="label"
            >
                <span className={classNames(`${classPrefix}-label`)}>
                    {label}
                </span>
                <input
                    type="checkbox"
                    {...restProps}
                />
            
                <Icon
                    className={classNames(`${classPrefix}-icon`)}
                    name="check"
                />
            </label>
        </ListItem>
    )
}

CheckboxItem.defaultProps = {
    classPrefix: 'field'
}

export default CheckboxItem 