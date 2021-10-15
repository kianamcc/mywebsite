import "./works.scss"
import Carousel from "react-elastic-carousel"
import Slide from "./slide";

export default function Works() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        // { width: 900, itemsToShow: 2, itemsToScroll: 2 },
        // { width: 1200, itemsToShow: 3 }
      ];
 
    return (
        <div className="works" id="works">
            <Carousel breakPoints={breakPoints}>
                <Slide title="Cozy Cat Home" description="Created a game in unity with C# using Visual Studio." img="/assets/Yume.jpg"/>
                <Slide title="Don't Die" img="/assets/img1.png"/>
                <Slide img="/assets/img2.png"/>
                <Slide img="/assets/Flower.jpg"/>
            </Carousel> 
        </div>
    )
}
















// // other ver more recent
// import "./works.scss"
// import Carousel from "react-elastic-carousel"
// import React, { Component } from 'react';
// import { SliderData } from "../sliderData";
// import { useState } from "react";

// export default function Works() {

//     const [currentSlide, setCurrentSlide] = useState(0)

//     const breakPoints = [
//         { width: 1, itemsToShow: 1 },
//         { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//         { width: 768, itemsToShow: 3 },
//         { width: 1200, itemsToShow: 4 }
//       ];

//     class App extends Component {
//         state = {
//           items: [
//             {id: 1, title: 'item #1'},
//             {id: 2, title: 'item #2'},
//             {id: 3, title: 'item #3'},
//           ]
//         }
      
//         render () {
//           const { items } = this.state;
//           return (
//             <Carousel>
//               {items.map(item => <div key={item.id}>{item.title}</div>)}
//             </Carousel>
//           )
//         }
//       }

//     const nextSlide = () => {
//         if(currentSlide !== SliderData.length - 1) {
//             setCurrentSlide(currentSlide + 1)
//         }
//         else if (currentSlide === SliderData.length - 1) {
//             setCurrentSlide(0)
//         }

//     }

//     const prevSlide = () => {
//         if(currentSlide !== 0) {
//             setCurrentSlide(currentSlide - 1)
//         }
//         else if (currentSlide === 0) {
//             setCurrentSlide(SliderData.length - 1)
//         }
//     }
 
//     return (
//         <div className="works" id="works">
//             console.log(currentSlide)
//             <div className="slider">
//                 {SliderData.map((slide, index) => (
//                     <div className="container">
//                         <div className="item">
//                             <div className="left">
//                                 <div className="leftContainer">
//                                     <div
//                                         key={index}
//                                         className={index === currentSlide ? 'slide active' : 'slide'}
//                                         >
//                                         <h2>{slide.title}</h2>
//                                         <p>{slide.desc}</p>
//                                         <img src={slide.img} alt="" />
//                                         <div className="right">
//                                             {/* <img 
//                                                 src={process.env.PUBLIC_URL + `/assets/img${index + 1}.png`} 
//                                             /> */}
//                                             {index === currentSlide && (
//                                                 <img src={slide.img} alt="" />
//                                             )}
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div> {/*end item*/}
//                     </div>
//                 ))}
//             </div>
//             <img src={process.env.PUBLIC_URL + "/assets/darrow.png"} className="left arrow" alt="" onClick={nextSlide}/> 
//             <img src={process.env.PUBLIC_URL + "/assets/darrow.png"} className="right arrow" alt="" onClick={prevSlide}/>     
//         </div>
//     )
// }











// old ver

// import "./works.scss"
// import { SliderData } from "../sliderData";


// import { useState } from "react";

// export default function Works() {

//     const [currentSlide, setCurrentSlide] = useState(0)

//     const data = [
//         {
//             id: "1",
//             title: "test 1",
//             img: process.env.PUBLIC_URL + "/assets/Yume.jpg",
//             desc: "Description goes here"
//         },
//         {
//             id: "2",
//             title: "test 2",
//             img: process.env.PUBLIC_URL + "/assets/Yume.jpg",
//             desc: "Description goes here"
//         },
//         {
//             id: "3",
//             title: "test 3",
//             img: process.env.PUBLIC_URL + "/assets/Yume.jpg",
//             desc: "Description goes here"
//         },
        
//     ];

//     const handleClick = (direction) => {
//         if(direction === "left" && currentSlide > 0) { // not first pg
//             setCurrentSlide(currentSlide - 1)
//         }
//         else if(direction === "left" && currentSlide <= 0) { // first pg
//             setCurrentSlide(2)
//         }
//         else if(direction === "right" && currentSlide < data.length-1) { // not last page
//             setCurrentSlide(currentSlide + 1)
//         }
//         else { // last pg
//             setCurrentSlide(0)
//         }
  
//     }
 
//     return (
//         <div className="works" id="works">
//             <div className="slider" style={{transform:`translateX(-${currentSlide*90}vw)`}}>
//                 {SliderData.map((data, index) => (
//                     <div className="container">
//                         <div className="item">
//                             <div className="left">
//                                 <div className="leftContainer">
//                                     key={data.id}
                                    
//                                     <h2>{data.title}</h2>
//                                     <p>{data.desc}</p>
//                                     <span>Projects</span>
//                                 </div>
//                             </div>
//                             <div className="right">
//                                 <img src={data.img} alt="" />
//                                 {/* <img src={process.env.PUBLIC_URL + } */}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <img src={process.env.PUBLIC_URL + "/assets/darrow.png"} className="left arrow" alt="" onClick={()=>handleClick("left")}/> 
//             <img src={process.env.PUBLIC_URL + "/assets/darrow.png"} className="right arrow" alt="" onClick={()=>handleClick("right")}/>     
//         </div>
//     )
// }