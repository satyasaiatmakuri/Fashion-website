import React from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import { valueitems } from '../records/Values';
import {useParams, Link} from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import '../styles/product.css';

function Product() {
    const{id}=useParams();
    console.log(id);
    const product=temp(parseInt(id));
    console.log(product);
    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }

    

function temp(id){
    return(
        valueitems.filter(temp=>id===temp.id)
    )
} 

    const ShowProduct=()=>{
        return(
            <>
            
                <div className='col-md-6 align-self-center py-4'>
                    <img src={product[0].image} alt={product[0].title} 
                        height="600px" width="100%"/>
                </div>
                <div className='col-md-6 align-self-center'>
                    <h4 className='text-uppercase text-black-50'>
                        {product[0].category}
                    </h4>
                    <h1 className='display-5'>{product[0].title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product[0].rating && product[0].rating.rate}
                        <StarIcon/>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        {product[0].price}₹
                    </h3>
                    <p className='lead'>{product[0].description}</p>
                    <button className='btn btn-outline-dark px-4 py-2'
                       onClick={()=>addProduct(product[0])}
                       >
                        Add to Cart
                    </button>
                    <Link to="/Cart" className='btn btn-dark ms-2 px-3'>
                        Go to Cart
                    </Link>
                </div>
            </>

        )
    }

  return (
    <div>
        <div className='container p-4'>
            <div className='row py-4'>
            <ShowProduct/>
            </div>
        </div>
    </div>
  )
}

export default Product