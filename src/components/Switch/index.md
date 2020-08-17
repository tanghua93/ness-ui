---
title: Switch 开关
---
# Switch

```tsx
    /**
     * title: 基本 
     * desc:  内置 6 种主题 `primary` | `secondary` | `success` | `warning` | `danger` | `dark`, 通过 `theme`属性进行设置，hollow为true时该开关为镂空开关，`onValueChange`回调函数，返回是否选中的状态，`disabled`禁用开关，`defaultChecked` 为true时默认打开开关
    */
    import React from 'react'
    import {Switch,List} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=> (
        <>
            <List>
                <List.Item title="镂空开关" after={<Switch theme="secondary" />}></List.Item>
                <List.Item title="实心按钮" after={<Switch theme="danger" solid onValueChange={(e)=>{
                    alert(e.target.checked)
                }}/>}>
                </List.Item>
                 <List.Item title="禁用空心按钮" after={<Switch defaultChecked theme="secondary" disabled/>}>

                </List.Item>
                <List.Item  title="禁用实心按钮" after={<Switch theme="secondary" defaultChecked disabled solid/>}>

                </List.Item>
            </List>
        </>
    )
```
## Badge Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| theme        | 有6种主题颜色 `primary` 、 `secondary`、`success`、`warning`、`danger`、`dark`  | string | -- | 
| solid | 是否应用镂空样式。 | boolean | true | 
| onValueChange | 开关回调函数 | `(e:React.ChangeEvent<HTMLInputElement>):void` | noop |
| disabled | 是否禁用开关 | boolean | false |
| className | 样式类名 | string   | -- |
| style      |   自定义样式   | Object |  --  |