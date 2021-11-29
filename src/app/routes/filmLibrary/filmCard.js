const Card = (films) => {
    const html = '<ul class= swiper-wrapper>' + films.reduce((html, item) => {
        return html + 
            `<li class = swiper-slide>` + 
                `<img src=${item.posterUrl} />` +
                "<div class = title>" + item.title + "</div>" + 
                "<div class = description>" + item.overview + "</div>" +  
            "</li>";
        }, "") + '</ul>';
    
    return html
}

export default Card