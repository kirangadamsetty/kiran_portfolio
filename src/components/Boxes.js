

const Boxes = () =>{
    return(
        <section className = "boxes-section p-4">
        <div className = "container p-4">
         <div className = "row">
         <div className = "col-lg-4 box p-3" >
         <div className = "box-inner"  data-aos="flip-left">
            <h2 className = 'text-danger'>1+ Year</h2>
            <p>Experience</p>
            </div>
         </div>
         <div className = "col-lg-4 box p-3 box2">
         <div className = "box-inner">
            <h2 className = 'text-danger'>6+</h2>
            <p>Projects</p>
            </div>
         </div>
         <div className = "col-lg-4 box p-3 box3">
         <div className = "box-inner"  data-aos="flip-left">
            <h2 className = 'text-danger'>1000+</h2>
            <p>Coding Hours</p>
            </div>
         </div>
        </div>
      </div>
      </section>
    )
}
export default Boxes