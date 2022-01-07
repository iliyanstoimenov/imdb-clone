import './film.css'
const imgPath = 'https://image.tmdb.org/t/p/w500'

const FilmCard = (filmData) => {

    const { poster_path } = filmData

    const data = {...filmData, imgUrl: imgPath + poster_path }

    const html = '<div class=film-wrapper>' +
        `<div class=title>${data.title}</div>` +
        `<div class=film-details>` +
            `<div class=general-details>` +
                `<div>${data.genres[0].name}</div>` +
                `<div>Release Date: ${data.release_date}</div>` +
            `</div>` +
            `<div class=voting>` +
                `<div class=rating>` +
                    `<div>IMDb Rating</div>` +
                    `<div>${data.vote_average}</div>` +
                `</div>` +
                `<div class=popularity>` +
                    `<div>Popularity</div>` +
                    `<div>${data.popularity}</div>` +
                `</div>` +
            `</div>` +
        `</div>`+
        `<img src=${data.imgUrl} />` +
    '</div>'

    const node = new DOMParser().parseFromString(html, 'text/html');
    const film = node.body.childNodes[0]

    console.log(data)
    
    return film
}

export default FilmCard