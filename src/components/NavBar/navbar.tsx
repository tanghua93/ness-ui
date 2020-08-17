import React from 'react';
import classNames from 'classnames';
import { INavBarPropsType, INavBarItemProps } from "./propsType";
export interface INavBarProps extends INavBarPropsType {
    classPrefix?: string;
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}
const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
    const {
        title,
        children,
        titleOnLeft,
        classPrefix,
        leftContent,
        rightContent,
        className,
        theme,
        ...restProps
    } = props;
    const renderTitle = () => {
        const titlePosition: string = titleOnLeft ? `${classPrefix}-left` : `${classPrefix}-center`;
        return title ? (
            <h2
                className={`${classPrefix}-title ${titlePosition}`}
            >
                {title}
            </h2>
        ) : children;
    }
    let _navPosition: string | null = null;
    const renderNavItem = (item: INavBarItemProps) => {
        const {
            component,
            itemTitle,
            icon,
            isClone,
            className,
            onClick,
            ...otherProps
        } = item;
        const children: React.ReactElement[] = [];
        const itemClassName = classNames(`${classPrefix}-nav-item`, className);
        const itemProps = {
            key: 'navbarNavItem',
            onClick: onClick && onClick.bind(item),
            ...otherProps,
            className: itemClassName,
        };

        const Component: any = component || 'a';
        itemTitle && children.push(
            <span
                className={`${classPrefix}-nav-title`}
                key='title'
            >
                {itemTitle}
            </span>
        );
        const iconClassName = {
            [`${classPrefix}-icon`]: true,
            [`${classPrefix}-icon-sibling-of-title`]: !!title
        };
        let navIcon = icon && typeof icon == 'object' ? (
            React.cloneElement(icon, {
                className: iconClassName
            })
        ) : null;
        if (navIcon) {
            const action = _navPosition === 'left' ? 'unshift' : 'push';
            Array.prototype[action].call(children, navIcon);
        }


        const renderChildren = () => {
            return isClone ? (
                <span
                    className={itemClassName}
                >
                    {children}
                </span>
            ) : children;
        };

        return (
            <Component {...itemProps}>
                {renderChildren()}
            </Component>
        );
    }
    const renderNav = (position: string) => {
        const nav: INavBarItemProps = props[`${position}Content`];
        _navPosition = position;
        return nav ? (<div
            className={classNames(`${classPrefix}-nav`,
                `${classPrefix}-${position}`)}
        >
            {renderNavItem(nav)}
        </div>) : null
    }
    return (
        <header
            {...restProps}
            className={classNames(classPrefix, className, {
                [`${classPrefix}-${theme}`]: !!theme
            })}
        >
            {renderTitle()}
            {renderNav('left')}
            {renderNav('right')}
        </header>
    )
}

NavBar.defaultProps = {
    classPrefix: 'navbar'
}

export default NavBar