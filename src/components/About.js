import { useContext } from "react"
import { ThemeContext } from "./utils/ThemeContext"

const About = () =>{
    const imageUrl = `${process.env.PUBLIC_URL}/aboutPerson.jpg`
    const {theme} = useContext(ThemeContext)
    return(
        <section id = "about">
            <div  className = {`about-section pb-5 p-4 d-flex flex-column justify-content-center ${theme ? "bg-white" : ""} `}>

            <div className = "container">
            <h3 className = {`banner-name-text text-center mb-4 ${theme ? "text-black" : ""}`} data-aos="fade-down">About <span className = 'text-danger'>Me</span></h3>
                <div className = "row align-items-center">               
                  
                
                    <div className = "col-lg-5 profile-image"  data-aos="flip-left">
                    <img src = {imageUrl} alt = "about"/>
                    </div>
                    <div className = "col-lg-7 profile-para mt-4">
                        <p className = {theme ? "text-black" : ""}>As a Frontend Web Developer, I specialize in building responsive and user-friendly web applications using HTML, CSS, JavaScript, Bootstrap, and ReactJS. With a strong focus on delivering the best user experience, I have developed end-to-end applications that are both efficient and visually appealing. My expertise lies in creating seamless, interactive interfaces that enhance user engagement and satisfaction. Passionate about technology and innovation, I continuously strive to improve my skills and stay updated with the latest industry trends.</p>
                    </div>
                </div>
            </div>
              
            </div>
        </section>
    )
}
export default About

