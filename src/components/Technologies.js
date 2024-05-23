const Technologies = () =>{
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    const react = `${process.env.PUBLIC_URL}/react.png`
    const tailwind = `${process.env.PUBLIC_URL}/tailwind.png`
    return(
        <section className = "p-4 text-center bg-dark" id = "skills">
        <div className = "container pb-4">
         <h3 className = "banner-name-text text-center mb-5" data-aos="fade-down">Skills</h3>
            <div className= "row justify-content-center">
              <div className = "col-6 col-lg-2 skills-image">
                <img src = {html} alt = "html"/>
              </div>
              <div className = "col-6 col-lg-2 skills-image" data-aos="flip-left">
                <img src = {css} alt = "css"/>
              </div>
              <div className = "col-6 col-lg-2 skills-image" data-aos="flip-left">
                <img src = {javascript} alt = "javascript"/>
              </div>
              <div className = "col-6 col-lg-2 skills-image" data-aos="flip-left">
                <img src = {bootstrap} alt = "bootstrap" />
              </div>
              <div className = "col-6 col-lg-2 skills-image">
                <img src = {react} alt = "react"/>
              </div>
              <div className = "col-6 col-lg-2 skills-image tailwind" data-aos="flip-left">
                <img src = {tailwind} alt = "react" width = "130" height = "120"/>
              </div>
            </div>
        </div>
        </section>
    )
}

export default Technologies