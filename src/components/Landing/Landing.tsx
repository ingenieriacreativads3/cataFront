import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import './css/styles.css'

import * as registerAction from './../../store/actions/register'
import * as loginAction from './../../store/actions/login'

import { Login } from './../Login'
import { Register } from './../Register'
import { Footer } from './../Footer'
import { Header } from './../Header'

import { connect } from 'react-redux'

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

class Landing extends React.Component<{}, {
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
      <div>
        <ScrollToTopOnMount />
        <Header {...this.props} lng={ this.props.languageReducer.lng }/>

        <section className="hero">
          <video autoPlay muted loop className="video-hero">
            <source src={require('./img/video-bg-hero.mp4')} type="video/mp4" />
          </video>

          <div className="content-video">
            <div className="busqueda-contenedor">
              <input 
                className="busqueda"
                onKeyPress={ this.handleKeyPress }
                type="text"
                placeholder={ t('search') }
                title="Buscar"
                onChange={ this.onChange }
                value={ this.state.value }
              />
              <div className="lupa" onClick={ this.search }>
                <a href="#" role="button">
                  <i className="fas fa-search" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="main">
          <Link to="/knowledge" ><button type="button" className="btn btn-primary btn-lg btn-block rounded-0 mt-0 py-5 text-left pl-5" style={{ backgroundColor:'#4D316D', border: 'none' }}> <i className="fas fa-brain"></i> { t('knowledge') }</button></Link>
          <Link to="/experience" ><button type="button" className="btn btn-secondary btn-lg btn-block rounded-0 mt-0  py-5 text-left pl-5" style={{ backgroundColor:'#553584', border: 'none' }}> <i className="fas fa-hand-holding-heart"></i> { t('experiences') }</button></Link>
          <Link to="/technology" ><button type="button" className="btn btn-primary btn-lg btn-block rounded-0 mt-0  py-5 text-left pl-5" style={{ backgroundColor:'#603F93', border: 'none' }}><i className="fas fa-laptop-code"></i> { t('technology') }</button></Link>
          <Link to="/professionalservice" ><button type="button" className="btn btn-secondary btn-lg btn-block rounded-0 mt-0  py-5 text-left pl-5" style={{ backgroundColor:'#6A49AA', border: 'none' }}><i className="fas fa-user-tie"></i> { t('professional services') }</button></Link>
        </section>

        <Footer {...this.props} />

      </div>
    );
  }
}

const LandingExport = withTranslation()(Landing)

export default connect(mapStateToProps)(LandingExport)