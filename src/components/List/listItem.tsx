import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon'
import { IListItemProps} from './propType'
const ListItem: React.FC<IListItemProps> = (props: IListItemProps) => {
    const {
        className,
        role,
        classPrefix,
        subTitle,
        href,
        after,
        media,
        children,
        isLink,
        nested,
        target,
        title,
        disabled,
        ...restProps
    } = props

    const renderAddon = (type: keyof IListItemProps) => {
        return props[type] ? (
            <div
                key={`item-${type}`}
                className={`item-${(type.toLowerCase())}`}
            >
                {props[type]}
            </div>
        ) : null;
    }

    const renderTitleRow = () => {
        const itemTitle = title ? (
            <div
                key="itemTitle"
                className={`${classPrefix}-title`}
            >
                {title}
            </div>
        ) : null;
        const titleChildren = [
            itemTitle,
            renderAddon('after'),
            href || isLink ? (
                <Icon
                    className={`${classPrefix}-icon`}
                    name="right"
                    key="itemChevron"
                />
            ) : null,
        ];
        return subTitle ? (
            <div
                className={`${classPrefix}-title-row`}
                key="itemTitleRow"
            >
                {titleChildren}
            </div>
        ) : titleChildren;
    }

    const renderMain = () => {
        const titleRow = renderTitleRow();
        const notJustTitle = media || subTitle || children;
        return notJustTitle ? (
            <div
                key="itemMain"
                className={`${classPrefix}-main`}
            >
                {titleRow}
                {renderAddon('subTitle')}
            
                {children}
            </div>
        ) : titleRow;
    }

    const wrapLink = (children: any) => {
        return (
                <a
                    href={href}
                    target={target}
                >
                    {children}
                </a>);
    }

    const listItemClass = classNames(classPrefix, className,{
        [`${classPrefix}-header`]: role === 'header',
        [`${classPrefix}-linked`]: isLink || href,
        [`${classPrefix}-content`]: !!subTitle,
        [`${classPrefix}-${nested}`]: !!nested,
        [`${classPrefix}-disabled`]: disabled
    })

    const itemChildren = [
        renderAddon('media'),
        renderMain(),
    ];

    return (
        <li
            {...restProps}
            className={listItemClass}
        >
            {role === 'header' ? children :
                (href) ? wrapLink(itemChildren) : itemChildren}
        </li>
    )
}

ListItem.defaultProps = {
    classPrefix: 'item',
    role: 'item'
}

export default ListItem;