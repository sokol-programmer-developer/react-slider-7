import React from "react";

const Arrows = ({ prevSlide, nextSlide }) => {
    return (
        <div className="arrows">
        
            <button className="left_arrow" onClick={prevSlide}> &#10094; </button>                     
                        
            <button className="right_arrow" onClick={nextSlide}>  &#10095; </button>                   
                        
        </div>
    );
}

export default Arrows;
