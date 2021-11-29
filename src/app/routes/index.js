import homePage from "./home";
import aboutPage from "./about";
import FilmLibraryPage from "./filmLibrary";

async function Routes(content) {
    const getHTML = async () => {
        let html

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

