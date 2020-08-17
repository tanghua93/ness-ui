---
title: Loader 加载器
---
# Loader

> Grid组件默认提供了 6 列的网格系统。

``` tsx
    /**
     * title: 基本 
     * desc: 默认用法
    */ 
   import React from 'react'
   import {
       Grid,
       Loader
   } from 'ness-ui'
    const divs = [
        'ball-pulse',
        'ball-grid-pulse',
        'ball-clip-rotate',
        'ball-clip-rotate-pulse',
        'square-spin',
        'ball-clip-rotate-multiple',
        'ball-pulse-rise',
        'ball-rotate',
        'cube-transition',
        'ball-zig-zag',
        'ball-zig-zag-deflect',
        'ball-triangle-path',
        'ball-scale',
        'line-scale',
        'line-scale-party',
        'ball-scale-multiple',
        'ball-pulse-sync',
        'ball-beat',
        'line-scale-pulse-out',
        'line-scale-pulse-out-rapid',
        'ball-scale-ripple',
        'ball-scale-ripple-multiple',
        'ball-spin-fade-loader',
        'line-spin-fade-loader',
        'triangle-skew-spin',
        'pacman',
        'ball-grid-beat',
        'semi-circle-spin',
        'ball-scale-random',
    ];

    export default ()=>{
        return (
            <Grid avg={4} bordered>
                {
                    divs.map((load, i) => {
                        return (
                            <Grid.Item key={i} style={{textAlign: 'center'}}>
                                <Loader key={load} color="#3bb4f2" className="loader-demo" name={load} scale={1}></Loader>
                                <div style={{marginTop:'20px'}}>
                                    {load}
                                </div>
                            </Grid.Item>
                        );
                    })
                }
            </Grid>
        )
    }

```


## Grid Props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|name   |  loader name |string | ball-spin-fade-loader|
|scale   |loader scale |number|  1|
|color  |  loader color |string| #fff|
