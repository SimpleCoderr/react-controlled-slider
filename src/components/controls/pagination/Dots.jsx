import { useContext } from "react";
import Dot from "./Dot";
import { SliderContext } from "../../Slider";

const Dots = () => {

    const {slidesCount} = useContext(SliderContext)
    const dotsArr = []
    for (let i = 0; i < slidesCount; i++) {
        dotsArr.push(<Dot key={`dot-${i}`} number={i}/>)
        
    }
    return (
        <div className="dots">
            {dotsArr}
        </div>
    )
}

export default Dots;