import axios from 'axios';
import config from './config'

export function reintentar() {

	return {
		type: 'REINTENTAR',
		payload: ''
	}

}

export function register(
	email: string,
	pass: string,
	name: string,
	lastName: string,
	identificationNumber: string,
	accept: boolean
) {

	let empresa = 'wings'
	
	let payload: any = axios.post(config.url + '/auth/register?database=' + empresa, {
		email: email,
		password: pass,
		enabled: true,
		name: name,
		surname: lastName,
		dni: identificationNumber,
		aceptTC: accept
	})

	return {
		type: 'REGISTER',
		payload: payload
	}

}

export function registerGoogle(
	email: string,
	name: string,
	image: string,
	googleId: string,
) {

	let empresa = 'wings'
	
	let payload: any = axios.post(config.url + '/auth/registergoogle?database=' + empresa, {
		email,
		name,
		image,
		googleId,
	})

	return {
		type: 'REGISTER_WITH_GOOGLE',
		payload: payload
	}

}

export function registerFacebook(
	email: string,
	name: string,
	image: string,
	facebookId: string,
) {

	let empresa = 'wings'
	
	let payload: any = axios.post(config.url + '/auth/registerfacebook?database=' + empresa, {
		email,
		name,
		image,
		facebookId,
	})

	return {
		type: 'REGISTER_WITH_FACEBOOK',
		payload: payload
	}

}


export function getEmpresa(id:string) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/empresa/' + id)

	return {
		type: 'GET_EMPRESA',
		payload: payload
	}

}

export function updateEmpresa(
	user: string,
	email: string,
	logo:string,
	//pass: string,
	//domicilio:string,
	//telefono:string,
	//provincia:string,
	//ciudad:string,
	//mostrarPerfil:boolean

) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.put(url + '/empresa/id/editar ', {
		empresa: {
			usuario: user,
			email: email,
			logo: logo,

			
		}
	})

	return {
		type: 'UPDATE_EMPRESA',
		payload: payload
	}

}