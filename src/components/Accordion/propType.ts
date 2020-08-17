export interface IAccordionProps {
    classPrefix?: string;
    /* 选中的key */
    activeKey?: string | number;
    defaultActiveKey?: number;
    className?: string;
    children?: React.ReactNode;
    onChange?: <T>(key:T) => void,
}
export interface IAccordionItemProps {
    title?: React.ReactNode;
    eventKey?: string | number;
    classPrefix?: string;
    expanded?: boolean;
    defaultExpanded?: boolean;
}