import axios from "axios"

const apiClient = axios.create({
	baseURL: `https://anapioficeandfire.com/api/`,
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	timeout: 10000,
})

export default {
	getCharacterNames(pageSize, page) {
		return apiClient.get("characters?page=" + page + "&pageSize=" + pageSize)
	}

	// sortByAges() {},
	// sortByNames() {},
	// sortByAllegiances() {}
}
