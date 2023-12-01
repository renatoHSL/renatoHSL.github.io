import { useState, useEffect } from 'react';
import { Link } from "react-scroll";

function NavBar() {
    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect (() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    useEffect(() => {
        if ( window.innerWidth <= 1200) {
            closeMenu();
        }
    },[])

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/output-onlinepngtools.png" alt="Logoipsum" />
            </div>
           <a 
                className={`nav__hamburger ${navActive ? "active" : ""}`} 
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className='nav__hamburger__line'></span>
                <span className='nav__hamburger__line'></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="heroSection"
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className='navbar--content'
                        >
                            Sobre Mim
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className='navbar--content'
                        >
                            Projetos
                        </Link>
                    </li>                    
                </ul>
            </div>  
            <div className='navbar--icons'>
                <ul>
                    <li>
                         <a
                            href="https://www.linkedin.com/in/dev-renato-loureiro/"
                            className="navbar--content--icons"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 33 33"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                    </li>
                    <li>
                          <a
                            href="https://github.com/renatoHSL"
                            className="navbar--content--icons"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg 
                             xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                          </a>
                    </li>
                </ul>
            </div>         
        </nav>
    )
}

export default NavBar;