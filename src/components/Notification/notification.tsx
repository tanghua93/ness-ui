import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { createPortal } from 'react-dom'
import Icon from '../Icon/icon'
import { INprops} from './propType'
const Notification: React.FC<INprops> = (props) => {
    const {
        animateEnd,
        visible,
        classPrefix,
        title,
        children,
        closable,
        onClose,
        className,
        theme,
        ...restProps
    } = props
    const [closed, setClosed] = useState<boolean>(false)
    React.useEffect(()=>{
        setClosed(visible)
    }, [visible])
    const classes = classNames(classPrefix, className, `${classPrefix}-animated`, {
        [`${classPrefix}-${theme}`]: !!theme
    })
    const renderCloseBtn = () => {
        return closable ? (
            <Icon
                className={`${classPrefix}-icon`}
                name="close"
                onClick={onClose}
            />
        ) : null;
    }
    const NotificationBar = (
        <div
            className={classes}
            {...restProps}
        >
            <div className={`${classPrefix}-content`}>
                {title ? (
                    <h3 className={`${classPrefix}-title`}>
                        {title}
                    </h3>
                ) : null}
                {children}
            </div>
            {renderCloseBtn()}
        </div>
    )
    return createPortal(
        <CSSTransition
            in={closed}
            timeout={1000}
            classNames={`${classPrefix}`}
            unmountOnExit
        >
            {NotificationBar}
        </CSSTransition>
        , document.body)

}
Notification.defaultProps = {
    classPrefix: 'notification'
}

export default Notification