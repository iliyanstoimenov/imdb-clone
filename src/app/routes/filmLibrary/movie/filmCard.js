import './film.css'
import feedbackForm from './feedbackForm'

const imgPath = 'https://image.tmdb.org/t/p/w500'

const FilmCard = (filmData) => {

    const { poster_path } = filmData

    const data = {...filmData, imgUrl: imgPath + poster_path }

    const html = '<div class=film-wrapper>' +
        `<div class=film-details>` +
            `<div class=title>${data.title}` +
                `<div class=general-details>` +
                `<div>${data.genres[0].name}</div>` +
                `<div>Release Date: ${data.release_date}</div>` +
            `</div>` +
            `</div>` +

            `<div class=voting>` +
                `<div class=rating>` +
                    `<h3>IMDb Rating</h3>` +
                    `<h2>${data.vote_average}/10</h2>` +
                `</div>` +
                `<div class=popularity>` +
                    `<h3>Popularity</h3>` +
                    `<h2>${Math.round(data.popularity)}</h2>` +
                `</div>` +
            `</div>` +
        `</div>`+
        `<div class=film-box>` +
            `<img src=${data.imgUrl} class=film-poster >` +
            `<iframe class=video src="https://www.youtube.com/embed/JfVOs4VSpmA"></iframe>` +
        `</div>`
    '</div>'

    const filmNode = new DOMParser().parseFromString(html, 'text/html');
    const film = filmNode.body.childNodes[0]

    film.appendChild(feedbackForm)

    return film
}

export default FilmCard;