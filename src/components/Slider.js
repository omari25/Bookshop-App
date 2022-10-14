import { useState, useEffect } from "react";
import slideData from "../slideImages"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = slideData.length
    let autoScroll = true
    let slideInterval;

    function nextSlide(){
        setCurrentSlide(currentSlide === slideLength-1 ? 0 : currentSlide + 1)
    }

    function previousSlide(){
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    function autoSlide() {
        slideInterval = setInterval(nextSlide, 2000)
    }

    // useEffect(() =>{
    //     setCurrentSlide(0)
    // }, [])

    useEffect(() =>{
        if (autoScroll) {
            autoSlide()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <div className="slider">
            <BsArrowLeftCircle className="slide-icon-left" onClick={previousSlide}/>
            <BsArrowRightCircle className="slide-icon-right" onClick={nextSlide}/>
            {slideData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.img} alt="slide" />
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    );
}

export default Slider;