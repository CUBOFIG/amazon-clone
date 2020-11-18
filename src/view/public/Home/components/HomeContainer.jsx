import React from 'react'
import Fondo from 'img/IMG-2.jpg'
import P1 from 'img/IMG-2.jpg'
import { useStateValue } from 'container/StateProvider/StateProvider'
import Products from './Products/Products'
import './HomeContainer.scss'
import CategoryContainer from './CategoryContainer/CategoryContainer'
import { Row, Col } from 'reactstrap'
import ProductContainer from './ProductContainer/ProductContainer'


const Home = () => {

  const [{ category }] = useStateValue();

  return (
    <div className="home">
      <div className="home-settings ml-auto mr-auto">
        <div className="home-container">
          <img src={Fondo} alt="logo" className="home-background w-100" />

          <Row className="home-row">
            <Col xs="12" sm="12" md="6" lg="3" className="p-1">
              <CategoryContainer />
            </Col>

            {category.map((data, i) => (
              <Col xs="12" sm="12" md="6" lg="3" className="p-1" key={i}>
                <ProductContainer data={data} />
              </Col>
            ))}

          </Row>

          <Row className="home-row">
            <Col xs="12" sm="12" md="4" lg="6" className="p-1">
              <Products
                title="Funko Pop! Movies: IT - Stan"
                image="https://images-na.ssl-images-amazon.com/images/I/41RRxaDvDFL._AC_.jpg"
                price={469}
                rating={5}
                id={3}
              />
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className="p-1">
              <Products
                title="Corsair LL Series LL120 - Ventilador RGB LED"
                image="https://images-na.ssl-images-amazon.com/images/I/718X7Mn8rtL._AC_UL270_SR244,270_.jpg"
                price={900.22}
                rating={4}
                id={4}
              />
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className="p-1">
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
