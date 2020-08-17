---
title: Tabs 选项卡
---
# Tabs

``` tsx
    /**
     * title: 基本 
     * desc: Tabs组件中 `defaultActiveKey` 默认选中项，值为TabPane组件中`key`的值，`onChange`回调函数第一个参数返回当前选中项的信息，第二个参数返回上一次选中的信息
    */
    import React from 'react'
    import {Tabs,TabPane} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const [current,setCurrent] = React.useState(1)
    export default ()=> (
        <>
             <Tabs
              defaultActiveKey={'second'}
              onChange={(now, prev) => {
                
              }}
            >
              <TabPane
                title="first"
               
              >
                first tab content
              </TabPane>
              <TabPane key="second" title="second">
                second tab content
              </TabPane>
              <TabPane title="third">third tab content</TabPane>
            </Tabs>
        </>
    )
```

``` tsx
    /**
     * title: 左侧显示 
     * desc: TabPane 组件 `position` 属性设置选项卡的位置
    */
    import React from 'react'
    import {Tabs,TabPane} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=> (
        <div style={{ height: 150 }}>
            <Tabs position="left">
              <TabPane title="first">first tab content</TabPane>
              <TabPane title="second">second tab content</TabPane>
              <TabPane title="third">third tab content</TabPane>
            </Tabs>
          </div>
    )
```

``` tsx
    /**
     * title: 右侧显示 
     * desc: TabPane 组件 `position` 属性设置选项卡的位置
    */
    import React from 'react'
    import {Tabs,TabPane} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=> (
        <div style={{ height: 150 }}>
            <Tabs position="right">
              <TabPane title="first">first tab content</TabPane>
              <TabPane title="second">second tab content</TabPane>
              <TabPane title="third">third tab content</TabPane>
            </Tabs>
          </div>
    )
```

``` tsx
    /**
     * title: 底部显示 
     * desc: TabPane 组件 `position` 属性设置选项卡的位置
    */
    import React from 'react'
    import {Tabs,TabPane} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=> (
        <div style={{ height: 150 }}>
            <Tabs position="bottom">
              <TabPane title="first">first tab content</TabPane>
              <TabPane title="second">second tab content</TabPane>
              <TabPane title="third">third tab content</TabPane>
            </Tabs>
          </div>
    )
```

``` tsx
    /**
     * title: 超过一屏tab展示
     * desc: TabPane组件中`pageSize`可以设置一屏最多展示多少个tab
    */
    import React from 'react'
    import {Tabs,TabPane} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=> (
        <div style={{ height: 150 }}>
           <Tabs pageSize={4}>
            <TabPane title="first">first tab content</TabPane>
            <TabPane title="second">second tab content</TabPane>
            <TabPane title="third">third tab content</TabPane>
            <TabPane title="forth">forth tab content</TabPane>
            <TabPane title="fifth">fifth tab content</TabPane>
            <TabPane title="sixth">sixth tab content</TabPane>
            <TabPane title="seventh">seventh tab content</TabPane>
            <TabPane title="eighth">eigth tab content</TabPane>
            <TabPane title="nineth">nineth tab content</TabPane>
            <TabPane title="tenth">tenth tab content</TabPane>
          </Tabs>
        </div>
    )
```

## Tabs Props
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| position        | tab bar 的位置共有4种显示形式，`top` 、 `bottom` 、 `left` 、 `right`，默认 top。 | string | 'top' | 
| animated | 切换时是否显示动画 | boolean | true | 
| current | 指定显示的 tab | `number | string` | -- |
| defaultActiveKey | 指定初始化显示的 tab | `number | string` | -- |
| swipeable | 是否可使用手势滑动 | boolean   | true |
| sticky      |   是否支持sticky   | boolean |  --  |
| pageSize      |   一屏内显示的 tab 数量   | number |  --  |
| tabHeight      |   tab 高度   | number |  --  |
| onChange      |  tab 切换时触发   | `(currentTab,prevTab,index):void` |--  |
| preRender      |  是否预渲染  | boolean |  --  |

## TabPane Props
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| key        | aa | string | 'top' | 
| title        | tab 标题 | React.ReactNode | -- | 
| onClick        | tab 点击回调，返回当前选中项信息 | (currentTab):void | -- | 