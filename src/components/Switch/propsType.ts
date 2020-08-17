import React from 'react';
type BadgeDefaultStyle = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
export interface ISwitchPropsType{
    theme?: BadgeDefaultStyle;
    disabled?: boolean;
    solid?:boolean;
    onValueChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}