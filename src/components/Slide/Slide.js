import CurrentSlide from "../CurrentSlide/CurrentSlide";

const Slide = ({index, current, slide}) => {
    return (
        <div className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
                <CurrentSlide title={slide.title} subTitle={slide.subTitle} image={slide.image}/>
            )}
        </div>
    );
}

export default Slide;