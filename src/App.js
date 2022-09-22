import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListaContainer from './components/Lista/ItemListaContainer';
import ItemDetailContainer from './components/listaDetail/ItemDetailContainer';
import { Link } from 'react-router-dom'
import { CartProvider } from './context/cartProvider'



function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div>
              <ItemListaContainer />
              <ItemDetailContainer />
              <button><Link to={'/tecnologia/'}>Tecnologia</Link></button>
              <button><Link to={'/bebidas'}>Bebidas</Link></button>
            </div>} />
          <Route path="bebidas" element={<ItemDetailContainer />} />
          <Route path="bebidas/:id" element={<div>estoy en detalle de bebidas</div>} />
          <Route path="tecnologia" element={<ItemListaContainer />} />
          <Route path="tecnologia/:id" element={<div>estoy en detalle de tecnologia</div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
