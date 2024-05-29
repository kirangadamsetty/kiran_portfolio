const Swiggy = () =>{
    const youtube = `${process.env.PUBLIC_URL}/youtube.jpg`
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    const react = `${process.env.PUBLIC_URL}/react.png`

    return(
        <section className = "projects-detail-bg nick-bgs">
            <div className = "container">
            <h3 className = "banner-top-text text-center pt-5 pb-5" data-aos="fade-down">You<span className = 'text-danger'>tube</span></h3>
                   <div className = "row align-items-center">
                    <div className = "col-lg-4">
                   <div className = "projects-detail-image" data-aos="flip-left">
                    <img src = {youtube} alt = "youtube"/>
                    </div>
                    </div>
                    <div className = "col-lg-8">
                   <div className = "projects-detail-para bg-dark p-2">
                   <p>Designed and developed a YouTube clone website using React.js, Tailwind CSS, and YouTube API integration. Implemented a highly optimized search feature with debouncing for efficient real-time recommendations based on user input. Leveraged React Redux for state management and React Router DOM for seamless navigation. Created end-level nesting comments and integrated a live chat option for enhanced user engagement and interaction.</p>
                  
                   <img src = {html} alt = "html" height= "40" width = "40"/>
                   <img src = {css} alt = "css" height= "40" width = "40"/>
                   <img src = {javascript} alt = "javascript" height= "40" width = "40"/>
                   <img src = {bootstrap} alt = "bootstrap" height= "40" width = "40"/>
                   <img src = {react} alt = "react" height= "40" width = "40"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Swiggy