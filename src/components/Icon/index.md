---
title: Icon 图标
---
# Icon
```tsx
    /**
     * title: 提示
     * desc: 如果内置的图标不满足需求，可以引入自己的 `iconfont` 文件，复用 Icon组件的样式名，命名规则：icon-[图标名称]
    */
    import React from 'react'
    import {Icon,Grid} from 'ness-ui'
    const icons = ['back', 'bars', 'caret', 'check', 'close', 'code', 'compose', 'download', 'edit', 'forward', 'gear', 'home', 'info', 'list', 'more-vertical', 'more', 'pages', 'pause', 'person', 'play', 'plus', 'refresh', 'search', 'share', 'sound', 'star-filled', 'star', 'trash', 'up', 'right', 'down', 'left',
      'message',
  'message-fill',
  'warning',
  'like',
  'like-fill',
  'location',
  'user-fill',
  'phone',
  'history',
  'gear-fill',
  'male',
  'female',
  'location-fill',
  'money',
  'money-fill',
  'delete-fill',
  'add-fill',
  'notific',
  'notific-fill', 
  'scan',
  'weibo',
  'wechat',
  'taobao',
  'qq',
  'qq-space',
  'douban',
  'wechat-friend'
    
    
    ];
    const renderItem = ()=>{
        return <Grid avg={4} bordered style={{textAlign:'center'}}>
            {
                icons.map((icon, i) => {
                    return (
                        <Grid.Item key={i}>
                            <Icon name={icon} key={i}></Icon>
                            <div key={i} className="sk-icon-name text-truncate">
                                {icon}
                            </div>
                        </Grid.Item>
                    );
                })
            }
        </Grid>
    }
    export default ()=> renderItem()
```

## Icon Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name        | 内置 icon 名称  | string | -- |
| href        | 跳转链接  | string | -- |  
| className | 样式类名 | string   | -- |
| style      |   自定义样式   | Object |  --  |