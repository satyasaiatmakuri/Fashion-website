import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop  from './pages/Shop';
import Contact  from './pages/Contact';
import Cart from './pages/Cart';
import Product from './pages/Product'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Wishlist from './pages/Wishlist';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Kids from './pages/Kids';
import Jewellery from './pages/Jewellery';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Searchbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/> 
          <Route path='/Shop' element={<Shop/>}/> 
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Shop/:id' element={<Product/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/Kids' element={<Kids/>}/>
          <Route path='/Jewelery' element={<Jewellery/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;