import navBar from './menu'
import Routes from './routes'

function App() {
    const navBarMenu = navBar()

    const app = document.createElement("div")
    app.appendChild(navBarMenu)

    const content = document.createElement('div')
    content.classList.add('content')
    app.appendChild(content)

    Routes(content)

    return app
}

export default App