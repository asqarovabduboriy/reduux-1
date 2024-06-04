import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes,  } from 'react-router-dom'
import Cart from './page/Cart/Cart'
import Home from './page/home/Home'
import Like from './page/like/Like'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/like" element={<Like/>}/>
    </Routes>
    </>
  )
}

export default App
