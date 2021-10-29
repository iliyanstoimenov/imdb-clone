const Card = (films) => {
    const html = '<ul>' + films.reduce((html, item) => {
        return html + 
            "<div class = film>" + 
                `<img src=${item.posterUrl} />` +
                "<li class = title>" + item.title + "</li>" + 
                "<li class = description>" + item.overview + "</li>" +  
            "</div>";
        }, "") + '</ul>';
    
    return html
}

export default Card