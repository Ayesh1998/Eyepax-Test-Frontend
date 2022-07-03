import "./textOnSlide.css";

const TextOnSlide = ({title, subTitle}) => {
    return (
        <>
            <p className="slider-title">{title}</p>
            <p className="slider-sub-title">{subTitle}</p>
        </>
    );
}

export default TextOnSlide;