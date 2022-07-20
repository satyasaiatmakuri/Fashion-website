import React, { useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Skeleton from '@mui/material/Skeleton';
import {Link} from 'react-router-dom';
import {valueitems} from '../records/Values';

function Shop() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted=true;


  useEffect(() => {
    const getProducts = async () =>{
      setLoading(true);
      const response=valueitems;
      if(componentMounted){
        setData(response);
        setFilter(response);
        setLoading(false);

      }

      return() =>{
        componentMounted = false;
      }
    }

    getProducts();
  }, []);


  const Loading=()=>{
    return(
      <>
          <div className='col-md-3' animation="wave">
            <Skeleton variant="rectangular" height={350} />
          </div>
          <div className='col-md-3' animation="wave">
            <Skeleton variant="rectangular" height={350} />
          </div>
          <div className='col-md-3' animation="wave">
            <Skeleton variant="rectangular" height={350} />
          </div>
          <div className='col-md-3' animation="wave">
            <Skeleton variant="rectangular" height={350} />
          </div>
      </>
    )
  }

  const filterProduct=(cat)=>{
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  const Showproducts = ()=>{
    return(
      <>
    <div className='buttons mb-5 pb-5'>
    <button className='btn btn-outlinr-dark me-2' onClick={()=>setFilter(data)}>All</button>
    <button className='btn btn-outlinr-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's</button>
    <button className='btn btn-outlinr-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's</button>
    <button className='btn btn-outlinr-dark me-2' onClick={()=>filterProduct("Kid's wear")}>Kid's</button>
    <button className='btn btn-outlinr-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
    </div>
    {filter.map((product)=>{
      return(
        <>
          <div className='col-md-3 mb-4'>
            <Card className='h-100 text-center p-4' key={product.id}>
              <Card.Img variant="top" src={product.image} height='250px'/>
                <Card.Body>
                  <Card.Title className='mb-0'>{product.title.substring(0,12)}</Card.Title>
                  <Card.Text className='lead fw-bold'>
                    ₹{product.price}
                  </Card.Text>
                  <Link to={`/Shop/${product.id}`}><Button variant="primary">Buy Now</Button></Link>
                </Card.Body>
            </Card>
          </div>
        </>
      )
    })}
    </>
    );
  };
  return (
    <>
      <div className='container my-5 py-5'>
        <div className='row justify-content-center'>
            {loading ? <Loading/>: <Showproducts/>}
        </div>
      </div>
    </>
  )
}

export default Shop