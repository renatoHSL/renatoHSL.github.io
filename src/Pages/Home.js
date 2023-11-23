// import React from "react";
import Header from "../components/Header";
import Projects from '../components/Projects';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='App-body'>
            <Header />
            <h2>Home page</h2>
            <h2>Sobre Mim</h2>
            <p>Breve descrição</p>
            <h2>Projetos</h2>
            <Projects />
            <Link to='/projects'>
                <button> Mais projetos </button>
            </Link>
            {/* <Link to='/projects'>Ver todos os Projetos</Link> */}
        </div>
    );
}

export default Home;