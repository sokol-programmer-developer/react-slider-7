import React from "react";
import {SliderData} from "./SliderData"

const Dots = ({ activeId, onclick }) => {
    return (
        <div className="dots">
            {SliderData.map((slide, id) => (
                <button
                    key={id}
                    className={`${activeId === id ? "dot_active" : "dot_default"}`}
                    onClick={() => onclick(id)}
                > </button>
            ))}
        </div>
    );
}

export default Dots;
