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

const error = require('./img/error.png')

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

class NotFound extends React.Component<{}, {
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
        
        <section className="main d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center text-center">
              <div className="col-lg-12  d-flex justify-content-center align-items-center">
                <div>
                  <img src={ error } alt="" width="600px" className="img-fluid" />
                  <div className="d-flex justify-content-center">
                    <div className="square d-flex justify-content-center align-items-center m-3">
                      <h2>Error 404</h2>
                    </div>
                  </div>
                  <p>{ t('the requested page does not exist') }.<br />
                    Puedes seguir navegando por otras secciones del portal.</p>
                  <a href="https://wingstratton.com">Ir a la página principal</a>

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

const NotFoundExport = withTranslation()(NotFound)

export default connect(mapStateToProps)(NotFoundExport)