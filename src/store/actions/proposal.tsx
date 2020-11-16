import axios from 'axios';
import config from './config'

export function setProposal(
	description: string,	
	aceptTC: boolean,
  price: number,
  resource: {
    url: string
  }[]
) {

	let payload: any = axios.post(config.url + '/proposal', {
    description,
    aceptTC,
    price,
    resource
	})
	
  return {
		type: 'SET_PROPOSAL',
		payload: payload
	}

}