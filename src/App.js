import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Header />
      </header>
    </div>
  );
}

export default App;
