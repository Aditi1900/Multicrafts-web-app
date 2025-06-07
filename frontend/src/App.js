
import './App.css';
import '../src/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Navbar from './Shared/Navbar';
import About from "./Components/About";
import Workshops from "./Components/Workshops";
import Contact from "./Components/Contact";
import Footer from './Shared/Footer';
//this is just to check if this is connected to Github

function App() {
  return (
     <Router>
     <Navbar />
     <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/workshops" element={<Workshops />} />
       <Route path="/products" element={<Products />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
   </Router>
  );
}

export default App;
