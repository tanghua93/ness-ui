import React, { useRef } from 'react';
import classNames from 'classnames';
import { ISwitchPropsType } from './propsType';

export interface ISwitchProps extends ISwitchPropsType {
    classPrefix?: string;
    style?: React.CSSProperties;
    className?: string;
    defaultChecked?:boolean;
}

const Switch: React.FC<ISwitchProps> = (props: ISwitchProps) => {
    const {
        className,
        onValueChange,
        disabled,
        classPrefix,
        defaultChecked,
        solid,
        theme,
        ...restprops
    } = props;
    const SwitchClass = classNames(classPrefix,className,{
        [`disabled`]:!!disabled,
        [`${classPrefix}-${theme}`]: !!theme,
        [`${classPrefix}-solid`]: solid
    })
    const dateRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    return (<label
        {...restprops}
        className={SwitchClass}
    >
        <input
            onChange={onValueChange}
            type="checkbox"
            ref={dateRef}
            defaultChecked={defaultChecked}
            disabled={disabled}
        />
        <span className={`${classPrefix}-label`} />
    </label>
    );
}
Switch.defaultProps = {
    classPrefix: 'switch',
    theme: 'primary'
}
export default Switch 
