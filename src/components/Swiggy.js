import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./utils/ThemeContext"
const Swiggy = () =>{
    const swiggy = `${process.env.PUBLIC_URL}/swiggy.webp`
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    const react = `${process.env.PUBLIC_URL}/react.png`
    const link = `${process.env.PUBLIC_URL}/link.png`
    const {theme} = useContext(ThemeContext)
    return(
        <section className = {`projects-detail-bg nick-bgs ${theme ? "bg-white" : ""}`}>
            <div className = "container">
            <h3 className = {`banner-name-text text-center pt-5 pb-5 ${theme ? "text-black" : ""}`} data-aos="fade-down">Nature's <span className = "text-danger">table</span></h3>
                   <div className = "row align-items-center">
                    <div className = "col-lg-4">
                   <div className = "projects-detail-image" data-aos="flip-left">
                    <img src = {swiggy} alt = "swiggy"/>
                    </div>
                    </div>
                    <div className = "col-lg-8">
                   <div className = "projects-detail-para bg-dark p-2">
                   <img src = {html} alt = "html" height= "40" width = "40"/>
                   <img src = {css} alt = "css" height= "40" width = "40"/>
                   <img src = {javascript} alt = "javascript" height= "40" width = "40"/>
                   <img src = {bootstrap} alt = "bootstrap" height= "40" width = "40"/>
                   <img src = {react} alt = "react" height= "40" width = "40"/>
                   <p>Developed a fully responsive restaurant website called "Nature's Table" using React.js, focusing on seamless user experience and functionality. Implemented dynamic cart and order pages, allowing customers to effortlessly add, increase, or remove food items from their cart. Utilized React Router DOM for efficient and intuitive navigation across the site. Employed React Context API to manage and centralize state, ensuring smooth data flow and accessibility across all components. Enhanced customer engagement and streamlined the ordering process through a user-friendly interface.</p>
                   <Link to = "https://natures-table.netlify.app/" target = "_blank">
                   <button className  = "bg-danger link"><img src = {link} alt = "bootstrap" height= "40" width = "40"/></button>
                   </Link>
                  
                   
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Swiggy