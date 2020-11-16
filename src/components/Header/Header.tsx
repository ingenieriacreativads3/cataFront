import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import './css/styles.css'

import i18n from '../../i18n';
import config from './../../config'

import { Login } from './../Login'
import { Register } from './../Register'

import * as registerAction from './../../store/actions/register'
import * as loginAction from './../../store/actions/login'
import * as languageAction from './../../store/actions/language'
import * as profileAction from './../../store/actions/profile'

const profile = require('./img/foto-perfil.png')

function mapStateToProps(store: {
  loginReducer: any,
  registerReducer: any,
	languageReducer: any,
	profileReducer: any,
}) {
  return {
    loginReducer: store.loginReducer,
    registerReducer: store.registerReducer,
    languageReducer: store.languageReducer,
    profileReducer: store.profileReducer,
  };
}

class Header extends React.Component<{}, {
  emailLogin: string,
  passLogin: string,
  nameRegister: string,
  lastNameRegister: string,
  emailRegister: string,
  identificationNumberRegister: string,
  passRegister: string,
  acceptRegister: boolean,
  lng: string
}> {

  props: any
	static propTypes: any
  static defaultProps: any
  
  private myRefLogin: React.RefObject<HTMLButtonElement>;
  private myRefRegister: React.RefObject<HTMLButtonElement>;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.myRefLogin = React.createRef();
    this.myRefRegister = React.createRef();
    this.state = {
      emailLogin: '',
      passLogin: '',
      nameRegister: '',
      lastNameRegister: '',
      emailRegister: '',
      identificationNumberRegister: '',
      passRegister: '',
      acceptRegister: false,
      lng: 'es'
    }
  }

  componentDidUpdate() {

    if(!(localStorage.getItem(config.session_token) !== undefined && localStorage.getItem(config.session_token) !== null)) {
      if(this.props.loginReducer.fetched) {
        if(this.props.loginReducer.status === 200) {
          let sessionId: string = this.props.loginReducer?.data?.session?._id || null
          let token: string = this.props.loginReducer?.data?.token?.token || null
          let userId: string = this.props.loginReducer?.data?.user?._id || null

          localStorage.setItem(config.session_token, token)
          localStorage.setItem(config.session_id, sessionId)
          localStorage.setItem(config.session_user, userId)

          this.props.dispatch(profileAction.get(userId))

        } else {
          localStorage.clear()
        }
      } else {
        if(this.props.registerReducer.fetched) {
          if(this.props.registerReducer.status === 200) {
            let sessionId: string = this.props.registerReducer?.data?.session?._id || null
            let token: string = this.props.registerReducer?.data?.token?.token || null
            let userId: string = this.props.registerReducer?.data?.user?._id || null

            localStorage.setItem(config.session_token, token)
            localStorage.setItem(config.session_id, sessionId)
            localStorage.setItem(config.session_user, userId)

            this.props.dispatch(profileAction.get(userId))
          } else {
            localStorage.clear()
          }
        } else {
          localStorage.clear()
        }
      }
    }

    if(this.props.registerReducer.fetched) {
      this.myRefRegister?.current?.click()
    }

  }

  profile = () => {

    let userId: any = ''

    if(localStorage.getItem(config.session_user) !== null) {
      userId = localStorage.getItem(config.session_user)
      this.props.history.push('/profile/' + userId)
    }

  }

  changeLanguage = (lng: string) => {
    
    i18n.changeLanguage(lng);

    this.props.dispatch(languageAction.change(lng))

    this.setState({
      lng: lng
    })

  }

  renderLng = (lng: string) => {
    if(lng === this.state.lng) {
      return ' '
    } else {
      return 'ingles'
    }
  }

  emailLoginGet = (value: string) => {
    this.setState({ emailLogin: value })
  }

  passLoginGet = (value: string) => {
    this.setState({ passLogin: value })
  }

  emailRegisterGet = (value: string) => {
    this.setState({ emailRegister: value })
  }

  passRegisterGet = (value: string) => {
    this.setState({ passRegister: value })
  }

  nameRegisterGet = (value: string) => {
    this.setState({ nameRegister: value })
  }

  lastNameRegisterGet = (value: string) => {
    this.setState({ lastNameRegister: value })
  }

  identificationNumberRegisterGet = (value: string) => {
    this.setState({ identificationNumberRegister: value })
  }

  acceptRegisterGet = (value: boolean) => {
    this.setState({ acceptRegister: value })
  }

  register = () => {

    this.props.dispatch(registerAction.register(
      this.state.emailRegister,
      this.state.passRegister,
      this.state.nameRegister,
      this.state.lastNameRegister,
      this.state.identificationNumberRegister,
      this.state.acceptRegister
    ))
    
  }

  registerGoogle = (response: any) => {

    console.log(response)

    this.props.dispatch(registerAction.registerGoogle(
      response?.profileObj?.email || '',
      response?.profileObj?.name || '',
      response?.profileObj?.imageUrl || '',
      response?.profileObj?.googleId || '',
    ))
    
  }

  registerFacebook = (response: any) => {

    console.log(response)
    
  }

  registerGoogleFailure = (response: any) => {
    
    console.log(response)
    
  }

  registerCallbackFacebook = (response: any) => {

    console.log(response)

    this.props.dispatch(registerAction.registerFacebook(
      response?.userID + '@facebook.com'  || '',
      response?.name  || '',
      response?.picture?.data?.url  || '',
      response?.userID || '',
    ))
    
  }

  loginCallbackFacebook = (response: any) => {

    this.props.dispatch(loginAction.login(
      response?.userID + '@facebook.com'  || '',
      'asd123'
    ))
    
  }

  login = () => {
    
    this.props.dispatch(loginAction.login(
      this.state.emailLogin,
      this.state.passLogin
    ))
    
  }

  loginGoogle = (response: any) => {

    this.props.dispatch(loginAction.login(
      response?.profileObj?.email || '',
      'asd123'
    ))
    
  }

  loginFacebook = (response: any) => {
    
    console.log(response)
    
  }

  loginGoogleFailure = () => {
    
    this.props.dispatch(loginAction.loginGoogleFailure(
      this.state.emailLogin,
      this.state.passLogin
    ))
    
  }

  logout = () => {
    this.props.dispatch(loginAction.reintentar())
    localStorage.clear()
    sessionStorage.clear()
  }

  loginSuccess = () => {

    const { t } = this.props;

    let image: any = profile

    if(
      this.props.profileReducer.fetched &&
      this.props.profileReducer.data &&
      this.props.profileReducer.data.image
    ) {
      image = this.props.profileReducer.data.image
    }

    return <div>
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          <img src={ profile } alt="" style={{ width: '33px' }} />
        </a>
        <div className="dropdown-menu sesion rounded-0 shadow-sm dropdown-menu-right">
          <div className="user-information">
            <div className="user-photo">
              <img src={ profile } alt="" style={{ width: '85px' }} />
              <div className="text-center">
                <button onClick={ this.profile } type="button" className="btn btn-secondary rounded-0 btn-sm" aria-pressed="true">
                  { t('profile') }
                </button>
              </div>
            </div>      

            <div className="user items border-left">
              <a className="dropdown-item" onClick={ this.profile } >{ t('wingcoins') }</a>
              <a className="dropdown-item" onClick={ this.profile } >{ t('data') }</a>
              <a className="dropdown-item" onClick={ this.profile } >{ t('shopping') }</a>
              <a className="dropdown-item" onClick={ this.profile } >{ t('sales') }</a>
              <a className="dropdown-item" onClick={ this.logout } >{ t('log out') }</a>
            </div>
          </div>
        </div>
      </li>
    </div>
  }

  loginFailed = () => {

    const { t } = this.props;

    return <div>
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" 
          href="#" role="button" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-circle"></i>
        </a>
        <div className="dropdown-menu rounded-0 shadow-sm">
          <a className="dropdown-item" data-toggle="modal" data-target="#modal-login" data-whatever="@mdo">{ t('log in') }</a>
          <a className="dropdown-item" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">{ t('sing up') }</a>
        </div>
      </li>
    </div>

  }

  profileView = () => {

    const { t } = this.props;

    if(this.props.loginReducer.fetched) {

      this.myRefLogin?.current?.click()

      return this.loginSuccess()

    } else {
      if( localStorage.getItem(config.session_token) !== undefined && localStorage.getItem(config.session_token) !== null) {

        this.myRefLogin?.current?.click()

        return this.loginSuccess()

      } else {
        if(this.props.registerReducer.fetched) {

          this.myRefRegister?.current?.click()

          return this.loginSuccess()

        } else {
          return this.loginFailed()
        }
      }
    }

  }

  render(){

    const { t } = this.props;

    let loginMsg: string = ''
    let registerMsg: string = ''

    if(!this.props.loginReducer.fetching) {
      loginMsg = this.props.loginReducer.message
    }

    if(this.props.registerReducer.fetched) {
      registerMsg = this.props.registerReducer.message
    }

    if(this.props.lng !== this.state.lng) {
      this.setState({
        lng: this.props.lng
      })
    }

    return(

      <div>

        <header className="header-menu">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'transparent', marginBottom: '0'}}>

              <Link className="navbar-brand" to='/'>
                <img src={require('./img/logo.svg')} width="135" alt="" loading="lazy" />
              </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/knowledge">{ t('knowledge') }</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/experience">{ t('experiences') }</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">{ t('technology') }</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/professionalservice">{ t('professional services') }</Link>
                  </li>
                  
                  { this.profileView() }

                  <li className="nav-item" onClick={() => this.changeLanguage('es')}>
                    <a  className="nav-link shop iconos-menu" ><img className={ this.renderLng('es') } src={require('./img/arg.png')} alt="" style={{ width: '45px' }} /></a>
                  </li>
                  <li className="nav-item" onClick={() => this.changeLanguage('en')}>
                    <a  className="nav-link shop iconos-menu" ><img className={ this.renderLng('en') } src={require('./img/eng.png')} alt="" style={{ width: '45px' }} /></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <Register
          emailRegisterGet={ this.emailRegisterGet }
          passRegisterGet={ this.passRegisterGet }
          nameRegisterGet={ this.nameRegisterGet }
          lastNameRegisterGet={ this.lastNameRegisterGet }
          identificationNumberRegisterGet={ this.identificationNumberRegisterGet }
          acceptRegisterGet={ this.acceptRegisterGet }
          accept={ this.state.acceptRegister }
          registerGet={ this.register }
          registerGoogle={ this.registerGoogle }
          registerFacebook={ this.registerFacebook }
          registerGoogleFailure={ this.registerGoogleFailure }
          registerCallbackFacebook={ this.registerCallbackFacebook }
          registerMsg={ registerMsg }
          myRef={ this.myRefRegister }
          fetched={ this.props.registerReducer.fetched }
          fetching={ this.props.registerReducer.fetching }
        />

        <Login
          emailLoginGet={ this.emailLoginGet }
          passLoginGet={ this.passLoginGet }
          loginGet={ this.login }
          loginMsg={ loginMsg }
          fetched={ this.props.loginReducer.fetched }
          fetching={ this.props.loginReducer.fetching }
          myRef={ this.myRefLogin }
          loginFacebook={ this.loginFacebook }
          loginGoogle={ this.loginGoogle }
          loginGoogleFailure={ this.loginGoogleFailure }
          loginCallbackFacebook={ this.loginCallbackFacebook }
        />

      </div>

    );
  }
}

const HeaderExport = withTranslation()(Header)

export default connect(mapStateToProps)(HeaderExport)