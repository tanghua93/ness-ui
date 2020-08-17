import * as React from 'react'
import classNames from 'classnames'
import { IIconProps } from './propType'

type IconProps = Partial<IIconProps & React.HtmlHTMLAttributes<HTMLElement>>
const Icon: React.FC<IconProps> = (props) => {
    const {
        name,
        children,
        href,
        style,
        classPrefix,
        className,
        ...resetProps
    } = props
    const classes = classNames(classPrefix, className, {
        [`${classPrefix}-${name}`]: !!name
    })
    if (href) {
        return (
            <a
                className={classes}
                style={style}
                href={href}
                {...resetProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <span
                className={classes}
                style={style}
                {
                ...resetProps
                }
            >
                {children}
            </span>
        )
    }

}

Icon.defaultProps = {
    classPrefix: "icon"
}
Icon.displayName = "Icon"
export default Icon 