import { useContext } from "react"
import { ThemeContext } from "./utils/ThemeContext"
const NickHandymanServices = () =>{
    const handyman = `${process.env.PUBLIC_URL}/handyman.jpg`
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    const link = `${process.env.PUBLIC_URL}/link.png`
    const {theme} = useContext(ThemeContext)
    return(
        <section className = {`projects-detail-bg nick-bgs ${theme ? "bg-white" : ""}`}>
            <div className = "container p-4">
            <h3 className = {`banner-name-text text-center pt-5 pb-5 ${theme ? "text-black" : ""}`} data-aos="fade-down">Nick's Handyman <span className = "text-danger">Services</span></h3>
                           <div className = "row align-items-center">
                    <div className = "col-lg-4">
                   <div className = "projects-detail-image" data-aos="flip-left">
                    <img src = {handyman} alt = "handyman"/>
                    </div>
                    </div>
                    <div className = "col-lg-8">
                   <div className = "projects-detail-para bg-dark p-2">
                   <img src = {html} alt = "html" height= "40" width = "40"/>
                   <img src = {css} alt = "css" height= "40" width = "40"/>
                   <img src = {javascript} alt = "javascript" height= "40" width = "40"/>
                   <img src = {bootstrap} alt = "bootstrap" height= "40" width = "40"/>
                   <p>Developed a comprehensive website for Nick's Handyman Services, showcasing a wide range of handyman services offered. Utilized HTML, CSS, JavaScript, and Bootstrap to create a responsive and user-friendly design. Integrated Google Analytics and Tag Manager to facilitate business analysis and track user interactions. The website effectively highlights the services provided, ensuring a seamless and engaging experience for potential customers.</p>
                   <a href = "https://nickshandymanservice.com/" target = "_blank" rel="noreferrer">
                   <button className  = "bg-danger link"><img src = {link} alt = "bootstrap" height= "40" width = "40"/></button>
                   </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NickHandymanServices