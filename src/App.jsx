import './App.css'
import { Route,Routes } from 'react-router-dom'
import Pnf from './pages/Cart'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/:id/view' element={<View/>} />
      <Route path='/*' element={<Pnf/>} />
    </Routes>

    {/* Footer */}
    <Footer/>
    </>
  )
}

export default App
