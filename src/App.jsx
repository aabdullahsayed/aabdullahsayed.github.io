import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import './App.css'
import Focus from './Components/Focus/Focus.jsx'
import Icon from './Components/Contact-icons/Icon.jsx'

function App() {

    return (
        <div className="container">
            <Header/>
            <About/>
            <Icon/>
            <Focus/>
        </div>
    );

}

export default App
