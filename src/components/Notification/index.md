---
title: Notification 通知栏
---
# Notification

```tsx
    /**
     * title: 基本 
     * desc: 组件中`visible`属性为true显示通知栏， 内置 6 种主题 `primary` | `secondary` | `success` | `warning` | `danger` | `dark`, 通过 `theme`属性进行设置，`closable`为true时显示关闭按钮，`onClose`方法是在`closable`为true时，点击关闭按钮时调用，``
    */
    import React from 'react'
    import {Notification,Button} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const [visible,setVisible] = React.useState(false)
    export default ()=> (
        <>
          <Button 
            btnType="secondary" 
            onClick={()=>{
              setVisible(true) 
          }}>打开通知
          </Button>
          <Button 
            btnType="danger" 
            onClick={()=>{
              setVisible(false) 
            }}>关闭通知
          </Button>
          <Notification
            title="测试标题"
            closable
            theme="secondary"
            visible={visible}
            onClose={()=>{
              setVisible(false)  
            }}
          >
            这是一个通知栏哦😯
          </Notification> 
        </>
    )
```
## Notification Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| theme        | 有5种主题颜色`primary` 、 `secondary`、`success`、`warning`、`danger`、`dark`  | string | -- | 
| visible | 是否显示通知栏。 | boolean | false | 
| title | 通知栏标题 | React.ReactNode | -- |
| closable | 是否显示关闭按钮 | boolean | false |
| onClose | `closable`属性为true时调用 | ():void | -- |
| className | 样式类名 | string   | -- |
| style      |   自定义样式   | Object |  --  |