import axios from 'axios';
import config from './config'
import storage from './../../config'

export function getTrendingItems(
	idEmpresa: string,
	cantidad: number
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/busquedapersonalizada/' + idEmpresa + '/cantidad/' + cantidad)
	
  return {
		type: 'GET_TRENDING_ITEMS',
		payload: payload
	}

}

export function agregarBusqueda(
	idEmpresa: string,	
	idItem: string,
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.post(url + '/agregarbusqueda', {
		empresa: {
			_id: idEmpresa
		},
		item: {
			_id: idItem
		}
	})
	
  return {
		type: 'AGREGAR_BUSQUEDA',
		payload: payload
	}

}

export function deleteItem(
	id:string
) {

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.delete(url + '/item/' + id)
	
  return {
		type: 'DELETE_ITEM',
		payload: payload
	}

}

export function setear() {

	return {
		type: 'SETEAR',
		payload: {}
	}

}

export function reintentar() {

	return {
		type: 'REINTENTAR',
		payload: {}
	}

}

export function search(
	value: string
) {
	
	let payload: any = axios.get(config.url + '/item/search/' + value, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem(storage.session_token),
      'session': localStorage.getItem(storage.session_id)
    }
  })
	
  return {
		type: 'SEARCH',
		payload: payload
	}

}

export function setItem(
	name: string,
	description: string,
	price: string,
	tag: string[],
	tyc: boolean
) {
	
	let payload: any = axios.post(config.url + '/item', {
		name,
		description,
		price,
		tag,
		tyc
	})
	
  return {
		type: 'SET_ITEM',
		payload: payload
	}

}

export function updateItem(
	_id: string,	
	nombre: string,
	precio: string,
	descripcion: string,
	idMagnitud: string,
	mostrarPrecio: boolean,
	foto: string[],
) {

	let url: string = 'http://127.0.0.1:8000';


	
	let payload: any = axios.put(url + '/item', {
		_id,
		nombre,
		precio,
		descripcion,
		idMagnitud,
		mostrarPrecio,
		foto
	})
	
  return {
		type: 'UPDATE_ITEM',
		payload: payload
	}

}

export function getItem(id: string){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/item/' + id)
        
	return {
		type: 'GET_ITEM',
		payload: payload
	}

}

export function getCatalogo(id: string){

	let url: string = 'http://127.0.0.1:8000';
	
	let payload: any = axios.get(url + '/empresa/' + id + '/catalogo/items')
        
	return {
		type: 'GET_CATALOGO',
		payload: payload
	}

}


