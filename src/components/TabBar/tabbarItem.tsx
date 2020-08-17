import React from 'react';
import classNames from 'classnames';
import { ITabBarItemPropsType } from './propsType'
import Badge from '../Badge/badge'
export interface ITabBarItemProps extends ITabBarItemPropsType {
    classPrefix?: string;
    className?:string;
    selectedIconColor?: string;
    selectedTextColor?: string;
    component?: any;
}
const TabBarItem: React.FC<ITabBarItemProps> = (props: ITabBarItemProps) => {
    let {
        badge,
        badgeStyle,
        icon,
        title,
        className,
        selectedIconColor,
        selectedTextColor,
        component,
        classPrefix,
        href,
        selected,
        eventKey,
        ...restProps
    } = props;
    const renderBadge = ()=> {
        return badge ? (
            <Badge
                style={badgeStyle}
                rounded
            >
                {badge}
            </Badge>
        ) : null;
    }
    const renderIcon = ()=> {
        if(icon){
            return (
                <div className="icon-item" key="tabItem-icon">
                    {
                        React.cloneElement(icon,{
                            style: { color: selected && selectedIconColor}
                        })
                    }
                    {renderBadge()}
                </div>
            )
           
        }else{
            return null
        }
    }
    const renderTitle = ()=> {
        const labelClassName = `${classPrefix}-label`
        const titleStyle = selected && selectedTextColor ? { color: selectedTextColor }: {}
        return title ? (
            <span className={labelClassName} style={titleStyle} key="tabbarTitle">{title}</span>
        ) : null;
    }
    const tabBarClass = classNames(className, `${classPrefix}-item`,{
        ['active']: selected
    })
    const Component = href ? 'a' : component;
    return (
        <Component
            {...restProps}
            className={tabBarClass}
        >
            {[
                renderIcon(),
                renderTitle(),
            ]}
        </Component>
    )
}

TabBarItem.defaultProps = {
    classPrefix: 'tabbar',
    badgeStyle: {color:'#fff',backgroundColor:'red'},
    icon:'',
    component:'span'
}
TabBarItem.displayName = "TabBarItem"

export default TabBarItem