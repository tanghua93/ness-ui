---
title: RadioGroup 单选框组
---
# RadioGroup
```tsx
    /**
     * title: 基本
     * desc: Radio组件中 `onChange` 事件触发的回调函数包含选中状态以及value， Radio.Item组件中 `label` 属性表示选项框标题
    */
   import React from 'react'
   import {RadioGroup} from 'ness-ui'
   import 'ness-ui/lib/components/styles/index.css'
   const arr = [];
   export default ()=>
   <>
    <RadioGroup>
        <RadioGroup.Item name="水果" label="橘子" value="橘子" ></RadioGroup.Item>
        <RadioGroup.Item name="水果" label="苹果" value="苹果"></RadioGroup.Item>
        <RadioGroup.Item name="水果" label="香蕉" value="香蕉"></RadioGroup.Item>
    </RadioGroup>
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