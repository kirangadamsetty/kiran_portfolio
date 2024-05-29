const Technologies = () =>{
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    const react = `${process.env.PUBLIC_URL}/react.png`
    const tailwind = `${process.env.PUBLIC_URL}/tailwind.png`
    const redux = `${process.env.PUBLIC_URL}/redux.svg`
    const git = `${process.env.PUBLIC_URL}/git.png`
    const github = `${process.env.PUBLIC_URL}/github.svg`
    return(
        <section className = "p-4 text-center bg-dark" id = "skills">
        <div className = "container pb-4">
         <h3 className = "banner-name-text text-center mb-5" data-aos="fade-down">Ski<span className = "text-danger">lls</span></h3>
            <div className= "row gap-lg-4 justify-content-center">
              <div className = "col-4 col-lg-1 skills-image">
                <img src = {html} alt = "html"/>
                <p className = "mt-2">HTML</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image" data-aos="flip-left">
                <img src = {css} alt = "css"/>
                <p className = "mt-2">CSS</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image" data-aos="flip-left">
                <img src = {javascript} alt = "javascript"/>
                <p className = "mt-2">JavaScript</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image" data-aos="flip-left">
                <img src = {bootstrap} alt = "bootstrap" />
                <p className = "mt-2">Bootstrap</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image">
                <img src = {react} alt = "react"/>
                <p className = "mt-2">ReactJS</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image tailwind" data-aos="flip-left">
                <img src = {tailwind} alt = "react"/>
                <p className = "mt-2">Taiwindcss</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image" data-aos="flip-left">
                <img src = {redux} alt = "react"/>
                <p className = "mt-2">Redux</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image" data-aos="flip-left">
                <img src = {git} alt = "react"/>
                <p className = "mt-2">Git</p>
              </div>
              <div className = "col-4 col-lg-1 skills-image" data-aos="flip-left">
                <img src = {github} alt = "react"/>
                <p className = "mt-2">Git</p>
              </div>
            </div>
        </div>
        </section>
    )
}

export default Technologies