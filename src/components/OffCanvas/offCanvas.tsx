import React from 'react';
import classNames from 'classnames';


export interface IOffCanvasProps {
    classPrefix?: string;
    position?: 'left' | 'right';
    onDismiss?: () => void;
    children?:React.ReactNode;
    isClosing?:boolean;
    className?:string;
}

const OffCanvas: React.FC<IOffCanvasProps> = (props: IOffCanvasProps)=>{
    const {
        classPrefix,
        position,
        onDismiss,
        children,
        isClosing,
        className,
        ...restProps
    } = props;
    const backdrop = React.useRef(null);
    const overlay = React.useRef(null);  
    const [out, setOut] = React.useState(isClosing)
    const handleBackdropClick = (e: any)=> {
        if (e && e.target === backdrop.current) {
            setOut(true)
            onDismiss && onDismiss();
        }
    }
    const renderBackdrop = (child:React.ReactNode) => {
        const onClick = handleBackdropClick || null;
        
        const classSet = {
            ['modal-backdrop']: true,   // eslint-disable-line
            ['modal-backdrop-out']: out,// eslint-disable-line
        };
     
      
        return (
            <span>
                {child}
                <div
                    onClick={onClick}
                    ref={backdrop}
                    className={classNames(classSet)}
                />
            </span>
        );
    }
    const offCanvasClass = classNames(classPrefix, className,{
        [`${classPrefix}-out`]: out,
        [`${classPrefix}-${position}`]: !!position
    })
    const offCanvas = (
        <div
            {...restProps}
            className={offCanvasClass}
            ref={overlay}
        >
            {children}
        </div>
    )
  
    return renderBackdrop(offCanvas)
}  
OffCanvas.defaultProps = {
    classPrefix:'offcanvas',
    position: 'left'
}

export default OffCanvas