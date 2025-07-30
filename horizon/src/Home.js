import React,  { useState } from "react";
import "./index.css";
import main from './assets/olivemain.jpeg';

export default function Home() {
    //const [isOpen, setIsOpen] = useState(false)
    //console.log(isOpen)
    return (
    
    <div className="container">

        <div class="testing">
        <img class="olivemain" src={main} alt="logo" height="120px"/>
        <div class="landing">
            <h1 id="landingText">We arise and take our position for a destiny-driven 
            life in Christ Jesus - a calling for in depth Sacred Scripture study to benefit the poorest of the poor.</h1>
            <a href= "www.google.com" id="landingLearn">
                <h3 id="landingLearnText">Learn More</h3>
            </a>
        </div>
        </div>

        <section class="about">
            <div class="header-container">
                <h1 id="header-title">Our Ministry</h1>
                <p1 id="header-p">From terror to honor,
<br></br>From despair to repair,
<br></br>From devastation to restoration,
<br></br>From mistakes to miracles,
<br></br>From suffering to rejoicing,
<br></br>From darkness to light,
<br></br>From misery to victory,
<br></br>We arise and take our position for a destiny-driven life in Christ Jesus.
- a calling for in depth Sacred Scripture study to benefit the poorest of the poor.</p1>
            </div>
            <div class="header-img">
        
            </div>
        </section>
        
        <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
  <div class="slide-label">St Joseph Home Caring Home Caring Place - Meru Kenya</div>
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <div class="slide-label">It is an orphanage for about 60 boys found in streets with no food to eat and no one to take care of them. The orphanage also interacts with the community around it to share the love of God.</div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <div class="slide-label">Donations for Chosen Ministries go to three orphanages- two in the Philippines and one in Kenya</div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <div class="slide-label"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>

    <section class="current-work">
        <h2>Test Title</h2>
        <div class="work-content">
            
            <div class="text-content">

                <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>
            </div>
        
            
        </div>
    </section>
            
    <section class="social-links">
    </section>
            <div className="footer">
                <h1></h1>
            </div>
        </div>
    
    )
}
