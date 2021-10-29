import Api from '../../services'
import Card from './filmCard'

const imgUrl = 'https://image.tmdb.org/t/p/w500'

class FilmLibraryPage {
    constructor() {
        this.state = [];
    }

    getPosterUrl(films) {
        const posters = films.map(item => { 
            return {...item, posterUrl: imgUrl + item.poster_path}
        })
        return posters
    }

    getFilmsData() {
        return Api.get()
            .then(data => this.getPosterUrl(data.data.results))
            .then(data => this.state = data)
    }

    prepView() {        
        return Card(this.state)
    }

    async showComponent() {
        await this.getFilmsData()
        const films = this.prepView()
        const nodes = new DOMParser().parseFromString(films, 'text/html');
        const data = nodes.body.childNodes[0]

        const sectionTitle = document.createElement('div')
        const sectionContent = document.createTextNode("What to watch");
        sectionTitle.appendChild(sectionContent);
        sectionTitle.classList.add('section-title')
        data.insertBefore(sectionTitle, data.firstChild);
        return data
    }
}

export default new FilmLibraryPage()