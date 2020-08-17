import * as React from 'react'
import classNames from 'classnames'
import { ICardPropsType, CardItemType } from './propsType'
import CardItem from './cardItem'
export interface ICardProps extends ICardPropsType {
    children?: React.ReactNode;
    className?: string;
    classPrefix?: string;
}
type CardFC<P> = React.FC<P> & {
    Item: typeof CardItem;
}
const Card: CardFC<ICardProps> = (props: ICardProps) => {
    const {
        children,
        className,
        classPrefix,
        title,
        header,
        footer,
        ...restProps
    } = props;
    const renderItem = (element?: any, role?: CardItemType) => {
        if (!element) {
            return null;
        }
        return (element.type && element.type === Card.Item) ?
            element : <Card.Item role={role}>{element}</Card.Item>;
    }
    const renderTitle = (title: React.ReactNode) => {
        return (
            <h2 className={`${classPrefix}-title`}>
                {title}
            </h2>
        );
    }
    return (
        <div
            {...restProps}
            className={classNames(classPrefix, className)}
        >
            {
                title ? renderItem(renderTitle(title)) : renderItem(header)
            }
            <div className={`${classPrefix}-body`}>
                {children}
            </div>
            {renderItem(footer, 'footer')}
        </div>)
}
Card.defaultProps = {
    classPrefix: 'card'
}
Card.Item = CardItem
export default Card 