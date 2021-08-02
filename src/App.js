import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Catagories from './components/Catagories';
import LiveTV from './components/LiveTV';
import LiveSports from './components/LiveSports';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Subheader />
        <Catagories />
        <LiveTV />
        <LiveSports />
      </header>
    </div>
  );
}

export default App;
