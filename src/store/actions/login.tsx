import axios from 'axios';
import Cookies from 'universal-cookie';
import config from './config'

export function reintentar() {

	return {
		type: 'REINTENTAR',
		payload: {}
	}

}

export function loguear( cookies: Cookies, empresaId: string ) {

	cookies.set('empresaId', empresaId, { path: '/' });

	return {
		type: 'LOGUEAR',
		payload: {}
	}

}

export function set(message: string, user: any, status: number) {

	let payload: any = {
		data: {
			message: message,
			result: user,
			status: status
		}
	}

	return {
		type: 'INGRESAR',
		payload: payload
	}

}

export function login(user: string, pass: string) {

	const empresa = 'wings'
	
	let payload: any = axios.post(config.url + '/auth/login?database=' + empresa, {
		email: user,
		password: pass
	})

	return {
		type: 'INGRESAR',
		payload: payload
	}

}

export function loginGoogle(user: string, pass: string) {

	const empresa = 'wings'
	
	let payload: any = axios.post(config.url + '/auth/login?database=' + empresa, {
		email: user,
		password: pass
	})

	return {
		type: 'INGRESAR',
		payload: payload
	}

}

export function loginGoogleFailure(user: string, pass: string) {

	const empresa = 'wings'
	
	let payload: any = axios.post(config.url + '/auth/login?database=' + empresa, {
		email: user,
		password: pass
	})

	return {
		type: 'INGRESAR',
		payload: payload
	}

}

export function loginFacebook(user: string, pass: string) {

	const empresa = 'wings'
	
	let payload: any = axios.post(config.url + '/auth/login?database=' + empresa, {
		email: user,
		password: pass
	})

	return {
		type: 'INGRESAR',
		payload: payload
	}

}

export async function register(empresa: {
	empresa: {
		nombre: string,
		cuit: string,
		usuario: string,
		clave: string,
		email: string,
		rubros: [
				null
		]
	}
}) {

	let url: string = 'http://127.0.0.1:8000';
	let payload: any

	await axios.post(url + '/registro', empresa)
	.then((response) => {
		console.log(response);
		payload = response
	})
	.catch((err) => {
		console.log(err);
		payload = err
	});

	console.log('estoy en apiWork, y su payload es:' + payload);

	return {
			type: 'API_WORK',
			payload: 'payload'
	}

}