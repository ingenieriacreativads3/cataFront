import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'

import './css/styles.css'

import { Header } from './../Header'
import { Footer } from './../Footer'

const bienestar = require('./img/bienestar.jpg')
const abogado = require('./img/abogado.jpg')
const arq = require('./img/arq-interiores.jpg')
const contador = require('./img/contador.jpg')
const educacion = require('./img/educacion.jpg')
const eventos = require('./img/eventos.jpg')
const foto = require('./img/foto-video.jpg')
const ingenieria = require('./img/ingenieria.jpg')
const marketing = require('./img/marketing.jpg')
const oficio = require('./img/oficio.jpg')
const salud = require('./img/salud.jpg')
const tecnologia = require('./img/tecnologia.jpg')
const slider1 = require('./img/slider/1.png')
const slider2 = require('./img/slider/2.png')
const slider3 = require('./img/slider/3.png')
const slider4 = require('./img/slider/4.png')
const slider5 = require('./img/slider/5.png')

function ScrollToTopOnMount() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return null;
}

function mapStateToProps(store: {
	loginReducer: any,
	registerReducer: any,
	languageReducer: any
}) {
	return {
		loginReducer: store.loginReducer,
		registerReducer: store.registerReducer,
		languageReducer: store.languageReducer
	};
}

class ProfessionalService extends React.Component<{}, {}> {

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

				<section className="slides">
					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators mb-5">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="d-block w-100" src={ slider1 } alt="First slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={ slider2 } alt="First slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={ slider3 } alt="First slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={ slider4 } alt="First slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={ slider5 } alt="First slide" />
							</div>
						</div>
						<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</section>


				<section className="main mt-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="text-center my-4">
									<p className="h3 ">{ t('we teach you how to solve your problem in 30 seconds') }, <br />
										{ t('from a clogged spout, to the') }
										{ t('agency that will lead your company to success') }.	</p>
									<p className="h3 font-weight-bold">{ t('where do we start') } </p>
								</div>
							</div>
						</div>
						<div className="experiencias my-5">
							<div className="row">

								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ abogado } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Legales</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ arq } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Arquitectura e interiores</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ bienestar } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Bienestar</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ contador } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Contador</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="row">

								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ educacion } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Educación</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ tecnologia } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Tecnología</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ salud } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Salud</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ eventos } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Eventos</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								
							</div>
							<div className="row">

								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ foto } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Foto y Video</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ ingenieria } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Ingeniería</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ marketing } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Marketing</div>

													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ oficio } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('professional services') }</p>
														<div className="name-experiencias pb-2">Oficio</div>

													</div>
												</div>
											</a>
										</div>
									</div>
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

const Export = withTranslation()(ProfessionalService)

export default connect(mapStateToProps)(Export)