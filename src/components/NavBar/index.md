---
title: NavBar 顶部导航栏
---
# NavBar

``` tsx
    /**
     *  title: 基本
     *  desc: NavBar组件中  `title`属性展示标题栏文字，`theme` 属性可设置内置的5套主题`primary`、`secondary 、 success 、 warning 、 danger 、 dark`，`leftContent`属性接收一个对象，主要对象属性包括：`itemTitle`、`icon`、`onClick`，`rightContent`和 `leftNav`一样。
    */
    import React from 'react'
    import {NavBar,Icon} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    export default ()=>(
        <>
            <NavBar
                theme="primary" 
                title="导航栏" 
            />
             <p></p>
            <NavBar
                theme="secondary" 
                title="导航栏" 
            />
            <p></p>
            <NavBar 
                leftContent={
                    {
                        icon:<Icon name="left"/>,
                        onClick:()=>{
                            alert('leftClick')
                        }
                    }
                } 
                theme="success" 
                title="导航栏" 
            />
            <p></p>
            <NavBar 
                leftContent={
                    {
                        icon:<Icon name="left"/>,
                        itemTitle:'返回',
                        onClick:()=>{
                            alert('leftClick')
                        }
                    }
                } 
                theme="danger" 
                title="导航栏" 
            />
            <p></p>
            <NavBar 
                leftContent={
                    {
                        icon:<Icon name="left"/>,
                        itemTitle:'返回',
                        onClick:()=>{
                            alert('leftClick')
                        }
                    }
                } 
                rightContent = {
                    {
                        icon:<Icon name="bars"/>,
                        onClick:()=>{
                            alert('rightClick')
                        }
                    }
                }
                theme="warning" 
                title="导航栏" 
            />
            <p></p> 
            <NavBar 
                leftContent={
                    {
                        icon:<Icon name="left"/>,
                        itemTitle:'返回',
                        onClick:()=>{
                            alert('leftClick')
                        }
                    }
                } 
                rightContent = {
                    {
                        itemTitle:'分享',
                        onClick:()=>{
                            alert('rightClick')
                        }
                    }
                }
                theme="dark" 
                title="导航栏" 
            />  
        </>
    )
```

## NavBar Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title        | 导航栏标题   | React.ReactNode | -- | 
| theme | 导航栏主题颜色 | `primary`、`secondary 、 success 、 warning 、 danger 、 dark`   | -- |
| leftContent      |   右侧内容，接收一个对象| object |  --  |
| rightContent      |   右侧内容   | object |  --  |
| titleOnLeft      |   是否左侧显示标题   | boolean |  false  |

### LeftContent/RightContent Attribute

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| component        | 接收一个组件，主要用于OffCanvasTrigger组件，用户打开侧边栏   | React.ReactNode | -- | 
| itemTitle | 左侧或右侧标题内容 | React.ReactNode  | -- |
| icon      |  左侧或右侧图标展示 | React.ReactElement |  --  |
| isClone      |   component 为 OffCanvasTrigger 之类的组件时，设为 true   | boolean |  false |
| onClick      |   点击事件回调   | (e: React.MouseEventHandler):void|  --  |