export interface IRefreshProps {
    classPrefix?: string;
    distanceToRefresh: number;
    onRefresh?: (resolve: () => void, reject: () => void) => void;
    onLoadMore?: (resolve: () => void) => void;
    autoLoadMore?: boolean;
    hasMore?: boolean;
    className?: string;
    pullingText?: string;
    pullingEnoughText?: string;
    refreshedText?: string;
    refreshingText?: string;
    loadMoreText?: string;
    loadingText?: string;
    children?: React.ReactNode;
}