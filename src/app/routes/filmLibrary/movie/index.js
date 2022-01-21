import Api from '../../../services'
import FilmCard from './filmCard';

class Movie {
    constructor() {
        this.state = [];
    }

    getMovie(id) {
        return Api.getMovie(id)
            .then(data => this.state = data.data)
    }

    async film() {
        const url = window.location.hash
        const string = url.replace(/[A-Za-z$-]/g, "");
        const id = string.substr(3)
        await this.getMovie(id)
        return FilmCard(this.state)
    }

    async showComponent() {
        return this.film()
    }
}

export default new Movie()