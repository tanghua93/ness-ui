import * as React from 'react';
import TransitionEvents from '../../../utils/TransitionEvents'

export default function useToggleCollaps(props:any, panel:any){
    const defaultExpanded = props.defaultExpanded != null ? props.defaultExpanded:false;
    const [collapsing, setCollapsing] = React.useState(false);
    const [expanded, setExpanded] = React.useState(defaultExpanded);
    const isFirstRender = React.useRef(true);
    const prevExpandedProps = React.useRef(null);
    const prevExpandedState = React.useRef(null); 
    const addEndEventListener = (node: HTMLElement | null, complete: () => void)=> {
        node && TransitionEvents.on(node, complete);
    }
    const removeEndEventListener = (node: HTMLElement | null, complete: () => void)=> {
        node && TransitionEvents.off(node, complete);
    }
    const isExpanded = ()=> {
        return props.expanded != null ? props.expanded : expanded;
    }
    const getCollapsibleDimensionValue = ()=> {
        return panel && panel.scrollHeight ? panel.scrollHeight : 0;
    }
    const getCollapsibleDOMNode = ()=> {
        if (!panel) {
            return null;
        }
        return panel;
    }
    const getCollapsibleClassSet = React.useCallback(()=> {
        const classSet:any = {};
        classSet['collapsing'] = collapsing;
        classSet['collapse'] = !collapsing;
        classSet['in'] = isExpanded() &&
            !collapsing;
        return classSet;
    }, [collapsing])
    const checkToggleCollapsing = React.useCallback((prevProps: any, prevState: any)=> {
        const wasExpanded = prevProps != null ? prevProps :
            prevState;
        if (wasExpanded) {
            handleCollapse();
        } else {
            handleExpand();
        }
    }, [isExpanded()])
    const handleExpand = ()=> {
        const node = getCollapsibleDOMNode();
        const complete = () => {
            removeEndEventListener(node, complete);
            if (node) node.style['height'] = '0px';
            setCollapsing(false)
        };
        addEndEventListener(node, complete);
        setCollapsing(true)
    }
    const handleCollapse = ()=> {
        const node = getCollapsibleDOMNode();
        const complete = () => {
            removeEndEventListener(node, complete);
            setCollapsing(false)
        };
        addEndEventListener(node, complete);
        setCollapsing(true)
    }
    const checkStartAnimation =()=> {
        if (!collapsing) {
            return;
        }
        const node = getCollapsibleDOMNode();
        const value = getCollapsibleDimensionValue();
        let result: string;
        if (isExpanded()) {
            result = value + 'px';
        } else {
            result = '0px';
        }
        
        if (node) node.style['height'] = result
    }
    React.useEffect(()=>{        
        prevExpandedProps.current = props.expanded;
        prevExpandedState.current = expanded; 
        if (getCollapsibleDOMNode()) {
            checkToggleCollapsing(prevExpandedProps.current, prevExpandedState.current);
            checkStartAnimation();
        }
    }, [collapsing, isExpanded()])
    return {
        getCollapsibleClassSet,
        isExpanded
    }
}