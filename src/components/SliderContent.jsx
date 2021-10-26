import React from "react";
import {SliderData} from "./SliderData";

const SliderContent = ({ activeId }) => {
    return (
        <div className="slider_content" >
            {SliderData.map((slide, id, ) => (
                <div
                    key={id}
                    className={id === activeId ? "slider_active" : "slider_inactive"}
                >
                    <img className="slider_pic" src={slide.pic} alt="" />

                    <div className="slider_container">
                        <div className="slider_text">
                            <h2 className="slider_h2">{slide.title_h2}</h2>
                            <h3 className="slider_h3">{slide.text_h3}</h3>
                        </div>

                        <button className="slider_button">
                            <h2 className="slider_button_h2"> {slide.button_h2} </h2>
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default SliderContent;
