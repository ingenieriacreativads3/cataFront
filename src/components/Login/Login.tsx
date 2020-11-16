import React from 'react';
import { withTranslation } from 'react-i18next';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import './css/styles.css'
import config from './../../config'

import { connect } from 'react-redux'

const logo = require('./img/logo.svg')
const back = require('./img/bg-modal.jpg')

const CLIENT_ID: string = '474204554253-e955f868jfgqp3a02i2gtevmjaubh58f.apps.googleusercontent.com';
const secret: string = 'EWEr9I-udEzw7lVsbOVF1Vpj'

function mapStateToProps(store: {
  loginReducer: any,
}) {
  return {
    loginReducer: store.loginReducer,
  };
}

class Login extends React.Component<{}, {
  isLogined: boolean,
  accessToken: string
}> {

	props: any
	static propTypes: any
  static defaultProps: any
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      isLogined: false,
      accessToken: ''
    };
  }

  emailLoginGet = (e: any) => {
    this.props.emailLoginGet(e.target.value)
  }

  passLoginGet = (e: any) => {
    this.props.passLoginGet(e.target.value)
  }

  login = () => {

    const { t } = this.props;

    if(this.props.fetching) {
      if(this.props.fetched) {
        return <button type="button" className="btn btn-secondary rounded-0"
          aria-pressed="true">{ t('welcome') }</button>
      } else {
        return <button disabled type="button" className="btn btn-secondary rounded-0"
          aria-pressed="true" >
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
        </button>
        
      }
    } else {
      if(this.props.fetched) {
        return <button type="button" className="btn btn-secondary rounded-0"
          aria-pressed="true" onClick={ this.props.loginGet }>{ t('get in') }</button>
      } else {
        return <button type="button" className="btn btn-secondary rounded-0"
          aria-pressed="true" onClick={ this.props.loginGet }>{ t('get in') }</button>
      }
    }

  }

  socialButton = () => {

    return <div className="text-center ingreso-redes">
      { this.loginGoogle() }
      { this.loginFacebook() }
    </div>

  }

  loginFacebook = () => {

    const { t } = this.props;

    if(this.props.fetching) {
      if(this.props.fetched) {
        return <FacebookLogin
          appId="1199686363758102"
          fields="name,email,picture"
          onClick={ this.props.loginFacebook }
          callback={ this.props.loginCallbackFacebook }
          cssClass="btn btn-secondary rounded-0 facebook"
          icon="fa fa-facebook px-3"
          textButton=""
        />
      } else {
        return <button disabled type="button" className="btn btn-secondary rounded-0"
          aria-pressed="true" >
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
        </button>
        
      }
    } else {
      if(this.props.fetched) {
        return <FacebookLogin
          appId="1199686363758102"
          fields="name,email,picture"
          onClick={ this.props.loginFacebook }
          callback={ this.props.loginCallbackFacebook }
          cssClass="btn btn-secondary rounded-0 facebook"
          icon="fa fa-facebook px-3"
          textButton=""
        />
      } else {
        return <FacebookLogin
          appId="1199686363758102"
          fields="name,email,picture"
          onClick={ this.props.loginFacebook }
          callback={ this.props.loginCallbackFacebook }
          cssClass="btn btn-secondary rounded-0 facebook"
          icon="fa fa-facebook px-3"
          textButton=""
        />
      }
    }

  }

  loginGoogle = () => {

    const { t } = this.props;

    if(this.props.fetching) {
      if(this.props.fetched) {
        return <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText=''
          onSuccess={ this.props.loginGoogle }
          onFailure={ this.props.loginGoogleFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          render={ renderProps => (
            this.googleButton(renderProps)
          )}
        />
      } else {
        return <button disabled type="button" className="btn btn-secondary rounded-0"
          aria-pressed="true" >
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
        </button>
        
      }
    } else {
      if(this.props.fetched) {
        return <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText=''
          onSuccess={ this.props.loginGoogle }
          onFailure={ this.props.loginGoogleFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          render={ renderProps => (
            this.googleButton(renderProps)
          )}
        />
      } else {
        return <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText=''
          onSuccess={ this.props.loginGoogle }
          onFailure={ this.props.loginGoogleFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          render={ renderProps => (
            this.googleButton(renderProps)
          )}
        />
      }
    }

  }

  googleButton = (renderProps: any) => {
    return <button
      type="button"
      className="btn btn-secondary rounded-0 gmail"
      aria-pressed="true"
      onClick={ renderProps.onClick }
      disabled={ renderProps.disabled }
    >
      <i className="fab fa-google" />
    </button>
  }

  loginG = (response: any) => {

    console.log(response)

  }

  logout = () => {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    localStorage.clear()
    sessionStorage.clear()
  }

  handleLoginFailure = (response: any) => {
    console.log(response)
    alert('Failed to log in')
  }

  handleLogoutFailure = () => {
    alert('Failed to log out')
  }


  render(){

    const { t } = this.props;

    return(
      <div>

        <div className="modal fade" id="modal-login" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div id="bg-modal" style={{ backgroundImage: `url(${back})` }} className="modal-content rounded-0 border-0 shadow-sm">
              <div className="modal-header border-0">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={this.props.myRef}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="text-center"><img src={logo} width="140" alt="" loading="lazy" /></div>
              <div className="modal-body">



                <div className="row justify-content-center align-items-center">
                  <div className="col-md-8">
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control rounded-0" 
                          id="formGroupExampleInput" placeholder={ t('email') } onChange={ this.emailLoginGet }  />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control rounded-0" id="formGroupExampleInput2"
                          placeholder={ t('password') } onChange={ this.passLoginGet }/>
                      </div>
                    </form>

                    <div>{ this.props.loginMsg }</div>

                  </div>
                </div>

                <div className="text-center my-3">
                  { this.login() }
                  <div className="text-center my-2">
                    <p>{ t('or enter with your social networks') }</p>
                  </div>

                  { this.socialButton() }

                  {/* <div className="text-center ingreso-redes"> */}
                    {  }
                    {/* <button type="button" className="btn btn-secondary rounded-0 gmail" aria-pressed="true">
                      <i className="fab fa-google" />
                    </button> */}
                    
                    {/* <button type="button" className="btn btn-secondary rounded-0 facebook" aria-pressed="true">
                      <i className="fa fa-facebook px-3" />
                    </button>
                  </div> */}

                </div>
                <div className="text-center my-4">
                  <p> { t('have not yet an account') } <a data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" className="text-reset font-weight-bold">
                    { t('sign up now for free') }.</a></p>
                </div>
              </div>

              {/* <div>
                { this.state.isLogined ?
                  <GoogleLogout
                    clientId={ CLIENT_ID }
                    buttonText='Logout'
                    onLogoutSuccess={ this.logout }
                    onFailure={ this.handleLogoutFailure }
                  /> : <GoogleLogin
                    clientId={ CLIENT_ID }
                    buttonText='Login'
                    onSuccess={ this.loginG }
                    onFailure={ this.handleLoginFailure }
                    cookiePolicy={ 'single_host_origin' }
                    responseType='code,token'
                    isSignedIn={true}
                  />
                }

              </div> */}
            </div>
          </div>
        </div>

        

        
      </div>
    );
  }
}

const LoginExport = withTranslation()(Login)

export default connect(mapStateToProps)(LoginExport)