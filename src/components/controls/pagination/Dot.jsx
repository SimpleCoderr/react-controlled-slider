import { useContext } from "react"
import { SliderContext } from "../../Slider"

const Dot = ({number}) => {
    const {currentSlide, goToSlide} = useContext(SliderContext)

    return (
        <div className={`dot ${currentSlide === number ? 'active' : ''}`} onClick={() => {goToSlide(number)}}></div>
    )
}

export default Dot