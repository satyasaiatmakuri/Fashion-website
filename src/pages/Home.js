import React from 'react'
import { Carousel, Card, CardGroup, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <Carousel fade controls={false} keyboard={true} pause={false} className='carousal-top'>
        <Carousel.Item className='carousel-item'>
          <Link to="/shop"><img
            className="d-block w-100"
            src="https://www.kinnevik.com/globalassets/images/3.-our-investments/investments/gfg-2.jpg"
            alt="Shop here"
          /></Link>
          <Carousel.Caption>
            <h3>Grab Your's</h3>
            <p>description </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <Link to="/shop"><img
            className="d-block w-100"
            src="https://www.revolvermag.com/sites/default/files/media/images/article/screen_shot_2017-10-17_at_2.25.33_pm.png"
            alt="Shop here"
          /></Link>

          <Carousel.Caption>
            <h3>Grab Your's</h3>
            <p>description </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <Link to="/shop"><img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/quote-1606764632.jpg?crop=0.894xw:0.299xh;0.0489xw,0&resize=1200:*"
            alt="Shop here"
          /></Link>
        </Carousel.Item>
      </Carousel>
      <div className='row' >
        <div className='col-lg-6 text-center'>
          <Carousel fade controls={false} keyboard={true} pause={false} className='carousal-middle'>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100"
              src="https://g.foolcdn.com/editorial/images/499247/womens-clothing-store.jpg"
              alt="Shop here"
            />
            <Carousel.Caption>
              <h3>Shop the best for your beauty </h3>
              <p>description</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100"
              src="https://www.digitalcommerce360.com/wp-content/uploads/2022/03/shutterstock_2133029393-scaled.jpg"
              alt="Shop here"
            />

            <Carousel.Caption>
            <h3>Shop the best for your beauty </h3>
              <p>description</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/introducing-shop.jpg"
              alt="Shop here"
            />

            <Carousel.Caption>
            <h3>Shop the best for your beauty </h3>
              <p>description</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
        <div className='col-lg-6'>
          <CardGroup className='cardgroup'>
            <Card className='carditem'>
              <Card.Img className='carditem-photo' variant="top" src="https://fashioncentral.pk/wp-content/uploads/2013/09/kids-fashion-accessories-2013.jpg" alt='Baby world' />
              <Card.Body>
                <Card.Title>Made for You</Card.Title>
                <Card.Text>
                  Look into for more
                </Card.Text>
                <Button variant="info">Buy</Button>
              </Card.Body>
            </Card>
            <Card className='carditem'>
              <Card.Img className='carditem-photo' variant="top" src="https://th.bing.com/th/id/OIP.y_1HcU4UJjgimJSN3dOZKAHaHa?pid=ImgDet&rs=1"alt='Jewellery' />
              <Card.Body>
                <Card.Title>Made for Your's</Card.Title>
                <Card.Text>
                  Look into for more
                </Card.Text>
                <Button variant='info'>Buy</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
      <div>
      <Card>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
               <q> STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK </q>
              </p>
            </blockquote>
          </Card.Body>
      </Card>
      </div>
    </div>
  )
}        

export default Home