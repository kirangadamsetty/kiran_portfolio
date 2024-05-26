import ProjectCards from "./ProjectCards"
const Skills = ({name}) =>{
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
            name : "Renvision",
            image : "reenvision",
            link : "/reenvision",
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
        <section className = "skills-section p-4">
            <div className = "container pb-4">
                <div className = "row justify-content-center">
                <h3 className = "banner-name-text text-center mb-4" data-aos="fade-down">Projects</h3>
                  {projectDetails.map((pro, index)=><ProjectCards key= {index} pro = {pro}/>)}  
                </div>
            </div>
        </section>
    )
}
export default Skills