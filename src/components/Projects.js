import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import React from "react";

function Projects() {

    const projects = [
        {
            title: "Projeto 1",
            description: "Descrição 1",
            imgUrl: projImg1,
        },
        {
            title: "Projeto 2",
            description: "Descrição 2",
            imgUrl: projImg2,
        },
        {
            title: "Projeto 3",
            description: "Descrição 3",
            imgUrl: projImg3,
        },
    ]

    return(
        <section className="project" id="projects"> 
            <Container>
                <Row>
                    <Col size={12}>
                        <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />                           
                            )
                          })
                        }
                        </Row>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}

export default Projects;