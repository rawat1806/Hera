import React from 'react'
import Arrivals from '../components/Arrivals'
import Categories from '../components/Categories'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import Founder from '../components/Founder'
import Announcement from '../components/Navbar/Announcement'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Navbar/Slider'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Collection/>
            <Categories/>
            <Products/>
            <Arrivals/>
            <Founder/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
