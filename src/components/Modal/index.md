---
title: Modal 弹窗
---
# Modal

```tsx
    /**
     * title: Alert
     * desc: 方法中 `title` 和 `message` 属性可以是一个字符串或 接受一个HtmlElement对象， `closeViaBackdrop` 属性为true时，点击遮罩可关闭弹窗，`beforeClose` 回调函数会在点击关闭的时候执行，`afterClose` 回调函数会在弹窗关闭之后执行, `comfirmText` 属性更改确定按钮文本
    */
    import React from 'react'
    import {Modal,Button} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css' 
    export default ()=> (<Button onClick={()=>{
        Modal.alert({
            title:'提示',
            closeViaBackdrop:true,
            message:'这是一个描述',
            afterClose:function(){
                alert('弹窗')
            }
        })
    }}>Alert</Button>)
    
```

```tsx
    /**
     * title: Confirm
     * desc: confirm大部分属性和alert方法一致，多了一个`cancelText`属性，用来改变默认的取消按钮
    */
    import React from 'react'
    import {Modal,Button} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=> (<Button onClick={()=>{
        Modal.confirm({
            title:'提示',
            closeViaBackdrop:true,
            cancelText:'关闭',
            message:'这是一个描述'
        })
    }}>Confirm</Button>)
```
```tsx
    /**
     * title: Prompt
     * desc: prompt大部分属性和confirm一样，不一样的是 prompt方法多了 `placeholder` 属性，input输入框中的占位符，另一个是 `onAction` 回调函数，它会返回input输入框中的值
    */
    import React from 'react'
    import {Modal,Button} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=> (<Button onClick={()=>{
        Modal.prompt({
            title:'提示',
            closeViaBackdrop:true,
            onAction:function(data){
                console.log(data)
            }
        })
    }}>Prompt</Button>)
    
```


```tsx
    /**
     * title: Actions
     * desc: Modal组件中`isOpen` 为true时打开弹窗，` afterClose `回调函数中执行关闭操作（必须，不然点击取消按钮无法关闭）
    */
    import React from 'react'
    import {Modal,Button,List} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const [isOpen,setIsOpen] = React.useState(false)
    export default ()=>(
        <>
            <Button onClick={()=>setIsOpen(true)}>Actions</Button>
            <Modal afterClose={()=>setIsOpen(false)} isOpen={isOpen} title="modal-actions" role="actions">
                <List>
                    <List.Item role="header">分享到</List.Item>
                    <List.Item>微信</List.Item>
                    <List.Item>QQ</List.Item>
                </List>
            </Modal>
        </>
    )
```

```tsx
    /**
     * title: Popup
     * desc: Modal组件中`isOpen` 为true时打开弹窗，` afterClose `回调函数中执行关闭操作（必须，不然点击取消按钮无法关闭）
    */
    import React from 'react'
    import {Modal,Button,List} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const [isOpen,setIsOpen] = React.useState(false)
    export default ()=>(
        <>
            <Button onClick={()=>setIsOpen(true)}>Popup</Button>
            <Modal afterClose={()=>setIsOpen(false)} isOpen={isOpen} title="modal-actions" role="popup">
                这是一个覆盖弹窗
            </Modal>
        </>
    )
```
## Modal Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| role        | Modal 形式，不设置时为普通的模态窗口，有5种形式，分别为：`alert 、confirm、prompt、loading、actions、popup`   | string | -- | 
| isOpen | 是否为打开状态 | boolean   | false | 
| title | Modal标题 | ReactNode   | -- |
| confirmText      |   Modal框确定按钮文字   | ReactNode |  '确定'  |
| closeBtn      |   是否开启关闭按钮   | boolean |  true  |
| closeViaBackdrop      |   是否点击遮罩层关闭  | boolean |  false  |
| onAction      |   用户点击「确定」或「取消」按钮时的处理函数。  | (data?: any, e?: React.MouseEvent):void |  --  |
| onOpen      |   Modal 打开时的回调函数  | ():void |  --  |
| beforeClose      |   Modal 关闭前的回调函数  | ():void |  --  |
| afterClose   |   Modal 关闭后的回调函数  | ():void |  --  |
| className   |  自定义class  | string |  --  |