import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import './css/styles.css'

import * as profileAction from './../../store/actions/profile'

import { Header } from './../Header'
import { Footer } from './../Footer'


const perfilFoto = require('./img/foto-perfil.png')
const logo = require('./img/logo.svg')
const bandArg = require('./img/arg.png')
const bandEngl = require('./img/eng.png')
const dollar = require('./img/dollar.png')

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function mapStateToProps(store: {
  languageReducer: any,
  profileReducer: any
}) {
  return {
    languageReducer: store.languageReducer,
    profileReducer: store.profileReducer
  };
}

class Profile extends React.Component<{}, {
  name: string,
  surname: string,
  email: string,
  dni: string,
  wingcoins: string,
  phone: string,
}> {

  props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      dni: '',
      wingcoins: '',
      phone: '',
    };
  }

  componentWillMount() {
    this.props.dispatch(profileAction.get(this.props.match.params.id))
  }

  componentDidUpdate() {

    const { t } = this.props;

    if (this.props.profileReducer?.fetched) {
      this.setState({
        name: this.props.profileReducer?.data?.name || 'enter your name',
        surname: this.props.profileReducer?.data?.surname || 'enter your last name',
        email: this.props.profileReducer?.data?.email || 'enter your email(p)',
        dni: this.props.profileReducer?.data?.dni || 'enter your dni',
        wingcoins: this.props.profileReducer?.data?.wingcoins || '0',
        phone: this.props.profileReducer?.data?.phone || 'enter your phone',
      })
      this.props.dispatch(profileAction.setear())
    }
  }

  render(){

    const { t } = this.props;

    return(
      <div>
        <ScrollToTopOnMount />
        <Header {...this.props} lng={ this.props.languageReducer.lng }/>

        <section className="main my-4 px-3">
          <div className="container">
            <div className="row title-perfil">
              <h2>{ t('profile') }</h2>
              <div className="col-lg-12 px-0">
                <h3 className="tituloDatos">{ t('data') }</h3>
              </div>
            </div>
            <div className="row perfil">

              <div className="col-lg-2 fotoperfil d-flex align-items-center justify-content-center">
                <div>                                
                  <img id="foto_avatar_persona" className="image" src={ perfilFoto } />
                  <div className="text-center">
                    <label className="subirfoto">
                      <input id="file-select-profile-img" type="file" name="foto" accept="image/*" />
                      { t('change photo') }
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-lg-10 datosperfil"> 
                <label htmlFor="nombre">{ t('name and surname') }</label>
                <input type="text" className="form-control" id="nombre" name="nombre" placeholder={ t(this.state.name) } required />
                <a>{ t('edit') }</a>
                <label htmlFor="email">{ t('email') }</label>
                <input type="text" className="form-control" id="email" name="email" placeholder={ t(this.state.email) } required />
                <a>{ t('edit') }</a>
                <label htmlFor="dni">{ t('dni') }</label>
                <input type="text" className="form-control" id="dni" name="dni" placeholder={ t(this.state.dni) } required />
                <a>{ t('edit') }</a>
                <label htmlFor="telefono">{ t('phone') }</label>
                <input type="text" className="form-control" id="telefono" name="telefono" placeholder={ t(this.state.phone) } required />
                <a>{ t('edit') }</a>
              </div>
            </div>


            <div className="row">
              <h3 className="tituloDatos">{ t('wingcoins amount') }</h3>
            </div>

            <div className="row">
              <div className="col-lg-2 col-sm-6 col-5 py-3 imagenPesos d-flex align-items-center justify-content-center">
                <span className="signo-pesos">$</span>
              </div>
              <div className="col-lg-10 col-sm-6 col-7 estadowingcoins d-flex align-items-center">
                <div>
                  <h2>{ t('your balance is') }</h2>
                  <h1>${this.state.wingcoins},00</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <h3 className="tituloDatos">{ t('shopping') }</h3>
            </div>

            <div className="row">
              <div className="col-lg-10 col-8 detalles">
                <span>Servicio de electricista</span>
              </div>
              <div className="col-lg-2 col-4 detalles d-flex justify-content-end">
                <a href="">{ t('see detail') }</a>
              </div>
              <div className="col-lg-10 col-8 detalles">
                <span>Máquina de cortar el pasto</span>
              </div>
              <div className="col-lg-2 col-4 detalles d-flex justify-content-end">
                <a href="">{ t('see detail') }</a>
              </div>
              <div className="col-lg-12 detalles">
                <span className="gris">Servicio de peluquería a domicilio</span>
              </div>
              <div className="col-lg-12 detalles">
                <span className="gris">Servicio de trámite de ciudadanía italiana</span>
              </div>
              <div className="col-12 col-lg-12 detalles">
                <hr />
                <div className="d-flex justify-content-end">
                  <a className="todo" href="">{ t('see everything') }</a>
                </div>
              </div>

            </div>

            <div className="row">
              <h3 className="tituloDatos">{ t('sales') }</h3>
            </div>

            <div className="row py-3">
              <div className="col-lg-12 col-12 progreso">
                <div className="progress">
                  <div 
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '34%' }}
                    aria-valuenow={ 34 }
                    aria-valuemin={ 0 }
                    aria-valuemax={ 100 }
                  >
                    34%
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-12 botonservicio">
              <Link to="/proposal">
                <button className="boton">{ t('upload your product or service') }</button>
              </Link>
            </div>

          </div>
        </section>
        <div className="float-sm">
          <div className="fl-fl float-faq">
            <i className="fas fa-question"></i>
            <span>{ t('need help') }</span>
          </div>
          <div className="fl-fl float-wp">
            <i className="fab fa-whatsapp"></i>
            <a href="" target="_blank">{ t('write us') }</a>
          </div>
          <div className="fl-fl float-fb">
            <i className="fa fa-facebook"></i>
            <a href="" target="_blank">{ t('write us') }</a>
          </div>
          <div className="fl-fl float-tw">
            <i className="fa fa-twitter"></i>
            <a href="" target="_blank">{ t('write us') }</a>
          </div>
          <div className="fl-fl float-ig">
            <i className="fa fa-instagram"></i>
            <a href="" target="_blank">{ t('write us') }</a>
          </div>
        </div>

        <Footer { ...this.props } />
      </div>
    );
  }
}

const ProfileExport = withTranslation()(Profile)

export default connect(mapStateToProps)(ProfileExport)