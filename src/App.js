import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Product from './Components/Product';
import {BrowserRouter as  Router ,Routes, Route} from 'react-router-dom';
import Pinfo from './Components/Pinfo';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    
    <Routes>   
    <Route exact path="/" element={<Home />} />
    <Route exact path="/products" element={<Product />} />
    <Route exact path="/products/:id" element={<Pinfo />} /> 
    </Routes> 
    </Router>
    </>
  );
}


export default App;
