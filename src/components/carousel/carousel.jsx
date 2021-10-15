import React from 'react'
import "./carousel.scss"
import { useState } from "react";
import { images } from "./carouselData.jsx";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// use inline styling to set background img to url of current image we want to render

export default function Carousel() {

    const [currentImg, setCurrentImg] = useState(0) // start at 0

    const leftClick=()=> {
        if(currentImg > 0) {
            setCurrentImg(currentImg-1);
        }
    }

    const rightClick=()=> {
        if(currentImg < images.length-1) {
            setCurrentImg(currentImg+1);
        }
    }

    return (
        <div className="carousel" id="carousel">
            <div className="carouselInner" style={{backgroundImage: `url(${images[currentImg].img})`}}> 
                {/* <img src={images[currentImg].img} /> */}
                <div className="left" onClick={leftClick}>
                {/* onClick={()=>{setCurrentImg(currentImg-1)}} */}
                    <ArrowBackIosIcon style={{ fontSize: 30 }}/>
                </div>
                <div className="center">
                    <h1>{images[currentImg].title}</h1>
                    <p>{images[currentImg].desc}</p>
                </div>
                <div className="right" onClick={rightClick}>
                <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    )
}
