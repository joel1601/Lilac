import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Navbar from './Navbar'
import CardRow from './Card'
import Search from './Search'
import Footer from './Footer'

export default function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div sx={{ mt:2 }}>
                <Navbar/>
            </div>
            <div sx={{ mt:2 }}>
                <Carousel />
            </div>
            <div sx={{ mt:2 }}>
                <CardRow />
            </div>
            <div sx={{ mt:2 }}>
                <Search/>
            </div>
            <div sx={{ mt:2 }}>
                <Footer/>
            </div>
        </div>
    )
}
