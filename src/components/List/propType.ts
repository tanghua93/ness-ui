type RoleType = 'header' | 'item';
type ListType = 'input' | 'radio' | 'checkbox'
export interface IListItemProps {
    classPrefix?: string;
    role?: RoleType;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    href?: string;
    className?: string;
    isLink?: boolean;
    media?: React.ReactNode;
    after?: React.ReactNode;
    nested?: ListType;
    children?: React.ReactNode;
    target?: string;
    disabled?: boolean;
}

export interface IListProps {
    classPrefix?: string;
    inset?: boolean;
    style?: React.CSSProperties;
}