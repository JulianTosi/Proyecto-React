import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar/NavBar';
import { CartProvider } from './context/cartProvider'
import { ListaItemContainer } from './pages/ListaItemsContainer/listaItemContainer'
import { ItemDetailContainer } from './pages/ListaDetailsContainer/listaDetailsContainer'
import { Carrito } from './components/Carrito/Carrito'



function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div>
              <ListaItemContainer/>
            </div>} />
          <Route path="bebidas" element={<ListaItemContainer />} />
          <Route path="bebidas/:id" element={<ItemDetailContainer/>} />
          <Route path="carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
