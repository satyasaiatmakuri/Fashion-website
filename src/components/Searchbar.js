import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/Searchbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Searchbar() {
  const state=useSelector((state)=> state.handleCart)
  var tot_items=0;
  state.map((product)=> tot_items+=product.qty)
  return (
    <div className='search-bar'>
      <div className='container'> 
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <input type="text" placeholder="Search.." className='search'/>
            <button type="submit" className='search-btn'><SearchIcon fontSize='large'/></button>
            <Link to="/Wishlist" className='like-btn me-2'><FavoriteIcon fontSize='large' style={{ color: "black" }}/></Link>
            <Link to='/Cart'><ShoppingCartIcon fontSize='large' style={{ color: "black" }}/><span className='cart-count'>{tot_items}</span></Link>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default Searchbar
