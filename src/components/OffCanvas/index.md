---
title: OffCanvas 抽屉式导航
---
# OffCanvas

```tsx
    /**
     * title: 基本 
     * desc: OffCanvasTrigger 组件中 `position:left | right`,`offCanvas` 属性只接收OffCanvas组件,`onClosed`侧边栏关闭时调用，`onOpen`侧边栏打开时调用 
    */
    import React from 'react'
    import {OffCanvasTrigger,OffCanvas,Button} from '../../index'
    import 'ness-ui/lib/components/styles/index.css'
    const [visible,setVisible] = React.useState(false)
    export default ()=> (
        <>
          <OffCanvasTrigger
            position="left"
            offCanvas={<OffCanvas>这是左边侧边栏</OffCanvas>}
          >
            <Button btnType="secondary">显示左侧 Offcanvas</Button>
          </OffCanvasTrigger>
           <OffCanvasTrigger
            position="right"
            offCanvas={<OffCanvas>这是右边侧边栏</OffCanvas>}
          >
            <Button btnType="secondary">显示右侧 Offcanvas</Button>
          </OffCanvasTrigger>
        </>
    )
```
## Notification Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| position        | 侧边栏打开的方向  | string | left | 
| offCanvas | 接收一个`OffCanvas`组件 | React.Component | -- | 
| closable | 是否显示关闭按钮 | boolean | false |
| onClose | `closable`属性为true时调用 | ():void | -- |
| className | 样式类名 | string   | -- |
| style      |   自定义样式   | Object |  --  |