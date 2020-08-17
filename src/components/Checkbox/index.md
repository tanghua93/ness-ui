---
title: Checkbox 复选框
---
# Checkbox
```tsx
    /**
     * title: 基本
     * desc: Radio组件中 `onChange` 事件触发的回调函数包含选中状态以及value
    */
   import React from 'react'
   import {Checkbox} from 'ness-ui'
   import 'ness-ui/lib/components/styles/index.css'
   const arr = [];
   export default ()=><>
    <Checkbox name="home" disabled>空调</Checkbox>
    <Checkbox name="home" onChange={(e)=>{
        console.log(e.target.checked)
    }}>Wifi</Checkbox>
    <Checkbox name="home">西瓜</Checkbox>
   </>
```
```tsx
    /**
     * title: 横向排列
     * desc: Radio组件中 `onChange` 事件触发的回调函数包含选中状态以及value
    */
   import React from 'react'
   import {Grid,Col,Checkbox} from 'ness-ui'
   const arr = [];
   export default ()=><>
    <Grid>
        <Grid.Item>
            <Checkbox defaultChecked name="home">空调</Checkbox>
        </Grid.Item>
        <Grid.Item>
            <Checkbox name="home">Wifi</Checkbox>
        </Grid.Item>
        <Grid.Item>
            <Checkbox name="home">西瓜</Checkbox>
        </Grid.Item>
        <Grid.Item>
            <Checkbox name="home">冰阔乐</Checkbox>
        </Grid.Item>
    </Grid>
    
   </>
```


## Checkbox Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name | 设置或返回按钮的名称 | string | -- |
| defaultChecked        | 是否选中  | boolean | false |
| checked        | 设置或返回 checkbox 是否应被选中  | boolean | false |  
| disabled | 是否禁用 | boolean   | false |
| onChange      |   事件触发的回调函数   | (e: Object): void |  --  |