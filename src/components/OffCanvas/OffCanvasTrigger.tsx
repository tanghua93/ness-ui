import React, { cloneElement, useState } from 'react';
import createChainedFunction from '../../utils/createChainedFunction';

import useOverlay from './hooks/useOverlay'
function areEqual(prevProps: IOffCanvasTriggerProps, nextProps: IOffCanvasTriggerProps) {
    return (
        prevProps.defaultOffCanvasActive === nextProps.defaultOffCanvasActive
    )
}
function noop(){}
export interface IOffCanvasTriggerProps {
    defaultOffCanvasActive?: boolean;
    position?: 'left' | 'right';
    offCanvas?: any;
    pageContainer?: any;
    onOpen?: () => void;
    onClosed?: () => void;
    children?: React.ReactNode;
}
const OffCanvasTrigger: React.FC<IOffCanvasTriggerProps> = (props: IOffCanvasTriggerProps) => {
    const {
        defaultOffCanvasActive,
        position,
        offCanvas,
        pageContainer,
        onOpen,
        children,
        onClosed,
        ...restProps
    } = props;
    const isOffCanvasActive = defaultOffCanvasActive == null ?
        false : defaultOffCanvasActive;
    const [offCanvasActive, setOffCanvasActive] = useState(isOffCanvasActive);
    const [isClosing, setIsClosing] = useState(false);
    const renderOverlay = () => {
        if (!offCanvasActive) {
            return;
        }
        return cloneElement(offCanvas, {
            position: position,
            isClosing,
            onDismiss: close,
        });
    }
    useOverlay(renderOverlay)
    const open = () => {
        if (offCanvasActive) {
            return;
        }
        setOffCanvasActive(true)
        setIsClosing(false)
        onOpen && onOpen()
    };
    const close = () => {
        if (!offCanvasActive || isClosing) {
            return;
        }
        setIsClosing(true);
        handleClosed();
    };
    const toggle = () => {
        offCanvasActive ? close() : open();
    };
    const handleClosed = () => {
        setTimeout(() => {
            setOffCanvasActive(false)
        }, 400);
        setIsClosing(false)
        onClosed && onClosed();
    }
    const child: any = React.Children.only(children);

    const commonProps: any = {
        ...restProps
    };
    commonProps.onClick = createChainedFunction(toggle,function(){});
    return cloneElement(child, commonProps)
}

OffCanvasTrigger.defaultProps = {
    position: 'left',
    onOpen: noop,
    onClosed: noop
}

export default React.memo(OffCanvasTrigger, areEqual)