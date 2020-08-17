import * as React from 'react';
import classNames from 'classnames'
import Icon from '../Icon'
import useToggleCollaps from './hooks/useToggleCollaps'
export interface IAccordionItemProps {
    title?: React.ReactNode;
    eventKey?: any;
    classPrefix?: string;
    expanded?: boolean;
    defaultExpanded?: boolean;
    children:React.ReactNode;
    onChange?: <T>(key: T) => void;
}
const AccordionItem: React.FC<IAccordionItemProps> = (props: IAccordionItemProps)=>{
    const panel = React.useRef<HTMLElement | null>(null);
    const {
        classPrefix,
        eventKey,
        title,
        children
    } = props;
    const { isExpanded, getCollapsibleClassSet } = useToggleCollaps(props, panel.current)
    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, props: any)=> {
        const {
            onChange
        } = props
        if (onChange) {
            onChange(e, eventKey);
        } else {
            e.preventDefault();
        }
    }
    const accordionClass = classNames(`accordion-item`,
        isExpanded() ? 'active' : null
    )
    return (
        <dl
            className={accordionClass}
        >
            <dt
                onClick={(e) => {
                    handleClick(e, props)
                }}
                className={'accordion-title'}
            >
                {title}
                <Icon
                    className={'accordion-icon'}
                    name="right"
                />
            </dt>
            <dd
                className={classNames('accordion-body',
                    getCollapsibleClassSet())}
                ref={ref => panel.current = ref}
            >
                <div
                    className={'accordion-content'}
                >
                    {children}
                </div>
            </dd>
        </dl>
    )
}
AccordionItem.defaultProps = {
    classPrefix:'accordion' 
}
export default AccordionItem 