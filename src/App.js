import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop  from './pages/Shop';
import Contact  from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Searchbar/>
        <Routes>        
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/> 
          <Route path='/Shop' element={<Shop/>}/> 
          <Route path='/Contact' element={<Contact/>}/> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;