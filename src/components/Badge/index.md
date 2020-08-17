---
title: Badge 小徽标
---
# Badge
```tsx
    /**
     * title: 基本 
     * desc: 小徽章，有7种主题颜色 `default` | `primary` | `secondary` | `success` | `warning` | `danger` | `dark`;
    */
    import React from 'react'
    import {Badge} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const theme = [`default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`];
    const renderItem = ()=>{
        return theme.map((item)=>{
            return <><Badge theme={item}>{item}</Badge>&nbsp;&nbsp;&nbsp;&nbsp;</>
        }) 
    }
    export default ()=> renderItem()
```

``` tsx
    /**
     * title: 圆形徽标
     * desc: 当设置rounded 时，会显示成圆形徽章
    */
    import React from 'react'
    import {Badge} from 'ness-ui'
   const theme = [`default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`];
    const renderItem = ()=>{
        return theme.map((item,i)=>{
            return <><Badge rounded theme={item}>{i}</Badge>&nbsp;&nbsp;&nbsp;&nbsp;</>
        }) 
    }
    export default ()=> renderItem() 
```

``` tsx
    /**
     * title: 小圆点徽标
     * desc: 当设置 `dot` 时，会显示成小圆点
    */
    import React from 'react'
    import {Badge} from 'ness-ui'
   const theme = [`default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`];
    const renderItem = ()=>{
        return theme.map((item,i)=>{
            return <><Badge dot theme={item}></Badge>&nbsp;&nbsp;&nbsp;&nbsp;</>
        }) 
    }
    export default ()=> renderItem() 
```


```tsx
    /**
     * title: 镂空徽标
     * desc: 当设置`hollow` 时，会显示成镂空徽标
    */
    import React from 'react'
    import {Badge} from 'ness-ui'
    const theme = [`default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`];
    const renderItem = ()=>{
        return theme.map((item)=>{
            return <><Badge hollow theme={item}>{item}</Badge>&nbsp;&nbsp;&nbsp;&nbsp;</>
        }) 
    }
    export default ()=> renderItem()
```
## Badge Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| theme        | 有7种主题颜色 `default` 、 `primary`、`secondary`、`success`、`warning`、`danger`、`dark`   | string | -- | 
| rounded | 是否应用椭圆样式。 | boolean   | false | 
| dot | 是否应用小圆点样式。 | boolean   | false | 
| className | 样式类名 | string   | -- |
| style      |   自定义样式   | Object |  --  |