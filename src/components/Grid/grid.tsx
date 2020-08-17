import React from 'react'
import classNames from 'classnames'
import {IGridProps} from './propType'
import Col from '../Col/index'
type GridFC<P> = React.FC<P> & {
    Item: typeof Col 
}
const Grid: GridFC<IGridProps> = (props) => {
    const {
        classPrefix,
        className,
        avg,
        wrap,
        align,
        bordered,
        collapse,
        children,
        style,
        ...resetProps
    } = props
    const classes = classNames(classPrefix, className, {
        [`${classPrefix}-avg-${avg}`]: avg,
        [`${classPrefix}-${wrap}`]: wrap,
        [`${classPrefix}-${align}`]: align,
        [`${classPrefix}-bordered`]: bordered,
        [`${classPrefix}-collapse`]: collapse
    })
    return (
        <div
            className={classes}
            style={style}
            {...resetProps}
        >
            {children}
        </div>
    )
}
Grid.defaultProps = {
    classPrefix: 'g'
}
Grid.Item = Col
export default Grid 