---
title: Refresh 上拉加载、下拉刷新
---
# Refresh 
```tsx
    /**
     * title: 提示
     * desc: 下拉刷新，上拉加载更多
    */
    import React from 'react'
    import {Refresh,List} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    interface IState {
        canRefreshResolve: boolean;
        listLen: number;
        hasMore: boolean;
        initializing: number;
    }
    class RefreshC extends React.Component<any, IState> {
        constructor(props: any) {
            super(props);
            this.state = {
                canRefreshResolve: true,
                listLen: 0,
                hasMore: false,
                initializing: 1,
            };
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    listLen: 15,
                    hasMore: true,
                    initializing: 1, // initialized
                });
            }, 2000);
        }
        refresh = (resolve: () => void, reject: () => void) => {
            setTimeout(() => {
                const { canRefreshResolve } = this.state;
                if (!canRefreshResolve) reject();
                else {
                    this.setState({
                        listLen: 15,
                        hasMore: true,
                    });

                    resolve();
                }
            }, 2000);
        }
        loadMore = (resolve: () => void) => {
            setTimeout(() => {
                const { listLen } = this.state;
                const l = listLen + 9;
                this.setState({
                    listLen: l,
                    hasMore: l > 0 && l < 50,
                });

                resolve();
            }, 2000);
        }
        toggleCanRefresh = () => {
            const { canRefreshResolve } = this.state;
            this.setState({ canRefreshResolve: !canRefreshResolve });
        }
        render() {
            const {
                listLen, hasMore, initializing, refreshedAt, canRefreshResolve,
            } = this.state;
            const list = [];

            if (listLen) {
                for (let i = 0; i < listLen; i++) {
                    list.push((
                        <List.Item title={'列表' + i} key={i}>

                        </List.Item>
                    ));
                }
            }
            return (
                <div className="view-refresh">
                        <Refresh
                            className="main"
                            onRefresh={this.refresh}
                            onLoadMore={this.loadMore}
                            hasMore={hasMore}
                            distanceToRefresh={60}
                        >
                            <List style={{margin: 0,}} inset={false}>{list}</List>
                        </Refresh>
                
                    </div>
            
            
            );
        }
    }
    export default ()=> <RefreshC />
```

## Refresh Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| distanceToRefresh   | 下拉刷新拖动距离  | number | 60 |
| onRefresh        | 下拉刷新回调，有两个参数，刷新成功的回调和失败的回调  | (resolve, reject):void | -- |  
| onLoadMore | 上拉加载或点击加载更多回调函数，参数resolve在调用成功后一定要进行调用进行状态初始化 | (resolve):void   | -- |
| autoLoadMore      |  是否自动加载更多   | boolean |  false |
| hasMore      |  是否还有更多数据   | boolean |  --  |
| pullingText     |  开始下拉时显示的文字   | string |  `下拉刷新` |
| pullingEnoughText     |  下拉到可以触发刷新时的提示   | string |  `松开刷新` |
| refreshingText     |  处于刷新状态的提示   | string |  `正在刷新...` |
| refreshedText     |  刷新结束的状态   | string |  `刷新成功` |
| loadMoreText     |  当autoLoadMore为false时显示的点击加载更多的文字   | string |  `点击加载更多` |
| loadingText     |  处于加载中的文字   | string |  `正在加载...` |
