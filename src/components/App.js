import logo from '../assets/logo.png'
import '../styles/App.css'
import Banner from './Banner'
//import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'

function App() {
  return  (<div>
              <Banner>
				        <img src={logo} alt='La maison jungle' className='lmj-logo' />
				        <h1 className='lmj-title'>La maison jungle</h1>
			        </Banner>
			        {/* <Cart /> */}
			        <ShoppingList />
              <QuestionForm />
              <Footer />

            </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bonjour</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  )
}

export default App;