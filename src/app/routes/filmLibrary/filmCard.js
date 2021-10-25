const Card = (films) => {

    const html = '<ul>' + films.reduce((html, item) => {
        return html + "<li class = title>" + item.title + "</li>" + "<li class = overview>" + item.overview + "</li>";
        }, "") + '</ul>';

    return html
}

export default Card