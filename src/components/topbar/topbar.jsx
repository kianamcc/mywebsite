import "./topbar.scss"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';

export default function Topbar({ open, setOpen }) {
        
    return (
        <div className={"topbar " + (open && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + "/assets/emaillogo.png"} alt="" />
                        kianamcc@gmail.com
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setOpen(!open)}>
                        <FaIcons.FaBars/>
                    </div>
                    <div className="close" onClick={()=>setOpen(!open)}>
                        <AiIcons.AiOutlineClose/>
                    </div>
                </div>

            </div>
        </div>
    )
}