---
title: CheckboxGroup 复选框组
---
# CheckboxGroup
```tsx
    /**
     * title: 基本
     * desc: Checkbox组件中 `onChange` 事件触发的回调函数包含选中状态以及value， Checkbox.Item组件中 `label` 属性表示选项框标题
    */
   import React from 'react'
   import {CheckboxGroup} from 'ness-ui'
   const arr = [];
   export default ()=><>
    
    <CheckboxGroup onChange={(e)=>{
        if(e.target.checked){
            arr.push(e.target.value)
        }else{
           arr.splice(arr.indexOf(e.target.value),1)
        }
    }}>
        <CheckboxGroup.Item label="橘子" value="橘子" ></CheckboxGroup.Item>
        <CheckboxGroup.Item label="苹果" value="苹果"></CheckboxGroup.Item>
        <CheckboxGroup.Item label="香蕉" value="香蕉"></CheckboxGroup.Item>
       
    </CheckboxGroup>
   </>
```

## CheckboxGroup Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| label        | 复选框标题  | React.ReactNode | -- |
| defaultChecked        | 是否选中  | boolean | false |
| checked        | 设置或返回 checkbox 是否应被选中  | boolean | false |  
| disabled | 是否禁用 | boolean   | false |
| onChange      |   事件触发的回调函数   | (e: Object): void |  --  |