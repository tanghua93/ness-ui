import React from 'react'
import classNames from 'classnames'
export interface IColProps {
    classPrefix?: string;
    children?: React.ReactNode;
    cols?: number;
    offset?: number;
    shrink?: boolean;
    className?: string;
}

const Col: React.FC<IColProps> = (props) => {
    const {
        classPrefix,
        className,
        cols,
        children,
        shrink,
        offset,
        ...restProps
    } = props
    const classes = classNames(classPrefix, className, {
        [`${classPrefix}-${cols}`]: !!cols,
        [`${classPrefix}-${shrink}`]: !!shrink,
        [`${classPrefix}-offset-${offset}`]: !!offset
    })
    return (
        <div
            className={classes}
            {...restProps}
        >
            {children}
        </div>
    )
}

Col.defaultProps = {
    classPrefix:'col'
}

export default Col