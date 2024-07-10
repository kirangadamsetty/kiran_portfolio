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
            <h3 className = {`banner-name-text text-center pb-5 ${theme ? "text-black" : ""}`} data-aos="fade-down">Spotify <span className = 'text-danger'>Clone</span></h3>
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
                   <p>Created a Spotify clone using HTML, CSS, JavaScript, and React.js, featuring an intuitive interface for music streaming. The application includes essential features like song playback with play and stop buttons, and playlist management. Its sleek and responsive design ensures a seamless user experience across devices. This project showcases my expertise in modern web development and my ability to implement interactive functionalities.</p>
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