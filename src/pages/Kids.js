import React from 'react'
import {valueitems} from '../records/Values';
import {Card, Button} from 'react-bootstrap'
import {Link } from 'react-router-dom'

function Kids() {
    const items=valueitems;
    const filteredproducts=items.filter((item)=>
        item.category==="kid's clothing"
    )
  return (
    <div className='container'>
    <div className='row p-5'>
        {
          filteredproducts.map((product)=>{
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
          })
        }
    </div>
    </div>
  )
}

export default Kids