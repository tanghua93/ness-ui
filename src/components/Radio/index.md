---
title: Radio 单选框
---
# Radio
```tsx
    /**
     * title: 基本
     * desc: Radio组件中 `onChange` 事件触发的回调函数包含选中状态以及value
    */
   import React from 'react'
   import {Grid,Radio} from 'ness-ui'
   import 'ness-ui/lib/components/styles/index.css'
   export default ()=><>
    <Radio name="home" disabled>空调</Radio>
    <Radio name="home">Wifi</Radio>
    <Radio name="home">西瓜</Radio>
   </>
```
```tsx
    /**
     * title: 横向排列
     * desc: Radio组件中 `onChange` 事件触发的回调函数包含选中状态以及value
    */
   import React from 'react'
   import {Grid,Col,Radio} from 'ness-ui'
   import 'ness-ui/lib/components/styles/index.css'
   export default ()=><>
    <Grid>
        <Grid.Item>
            <Radio defaultChecked name="home">空调</Radio>
        </Grid.Item>
        <Grid.Item>
            <Radio name="home">Wifi</Radio>
        </Grid.Item>
        <Grid.Item>
            <Radio name="home">西瓜</Radio>
        </Grid.Item>
        <Grid.Item>
            <Radio name="home">冰阔乐</Radio>
        </Grid.Item>
    </Grid>
    
   </>
```


## Radio Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| label        | 复选框标题  | React.ReactNode | -- |
| name | 设置或返回单选按钮的名称 | string | -- |
| defaultChecked        | 是否选中  | boolean | false |
| checked        | 设置或返回 checkbox 是否应被选中  | boolean | false |  
| disabled | 是否禁用 | boolean   | false |
| onChange      |   事件触发的回调函数   | (e: Object): void |  --  |