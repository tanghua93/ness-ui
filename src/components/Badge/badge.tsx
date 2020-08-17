import * as React from 'react';
import classNames from 'classnames';
import { IBadgeProps} from './propType'
const Badge: React.FC<IBadgeProps> = (props: IBadgeProps)=>{
    const {
        classPrefix,
        children,
        className,
        theme,
        dot,
        hollow,
        rounded,
        ...restProps
    } = props;
    const badgeClass = classNames(classPrefix, className,{
        [`${classPrefix}-${theme}`]: !!theme && !hollow,
        [`${classPrefix}-rounded`]: rounded || dot,
        [`${classPrefix}-tips`]: dot,
        [`${classPrefix}-hollow-${theme}`]: hollow
    }) 
    return (
        <span
            {...restProps}
           className={badgeClass} 
        >
            {children}
        </span>
    )
}

Badge.defaultProps = {
    classPrefix:'badge',
    theme:'default'
}

export default Badge