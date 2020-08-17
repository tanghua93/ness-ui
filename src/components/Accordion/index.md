---
title: Accordion 手风琴
---
# Accordion
``` tsx
    /**
     * title: 基本 
     * desc: 手风琴效果的折叠内容组件。
    */
    import React from 'react'
    import {Accordion} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const content = [
        {
            title: '对明天最好的准备，是把今天做到最好',
            desc: `
            如果累了，就拉上窗帘关上手机关掉闹钟深呼吸一口气钻进被窝，放空去睡觉，难熬的日子总需要更多精力。`
        },
        {
            title: '在往事背后疗伤，在人来人往中坚强',
            desc: `
               人生短暂，岁月带着年华走，欢喜悲伤皆浮华，做心里最真实的自己，不虚伪，不做作。过自己最向往的生活，不摧眉，不折腰。感恩有助于自己的人，不忘义，不忘情。面对生活的不顺与挫折，不叹息，不惆怅，以平和的心态珍惜每一天。`
        },
        {
            title: '清清浅浅人生路，简简单单随缘行',
            desc: `人帮人，心靠心，朋友才能守住，才能风雨同舟。情暖情，心交心，感情才能拥有，才能天长地久。`
        }
    ];
    const renderItem = ()=>{
        return(
            <Accordion>
                {content.map((item, i) => {
                    return (
                    <Accordion.Item
                        title={item.title}
                        key={i}
                       
                    >
                        {item.desc}
                    </Accordion.Item>
                    )
                })}
            </Accordion>
        )
    }
    export default()=>renderItem()
```

``` tsx
    /**
     * title: 默认选中 
     * desc: 当设置defaultActiveKey时，初始化的时候会默认展开该项
    */
    import React from 'react'
    import {Accordion} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const content = [
        {
            title: '对明天最好的准备，是把今天做到最好',
            desc: `
            如果累了，就拉上窗帘关上手机关掉闹钟深呼吸一口气钻进被窝，放空去睡觉，难熬的日子总需要更多精力。`
        },
        {
            title: '在往事背后疗伤，在人来人往中坚强',
            desc: `
               人生短暂，岁月带着年华走，欢喜悲伤皆浮华，做心里最真实的自己，不虚伪，不做作。过自己最向往的生活，不摧眉，不折腰。感恩有助于自己的人，不忘义，不忘情。面对生活的不顺与挫折，不叹息，不惆怅，以平和的心态珍惜每一天。`
        },
        {
            title: '清清浅浅人生路，简简单单随缘行',
            desc: `人帮人，心靠心，朋友才能守住，才能风雨同舟。情暖情，心交心，感情才能拥有，才能天长地久。`
        }
    ];
    const renderItem = ()=>{
        return(
            <Accordion defaultActiveKey={1} onChange={(key)=>{
                console.log(key)
            }}>
                {content.map((item, i) => {
                    return (
                        <Accordion.Item
                            title={item.title}
                            key={i}
                            
                        >
                            {item.desc}
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        )
    }
    export default()=>renderItem()
```

## Accordion Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| activeKey        | 当前激活 tab 面板的 key   | `string & number` | -- | 
| defaultActiveKey | 初始化选中面板的 key | number   | -- |
| onChange      |   选中时回调   | (key: string): void |  ()=>void  |

## Accordion.Item Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title   |  面板标题   | string | -- | 