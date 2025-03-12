import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav'
import Products from './components/Products'
import Review from './components/Review'
import Slide from './components/Slide'

function App() {
  return (
    <>
      <div className="container m-5 p-5 border border-gray-400-2">
        <Header />
        <Nav />
        <Review />
        <Products />
        <Footer />
      </div>
    </>
  )
}

export default App
