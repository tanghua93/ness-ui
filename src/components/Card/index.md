---
title: Card 卡片
---

# Card

``` tsx
    /**
     * title: 基本 
     * desc: 默认样式
    */
    import React from 'react'
    import {Card} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=>{
        return (
            <>
                <Card>
                    怎能就让这不停燃烧的心，
                    就这样耗尽消失在平庸里。
                </Card>
            </>
        )
    }
```

``` tsx
    /**
     * title: 带标题
     * desc: 设置卡片标题 `title`
    */
   import React from 'react'
   import {Card} from 'ness-ui'
    export default ()=>{
        return (
            <>
                <Card title="Card标题">
                    怎能就让这不停燃烧的心，
                    就这样耗尽消失在平庸里。
                </Card>
            </>
        )
    }
```

``` tsx
    /**
     * title: Card头部和底部
     * desc: 设置卡片头部和底部 `header`、`footer`
    */
   import React from 'react'
   import {Card} from 'ness-ui'
    export default ()=>{
        return (
            <>
                <Card header="Card header" footer="Card footer">
                    怎能就让这不停燃烧的心，
                    就这样耗尽消失在平庸里。
                </Card>
            </>
        )
    }
```

``` tsx
    /**
     * title: 自定义Card头部和底部
     * desc: 设置卡片头部和底部 `header`、`footer`
    */
    import React from 'react'
    import {Card} from 'ness-ui'
    const header = (
        <Card.Item cover="https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835_960_720.jpg">
            <h3 className="card-title">
                新闻: XXXX又中奖了
            </h3>
        </Card.Item>
    );
    const footer = (
        <Card.Item role="footer">
            <a href="javascript: void(0)">分享</a>
            <a href="javascript: void(0)">评论</a>
            <a href="javascript: void(0)">转发</a>
        </Card.Item>
    );

    export default ()=>{
        return (
            <>
                <Card header={header} footer={footer}>
                 我思念的城市
                </Card>
            </>
        )
    }
```

## Card Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title        | Card标题   | ReactNode | -- | 
| header | Card头部 | ReactNode   | -- | 
| footer | Card底部 | ReactNode   | -- |
| className      |   添加样式   | string |  --  |

## Card.Item Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| role        | 充当的角色，值为`header & footer`默认为 header。   | string | -- | 
| cover | Card封面图片URL，只有当role值为header时有效 | string   | -- |
| className      |   添加样式   | string |  --  | 