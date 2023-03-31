
import './App.css'
import Blog from './components/Blog/Blog'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart></Cart>
      <Blog></Blog>
    </div>
  )
}

export default App
