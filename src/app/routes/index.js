import homePage from "./home";
import aboutPage from "./about";
import FilmLibraryPage from "./filmLibrary";

async function Routes(content) {

    const routes = {
        '/': homePage,
        '/filmLibrary': await FilmLibraryPage.showComponent(),
        '/about': aboutPage
    };

    window.onpopstate = () => {
        content.innerHTML = routes[window.location.hash.substr(1)];
    }

    content.appendChild(routes[window.location.pathname]);
    // content.innerHTML = routes[window.location.pathname];
}

export default Routes

