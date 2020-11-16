import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'

import './css/portal-experiencias.css'

import * as registerAction from './../../store/actions/register'
import * as loginAction from './../../store/actions/login'

import { Header } from './../Header'
import { Footer } from './../Footer'


const logo = require('./img/logo.svg')
const bandArg = require('./img/arg.png')
const bandEngl = require('./img/eng.png')
const educacion = require('./img/educacion.png')
const naturaleza = require('./img/naturaleza.jpg')
const viajes = require('./img/viajes.jpg')
const bienestar = require('./img/bienestar.jpg')
const gastronomia = require('./img/gastronomia.jpg')
const entretenimiento = require('./img/entretenimiento.jpg')
const video = require('./img/video-experiencia.mp4')

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function mapStateToProps(store: {
  loginReducer: any,
  registerReducer: any,
  languageReducer: any
}) {
  return {
    loginReducer: store.loginReducer,
    registerReducer: store.registerReducer,
    languageReducer: store.languageReducer
  };
}

class Experience extends React.Component<{}, {}> {

  props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render(){

    const { t } = this.props;

    return(
      <div>
        <ScrollToTopOnMount />
        <Header {...this.props} lng={ this.props.languageReducer.lng }/>

        <section className="hero">
          <video autoPlay muted loop className="video-hero">
            <source src={ video } type="video/mp4" />
          </video>
          <div className="content-video"></div>
        </section>

        <section className="main mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center my-4">
                  <p className="h3 font-weight-bold">{ t('we make it worth it') }</p>
                  <p className="h5">{ t('we teach you how to live a unique experience, through the plans we have for you') }.</p>
                </div>
              </div>
            </div>
            <div className="experiencias my-5">
              <div className="row">

                <div className="col-md-3">
                  <div className="divider-mobile">
                    <a href=""><img src={ educacion } alt="" className="img-experiencias" />   
                      <div className="center-elements"> 
                        <div className="details-experiencias">
                          <p className="text-uppercase">Experiencias</p>
                          <div className="name-experiencias">Educación</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divider-mobile">
                    <a href=""><img src={ gastronomia } alt="" className="img-experiencias" />   
                      <div className="center-elements"> 
                        <div className="details-experiencias">
                          <p className="text-uppercase">Experiencias</p>
                          <div className="name-experiencias">Gastronomía</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divider-mobile">
                    <a href=""><img src={ naturaleza } alt="" className="img-experiencias" />   
                      <div className="center-elements"> 
                        <div className="details-experiencias">
                          <p className="text-uppercase">Experiencias</p>
                          <div className="name-experiencias">Naturaleza</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divider-mobile">
                    <a href=""><img src={ viajes } alt="" className="img-experiencias" />   
                      <div className="center-elements"> 
                        <div className="details-experiencias">
                          <p className="text-uppercase">Experiencias</p>
                          <div className="name-experiencias">Viajes</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
              <div className="row">

                <div className="col-md-3">
                  <div className="divider-mobile">
                    <a href=""><img src={ bienestar } alt="" className="img-experiencias" />   
                      <div className="center-elements"> 
                        <div className="details-experiencias">
                          <p className="text-uppercase">Experiencias</p>
                          <div className="name-experiencias">Bienestar</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divider-mobile">
                    <a href=""><img src={ entretenimiento } alt="" className="img-experiencias" />   
                      <div className="center-elements"> 
                        <div className="details-experiencias">
                          <p className="text-uppercase">Experiencias</p>
                          <div className="name-experiencias">Entretenimiento</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>

              </div>
            </div>
          </div>
        </section>

        <Footer {...this.props} />
       
      </div>
    );
  }
}

const ExperienceExport = withTranslation()(Experience)

export default connect(mapStateToProps)(ExperienceExport)