---
title: Grid 网格
---

# Grid

> Grid组件默认提供了 6 列的网格系统。

``` tsx
    /**
     * title: 基本 
     * desc: 默认用法
    */ 
    import React from 'react'
    import {Grid} from 'ness-ui'
    export default ()=>{
        return (
            <Grid>
                <Grid.Item style={{ background: '#d3dce6'}}>cols</Grid.Item>
                <Grid.Item style={{background: '#e5e9f2'}}>cols</Grid.Item>
            </Grid>
        )
    }
```

``` tsx
    /**
     * title: 设置分栏所占比例 
     * desc:  在Col组件中设置`cols`属性，即栅格占据的列数。
    */ 
    import React from 'react'
    import {Grid} from 'ness-ui'
    export default ()=>{
        return (
            <Grid>
                <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols:2</Grid.Item>
                <Grid.Item style={{ background: '#e5e9f2'}} cols={4}>cols:4</Grid.Item>
            </Grid>
        )
    }
```

``` tsx
    /**
     * title:  wrap 属性设置列是否换行
     * desc:  在Grid组件中设置 `wrap` 属性设置列是否换行，值分别有：`wrap`, `wrap-reverse`, `nowrap` 默认是：`nowrap`
    */ 
    import React from 'react'
    import {Group,Grid} from 'ness-ui'
    export default ()=>{
        return (
            <>
                <Group header="当Grid组件属性设置为：wrap=wrap 进行换行">
                 <Grid wrap="wrap">
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols:2</Grid.Item>
                    <Grid.Item style={{ background: '#e5e9f2'}} cols={4}>cols:4</Grid.Item>
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols:2</Grid.Item>
                    <Grid.Item style={{ background: '#e5e9f2'}} cols={4}>cols:4</Grid.Item>
                </Grid>
                </Group>
                <Group header="当Grid组件属性设置为：wrap=wrap-reverse 上下互换"> 
                    <Grid wrap="wrap-reverse">
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols:2</Grid.Item>
                    <Grid.Item style={{ background: '#e5e9f2'}} cols={4}>cols:4</Grid.Item>
                    <Grid.Item style={{ background: '#f9fafc'}} cols={6}>cols:6</Grid.Item>
                    </Grid>
                </Group>
            </>
        )
    }
```
``` tsx
    /**
     * title:  等分网格
     * desc:  在Grid组件中设置 `avg` 属性，平均分配单元格为 n 列，该示例为4等份。
    */ 
    import React from 'react'
    import {Grid} from 'ness-ui'
    export default ()=>{
        return (
            <>
                <Grid bordered avg={4}>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                    <Grid.Item>cols</Grid.Item>
                </Grid>
            </>
        )
    }
```

``` tsx
    /**
     * title:  collapse
     * desc:  在Grid组件中设置 `collapse` 属性，为true时会移除列自带的内边距
    */ 
    import React from 'react'
    import {Grid} from 'ness-ui'
    export default ()=>{
        return (
            <>
                <Grid collapse>
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols:2</Grid.Item>
                    <Grid.Item style={{ background: '#e5e9f2'}} cols={4}>cols:4</Grid.Item>
                </Grid>
            </>
        )
    }
```

``` tsx
    /**
     * title:  列偏移
     * desc:  在Col组件中设置 `offset` 属性，该列会偏移指定的栏数。该示例：向左偏移 4 列
    */ 
    import React from 'react'
    import {Grid} from 'ness-ui'
    export default ()=>{
        return (
            <>
                <Grid>
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2} offset={4}>cols：2  offset：4</Grid.Item>
                </Grid>
            </>
        )
    }
```
``` tsx
    /**
     * title:  网格对齐方式
     * desc:  在Grid组件中设置 `align` 属性来实现网格对齐方式，值分别有：`right`, `center`, `between`, `around`
    */ 
    import React from 'react'
    import { Grid,Group } from 'ness-ui'
    export default ()=>{
        return (
            <>
                <Group header="左对齐">
                 <Grid  align="left">
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols: 2</Grid.Item>
                    <Grid.Item style={{background: '#e5e9f2'}} cols={2}>cols: 2</Grid.Item>
                </Grid>
                </Group>
                <Group header="右对齐">
                 <Grid align="right">
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols: 2</Grid.Item>
                    <Grid.Item style={{background: '#e5e9f2'}} cols={2}>cols: 2</Grid.Item>
                </Grid>
                </Group>
                <Group header="左右两边对齐">
                 <Grid align="between">
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols: 2</Grid.Item>
                    <Grid.Item style={{background: '#e5e9f2'}} cols={2}>cols: 2</Grid.Item>
                </Grid>
                </Group>
                <Group header="平均分布">
                 <Grid align="around">
                    <Grid.Item style={{ background: '#d3dce6'}} cols={2}>cols: 2</Grid.Item>
                    <Grid.Item style={{background: '#e5e9f2'}} cols={2}>cols: 2</Grid.Item>
                </Grid>
                </Group>
            </>
        )
    }
```


## Grid Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| collapse        | 是否移除列默认的内边距   | boolean | false | 
| wrap | 应该 `flex-wrap: wrap & wrap-reverse`，是否换行 | string   | nowrap | 
| avg | 平均分配单元格为 n 列 | number   | -- |
| align      |   对齐方式 justify-content,具体参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content" target="_blank">查看详情</a>   | string |  --  |
| bordered | 是否应用边框样式 | boolean   | false |

## Grid.Item Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| cols        | 列宽所占的比例，1-6 的数字   | number | -- | 
| offset | 列偏移（与左边元素的外边距）的数量 | number   | -- | 
| shrink | 列是否自动收缩为内容宽度 | boolean   | false |