export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Olá, meu nome é Renato Loureiro.</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color"> Back-End{" "}
                            <br />
                            Developer
                        </span>
                    </h1>
                    
                </div>
            </div>
            <div className="hero--section--img">
                {/* Foto principal  */}
                <img src="./img/computer-image.png" alt="Hero Section" />
            </div>
        </section>
    )
}