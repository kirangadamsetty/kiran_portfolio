import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./utils/ThemeContext"

const Spotify = () =>{
    const spotify = `${process.env.PUBLIC_URL}/spotify.png`
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const react = `${process.env.PUBLIC_URL}/react.png`
    const link = `${process.env.PUBLIC_URL}/link.png`
    const {theme} = useContext(ThemeContext)
    return(
        <section className = {`projects-detail-bg nick-bgs ${theme ? "bg-white" : ""}`}>
            <div className = "container">
            <h3 className = {`banner-name-text text-center pt-5 pb-5 ${theme ? "text-black" : ""}`} data-aos="fade-down">Spotify <span className = 'text-danger'>Clone</span></h3>
                           <div className = "row align-items-center">
                    <div className = "col-lg-4">
                   <div className = "projects-detail-image" data-aos="flip-left">
                    <img src = {spotify} alt = "reenvision"/>
                    </div>
                    </div>
                    <div className = "col-lg-8">
                   <div className = "projects-detail-para bg-dark p-2">
                   <img src = {html} alt = "html" height= "40" width = "40"/>
                   <img src = {css} alt = "css" height= "40" width = "40"/>
                   <img src = {javascript} alt = "javascript" height= "40" width = "40"/>
                   <img src = {react} alt = "bootstrap" height= "40" width = "40"/>
                   <p>Developed a comprehensive website for Reenvision Eye Care, showcasing a full range of eye care services. Utilized HTML, CSS, JavaScript, and Bootstrap to create a responsive and user-friendly design. Included a dedicated e-commerce page for selling skin care products, and designed features for patients to book online appointments and explore all available services. The website effectively enhances patient engagement and streamlines service accessibility.</p>
                  <Link to = "https://kmusic-top.netlify.app/" target = "_blank">
                   <button className  = "bg-danger link"><img src = {link} alt = "bootstrap" height= "40" width = "40"/></button>
                   </Link>
                    </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Spotify