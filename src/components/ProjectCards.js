import { Link } from "react-router-dom"

const ProjectCards = ({pro}) =>{
   
  
    return(
        <div className = "col-lg-4 mt-5">
                   <Link to = {pro.link}>  <div className={`projects-box projects-bg shadow ${pro.image}`}>
                     
                        <h3 className = "text-white bg-dark p-2">{pro.name}</h3>
                 
                      </div></Link> 
                    </div>
    )
}
export default ProjectCards











