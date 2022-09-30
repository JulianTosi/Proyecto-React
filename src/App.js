import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar/NavBar';
import { CartProvider } from './context/cartProvider'
import { ListaItemContainer } from './pages/ListaItemsContainer/listaItemContainer'
import { ItemDetailContainer } from './pages/ListaDetailsContainer/listaDetailsContainer'
import { Carrito } from './components/Carrito/Carrito'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBar4m30ebWEwjAmtTA7sWC8lh7CVJb5d0",
  authDomain: "coderhouse-ecommerce-5c4d8.firebaseapp.com",
  projectId: "coderhouse-ecommerce-5c4d8",
  storageBucket: "coderhouse-ecommerce-5c4d8.appspot.com",
  messagingSenderId: "800699938033",
  appId: "1:800699938033:web:c88a47e5ec3c908649e550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



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
