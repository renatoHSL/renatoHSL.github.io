export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Olá, meu nome é Renato</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <br /> lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* <button className="btn btn-primary">Get in Touch</button> */}
            </div>
            <div className="hero--section--img">
                {/* Foto principal  */}
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
}