import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Subheader />
      </header>
    </div>
  );
}

export default App;
