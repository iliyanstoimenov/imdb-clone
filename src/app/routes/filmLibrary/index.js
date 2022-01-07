import Api from '../../services'
import Card from './swiperCard'
import swiper from './swiper'
import './filmLibrary.css'

const imgUrl = 'https://image.tmdb.org/t/p/w500'

class FilmLibraryPage {
    constructor() {
        this.state = [];
    }

    getPosterUrl(films) {
        const posters = films.map(item => {
            return { ...item, posterUrl: imgUrl + item.poster_path }
        })
        return posters
    }

    getFilmsData() {
        return Api.list('page=1')
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

        const slider = document.createElement('div')
        slider.classList.add('swiper')
        slider.appendChild(sectionTitle)
        slider.appendChild(data)

        const next = document.createElement('div')
        next.classList.add('swiper-button-next')
        slider.appendChild(next)

        const prev = document.createElement('div')
        prev.classList.add('swiper-button-prev')
        slider.appendChild(prev)

        function reinitSwiper(swiper) {
            setTimeout(function () {
                swiper();
            }, 1);
        }

        reinitSwiper(swiper())

        return slider
    }
}

export default new FilmLibraryPage()