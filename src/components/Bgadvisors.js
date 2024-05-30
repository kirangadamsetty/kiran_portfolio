import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./utils/ThemeContext"
const Bgadvisors = () =>{
    const bgadvisors = `${process.env.PUBLIC_URL}/bgadvisors.jpg`
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    const link = `${process.env.PUBLIC_URL}/link.png`
    const {theme} = useContext(ThemeContext)
    return(
        <section className = {`projects-detail-bg nick-bgs ${theme ? "bg-white" : ""}`}>
            <div className = "container">
            <h3 className = {`banner-name-text text-center pt-5 pb-5 ${theme ? "text-black" : ""}`} data-aos="fade-down">BGAdvisors</h3>
                           <div className = "row align-items-center">
                    <div className = "col-lg-4">
                   <div className = "projects-detail-image" data-aos="flip-left">
                    <img src = {bgadvisors} alt = "bgadvisors"/>
                    </div>
                    </div>
                    <div className = "col-lg-8">
                   <div className = "projects-detail-para bg-dark p-2">
                   <img src = {html} alt = "html" height= "40" width = "40"/>
                   <img src = {css} alt = "css" height= "40" width = "40"/>
                   <img src = {javascript} alt = "javascript" height= "40" width = "40"/>
                   <img src = {bootstrap} alt = "bootstrap" height= "40" width = "40"/>
                   <p>Developed a dynamic website for BGAdvisors, offering comprehensive guidance on financial advising. Utilized HTML, CSS, JavaScript, and Bootstrap to ensure a responsive and user-friendly interface. Incorporated a blog section to facilitate weekly blog uploads, enhancing SEO and engaging users with fresh, relevant content. The website effectively communicates the expertise of financial advisors, providing a valuable resource for clients.</p>
                   <Link to = "https://www.bgadvisorscpa.com/" target = "_blank">
                   <button className  = "bg-danger link"><img src = {link} alt = "bootstrap" height= "40" width = "40"/></button>
                   </Link>
                  
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Bgadvisors