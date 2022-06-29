import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/Searchbar.css';

function Searchbar() {
  return (
    <div className='search-bar'>
      <div className='container'> 
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <input type="text" placeholder="Search.." className='search'/>
            <button type="submit" className='search-btn'><SearchIcon fontSize='large'/></button>
            <button type='submit' className='like-btn'><FavoriteIcon fontSize='large'/></button>
            <button type='submit' className='cart-btn'><ShoppingCartIcon fontSize='large'/></button>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default Searchbar
