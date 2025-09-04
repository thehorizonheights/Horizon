import React,  { useState } from "react";
import "./index.css";
import main from './assets/cropcity3.jpg';
import gary from './assets/gary.png';
import plan from './assets/projplan1.png';
import plan1 from './assets/projplan4.jpg';
import room from './assets/room.webp';
import olive from './assets/horizon.png';
import room1 from './assets/room1.webp';
import worker from './assets/worker.webp';
import worker1 from './assets/worker1.webp';
import city1 from './assets/city1.webp';
import city2 from './assets/city2.jpg';
import city3 from './assets/city3.jpg';
import city4 from './assets/horizoncity.jpg';
import projplan from './assets/projplan.png';

export default function Home() {
    const [isOpen] = useState(false)
    console.log(isOpen)
    return (
    
    <div className="container">

        <div class="testing">
        <img class="olivemain" src={main} alt="logo" height="120px"/>
        <div class="landing">
            <h1 id="landingText">Elevate Your Living  - Learn Real Estate - Join the Journey -</h1>
            <a href= "https://calendly.com/realgmschwartz/30-min-virtual-meeting-invitee-name-gary-clone?" id="landingLearn">
                <h3 id="landingLearnText">Learn More ➔</h3>
            </a>
        </div>
        </div>
        
        <section class="about" id="about">
          <div class="aboutphoto">
            <img class="garyimg" src={gary} alt="logo"/>
            
            <div class="garyimgdecor"></div>
          </div>
            <div class="header-container">
              <h1 id="aboutname">Gary Schwartz</h1>
                <h1 id="header-title">CEO of The Horizon Heights</h1>
                
                <p1 id="header-p">I’ve been guided by a simple but powerful vision: to build a life of stability,
freedom, and abundance for my family.
<br></br>
<br></br>I wanted to break free from the cycle of financial
stress and instead create a legacy fueled by passive income and purpose-driven
entrepreneurship.
<br></br>
<br></br>To start, I explored alternative investment platforms like Fundrise (9.1% ROI), Groundfloor
(11.3%), and Yieldstreet (~7%). These early steps laid the groundwork for my real estate
journey. 
<br></br>
<br></br>Today, I’m proud to be a full-time real estate investor, committed to building a
diversified portfolio that supports my family and helps others achieve financial freedom.
</p1>
            </div>
            <div class="divider"></div>
            <div class="header-img">
            </div>
        </section>
        
        <section class="highlights" id="highlights">
          <div class="aboutphoto">
            <div class="highlightspace"></div>
            <div class="garyimgdecordecor"></div>
            <div class="garyimgdecordecordecor"></div>
            <h1 id="highlighttitle">Committed to Impact</h1>
            <p1 id="highlighttext">This high-end boutique hotel is located in the heart of downtown Cincinnati, steps from Paycor Stadium and the Convention Center. Designed to blend luxury and purpose, the project will offer 100 rooms, a rooftop restaurant, and rotating free accommodations for unhoused individuals and military veterans.
              
            </p1>
<br></br>
<br></br>

<br></br>
<img id="projectimg"src={plan} alt="projectbuilding"></img>
<div class="projectimgdecor"></div>
<p1 id="highlighttext1"> <br></br>As part of Horizon Heights' mission, this project allocates a percentage of available rooms each month to local veterans and individuals in need of temporary shelter. This initiative partners with community nonprofits to ensure a sustainable and dignified support model for our investors.
<br></br>
              <br></br>Projected IRR: 18% 
              <br></br>Target Equity Multiple: 2.3x
              <br></br>5-Year Hold Period
              <br></br>Preferred Return: 8%</p1>
<a href= "https://calendly.com/realgmschwartz/30-min-virtual-meeting-invitee-name-gary-clone?" id="projectbtn">
                <h3 id="projectbtntext">More Details ➔</h3>
            </a>
<img id="projectimg1"src={plan1} alt="buildingroof"></img>
<div class="projectimg1decor"></div>
          </div>
          

        </section>

    <section class="current-work">
      <h1 id="worktitle">Your Next Opportunity</h1>
        <div class="work-content">
            

  <div class="collage">
    <img src={projplan} alt="wholebuilding" class="photo1" />
    <img src={worker} alt="threepeople" class="photo2" />
    <img src={city1} alt="brightnightcityscape" class="photo3" />
    <img src={city3} alt="darknightcityscape" class="photo4" />
    <img src={city4} alt="daycityscape" class="photo5" />
    <img src={worker1} alt="threepeoplesuits" class="photo6" />
    <img src={room1} alt="brightroom" class="photo7" />
    <img src={city2} alt="bluecityscape" class="photo8" />
  </div>
</div>
<div class="workp">
    <p class="workparagraph">Feel free to partner with us! I can provide proof-of-funds letters within minutes for up
to $1M. Larger amounts are possible with a bit more lead time.
<br></br>
<br></br>
I operate from a "pay-it-forward" mindset. So many people have supported me on this
journey, and I feel a responsibility — and privilege — to do the same for others. Whether
you're just starting out or looking to scale, I’m always open to sharing what I’ve learned.</p>
      
  </div>
  <div class="workp1">
    <a href= "https://calendly.com/realgmschwartz/30-min-virtual-meeting-invitee-name-gary-clone?" class="workbtn">
                <h3 id="workbtntext">Meet With Me ➔</h3>
            </a>
    
  </div>

    </section>

    <section class="information">
        <div class="container1">
    

    <div class="section1 full-width">
      <h2>Multifamily Portfolio – Nationally</h2>
      <p>
        Horizon Heights has multiple stabilized assets strategically located nationally. With a mix of co-living properties and short-term rental units, Horizon Heights has created a resilient, high-yield income stream that balances stability with growth.
      </p>
    </div>


    <div class="split-row">
      <div class="section1 split">
        <h3>Highlights</h3>
        <p>
          -4 Co-Living Properties in desirable locals
<br></br>-2 Airbnbs in High-Demand Tourist Zones
<br></br>-100% Occupancy for 6+ Months
<br></br>-Managed by Proven Local Teams
        </p>
      </div>
      <div class="section1 split">
        <h3>Performance</h3>
        <p>
          -15% Avg. Cash-on-Cash Return (CoCR)
<br></br>-2.2x Projected Equity Multiple
<br></br>-7-Year Investment Horizon
<br></br>-Tax-Advantaged Cash Flow & Depreciation
        </p>
      </div>
    </div>

  </div>
    </section>
    <section class="contact" id="contact">
        <div class="contactform">
          <h2>Contact Us</h2>
    <form action="#" method="POST">
      <div class="form-group">
        <input type="text" name="name" placeholder="Your Name" required />
      </div>
      <div class="form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>
      <div class="form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
        </div>
        <div class="contactphoto">
          <img id="contactimg"src={room} alt="contactbrightroom"></img>
          <p1>
“Let’s connect and explore how we can create wealth, opportunity, and impact—together” - Gary Schwartz</p1>
        </div>
    </section>
            <div className="footer">
                <div class="footer-content">
    <img src={olive} alt="Company Logo" class="footer-logo" width="50px"></img>
    <h3 class="footer-company-name">THE HORIZON HEIGHTS</h3>
    <p class="footer-phone">
      <a href="tel:+13102661388" color="#fff">(310) 266-1388</a>
    </p>
    <p class="footer-copy">&copy; 2025 The Horizon Heights. All rights reserved.</p>
  </div>
            </div>
        </div>
    
    )
}
