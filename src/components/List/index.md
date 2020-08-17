---
title: List 列表
---
# List

```tsx
  /**
   * title: 基本 
   * desc: List.Item 组件中 `role`属性声明列表展示模式（该属性有两个值 `Item` 和 `header`，默认为`Item`）， `title`属性展示列表标题，`after`属性展示列表右边内容, `isLink`属性是否开启跳转（为true时，右边会多个小箭头，点击时会有透明样式），`disabled` 属性禁用当前列表项（禁用之后所以事件均会失效）
  */ 
  import React from 'react'
  import {List,Badge,Switch} from 'ness-ui'

  export default ()=>(
    <List inset={false}>
      <List.Item role="header">头部列表样式</List.Item>
      <List.Item
        title="基本列表"
      />
      <List.Item
        after='after'
        title="after属性"
      />
      <List.Item
        title="isLink属性"
        isLink
        after="2020-10-20"
      />
      <List.Item
        after='不可操作'
        title="diaabled禁用"
        disabled
        isLink 
      />
    </List>
  )
```

```tsx
  /**
   * title: 链接 
   * desc: List.Item 组件中 `href` 属性 出现时，列表内容会被`a链接`包裹，实现跳转，`target`属性表示新页面打开（如果href出现属性，不需要设置`isLink`属性）
  */ 

  import React from 'react'
  import {List,Badge,Switch} from 'ness-ui'
  export default ()=>(
    <List >
      <List.Item title="LGD" after="新窗口打开" target="_blnk" href="https://baike.baidu.com/item/LGD%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E4%BF%B1%E4%B9%90%E9%83%A8/20402668?fromtitle=lgd&fromid=16886&fr=aladdin"/>
      <List.Item title="VPGame" href="https://www.vpgame.com/" after={<Badge dot theme="danger"></Badge>}/>
      <List.Item title="VARENA" href="https://www.varena.com/"/>
    </List>
  )
```
```tsx
  /**
   * title: List Input 
   * desc: List.Item 组件中 `nested` 属性值为 input时，可嵌套输入框等表单项
  */ 

  import React from 'react'
  import {List,Button,InputItem,Switch} from 'ness-ui'
  export default ()=>(
    <>
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
            title="开启邀请码"
            after={<Switch solid />}
        >
           
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
  )
```


```tsx
  /**
   * title: List subTitle子标题
   * desc: List.Item 组件中 `subTitle`属性 表示列表子标题，可做描述使用
  */ 
  import React from 'react'
  import {List,Badge,Switch} from 'ness-ui'
  export default ()=>(
    <List >
      <List.Item title="LGD" subTitle="世界知名电竞俱乐部"/>
      <List.Item title="VPGame" subTitle="一家综合电竞公司" href="https://www.vpgame.com/"/>
      <List.Item title="VARENA" subTitle="赛事综合运营平台" href="https://www.varena.com/"/>
    </List>
  )
```

```tsx
  /**
   * title: List 图文展示
   * desc: List.Item组件中 `media`属性可以添加图片和Icon
  */ 
  import React from 'react'
  import {List,Badge,Switch} from 'ness-ui'
  export default ()=>(
    <List >
      <List.Item 
        media={<img src="https://resource.varena.com/homepage/2.7.9/favicon.ico" />} 
        title="LGD" 
        subTitle="世界知名电竞俱乐部" 
        target="_blank"
        after="新窗口打开"
        href="https://baike.baidu.com/item/LGD%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E4%BF%B1%E4%B9%90%E9%83%A8/20402668?fromtitle=lgd&fromid=16886&fr=aladdin"
      />
      <List.Item 
        title="VPGame" 
        media={<img src="https://resource.varena.com/homepage/2.7.9/favicon.ico" />} 
        subTitle="一家综合电竞公司" 
        href="https://www.vpgame.com/" 
      />
      <List.Item 
        title="VARENA" 
        media={<img src="https://resource.varena.com/homepage/2.7.9/favicon.ico" />} 
        subTitle="赛事综合运营平台" 
        href="https://www.varena.com/"
      />
    </List>
  )
```
## List Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| inset        | 是否添加列表边距   | boolean | false | 

## List.Item Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title        | 列表项标题   | React.ReactNode | -- | 
| role        | 列表项展示模式   | string | Item | 
|nested | 嵌套表单类型 ，值为 input | string | -- | 
| after | 列表项右边内容展示 | React.ReactNode   | -- | 
| isLink | 是否开启链接模式 | boolean   | false |
| href      |  和a链接的href一致    | string |  --  |
| target      |  当列表项出现href属性时，该属性才会生效，该属性值有<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a" target="_blank">点击查看</a>    | string |  --  |
| disabled      |  列表项禁用   | boolean |  false  |
| subTitle      |  列表项子标题    | React.ReactNode |  --  |
| media      |  列表项缩略图   | React.ReactNode |  --  |
| className      |  列表项样式   | string |  --  |