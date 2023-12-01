export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Olá, meu nome é Renato</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack{" "}
                            <br />
                            Developer
                        </span>
                    </h1>
                    
                </div>
            </div>
            <div className="hero--section--img">
                {/* Foto principal  */}
                <img src="./img/programming-skills.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}