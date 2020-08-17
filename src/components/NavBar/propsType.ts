type Style ='primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
export interface INavBarItemProps {
    component?: React.ReactNode;
    itemTitle?: React.ReactNode;
    icon?: React.ReactElement;
    isClone?: boolean;
    className?: string;
    onClick?: (e?: React.MouseEvent) => void;
    [key:string]:any;
}
export interface INavBarPropsType{
    title?: React.ReactNode;
    theme?: Style;
    leftContent?: INavBarItemProps[];
    rightContent?: INavBarItemProps[];
    titleOnLeft?: boolean;
}

