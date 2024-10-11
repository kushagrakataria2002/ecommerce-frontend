import React from 'react'; 
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"; 
import Home from './components/Home.jsx'; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import About from './components/About.jsx';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App