import SlideImage from "./SlideImage";
import SlideTitle from "./SlideTitle";

const Slide = ({data:{url, title}}) => {
    return (
        <div className="slide">
            <SlideImage url={url} alt={title}/>
            <SlideTitle title={title}/>
        </div>
    )
}

export default Slide;