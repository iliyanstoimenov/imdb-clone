import logoIco from '../../assets/logo.svg'
import setFavicons from './favicon';
import burgetMenu from './burgetMenu';

const goTo = (path) => {
    document.querySelector('nav').classList.remove('show')
    document.getElementById('nav-icon').classList.remove('open')
    window.location.href = path
}

function navBar() {
    const header = document.createElement("header")
    header.classList.add('header')

    const container = document.createElement("div")
    container.classList.add('container')

    const burgetMenuNode = new DOMParser().parseFromString(burgetMenu, 'text/html').body.childNodes[0];
    container.appendChild(burgetMenuNode);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.classList.add('nav-links')

    const logo = document.createElement('a');
    logo.href = '#/'
    const logoSVG = document.createElement('img')
    logoSVG.classList.add('logo')
    logoSVG.src = logoIco
    logo.appendChild(logoSVG)
    nav.appendChild(logo)

    const home = document.createElement("li")
    const homeText = document.createTextNode('Home');
    const homeLink = document.createElement("a")
    homeLink.onclick = () => goTo('#/')
    homeLink.appendChild(homeText)
    home.appendChild(homeLink)
    ul.appendChild(home)

    const contact = document.createElement("li")
    const contactText = document.createTextNode('Film Library');
    const contactLink = document.createElement("a")
    contactLink.onclick = () => goTo('#/filmLibrary')
    contactLink.appendChild(contactText)
    contact.appendChild(contactLink)
    ul.appendChild(contact)

    const about = document.createElement("li")
    const aboutText = document.createTextNode('About');
    const aboutLink = document.createElement("a")
    aboutLink.onclick = () => goTo('#/about')
    aboutLink.appendChild(aboutText)
    about.appendChild(aboutLink)
    ul.appendChild(about)

    nav.appendChild(ul)
    container.appendChild(nav)
    header.appendChild(container)

    setFavicons(logoIco);

    return header
}

export default navBar