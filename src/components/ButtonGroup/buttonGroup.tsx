import React, { cloneElement } from 'react'
import classNames from 'classnames'
import { ButtonProps } from '../Button/button'

type ButtonGroupStyle = Pick<ButtonProps, "size" | "btnType" | "hollow">
export interface IButtonGorupProps extends ButtonGroupStyle {
    classPrefix?: string,
    children: React.ReactNode,
    justify?: boolean,
    stacked?: boolean,
    className?: string
}
const ButtonGroup: React.FC<IButtonGorupProps> = (props) => {
    const {
        justify,
        stacked,
        btnType,
        size,
        classPrefix,
        children,
        hollow,
        className
    } = props
    const classes = classNames('btn-group', className, {
        [`${classPrefix}-justify`]: justify,
        [`${classPrefix}-stacked`]: stacked
    })
    const renderChildren= () => {
        return React.Children.map(children, (child: any) => {
            const isButton:boolean = child.type !== undefined && child.type.displayName === "Button"
            if (isButton) {
                const childElement = child as React.FunctionComponentElement<ButtonProps>
                return cloneElement(childElement, Object.assign({
                    btnType,
                    size,
                    hollow,
                }, child.props));
            }else{
                return child
            }
                
        })

    }
    return (
        <div
            className={classes}
        >
            {renderChildren()}
        </div>
    )
}

ButtonGroup.defaultProps = {
    classPrefix: 'btn-group'
}

export default ButtonGroup