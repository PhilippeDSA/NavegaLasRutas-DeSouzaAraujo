import { BrowserRouter, Routes, Route } from "react-router-dom"

import Error from './components/Error/Error'
import Home from "./components/Home/Home"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Menu from "./components/Menu/Menu"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path='*' element={<Error />} />
          <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
