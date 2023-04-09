
import './App.css'
import Blog from './components/Blog/Blog'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart></Cart>
      <Blog></Blog>
      <ToastContainer></ToastContainer>

    </div>
  )
}

export default App
