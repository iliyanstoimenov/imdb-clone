import homePage from "./home";
import aboutPage from "./about";
import FilmLibraryPage from "./filmLibrary";
import Movie from './filmLibrary/movie'
import hasNumber from '../../utils/hasNumber';

async function Routes(content) {
    const getHTML = async () => {
        let html

        if (hasNumber(location.hash)) {
            html = await Movie.showComponent()
        }
    
        if (location.hash === '#/filmLibrary') {
            html = await FilmLibraryPage.showComponent()
        }
        if (location.hash === '#/') {
            html = homePage
        }
        if (location.hash === '#/about') {
            html = aboutPage
        }
        return html;
    }

    window.onpopstate = async () => {
        const html = await getHTML();

        content.replaceChildren(html)
    }

    content.replaceChildren(await getHTML());
}

export default Routes

