import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import './css/animate.css'
import './css/bootstrap.min.css'
import './css/flex-slider.css'
import './css/font-awesome.css'
import './css/fullpage.min.css'
import './css/owl.carousel.css'
import './css/responsive.css'
import './css/templatemo-style.css'

import * as registerAction from './../../store/actions/register'
import * as loginAction from './../../store/actions/login'

import { Login } from './../Login'
import { Register } from './../Register'
import { Footer } from './../Footer'
import { Header } from './../Header'

import { connect } from 'react-redux'

const mouse = require('./images/mouse-scroll.png')
const video = require('./images/video-bg.mp4')
const perfil = require('./images/IMG_20201022_003942_574.jpg')
const image1 = require('./images/20200629_194531.jpg')
const image2 = require('./images/20201023_200538.jpg')
const image3 = require('./images/20201108_115204.jpg')
const image4 = require('./images/IMG-20200828-WA0029.jpg')
const image5 = require('./images/IMG-20200927-WA0012.jpg')
const image6 = require('./images/IMG-20201003-WA0026.jpg')
const image7 = require('./images/IMG-20201005-WA0036.jpg')
const image8 = require('./images/IMG-20201019-WA0020.jpg')
const image9 = require('./images/IMG-20201102-WA0002.jpg')
const image10 = require('./images/IMG-20201103-WA0054.jpg')
const image11 = require('./images/IMG-20201105-WA0003.jpg')

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function mapStateToProps(store: {
  languageReducer: any
}) {
  return {
    languageReducer: store. languageReducer
  };
}

class Catalina extends React.Component<{}, {
  value: string
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleKeyPress = (e: any) => {
    if(e.key === 'Enter'){
      this.search()
    }
  }

  onChange = (e: any) => {
    this.setState({
      value: e.target.value
    })
  }

  search = () => {
    this.props.history.push('/item/search/' + this.state.value)
  }

