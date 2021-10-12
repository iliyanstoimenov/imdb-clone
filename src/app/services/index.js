const axios = require('axios');

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=2bc1e341cd074301fc6470eace66f554&page=1'

class Api {
    
    async get() {
        try {
            const response = await axios.get(url)
            return response
        } catch (err) {
            console.error(err)
        }
    }
}

export default new Api();