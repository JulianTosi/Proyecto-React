import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Link } from 'react-router-dom'
import { CartProvider } from './context/cartProvider'
import { ListaItemContainer } from './components/ListaItemsContainer/listaItemContainer'
import { ItemDetailContainer } from './components/ListaDetailsContainer/listaDetailsContainer'



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
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
