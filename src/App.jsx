import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from './components/Error/Error'
import Home from "./components/Home/Home"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Cart from "./components/Cart/Cart"

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CarritoProvider } from "./context/carritocontext"

import Menu from "./components/Menu/Menu"
import Checkout from "./components/Checkout/Checkout"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path='*' element={<Error />} />
            <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
