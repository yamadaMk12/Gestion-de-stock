import './App.css';
import Navbar from './components/Navbar';
import Client from './components/Client';
import Stock from './components/Stock';
import Vente from './components/Vente';
import Test from './components/Test';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path='/' element={<Stock />}/>
            <Route path='/stock' element={<Stock />}/>
            <Route path='/client' element={<Client />}/>
            <Route path='/vente' element={<Vente />}/>
            <Route path='/test' element={<Test />}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
