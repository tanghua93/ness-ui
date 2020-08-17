---
title: Progress 进度条
---
# Progress

```tsx
    /**
     * title: 基本
     * desc: 内置 6 种主题颜色，通过`theme`属性进行设置，默认值为 `primary`，也可以通过`style`属性自定义颜色，`percent` 进行百分比设置
    */
    import React from 'react'
    import {Progress} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=>(
        <>
           <Progress percent={20}/> 
           <p></p>
           <Progress theme="success" percent={30}></Progress>
           <p></p>
           <Progress theme="warning" percent={40}/> 
           <p></p>
           <Progress theme="danger" percent={50} />
           <p></p>
           <Progress theme="secondary" percent={60}/> 
           <p></p>
           <Progress theme="dark" percent={80}/>  
           
        </>
    )
```
```tsx
    /**
     * title: 形状
     * desc: 通过`rounded`属性进行设置为圆形进度条，默认为`false`
    */
    import React from 'react'
    import {Progress} from 'ness-ui'
    export default ()=>(
        <>
            <Progress size={'xl'} percent={40}/>    
            <p></p>
            <Progress rounded size={'xl'} percent={40}/> 
        </>
    )
```
```tsx
    /**
     * title: 大小
     * desc: 内置`xs`、`sm`、`lg`、`xl` 等 4 种规格大小，通过`size`属性进行设置， 
    */
    import React from 'react'
    import {Progress} from 'ness-ui'
    export default ()=>(
        <>
           <Progress size={'xs'} percent={40}/> 
           <p></p>
           <Progress size={'sm'} percent={40}/> 
           <p></p>
           <Progress size={'lg'} percent={40}/>  
            <p></p>
           <Progress size={'xl'} percent={40}/> 
        </>
    )
```

```tsx
    /**
     * title: 条纹
     * desc: 在组件上添加 `stripes` 属性并设置为true，进度条会改变为条形进度条，如果需要动画，则把 `animate` 属性设置为true
    */
    import React from 'react'
    import {Progress} from 'ness-ui'
    export default ()=>(
        <>
           <Progress size="xl" stripes animate rounded percent={20}/> 
           <p></p>
           <Progress size="xl" stripes animate rounded theme="success" percent={30}></Progress>
           <p></p>
           <Progress size="xl" stripes animate rounded theme="warning" percent={40}/> 
           <p></p>
           <Progress size="xl" stripes animate rounded theme="danger" percent={50} />
           <p></p>
           <Progress size="xl" stripes animate rounded theme="secondary" percent={60}/> 
           <p></p>
           <Progress size="xl" stripes animate rounded theme="dark" percent={80}/>  
           
        </>
    )
```

```tsx
    /**
     * title: 不显示进度条填充色
     * desc: 如果想不显示背景填充色，把`unfilled`设置为true
    */
    import React from 'react'
    import {Progress} from 'ness-ui'
    export default ()=>(
        <>
           <Progress size="xl" unfilled style={{backgroundColor:'rgb(255,0,255)'}} stripes animate rounded percent={80}/>  
        </>
    )
```
 stripes?: boolean;
    rounded?: boolean;
    barStyle?: React.CSSProperties;
    animate?: boolean;
    unfilled?: boolean;



属性 | 说明 | 类型 | 默认值
----|-----|------|------
| percent        | 进度条百分比   | `string 或 number` | -- | 
| theme        | 默认主题，共6种   | string | primary | 
|size | 进度条大小，四种规格`xs、sm、lg、xl` | string | sm |
| barStyle | 自定义进度条样式 | object   | -- |  
| style | 自定义进度样式 |  object | -- |
| stripes | 是否显示条纹 | boolean   | false | 
| rounded | 是否应用条纹样式 | boolean   | false |
| animate | 是否应用动画样式，在应用条纹样式后有效 | boolean   | false |
| unfilled | 是否应用填充背景色 | boolean   | true |


