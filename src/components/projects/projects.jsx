import ProjectList from "../projectList/projectList";
import "./projects.scss"
import { useState, useEffect} from "react";
import { PersonalProjects, CourseProjects } from "../../data";

export default function Projects() {
    const[selected, setSelected] = useState("personal projects");
    const[data, setData] = useState([]);

    const list = [
        {
            id: "personal projects",
            title: "personal projects",
        },
        {
            id: "course projects",
            title: "course projects",
        }
    ];

    useEffect(()=>{
        switch(selected) {
            case "personal projects":
                setData(PersonalProjects)
                break
            case "course projects":
                setData(CourseProjects)
                break
            default:
                setData(PersonalProjects)
        }
    },[selected]);

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item)=>(
                    <ProjectList 
                    title={item.title}
                    active={selected === item.id} 
                    setSelected = {setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
