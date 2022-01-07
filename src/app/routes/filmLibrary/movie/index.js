import Api from '../../../services'
import FilmCard from './filmCard';

const imgUrl = 'https://image.tmdb.org/t/p/w500'

class Movie {
    constructor() {
        this.state = [];
    }

    // getPosterUrl(films) {
    //     const posters = films.map(item => {
    //         return { ...item, posterUrl: imgUrl + item.poster_path }
    //     })
    //     return posters
    // }

    getMovie(id) {
        return Api.getMovie(id)
            .then(data => this.state = data.data)
    }

    async showComponent() {
        const url = window.location.hash
        const string = url.replace(/[A-Za-z$-]/g, "");
        const id = string.substr(3)
        await this.getMovie(id)
        return FilmCard(this.state)
    }
}

export default new Movie()