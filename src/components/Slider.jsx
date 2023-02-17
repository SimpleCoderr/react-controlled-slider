import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import Arrows from "./controls/Arrows";
import Dots from "./controls/pagination/Dots";
import SlideList from "./SlideList";

export const SliderContext = createContext();


const Slider = ({ data, auto, delay = 5000, navs, pags }) => {

    const [items, setItems] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [mouseOver, setMouseOver] = useState(false)

    useEffect(() => {
        setItems(data)
    }, [])


    useEffect(() => {
        if (!auto || mouseOver) {
            return
        }

        const interval = setInterval(() => {
            changeSlide(1);
        }, delay);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, currentSlide, mouseOver]);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;
        if (currentSlide + direction < 0) {
            slideNumber = items.length - 1;
        }
        else {
            slideNumber = (currentSlide + direction) % items.length;
        }

        setCurrentSlide(slideNumber)
    }

    const goToSlide = (number) => {
        setCurrentSlide(number)
    }

    return (
        <div className="slider" onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
            
            <SliderContext.Provider value={{ items, currentSlide, changeSlide, slidesCount: items.length, goToSlide }}>

                {navs && <Arrows />}

                <div className="slideList-container" >
                    <SlideList />
                </div>

                {pags && <Dots />}

            </SliderContext.Provider>
        </div>
    )
}

export default Slider;