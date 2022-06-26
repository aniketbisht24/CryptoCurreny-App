import Router from './Router.js';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
