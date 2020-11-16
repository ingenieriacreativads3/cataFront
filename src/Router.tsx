import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';

import AppBar from './components/AppBar'

//import { NuevaUnidadMedida } from './components/UnidadMedida'
//import { ValidarSolicitud } from './components/UnidadMedida'
// import { ChatRoom } from './components/Mensajes'
import { PedidoNuevo } from './containers/Compras/Pedido'
import { PresupuestoNuevo } from './containers/Compras - Presupuesto'
import { SolicitudDeValidacion } from './containers/ValidationRequest'
import { MiPerfil } from './containers/Perfil'
import { Footer } from './components/Footer'
import { Presupuestar } from './components/Presupuesto'
import { Presupuestacion } from './containers/Ventas - Presupuesto'
import { Renegociacion } from './containers/Ventas - Presupuesto'
import { Inicio, Busqueda } from './containers/Home'
import { VerDetallePresupuesto } from './components/Presupuesto'
import { Login } from './containers/Login'
import { SolicitudesUnidadMedida, SolicitudDeUnidadDeMedida, NuevaUnidadMedida } from './containers/UnidadMedida'
import { NoAutenticado } from './containers/No Autenticado'
import { Chat } from './containers/Mensajes'
import { Landing } from './components/Landing'
import { Profile } from './components/Profile'
import { Us } from './components/Us'
import { Experience } from './components/Experience'
import { Technology } from './components/Technology'
import { Knowledge } from './components/Knowledge'
import { ProfessionalService } from './components/ProfessionalService'
import { Proposal } from './components/Proposal'
import { ItemList } from './components/ItemList'
import { Item } from './components/Item'
import { Faq } from './components/Faq'
import { NotFound } from './components/NotFound'
import { Catalina } from './components/Catalina'

class App extends React.Component <{}, {}> {

	constructor(props: any) {
		super(props)
	}

	// privateRout(props: { children: any, ...rest: any }) {
	// 	return (
	// 		<Route
	// 			{...props.rest}
	// 			render={({ location }) =>
	// 				fakeAuth.isAuthenticated ? (
	// 					props.children
	// 				) : (
	// 					<Redirect
	// 						to={{
	// 							pathname: "/login",
	// 							state: { from: location }
	// 						}}
	// 					/>
	// 				)
	// 			}
	// 		/>
	// 	);
	// }

	login(props: { path: any, cookies: Cookies, render: any }) {

		props.cookies.remove('empresaId')
		return <Route path='/' render={(propsAux) => <Login {...propsAux} cookies={props.cookies}/>}/>

	}

	enEspera(props: { path: any, cookies: Cookies, render: any }) {

		let isAuth: boolean = false

		console.log(props.cookies.get('empresaId'))

		if(props.cookies.get('empresaId') !== undefined) {
			isAuth = true
		}

		if(isAuth) {
			return <Route path={ props.path } render={ props.render }/>
		} else {
			return <Route path='/' render={(propsAux) => <Login {...propsAux} cookies={props.cookies}/>}/>
		}

	}

	render() {

		const cookies = new Cookies();

		return (
			<Router>
				<div>
					<Switch>
						
													
						<Route component={ Catalina } path='/' />
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App