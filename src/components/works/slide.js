import React from 'react';

const Slide = ({ title, description, img }) => (

    <div className="slide">
        <div className="textContainer">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <img src={process.env.PUBLIC_URL + img} alt="img" />
    </div>
)

export default Slide;