import axios from 'axios';

const apiClient = axios.create({
	baseURL: `https://anapioficeandfire.com/api/`,
	withCredentials: false,
	headers: {
	  Accept: 'application/json',
	  'Content-Type': 'application/json'
	},
	timeout: 10000
  })

export default {
	getCharacterNames() {
		return apiClient.get('/characters')
	},

	filterCharacterNames(names) {
		if (!names) {
			return []
		}
		return names.filter((name) => name.name.includes(name))
	}

	// sortByAges() {},
	// sortByNames() {},
	// sortByAllegiances() {}
}