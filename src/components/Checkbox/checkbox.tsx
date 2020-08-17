import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { ICheckboxProps } from './propType';
const Checkbox: React.FC<ICheckboxProps> = (props: ICheckboxProps) => {
    const { classPrefix, disabled, children, ...restProps } = props;
    return (
        <div className={classNames(classPrefix,{
            [`item-disabled`]: disabled
        })}>
            <label
                className={classNames(`${classPrefix}-container`)}
                key="label"
            >
                
                <div className={`${classPrefix}-btn`}>
                    <input
                        type="checkbox"
                        {...restProps}
                    />
                    <Icon
                        className={classNames(`${classPrefix}-icon`)}
                        name="check"
                    >
                    </Icon>
                </div>
                {children}
            </label>
        </div>
    )
}
Checkbox.defaultProps = {
    classPrefix:'checkbox'
}
export default Checkbox 