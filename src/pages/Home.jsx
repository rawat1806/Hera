import React from 'react'
import Announcement from '../components/Navbar/Announcement'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Navbar/Slider'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home
