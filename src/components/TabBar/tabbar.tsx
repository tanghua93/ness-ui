import React, { cloneElement } from 'react';
import classNames from 'classnames';
import TabBarItem from './tabbarItem';
import { ITabBarPropsType,ITabBarItemPropsType } from './propsType';
export interface ITabBarProps extends ITabBarPropsType {
    children: React.FunctionComponentElement<ITabBarItemPropsType>[];
    classPrefix?: string;
    className?: string;
}
type TabBarFC<P> = React.FC<P> & {
    Item: typeof TabBarItem
}
const TabBar: TabBarFC<ITabBarProps> = (props: ITabBarProps) => {
    const {
        className,
        children,
        onAction,
        classPrefix,
        theme,
        barColor,
        hidden,
        selectedIconColor,
        selectedTextColor,
        ...restProps
    } = props;
    const tarBarClass = classNames(classPrefix, className, {
        [`${classPrefix}-${theme}`]: !!theme,
        [`${classPrefix}-hidden`]: hidden
    });
    const renderTabItem = () => {
       return React?.Children.map(children, (child: any, index) => {
           const isTabBarItem: boolean = child.type !== undefined && child.type.displayName === "TabBarItem"
           if (isTabBarItem){
               const childElement = child as React.FunctionComponentElement<ITabBarItemPropsType>
               let {
                   eventKey,
                   onClick,
                   ...restProps
               } = child.props;
               const clickHandler = onClick || onAction;
               const key = eventKey || index;
               eventKey = eventKey || key;
               const props = {
                   key: key,
                   eventKey: eventKey,
                   onClick: clickHandler && clickHandler.bind(null, eventKey),
                   selectedIconColor,
                   selectedTextColor, 
                   ...restProps
               }
               return cloneElement(
                   childElement, props
               );
           }else{
               return child 
           }
           
        })
    }
    return (
        <nav
            {...restProps}
            className={tarBarClass}
            style={{ backgroundColor: barColor}}
        >
            {renderTabItem()}
        </nav>
    )
}
TabBar.defaultProps = {
    classPrefix: 'tabbar'
}
TabBar.Item = TabBarItem
export default TabBar
