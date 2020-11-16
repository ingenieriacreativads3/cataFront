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

const gastronomia = require('./img/gastronomia.jpg')
const img = require('./img/3688589.jpg')
const wings = require('./img/wings.png')

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

class Item extends React.Component<{}, {}> {

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
        <Header {...this.props} lng={ this.props.languageReducer.lng } />

        <section className="product-view my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 md-12">
                <div className="product-img-container d-flex flex-wrap">
                  <div className="product-img-item"><a href=""><img src={ gastronomia } alt="" /></a></div>
                  <div className="product-img-item"><a href=""><img src={ gastronomia } alt="" /></a></div>
                  <div className="product-img-item"><a href=""><img src={ gastronomia } alt="" /></a></div>
                  <div className="product-img-item"><a href=""><img src={ gastronomia } alt="" /></a></div>
                  <div className="product-img-item"><a href=""><img src={ gastronomia } alt="" /></a></div>
                  <div className="product-img-item"><a href=""><img src={ gastronomia } alt="" /></a></div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="product-photo">
                  <img src={ gastronomia } alt="" className="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-description">
                  <div className="product-text">
                    <span className="text-uppercase product-category px-2 py-2"> Gastronomía</span>
                    <div className="product-title px-2 py-2">
                      <p> Servicio de catering cumpleaños infantiles</p>
                    </div>
                    <div className="product-info px-2 py-2">
                      <p> commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                        consequatd.</p>
                    </div>
                    <div className="product-price px-2 py-2">
                      <p> $6870</p>
                    </div>
                    <div className="my-3"> <button type="button" className="btn btn-secondary rounded-0"
                        aria-pressed="true">{ t('buy') }</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-description my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-title px-2 py-2">
                  <p>{ t('product description') }</p>
                </div>
                <div className="product-info px-2 py-2">
                  <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                    adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie consequatd.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="producto-review ">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center my-3">

              <div className="col-lg-12">
                <div className="product-title px-2 py-2">
                  <p>{ t('opinions about the product/service') }</p>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3 my-4">
                <div className="calification d-flex align-items-center justify-content-center">
                  <span className="points"> 5.0</span>
                </div>
                <div className="points-wings d-flex align-items-center justify-content-center">
                  <div>
                    <img src={ wings } width="30px" alt="" />
                    <img src={ wings } width="30px" alt="" />
                    <img src={ wings } width="30px" alt="" />
                    <img src={ wings } width="30px" alt="" />
                    <img src={ wings } width="30px" alt="" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="based-on">Basado en 140 calificaciones</span></div>
              </div>

              <div className="col-4 col-md-2 col-lg-2 my-4 list-points">
                <span className="">5 Wings</span>
                <span className="">4 Wings</span>
                <span className="">3 Wings</span>
                <span className="">2 Wings</span>
                <span className="">1 Wing</span>

              </div>

              <div className="col-8 col-md-6 col-lg-7 my-4">
                <div className="opinions-bar">

                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={ 0 } aria-valuemin={ 0 } aria-valuemax={ 100 }>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={ 25 } aria-valuemin={ 0 }
                      aria-valuemax={ 100 }></div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={ 50 } aria-valuemin={ 0 }
                      aria-valuemax={ 100 }></div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={ 75 } aria-valuemin={ 0 }
                      aria-valuemax={ 100 }></div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={ 100 } aria-valuemin={ 0 }
                      aria-valuemax={ 100 }></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="producto-review">
          <div className="container">

            <div className="row my-3">
              <div className="col-lg-12">

                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                      aria-controls="nav-home" aria-selected="true">{ t('all') }</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                      aria-controls="nav-profile" aria-selected="false">{ t('positive') }</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                      aria-controls="nav-contact" aria-selected="false">{ t('negative') }</a>
                  </div>
                </nav>
                <div className="tab-content my-5" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">


                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>
                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />

                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>
                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />

                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>


                  </div>


                  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>
                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />

                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>
                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />

                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>


                  </div>



                  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>
                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />

                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>
                    <div className="opinions my-5">
                      <div className="points-wings d-flex justify-content-start my-1">
                        <div>
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />
                          <img src={ wings } width="25px" alt="" />

                        </div>
                      </div>
                      <p className="review-title">Titulo del producto o servicio</p>
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,Lorem ipsum dolor sit amet, consectetuer adipiscing elit,ed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                        eum iriure dolor in hendrerit in vulputate velit esse molestie consequatd.</p>

                      <div className="thumbs my-2"><a href=""><i className="far fa-thumbs-up"></i></a>170<a href=""><i
                            className="far fa-thumbs-down ml-3"></i></a>120</div>
                    </div>


                  </div>


                </div>






              </div>
            </div>





            <div className="row my-3">
              <div className="col-lg-12">
                <div className="product-title-noline px-2 py-2">
                  <p>{ t('leave your comment') }</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea className="form-control areatexto rounded-0" id="areatexto" placeholder={ t('in my experience') }
                    rows={ 8 } />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="my-3 d-flex justify-content-end enviar-opinion">
                  <button type="button"
                    className="btn btn-secondary rounded-0"
                    aria-pressed="true">
                      { t('send') }
                    </button>
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

const ItemExport = withTranslation()(Item)

export default connect(mapStateToProps)(ItemExport)