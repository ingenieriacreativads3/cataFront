import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './css/styles.css'
import { connect } from 'react-redux'

function mapStateToProps(store: {
	Item: {},
}) {
  return {
    Item: store.Item,
  };
}

class Footer extends React.Component<{}, {}> {

  props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  render(){

    const { t } = this.props;

    return(

      <footer className="footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4">
                <h5>{ t('contact') }</h5>
                <div className="separador-footer"></div>
                <i className="fas fa-map-marked-alt"></i> San Martin 3546
                <p><a href="mailto:" className="text-reset"><i className="far fa-envelope"></i> info@wingstratton.com</a></p>
                <p><a href="#" className="text-reset"> <i className="fas fa-mobile-alt"></i> +54 9 221 543-9459</a></p>
              </div>
            </div>
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h5 className="widget-title">
                  { t('us') }
                </h5>
                <div className="separador-footer"></div>
                <p><Link className="text-reset" to="/us">{ t('about us') }</Link></p>
                <p><Link className="text-reset" to="/faq">{ t('asked questions') }</Link></p>
                <p><Link className="text-reset" to="/us#work">{ t('work with us') }</Link></p>
              </div>
            </div>
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h5>{ t('legal') }</h5>
                <div className="separador-footer"></div>
                <p><a className="text-reset" href="#">{ t('terms and conditions') }</a></p>
                <p><a className="text-reset" href="#">{ t('privacy policies') }</a></p>
                <p><a className="text-reset" href="#">{ t('cookies') }</a></p>
              </div>
            </div>
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4">
                <form>
                  <div className="form-group">
                    <h5>{ t('newsletter') }</h5>
                    <div className="separador-footer"></div>
                    <div className="input-group mb-3">
                      <input type="text" 
                        className="form-control form-control-sm" 
                        style={{ fontSize: '1rem' }}
                        placeholder={ t('enter your email') }
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary form-control-sm"
                          type="button" 
                          id="button-addon2"></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-md">
              <div className="ftco-footer-widget mb-4">
                <h5>{ t('blog') }</h5>
                <div className="separador-footer"></div>
                <p><a className="text-reset" href="#">¡{ t('know us') }!</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="rrss">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="iconos-rrss">
                  <a href="#"> <i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i> </a>
                  <a href="#"><i className="fab fa-linkedin-in"></i> </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}



export default connect(mapStateToProps)(Footer)