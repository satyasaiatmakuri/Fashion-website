import React from 'react'
import { Carousel, Card, CardGroup, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Home() {
  return (
    <div>
      <div className='offer-banner'>
          <h4>Offers here</h4>
          <h2>Including Exciting Products</h2>
          <h1>with tempting prizes</h1>
          <p>Offers are upto 70%</p>
          <Link to="/shop"><Button className='py-2'>Shop here<ArrowRightAltIcon/></Button></Link>
      </div>
      <Carousel fade controls={false} keyboard={true} pause={false} className='carousal-top'>
        <Carousel.Item className='carousel-item'>
          <Link to="/shop"><img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=600"
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
      <div className='row gx-0' >
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
                <Link to="/Kids"><Button variant="info">Look For More</Button></Link>
              </Card.Body>
            </Card>
            <Card className='carditem'>
              <Card.Img className='carditem-photo' variant="top" src="https://th.bing.com/th/id/OIP.y_1HcU4UJjgimJSN3dOZKAHaHa?pid=ImgDet&rs=1"alt='Jewellery' />
              <Card.Body>
                <Card.Title>Made for Your's</Card.Title>
                <Card.Text>
                  Look into for more
                </Card.Text>
                <Link to="/Jewelery"><Button variant='info'>Look For More</Button></Link>
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