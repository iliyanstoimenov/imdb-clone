const axios = require('axios');

const api_key = '?api_key=2bc1e341cd074301fc6470eace66f554'
const allFilms = 'https://api.themoviedb.org/3/movie/popular'
const movie = 'https://api.themoviedb.org/3/movie/'


class Api {
    async list(page) {
        try {
            const response = await axios.get(allFilms + api_key + `&${page}`)
            return response
        } catch (err) {
            console.error(err)
        }
    }

    async getMovie(id) {
        try {
            const response = await axios.get(movie + `${id}` + api_key)
            return response
        } catch (err) {
            console.error(err)
        }
    }

    async getVideo() {
        try {
            const response = await axios.get()
            return response
        } catch (err) {
            console.error(err)
        }
    }
}

export default new Api();