import { Row, Col } from "react-bootstrap";
import data from "../../data/index.json";

export default function MyPortfolio() {
  return (    
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="aboutme--title">Projetos</p>
        </div>
      </div>
      <Row className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <Col key={index} sm={6} md={8} lg={10}>
            <div className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <div className="portfolio--link--container">
                <a href={item.link?.deploy} target="_blank" rel="noopener noreferrer">
                  <button className="button--style">
                    {item.websiteName?.deploy}                      
                  </button>   
                  </a>   
                <a href={item.link?.github} target="_blank" rel="noopener noreferrer">
                  <button className="button--style">
                    {item.websiteName?.github}                    
                  </button>
                </a>             
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
