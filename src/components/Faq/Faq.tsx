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

class Faq extends React.Component<{}, {}> {

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

        <div className="container my-5">
          <div className="row d-flex">
            <div className="col-lg-4 faq-title">
              <h2>{ t('asked questions') }</h2>
            </div>
            <div className="col-lg-8">
              <div className="linea-nosotros">   
                <hr />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 faq-questions">
              <h3>¿Pregunta lorem impsum lorem impsum?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat.  </p>
            </div>
            <div className="col-12 faq-questions">
              <h3>¿Pregunta lorem impsum lorem impsum?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat.  </p>
            </div>
            <div className="col-12 faq-questions">
              <h3>¿Pregunta lorem impsum lorem impsum?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat.  </p>
            </div>
            <div className="col-12 faq-questions">
              <h3>¿Pregunta lorem impsum lorem impsum?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat.  </p>
            </div>
            <div className="col-12 faq-questions">
              <h3>¿Pregunta lorem impsum lorem impsum?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat.  </p>
            </div>
            <div className="col-12 faq-questions">
              <h3>¿Pregunta lorem impsum lorem impsum?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam  erat volutpat.  </p>
            </div>
              
          </div>
        </div>

        <Footer {...this.props} />

      </div>
    );
  }
}

const FaqExport = withTranslation()(Faq)

export default connect(mapStateToProps)(FaqExport)