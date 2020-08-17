---
title: TabBar 底部导航栏
---
# TabBar

```tsx
  /**
   * title: 文字 
   * desc: TabBar组件默认提供了6套主题， TabBar.Item组件 设置`title`属性展示 标题文
  */ 
  import React from 'react'
  import {TabBar} from 'ness-ui'
  import 'ness-ui/lib/components/styles/index.css'
  export default ()=>(
    <>
      <TabBar theme="danger">
        <TabBar.Item title={<span style={{color:'#fff'}}>首页</span>} />
        <TabBar.Item title={<span style={{color:'#fff'}}>设置</span>} />
        <TabBar.Item title={<span style={{color:'#fff'}}>关于</span>} />
      </TabBar>
    </>
  )
```

```tsx
  /**
   * title: 带图标 + Badge
   * desc: TabBar.Item组件设置 `icon` 属性来显示工具栏图标，默认图标可以参考： [Icon]:(http://www.baidu.com) ，设置 `badge`属性会显示角标（注意：只能在带图标的情况下设置该属性）,`badgeStyle`属性可设置角标样式
   * 
  */ 
  import React from 'react'
  import {TabBar,Icon} from 'ness-ui'
  export default ()=>(
    <>
      <TabBar theme="primary">
        <TabBar.Item icon={<Icon name="home"></Icon>} title="首页" />
        <TabBar.Item icon={<Icon name="pages"></Icon>} title="菜单" />
        <TabBar.Item icon={<Icon name="person"></Icon>} title="我的" />
      </TabBar>
    </>
  )
```
```tsx
  /**
   * title: 交互
   * desc: TabBar组件接受一个 `onAction`事件回调，它有一个返回值 key，该key会得到当前被选中的eventKey, `selected`属性为true时表示该选项被选中
  */ 
  import React from 'react'
  import {TabBar,Icon} from 'ness-ui'
  const [selected,setSelected] = React.useState('home');
  export default ()=>(
    <>
      <TabBar
        theme="secondary"
        onAction = {(key)=>{
          setSelected(key)
        }}
      >
        <TabBar.Item
          eventKey="home"
          selected={selected === 'home'}
          icon={<Icon name="home"></Icon>}
          title="首页"
        />
        <TabBar.Item
          selected={selected === 'menu'} 
          eventKey="menu"
          icon={<Icon name="pages"></Icon>}
          title="菜单"
        />
        <TabBar.Item
          eventKey="info"
          selected={selected === 'info'} 
          icon={<Icon name="person"></Icon>}
          badge={5}
          title="我的"
        />
      </TabBar>
    </>
  )
```

```tsx
  /**
   * title: 自定义工具栏颜色
   * desc:  在TabBar组件上设置 `barColor` 会改变工具栏背景色，`selectedTextColor` 属性会改变选中时的字体颜色， `selectedIconColor` 属性会改变选中时Icon的颜色`(注意：该属性只对TabBar.Item组件中的 icon 属性为Icon组件时有效，对 img 等无效)`
  */ 
  import React from 'react'
  import {TabBar,Icon} from 'ness-ui'
  const [selected,setSelected] = React.useState('home')
  export default ()=>(
    <>
      <TabBar
        barColor="#e9e9e9"
        selectedIconColor="blue"
        selectedTextColor="blue"  
        onAction = {(key)=>{
          setSelected(key)
        }}
      >
        <TabBar.Item
          eventKey="home"
          selected={selected === 'home'}
          icon={<Icon name="home"></Icon>}
          title="首页"
        />
        <TabBar.Item
          selected={selected === 'menu'} 
          eventKey="menu"
          icon={<Icon name="pages"></Icon>}
          title="菜单"
        />
        <TabBar.Item
          eventKey="info"
          selected={selected === 'info'}
          icon={<Icon name="person"></Icon>}
          title="首页"
          badge={5}
         
        />
      </TabBar>
    </>
  )
```

## TabBar Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| theme        | 有5种主题颜色 `primary`、`secondary`、`success`、`warning`、`danger`   | string | -- | 
| onAction | 点击工具栏子项时的出来函数 | `(key:number,e: React.MouseEventHandler<HTMLElement>):void`   | -- | 
| hidden | 是否隐藏TabBar | boolean   | false |
| barColor      |   TabBar背景色   | string |  --  |
| selectedIconColor      |   点击选中子项时Icon颜色，只有当子项prop属性icon为Icon组件时有效  | string |  --  |
| selectedTextColor      |   点击选中时文字的颜色   | string |  --  |

## TabBar.Item Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| icon        | 定义子项图标，可以是Icon，也可以传入img   | any | -- | 
| title | 子项标题 | ReactNode   | -- | 
| href | 子项跳转链接 | string   | -- |
| badge      |   子项上显示小微标   | `string & number` |  --  |
| badgeStyle      |  设置徽标样式  | CSSProperties |  --  |
| eventKey      |   子项标识符   | any |  --  |
| selected      |   是否被选中   | boolean |  false  |

