import { useContext } from "react";
import Slide from "./slide/Slide";
import { SliderContext } from "./Slider";

const SlideList = () => {

    const {items, currentSlide} = useContext(SliderContext)

    return (
        <div className="slider-list" style={{
            transform: `translateX(-${currentSlide * 100}%)`
        }}>
           {items.map((slide, index) => <Slide data={slide} key={index}/>)}
        </div>
    )
}

export default SlideList;