import * as React from 'react'
import classNames from 'classnames'
import Loader from '../Loader/loader'
export type ButtonType = "default"| "primary" | "secondary" | "success" | "warning" | "danger" | "dark" | "link";
export type ButtonSize = "xs" | "sm" | "lg" | "xl"
export interface BaseButtonProps {
    classPrefix: string,
    children: React.ReactNode;
    href?: string;
    /**按钮类型 */
    btnType?: ButtonType;
    /**设置 Button 的尺寸 */
    size?: ButtonSize | null;
    hollow?: boolean;
    block?: boolean;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    className?: string | null;
    loading?: boolean;
    circle?:boolean;
}
// 获取button和a的原生属性
type NativeButtonAttributes = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type NativeAnchorAttributes = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps =  Partial<NativeButtonAttributes & NativeAnchorAttributes>
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        disabled,
        size,
        btnType,
        children,
        href,
        classPrefix,
        hollow,
        block,
        loading,
        className,
        circle,
        ...restProps
    } = props;
    const classes = classNames(classPrefix, className, {
        [`${classPrefix}-${btnType}`]: btnType,
        [`${classPrefix}-${size}`]: !!size,
        [`disabled`]: href && disabled,
        [`${classPrefix}-hollow`]: hollow,
        [`${classPrefix}-block`]: block,
        [`${classPrefix}-circle`]: circle
    })
    
    if (href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {loading && (<Loader color="#fff" name="ball-spin-fade-loader" scale={0.4} />)}
                {children}

            </button>
        )
    }
}

Button.defaultProps = {
    classPrefix: 'btn',
    btnType: 'default',
}
Button.displayName = "Button"
export default Button