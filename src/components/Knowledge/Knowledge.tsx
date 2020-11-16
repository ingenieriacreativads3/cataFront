import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'

import './css/styles.css'

import { Header } from './../Header'
import { Footer } from './../Footer'

// const logo = require('./img/logo.svg')
// const bandArg = require('./img/arg.png')
// const bandEngl = require('./img/eng.png')
const educacion = require('./img/educacion.png')
const naturaleza = require('./img/naturaleza.jpg')
// const viajes = require('./img/viajes.jpg')
const bienestar = require('./img/bienestar.jpg')
const gastronomia = require('./img/gastronomia.jpg')
const entretenimiento = require('./img/entretenimiento.jpg')
const ciencia = require('./img/ciencia.jpg')
const craft = require('./img/craft.jpg')
const diseno = require('./img/diseno.jpg')
const finanzas = require('./img/finanzas.jpg')
const foto = require('./img/foto-video.jpg')
const idioma = require('./img/idioma.jpg')
const juegos = require('./img/juegos.jpg')
const legales = require('./img/legales.jpg')
const letras = require('./img/letras.jpg')
const marketing = require('./img/marketing.jpg')
const musica = require('./img/musica.jpg')
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
									<p className="h3 ">{ t('we teach you what you are willing to learn') }.</p>
									<p className="h3 font-weight-bold">{ t('choose where you want to start') } </p>
                </div>
							</div>
            </div>
						<div className="experiencias my-5">
							<div className="row">
								
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ bienestar } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
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
												<img src={ ciencia } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias pb-2">Ciencia</div>
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
												<img src={ craft } alt="" className="img-experiencias" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias pb-2">Craft</div>
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
												<img src={ diseno } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Diseño</div>
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
												<img src={ finanzas } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Finanzas</div>
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
												<img src={ foto } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Foto y Video</div>
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
												<img src={ gastronomia } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Gastronomía</div>
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
												<img src={ idioma } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Idiomas</div>
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
												<img src={ juegos } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Juegos</div>
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
												<img src={ legales } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Legales</div>
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
												<img src={ letras } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Letras</div>
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
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Marketing</div>
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
												<img src={ musica } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Música</div>
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
														<p className="text-uppercase">{ t('knowledge') }</p>
														<div className="name-experiencias">Teconología</div>
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