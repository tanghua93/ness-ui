import React from 'react';
import classNames from 'classnames';
export interface IViewsProps{
    classPrefix?:string;
    className?:string;
    component?:any; 
}
const View: React.FC<IViewsProps> = (props: IViewsProps)=>{
    const {
        component,
        className,
        classPrefix,
        ...restProps
    } = props;
    return React.createElement(component, {
         ...restProps,
        className: classNames(classPrefix,className)
    });
}
View.defaultProps = {
    classPrefix: 'view',
    component: 'div'
}


export default View;
