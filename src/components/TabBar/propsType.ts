import React from 'react';
type Style = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
export interface ITabBarPropsType{
    theme?: Style;
    hidden?:boolean;
    barColor?: string;
    selectedIconColor?: string;
    selectedTextColor?: string;
    onAction?: (key:number,e: React.MouseEventHandler<HTMLElement>) => void;
}
export type tabIconType =  | string
export interface ITabBarItemPropsType {
    icon?: any;
    title?:React.ReactNode;
    eventKey?: any;
    badge?: string | number;
    badgeStyle?: React.CSSProperties;
    selected?: boolean;
    href?: string;
}