import navBar from './menu'
import Routes from './routes'

function App() {
    const navBarMenu = navBar()

    const app = document.createElement("div")
    app.appendChild(navBarMenu)

    // const a = document.getElementById("toggle")
    // console.log(a)

    // document.getElementById("toggle").addEventListener('click', function() {
    //     document.querySelector('.main-menu').classList.toggle('show');
    //     document.getElementById('nav-icon').classList.toggle('open');
    // }, false);
    
    // document.addEventListener('touchmove', function() {
    //     document.querySelector('.main-menu').classList.remove("show");
    //     document.getElementById('nav-icon').classList.remove('open');
    // }, false);


    const content = document.createElement('div')
    content.setAttribute('id','content')
    content.classList.add('content')
    app.appendChild(content)

    Routes(content)

    return app
}

export default App