  render(){

    const { t } = this.props;

    return(
      <div id="video">
        <div className="preloader">
          <div className="preloader-bounce">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <header id="header">
          <div className="container-fluid">
            <div className="navbar">
              <a href="#" id="logo" title="Elegance by TemplateMo">Catalinon</a>
              <div className="navigation-row">
                <nav id="navigation">
                  <button type="button" className="navbar-toggle"> <i className="fa fa-bars"></i> </button>
                  <div className="nav-box navbar-collapse">
                    <ul className="navigation-menu nav navbar-nav navbars" id="nav">
                      <li data-menuanchor="slide01" className="active"><a href="#slide01">Home</a></li>
                      <li data-menuanchor="slide02"><a href="#slide02">About Me</a></li>
                      <li data-menuanchor="slide03"><a href="#slide03">Services</a></li>
                      <li data-menuanchor="slide04"><a href="#slide04">My Skills</a></li>
                      <li data-menuanchor="slide05"><a href="#slide05">My Work</a></li>
                      <li data-menuanchor="slide06"><a href="#slide06">Testimonials</a></li>
                      <li data-menuanchor="slide07"><a href="#slide07">Contact Me</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <video autoPlay muted loop id="myVideo">
          <source src={ video } type="video/mp4" />
        </video>

        <div id="fullpage" className="fullpage-default">

          <div className="section animated-row" data-section="slide01">
            <div className="section-inner">
              <div className="welcome-box">
                <span className="welcome-first animate" data-animate="fadeInUp">Hello, welcome to</span>
                <h1 className="welcome-title animate" data-animate="fadeInUp">catalinon</h1>
                <p className="animate" data-animate="fadeInUp">This is a clean and modern HTML5 template with a video background. You can use this layout for your profile page. Please spread a word about templatemo to your friends. Thank you.</p>
                <div className="scroll-down next-section animate data-animate='fadeInUp'"><img src={ mouse } alt="" /><span>Scroll Down</span></div>
              </div>
            </div>
          </div>

            <div className="section animated-row" data-section="slide02">
                <div className="section-inner">
                    <div className="about-section">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 wide-col-laptop">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="about-contentbox">
                                            <div className="animate" data-animate="fadeInUp">
                                                <span>About Me</span>
                                                <h2>Who am i?</h2>
                                                <p>Credits go to <strong>Unsplash</strong> and <strong>Pexels</strong> for photos and video used in this template. Vivamus tincidunt, augue rutrum convallis volutpat, massa lacus tempus leo.</p>
                                            </div>
                                            <div className="facts-list owl-carousel">
                                                <div className="item animate" data-animate="fadeInUp">
                                                    <div className="counter-box">
                                                        <i className="fa fa-trophy counter-icon" aria-hidden="true"></i><span className="count-number">32</span> Awards Won
                                                    </div>
                                                </div>
                                                <div className="item animate" data-animate="fadeInUp">
                                                    <div className="counter-box">
                                                        <i className="fa fa-graduation-cap counter-icon" aria-hidden="true"></i><span className="count-number">4</span> Degrees
                                                    </div>
                                                </div>
                                                <div className="item animate" data-animate="fadeInUp">
                                                    <div className="counter-box">
                                                        <i className="fa fa-desktop counter-icon" aria-hidden="true"></i><span className="count-number">12</span> Working Years
                                                    </div>
                                                </div>
                                                <div className="item animate" data-animate="fadeInUp">
                                                    <div className="counter-box">
                                                        <i className="fa fa-support counter-icon" aria-hidden="true"></i><span className="count-number">6</span> Team Members
                                                    </div>
                                                </div>
                                                <div className="item animate" data-animate="fadeInUp">
                                                    <div className="counter-box">
                                                        <i className="fa fa-certificate counter-icon" aria-hidden="true"></i><span className="count-number">10</span> Certificates
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <figure className="about-img animate" data-animate="fadeInUp"><img src={ perfil } className="rounded" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section animated-row" data-section="slide03">
                <div className="section-inner">
                    <div className="row justify-content-center">
                        <div className="col-md-8 wide-col-laptop">
                            <div className="title-block animate" data-animate="fadeInUp">
                                <span>Services</span>
                                <h2>What I Do?</h2>
                            </div>
                            <div className="services-section">
                                <div className="services-list owl-carousel">
                                    {/* <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            <span className="service-icon"><i className="fa fa-bookmark" aria-hidden="true"></i></span>
                                            <h3>Bootstrap Themes</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image1 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div> */}
                                        <figure className="about-img animate" data-animate="fadeInUp"><img src={ image1 } className="rounded" alt="" /></figure>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            {/* <span className="service-icon"><i className="fa fa-cloud" aria-hidden="true"></i></span>
                                            <h3>HTML5 Coding</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p> */}
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image5 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            {/* <span className="service-icon"><i className="fa fa-desktop" aria-hidden="true"></i></span>
                                            <h3>Fully Responsive</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p> */}
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image3 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            {/* <span className="service-icon"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                                            <h3>Mobile Ready</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p> */}
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image4 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            {/* <span className="service-icon"><i className="fa fa-comments" aria-hidden="true"></i></span>
                                            <h3>Fast Support</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p> */}
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image2 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            {/* <span className="service-icon"><i className="fa fa-database" aria-hidden="true"></i></span>
                                            <h3>24-hour Up Time</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p> */}
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image6 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            {/* <span className="service-icon"><i className="fa fa-bell" aria-hidden="true"></i></span>
                                            <h3>Instant Upgrades</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p> */}
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image7 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="service-box">
                                            {/* <span className="service-icon"><i className="fa fa-camera" aria-hidden="true"></i></span>
                                            <h3>Always Monitoring</h3>
                                            <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p> */}
                                            <figure className="about-img animate" data-animate="fadeInUp"><img src={ image8 } className="rounded" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section animated-row" data-section="slide04">
                <div className="section-inner">
                    <div className="row justify-content-center">
                        <div className="col-md-7 wide-col-laptop">
                            <div className="title-block animate" data-animate="fadeInUp">
                                <span>My Skills</span>
                                <h2>What i’m good?</h2>
                            </div>
                            <div className="skills-row animate" data-animate="fadeInDown">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2">   
                                        <div className="skill-item">
                                            <h6>HTML CSS</h6>
                                            <div className="skill-bar">
                                                <span>70%</span>
                                                <div className="filled-bar"></div>
                                            </div>          
                                        </div>
                                        <div className="skill-item">
                                            <h6>PSD Design</h6>
                                            <div className="skill-bar">
                                                <span>90%</span>
                                                <div className="filled-bar-2"></div>
                                            </div>          
                                        </div>
                                        <div className="skill-item">
                                            <h6>Social Media</h6>
                                            <div className="skill-bar">
                                                <span>70%</span>
                                                <div className="filled-bar"></div>
                                            </div>          
                                        </div>
                                        <div className="skill-item last-skill">
                                            <h6>Leadership</h6>
                                            <div className="skill-bar">
                                                <span>90%</span>
                                                <div className="filled-bar-2"></div>
                                            </div>          
                                        </div>                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section animated-row" data-section="slide06">
                <div className="section-inner">
                    <div className="row justify-content-center">
                        <div className="col-md-8 wide-col-laptop">
                            <div className="title-block animate" data-animate="fadeInUp">
                                <span>My Work</span>
                                <h2>what i’ve done?</h2>
                            </div>
                            <div className="gallery-section">
                                <div className="gallery-list owl-carousel">
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-1.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap CSS templates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-2.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap themes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-3.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap layouts.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-1.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-2.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download Bootstrap CSS templates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-3.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-1.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-2.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="images/item-3.jpg" alt="" />
                                            </div>
                                            <div className="thumb-inner animate" data-animate="fadeInUp">
                                                <h4>templatemo is the best</h4>
                                                <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section animated-row" data-section="slide05">
                <div className="section-inner">
                    <div className="row justify-content-center">
                        <div className="col-md-8 wide-col-laptop">
                            <div className="title-block animate" data-animate="fadeInUp">
                                <span>TESTIMONIALS</span>
                                <h2>what THEY SAY?</h2>
                            </div>
                            <div className="col-md-8 offset-md-2">
                                <div className="testimonials-section">
                                    <div className="testimonials-slider owl-carousel">
                                        <div className="item animate" data-animate="fadeInUp">
                                            <div className="testimonial-item">
                                                <div className="client-row">
                                                    <img src="images/profile-01.jpg" className="rounded-circle" alt="profile 1" />
                                                </div>
                                                <div className="testimonial-content">
                                                    <h4>Sandar</h4>
                                                    <p>"Ut varius leo eu mauris lacinia, eleifend posuere urna gravida. Aenean a mattis lacus."</p>
                                                    <span>Managing Director</span>
                                                </div>                                           
                                            </div>
                                        </div>
                                        <div className="item animate" data-animate="fadeInUp">
                                            <div className="testimonial-item">
                                                <div className="client-row">
                                                    <img src="images/profile-01.jpg" className="rounded-circle" alt="profile 2" />
                                                </div>
                                                <div className="testimonial-content">
                                                    <h4>Shinn</h4>
                                                    <p>"Nam iaculis, leo nec facilisis sollicitudin, dui massa tempus odio, vitae malesuada ante elit vitae eros."</p>
                                                    <span>CEO and Founder</span>
                                                </div>                                           
                                            </div>
                                        </div>
                                        <div className="item animate" data-animate="fadeInUp">
                                            <div className="testimonial-item">
                                                <div className="client-row">
                                                    <img src="images/profile-01.jpg" className="rounded-circle" alt="profile 3" />
                                                </div>
                                                <div className="testimonial-content">
                                                    <h4>Marlar</h4>
                                                    <p>"Etiam efficitur, tortor facilisis finibus semper, diam magna fringilla lectus, et fringilla felis urna posuere tortor."</p>
                                                    <span>Chief Marketing Officer</span>
                                                </div>                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section animated-row" data-section="slide07">
                <div className="section-inner">
                    <div className="row justify-content-center">
                        <div className="col-md-7 wide-col-laptop">
                            <div className="title-block animate" data-animate="fadeInUp">
                                <span>Contact</span>
                                <h2>Get In Touch!</h2>
                            </div>
                            <div className="contact-section">
                                <div className="row">
                                    <div className="col-md-6 animate" data-animate="fadeInUp">
                                        <div className="contact-box">
                                            <div className="contact-row">
                                                <i className="fa fa-map-marker"></i> 123 New Street Here, Wonderful City 10220
                                            </div>
                                            <div className="contact-row">
                                                <i className="fa fa-phone"></i> 090 080 0210
                                            </div>
                                            <div className="contact-row">
                                                <i className="fa fa-envelope"></i> info@company.co
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 animate" data-animate="fadeInUp">
                                        <form id="ajax-contact" method="post" action="#">
                                            <div className="input-field">
                                                <input type="text" className="form-control" name="name" id="name" required placeholder="Name" />
                                            </div>
                                            <div className="input-field">
                                                <input type="email" className="form-control" name="email" id="email" required placeholder="Email" />
                                            </div>
                                            <div className="input-field">
                                                <textarea className="form-control" name="message" id="message" required placeholder="Message"></textarea>
                                            </div>
                                            <button className="btn" type="submit">Submit</button>
                                        </form>
                                        <div id="form-messages" className="mt-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="social-icons">
            <div className="text-right">
                <ul className="social-icons">
                    <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#" title="Instagram"><i className="fa fa-behance"></i></a></li>
                </ul>
            </div>
        </div>
    </div>  
    );
  }
}

const CatalinaExport = withTranslation()(Catalina)

export default connect(mapStateToProps)(CatalinaExport)