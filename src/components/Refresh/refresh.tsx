import React from 'react'
import classNames from 'classnames';
import { IRefreshProps } from './propType'
enum STATS {
    init = '',
    pulling = 'pulling',
    enough = 'pulling enough',
    refreshing = 'refreshing',
    refreshed = 'refreshed',
    reset = 'reset',
    loading = 'loading'
}

// 拖拽的缓动公式 - easeOutSine
function easing(distance: number) {
    const currentTime = distance;
    const begInnIng = 0;
    const duration = window.screen.availHeight;
    const changeValue = duration / 2.5;
    return changeValue * Math.sin(currentTime / duration * (Math.PI / 2)) + begInnIng;
}
let initialTouch: {[key: string]: number } = {};
const Refresh: React.FC<IRefreshProps> = (props: IRefreshProps) => {
    const {
        onLoadMore,
        onRefresh,
        autoLoadMore,
        hasMore,
        distanceToRefresh,
        className,
        children,
        classPrefix,
        pullingText,
        pullingEnoughText,
        refreshedText,
        loadMoreText,
        loadingText,
        refreshingText
    } = props;
    const [loaderState, setLoaderState] = React.useState(STATS.init);
    const [pullHeight, setPullHeight] = React.useState(0);
    const touchStart = (e: React.TouchEvent) => {
       
        if (!canRefresh()) return;
        if (e.touches.length === 1) {
            const panel = panelRef.current;
          
            initialTouch = {
                clientY: e.touches[0].clientY,
                scrollTop: panel.scrollTop,
            };
        }
    }
    let panelRef:any = React.useRef(null);
    const touchMove = (e: React.TouchEvent) => {
        if (!canRefresh()) return;
        const panel = panelRef.current;
        const { scrollTop } = panel;
        const distance = calculateDistance(e.touches[0]);
        if (distance > 0 && scrollTop <= 0) {
            let pullDistance = distance - initialTouch.scrollTop;
        
            if (pullDistance < 0) {
                pullDistance = 0;
                initialTouch.scrollTop = distance;
            }
            const pullHeight = easing(pullDistance);
            if (pullHeight) e.preventDefault();
             setLoaderState(pullHeight > distanceToRefresh ? STATS.enough : STATS.pulling);
  
            setPullHeight(pullHeight)
        }
    }

    const touchEnd = () => {
        if (!canRefresh()) return;
        const endState = {
            loaderState: STATS.reset,
            pullHeight: 0,
        };

        if (loaderState === STATS.enough) {
            setLoaderState(STATS.refreshing)
            setPullHeight(0)
            onRefresh && onRefresh(() => {

                setLoaderState(STATS.refreshed)
                setPullHeight(0)
            }, () => {
                // reject
                setLoaderState(endState.loaderState)
                setPullHeight(endState.pullHeight)
            });
        } else {
            setLoaderState(endState.loaderState)
            setPullHeight(endState.pullHeight)
        }// reset
    }

    const loadMore = () => {
        setLoaderState(STATS.loading)
        onLoadMore && onLoadMore(() => {
            setLoaderState(STATS.init)
        });
    }

    const scroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        if (
            autoLoadMore
            && hasMore
            && loaderState !== STATS.loading
        ) {
            const panel = e.currentTarget;
            const scrollBottom = panel.scrollHeight - panel.clientHeight - panel.scrollTop;

            if (scrollBottom < 5) loadMore();
        }
    }
    const animationEnd = () => {
        const newState: any = {};

        if (loaderState === STATS.refreshed) newState.loaderState = STATS.init;
        setLoaderState(newState.loaderState)
    }

    const calculateDistance = (touch: any) => {

        return touch.clientY - initialTouch.clientY
    }

    const canRefresh = () => {
        return onRefresh && [STATS.refreshing, STATS.loading].indexOf(loaderState) < 0;
    }

    const renderItem = () => {
        const footer = hasMore ? (
            <div className="tloader-footer">
                <div className="tloader-btn" onClick={loadMore}>{loadMoreText}</div>
                <div className="tloader-loading"><i className="ui-loading" />{loadingText}</div>
            </div>
        ) : null;
        const style: any = pullHeight ? {
            WebkitTransform: `translate3d(0,${pullHeight}px,0)`,
        } : null;
        const tloaderClass = classNames(classPrefix, className,{
            [`state-${loaderState ? loaderState:''}`]: true
        });
        const isLoading = (loadState:string)=>{
            switch (loadState) {
                case 'pulling':
                    return pullingText
                case 'pulling enough':
                    return pullingEnoughText
                case 'refreshed':
                    return refreshedText
                case 'reset':
                    return pullingText 
                default:
                    return '';
            }
        }
        return (
            <div
                ref={panelRef}
                className={tloaderClass}
                onScroll={scroll}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                onAnimationEnd={animationEnd}
            >

                <div className="tloader-symbol">
                    <div className="tloader-msg"><i />{isLoading(loaderState)}</div>
                    <div className="tloader-loading"><i className="ui-loading" />{refreshingText}</div>
                </div>
                <div className="tloader-body" style={style}>{children}</div>
                {footer}
            </div>
        );
    }

    return renderItem()
}
Refresh.defaultProps = {
    classPrefix:'tloader',
    distanceToRefresh: 60,
    autoLoadMore: true,
    pullingText:'下拉刷新',
    pullingEnoughText:'松开刷新',
    refreshingText:'正在刷新...',
    refreshedText:'刷新成功',
    loadMoreText: '点击加载更多',
    loadingText:'正在加载...',

}

export default Refresh 