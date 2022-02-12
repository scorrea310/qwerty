import React from "react";
import "./Footer.css"
import { BsGlobe } from "react-icons/bs"
import logo from './footer-img.PNG'
import logo2 from './footer-img2.PNG'
import logo3 from './footer-img3.PNG'

const Footer = () => {
  return (
    <footer>
      <img src={logo3} id="row-img" />
      <div id='story-row'>
        <div id="story-row-inner">
          <h1 id="footer-title">What is Qwerty</h1>
        </div>
        <div id="story-row-inner">
          <div>
            <p>A community doing good</p>
          </div>
          <div>
            <p>Support independent creators</p>
          </div>
          <div>
            <p>Peace of mind</p>
          </div>
        </div>
      </div>
        <img src={logo2} id="row-img" />
        <img src={logo} id="row-img" />
      <div id="row2">
        <BsGlobe size={23} />
        <p>
          Etsy is powered by 100% renewable electricity.
        </p>
      </div>
      <div id="row3">
        <div id="row3-inner">
          <div>
            <div className="row3-headers">Technologies</div>
            <p>React</p>
            <p>Redux</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>SQLAlchemy</p>
            <p>AWS S3</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div>
            <p className="row3-headers">Linkedin</p>
            <a className='footer-link'  href='https://www.linkedin.com/in/steve-correa/' target="_blank">Steve Correa</a>
            <a className='footer-link'  href='https://www.linkedin.com/in/minu-kim-911bbb192/' target="_blank">Minu Kim</a>
            <a className='footer-link'  href='https://www.linkedin.com/in/grant-ellis-russell' target="_blank">Grant Russell</a>
            <a className='footer-link'  href='https://www.linkedin.com/in/eddie-verdusco/' target="_blank">Eddie Verdusco</a>
          </div>
          <div>
            <p className="row3-headers">GitHub</p>
            <a className='footer-link'  href='https://github.com/scorrea310' target="_blank">Steve Correa</a>
            <a className='footer-link'  href='https://github.com/minuminukim' target="_blank">Minu Kim</a>
            <a className='footer-link'  href='https://github.com/grantongrant' target="_blank">Grant Russell</a>
            <a className='footer-link'  href='https://github.com/verduscos' target="_blank">Eddie Verdusco</a>

          </div>
        </div>
      </div>
      <div id="row4">
        <div id="row4-inner">
          <p>
            United States | English (US) | $ (USD)
          </p>
          <p>
            © 2022 Qwerty, Inc.
          </p>
        </div>
      </div>

    </footer>
  )
}


export default Footer;
