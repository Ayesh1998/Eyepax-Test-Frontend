import TextOnSlide from "../TextOnSlide/TextOnSlide";
import "./currentSlide.css";

const CurrentSlide = ({title, subTitle, image}) => {
    return (
        <>
            <TextOnSlide title={title} subTitle={subTitle}/>
            <img src={image} alt='image' className='image'/>
        </>
    );
}

export default CurrentSlide;