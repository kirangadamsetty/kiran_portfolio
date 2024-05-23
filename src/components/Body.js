import Boxes from "./Boxes"

import About from "./About"

import Skills from "./Skills"
import Contact from "./Contact"
import Technologies from "./Technologies"
const Body = () =>{
    const download = `${process.env.PUBLIC_URL}/downloading.png`
    const bannerImage = {
        backgroundImage :"url(/banner.jpg)",
          backgroundSize:"cover",
          height : "100vh",
          backgroundAttachment : "fixed",
    };
   
    return(
        <section>
        <div style = {bannerImage} className = " d-flex flex-column justify-content-center p-4">
        <div className = "container">
        <div className  ="text-background bg-danger p-4" data-aos="fade-up">
         <h1 className = "banner-top-text">Hey! This is</h1>
         <h1 className  = "banner-name-text">Kiran</h1>
         <h1 className = "banner-top-text">FrontEnd Developer</h1>
         <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1y_hxRjqVzPBGL5mAOZ-fNEs7PnPRcFeD/edit?usp=sharing&ouid=111160508423697891801&rtpof=true&sd=true" download>
  <button className="btn btn-light banner-button shadow">
    Download Resume
    <span><img src={download} alt="download" className="m-2 mb-2" /></span>
  </button>
</a>

         </div>
        </div>
        </div>
       <Boxes/>
       <About/>
       <Technologies/>
      <Skills/>
      <Contact/>
</section>
    )
}
export default Body






