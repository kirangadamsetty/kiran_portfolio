import { useContext } from "react"
import ProjectCards from "./ProjectCards"
import { ThemeContext } from "./utils/ThemeContext"
const Skills = ({name}) =>{
    const {theme} = useContext(ThemeContext)
    const projectDetails = [
        {
            name : "Nick's Handyman Services",
            image : "nicks-bg",
            link : "/nicks-handyman-services",
            animation : "true"
        },
        {
            name : "BGAdvisors",
            image : "bg-advisors",
            link : "/Bgadvisors",
            animation : "false"
        },
        {
            name : "Spotify Clone",
            image : "spotify",
            link : "/spotify",
            animation : "true"
        },
        {
            name : "Nature's Table",
            image : "swiggy",
            link : "/swiggy",
            animation : "false"
        },
        {
            name : "Youtube Clone",
            image : "youtube",
            link : "/youtube",
            animation : "true"
        }
       ]
    return(
        <section className = {`skills-section p-4 ${theme ? "bg-white" : ""} `}>
            <div className = "container pb-4">
                <div className = "row justify-content-center">
                <h3  className = {`banner-name-text text-center mb-4 ${theme ? "text-black" : ""}`} data-aos="fade-down">Proj<span className = "text-danger">ects</span></h3>
                  {projectDetails.map((pro, index)=><ProjectCards key= {index} pro = {pro}/>)}  
                </div>
            </div>
        </section>
    )
}
export default Skills