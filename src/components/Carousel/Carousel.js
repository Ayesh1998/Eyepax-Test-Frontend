import {useEffect, useState} from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import '../Carousel/carousel.css';
import Slide from "../Slide/Slide";
import axios from "axios";

//Carousel function
const Carousel = ({slides, infinite}) => {
    const [current, setCurrent] = useState(0);
    const [sliderData, setSliderData] = useState(null);

    const url = "http://localhost:3600/api/carousel/ ?slides=" + slides;

    //function to fetch data
    const fetchSliderData = (slides) => {
        axios.get(url)
            .then(function (response) {
                //handle success
                // console.table(response?.data?.slides);
                setSliderData(response?.data?.slides)
            })
            .catch(function (error) {
                // handle error
                alert("Could not fetch data");
                console.log(error);
            })
    }

    //fetching data using useEffect
    useEffect(() => {
        fetchSliderData();
    }, [slides]);

    //function to slide into next slide
    const nextSlide = () => {
        infinite ? setCurrent((prevState) => prevState === sliderData?.length - 1 ? 0 : prevState + 1) :
            setCurrent((prevState) => prevState === sliderData?.length - 1 ? prevState : prevState + 1);
    };

    //function to slide into previous slide
    const prevSlide = () => {
        infinite ? setCurrent((prevState) => prevState === 0 ? sliderData?.length - 1: prevState - 1) :
            setCurrent((prevState) => prevState === 0 ? prevState : prevState - 1);
    };

    if (sliderData?.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            {
                sliderData?.length !== 1 &&
                <>
                    <FaAngleLeft color="white" className='left-arrow' onClick={prevSlide}/>
                    <FaAngleRight color="white" className='right-arrow' onClick={nextSlide}/>
                </>
            }
            {sliderData?.map((slide, index) => {
                return (
                    <Slide key={slide?._id} slide={slide} current={current} index={index}/>
                );
            })}
        </section>
    );
};

export default Carousel;