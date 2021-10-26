import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import {SliderData} from "./SliderData";
import "./Style.css";

const len = SliderData.length - 1;

const Slider = () => {

    const [activeId, setActiveId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId(activeId === len ? 0 : activeId + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [activeId]);

    return (
        <div className="slider_section">
            <SliderContent activeId={activeId} sliderImage={SliderData} />
            <Arrows
                prevSlide={() => setActiveId(activeId < 1 ? len : activeId - 1)}
                nextSlide={() => setActiveId(activeId === len ? 0 : activeId + 1)}
            />
            <Dots
                activeId={activeId}
                sliderImage={SliderData}
                onclick={(activeId) => setActiveId(activeId)}
            />
        </div>
    );
}

export default Slider;
