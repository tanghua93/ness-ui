import React from 'react';
import {
    render,
    unmountComponentAtNode
} from 'react-dom';
function useOverlay(renderOverlay: any, container?: any) {
    const node = React.useRef<Element | any>(null);
    const getContainerDOMNode: () => HTMLElement = React.useCallback(() => {
        return document.querySelector(container) || document.body;
    }, [container]);
    const createPortal = React.useCallback(() => {
        node.current = document.createElement('div');
        node.current.className = 'offvanvas-portal';
        getContainerDOMNode().appendChild(node.current);
    }, [getContainerDOMNode])
    const renderOverlayItem = React.useCallback(() => {
        if (!node.current) {
            createPortal();
        }
        const overlay = renderOverlay();
        if (overlay !== null) {
            render(
                overlay,
                node.current
            )
        } else {
            unmountOverlay();
        }
    }, [renderOverlay, createPortal])
    const unmountOverlay = () => {
        unmountComponentAtNode(node.current);
    }
    React.useEffect(() => {
        renderOverlayItem()
        return () => {
            unmountOverlay()
            if (node) {
                getContainerDOMNode().removeChild(node.current);
                node.current = null;
            }
        }
    }, [renderOverlay, getContainerDOMNode])
    return getContainerDOMNode
}

export default useOverlay
