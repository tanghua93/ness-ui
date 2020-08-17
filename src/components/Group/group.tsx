import React from 'react'
import classNames from 'classnames'
import { IGroupProps } from './propType'
const Group: React.FC<IGroupProps> = (props: IGroupProps) => {
    const {
        classPrefix,
        className,
        children,
        noPadded,
        ...restProps
    } = props;
    const renderAddon = (role?: string) => {
        role = role || 'header';
        return props[role] ?
            React.createElement(role, {
                className: `${classPrefix}-${role}`
            }, props[role]) : null;
    }
    const groupClass = classNames(classPrefix,className,{
        [`${classPrefix}-no-padded`]: noPadded
    })
    return (
        <div
            {...restProps}
            className={groupClass}
        >
            {renderAddon('header')}
            <div className={`${classPrefix}-body`}>
                {children}
            </div>
            {renderAddon('footer')}
        </div>
    )
}

Group.defaultProps = {
    classPrefix: 'group'
}

export default Group 