import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Button from '../Button/button';
import TransitionEvents from '../../utils/TransitionEvents';
import Icon from '../Icon/icon';
import { IModalPropsType } from './propType'
const TRANSITION_TIMEOUT = 300;
function noop() {
};
export interface IModalProps extends IModalPropsType {
    classPrefix?: string;
    children?: React.ReactNode;
    modalWidth?: number;
    modalHeight?: number;
    [key:string]:React.ReactNode;
}
type classSetType = {
    [key: string]: boolean
}

const Modal: React.FC<IModalProps> =(props: IModalProps) => {
    const {
        role,
        cancelText,
        onAction,
        beforeClose,
        onOpen,
        afterClose,
        classPrefix,
        closeViaBackdrop,
        children,
        className,
        title,
        closeBtn,
        confirmText,
        modalWidth,
        modalHeight,
        isOpen
    } = props;
    const [closed, setClosed] = React.useState(true);
    const [isClosing, setIsClosing] = React.useState(false);
    let timerRef: NodeJS.Timeout | any = null;
    const isClosed = React.useCallback(() => {
        return closed;
    }, [closed])
    const open = React.useCallback(() => {
        if (isClosed()) {
            setClosed(false)
            setIsClosing(false);
            onOpen && onOpen();
        }
    }, [onOpen, isClosed])
    React.useEffect(() => {
        if (isOpen) {
            open()
        }
       
        return ()=>{
           clearTimeout(timerRef) 
        }
    }, [isOpen]);
    const isPopup = () => {
        return role === 'popup';
    }
    const isActions = () => {
        return role === 'actions';
    }
    // Get input data for prompt modal
    const getFieldData = (target:any) => {
        let data:string[] = [];
        let inputs: NodeListOf<HTMLInputElement> = target.parentNode?.querySelectorAll('input[type=text]');

        if (inputs) {
            for (let i = 0; i < inputs.length; i++) {
                data.push(inputs[i].value);
            }
        }
        return (data.length === 0) ? null : ((data.length === 1) ? data[0] : data);
    }
    const handleAction = (e: React.MouseEvent, data?: any) => {
        let willClose: boolean = true;
        if (role === 'prompt' && data) {
            data = getFieldData(promptRef.current);
            onAction && onAction.call(e.currentTarget, data, e);
        } else {
            onAction && onAction.call(e.currentTarget, data, e);
        }
        willClose && requestClose(e);
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget || !closeViaBackdrop) {
            return;
        }
        requestClose(e);
    }
   
    const close = () => {
        if (isClosed() || isClosing) {
            afterClose && afterClose();
            return;
        }
        setIsClosing(true)
    }
    // for user actions
    const requestClose = (e: React.MouseEvent) => {
        close()
        beforeClose && beforeClose(e);
        timerRef =  setTimeout(() => {
            setClosed(true);
            setTimeout(() => {
                handleClosed();
            }, TRANSITION_TIMEOUT);
        }, TRANSITION_TIMEOUT);
    }
    const handleClosed = () => {
        setClosed(true)
        setIsClosing(false)
        afterClose && afterClose();
    }
    const modalRef = React.useRef(null);
    const renderActions = (classSet: string) => {
    //  classSet[classPrefix] = false;
        return (
            <div
                className={classNames(className, classSet)}
                key="modalActions"
                ref={modalRef}
            >
                {children}
                <div className={`${classPrefix}-actions-group`}>
                    <Button
                        onClick={requestClose}
                        block
                        btnType={'secondary'}
                    >
                        {cancelText}
                    </Button>
                </div>
            </div>
        );
    }

    const renderPopup = (classSet?: any) => {
        return (
            <div
                className={classNames('popup',classSet,className, `${classPrefix}-popup`)}
                key="modalPopup"
                ref={modalRef}
            >
                <div className={`popup-inner`}>
                    <div className={`popup-header`}>
                        {title ? (
                            <h4 className={`popup-title`}>
                                {title}
                            </h4>
                        ) : null}
                        <Icon
                            name="close"
                            className={`popup-icon`}
                            onClick={requestClose}
                        />
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    const renderHeader = () => {
        let closeIcon = closeBtn && !role ? (
            <Icon
                name="close"
                className={`${classPrefix}-icon`}
                onClick={requestClose}
            />
        ) : null;

        return (title || closeIcon) ? (
            <div
                className={`${classPrefix}-header`}
                key="modalHeader"
            >
                {title ? (
                    <h4
                        className={`${classPrefix}-title`}
                    >
                        {title}
                    </h4>) : null}
                {closeIcon}
            </div>) : null;
    }

    // Render alert/confirm/prompt buttons
    let promptRef = React.useRef(null)
    const renderFooter = () => {
        let buttons;
        let btnClass = `${classPrefix}-btn`;

        switch (role) {
            case 'alert':
                buttons = (
                    <span
                        key="modalBtn"
                        onClick={(e: React.MouseEvent) => {
                            handleAction(e, null)
                        }}
                        className={btnClass}
                    >
                        {confirmText}
                    </span>);
                break;
            case 'confirm':
            case 'prompt':
                let cancel = (role === 'prompt') ? null : false;
                buttons = [cancelText, confirmText].map((text, i) => {
                    return (
                        <span
                            key={'modalBtn' + i}
                           
                            onClick={(e: React.MouseEvent) =>{
                          
                                handleAction(e, i === 0 ? cancel : true)
                            }}
                            className={btnClass}
                        >
                            {text}
                        </span>
                    );
                });
                break;
            default:
                buttons = null;
        }

        return buttons ? (
            <div className={`${classPrefix}-footer`}>
                {buttons}
            </div>
        ) : null;
    }

    const renderTransition = (children: React.ReactNode) => {
       
        return (
            <CSSTransition
                in={isOpen}
                timeout={TRANSITION_TIMEOUT}
                classNames={`${classPrefix}-transition`}
                unmountOnExit
                appear={true} 
            >
                {children}
            </CSSTransition>
        );
    }
    const renderBackdrop = (children: React.ReactNode) => {
        if (isClosed()) {
          
            return null;
        }
        const onClick = handleBackdropClick || null;
        const preventDefault = (e: React.TouchEvent) => {
            // prevent window scroll when touch backdrop
            e.preventDefault();
        };

        let classSet: classSetType = {};
       
        classSet[`${classPrefix}-backdrop`] = true;
        classSet[`active`] = true;
        classSet[`${classPrefix}-backdrop-out`] = isClosing;

        return (
            <span>
                {children}
                <div
                    className={classNames(classSet)}
                    style={{ height: window.innerHeight }}

                    onClick={onClick}
                    onTouchMove={preventDefault}
                ></div>
            </span>
        );
    }

    const renderModal = () => {

        if (closed) {
           
            return null;
        }
        // listen out animation end envent
        if (isClosing) {
            let node =  modalRef.current;

            if (node) {
                let closedHandler = () => {
                    TransitionEvents.off(document.body, closedHandler);
                  
                };
              
                TransitionEvents.on(document.body, closedHandler);
            }
        }

        let modal;
        const actionsClassSet = classNames({
            [`${classPrefix}-out`]: isClosing,
            [`${classPrefix}-${role}`]: !!role && role !== 'loading'
        })
        if (isActions()) {
            modal = renderTransition(renderActions(actionsClassSet));
        } else if (isPopup()) {
            modal = renderTransition(renderPopup(actionsClassSet));
        } else {
            let style = {
                width: modalWidth,
                height: modalHeight
            };
            modal = (
                <div
                    // {...removeUnknownProp(props)}
                    style={style}
                    ref={promptRef}
                    className={classNames('modal',actionsClassSet, className)}
                >
                    <div
                        className={role === 'loading' ? `modal-${role}`:"modal-inner"}
                        ref={modalRef}
                    >
                        <div
                            className={`${classPrefix}-dialog`}
                        >
                            {renderHeader()}
                            <div
                                className={`${classPrefix}-body`}

                            >
                                {children}
                            </div>
                            {renderFooter()}
                        </div>
                    </div>
                </div>
            );
        }

        return modal;
    }

    return renderBackdrop(renderModal())
}
Modal.defaultProps = {
    classPrefix: 'modal',
    confirmText: '确定',
    cancelText: '取消',
    closeBtn: true,
    onAction: noop,
    onOpen: noop,
    afterClose: noop,
    beforeClose: noop
}
export default Modal
