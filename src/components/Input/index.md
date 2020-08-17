---
title: Input 输入框组
---

# Input
```tsx
    /**
     * title: 基础样式
     * desc: Input组件 `labelBefore` 输入框前面内容，`labelAfter` 输入框后面内容，`placeholder` 输入框占位符，`type` 输入框类型
    */
   import React from 'react'
   import {InputItem,Button, Icon} from 'ness-ui'
   import 'ness-ui/lib/components/styles/index.css'
   export default ()=>
        <form>
            <InputItem
                labelBefore={<Icon name="person"/>} 
                placeholder="请输入姓名"
            />
            <InputItem
                labelBefore={<Icon name="message"/>}  
                placeholder="请输入密码"
                type="password"
            />

            <InputItem
                labelBefore={<Icon name="info"/>}  
                placeholder="请输入你的年龄"
                type="number"
            />
            <InputItem
                labelBefore={<Icon name="edit"/>}  
                placeholder="请输入备注"
                type="textarea"
            />
            <Button
                btnType = 'secondary'
                block
                type="submit"
            >提交</Button>
            <p></p>
            <Button
                block
                btnType="danger"
                type="reset"
            >重置</Button>
        </form>
```
```tsx
    /**
     * title: List Input
     * desc: 当使用List组件展示输入框时,List.Item组件 `nested`要设置成 `input` 值，如果要设置图标，在List.Item添加 `media`探后引入相对应的Icon或img
    */
   import React from 'react'
   import {InputItem,List,Icon,Button} from 'ness-ui'
   import 'ness-ui/lib/components/styles/index.css'
   export default ()=><>
        <List>
            <List.Item
                nested="input"
                label="用户名"
            >
                <InputItem
                    labelBefore="用户名"
                    placeholder="请输入用户名"
                />
                
            </List.Item>
            <List.Item
                nested="input"
            >
                <InputItem
                    type="tel"
                    labelBefore="手机号"
                    placeholder="请输入手机号码"
                />
            </List.Item>
            <List.Item
                nested="input"
            >
                <InputItem
                    labelBefore="验证码"
                    placeholder="请输入验证码"
                    type="tel"
                    labelAfter={<Button
                    btnType = 'secondary'
                    size="xs">获取验证码</Button>}
                />
                
            </List.Item>
            <List.Item
                nested="input"
            >
                <InputItem
                    placeholder="请输入备注信息"
                    type="textarea"
                />
            </List.Item>
        </List>
        <Button
            btnType = 'secondary'
            block
            disabled
        >提交</Button>
         
   </>
```

## Input Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type        | 增加了`textarea` ，`reset`和`submit`请使用 `Button` 组件代替，`checkbox`使用Checkbox组件代替，`radio`使用 Radio组件代替，`range`使用Range组件代替，其它类型可参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input">点击查看</a>  | string | text |
| labelBefore        | 输入框前面内容  | React.ReactNode | -- |
| labelAfter        | 输入框后面内容  | React.ReactNode | -- |  

> `其它属性和事件均和标准 html 的 input一致`
