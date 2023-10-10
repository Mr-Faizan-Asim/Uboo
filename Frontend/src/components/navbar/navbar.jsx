import React from 'react'
import "./assets/css/style.css"
import img from "./assets/img/perfil.png"
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
         <nav class="nav" id="nav">
            <div class="nav__menu container" id="nav-menu">
                <div class="nav__shape"></div>

                <div class="nav__close" id="nav-close">
                    <i class='bx bx-x'></i>
                </div>
                
                <div class="nav__data">
                    <div class="nav__mask">
                    
                        <img src={img} alt="" class="nav__img"/>
                    </div>

                    <span class="nav__greeting">Hi, I'm</span>
                    <h1 class="nav__name"> <br/> Uboo</h1>
                </div>

                <ul class="nav__list">
                    <li class="nav__item">
                        <Link to={"/"} class="nav__link active-link">
                            <i class='bx bx-home' ></i> Home 
                        </Link>
                    </li>
                    <li class="nav__item">
                        <Link to={"/uboo"} class="nav__link">
                            <i class='bx bx-user'></i> Uboo
                        </Link>
                    </li>
                    <li class="nav__item">
                        <Link to={"/products"} class="nav__link">
                            <i class='bx bx-briefcase-alt-2'></i> Products
                        </Link>
                    </li>
                    <li class="nav__item">
                        <Link to={"/blog"} class="nav__link">
                            <i class='bx bx-bookmark'></i> Blog
                        </Link>
                    </li>
                    <li class="nav__item">
                        <Link to={"/details"} class="nav__link">
                            <i class='bx bx-message-square-detail'></i> Details
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <main class="main" id="main">
            <header class="header" id="header">
                <nav class="header__nav container">
                    <Link href="#" class="header__logo">
                        Bales
                    </Link>
    
                    <div class="header__toggle" id="header-toggle">
                        <i class='bx bx-grid-alt'></i>
                    </div>
                </nav>
            </header>


            <section class="section section__height container" id="home">
                <h1>HOME</h1>
                
            </section>

            <section class="section section__height container" id="about">
                <h1>ABOUT</h1>
                
            </section>

            <section class="section section__height container" id="portfolio">
                <h1>PORTFOLIO</h1>
                
            </section>

            <section class="section section__height container" id="skills">
                <h1>SKILLS</h1>
                
            </section>

            <section class="section section__height container" id="contact">
                <h1>CONTACT</h1>

            </section>
        </main>

        <script src="assets/js/main.js"></script>
    </div>
  )
}

export default navbar