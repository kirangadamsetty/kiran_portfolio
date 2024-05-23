const Reenvision = () =>{
    const reenvision = `${process.env.PUBLIC_URL}/reenvision.jpg`
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    return(
        <section className = "projects-detail-bg nick-bgs">
            <div className = "container">
            <h3 className = "banner-name-text text-center pt-5 pb-5" data-aos="fade-down">Reenvision</h3>
                           <div className = "row align-items-center">
                    <div className = "col-lg-4">
                   <div className = "projects-detail-image" data-aos="flip-left">
                    <img src = {reenvision} alt = "reenvision"/>
                    </div>
                    </div>
                    <div className = "col-lg-8">
                   <div className = "projects-detail-para bg-dark p-2">
                   <p>Developed a comprehensive website for Reenvision Eye Care, showcasing a full range of eye care services. Utilized HTML, CSS, JavaScript, and Bootstrap to create a responsive and user-friendly design. Included a dedicated e-commerce page for selling skin care products, and designed features for patients to book online appointments and explore all available services. The website effectively enhances patient engagement and streamlines service accessibility.</p>
                  
                   <img src = {html} alt = "html" height= "40" width = "40"/>
                   <img src = {css} alt = "css" height= "40" width = "40"/>
                   <img src = {javascript} alt = "javascript" height= "40" width = "40"/>
                   <img src = {bootstrap} alt = "bootstrap" height= "40" width = "40"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Reenvision