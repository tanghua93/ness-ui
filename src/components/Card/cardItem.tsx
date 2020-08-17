import React from 'react'
import classNames from 'classnames'
import { ICardChildPropsType } from './propsType'
export interface ICardChildProps extends ICardChildPropsType {
    classPrefix?: string;
    children?:React.ReactNode;
}
const CardItem: React.FC<ICardChildProps> = (props: ICardChildProps) => {
    const {
        role,
        className,
        cover,
        classPrefix,
        children,
        ...restProps
    } = props
    const cardItemClass = classNames(className,{
        [`${classPrefix}-${role}`]: true,
        [`${classPrefix}-cover`]: !!cover,
    })
    let style:any = null;
    if (cover) {
        style = {
            backgroundImage: 'url(' + cover + ')',
        }
    }
    return <div
        {...restProps}
        className={cardItemClass}
        role={`card-${role}`}
        style={style}
    >
        {children}
    </div>
}
CardItem.defaultProps = {
    classPrefix: 'card',
    role: 'header'
}
export default CardItem 