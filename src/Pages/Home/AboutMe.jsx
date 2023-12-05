export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <div className="aboutme--title">
            <h1>Sobre Mim</h1>
          </div>  
          <ul className="hero--section-description">
            <li>
              &#x1f60e; Dedico-me ao aprofundamento em tecnologias Back-End, com ênfase em Python. 
            </li>
            <li>
              &#x1f680; Buscando minha primeira oportunidade na área de tecnologia.
            </li>         
            {/* <li>
               &#x1f680;
            </li> 
           */}
          </ul>
          <ul></ul>
          <p>
            
          </p>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p> */}
        </div>
      </div>
    </section>
  );
}