import React, { useEffect } from 'react'
import { withTranslation, Trans } from 'react-i18next';

import './css/styles.css'

import * as registerAction from './../../store/actions/register'
import * as loginAction from './../../store/actions/login'

import { Header } from './../Header'
import { Footer } from './../Footer'

import { connect } from 'react-redux'

const logo = require('./img/logo.svg')
const equipo = require('./img/equipo.jpg')
const innovacion = require('./img/innovacion.jpg')
const us = require('./img/banner-nosotros.jpg')

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

class Us extends React.Component<{}, {}> {

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

        <section className="main">
       
          <div className="container contenedor">
            <h2>{ t('us') }</h2>
            <div className="row d-flex align-items-center">

              <div className="col-12 col-lg-12 margentop"> 
                <div className="col-12 col-lg-3 imagen-nosotros">                                
                  <img className="image" src={ logo } />
                </div>
                <div className="col-8 col-lg-5 descripcion-nosotros">                                
                  <p>{ t('we are a team of people willing to') }<br />
                    { t('highlight and enhance your skills') }<br />
                    { t('through a unique space.') }</p>
                </div>
                <div className="col-4 col-lg-3 linea-nosotros">   
                  <hr />
                </div>
              </div>

              <div className="col-12 col-lg-6 margentop left-float fondovioleta">
                <hr className="hrizq" /> <br /><br />
                <p>{ t('we have the vision to accompany you in the process of') }
                  <strong> { t('change and evolution.') }</strong></p> <br />
                <p><strong>{ t('how') }</strong> { t('through a search engine with solutions') }
                  { t('comprehensive to improve your consumer experience.') }</p>
                <br />
                <hr className="hrder" />
              </div>
              <div className="col-12 col-lg-6 img-contenido-nosotros margentop left-float nocelu">
                <img className="image" src={ equipo } />
              </div>
              <div className="col-12 col-lg-6 img-contenido-nosotros-izq margentop left-float nocelu">
                <img className="image" src={ innovacion } />
              </div>
              <div className="col-12 col-lg-6 margentop left-float fondovioleta">
                <hr className="hrizq" /> <br /><br />
                <p>{ t('day by day we seek') } <strong> { t('innovate') } </strong> { t('the development of') }
                  { t('strategies taking into account your needs.') }</p> <br />
                <p>{ t('we intend to give way to a constant') }
                  { t('evolution to change, with the objective of') }
                  { t('measurable results of') } <strong>{ t('satisfaction') }</strong>.</p>
                <br />
                <hr className="hrder" />
              </div>

            </div>
          </div>
        </section>

        <div className="text-center my-5 boton-blog"> <a className="btn btn-primary border-0 rounded-0" href="https://wingstratton.com/blog/" role="button">Visitá nuestro blog</a></div>

        <section className="nostros-fondo-texto" style={{ backgroundImage: `url(${us})` }}>
          <div className="col-12 col-lg-12 texto-nosotros">
            <Trans>
              <p>{ t('we accompany you in each stage of growth') }, <br />
                { t('together to find the best way to spread your success') }.</p>
            </Trans>
          </div>
        </section>

        <section className="my-4">
          <div className="container-fluid container-cv">
            <div className="row">
              <div className="col-lg-4 col-sm-12 cargarcv margentop left-float">
                <h2>{ t('load your cv') }</h2>
                <input type="text" className="form-control" id="nombre" name="nombre" placeholder={ t('name') } required />
                <input type="text" className="form-control" id="email" name="email" placeholder={ t('email') } required />
                <label className="cargarcvinput">
                  <input  type="file" name="foto" accept="image/*"  />
                  { t('attach cv') }
                </label>
                <button className="cargarcvinput">{ t('send') }</button>
              </div>
    
      
              <div className="col-lg-8 col-sm-12 trabaja margentop left-float">
                <div className="col-lg-12 col-12 trabajacon">     
                  <h2>{ t('work') } <br />
                    { t('with') } <br />
                    { t('us') }</h2>
                  <hr className="trabajaconhr" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer {...this.props} />

      </div>
    );
  }
}

const UsExport = withTranslation()(Us)

export default connect(mapStateToProps)(UsExport)