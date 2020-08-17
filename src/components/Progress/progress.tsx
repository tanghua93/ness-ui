import React from 'react';
import classNames from 'classnames';
export type ButtonSize =
    "xs" |
    "sm" |
    "lg" |
    "xl";
export interface IProgressProps{
    percent?:string | number;
    style?:React.CSSProperties;
    theme?:
    "primary" | 
    "secondary" |
    "success" |
    "warning" |
    "danger" |
    "dark";
    classPrefix?:string;
    size?: ButtonSize;
    stripes?:boolean;
    rounded?:boolean;
    barStyle?: React.CSSProperties;
    animate?:boolean;
    unfilled?:boolean;
    children?:React.ReactNode;
}

const Progress: React.FC<IProgressProps> = (props: IProgressProps)=>{
    const {
        percent,
        classPrefix,
        theme,
        stripes,
        size,
        rounded,
        animate,
        barStyle,
        children,
        unfilled,
        style
    } = props;
    const proGressClassNames = classNames(classPrefix,{
        [`${classPrefix}-${theme}`]: !!theme,
        [`${classPrefix}-rounded`]: rounded,
        [`${classPrefix}-${size}`]: !!size,
        [`${classPrefix}-animate`]: animate,
        [`${classPrefix}-stripes`]: stripes,
        [`${classPrefix}-unfilled`]: unfilled,
    })
    const renderStripe = ()=>{
        return stripes ?(
            <span style={style}>
                {children}
            </span>
        ) : children
    }
    return <>
        <div style={barStyle} className={proGressClassNames}>
            <span style={{ width: percent + '%',...style}}>
                    {renderStripe()} 
                </span>
            </div>
            </>
}
Progress.defaultProps = {
    classPrefix: 'progress',
    theme:'primary',
    size:'xs'
}
export default Progress