import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon'
import ListItem from '../List/listItem'
import {IRadioItemProps} from './propType'
const RadioItem: React.FC<IRadioItemProps> = (props: IRadioItemProps) => {
    const {
        label,
        classPrefix,
        className,
        disabled,
        ...restProps
    } = props;

    return (
        <ListItem
            nested="radio"
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
                    type="radio"
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

RadioItem.defaultProps = {
    classPrefix: 'field'
}

export default RadioItem 