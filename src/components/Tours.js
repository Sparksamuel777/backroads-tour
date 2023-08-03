import Title from "./Title";
import {tours} from "../data";
import Tour from "./Tour";


const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title='featured' subTitle='tours'/>


            <div className="section-center featured-center">

                {tours.map((tour) => {

                    return <Tour key={tour.id} {...tour} />
                })}
            </div>
            <div className="tour-btn">
                <a href={'#tours'} className="btn">all tours</a>
            </div>
        </section>
    )
}

export default Tours
