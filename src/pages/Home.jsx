import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Announcement from '../components/Navbar/Announcement'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Navbar/Slider'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
