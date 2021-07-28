import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Catagories from './components/Catagories';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Subheader />
        <Catagories />
      </header>
    </div>
  );
}

export default App;
