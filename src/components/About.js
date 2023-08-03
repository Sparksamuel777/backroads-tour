
import aboutImg from '../images/about.jpeg'
import Title from "./Title";
const About = () => {
    return (
        <section className="section" id="about">
            <Title title='about' subTitle='us' />
            <div className="section-center about-center">

                <article className="about-img">
                    <img
                        src={aboutImg}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </article>

                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum,
                        nisi aut ea natus rem distinctio dolores sunt ad iure!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum,
                        nisi aut ea natus rem distinctio dolores sunt ad iure!
                    </p>
                    <a href={'#about'} className="btn"> read more</a>
                </article>
            </div>
        </section>

    )
}

export default About
