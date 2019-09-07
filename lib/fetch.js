import fetch from 'isomorphic-fetch'
import { API_ENDPOINT, TEST_API_ENDPOINT } from './constants.js'


const Transport = {

	async fetch(apiPath, opts= {}) {
		const res = await fetch(TEST_API_ENDPOINT+apiPath, {
			... opts,
			headers: {
				...(opts.headers || {})
			}
		})

		return res.json()
	}
}

function throwOnUnauth(response) {
	if (!response.ok && response.status == 401){
		throw new Error("Unauthorized")
	}
	return response
}

export default Transport
