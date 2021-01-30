import './App.css';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';

function App() {
  return (
    <div className="App">
      <h1>Gráfica Pernambucana</h1>
      <Produtos/>
      <Carrinho/>
    </div>
  );
}

export default App;
