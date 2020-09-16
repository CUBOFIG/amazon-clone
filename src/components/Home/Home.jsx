import React from 'react'
import Fondo from '../../img/IMG-2.jpg'
import Products from './components/Products/Products'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home-settings">
        <div className="home-container">
          <img src={Fondo} alt="logo" className="home-background" />
          <div className="home-row">
            <Products
              title="Fuente de poder"
              imagen="https://m.media-amazon.com/images/I/51fj7mL6PKL._AC_SL260_.jpg"
              price={2500}
              rating={3}
            />
            <Products
              title="Razer Base Station Chroma"
              imagen="https://images-na.ssl-images-amazon.com/images/I/31D5UvkUsuL._AC_SY200_.jpg"
              price={1328}
              rating={4}
            />
          </div>
          <div className="home-row">
            <Products
              title="Funko Pop! Movies: IT - Stan"
              imagen="https://images-na.ssl-images-amazon.com/images/I/41RRxaDvDFL._AC_.jpg"
              price={469}
              rating={5}
            />
            <Products
              title="Corsair LL Series LL120 - Ventilador RGB LED PWM con doble bucle de luz de 120 mm"
              imagen="https://images-na.ssl-images-amazon.com/images/I/718X7Mn8rtL._AC_UL270_SR244,270_.jpg"
              price={900.22}
              rating={4}
            />
            <Products
              title="Corsair Iluminación LED para CPU RGB, Commander Pro"
              imagen="https://images-na.ssl-images-amazon.com/images/I/61E5-kr1F-L._AC_UL270_SR270,270_.jpg"
              price={1328}
              rating={4}
            />
          </div>
          <div className="home-row">
            <Products
              title="BenQ ZOWIE XL2411 24 144Hz Monitor para e-Sports de PC con Black eQualizer, Ajuste de Altura"
              imagen="https://images-na.ssl-images-amazon.com/images/I/71%2BiuN7lIyL._AC_UL270_SR270,270_.jpg"
              price={5384}
              rating={4}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
