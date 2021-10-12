import Api from '../../services'

class FilmLibraryPage {
    constructor() {
        this.state = [];
    }

    getData() {
        return Api.get()
            .then(data => this.state = data.data.results)
    }

    prepView() {
        const view = '<ul>' + this.state.map(item => {
            return '<li>' + item.title + '</li>';
        }).join('') + '</ul>'

        return view
    }

    async showComponent() {
        await this.getData()
        const view = this.prepView()
        document.querySelector('.content').innerHTML = view
    }
}

export default new FilmLibraryPage()