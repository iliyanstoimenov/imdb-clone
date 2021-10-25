import Api from '../../services'
import Card from './filmCard'

class FilmLibraryPage {
    constructor() {
        this.state = [];
    }

    getData() {
        return Api.get()
            .then(data => this.state = data.data.results)
    }

    prepView() {        
        return Card(this.state)
    }

    async showComponent() {
        await this.getData()
        const films = this.prepView()
        const nodes = new DOMParser().parseFromString(films, 'text/html');
        const data = nodes.body.childNodes[0]
        return data
    }
}

export default new FilmLibraryPage()