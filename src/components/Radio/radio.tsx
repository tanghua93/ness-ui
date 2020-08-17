import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { IRadioItemProps } from './propType';
export interface IRadioProps extends IRadioItemProps {
}
const Radio: React.FC<IRadioProps> = (props: IRadioProps) => {
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
                        type="radio"
                        {...restProps}
                    />
                    <Icon
                        className={classNames(`${classPrefix}-icon`)}
                        name="radio"
                    >
                    </Icon>
                </div>
                {children}
            </label>
        </div>
    )
}
Radio.defaultProps = {
    classPrefix:'radio'
}
export default Radio 