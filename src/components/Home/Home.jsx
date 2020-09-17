import React from 'react'
import Fondo from '../../img/IMG-2.jpg'
import Products from './components/Products/Products'
import './Home.scss'
import { Row, Col } from 'reactstrap'

const Home = () => {
  return (
    <div className="home">
      <div className="home-settings ml-auto mr-auto">
        <div className="home-container">
          <img src={Fondo} alt="logo" className="home-background w-100" />

          {/* <Carousel /> */}

          <Row className="home-row">
            <Col xs="12" sm="12" md="6" lg="6" className="p-1">
              <Products
                title="Fuente de poder"
                image="https://m.media-amazon.com/images/I/51fj7mL6PKL._AC_SL260_.jpg"
                price={2500}
                rating={3}
                id={1}
              />
            </Col>

            <Col xs="12" sm="12" md="6" lg="6" className="p-1">
              <Products
                title="Razer Base Station Chroma"
                image="https://images-na.ssl-images-amazon.com/images/I/31D5UvkUsuL._AC_SY200_.jpg"
                price={1328}
                rating={4}
                id={2}
              />
            </Col>
          </Row>

          <Row className="home-row">
            <Col xs="12" sm="12" md="4" lg="4" className="p-1">
              <Products
                title="Funko Pop! Movies: IT - Stan"
                image="https://images-na.ssl-images-amazon.com/images/I/41RRxaDvDFL._AC_.jpg"
                price={469}
                rating={5}
                id={3}
              />
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" className="p-1">
              <Products
                title="Corsair LL Series LL120 - Ventilador RGB LED"
                image="https://images-na.ssl-images-amazon.com/images/I/718X7Mn8rtL._AC_UL270_SR244,270_.jpg"
                price={900.22}
                rating={4}
                id={4}
              />
            </Col>
            <Col xs="12" sm="12" md="4" lg="4" className="p-1">
              <Products
                title="Corsair Iluminación LED para CPU RGB, Commander Pro"
                image="https://images-na.ssl-images-amazon.com/images/I/61E5-kr1F-L._AC_UL270_SR270,270_.jpg"
                price={1328}
                rating={4}
                id={5}
              />
            </Col>
          </Row>
          <Row className="home-row">
            <Col xs="12" sm="12" md="12" lg="12" className="p-1">
              <Products
                title="BenQ ZOWIE XL2411 24 144Hz Monitor para e-Sports de PC con Black eQualizer, Ajuste de Altura"
                image="https://images-na.ssl-images-amazon.com/images/I/71%2BiuN7lIyL._AC_UL270_SR270,270_.jpg"
                price={5384}
                rating={4}
                id={6}
              />
            </Col>
          </Row>

        </div>
      </div>
    </div >
  )
}

export default Home
