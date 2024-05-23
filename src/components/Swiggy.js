const Swiggy = () =>{
    const swiggy = `${process.env.PUBLIC_URL}/swiggy.webp`
    const html = `${process.env.PUBLIC_URL}/html.png`
    const css = `${process.env.PUBLIC_URL}/css.png`
    const javascript = `${process.env.PUBLIC_URL}/js.png`
    const bootstrap = `${process.env.PUBLIC_URL}/bootstrap.png`
    const react = `${process.env.PUBLIC_URL}/react.png`

    return(
        <section className = "projects-detail-bg nick-bgs">
            <div className = "container">
            <h3 className = "banner-name-text text-center pt-5 pb-5" data-aos="fade-down">Swiggy</h3>
                   <div className = "row align-items-center">
                    <div className = "col-lg-4">
                   <div className = "projects-detail-image" data-aos="flip-left">
                    <img src = {swiggy} alt = "swiggy"/>
                    </div>
                    </div>
                    <div className = "col-lg-8">
                   <div className = "projects-detail-para bg-dark p-2">
                   <p>Created a Swiggy clone website using React.js and Tailwind CSS, replicating the popular food delivery platform's functionality. Integrated Swiggy's live API to dynamically fetch and display restaurant and menu data. Implemented a cart section for users to add selected items and utilized React Router DOM for seamless navigation between pages. Utilized React Redux for efficient state management, ensuring a smooth and intuitive user experience.</p>
                  
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