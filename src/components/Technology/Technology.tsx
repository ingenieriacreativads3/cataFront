import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'

import './css/styles.css'

import { Header } from './../Header'
import { Footer } from './../Footer'

const video = require('./img/video-tecnologia.mp4')
const almacenamiento = require('./img/almacenamiento.jpg')
const database = require('./img/database.jpg')
const desarrolloapps = require('./img/desarrolloapps.jpg')
const hardware = require('./img/hardware.jpg')
const programacion = require('./img/programacion-web.jpg')
const software = require('./img/software.jpg')

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

class Technology extends React.Component<{}, {}> {

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

				<section className="hero">
					<video autoPlay muted loop className="video-hero">
						<source src={ video } type="video/mp4" />
					</video>
					<div className="content-video"></div>
				</section>


				<section className="main mt-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="text-center my-4">
									<p className="h3 ">{ t('we take your business to the cloud') }. </p>
									<p className="h3 font-weight-bold">{ t('let technology take over') }.</p>
                </div>
							</div>
            </div>
						<div className="experiencias my-5">
							<div className="row">
								
								<div className="col-md-3">
									<div className="divider-mobile">
										<div className="contenedor-subcategoria">
											<a>
												<img src={ software } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('technology') }</p>
														<div className="name-experiencias pb-2">Software</div>
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
												<img src={ almacenamiento } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('technology') }</p>
														<div className="name-experiencias pb-2">Almacenamiento</div>
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
												<img src={ database } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('technology') }</p>
														<div className="name-experiencias pb-2">Base de datos</div>
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
												<img src={ desarrolloapps } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('technology') }</p>
														<div className="name-experiencias pb-2">Desarrollo de Apps</div>
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
												<img src={ hardware } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('technology') }</p>
														<div className="name-experiencias pb-2">Hardware</div>
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
												<img src={ programacion } alt="" className="img-experiencias img-fluid" />	 
												<div className="center-elements"> 
													<div className="details-experiencias">
														<p className="text-uppercase">{ t('technology') }</p>
														<div className="name-experiencias pb-2">Programación Web</div>
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

const Export = withTranslation()(Technology)

export default connect(mapStateToProps)(Export)