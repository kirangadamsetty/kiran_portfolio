const Contact = () =>{
   
    const phone = `${process.env.PUBLIC_URL}/viber.png`
    const email = `${process.env.PUBLIC_URL}/email.png`
    const LinikedIn = `${process.env.PUBLIC_URL}/linkedin.png`
    const github = `${process.env.PUBLIC_URL}/github.svg`
    const banner = `${process.env.PUBLIC_URL}/banner.jpg`
    const bannerImage = {
      backgroundImage : `url(${banner})`,
       backgroundSize:"cover",
      
  
       backgroundAttachment : "fixed",
  };
    return(
        <section>
          <div style = {bannerImage} className  = "bg-dark pt-5 pb-5" id = "contact">
         
            <div className = "container">
            <h3 className = "banner-name-text  text-white mb-5 contact-heading" data-aos="fade-down">Contact <span className = "text-danger">Details</span></h3>
                <div className = "col-lg-6  contact-text p-3">
                  <h3><img src = {phone} alt = "phone" className = "m-3 phone"/> <a href="tel:+91 7075649727" className = "text-white">+91 7075649727</a></h3>
                   <h3><img src = {email} alt = "email" className = "m-3 phone"/><a href="mailto:gadamsettykiran514@gmail.com" className = "text-white">gadamsettykiran514@gmail.com</a></h3>
                   <div className  = "text-center">
                   <a href = "https://www.linkedin.com/in/kiran-gadhamshetty-53a096177/" target = "_blank" rel = "noopener noreferrer" className = "skills-image-contact"><img src = {LinikedIn} alt = "linkedin"  className = "m-3"/></a>
                   <a href = "https://github.com/kirangadamsetty?tab=repositories" target = "_blank" rel = "noopener noreferrer" className = "skills-image-contact"><img src = {github} alt = "github"  className = "m-3"/></a>
                   </div>
                </div>
            </div>
          </div>  
        </section>
    )
}
export default Contact