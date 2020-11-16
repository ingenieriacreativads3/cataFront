import React from 'react';
import { withTranslation } from 'react-i18next';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import './css/styles.css'

import { connect } from 'react-redux'

const logo = require('./img/logo.svg')
const back = require('./img/bg-modal.jpg')

const CLIENT_ID: string = '474204554253-e955f868jfgqp3a02i2gtevmjaubh58f.apps.googleusercontent.com';
const secret: string = 'EWEr9I-udEzw7lVsbOVF1Vpj'

function mapStateToProps(store: {
  login: any,
}) {
  return {
    login: store.login,
  };
}

class Register extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  emailRegisterGet = (e: any) => {
    this.props.emailRegisterGet(e.target.value)
  }

  nameRegisterGet = (e: any) => {
    this.props.nameRegisterGet(e.target.value)
  }

  lastNameRegisterGet = (e: any) => {
    this.props.lastNameRegisterGet(e.target.value)
  }

  identificationNumberRegisterGet = (e: any) => {
    this.props.identificationNumberRegisterGet(e.target.value)
  }

  passRegisterGet = (e: any) => {
    this.props.passRegisterGet(e.target.value)
  }

  acceptRegisterGet = (e: any) => {
    
    let accept: boolean = false

    if(!this.props.accept) accept = true

    this.props.acceptRegisterGet(accept)

  }

  registerGoogle = () => {

    const { t } = this.props;

    if(this.props.fetching) {
      if(this.props.fetched) {
        return <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText=''
          onSuccess={ this.props.registerGoogle }
          onFailure={ this.props.registerGoogleFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          render={(renderProps: any) => (
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
          onSuccess={ this.props.registerGoogle }
          onFailure={ this.props.registerGoogleFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          render={(renderProps: any) => (
            this.googleButton(renderProps)
          )}
        />
      } else {
        return <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText=''
          onSuccess={ this.props.registerGoogle }
          onFailure={ this.props.registerGoogleFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          render={(renderProps: any) => (
            this.googleButton(renderProps)
          )}
        />
      }
    }

  }

  registerFacebook = () => {

    const { t } = this.props;

    if(this.props.fetching) {
      if(this.props.fetched) {
        return <FacebookLogin
          appId="1199686363758102"
          fields="name,email,picture"
          onClick={ this.props.registerFacebook }
          callback={ this.props.registerCallbackFacebook }
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
          onClick={ this.props.registerFacebook }
          callback={ this.props.registerCallbackFacebook }
          cssClass="btn btn-secondary rounded-0 facebook"
          icon="fa fa-facebook px-3"
          textButton=""
        />
      } else {
        return <FacebookLogin
          appId="1199686363758102"
          fields="name,email,picture"
          onClick={ this.props.registerFacebook }
          callback={ this.props.registerCallbackFacebook }
          cssClass="btn btn-secondary rounded-0 facebook"
          icon="fa fa-facebook px-3"
          textButton=""
        />
      }
    }

  }

  socialButton = () => {
    return <div className="text-center ingreso-redes mb-2">
      { this.registerGoogle() }
      { this.registerFacebook() }
    </div>
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

  facebookButton = (renderProps: any) => {
    return <button
      type="button"
      className="btn btn-secondary rounded-0 facebook"
      aria-pressed="true"
      onClick={ renderProps.onClick }
    >
      <i className="fa fa-facebook px-3" />
    </button>
  }

  register = () => {

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
        return <button
          type="submit"
          className="btn btn-secondary rounded-0"
          aria-pressed="true" 
          onClick={ this.props.registerGet }
        >
          { t('sing up') }
        </button>
      } else {
        return <button
          type="submit"
          className="btn btn-secondary rounded-0"
          aria-pressed="true" 
          onClick={ this.props.registerGet }
        >
          { t('sing up') }
        </button>
      }
    }

  }

  render(){

    const { t } = this.props;

    return(
      <div>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div id="bg-modal" style={{ backgroundImage: `url(${back})` }} className="modal-content rounded-0 border-0 shadow-sm">
                <div className="modal-header border-0">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={this.props.myRef}>
                    <span aria-hidden="true">&times;</span>
                  </button> </div>
                <div className="text-center my-2">
                  <p className="h5"> { t('dont have an account') } <strong>{ t('create it here 100% free') }.</strong> </p>
                </div>

                <div className="modal-body">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-8">

                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control rounded-0"
                              id="inputtext1" placeholder={ t('name') } onChange={ this.nameRegisterGet } />
                          </div>
                          <div className="form-group col-md-6">
                            <input type="text" className="form-control rounded-0"
                              id="inputtext2" placeholder={ t('surname') } onChange={ this.lastNameRegisterGet } />
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control rounded-0" 
                           id="formGroupExampleInput" placeholder={ t('email') } onChange={ this.emailRegisterGet } />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control rounded-0"
                           id="formGroupExampleInput2" placeholder={ t('dni') } onChange={ this.identificationNumberRegisterGet } />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control rounded-0" id="formGroupExampleInput3"
                            placeholder={ t('password') }  onChange={ this.passRegisterGet } />
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"
                            id="gridCheck" checked={ this.props.accept } onChange={ this.acceptRegisterGet }/>
                          <label className="form-check-label" htmlFor="gridCheck">
                            { t('i accept terms and conditions') }
                          </label>
                        </div>
                      </form>

                      <div>{ this.props.registerMsg }</div>

                    </div>
                  </div>


                  <div className="text-center my-4">
                    { this.register() }
                  </div>
                  <div className="text-center my-3">
                    <p>{ t('or register with your social networks') }</p>
                  </div>
                  { this.socialButton() }


                </div>
              </div>
            </div>
          </div>

        
      </div>
    );
  }
}

const RegisterExport = withTranslation()(Register)

export default connect(mapStateToProps)(RegisterExport)