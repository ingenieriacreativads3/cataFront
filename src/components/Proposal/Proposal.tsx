import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next';

import './css/styles.css'

import * as proposalAction from './../../store/actions/proposal'

import { Header } from './../Header'
import { Footer } from './../Footer'

const dollar = require('./img/dollar.png')

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

class Proposal extends React.Component<{}, {
  description: string,
  aceptTC: boolean,
  price: number
}> {

  props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      description: '',
      aceptTC: false,
      price: 0
    };
  }

  descriptionGet = (e: any) => {
    this.setState({ description: e.target.value })
  }

  priceGet = (e: any) => {
    this.setState({ price: e.target.value })
  }

  acceptRegisterGet = (e: any) => {
    
    let accept: boolean = false

    if(!this.state.aceptTC) accept = true

    this.setState({
      aceptTC: accept
    })

  }

  send = () => {

    this.props.dispatch(proposalAction.setProposal(
      this.state.description,
      this.state.aceptTC,
      this.state.price,
      []
    ))
    
  }

  render(){

    const { t } = this.props;

    return(
      <div>
        <ScrollToTopOnMount />
        <Header {...this.props} lng={ this.props.languageReducer.lng }/>

        <section className="main my-4 px-3">
          <div className="container contenedor">
            <div className="row ">
              <h2>{ t('upload your product or service') }</h2>
              <div className="col-lg-12 px-0 mt-3">
                <div className="form-group">
                  <textarea 
                    onChange={ this.descriptionGet } 
                    className="form-control areatexto rounded-0" 
                    id="areatexto" 
                    placeholder={ t('tell us your proposal') }
                    rows={8}
                  />
                </div>
              </div>
              <div className="col-1 col-lg-6"></div>
              <div className="col-3 col-lg-1 precioimagen">
                <span className="signo-pesos">$</span>
              </div>
              <div className="col-8 col-lg-3 precioinputs ">
                <label htmlFor="precio">{ t('enter the price') } <br /> { t('of the service') }</label>
                <input onChange={ this.priceGet } type="text" className="form-control rounded-0" id="precio" name="precio" placeholder="123456" required />
              </div>
              <div className="row">
                <div className="col-lg-8  margentop">
                  <h2>{ t('enter a title for your product or service') }</h2>
                  <div className="form-group mt-3">
                    <textarea rows={1} className="form-control areatexto-titulo rounded-0" id="areatexto" placeholder={ t('title') } ></textarea>
                  </div>
                </div>
                <div className="col-lg-12  margentop">
                  <h2>{ t('select the category to which your product or service belongs') }</h2>
                  <div className="custom-control custom-checkbox mt-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">{ t('knowledge') }</label>
                  </div>
                  <div className="custom-control custom-checkbox my-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" htmlFor="customCheck2">{ t('experiences') }</label>
                  </div>
                  <div className="custom-control custom-checkbox my-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                    <label className="custom-control-label" htmlFor="customCheck3">{ t('technology') }</label>
                  </div>
                  <div className="custom-control custom-checkbox my-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                    <label className="custom-control-label" htmlFor="customCheck4">{ t('professional services') }</label>
                  </div>
                </div>
                <div className="col-lg-12  margentop elegir-subcategoria">
                  <h2>{ t('select the subcategory category (you can choose more than one)') }</h2>
                  <div className="dropdown show mt-3">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      { t('subcategories') }
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" data-value="option1" tabIndex={-1}><input type="checkbox"/>&nbsp;Option 1</a>
                      <a className="dropdown-item" data-value="option2" tabIndex={-1}><input type="checkbox"/>&nbsp;Option 2</a>
                      <a className="dropdown-item" data-value="option3" tabIndex={-1}><input type="checkbox"/>&nbsp;Option 3</a>
                      <a className="dropdown-item" data-value="option4" tabIndex={-1}><input type="checkbox"/>&nbsp;Option 4</a>
                      <a className="dropdown-item" data-value="option5" tabIndex={-1}><input type="checkbox"/>&nbsp;Option 5</a>
                      <a className="dropdown-item" data-value="option6" tabIndex={-1}><input type="checkbox"/>&nbsp;Option 6</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 margentop">
                    <h2>{ t('additional material') }</h2>
                </div>
                <div className="col-12 col-lg-2  cargarproductoDiv">
                  <label className="cargarproducto">
                    <input id="file-select-profile-img" type="file" name="foto" accept="image/*"  />
                    { t('upload') }
                  </label>
                </div>
                <div className="col-12 col-lg-12">
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="checkTyc" required/>
                    <label className="form-check-label" htmlFor="checkTyc" >{ t('i accept terms and conditions') }</label>
                  </div>
                </div>
                <div className="col-12 col-lg-12 botonservicio text-center my-2">
                  <button onClick={ this.send } className="boton">{ t('send') }</button>
                </div>
              </div>
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

const ProposalExport = withTranslation()(Proposal)

export default connect(mapStateToProps)(ProposalExport)