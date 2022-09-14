import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListaContainer from './components/Lista/ItemListaContainer';
import ItemDetailContainer from './components/listaDetail/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListaContainer titulo="ENCABEZADO" numero={300} />
      <hr/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
