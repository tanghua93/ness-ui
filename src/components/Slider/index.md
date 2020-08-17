---
title: Slider 轮播器
---
# Slider

``` tsx
    /**
     * title: 基本 
     * desc: 默认样式
    */
   import React from 'react'
   import {Slider} from 'ness-ui'
   import 'ness-ui/lib/components/styles/index.css'
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const style = {
        background: '#5f9ea0',
        color: '#fff',
        fontSize: '36px',
        lineHeight: '100px',
        marginRight: '10px',
        padding: '0px 0px',
        position: 'relative',
        textAlign: 'center',
    }
   export default ()=>
        (
            <Slider {...settings}>
                <div>
                    <h3 style={style}>1</h3>
                </div>
                <div>
                    <h3 style={style}>1</h3>
                </div>
                <div>
                    <h3 style={style}>1</h3>
                </div>
            </Slider>
       )
```
``` tsx
    /**
     * title: verticalSwiping 
     * desc: 默认样式
    */
    import React from 'react'
    import {Slider} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
    const style = {
        background: '#5f9ea0',
        color: '#fff',
        fontSize: '36px',
        lineHeight: '100px',
        marginRight: '10px',
        padding: '0px 0px',
        position: 'relative',
        textAlign: 'center',
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay:true,
        autoplaySpeed: 1000,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    }
   export default ()=>
        (
            <Slider {...settings}>
                <div>
                    <h3 style={style}>1</h3>
                </div>
                <div>
                    <h3 style={style}>2</h3>
                </div>
                <div>
                    <h3 style={style}>3</h3>
                </div>
    
            </Slider>
    )
```
```tsx
    /**
     * title: centerMode 
     * desc: 默认样式
    */
    import React from 'react'
    import {Slider} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      autoplay:true,
      autoplaySpeed: 2000,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    }
    const style = {
        background: '#5f9ea0',
        color: '#fff',
        fontSize: '36px',
        lineHeight: '100px',
        marginRight: '10px',
        padding: '0px 0px',
        position: 'relative',
        textAlign: 'center',
    }
     export default ()=>(
        <Slider {...settings}>
            <div>
                <h3 style={style}>1</h3>
            </div>
            <div>
                <h3 style={style}>2</h3>
            </div>
            <div>
                <h3 style={style}>3</h3>
            </div>
        </Slider>
     )
    
```
```tsx
    /**
     * title: Swipe To Slide 
     * desc: 默认样式
    */
    import React from 'react'
    import {Slider} from 'ness-ui'
    import 'ness-ui/lib/components/styles/index.css'
   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true
    }
    const style = {
        background: '#5f9ea0',
        color: '#fff',
        fontSize: '36px',
        lineHeight: '100px',
        marginRight: '10px',
        padding: '0px 0px',
        position: 'relative',
        textAlign: 'center',
    }
     export default ()=>(
        <Slider {...settings}>
            <div>
            <h3 style={style}>1</h3>
            </div>
            <div>
            <h3 style={style}>2</h3>
            </div>
            <div>
            <h3 style={style}>3</h3>
            </div>
            <div>
            <h3 style={style}> 4</h3>
            </div>
            <div>
            <h3 style={style}>5</h3>
            </div>
            <div>
            <h3 style={style}>6</h3>
            </div>
        </Slider>
     )
```

> 该组件封装自 `React-slick` 库 ，更多详情<a href="https://react-slick.neostack.com/docs/example/simple-slider">点击查看</a>





