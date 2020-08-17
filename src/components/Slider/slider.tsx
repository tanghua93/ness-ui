import React from 'react'
import Slider, { Settings } from "react-slick"
const Carousel: React.FC<Settings> = (props: Settings)=>{
    return <Slider {...props}></Slider>
}
export default Carousel 