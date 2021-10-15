import "./intro.scss"
import { init } from 'ityped'
import {useEffect, useRef } from "react" // hooks, use react features w/o writing class


export default function Intro() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 2000,
            backSpeed: 50,
            strings: ["Developer", "Designer"],
        })
    },[])

    return (
        <div className="intro" id="intro">
            {/* <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/Yume.jpg"} alt="" />
                </div>
            </div> */}
            <div className="background">
                <img src={process.env.PUBLIC_URL + "/assets/bkg5.JPG"} alt="" />
            </div>
            
            <div className="right">
                <div className="wrapper">
                    
                    <h1>Kiana McCullough</h1>
                    <h2>Computer Science</h2>

                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src={process.env.PUBLIC_URL + "/assets/darrow.png"} alt="" />
                </a>

            </div>
        </div>
    )
}
