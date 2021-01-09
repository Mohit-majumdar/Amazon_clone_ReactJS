import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className = "home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>

            {/* product id, title, price,rating, image */}
            <div className="home__row">
                <Product id = "12345"
                title = "the lean startup"
                price={220}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg" />
                <Product id = "12345"
                title = "the lean startup"
                price={220}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg" />

            
            </div>
            <div className="home__row">
                <Product id = "12345"
                    title = "the lean startup"
                    price={220}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg" />
                <Product id = "12345"
                    title = "the lean startup"
                    price={220}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg" />
                <Product id = "12345"
                title = "the lean startup"
                price={220}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg" />


            </div>
            <div className="home__row">
                <Product id = "12345"
                    title = "the lean startup"
                    price={220}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg" />
            </div>
            </div>
    )
}

export default Home
