---
title: Button 按钮
---
# Button

``` tsx
    /**
     *   title: 按钮颜色
     *   desc: 按钮分5种样式类型：`default` | `primary` | `secondary` | `success` |`warning` | `danger` | `dark`;
    */
    import React from 'react'
    import {Button} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const btnType = [
        `default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`
    ];
    const renderItem = ()=>{
        return btnType.map((item)=>{
            return (<Button btnType={item}>{item}</Button>)
        })
    }
    export default () =>renderItem(); 
```
``` tsx
    /**
     *   title: 按钮尺寸
     *   desc: 按钮有4种尺寸大小：`xs` | `sm` | `lg` | `xl`
    */
    import React from 'react'
    import {Button} from 'ness-ui'
    const btnSize = [
        `xs`,
        `sm`,
        `lg`,
        `xl`
    ];
    const renderItem = ()=>{
        return btnSize.map((item)=>{
            return (<Button disabled={true} btnType="secondary" size={item}>{item}</Button>)
        })
    }
    export default () =>renderItem(); 
```

``` tsx
    /**
     *   title: 镂空按钮
     *   desc: 设置hollow为true时，按钮会变成镂空按钮
    */
    import React from 'react'
    import {Button} from 'ness-ui'
    const btnType = [
        `default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`
    ];;
    const renderItem = ()=>{
        return btnType.map((item)=>{
            return (<Button btnType={item} hollow>Hollow</Button>)
        })
    }
    export default () =>renderItem(); 
```


``` tsx
    /**
     *   title: block自适应父元素宽度
     *   desc: 设置block为true时，按钮宽度会调整为其父元素的宽度
    */
    import React from 'react'
    import {Button} from 'ness-ui'
    const btnType = [
        `default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`
    ];;
    const renderItem = ()=>{
        return btnType.map((item)=>{
            return (<Button btnType={item} block>block</Button>)
        })
    }
    export default () =>renderItem(); 
```

``` tsx
    /**
     *   title: 禁用按钮
     *   desc: 设置disabled为true时，按钮将会置灰，此时按钮不可操作
    */
    import React from 'react'
    import {Button} from 'ness-ui'
    const btnType = [
        `default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`
    ];;
    const renderItem = ()=>{
        return btnType.map((item)=>{
            return (<Button btnType={item} disabled={true}>disabled</Button>)
        })
    }
    export default () =>renderItem(); 
```
``` tsx
    /**
     *   title: 圆形按钮
     *   desc: 设置`circle`为true时，按钮将会置灰，此时按钮不可操作
    */
    import React from 'react'
    import {Button} from 'ness-ui'
    const btnType = [
        `default`,
        `primary`,
        `secondary`,
        `success`,
        `warning`,
        `danger`,
        `dark`
    ];
    const renderItem = ()=>{
        return btnType.map((item)=>{
            return (<Button circle block btnType={item} circle>circle</Button>)
        })
    }
    export default () =>renderItem(); 
```
## Button Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| btnType    | 按钮类型，可选值为`default`、`secondary`、`success`、`warning`、`danger`、`link` |   string   |   default  |
| size    | 按钮大小，可选值为`xs`、`sm`、`lg`、`xl`| string | -- |
| hollow    | 当hollow为true，按钮变为镂空 | boolean | false |
| circle | 是否应用圆形样式 | boolean | false |
| block    | 当block为true，按钮会自适应父元素宽度 | boolean | false |  
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |  --  |
| style    | 自定义样式 |   Object  | -- |
| className |  样式类名 | string | -- |