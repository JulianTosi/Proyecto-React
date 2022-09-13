import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListaContainer from './components/Lista/ItemListaContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListaContainer titulo="ENCABEZADO" numero={300} />
    </div>
  );
}

export default App;
